const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
const fs = require("fs");
const db = require("./models");
dotenv.config();

fs.readdir("poster", (err) => {
  if (err) {
    console.log("poster 폴더를 생성합니다.");
    fs.mkdirSync("poster");
  }
});

const site = "https://mediahub.seoul.go.kr/";
const crawler = async () => {
  try {
    await db.sequelize.sync();
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--window-size=1920,1080", "--disable-notifications"],
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080,
    });
    await page.goto(`${site}competition/competitionList.do`);
    await page.waitFor(4000);
    await page.keyboard.press("Escape");

    const newPost = await page.evaluate(() => {
      const image = Array.from(
        document.querySelectorAll(".contest_list .thum img")
      ).map((v) => v.src);
      const title = Array.from(
        document.querySelectorAll(".contest_list .tit")
      ).map((v) => v.textContent);
      const organizer = Array.from(
        document.querySelectorAll(".contest_list .user")
      ).map((v) => v.textContent);
      const date = Array.from(
        document.querySelectorAll(".contest_list .date")
      ).map((v) => v.textContent);

      return image.map((v, i) => {
        return {
          title: title[i],
          organizer: organizer[i],
          date: date[i],
          image: v,
        };
      });
    });
    console.log(newPost);
    await Promise.all(
      newPost.map((r) => {
        return db.competition.upsert({
          title: r.title,
          organizer: r.organizer,
          date: r.date,
          image: r.image,
        });
      })
    );
  } catch (e) {
    console.log(e);
  }
};

crawler();

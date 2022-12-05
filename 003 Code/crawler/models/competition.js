module.exports = (sequelize, Sequelize) => {
  return sequelize.define("competition", {
    title: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    organizer: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
};

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";
import "antd/dist/antd.css";

const NodeBirde = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>공모</title>
      </Head>

      <Component />
    </>
  );
};

NodeBirde.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBirde);

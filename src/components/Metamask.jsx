import React from "react";

const Metamask = ({ connectToMetamask }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        NFT拍卖平台
      </h1>
      <hr className="my-4" />
      <button
        onClick={connectToMetamask}
        className="btn btn-primary d-flex align-items-center"
        style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
      >
        连接 Metamask{" "}
      </button>
    </div>
  );
};

export default Metamask;

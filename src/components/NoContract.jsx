import React from "react";

const disconnect = () => {
  return (
    <div>
      <h1>未连接...</h1>
      <hr className="my-5" />
      <p className="font-italic">
      请将Metamask连接到运行自定义RPC(如Ganache)的Kovan Testnet或Localhost。
      </p>
    </div>
  );
};

export default disconnect;

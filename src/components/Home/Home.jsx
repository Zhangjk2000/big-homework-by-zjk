import React from 'react';

const Home = ({ accountAddress}) => {
    return (
      <div>
        <p className="display-1">欢迎使用拍卖平台！</p>
        <p className="display-4">账户地址：</p>
        <h4>{accountAddress}</h4>
      </div>
    );
  };

export default Home;
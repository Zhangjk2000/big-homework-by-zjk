import React from "react";

class MyTokenInfo extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="col-md-6">
                    <div key={this.props.NFT.tokenID} className="mt-4">
                      <p>
                        <span className="font-weight-bold">作品ID：</span>{" "}
                        {this.props.NFT.tokenID}
                      </p>
                      <p>
                        <span className="font-weight-bold">作品名：</span>{" "}
                        {this.props.NFT.tokenName}
                      </p>
                      <p>
                        <span className="font-weight-bold">价格：</span>{" "}
                        {window.web3.utils.fromWei(this.props.NFT.price, "Ether")} ETH
                      </p>
                      <p>
                        <span className="font-weight-bold">交易次数：</span>{" "}
                        {this.props.NFT.transNum}
                      </p>
                    </div>
                    {this.props.NFT.onSale ? (
                      <div>
                      <p>
                          <span className="font-weight-bold">最高出价者：</span>{" "}
                          {this.props.Auction.highestBidder}
                      </p>
                      <p>
                          <span className="font-weight-bold">最高价：</span>{" "}
                          {this.props.Auction.highestBid}
                      </p>
                      <p>
                          <span className="font-weight-bold">结束时间：</span>{" "}
                          {this.props.Auction.endTime}
                      </p>
                      {this.props.currentTime >= this.props.Auction.endTime ? (
                        !this.props.Auction.ended ? (
                          <button
                          className="btn btn-outline-success mt-4 w-50"
                          style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                          onClick={ () => {
                            this.props.NFTContract.methods.endAuction(this.props.NFT.tokenID).send({ from: this.props.accountAddress, gas: '3000000'}).on("confirmation", () => {
                              window.location.reload();
                            });
                          }}
                          >
                            结束
                          </button>
                        ) : (
                          <botton
                          className="btn btn-outline-danger mt-4 w-50"
                          style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                          >
                              等待认领
                          </botton>
                        )
                        
                      ) : (
                        <button
                        className="btn btn-outline-success mt-4 w-50"
                        style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                      >
                        未结束
                      </button>
                      )}
                      </div>
                    ) : (
                      <button
                        className="btn btn-outline-success mt-4 w-50"
                        style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                        onClick={ () => {
                          let minBid = prompt("设置起拍价");
                          let duration = prompt("设置持续时间");
                          this.props.NFTContract.methods.beginAuction(this.props.NFT.tokenID, minBid, duration).send({ from: this.props.accountAddress, gas: '3000000'}).on("confirmation", () => {
                            window.location.reload();
                          });
                        }}
                      >
                        出售
                      </button>
                    )}
                  </div>
        )
    }
}

export default MyTokenInfo;
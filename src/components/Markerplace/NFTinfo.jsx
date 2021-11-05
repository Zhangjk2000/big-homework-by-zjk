import React from "react";

class NFTinfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                    <span className="font-weight-bold">铸造者：</span>{" "}
                    {this.props.NFT.mintedBy}
                </p>
                <p>
                    <span className="font-weight-bold">拥有者：</span>{" "}
                    {this.props.NFT.currentOwner}
                </p>
                <p>
                    <span className="font-weight-bold">价格：</span>{" "}
                    {window.web3.utils.fromWei(this.props.NFT.price,"Ether")} ETH
                </p>
                <p>
                    <span className="font-weight-bold">交易次数：</span>{" "}
                    {this.props.NFT.transNum}
                </p>
                {
                    this.props.accountAddress === this.props.NFT.currentOwner ? (
                        !this.props.NFT.onSale ? (
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
                        ) : (
                            <p>
                                <span className="font-weight-bold">结束时间：</span>{" "}
                                {this.props.Auction.endTime}
                            </p>
                        )
                    ) : (
                        this.props.NFT.onSale ? (
                            !this.props.Auction.ended ? (
                                <div>
                                <p>
                                    <span className="font-weight-bold">最高出价者</span> :{" "}
                                    {this.props.Auction.highestBidder}
                                </p>
                                <p>
                                    <span className="font-weight-bold">最高出价</span> :{" "}
                                    {this.props.Auction.highestBid}
                                </p>
                                <botton
                                    className="btn btn-outline-success mt-4 w-50"
                                    style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                                    onClick={ () => {
                                        let bid = prompt("Please input your bid");
                                        this.props.NFTContract.methods.increaseBid(this.props.NFT.tokenID, bid).send({ from: this.props.accountAddress, gas: '3000000'});
                                      }}
                                >
                                    出价
                                </botton>
                                </div>
                            ) : (
                                !this.props.Auction.claimed ? (
                                    this.props.accountAddress === this.props.Auction.highestBidder ? (
                                        <botton
                                            className="btn btn-outline-success mt-4 w-50"
                                            style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                                            onClick={ () =>{
                                                this.props.NFTContract.methods.claimNFT(this.props.NFT.tokenID).send({from: this.props.accountAddress, value: this.props.Auction.highestBid, gas: '3000000'});
                                            }}
                                        >
                                            认领
                                        </botton>
                                    ) : (
                                        <botton
                                            className="btn btn-outline-danger mt-4 w-50"
                                            style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                                        >
                                            等待认领
                                        </botton>
                                    )
                                ) : (
                                    <div></div>
                                )
                            )
        
                        ) : (
                            <botton
                                className="btn btn-outline-danger mt-4 w-50"
                                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                            >
                                暂未拍卖
                            </botton>
                        )
                    )
                }
            </div>
        )
    }
}

export default NFTinfo;
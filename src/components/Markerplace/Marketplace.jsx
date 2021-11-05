import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import NFTinfo from "./NFTinfo";

const Marketplace = ({
    NFTs,
    accountAddress,
    NFTCount,
    NFTContract,
    Auctions,
}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (NFTs.length !== 0) {
            if (NFTs[0].metaData !== undefined) {
                setLoading(loading);
            }
            else {
                setLoading(false);
            }
        }
    }, [NFTs]);

    return (
        <div>
            <div className="card mt-1">
                <div className="display-6">
                    <h1>
                        NFT总数：{NFTCount}
                    </h1>
                </div>
            </div>
            <div className="d-flex flex-wrap mb-2">
                {NFTs.map((NFT) => {
                    return (
                        <div
                            key={NFT.tokenID}
                            className="w-20 p-4 mt-1 border"
                        >
                            <img src={NFT.tokenURI} id="preview_img" width="350px" height="200px" alt=""/>
                            <NFTinfo
                                NFT={NFT}
                                accountAddress={accountAddress}
                                NFTContract={NFTContract}
                                Auction={Auctions[parseInt(NFT.tokenID)-1]}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Marketplace;
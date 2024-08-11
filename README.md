# Mominter : : Decentralized Video Moment Minter

A DApp to allow the user(host) to mint moments as NFT using the contracts deployed on Optimism

![Mominter](https://bafkreibsvdrhg4xrmdeujrz33smda7rziayuzpxb5cggcp4o5633sn4c2a.ipfs.nftstorage.link/)

## Introduction

Mominter is a web3 video project with the aim of helping creators publish exciting video Moments as NFTs  and share them easily while owning their content and possibly making money from it. This project intends to build a web3 Momnet Gallery for everyone around the globe. Users can use the Huddle01 video streaming to record presentation and mint them while storing the Video files on IPFS and Metadata on Filecoin Blockchain. 
Contents can also be streamed live through Huddle01 Live Presentation SDK streams. We use the open zeppelin ERC721 standard, Files are store to IPFS / Filecoin using NFT.Storage and  file metadata URI stored on Filecoin HyperspaceBase Testnet. Upon retrieval, Lighthouse was used to used for encryption and most important, the Access control of Light hoise was used to grant access to member with the membership NFT, Huddle for conference meeting and XMTP for chat and interaction.

## Web 3.0 technologies Used

Frontend: NextJS, postcss, tailwindcss, Theme

Web3 technologies: LightHouse, Huddle01,  IPFS/filecoin, Livepeer (livepeer.js), Web3Modal,  Base Testnet, 
Backend: Solidity, Node.js

Blockchain deployed to:  Base Goerli Testnet

## Description

This project was made using several technologies. The front-end was designed using a server-side-rendering javascript tech known as NextJS. the latest version of Next was used because of how fast it was to build the project.  IPFS / Filecoin's NFT.Storage was used to store user's video on their decentralized storage. videos of various news can be viewed on demand. They can share these Videos to anyone through a sharing mechansism that is easy to copy out the sharing IPFS URL. Huddle01 for video streaming ND CONFERENCE MEETING. Huddle01 was used for conference meeting.

The smart contract uses ERC-721 specification to hold metadata URI, ethers.js was used to interact with the smart contract. The contract was deployed to Base Testnet blockchain. The entire project demo was hosted to Vercel.

## Live DApp hosted on

Live Dapp on Vercel: - <https://mominterbase.vercel.app/>

 Youtube video link: <https://youtu.be/OQpEU-Bzv1g>

## Getting Started

First, run the development server:

```text
clone the repo https://github.com/holyaustin/Mominter-Base.git
# next is to 
npm install
# then
npm run dev
# or
yarn dev
```

Open [http://localhost:3016](http://localhost:3016) with your browser to see the result.

## How to run this project locally

Try running some of the following tasks:

Fork this repo using

git clone 

cd clone dir
npx hardhat node

npx hardhat run scripts/deploy.js --network localhost

npm run build

## How to deploy to op-sepolia  blockchain, update hardhat.config

npx hardhat run scripts/deploy.js --network testnet

## Connect with me and send me a mail

E-mail - holyaustin@yahoo.com

stay connected on twitter @holyaustin

## Verify on Op Sepolia

0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11
Nothing to compile
Successfully submitted source code for contract
contracts/Genic.sol:FileNFT at 0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11
for verification on the block explorer. Waiting for verification result...

Successfully verified contract FileNFT on Etherscan.
https://optimism-sepolia.blockscout.com/address/0x8D36089AB6eFdB3FEb2D8Ed42F7eC80f3c6d2b11#code
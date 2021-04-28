# CryptoDB

Problem Statement: This project organize users' wallets and coins in data
Solution Statement: I have sepereated user, wallet, coin data and made a list of each table so that people can see which user has what coin in which wallet
User: Traders who want to check their asset and their wallet address would use this project
Domain Object: "wallet" object is digital wallet with address. This address indicates that the owner occupies certain block of the blockchain. "coin" represents all different kind of coins available in crypto market. User can buy coin and there is seperate coin wallet for each coin.

Team Member: Kihang Kim (Just Myself)


Project 1
Kihang Kim

1.	cryptoDB
2.	HODLER
3.	Kihang Kim
4.	This project database demonstrates relationship between cryptocurrency and those who use them. It also specifies which cryptocurrency people have in their crypto wallet
5.	https://lucid.app/lucidchart/08fce658-7bc2-43fa-92a6-3fa821332419/view?page=0_0#
6.	There are two kind of users who use cryptocurrency, which is trader and miner. Miner verifies the transaction and solve math problems to mine coin. This process is called proof of work. Amount of proof of work is stored in ‘miner’ table. Traders trade various coins. The total value of these coins are represented in dollar as ‘asset’
7.	‘Wallet’ represents cryptocurrency wallet where coin is saved. Wallet is represented as address, so that people can send money to it. Wallet table also contains the date that the wallet is created. ‘Coin’ table represents type of cryptocurrency
8.	Each trader has crypto wallet. They can have as many wallets as possible, and every single wallet is owned by one owner and one owner only.
9.	Each coin have various wallets, but each wallet can only contain one type of coins because each crypto wallet address can access one specific coin
10.	Integer enumeration is collection of integers from negative infinity to positive infinity. GenreType enumeration represents main usage of each altcoin. Each altcoin is either focused on decentralized finance(Defi), unchangeable token(NFT), or unchanged value(Stable).

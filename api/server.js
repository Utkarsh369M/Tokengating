const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const abi =require('./abi.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

const web3 = new Web3("https://summer-lingering-seed.ethereum-sepolia.discover.quiknode.pro/cd6257462b30c17a89ea1eeb23c46034243d7f53/")
const contractAddress = "0x9A0461428cc93Dde2DC6F025D7a2D9ED7fBbCC51"
const contract = new web3.eth.Contract(abi,contractAddress);
//console.log(contract)

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       console.log(account)
       const numNFTs = await fetchNFTs(account)

       if(numNFTs.userNFTs>0){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft",numNFTs});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})


const PORT=3000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})
const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})
const Web3 = require('web3')

const url = "HTTP://127.0.0.1:7545"

const web3 = new  Web3(url)

const account = "0x59bE31514156F03CA20f97dcc587FC6Bb725CF76"

const contractAddress = "0x4b84d25191ebb364fb00267e1e991a7108a979d8"

const contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			}
		],
		"name": "voteCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidatesToVote",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "candidateToAddress",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCandidates",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "symbol",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

const myContract = new web3.eth.Contract(contractAbi,contractAddress)

console.log(myContract)

myContract.methods.getCandidates().call().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

myContract.methods.voteCandidate("Candidate 1","ZTP").send({from:account},(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})

myContract.methods.candidateToAddress(account).call().then((res)=>{
    console.log("RESULT: "+res.name)
    console.log("RESULT: "+res.symbol)
}).catch((err)=>{
    console.log(err)
})
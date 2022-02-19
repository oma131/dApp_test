window.ethereum.enable();
        var provider = new ethers.providers.Web3Provider(
        web3.currentProvider,
        "ropsten"
        );

        var MoodContractAddress = "0x92F43CFfFdC47a7954E869B322709dAB04859A2c";
        var MoodContractABI = [
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
        var MoodContract
        var signer
        provider.listAccounts().then(function (accounts) {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(
            MoodContractAddress,
            MoodContractABI,
            signer
        );
        });

        async function getMood() {
        getMoodPromise = MoodContract.getMood();
        var Mood = await getMoodPromise;
        console.log(Mood);
        }

        async function setMood() {
        let mood = document.getElementById("mood").value;
        setMoodPromise = MoodContract.setMood(mood);
        await setMoodPromise;
        }

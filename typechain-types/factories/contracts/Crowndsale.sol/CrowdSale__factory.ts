/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CrowdSale,
  CrowdSaleInterface,
} from "../../../contracts/Crowndsale.sol/CrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdt_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByUSDT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetUSDTRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetUSDTToken",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "buyTokenByUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "BNBAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "USDTAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setUSDTToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002026380380620020268339818101604052810190620000379190620002bb565b620000576200004b620000f160201b60201c565b620000f960201b60201c565b836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200032d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620001d781620001c2565b8114620001e357600080fd5b50565b600081519050620001f781620001cc565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022a82620001fd565b9050919050565b6200023c816200021d565b81146200024857600080fd5b50565b6000815190506200025c8162000231565b92915050565b60006200026f82620001fd565b9050919050565b6000620002838262000262565b9050919050565b620002958162000276565b8114620002a157600080fd5b50565b600081519050620002b5816200028a565b92915050565b60008060008060808587031215620002d857620002d7620001bd565b5b6000620002e887828801620001e6565b9450506020620002fb87828801620001e6565b93505060406200030e878288016200024b565b92505060606200032187828801620002a4565b91505092959194509250565b611ce9806200033d6000396000f3fe6080604052600436106100fe5760003560e01c8063610757e411610095578063a98ad46c11610064578063a98ad46c146102b6578063acb03d43146102e1578063c5d156511461031e578063f2fde38b14610347578063fc0c546a14610370576100fe565b8063610757e41461022057806366e226bd1461024b578063715018a6146102745780638da5cb5b1461028b576100fe565b806331927737116100d157806331927737146101bd5780633ccfd60b146101c75780633e3f2359146101de578063592a00e4146101f5576100fe565b8063157fc821146101035780631832d8b61461012e5780631b4622d61461016b5780632be8629914610194575b600080fd5b34801561010f57600080fd5b5061011861039b565b6040516101259190611476565b60405180910390f35b34801561013a57600080fd5b50610155600480360381019061015091906114c2565b6103a1565b6040516101629190611476565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d91906114c2565b6103b8565b005b3480156101a057600080fd5b506101bb60048036038101906101b691906114c2565b610475565b005b6101c5610532565b005b3480156101d357600080fd5b506101dc610792565b005b3480156101ea57600080fd5b506101f3610857565b005b34801561020157600080fd5b5061020a610a11565b6040516102179190611476565b60405180910390f35b34801561022c57600080fd5b50610235610a17565b6040516102429190611530565b60405180910390f35b34801561025757600080fd5b50610272600480360381019061026d919061159b565b610a3d565b005b34801561028057600080fd5b50610289610b34565b005b34801561029757600080fd5b506102a0610bbc565b6040516102ad91906115d7565b60405180910390f35b3480156102c257600080fd5b506102cb610be5565b6040516102d89190611651565b60405180910390f35b3480156102ed57600080fd5b50610308600480360381019061030391906114c2565b610c0b565b6040516103159190611476565b60405180910390f35b34801561032a57600080fd5b50610345600480360381019061034091906114c2565b610c22565b005b34801561035357600080fd5b5061036e60048036038101906103699190611698565b610ee8565b005b34801561037c57600080fd5b50610385610fdf565b6040516103929190611651565b60405180910390f35b60025481565b6000600354826103b191906116f4565b9050919050565b6103c0611005565b73ffffffffffffffffffffffffffffffffffffffff166103de610bbc565b73ffffffffffffffffffffffffffffffffffffffff1614610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042b90611793565b60405180910390fd5b806003819055507fbdaa37e3f6679857d8c3e80d172bd45af732a8658cf1d690c81ca96f5a443b5b8160405161046a9190611476565b60405180910390a150565b61047d611005565b73ffffffffffffffffffffffffffffffffffffffff1661049b610bbc565b73ffffffffffffffffffffffffffffffffffffffff16146104f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e890611793565b60405180910390fd5b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a816040516105279190611476565b60405180910390a150565b6000349050600061054282610c0b565b905060008111610587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057e906117ff565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105e391906115d7565b602060405180830381865afa158015610600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106249190611834565b1015610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065c906118ad565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156106bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b6906118ad565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610727573d6000803e3d6000fd5b50610755600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361100d565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea5033826040516107869291906118cd565b60405180910390a15050565b61079a611005565b73ffffffffffffffffffffffffffffffffffffffff166107b8610bbc565b73ffffffffffffffffffffffffffffffffffffffff161461080e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080590611793565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610854573d6000803e3d6000fd5b50565b61085f611005565b73ffffffffffffffffffffffffffffffffffffffff1661087d610bbc565b73ffffffffffffffffffffffffffffffffffffffff16146108d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ca90611793565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161096d91906115d7565b602060405180830381865afa15801561098a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ae9190611834565b6040518363ffffffff1660e01b81526004016109cb9291906118cd565b6020604051808303816000875af11580156109ea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0e919061192e565b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a45611005565b73ffffffffffffffffffffffffffffffffffffffff16610a63610bbc565b73ffffffffffffffffffffffffffffffffffffffff1614610ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab090611793565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f43036333e58a6f9255617b54ec9f5825590c8ee695a222dc35e5001927f0715181604051610b299190611651565b60405180910390a150565b610b3c611005565b73ffffffffffffffffffffffffffffffffffffffff16610b5a610bbc565b73ffffffffffffffffffffffffffffffffffffffff1614610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba790611793565b60405180910390fd5b610bba6000611093565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060025482610c1b91906116f4565b9050919050565b6000610c2d826103a1565b905081600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610c8b91906115d7565b602060405180830381865afa158015610ca8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccc9190611834565b1015610d0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d04906118ad565b60405180910390fd5b60008111610d50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d47906117ff565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610dac91906115d7565b602060405180830381865afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded9190611834565b1015610e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e25906118ad565b60405180910390fd5b610e7e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685611157565b610eab600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361100d565b7f5c0161fad3fa89cfebd4a74115d9f81661cdd1b9008d05a238ea9d65088e20643382604051610edc9291906118cd565b60405180910390a15050565b610ef0611005565b73ffffffffffffffffffffffffffffffffffffffff16610f0e610bbc565b73ffffffffffffffffffffffffffffffffffffffff1614610f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5b90611793565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fca906119cd565b60405180910390fd5b610fdc81611093565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b61108e8363a9059cbb60e01b848460405160240161102c9291906118cd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506111e0565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6111da846323b872dd60e01b858585604051602401611178939291906119ed565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506111e0565b50505050565b6000611242826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112a79092919063ffffffff16565b90506000815111156112a25780806020019051810190611262919061192e565b6112a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129890611a96565b60405180910390fd5b5b505050565b60606112b684846000856112bf565b90509392505050565b606082471015611304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fb90611b28565b60405180910390fd5b61130d856113d3565b61134c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134390611b94565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516113759190611c25565b60006040518083038185875af1925050503d80600081146113b2576040519150601f19603f3d011682016040523d82523d6000602084013e6113b7565b606091505b50915091506113c78282866113f6565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561140657829050611456565b6000835111156114195782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144d9190611c91565b60405180910390fd5b9392505050565b6000819050919050565b6114708161145d565b82525050565b600060208201905061148b6000830184611467565b92915050565b600080fd5b61149f8161145d565b81146114aa57600080fd5b50565b6000813590506114bc81611496565b92915050565b6000602082840312156114d8576114d7611491565b5b60006114e6848285016114ad565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061151a826114ef565b9050919050565b61152a8161150f565b82525050565b60006020820190506115456000830184611521565b92915050565b6000611556826114ef565b9050919050565b60006115688261154b565b9050919050565b6115788161155d565b811461158357600080fd5b50565b6000813590506115958161156f565b92915050565b6000602082840312156115b1576115b0611491565b5b60006115bf84828501611586565b91505092915050565b6115d18161154b565b82525050565b60006020820190506115ec60008301846115c8565b92915050565b6000819050919050565b600061161761161261160d846114ef565b6115f2565b6114ef565b9050919050565b6000611629826115fc565b9050919050565b600061163b8261161e565b9050919050565b61164b81611630565b82525050565b60006020820190506116666000830184611642565b92915050565b6116758161154b565b811461168057600080fd5b50565b6000813590506116928161166c565b92915050565b6000602082840312156116ae576116ad611491565b5b60006116bc84828501611683565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116ff8261145d565b915061170a8361145d565b92508282026117188161145d565b9150828204841483151761172f5761172e6116c5565b5b5092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061177d602083611736565b915061178882611747565b602082019050919050565b600060208201905081810360008301526117ac81611770565b9050919050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b60006117e9600e83611736565b91506117f4826117b3565b602082019050919050565b60006020820190508181036000830152611818816117dc565b9050919050565b60008151905061182e81611496565b92915050565b60006020828403121561184a57611849611491565b5b60006118588482850161181f565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000611897601c83611736565b91506118a282611861565b602082019050919050565b600060208201905081810360008301526118c68161188a565b9050919050565b60006040820190506118e260008301856115c8565b6118ef6020830184611467565b9392505050565b60008115159050919050565b61190b816118f6565b811461191657600080fd5b50565b60008151905061192881611902565b92915050565b60006020828403121561194457611943611491565b5b600061195284828501611919565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006119b7602683611736565b91506119c28261195b565b604082019050919050565b600060208201905081810360008301526119e6816119aa565b9050919050565b6000606082019050611a0260008301866115c8565b611a0f60208301856115c8565b611a1c6040830184611467565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611a80602a83611736565b9150611a8b82611a24565b604082019050919050565b60006020820190508181036000830152611aaf81611a73565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611b12602683611736565b9150611b1d82611ab6565b604082019050919050565b60006020820190508181036000830152611b4181611b05565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611b7e601d83611736565b9150611b8982611b48565b602082019050919050565b60006020820190508181036000830152611bad81611b71565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611be8578082015181840152602081019050611bcd565b60008484015250505050565b6000611bff82611bb4565b611c098185611bbf565b9350611c19818560208601611bca565b80840191505092915050565b6000611c318284611bf4565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000611c6382611c3c565b611c6d8185611736565b9350611c7d818560208601611bca565b611c8681611c47565b840191505092915050565b60006020820190508181036000830152611cab8184611c58565b90509291505056fea2646970667358221220807865ed4db2686b4c30821ee6089eedfdbc9e57e4cc39d9485e7a8773d566e364736f6c63430008110033";

type CrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdSale__factory extends ContractFactory {
  constructor(...args: CrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrowdSale> {
    return super.deploy(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<CrowdSale>;
  }
  override getDeployTransaction(
    bnb_rate: PromiseOrValue<BigNumberish>,
    usdt_rate: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    icotoken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bnb_rate,
      usdt_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override attach(address: string): CrowdSale {
    return super.attach(address) as CrowdSale;
  }
  override connect(signer: Signer): CrowdSale__factory {
    return super.connect(signer) as CrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdSaleInterface {
    return new utils.Interface(_abi) as CrowdSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdSale {
    return new Contract(address, _abi, signerOrProvider) as CrowdSale;
  }
}
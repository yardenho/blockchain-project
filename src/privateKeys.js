// import fs from "fs";
// var keythereum = require("keythereum");

export let privateKeys = [
  // Yarden's nodes
  // [
  //   "0xa1d68468E8f8091a03bE8D81d45b10017F27838A",
  //   "0xbf3711965a522ec0826d5bcf848f9639b64bac90cad6e6dece440ac6f980caca",
  // ], // the register node
  // [
  //   "0xe350ce02763C2cc593751E4249a77299cB1E95C1",
  //   "0x5910e50f521598de08f0d93a85799a0d85db3d85910199282cc25b711960a324",
  // ],
  // [
  //     "0x2259bB585E0044421c53A3474206a1B00F26c364",
  //     "0xa27cd7179eb7f723b4cb729a44af5b65a28a313bdfe8845109a9c49fc6310923",
  // ],
  // [
  //     "0x1812E355c6c5B0C502a3A14b80E23c9C4bEBd398",
  //     "0xea7df52a815d9631b091407ca30118ab08c9a36ca52198ebf55341cff7a2c299",
  // ],
  // [
  //     "0x3D303257D63E7faADC45b4fFD8D3fA95a696706b",
  //     "0x0ac61c5c9efc09247f84e8e7b8cc059fdac2638b2f0896cd2fe3991f47f37295",
  // ],
  // [
  //     "0xB667D926a81c84B7f3EaA97833Afb7950947fC37",
  //     "0xb530578726a4e5d049904710ffdf3015889975de7092df34f8298532d2881009",
  // ],
  // [
  //     "0x05F96d07D08997fC511f2D03eFb473aDA65Fa7A7",
  //     "0x42f6789b01a2f56719492491f77aba55a4fd79ffba55be47f7f9fd2e917e6514",
  // ],
  // [
  //     "0xAC9df167054fb5059aEd1867C49d69f81E1bb37D",
  //     "0x3263faf6643e478cc259143956161989f51f1d2a00b02cf5c1a047e32a1acb4f",
  // ],
  // [
  //     "0x7105e3F88B2CccC31aD2DdE42872b223d37a469a",
  //     "0xa694ff9383f942098dad6899bea537890457c3abb037a0c4104807ac37866ad3",
  // ],
  // [
  //     "0x49486a7Ec1bA73CdBF52546A3c12e3Ec263e2c1B",
  //     "0x744e7dd0930e1ef81a6cb7fcfa50cf5acac58e7bc2b5a7a0391d253240c2dc90",
  // ],
  // Chen's nodes
  [
    "0x27714De4E323bA9c27d7609699b39eaC689b8A32",
    "0xa3297288069201cc21accd74a51d504273983b612adefda7f2be819572699b0a",
  ], // the register node
  [
    "0x48B90A323aa24268d7cad8CFffE2EfB70D0d3bdd",
    "0x7d5b8ef6002c5eeef5b438c93cf089d24fd844b9fa0109af07bd76f02011424d",
  ],
];
export let index = 1;

export const increaceIndex = () => {
  console.log("index " + index);
  if (index + 1 <= privateKeys.length) {
    index = index + 1;
    return index;
  } else {
    return null;
  }
};

export const addPrivateKey = () => {
  // const KEYSTORE_DIR =
  //     "node2keystoreUTC--2023-04-12T13-56-26.389425900Z--d0d655817d50f0a299ba5adafe6a7383339b63a1";
  // const PASSWORD_FILE = "node2password.txt";
  // for (const file of fs.readdirSync(KEYSTORE_DIR)) {
  //     const keyObject = JSON.parse(
  //         fs.readFileSync(KEYSTORE_DIR + "/" + file, "utf8")
  //     );
  //     const publicAddr = keyObject.address;
  //     const privateKey = keythereum
  //         .recover(fs.readFileSync(PASSWORD_FILE), keyObject)
  //         .toString("hex");
  //     console.log(`0x${publicAddr}: 0x${privateKey}`);
  // }
};

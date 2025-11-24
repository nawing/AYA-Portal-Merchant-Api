// const axios = require("axios");

const { AYAMerchantSDK } = require("../dist/cjs/index");
const { performance } = require('perf_hooks');

async function start() {
  const startTime = performance.now();

  // const AyaMerchantClient = AYAMerchantSDK({
  //   baseUrl: process.env.baseUrl,
  //   appKey: process.env.appKey,
  //   secretKey: process.env.secretKey,
  // })

  const AyaMerchantClient = AYAMerchantSDK({

  })

  /**
   * @loadMethods
   * @loadMethods
   */
  // AyaMerchantClient
  //   .loadMethods()
  //   .then((response) => {
  //     console.log(
  //       JSON.stringify(response)
  //     )
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  /**
   * @createPayment
   * @createPayment
   */
  AyaMerchantClient
    .createPayment({
      merchOrderId: "ORD" + new Date().getTime().toString(),
      amount: "15000",
      timestamp: new Date().getTime(),
      userRef1: "Payment Testing",
      userRef2: "",
      userRef3: "",
      userRef4: "",
      userRef5: "",
      description: "",
      currencyCode: "104",
      channel: "mmqr",
      method: "QR",
      overrideFrontendRedirectUrl: ""
    })
    .then((response) => {
      const endTime = performance.now();
      const latencyMs = (endTime - startTime).toFixed(3);
      console.log(`\n--- Successful ---`);
      console.log(`**Network Latency: ${latencyMs} ms**`);
      console.log(`Response:`, response);
      console.log(`------------------------------\n`);
    })
    .catch((error) => {
      const endTime = performance.now();
      const latencyMs = (endTime - startTime).toFixed(3);
      console.log(`\n--- Failed ---`);
      console.log(`**Network Latency: ${latencyMs} ms**`);
      console.log(`Response:`, error);
      console.log(`------------------------------\n`);
    })
}


start()

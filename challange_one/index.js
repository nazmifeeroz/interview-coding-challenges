const pg = require("./adaptors/pg");

async function refundTokens(tokenBuyers, tokenSellers) {
  // your code here
}

function main() {
  const tokenSellers = [
    {
      tokensSold: 50000,
    },
    {
      tokensSold: 100000,
    },
    {
      tokensSold: 50000,
    },
  ];

  const tokenBuyers = [
    {
      tokensPurchased: 100000,
    },
    {
      tokensPurchased: 140000,
    },
  ];

  const refundedTokens = await refundTokens(tokenSellers, tokenBuyers);

  return refundedTokens;
}

main();

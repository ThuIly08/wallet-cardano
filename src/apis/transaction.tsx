import axios from "axios";

// [ kết quả hàm này
//   {
//     tx_hash: "8788591983aa73981fc92d6cddbbe643959f5a784e84b8bee0db15823f575a5b",
//     tx_index: 6,
//     block_height: 69,
//     block_time: 1635505891,
//   },
//   {
//     tx_hash: "52e748c4dec58b687b90b0b40d383b9fe1f24c1a833b7395cdf07dd67859f46f",
//     tx_index: 9,
//     block_height: 4547,
//     block_time: 1635505987,
//   },
//   {
//     tx_hash: "e8073fd5318ff43eca18a852527166aa8008bee9ee9e891f585612b7e4ba700b",
//     tx_index: 0,
//     block_height: 564654,
//     block_time: 1834505492,
//   },
// ];
export async function getTransactionList(
  address: string | undefined,
  page: number,
) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/addresses/${address}/transactions`,
    {
      headers: {
        project_id: `${import.meta.env.VITE_PROJECT_ID}`,
      },
      params: { page, order: "desc" },
    },
  );
  return res;
}

//fetch data detail của list - dùng Promise.all
export async function getTransactionDetail(txHash: string) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URPK}/txs/${txHash}.utxos`,
    {
      headers: {
        project_id: `${import.meta.env.VITE_PROJECT_ID}`,
      },
    },
  );
  return res;
}

//fetch data all transaction detail
// export async function getAllTransactionDetail(
//   tsHaxh: string,
//   address: string,
//   page: number,
// ) {
//   const resList = await getTransactionList(address, page);
// }

import axios from "axios";

//trả về data của Address (bench32)
export async function getAddressData(address: string | undefined) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/addresses/${address}`,
    {
      headers: {
        project_id: import.meta.env.VITE_PROJECT_ID,
      },
    },
  );
  return res;
}

//trả về UTXOs của address
export async function getAddressUTXOs(address: string | undefined) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/addresses/${address}/utxos?page=1&count=100&order=asc`,
    {
      headers: {
        project_id: import.meta.env.VITE_PROJECT_ID,
      },
    },
  );
  return res;
}

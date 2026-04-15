import axios from "axios";

export async function getAddressData(address: string) {
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

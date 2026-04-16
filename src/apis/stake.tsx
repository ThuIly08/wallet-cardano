import axios from "axios";
//thông tin accumulate rewards và delegated pool tại thời điểm
export async function getRewardsNow(address: string | undefined) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/accounts/${address}`,
    {
      headers: {
        project_id: import.meta.env.VITE_PROJECT_ID,
      },
    },
  );
  return res;
}
//thông tin lịch sử delegated và rewards
export async function getRewardsHistory(address: string | undefined) {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/accounts/${address}/rewards`,
    {
      headers: {
        project_id: import.meta.env.VITE_PROJECT_ID,
      },
    },
  );
  return res;
}

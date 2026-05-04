import { Input, Tabs } from "@mantine/core";
import { notifications, Notifications } from "@mantine/notifications";
import "./App.css";
import { Item, NativeTab, TransactionTab } from "./components";
import { useState } from "react";
import { getAddressData, getAddressUTXOs } from "./apis/address";
import { EternlSvg, LaceSvg, NamiSvg } from "./components/svg";
import { getRewardsNow } from "./apis/stake";

function App() {
  const [address, setAddress] = useState<string | undefined>(undefined);
  //eslint-disable-next-line
  const [dataAddress, setDataAddress] = useState<any>(undefined);
  //eslint-disable-next-line
  const [dataUTXOs, setDataUTXOs] = useState<any>(undefined);
  //eslint-disable-next-line
  const [dataRewards, setDataRewards] = useState<any>(undefined);
  const handleFetchAddressData = async (address: string | undefined) => {
    try {
      const res = await getAddressData(address);
      const resUTXOs = await getAddressUTXOs(address);
      if (res.data) {
        const resReward = await getRewardsNow(res.data.stake_address);
        setDataRewards(resReward.data);
      }
      setDataAddress(res.data);
      setDataUTXOs(resUTXOs.data);
    } catch {
      notifications.show({
        title: "Địa chỉ không hợp lệ",
        message: "Địa chỉ sai định dạng",
        color: "red",
      });
    }
  };
  return (
    <>
      <Notifications
        styles={{
          root: {
            position: "fixed",
            bottom: 8,
            right: 8,
            width: 300,
          },
        }}
      />
      <div className="w-screen flex flex-col items-center gap-5 py-6">
        <div
          className="text-[#141413] font-medium text-[18px] w-186 h-10 items-center flex rounded-xl
      text-left border border-[#1F1E1D26] overflow-hidden"
        >
          <img src="./logoCardano.jpg" className="object-fit w-fit h-full" />
          Cardano Wallet Explorer
        </div>
        <div
          className="text-[#3d3d3a] font-medium text-[14px] px-5 w-186 h-10 items-center flex rounded-xl 
      text-left border border-[#1F1E1D26] bg-[#f5f4ed]"
        >
          Connect browser wallet
          <div className="flex flex-row gap-2 ml-auto items-center text-[#141413] text-[11px]">
            <div className="bg-white px-3 py-1 rounded-full w-fit border border-[#1F1E1D26] flex flex-row items-center gap-1">
              <NamiSvg />
              Nami
            </div>
            <div className="bg-white px-3 py-1 rounded-full w-fit border border-[#1F1E1D26] flex flex-row items-center gap-1">
              <EternlSvg />
              Eternl
            </div>
            <div className="bg-white px-3 py-1 rounded-full w-fit border border-[#1F1E1D26] flex flex-row items-center gap-1">
              <LaceSvg />
              Lace
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-186">
          <Input
            placeholder="Wallet address (Bench32 format)"
            className="w-160"
            size="xs"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <div
            className="cursor-pointer rounded-lg flex-1 w-full 
          border border-[#1f1e1d66] text-[14px] font-medium px-3 py-1 flex justify-center items-center"
            onClick={() => {
              handleFetchAddressData(address);
            }}
          >
            Look up
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-186">
          <Input
            placeholder="Wallet address (stake1 format)"
            className="w-full"
            size="xs"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <div
            className="cursor-pointer rounded-lg w-60
          border border-[#1f1e1d66] text-[14px] font-medium px-3 py-1 flex justify-center items-center"
            onClick={() => {
              console.log("Hello ni");
            }}
          >
            Look up for stake address
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Item
            title="ADA Balance"
            value={
              dataAddress
                ? (
                    Number(dataAddress.amount[0].quantity) / 1_000_000
                  ).toLocaleString("en-US")
                : "N.A"
            }
            subtitle={
              dataAddress
                ? `${Number(dataAddress.amount[0].quantity).toLocaleString("en-US")} Lovelace`
                : "N.A Lovelace"
            }
          />
          <Item
            title="Native tokens"
            value={dataAddress ? String(dataAddress.amount.length - 1) : "N.A"}
          />
          <Item
            title="eUTXO count"
            value={dataUTXOs ? String(dataUTXOs.length) : "N.A"}
            subtitle="unspent outputs"
          />
        </div>
        <div className="flex flex-row items-start gap-3 border border-[#1F1E1D26] rounded-[20px] bg-white px-5 py-3 w-186 h-auto">
          <div className="flex flex-col gap-1 w-30">
            <div className="text-[#3D3D3A] text-[14px] font-medium">
              Stake address
            </div>
            <div className="text-[#141413] text-[12px] break-all">
              {dataAddress ? <div>{dataAddress.stake_address}</div> : "N.A"}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-110">
            <div className="text-[#3D3D3A] text-[14px] font-medium">
              Delegated pool
            </div>
            <div className="text-[#141413] text-[12px] break-all">
              {dataRewards?.pool_id ? <div>{dataRewards.pool_id}</div> : "N.A"}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-40">
            <div className="text-[#3D3D3A] text-[14px] font-medium">
              Accumulate rewards
            </div>
            <div className="text-[#141413] text-[12px]">
              {dataRewards?.withdrawable_amount ? (
                <div>
                  {(
                    Number(dataRewards.withdrawable_amount) / 1000000
                  ).toLocaleString("en-US")}
                </div>
              ) : (
                "N.A"
              )}
            </div>
            <div className="text-[#3D3D3A] text-[14px]">Ready to withdraw</div>
          </div>
        </div>
        <Tabs defaultValue="native" className="w-186">
          <Tabs.List>
            <Tabs.Tab value="native" className="w-93">
              <div className="font-medium text-[13px] text-[#3d3d3a]">
                Native tokens
              </div>
            </Tabs.Tab>
            <Tabs.Tab value="transaction" className="w-93">
              <div className="font-medium text-[13px] text-[#3d3d3a]">
                Transaction history
              </div>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="native">
            <NativeTab />
          </Tabs.Panel>
          <Tabs.Panel value="transaction">
            <TransactionTab />
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}

export default App;

import { Tabs } from "@mantine/core";
import "./App.css";
import { Item, NativeTab, TransactionTab } from "./components";
import { useState } from "react";
import { getAddressData } from "./apis/address";
import { EternlSvg, LaceSvg, NamiSvg } from "./components/svg";

function App() {
  const [dataAddress, setDataAddress] = useState<any>([]);
  const handleFetchAddressData = async (address: string) => {
    try {
      const res = await getAddressData(address);
      setDataAddress(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-screen flex flex-col items-center gap-5 py-6">
      <div
        className="text-[#141413] font-medium text-[18px] w-186 h-10 items-center flex rounded-[12px] 
      text-left border border-[#1F1E1D26] overflow-hidden"
      >
        <img src="./logoCardano.jpg" className="object-fit w-fit h-full" />
        Cardano Wallet Explorer
      </div>
      <div
        className="text-[#3d3d3a] font-medium text-[14px] px-5 w-186 h-10 items-center flex rounded-[12px] 
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
      <div className="flex flex-row items-center gap-3">
        <div>Address mock</div>
        <div>Look up</div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Item title="title1" value="mock value 1" subtitle="subtitle 1" />
        <Item title="title1" value="mock value 1" subtitle="subtitle 1" />
        <Item title="title1" value="mock value 1" subtitle="subtitle 1" />
      </div>
      <div className="flex flex-row items-center gap-3 border border-[#1F1E1D26] rounded-[20px] bg-white px-5 py-3 w-186">
        <div className="flex flex-col gap-1">
          <div className="text-[#3D3D3A] text-[14px] font-medium">
            Stake address
          </div>
          <div className="text-[#141413] text-[12px]">Stake address mock</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#3D3D3A] text-[14px] font-medium">
            Stake address
          </div>
          <div className="text-[#141413] text-[12px]">Stake address mock</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#3D3D3A] text-[14px] font-medium">
            Stake address
          </div>
          <div className="text-[#141413] text-[12px]">Stake address mock</div>
        </div>
      </div>
      <Tabs defaultValue="gallery" className="w-186">
        <Tabs.List>
          <Tabs.Tab value="gallery" className="w-93">
            Native tokens
          </Tabs.Tab>
          <Tabs.Tab value="messages" className="w-93">
            Transaction history
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="gallery">
          <NativeTab />
        </Tabs.Panel>
        <Tabs.Panel value="messages">
          <TransactionTab />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;

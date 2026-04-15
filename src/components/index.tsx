export function Item({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1 items-start rounded-[20px] px-5 py-3 bg-[#f5f4ed] w-60">
      <div className="text-[#3D3D3A] text-[14px] font-medium">{title}</div>
      <div className="text-[#0033AD] text-[22px] font-semibold">{value}</div>
      {subtitle && <div className="text-[#3D3D3A] text-[12px]">{subtitle}</div>}
    </div>
  );
}

export function NativeTab() {
  return <div className="bg-red-200">Hello Native tab</div>;
}

export function TransactionTab() {
  return <div className="bg-red-200">Hello Transaction tab</div>;
}

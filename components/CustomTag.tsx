import React, { ReactNode } from "react";

export const CustomTag = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="rounded-2xl bg-slate-950 flex px-2.5 py-1 items-center gap-1 text-xs">
      {icon} {text}
    </div>
  );
};

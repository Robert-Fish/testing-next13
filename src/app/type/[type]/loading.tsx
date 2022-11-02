import React from "react";

export default function Loading() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="bg-white drop-shadow-md p-3 animate-pulse">
        <div className="h-3 bg-slate-200 rounded"></div>
      </div>
      <div className="bg-white drop-shadow-md p-3 animate-pulse">
        <div className="h-3 bg-slate-200 rounded"></div>
      </div>
      <div className="bg-white drop-shadow-md p-3 animate-pulse">
        <div className="h-3 bg-slate-200 rounded"></div>
      </div>
      <div className="bg-white drop-shadow-md p-3 animate-pulse">
        <div className="h-3 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

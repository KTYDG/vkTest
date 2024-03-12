import React from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-8/12 mx-auto flex-col justify-center gap-6">
      {children}
    </div>
  );
}

export default PageLayout;

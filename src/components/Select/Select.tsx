import React from "react";

function Select({
  children,
  value,
  onChange,
}: {
  children: React.ReactNode;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select
      className="bg-gray-800 border-2 border-white p-3 rounded-md"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

export default Select;

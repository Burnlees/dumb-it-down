"use client";

import React from "react";
import { ModeToggle } from "./themetoggle";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      <div className="text-xl font-bold">Dumb It Down</div>
      <ModeToggle />
    </nav>
  );
};

export default TopNav;

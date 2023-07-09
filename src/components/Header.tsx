"use client";
import { IconButton } from "@mui/material";
import DrawerMenu from "./DrawerMenu";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  return (
    <header>
      <IconButton onClick={handleOpenDrawer}>
        <Menu className="text-black w-6 h-6" />
      </IconButton>
      <DrawerMenu isOpen={drawerIsOpen} handleClose={handleCloseDrawer} />
    </header>
  );
}

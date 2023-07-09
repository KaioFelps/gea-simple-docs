import { Box, Divider, Drawer } from "@mui/material";
import Link from "next/link";

interface DrawerMenuProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function DrawerMenu({ isOpen, handleClose }: DrawerMenuProps) {
  return (
    <Drawer keepMounted open={isOpen} onClose={handleClose} anchor="left">
      <Box width={"calc(100vw - 48px)"} maxWidth={450} padding={6}>
        <h2 className="font-bold text-lg text-black mb-4">Menu de navegação</h2>
        <Divider style={{ marginBottom: 16 }} />
        <nav className="flex flex-col gap-1">
          <Link
            href="/pagamento"
            className="
            rounded-full px-4 py-2 border border-slate-300 font-medium
            hover:bg-slate-200
            active:bg-slate-300
            "
          >
            Tabela de preços
          </Link>
          <Link
            href="/"
            className="
            rounded-full px-4 py-2 border border-slate-300 font-medium
            hover:bg-slate-200
            active:bg-slate-300
            "
          >
            Catálogo da GeA
          </Link>
        </nav>
      </Box>
    </Drawer>
  );
}

import CatalogAsideNavigation from "@/components/catalog/CatalogAsideNavigation";
import { CustomContainer } from "@/components/mui/Container";
import { ReactNode } from "react";

export default function CatalogoLayout({ children }: { children: ReactNode }) {
  return (
    <CustomContainer sx={{ display: "flex", gap: 4 }} maxWidth="lg">
      <CatalogAsideNavigation />

      <main className="w-full">{children}</main>
    </CustomContainer>
  );
}

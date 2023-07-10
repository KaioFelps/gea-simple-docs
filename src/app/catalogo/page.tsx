"use client";

import { CustomCard } from "@/components/mui/Card";

import logo from "@/assets/logo-da-gea.gif";
import { Divider } from "@mui/material";

export default function CatalogoHomePage() {
  return (
    <CustomCard variant="outlined">
      <img
        src={logo.src}
        alt="Logo dos Gamers em Ação do Habblive Hotel"
        className="mx-auto"
      />

      <Divider sx={{ marginBlock: 3 }} />

      <p>
        Bem-vindo ao catálogo da GeA. Neste aglomerado de páginas, você poderá
        encontrar todos os itens os quais você pode adquirir através dos{" "}
        <strong>pontos da GeA</strong> no próximo semestre.
      </p>
    </CustomCard>
  );
}

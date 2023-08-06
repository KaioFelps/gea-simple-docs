"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import vip from "@/assets/rares/random/vip.png";
import coringa from "@/assets/rares/random/coringa.png";
import troca_de_nickname from "@/assets/rares/random/troca_de_nickname.png";

export default function Aleatorios() {
  const catalogItems = [
    {
      image: vip.src,
      price: 1000,
      title: "Vip",
      furniName: "1 semana de vip",
    },
    {
      image: coringa.src,
      price: 500,
      title: "Coringa de campanha",
      furniName:
        "Chance de jogar uma vez um jogo de alguma campanha da GeA que já está fechada",
    },
    {
      image: troca_de_nickname.src,
      price: 800,
      title: "Troca de nickname",
      furniName: "Troca seu nickname por algum nickname em desuso.",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Aleatórios</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div
        className="
        grid grid-cols-3 gap-4
        max-sm:grid-cols-2
        max-[384px]:grid-cols-1
        "
      >
        {catalogItems.map((item) => (
          <CatalogItem
            image={item.image}
            price={item.price}
            title={item.title}
            furniName={item.furniName}
            key={item.title}
          />
        ))}
      </div>
    </CustomCard>
  );
}

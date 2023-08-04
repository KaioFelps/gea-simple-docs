"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import aloe_vera from "@/assets/rares/random/aloe_vera.png";
import chineseRibbon from "@/assets/rares/random/chinese_ribbon.png";
import nubeThrone from "@/assets/rares/random/cloud_throne.png";
import furnace from "@/assets/rares/random/furnace.png";
import hamtaro from "@/assets/rares/random/hamtaro.png";
import paleEasterArcade from "@/assets/rares/random/pale_easter_arcade.png";
import pig from "@/assets/rares/random/pig.png";
import rainbowSleepBag from "@/assets/rares/random/rainbow_sleep_bag.png";

export default function RarosAleatorios() {
  const catalogItems = [
    {
      image: aloe_vera.src,
      price: 100,
      title: "Aloe Vera",
      furniName: "Aloe Vera",
    },
    {
      image: chineseRibbon.src,
      price: 50,
      title: "Fita chinesa",
      furniName: "Chinesischer Feuerkracher",
    },
    {
      image: nubeThrone.src,
      price: 80,
      title: "Trono Nube",
      furniName: "Trono Nube",
    },
    {
      image: furnace.src,
      price: 60,
      title: "Fornalha",
      furniName: "Raro Custom",
    },
    {
      image: hamtaro.src,
      price: 800,
      title: "Hamtaro",
      furniName: "Hamtaro",
    },
    {
      image: paleEasterArcade.src,
      price: 1000,
      title: "Máquina de fliperama rosa",
      furniName: "Pale Easter Arcade",
    },
    {
      image: pig.src,
      price: 600,
      title: "Porquinho",
      furniName: "Schweei",
    },
    {
      image: rainbowSleepBag.src,
      price: 400,
      title: "Saco de Dormir Arco-Íris",
      furniName: "Raro Custom",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Aleatórios</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div
        className="grid grid-cols-3 gap-4
      max-sm:grid-cols-2
      max-[384px]:grid-cols-1"
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

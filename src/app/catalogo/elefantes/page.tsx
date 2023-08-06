"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import green from "@/assets/rares/elephants/green.png";
import blue from "@/assets/rares/elephants/blue.png";
import pink from "@/assets/rares/elephants/pink.png";
import white from "@/assets/rares/elephants/white.png";
import yellow from "@/assets/rares/elephants/yellow.png";

export default function Elefantes() {
  const catalogItems = [
    {
      image: yellow.src,
      price: 90,
      title: "Amarelo",
      furniName: "Custom Atlanta",
    },
    {
      image: green.src,
      price: 90,
      title: "Verde limão",
      furniName: "Custom Atlanta",
    },
    {
      image: white.src,
      price: 90,
      title: "Branco",
      furniName: "Custom Atlanta",
    },
    {
      image: pink.src,
      price: 90,
      title: "Rosa Choque",
      furniName: "Custom Atlanta",
    },
    {
      image: blue.src,
      price: 90,
      title: "Azul escuro",
      furniName: "Custom Atlanta",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Elefantes</Heading>

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

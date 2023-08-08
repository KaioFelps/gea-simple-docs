"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import red from "@/assets/rares/one_way_gates/Red One Way Gate.png";
import black from "@/assets/rares/one_way_gates/Black One Way Gate.png";
import green from "@/assets/rares/one_way_gates/Green One Way Gate.png";
import white from "@/assets/rares/one_way_gates/White One Way Gate.png";
import yellow from "@/assets/rares/one_way_gates/Yellow One Way Gate.png";

export default function Catracas() {
  const catalogItems = [
    {
      image: white.src,
      price: 40,
      title: "Branco",
      furniName: "White One Way Gate",
    },
    {
      image: yellow.src,
      price: 40,
      title: "Amarelo",
      furniName: "Yellow One Way Gate",
    },
    {
      image: black.src,
      price: 50,
      title: "Preto",
      furniName: "Black One Way Gate",
    },
    {
      image: red.src,
      price: 40,
      title: "Vermelho",
      furniName: "Red One Way Gate",
    },
    {
      image: green.src,
      price: 60,
      title: "Verde",
      furniName: "Green One Way Gate",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Catracas</Heading>

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

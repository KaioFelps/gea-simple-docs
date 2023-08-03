"use client";

import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import grass from "@/assets/rares/floors/grass.png";
import mars from "@/assets/rares/floors/mars.png";
import moon from "@/assets/rares/floors/moon.png";
import petals from "@/assets/rares/floors/petals.png";
import sand from "@/assets/rares/floors/sand.png";
import snow from "@/assets/rares/floors/snow.png";
import { CatalogItem } from "@/components/catalog/CatalogItem";

export default function Pisos() {
  const catalogItems = [
    {
      image: grass.src,
      price: 35,
      title: "Piso de grama alta",
      furniName: "Unholy Ground",
    },
    {
      image: mars.src,
      price: 35,
      title: "Piso de marte",
      furniName: "Mars Moonrug",
    },
    {
      image: moon.src,
      price: 35,
      title: "Piso de lua",
      furniName: "Moon Rug",
    },
    {
      image: petals.src,
      price: 35,
      title: "Piso de pétalas",
      furniName: "Petal Patch",
    },
    {
      image: sand.src,
      price: 35,
      title: "Piso de praia",
      furniName: "Tropical Beach Rug",
    },
    {
      image: snow.src,
      price: 35,
      title: "",
      furniName: "Snow Patch",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Pisos super raros</Heading>

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

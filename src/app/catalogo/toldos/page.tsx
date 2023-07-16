"use client";

import { CatalogItem } from "@/components/catalog/CatalogItem";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import green from "@/assets/rares/marquee/green_marquee.png";
import maroon from "@/assets/rares/marquee/maroon_marquee.png";
// import purple from "@/assets/rares/marquee/purple_marquee.png";
import colourable_1 from "@/assets/rares/marquee/rare_colourable_marquee_1-64-2-0.png";
import colourable_2 from "@/assets/rares/marquee/rare_colourable_marquee_2-64-2-0.png";
import yellow from "@/assets/rares/marquee/yellow_marquee.png";

export default function Toldos() {
  const catalogItems = [
    {
      image: green.src,
      price: 30,
      title: "Verde limão",
      furniName: "green marquee",
    },
    {
      image: maroon.src,
      price: 30,
      title: "Maroon",
      furniName: "maroon marquee",
    },
    {
      image: colourable_1.src,
      price: 30,
      title: "Safira",
      furniName: "rare_colourable_marquee_1_name",
    },
    {
      image: colourable_2.src,
      price: 60,
      title: "Esmeralda",
      furniName: "rare_colourable_marquee_2_name",
    },
    {
      image: yellow.src,
      price: 30,
      title: "Amarelo",
      furniName: "yellow marquee",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Toldos</Heading>

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

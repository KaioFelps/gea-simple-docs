"use client";

import { CatalogItem } from "@/components/CatalogItem";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import green from "@/assets/rares/marquee/green_marquee.png";
import maroon from "@/assets/rares/marquee/maroon_marquee.png";
import purple from "@/assets/rares/marquee/purple_marquee.png";
import colourable_1 from "@/assets/rares/marquee/rare_colourable_marquee_1-64-2-0.png";
import colourable_2 from "@/assets/rares/marquee/rare_colourable_marquee_2-64-2-0.png";
import yellow from "@/assets/rares/marquee/yellow_marquee.png";

export default function Toldos() {
  return (
    <CustomCard variant="outlined">
      <Heading>Toldos</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div className="grid grid-cols-3 gap-4">
        <CatalogItem
          image={green.src}
          price={50}
          title="Verde limão"
          furniName="green marquee"
        />

        <CatalogItem
          image={maroon.src}
          price={50}
          title="Maroon"
          furniName="maroon marquee"
        />

        <CatalogItem
          image={purple.src}
          price={200}
          title="Pitaya rosa"
          furniName="purple marquee"
        />

        <CatalogItem
          image={colourable_1.src}
          price={50}
          title="Safira"
          furniName="rare_colourable_marquee_1_name"
        />

        <CatalogItem
          image={colourable_2.src}
          price={70}
          title="Esmeralda"
          furniName="rare_colourable_marquee_2_name"
        />

        <CatalogItem
          image={yellow.src}
          price={50}
          title="Amarelo"
          furniName="yellow marquee"
        />
      </div>
    </CustomCard>
  );
}

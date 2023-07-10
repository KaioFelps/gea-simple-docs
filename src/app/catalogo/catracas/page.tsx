"use client";

import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

export default function Catracas() {
  return (
    <CustomCard variant="outlined">
      <Heading>Catracas</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div className="flex grid-cols-3"></div>
    </CustomCard>
  );
}

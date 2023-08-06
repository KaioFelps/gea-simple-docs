import { CatalogNavItem } from "@/components/catalog/CatalogNavItem";
import { CustomCard } from "@/components/mui/Card";

import toldo from "@/assets/rare_colourable_marquee_1_icon.png";
import bonnie from "@/assets/rare_colourable_pillow_1_icon.png";
import catraca from "@/assets/one_way_door_6_icon.png";
import elefante from "@/assets/blue_elephant_icon.png";
import pinguim from "@/assets/blue_penguim_icon.png";
import sorveteira from "@/assets/rare_colourable_icecream_1_icon.png";
import leviathan from "@/assets/lostc_merdragon_icon.png";
import pisoDePetala from "@/assets/rare_daffodil_rug_icon.png";
import bau from "@/assets/sw_chest_icon.png";
import vip from "@/assets/duck_vipwhite_icon.png";

export default function CatalogAsideNavigation() {
  return (
    <CustomCard
      variant="outlined"
      sx={{
        padding: 0,
        height: "fit-content",
        gridArea: "aside",
      }}
    >
      <h1 className="px-3 py-4 bg-slate-500 text-white font-bold text-xl text-center">
        Catálogo de raros
      </h1>

      <CatalogNavItem
        href="toldos"
        title="Toldos"
        image={toldo.src}
        imageAlt="Miniatura de um toldo azul"
      />

      <CatalogNavItem
        href="bonnies"
        title="Bonnies"
        image={bonnie.src}
        imageAlt="Miniatura de uma almofada azul"
      />

      <CatalogNavItem
        href="catracas"
        title="Catracas"
        image={catraca.src}
        imageAlt="Miniatura de uma catraca azul"
      />

      <CatalogNavItem
        href="elefantes"
        title="Elefantes"
        image={elefante.src}
        imageAlt="Miniatura de um elefante azul"
      />

      <CatalogNavItem
        href="pinguins"
        title="Pinguins"
        image={pinguim.src}
        imageAlt="Miniatura de um pinguim azul"
      />

      <CatalogNavItem
        href="sorveteiras"
        title="Sorveteiras"
        image={sorveteira.src}
        imageAlt="Miniatura de uma sorveteira azul"
      />

      <CatalogNavItem
        href="leviathans"
        title="Leviathans"
        image={leviathan.src}
        imageAlt="Miniatura de um leviathan"
      />

      <CatalogNavItem
        href="pisos"
        title="Pisos super raros"
        image={pisoDePetala.src}
        imageAlt="Miniatura de um piso de pétalas"
      />

      <CatalogNavItem
        href="rarosaleatorios"
        title="Super raros aleatórios"
        image={bau.src}
        imageAlt="Miniatura de um baú"
      />

      <CatalogNavItem
        href="aleatorios"
        title="Aleatórios"
        image={vip.src}
        imageAlt="Miniatura de um pato segurando uma placa escrito VIP"
      />
    </CustomCard>
  );
}

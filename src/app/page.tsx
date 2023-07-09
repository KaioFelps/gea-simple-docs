"use client";
import { Card, Container, Divider, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" className="flex items-center justify-center">
        <Card variant="outlined" sx={{ borderRadius: 2, padding: 4 }}>
          <h1 className="text-2xl font-bold">Documentação da GeA Habblive</h1>

          <Divider sx={{ marginBottom: 4, marginTop: 2 }} />

          <p>
            Bem-vindo/a. Esta é uma simples página de documentação (talvez
            provisória) para os integrantes da equipe Gamers em Ação Habblive.
          </p>

          <p>
            Neste site será possível encontrar documentos como tabela de
            pagamentos por área e serviço, catálogo de raros para troca dos
            pontos e outros.
          </p>

          <Divider sx={{ marginBlock: 4 }} />

          <Stack
            divider={<Divider orientation="vertical" />}
            direction="column"
            spacing={0.5}
          >
            <Link
              href="/pagamento"
              className="
            rounded-full text-blue-500 font-bold px-4 py-2 bg-blue-400/10 transition-all
            hover:bg-blue-400/20
            active:bg-blue-400/40
            "
            >
              Tabela de pagamento
            </Link>
            <Link
              href="/"
              className="
            rounded-full text-blue-500 font-bold px-4 py-2 bg-blue-400/10 transition-all
            hover:bg-blue-400/20
            active:bg-blue-400/40
            "
            >
              Catálogo
            </Link>
            <Link
              href=""
              className="
            rounded-full text-blue-500 font-bold px-4 py-2 bg-blue-400/10 transition-all
            hover:bg-blue-400/20
            active:bg-blue-400/40
            "
            >
              Painel administrativo
            </Link>
          </Stack>
        </Card>
      </Container>
    </>
  );
}

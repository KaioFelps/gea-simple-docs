"use client";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import {
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Pagamento() {
  function createData(
    service: string,
    minTeam: number,
    maxTeam: number,
    minGea: number,
    maxGea: number
  ) {
    return {
      service,
      minTeam,
      maxTeam,
      minGea,
      maxGea,
    };
  }

  const paymentTableRows = [
    // serviço - minimo equipe - max equipe - minimo gea - max gea
    createData("Construção pequena", 0, 10, 0, 10),
    createData("Construção média", 0, 15, 0, 40),
    createData("Construção grande", 0, 30, 0, 60),
    createData("Programação pequena", 0, 10, 0, 10),
    createData("Programação média", 0, 15, 0, 40),
    createData("Programação grande", 0, 30, 0, 60),
    createData("Logo", 0, 30, 0, 50),
    createData("Expositor", 0, 20, 0, 40),
    createData("Emblema", 0, 15, 0, 30),
    createData("Emblema de ranking", 0, 10, 0, 20),
    createData("Ads de quarto", 0, 40, 0, 60),
    createData("Ads de click", 0, 15, 0, 30),
    createData("Edição de ads de quarto", 0, 15, 0, 25),
    createData("Edição de ads de click", 0, 10, 0, 15),
    createData("Grosser", 0, 20, 0, 40),
    createData("Flyers", 0, 25, 0, 35),
  ];

  return (
    <Container maxWidth="lg">
      <CustomCard variant="outlined">
        <Heading>Tabela de pagamento</Heading>

        <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serviço</TableCell>
                <TableCell>Menor valor (equipe)</TableCell>
                <TableCell>Maior valor (equipe)</TableCell>
                <TableCell>Menor valor (gea)</TableCell>
                <TableCell>Maior valor (gea)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paymentTableRows.map((row) => {
                return (
                  <TableRow key={row.service}>
                    <TableCell component="th" scope="row">
                      {row.service}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.minTeam}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.maxTeam}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.minGea}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.maxGea}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomCard>
    </Container>
  );
}

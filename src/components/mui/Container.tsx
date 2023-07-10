"use client";

import { Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomContainer = styled(Container)<ContainerProps>(() => ({
  borderRadius: 8,
  padding: 32,
  marginBottom: 24,
}));

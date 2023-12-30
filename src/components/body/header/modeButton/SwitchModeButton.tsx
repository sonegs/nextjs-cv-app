import { ColorModeContext } from "@/lib/contexts/colorModeContext";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { Box, IconButton, useTheme } from "@mui/material";
import { styled } from '@mui/system';
import React from "react";

const StyledSwitchModeBox = styled(Box)({
  display: "flex",
  minHeight: "10vh",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const SwitchModeButton: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const handleClick = () => {
    colorMode.toggleColorMode();
  }

  return (
    <StyledSwitchModeBox>
     <IconButton
        sx={{ ml: 1 }}
        onClick={() => {handleClick()}}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </StyledSwitchModeBox>
  );
};
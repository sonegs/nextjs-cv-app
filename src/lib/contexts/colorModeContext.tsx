import React from "react";

interface ColorModeContextSchema {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextSchema>(
  {} as ColorModeContextSchema
);
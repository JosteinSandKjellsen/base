"use client";

import { IconButton } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        color: "text.primary",
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
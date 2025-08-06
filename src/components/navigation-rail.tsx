"use client";

import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  People as PeopleIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  Timeline as TimelineIcon,
  TimelineOutlined as TimelineOutlinedIcon,
  Assignment as AssignmentIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useTheme } from "next-themes";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  iconFilled: React.ReactNode;
}

const navigationItems: NavigationItem[] = [
  {
    id: "persons",
    label: "Persons",
    icon: <PeopleOutlinedIcon />,
    iconFilled: <PeopleIcon />,
  },
  {
    id: "activities",
    label: "Activities", 
    icon: <TimelineOutlinedIcon />,
    iconFilled: <TimelineIcon />,
  },
  {
    id: "requests",
    label: "Requests",
    icon: <AssignmentOutlinedIcon />,
    iconFilled: <AssignmentIcon />,
  },
];

export function NavigationRail() {
  const [selectedItem, setSelectedItem] = useState<string>("persons");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Paper
      sx={{
        width: 80,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Menu button */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <IconButton
          sx={{
            color: "text.primary",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Navigation items */}
      <List sx={{ flex: 1, px: 1 }}>
        {navigationItems.map((item) => {
          const isSelected = selectedItem === item.id;
          const isHovered = hoveredItem === item.id;
          
          return (
            <Tooltip key={item.id} title={item.label} placement="right">
              <ListItemButton
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  flexDirection: "column",
                  py: 1.5,
                  minHeight: 56,
                  backgroundColor: isSelected ? "primary.main" : "transparent",
                  color: isSelected ? "primary.contrastText" : "text.primary",
                  "&:hover": {
                    backgroundColor: isSelected ? "primary.dark" : "action.hover",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "auto",
                    color: "inherit",
                    mb: 0.5,
                  }}
                >
                  {isSelected || isHovered ? item.iconFilled : item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: "caption",
                    textAlign: "center",
                    sx: { fontSize: "0.7rem" },
                  }}
                />
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      {/* Bottom section */}
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        {/* Theme toggle */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: "text.primary",
            border: 1,
            borderColor: "divider",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {/* User avatar */}
        <IconButton
          sx={{
            color: "text.primary",
            border: 1,
            borderColor: "divider",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <PersonIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
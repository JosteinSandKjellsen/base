"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
  Divider,
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
  Close as CloseIcon,
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
  const [drawerOpen, setDrawerOpen] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
    setDrawerOpen(itemId);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(null);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getDrawerContent = (itemId: string) => {
    switch (itemId) {
      case "persons":
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Persons Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage users, contacts, and person profiles in the system.
            </Typography>
          </Box>
        );
      case "activities":
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Activities Overview
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Track activities, timeline events, and progress metrics.
            </Typography>
          </Box>
        );
      case "requests":
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Requests Queue
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View and manage pending requests, approvals, and assignments.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };
  return (
    <>
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

      {/* Drawer Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen !== null}
        onClose={handleDrawerClose}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            left: 80, // Position next to navigation rail
            height: "100vh",
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="h6">
            {drawerOpen && navigationItems.find(item => item.id === drawerOpen)?.label}
          </Typography>
          <IconButton onClick={handleDrawerClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {drawerOpen && getDrawerContent(drawerOpen)}
      </Drawer>
    </>
  );
}
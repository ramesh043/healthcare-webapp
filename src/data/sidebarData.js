// src/data/sidebarData.js
import {
  Calendar,
  ChartColumnIncreasing,
  History,
  LayoutDashboard,
  MessageSquare,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";

const sidebarData = [
  {
    key: "general",
    title: "General",
    items: [
      { icon: LayoutDashboard, label: "Dashboard" },
      { icon: History, label: "History" },
      { icon: Calendar, label: "Calendar" },
      { icon: SquarePlus, label: "Appointments" },
      { icon: ChartColumnIncreasing, label: "Stats" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    items: [
      { icon: MessageSquare, label: "Chat" },
      { icon: Phone, label: "Support" },
    ],
  },
  {
    key: "settings",
    title: "Settings",
    items: [{ icon: Settings, label: "Settings" }],
  },
];

export default sidebarData;

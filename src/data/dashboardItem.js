import {
  faDollarSign,
  faPager,
  faMoneyBill,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export const dashboardItemDetails = [
  {
    text: "Earning",
    cost: "$198k",
    change: "37.8% this month",
    icon: faDollarSign,
    bgColor: "#52faa3",
    color: "green",
  },
  {
    text: "Orders",
    cost: "$2.4k",
    change: "2% this month",
    icon: faPager,
    bgColor: "#f593c9",
    color: "#fc038c",
  },
  {
    text: "Balance",
    cost: "$2.4k",
    change: "2% this month",
    icon: faMoneyBill,
    bgColor: "#93b5e6",
    color: "#111245",
  },
  {
    text: "Total Sales",
    cost: "$89k",
    change: "11% this month",
    icon: faLock,
    bgColor: "#e86b6b",
    color: "#4f0d14",
  },
];

import Profile from "../assets/profile.png";
const themes = {
  light: {
    menu: {
      menuContent: "#fbfcfd",
      icon: "#a59ab3",
      hover: {
        backgroundColor: "#5a3b7d",
        color: "white",
      },
    },
  },
};
export const menuItemStyles = {
  root: {
    fontSize: "18px",
    fontWeight: 400,
    padding: "8px",
  },
  icon: {
    color: themes.light.menu.icon,
  },
  SubMenuExpandIcon: {
    color: "#b6b7b9",
  },
  subMenuContent: ({ level }) => ({
    backgroundColor: "#c598ed",
    borderRadius: "8px",
    color: "white",
  }),
  button: {
    "&:hover": {
      backgroundColor: themes.light.menu.hover.backgroundColor,
      color: themes.light.menu.hover.color,
      borderRadius: "8px",
    },
  },
  label: ({ open }) => ({
    fontWeight: open ? 600 : undefined,
  }),
};
export const profileStyle = {
  backgroundColor: "#5a3b7d",
  borderRadius: "8px",
  margin: "8px",
};

export const subMenuLabel = (
  <div className="d-flex flex-column">
    <span className="fw-bold fs-6 text-white">Evano</span>
    <span className="fs-6">Project Manager</span>
  </div>
);

export const subMenuPrefix = (
  <img src={Profile} alt="Profile" style={{ width: "2.5rem" }} />
);

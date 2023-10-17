export const pieData = {
  labels: ["New Customers", "Old Customers", "Refferals"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#be5beb", "#f76399", "#f6fc77"],
      hoverBackgroundColor: ["#9d0be0", "#fa025d", "#e3ed21"],
      hoverBorderColor: ["#37044f", "#660629", "#7e8505"],
      borderAlign: "inner",
    },
  ],
};

export const pieOptions = {
  cutout: "60%",
  plugins: {
    title: {
      display: true,
      text: ["Customers", "Customers that buy products"],
    },
  },
};

import classes from "./BarChartItem.module.css";
const BarChartItem = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: props.chartWidth }}
      title={`Earnings: $${props.details.earnings}`}
    >
      <div
        className={
          classes["chart-bar__inner"] +
          " d-flex flex-column justify-content-end w-100 h-100"
        }
      >
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: props.details.height + "%" }}
        ></div>
      </div>
      <div className="fs-6 text-center">{props.details.period}</div>
    </div>
  );
};

export default BarChartItem;

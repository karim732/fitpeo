import classes from "./DashboardItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconStyle = {
  fontSize: "60px",
  padding: "15px 20px",
  borderRadius: "50%",
};
const DashboardItem = (props) => {
  return (
    <div className={classes.dashboardItem}>
      <div>
        <FontAwesomeIcon
          icon={props.details.icon}
          style={{
            ...iconStyle,
            backgroundColor: props.details.bgColor,
            color: props.details.color,
          }}
        />
      </div>
      <div className={classes.dashboardItemDetails}>
        <div>{props.details.text}</div>
        <div>{props.details.cost}</div>
        <div>{props.details.change}</div>
      </div>
    </div>
  );
};

export default DashboardItem;

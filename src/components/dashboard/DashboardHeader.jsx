import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const iconStyle = { top: "1.3rem" };
const DashboardHeader = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {!props.toggled && (
          <button
            type="button"
            className="btn btn-light me-2"
            onClick={props.onToggle}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <div>Hello Shahrukh 👋</div>
      </div>

      <div>
        <span className="p-input-icon-left">
          <i className="bi bi-search" style={iconStyle} />
          <InputText placeholder="Search" />
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;

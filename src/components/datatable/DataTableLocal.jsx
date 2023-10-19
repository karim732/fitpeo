import React, { useState } from "react";
import classes from "./DataTableLocal.module.css";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

import { CustomerData } from "../../data/datatable";

const DataTableLocal = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const productNameBodyTemplate = (rowData) => {
    const productName = rowData.productName;

    return (
      <div className="d-flex align-items-center gap-2">
        <img
          alt={productName.name}
          src={productName.image}
          width="50"
          className="rounded"
        />
        <span>
          <span className="fw-bold lh-sm">{productName.name}</span>
          <br />
          <span className="lh-sm">{productName.details}</span>
        </span>
      </div>
    );
  };

  const priceBodyTemplate = (rowData) => {
    const price = rowData["price"];
    return <span className="fw-bold">{price}</span>;
  };
  const spanIconStyle = { marginRight: "15px" };
  const iconStyle = { top: "1.3rem" };
  const header = (
    <div className="d-flex justify-content-between flex-wrap">
      <span>
        <p className="fs-4 mt-2 mb-2 mr-auto ml-auto">Product Sell</p>
      </span>
      <span className="d-flex justify-content-between flex-wrap">
        <span className="p-input-icon-left mb-2" style={spanIconStyle}>
          <i className="bi bi-search" style={iconStyle} />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="w-100"
          />
        </span>
        <select className={classes.formselect + " form-select mb-2"}>
          <option value="30">Last 30 days</option>
          <option value="15">Last 15 days</option>
          <option value="7">Last 7 days</option>
        </select>
      </span>
    </div>
  );

  return (
    <DataTable
      value={CustomerData}
      paginator
      rows={10}
      dataKey="id"
      filters={filters}
      header={header}
      emptyMessage="No customers found."
      style={{
        border: "1px solid transparent",
        borderTop: "8px",
      }}
    >
      <Column
        header="Product Name"
        filterField="productName.name"
        body={productNameBodyTemplate}
        style={{ minWidth: "24rem" }}
      />
      <Column header="Stock" field="stock" style={{ minWidth: "2rem" }} />
      <Column
        header="Price"
        filterField="price"
        body={priceBodyTemplate}
        style={{ minWidth: "2rem" }}
      />
      <Column
        field="total sales"
        header="Total Sales"
        style={{ minWidth: "2rem" }}
      />
    </DataTable>
  );
};

export default DataTableLocal;

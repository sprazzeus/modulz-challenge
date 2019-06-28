import React, { Component, useState } from "react";
import styled from "styled-components";

class FoodList extends Component {
  state = {
    data: {
      e5d9d9f5: {
        label: "ice cream",
        isDelicious: true,
        isHealthy: false,
      },
      a9ba692b: {
        label: "pizza",
        isDelicious: true,
        isHealthy: false,
      },
      ze128a47: {
        label: "spinach",
        isDelicious: false,
        isHealthy: true,
      },
    },
  };

  printData = data => {
    console.group("Current Food Data");
    console.log(data);
    console.groupEnd();
  };

  render() {
    const { data } = this.state;
    const dataArray = Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key],
      };
    });

    return (
      <div style={{ margin: "30px" }}>
        <StyledFoodList>
          {dataArray.map(item => (
            <Row item={item} key={item.id} />
          ))}
        </StyledFoodList>
        <StyledDataButton onClick={() => this.printData(data)}>
          Print Data to Console
        </StyledDataButton>
      </div>
    );
  }
}

const Row = ({ item }) => {
  const [isDelicious, toggleIsDelicious] = useState(item.isDelicious);
  const [isHealthy, toggleIsHealthy] = useState(item.isHealthy);
  // console.log("isDelicious", isDelicious);
  // console.log("isHealthy", isHealthy);

  const inputIdDelicious = `${item.id}-delicious`;
  const inputIdHealthy = `${item.id}-healthy`;

  return (
    <StyledRow
      isDelicious={isDelicious}
      isHealthy={isHealthy}
      className="disable-selection"
    >
      <span>{item.label}</span>
      <div
        style={{ display: "flex", flexDirection: "row", alignSelf: "flex-end" }}
      >
        <div>
          <input
            type="checkbox"
            id={inputIdDelicious}
            checked={isDelicious}
            onChange={() => toggleIsDelicious(!isDelicious)}
          />
          <label htmlFor={inputIdDelicious} className="disable-selection">
            Is Delicious
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id={inputIdHealthy}
            checked={isHealthy}
            onChange={() => toggleIsHealthy(!isHealthy)}
          />
          <label htmlFor={inputIdHealthy} className="disable-selection">
            Is Healthy
          </label>
        </div>
      </div>
    </StyledRow>
  );
};

const StyledFoodList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

// styles from Radix
const StyledDataButton = styled.button`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid;
  border-radius: 0.1875rem;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-weight: 500;
  outline: none;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: hsl(208, 32%, 99%);
  border-color: hsl(208, 20%, 86%);
  color: hsl(208, 12%, 46%);
  font-size: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 15px;
  height: 35px;
  min-width: 35px;
  line-height: 1;
  :hover {
    background-color: #f5f7f9;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-transform: capitalize;
  && {
    margin-left: ${({ isDelicious }) => (isDelicious ? "30px" : "0px")};
    transition: background 0.2s, margin-left 0.2s;
    background: ${({ isHealthy }) => (isHealthy ? "#83C29B" : "#eaedf2")};
  }
  label {
    font-size: 0.9rem;
    margin-right: 4px;
  }
  .disable-selection {
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
  }
  :first-child {
    border-radius: 4px 4px 0 0;
  }
  :last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;

export default FoodList;

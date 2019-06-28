import React, { Component } from "react";
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
      <StyledFoodList>
        {dataArray.map(item => (
          <Row item={item} key={item.id} />
        ))}
        <button onClick={() => this.printData(data)}>
          Print Data to Console
        </button>
      </StyledFoodList>
    );
  }
}

const Row = ({ item }) => {
  return (
    <StyledRow>
      <div>{item.label}</div>
      <div>
        <div>
          <input type="checkbox" label="Is Delicious" />
          <label htmlFor="isDelicious">Is Delicious</label>
        </div>
        <div>
          <input type="checkbox" id="isHealthy" />
          <label htmlFor="isHealthy">Is Healthy</label>
        </div>
      </div>
    </StyledRow>
  );
};

const StyledFoodList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 3px;
  margin: 30px;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  background: #eaedf0;
  text-transform: capitalize;
`;

export default FoodList;

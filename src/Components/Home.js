import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="View Inventory"
        backgroundImg="model-s.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
      <Section 
        title="Model Y"
        description="View Inventory"
        backgroundImg="model-y.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
      <Section 
        title="Model 3"
        description="View Inventory"
        backgroundImg="model-3.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
         <Section 
        title="Model X"
        description="View Inventory"
        backgroundImg="model-x.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
         <Section 
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
         <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftbtnText="Order Now"
        rightbtnText="Demo Drive"
      />
         <Section 
        title="Accesories"
        description=" "
        backgroundImg="accessories.jpg"
        leftbtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;

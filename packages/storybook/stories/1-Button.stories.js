import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@rush/rush-ui";

export default {
  title: "Button",
  component: Button
};

export const Primary = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

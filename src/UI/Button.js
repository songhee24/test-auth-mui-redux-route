import React from "react";
import { Button as MuiButton, styled } from "@mui/material";

const StyledMuiButton = styled(MuiButton)(({ myProp }) => {
  if (myProp === "test") {
    return {
      backgroundColor: "yellow",
    };
  }
  return {
    borderRadius: "48px",
    minWidth: "170px",
    height: "44px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "&.MuiButton-contained": {
      color: "#FFFFFF",
    },
  };
});
export const Button = ({
  children,
  variant = "contained",
  size,
  disabled,
  startIcon,
  fullWidth,
  myProp,
  ...otherProps
}) => {
  return (
    <StyledMuiButton
      fullWidth={fullWidth}
      size={size}
      myProp={myProp}
      disabled={disabled}
      startIcon={startIcon}
      variant={variant}
      {...otherProps}
    >
      {children}
    </StyledMuiButton>
  );
};

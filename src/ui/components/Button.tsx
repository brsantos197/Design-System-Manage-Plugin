import React from "react";
import { classes } from "@ui/utils/classes.util";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  return (
    <button {...props} className='bg-red-500' />
  );
};

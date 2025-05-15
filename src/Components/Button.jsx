import React from "react";

import classNames from "classnames";
 
export function Button({

  children,

  variant = "default", // 'default' | 'outline'

  className,

  ...props

}) {

  const baseStyles = "px-4 py-2 rounded font-semibold transition";

  const variants = {

    default: "bg-green-400 text-black hover:bg-green-300",

    outline: "border border-black text-black hover:bg-black hover:text-white",

  };
 
  return (
<button

      className={classNames(baseStyles, variants[variant], className)}

      {...props}
>

      {children}
</button>

  );

}

 
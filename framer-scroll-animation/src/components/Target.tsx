import { useRef } from "react";
import React from "react";
import { RootContext } from "../context/RootContext";

interface TargetProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}
/**
 * By default, the target is the scrollable area of the container.
 * Use this component to set another element and track its progress within the viewport.
 *
 * If you aren't using the `Target` component, you can pass a ref to the `target` prop of the `Animation` component.
 */
export function Target({ children, as, ...props }: TargetProps) {
  const ref = useRef(null);
  const Tag = as || "div";

  return (
    <RootContext.Provider value={ref}>
      <Tag ref={ref} {...props}>
        {children}
      </Tag>
    </RootContext.Provider>
  );
}

import {
  MotionValue,
  SpringOptions,
  useSpring,
  useTransform,
} from "framer-motion";
import React from "react";

export function Transform({
  inputRange,
  outputRange,
  prop,
  value,
  refValues,
  springOptions,
}: {
  inputRange: number[];
  outputRange: string[];
  prop: string;
  value: MotionValue<number>;
  refValues: React.MutableRefObject<Record<string, unknown>>;
  springOptions?: SpringOptions;
}) {
  const spring = useSpring(springOptions ? value : 0, springOptions);

  refValues.current[prop] = useTransform(
    springOptions ? spring : value,
    inputRange,
    outputRange
  );

  return null;
}

import { SpringOptions, motion, useScroll } from "framer-motion";
import { CSSProperties, useContext, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { Transform } from "./Transform";
import {
  ScrollAnimationAxis,
  ScrollAnimationKeyframes,
  ScrollAnimationOffset,
} from "../types";
import { RootContext } from "../context/RootContext";
import { getInputRangeFromKeyframe } from "../utils/getInputRangeFromKeyframe";
import { getOutputRangeFromKeyframe } from "../utils/getOutputRangeFromKeyframe";

interface Props {
  children: React.ReactNode;
  animate: ScrollAnimationKeyframes;
  axis?: ScrollAnimationAxis;
  /**
   *
   */
  offset?: ScrollAnimationOffset;
  /**
   * By default, this is the scrollable area of the container. It can additionally be set as another element, to track its progress within the viewport.
   *
   * If you're not using the `Target` component, you can pass a ref to the target element here.
   */
  target?: React.MutableRefObject<HTMLElement | null>;
  spring?: SpringOptions;
}
export function Animation({
  children,
  animate,
  offset,
  axis,
  target,
  spring: springOptions,
}: Props) {
  const animationProperties = useRef<Partial<CSSProperties>>({});
  const contextTarget = useContext(RootContext);
  const { scrollXProgress, scrollYProgress } = useScroll({
    target: target ?? contextTarget,
    offset,
    layoutEffect: false,
  });
  const MotionSlot = motion(Slot);
  const scrollValue = axis === "x" ? scrollXProgress : scrollYProgress;

  return (
    <>
      {Object.entries(animate).map(([prop, keyframe]) => (
        <React.Fragment key={prop}>
          <Transform
            inputRange={getInputRangeFromKeyframe(keyframe)}
            outputRange={getOutputRangeFromKeyframe(keyframe)}
            refValues={animationProperties}
            prop={prop}
            value={scrollValue}
            springOptions={springOptions}
          />
        </React.Fragment>
      ))}
      <MotionSlot style={animationProperties.current}>{children}</MotionSlot>
    </>
  );
}

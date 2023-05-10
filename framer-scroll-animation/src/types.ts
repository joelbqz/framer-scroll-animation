import { MotionStyle } from "framer-motion";

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%";
type EdgeUnit = `${number}${SupportedEdgeUnit}`;
type NamedEdges = "start" | "end" | "center";
type EdgeString = NamedEdges | EdgeUnit | `${number}`;
type Edge = EdgeString | number;
type ProgressIntersection = [number, number];
type Intersection = `${Edge} ${Edge}`;
export type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>;

type KeyframePercentage = `${number}%`;
type KeyframeValue = Record<KeyframePercentage, string>;

export type ScrollKeyframe = string[] | KeyframeValue;

export type ScrollAnimationOffset = ScrollOffset;

export type ScrollAnimationAxis = "x" | "y";

export type ScrollAnimationKeyframes = Partial<
  Record<keyof MotionStyle, ScrollKeyframe>
>;

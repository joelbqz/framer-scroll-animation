import { ScrollKeyframe } from "../types";

export const getOutputRangeFromKeyframe = (keyframe: ScrollKeyframe) => {
  if (Array.isArray(keyframe)) {
    return keyframe;
  } else {
    return Object.values(keyframe);
  }
};

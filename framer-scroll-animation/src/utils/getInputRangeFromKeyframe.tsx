import { ScrollKeyframe } from "../types";

export const getInputRangeFromKeyframe = (keyframe: ScrollKeyframe) => {
  if (Array.isArray(keyframe)) {
    return keyframe.map((_, i) => i / (keyframe.length - 1));
  } else {
    return Object.keys(keyframe).map((key) => parseFloat(key) / 100);
  }
};

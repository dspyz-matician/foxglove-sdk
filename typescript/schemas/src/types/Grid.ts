// Generated by https://github.com/foxglove/foxglove-sdk
// Options: {}

import { PackedElementField } from "./PackedElementField";
import { Pose } from "./Pose";
import { Time } from "./Time";
import { Vector2 } from "./Vector2";

/** A 2D grid of data */
export type Grid = {
  /** Timestamp of grid */
  timestamp: Time;

  /** Frame of reference */
  frame_id: string;

  /** Origin of grid's corner relative to frame of reference; grid is positioned in the x-y plane relative to this origin */
  pose: Pose;

  /** Number of grid columns */
  column_count: number;

  /** Size of single grid cell along x and y axes, relative to `pose` */
  cell_size: Vector2;

  /** Number of bytes between rows in `data` */
  row_stride: number;

  /** Number of bytes between cells within a row in `data` */
  cell_stride: number;

  /** Fields in `data`. `red`, `green`, `blue`, and `alpha` are optional for customizing the grid's color. */
  fields: PackedElementField[];

  /** Grid cell data, interpreted using `fields`, in row-major (y-major) order */
  data: Uint8Array;
};

// News-image entry for 25 November 2026, Node 22, standard library only.
// The front-page image lives next to this file as entry.png. This script
// copies it into the directory the grader reads, byte for byte, so every
// graded run sees exactly the image committed in this repository.
//
// To try it outside the grader's container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync as copy } from "node:fs";
import { join as joinPath } from "node:path";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = new URL("./entry.png", import.meta.url);
copy(image, joinPath(dest, "entry.png"));

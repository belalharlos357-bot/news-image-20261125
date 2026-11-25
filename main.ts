// Entry for news-image-20261125: 25 November 2026 world news, one image.
// Node 22, standard library only. The newspaper front page is entry.png
// beside this file (40 stories, 9 regions, drawn with Python PIL).
// This program copies it, byte for byte, into the
// directory the grader reads, so each graded run sees the same image.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync as duplicate } from "node:fs";
import { join as joinDir } from "node:path";

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const picture = new URL("./entry.png", import.meta.url);
duplicate(picture, joinDir(target, "entry.png"));

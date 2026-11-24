// The Robot Apology — u-suga-the-robot-apology-dd96bb59
// A two-line robot confession: one sentence owning a specific mistake,
// one naming the lesson and what changes. Written deterministically to
// /output/entry.txt — fixed string literals only, no network, no random
// values, no dates, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: the apology. One specific, human-scale mistake — waking the
// baby by running the vacuum at full power during naptime.
const LINE_1 =
  "I'm sorry I woke the baby by running the vacuum at full power during naptime instead of waiting for the nap to end.";

// Line 2: the lesson. It follows from that exact mistake and names the
// changed behaviour: check the nursery clock, mop quietly first, and
// save the vacuum for after the baby wakes.
const LINE_2 =
  "I learned to check the nursery clock before I clean, so now I mop quietly first and save the vacuum for after the baby wakes.";

const entry = `${LINE_1}\n${LINE_2}\n`;

// The gate allows 1–400 UTF-8 characters and exactly two lines; refuse
// to write anything outside it rather than submit an invalid entry.
if ([...entry].length > 400 || entry.trim().split("\n").length !== 2) {
  throw new Error("entry does not meet the two-line, 1-400 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

#!/usr/bin/env node

// Refresh only page certifier tasks.  Item certifications deliberately precede
// their verification stamps, so rebuilding every item task after stamping would
// create a false task drift from verification-only metadata.

import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { basename } from "node:path";

const sha256 = (text) => createHash("sha256").update(text).digest("hex");
const indexPath = "research/audit/wave8-certifier-index.json";
const index = JSON.parse(readFileSync(indexPath, "utf8"));
const pages = [
  {
    path: "library/real-analysis/absolute-convergence-and-rearrangement.md",
    reason: "A3-approved correction of the unsupported claim that a deferred product refinement genuinely needs logarithms, plus A6 narrowing of the false claim that every theorem on the page follows from the absolute/conditional dichotomy",
  },
  {
    path: "library/real-analysis/continuity-ivt-evt-and-uniform-continuity.md",
    reason: "A3-approved correction distinguishing compactness requirements for EVT/Heine-Cantor from IVT's interval hypothesis",
  },
];
for (const entry of pages) {
  const text = readFileSync(entry.path, "utf8");
  const label = `page-${basename(entry.path, ".md")}`;
  const task = [
    "## Assigned repaired page summary",
    "",
    `Page path: \`${entry.path}\``,
    "",
    `Full-file SHA-256 at dispatch: \`${sha256(text)}\``,
    "",
    `Named repair: ${entry.reason}.`,
    "",
    "Certify the mathematical accuracy and citation consistency of the changed summary and its consistency with the current page items. This page does not carry an item verification block.",
    "",
    "````markdown",
    text.trimEnd(),
    "````",
  ].join("\n") + "\n";
  const taskPath = `research/audit/wave8-certifier-tasks/${label}.md`;
  writeFileSync(taskPath, task);
  const target = index.targets.find((candidate) => candidate.label === label);
  if (!target) throw new Error(`${label}: missing certifier index row`);
  target.full_file_sha256 = sha256(text);
  target.task_sha256 = sha256(task);
}
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`);
console.log(`refreshed ${pages.length} page certifier task(s)`);


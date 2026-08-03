#!/usr/bin/env node
// item-hash.mjs — the ONE normalized content hash for an item file.
//
// WHY THIS IS SHARED. Two mechanisms have to answer the same question — "did the
// mathematics of this item change?" — and they must never disagree:
//
//   tools/touchlog.mjs     counts repairs per item across a level's stages, which
//                          drives the twice-touched escalation.
//   tools/step8-guard.mjs  enforces R1: a rejection Alpha classified nonfatal or a
//                          false positive closes WITHOUT a content edit.
//
// A second, cruder copy of this normalization is exactly the bug this file exists
// to prevent: the two gates would then disagree about what a repair is, and the
// one that under-counts would silently license the loop the other one blocks.
//
// The `verification:` block is excluded. Recording a judge verdict, a precheck
// result or the owner's audit date rewrites the file without touching a single
// character of mathematics; hashing raw bytes once charged 53 items with a
// phantom repair in a single pass and would have fired the twice-touched
// escalation on items nobody had edited.
//
// Everything else stays in: the body obviously, but also `title`, `deps`,
// `forward_refs`, `external_refs` and `proved_here`, because changing any of
// those IS a mathematical edit even though it lives in frontmatter.

import { createHash } from "node:crypto";

/** Strip only the `verification:` frontmatter block; leave all mathematics. */
export const stripVerification = (text) => {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) return text;                              // no frontmatter: hash as-is
  const fm = m[1].replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, "");
  return fm + "\n---\n" + m[2];
};

/** Full sha256 of the normalized item text. */
export const itemContentHash = (text) =>
  createHash("sha256").update(stripVerification(text)).digest("hex");

// touchlog snapshots store a 16-hex prefix per item; an adjudication row records
// the full digest, matching the "item SHA-256" language used for the audit
// workflow's targeted rejudge receipt. Compare through `shortHash` so the two
// representations can never disagree by length alone.
export const SHORT_HASH_LENGTH = 16;
export const shortHash = (hex) => hex.slice(0, SHORT_HASH_LENGTH);

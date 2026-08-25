#!/usr/bin/env node
// item-hash.mjs — the normalized content hashes for an item file.
//
// THERE ARE TWO, THEY ARE BOTH CALLED `item_sha256` ON DISK, AND THEY ARE NOT
// INTERCHANGEABLE. Both live here, under names that cannot be confused, because
// the way this goes wrong is silent: a hash computed one way and compared to a
// hash computed the other never matches, and every consumer of that comparison
// reads the mismatch as "the item changed".
//
//   itemHashGuard   the whole `verification:` block excluded.
//                   tools/touchlog.mjs      counts repairs per item across a
//                                           level, driving twice-touched.
//                   tools/step8-guard.mjs   enforces R1: a nonfatal or
//                                           false-positive rejection closes
//                                           WITHOUT a content edit.
//                   tools/spine-audit.mjs   content_sha256 on the receipt.
//                   THIS is the form an adjudication row's `item_sha256` must
//                   carry: step8-guard matches it against a touchlog baseline.
//
//   itemHashJudge   only the two-space-indented `judge:` sub-block excluded;
//                   the rest of `verification:` is IN.
//                   tools/judge.mts              --context-hash output, and the
//                                                item_sha256 on every verdict row.
//                   tools/apply-judge-stamps.mjs the attestation it validates a
//                                                stamp against.
//                   tools/level-coverage.mjs     compares a verdict's
//                                                item_sha256 to the current text.
//
// WHY TWO. The guard form answers "did the mathematics change?", so it must
// ignore every evidence field — recording a verdict, a precheck result or an
// audit date rewrites the file without touching a character of mathematics, and
// hashing raw bytes once charged 53 items with a phantom repair in one pass.
// The judge form answers a narrower question — "is this verdict still about
// this text?" — and must exclude ONLY the block the stamping tool writes, or
// applying a pass would invalidate the pass it records. It deliberately keeps
// `verification.precheck` and `verification.audited` in scope, because a verdict
// cast before an owner audit is not evidence about the audited text.
//
// Everything else stays in both: the body obviously, but also `title`, `deps`,
// `forward_refs`, `external_refs` and `proved_here`, because changing any of
// those IS a mathematical edit even though it lives in frontmatter.

import { createHash } from "node:crypto";

/** Strip the whole `verification:` frontmatter block; leave all mathematics. */
export const stripVerification = (text) => {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) return text;                              // no frontmatter: hash as-is
  const fm = m[1].replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, "");
  return fm + "\n---\n" + m[2];
};

/** Strip only the two-space-indented `judge:` sub-block of `verification:`. */
export const stripJudgeStamp = (text) =>
  String(text).replace(/^ {2}judge:\n(?: {4}.*\n)*/m, "");

/** Full sha256 with the whole `verification:` block excluded — the form a
 *  touchlog baseline and an adjudication row's `item_sha256` are in. */
export const itemHashGuard = (text) =>
  createHash("sha256").update(stripVerification(text)).digest("hex");

/** Hash only the mathematical interface downstream consumers can cite. */
export const itemSurfaceHash = (text) => {
  const withoutVerification = stripVerification(text);
  const match = /^([\s\S]*?\n---\n)([\s\S]*)$/.exec(withoutVerification);
  const surface = !match ? withoutVerification : match[1]
    + match[2].replace(/^## (?:Scratch|Proof|Refutation|Counterexample|Verification)\b[^\n]*\n[\s\S]*?(?=^## |$(?![\s\S]))/gm, "");
  return createHash("sha256").update(surface).digest("hex");
};

/** Full sha256 with only the `judge:` stamp excluded — the form a judge verdict
 *  row's `item_sha256` and `judge.mts --context-hash` are in. */
export const itemHashJudge = (text) =>
  createHash("sha256").update(stripJudgeStamp(text)).digest("hex");

/** @deprecated Ambiguous once there are two hashes; use `itemHashGuard`. */
export const itemContentHash = itemHashGuard;

// touchlog snapshots store a 16-hex prefix per item; an adjudication row records
// the full digest, matching the "item SHA-256" language used for the audit
// workflow's targeted rejudge receipt. Compare through `shortHash` so the two
// representations can never disagree by length alone.
export const SHORT_HASH_LENGTH = 16;
export const shortHash = (hex) => hex.slice(0, SHORT_HASH_LENGTH);

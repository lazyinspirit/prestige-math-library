#!/usr/bin/env node
// touchlog.mjs — count how many times each item has been REPAIRED across a
// level's build stages, mechanically, from file content rather than from what
// an agent said it did.
//
// WHY THIS EXISTS (owner rule, 2026-07-27). A proof refuted OR FIXED more than
// once by any subagent — Beta-n-i, an authoring agent, or Alpha-n — escalates to
// a personal audit by the orchestrator. Refutation counts come from
// $JUDGE_VERDICTLOG (see tools/judge.mts). REPAIR counts had no source at all:
// they lived only in subagent prose reports, which is precisely the thing
// amendment 6 of the build workflow says not to trust ("I run the gate of
// record; compute from disk, then compare against what the agents claimed").
//
// Item files are untracked while a level is in draft, so `git log` cannot supply
// this either. Hence content snapshots.
//
// USAGE, from the repo root:
//
//   node tools/touchlog.mjs snap  research/level9-touches.json "<label>"
//   node tools/touchlog.mjs report research/level9-touches.json [--min 2]
//   node tools/touchlog.mjs audit  research/level9-touches.json research/level9-judge.jsonl
//
// `snap` records a sha256 per items/*.md. Take one after EVERY stage that can
// modify items: authoring, step-7 fixes, each step-8 batch audit, step-9 Alpha
// (the final whole-level audit; the separate seam stage was removed 2026-07-28).
// `report` counts, per id, the snapshot-to-snapshot transitions whose hash
// changed — that is the repair count.
// `audit` adds refutations from the judge ledger and prints the escalation set:
// every id whose refutations + repairs exceed one.
//
// A snapshot is cheap (a hash of every item file) and idempotent in the sense
// that taking two in a row with no edits between adds no touches.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const [, , cmd, ledgerPath, ...rest] = process.argv;
const ITEMS = "items";

const die = (m) => { console.error(m); process.exit(2); };
if (!cmd || !ledgerPath) die("usage: touchlog.mjs snap|report|audit <ledger.json> [...]");

const load = () =>
  existsSync(ledgerPath) ? JSON.parse(readFileSync(ledgerPath, "utf8")) : { snapshots: [], seeded: [] };

/** Hash everything that a REPAIR would change, and nothing a STAMP would.
 *
 *  Recording a judge verdict, a precheck result or the owner's audit date
 *  rewrites the file without touching a single character of mathematics. Hashing
 *  the raw bytes therefore charged every stamped item with a phantom repair —
 *  53 of them in one pass — which would have fired the twice-touched escalation
 *  on items nobody had edited. So the `verification:` block is excluded.
 *
 *  Everything else stays in: the body obviously, but also `title`, `deps`,
 *  `forward_refs`, `external_refs` and `proved_here`, because changing any of
 *  those IS a mathematical edit even though it lives in frontmatter. */
const stripVerification = (text) => {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) return text;                              // no frontmatter: hash as-is
  const fm = m[1].replace(/^verification:\n(?:[ \t]+.*\n?)*/m, "");
  return fm + "\n---\n" + m[2];
};

const hashes = () => {
  const out = {};
  for (const f of readdirSync(ITEMS).filter((f) => f.endsWith(".md")).sort())
    out[f.slice(0, -3)] = createHash("sha256")
      .update(stripVerification(readFileSync(join(ITEMS, f), "utf8")))
      .digest("hex").slice(0, 16);
  return out;
};

/** repair count per id: snapshot-to-snapshot transitions whose content changed.
 *  A file appearing for the first time is CREATION, not a repair. */
function repairs(led) {
  const n = {};
  for (const s of led.seeded ?? []) n[s.id] = (n[s.id] ?? 0) + (s.count ?? 1);
  const snaps = led.snapshots ?? [];
  for (let i = 1; i < snaps.length; i++) {
    const a = snaps[i - 1].hashes, b = snaps[i].hashes;
    for (const id of Object.keys(b))
      if (id in a && a[id] !== b[id]) n[id] = (n[id] ?? 0) + 1;
  }
  return n;
}

if (cmd === "snap") {
  const label = rest[0];
  if (!label) die("snap needs a label");
  const led = load();
  led.snapshots.push({ label, at: new Date().toISOString(), hashes: hashes() });
  writeFileSync(ledgerPath, JSON.stringify(led, null, 1) + "\n");
  const r = repairs(led);
  console.log(`snapshot "${label}" recorded — ${Object.keys(led.snapshots.at(-1).hashes).length} items, ` +
              `${led.snapshots.length} snapshot(s) in ledger`);
  const multi = Object.entries(r).filter(([, c]) => c > 1);
  if (multi.length) console.log(`  NOTE: ${multi.length} item(s) now repaired more than once`);
} else if (cmd === "report") {
  const min = rest.includes("--min") ? Number(rest[rest.indexOf("--min") + 1]) : 1;
  const r = repairs(load());
  const rows = Object.entries(r).filter(([, c]) => c >= min).sort((a, b) => b[1] - a[1]);
  console.log(`${rows.length} item(s) with >= ${min} repair(s)`);
  for (const [id, c] of rows) console.log(`  ${String(c).padStart(3)}  ${id}`);
} else if (cmd === "audit") {
  const judgePath = rest[0];
  const rep = repairs(load());
  const ref = {};
  if (judgePath && existsSync(judgePath))
    for (const line of readFileSync(judgePath, "utf8").split("\n")) {
      if (!line.trim()) continue;
      let d; try { d = JSON.parse(line); } catch { continue; }
      if (d.keep === false) ref[d.id] = (ref[d.id] ?? 0) + 1;
    }
  else console.log(`(no judge ledger at ${judgePath ?? "<none>"} — refutation counts unavailable)`);
  const ids = new Set([...Object.keys(rep), ...Object.keys(ref)]);
  const rows = [...ids]
    .map((id) => ({ id, ref: ref[id] ?? 0, rep: rep[id] ?? 0, tot: (ref[id] ?? 0) + (rep[id] ?? 0) }))
    .filter((r) => r.tot > 1)
    .sort((a, b) => b.tot - a.tot);
  console.log(`\nESCALATION SET (refutations + repairs > 1): ${rows.length} item(s)`);
  if (!rows.length) console.log("  none — no proof has been touched more than once");
  for (const r of rows)
    console.log(`  ${r.id}\n      refuted ${r.ref}x, repaired ${r.rep}x, total ${r.tot}`);
  console.log(`\nEach of these requires a PERSONAL audit by the orchestrator: state the nature of\n` +
              `the fault, the ramification of dropping the result, then report to the owner and\n` +
              `iterate. NEVER remove a theorem or example without explicit owner approval.`);
} else die(`unknown command: ${cmd}`);

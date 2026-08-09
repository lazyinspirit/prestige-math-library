#!/usr/bin/env node

// Apply owner-delegated published-audit stamps only for exact-current item
// tasks with a preserved GPT 5.6 Terra CERTIFIED result.  Verification metadata
// is excluded from the task hash, so the stamp does not invalidate its reader.

import { readFileSync, writeFileSync } from "node:fs";
import { itemContentHash } from "../../tools/item-hash.mjs";

const index = JSON.parse(readFileSync("research/audit/wave8-certifier-index.json", "utf8"));
const preserved = JSON.parse(readFileSync("research/audit/wave8-preserved-certifiers.json", "utf8"));
const current = new Map();
for (const capture of preserved.captures ?? []) {
  const target = index.targets.find((entry) => entry.label === capture.label);
  if (target?.task_sha256 !== capture.task_sha256 || capture.verdict !== "CERTIFIED") continue;
  const prior = current.get(capture.label);
  if (!prior || capture.ended_at > prior.ended_at) current.set(capture.label, capture);
}

const stamped = [];
const pending = [];
for (const target of index.targets) {
  const capture = current.get(target.label);
  if (!capture) { pending.push(target.label); continue; }
  if (target.type === "page") continue;
  const path = `items/${target.id}.md`;
  const source = readFileSync(path, "utf8");
  const hash = itemContentHash(source);
  if (hash !== target.normalized_sha256 || hash !== capture.normalized_sha256) throw new Error(`${target.id}: current hash does not match certified hash`);
  writeFileSync(path, addVerified(source));
  stamped.push({
    id: target.id,
    normalized_sha256: hash,
    verdict: capture.verdict,
    evidence: capture.preserved.result,
  });
}

writeFileSync("research/audit/wave8-certification-receipt.json", `${JSON.stringify({
  version: 1,
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  certified_targets: [...current.keys()].sort(),
  stamped_items: stamped.sort((a, b) => a.id.localeCompare(b.id)),
  pending,
}, null, 2)}\n`);
console.log(`applied/confirmed ${stamped.length} item stamp(s); ${current.size}/${index.targets.length} targets CERTIFIED; ${pending.length} pending`);

function addVerified(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error("frontmatter not found");
  const lines = match[1].split(/\r?\n/);
  let verification = lines.findIndex((line) => line === "verification:");
  const block = [
    "  verified:",
    "    model: gpt-5.6-terra-codex-subscription",
    "    verdict: certify",
    "    date: 2026-08-09",
    "    scope: published-audit",
    "    delegated_by: owner",
  ];
  if (verification < 0) {
    const before = lines.findIndex((line) => line === "sources:");
    const at = before < 0 ? lines.length : before;
    lines.splice(at, 0, "verification:", ...block);
  } else {
    let end = verification + 1;
    while (end < lines.length && /^\s/.test(lines[end])) end += 1;
    const old = lines.findIndex((line, index) => index > verification && index < end && line === "  verified:");
    if (old >= 0) {
      let oldEnd = old + 1;
      while (oldEnd < end && /^ {4}/.test(lines[oldEnd])) oldEnd += 1;
      lines.splice(old, oldEnd - old);
      end -= oldEnd - old;
    }
    lines.splice(end, 0, ...block);
  }
  const replacement = `---\n${lines.join("\n")}\n---\n`;
  return replacement + source.slice(match[0].length);
}


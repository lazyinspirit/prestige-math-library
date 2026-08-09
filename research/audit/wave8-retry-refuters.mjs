#!/usr/bin/env node

// Bounded resumable retries for only the Wave 8 routes that do not yet have a
// preserved result matching both the current item hash and the current task.

import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";

const argv = process.argv.slice(2);
const value = (flag) => argv[argv.indexOf(flag) + 1];
const round = Number(value("--round"));
const concurrency = Number(value("--concurrency") || 8);
if (!Number.isInteger(round) || round < 1 || !Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
  console.error("usage: node research/audit/wave8-retry-refuters.mjs --round N [--concurrency 8]");
  process.exit(2);
}

const index = JSON.parse(readFileSync("research/audit/wave8-refuter-index.json", "utf8"));
const preserved = JSON.parse(readFileSync("research/audit/wave8-preserved-refuters.json", "utf8"));
const covered = new Set((preserved.captures ?? []).filter((capture) => {
  const route = index.items.find((entry) => entry.id === capture.id);
  return route?.normalized_sha256 === capture.normalized_sha256 && route?.task_sha256 === capture.task_sha256;
}).map((capture) => capture.id));
const pending = index.items.filter((entry) => !covered.has(entry.id));
console.log(`Wave 8 refuter retry ${round}: ${covered.size}/${index.items.length} covered, ${pending.length} pending, concurrency ${concurrency}`);

let cursor = 0;
const failures = [];
const runOne = (entry) => new Promise((resolve) => {
  const label = `a6-retry${round}-${entry.id}`;
  const started = Date.now();
  const child = spawn(process.execPath, [
    "tools/dispatch.mjs", "--role", "audit-refuter",
    "--brief", "research/audit/wave8-refuter-brief.md",
    "--label", label, "--run", "wave8", "--task", entry.task, "--json",
  ], { stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "", stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => {
    failures.push({ id: entry.id, error: error.message });
    console.log(`FAIL ${entry.id} — ${error.message}`);
    resolve();
  });
  child.on("close", (code) => {
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    if (code === 0) console.log(`PASS ${entry.id} (${seconds}s)`);
    else {
      const detail = (stderr || stdout || `exit ${code}`).trim().split("\n").slice(-3).join(" | ");
      failures.push({ id: entry.id, error: detail });
      console.log(`FAIL ${entry.id} (${seconds}s) — ${detail}`);
    }
    resolve();
  });
});
const worker = async () => {
  while (cursor < pending.length) await runOne(pending[cursor++]);
};
await Promise.all(Array.from({ length: Math.min(concurrency, pending.length || 1) }, worker));
console.log(`Wave 8 refuter retry ${round}: ${pending.length - failures.length}/${pending.length} passed; ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);


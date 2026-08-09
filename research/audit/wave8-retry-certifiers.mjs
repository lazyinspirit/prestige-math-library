#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";

const argv = process.argv.slice(2);
const value = (flag) => argv[argv.indexOf(flag) + 1];
const round = Number(value("--round"));
const concurrency = Number(value("--concurrency") || 6);
if (!Number.isInteger(round) || round < 1 || !Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
  console.error("usage: node research/audit/wave8-retry-certifiers.mjs --round N [--concurrency 6]");
  process.exit(2);
}
const index = JSON.parse(readFileSync("research/audit/wave8-certifier-index.json", "utf8"));
const preserved = JSON.parse(readFileSync("research/audit/wave8-preserved-certifiers.json", "utf8"));
const covered = new Set((preserved.captures ?? []).filter((capture) => {
  const target = index.targets.find((entry) => entry.label === capture.label);
  return target?.task_sha256 === capture.task_sha256 && capture.verdict === "CERTIFIED";
}).map((capture) => capture.label));
const pending = index.targets.filter((entry) => !covered.has(entry.label));
console.log(`Wave 8 certifier retry ${round}: ${covered.size}/${index.targets.length} certified, ${pending.length} pending, concurrency ${concurrency}`);
let cursor = 0;
const failures = [];
const runOne = (entry) => new Promise((resolve) => {
  const label = `a6-retry${round}-${entry.label}`;
  const started = Date.now();
  const child = spawn(process.execPath, [
    "tools/dispatch.mjs", "--role", "certifier",
    "--brief", "research/audit/wave8-certifier-brief.md",
    "--label", label, "--run", "wave8", "--task", entry.task,
    "--timeout", "7200", "--json",
  ], { stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "", stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => { failures.push({ label: entry.label, error: error.message }); console.log(`FAIL ${entry.label} — ${error.message}`); resolve(); });
  child.on("close", (code) => {
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    if (code === 0) console.log(`PASS ${entry.label} (${seconds}s)`);
    else {
      const detail = (stderr || stdout || `exit ${code}`).trim().split("\n").slice(-3).join(" | ");
      failures.push({ label: entry.label, error: detail });
      console.log(`FAIL ${entry.label} (${seconds}s) — ${detail}`);
    }
    resolve();
  });
});
const worker = async () => { while (cursor < pending.length) await runOne(pending[cursor++]); };
await Promise.all(Array.from({ length: Math.min(concurrency, pending.length || 1) }, worker));
console.log(`Wave 8 certifier retry ${round}: ${pending.length - failures.length}/${pending.length} passed; ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);


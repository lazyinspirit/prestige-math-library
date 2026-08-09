#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";

const refuters = JSON.parse(readFileSync("research/audit/wave10-refuter-index.json", "utf8")).items;
const certifiers = JSON.parse(readFileSync("research/audit/wave10-certifier-index.json", "utf8")).targets;
const jobs = [
  ...refuters.map((entry) => ({ kind: "refuter", label: `a6-${entry.id}`, task: entry.task })),
  ...certifiers.map((entry) => ({ kind: "certifier", label: `a6-${entry.label}`, task: entry.task })),
];
const limits = { refuter: 16, certifier: 6 };
const queues = {
  refuter: jobs.filter((job) => job.kind === "refuter"),
  certifier: jobs.filter((job) => job.kind === "certifier"),
};
const failures = [];

const runOne = (job) => new Promise((resolve) => {
  const role = job.kind === "refuter" ? "audit-refuter" : "certifier";
  const brief = `research/audit/wave10-${job.kind}-brief.md`;
  const args = ["tools/dispatch.mjs", "--role", role, "--brief", brief, "--label", job.label,
    "--run", "wave10", "--task", job.task, "--timeout", "7200", "--json"];
  const started = Date.now();
  const child = spawn(process.execPath, args, { stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "", stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => { failures.push({ ...job, error: error.message }); console.log(`FAIL ${job.kind} ${job.label}: ${error.message}`); resolve(); });
  child.on("close", (code) => {
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    if (code === 0) console.log(`PASS ${job.kind} ${job.label} (${seconds}s)`);
    else { const error = (stderr || stdout || `exit ${code}`).trim().split("\n").slice(-4).join(" | "); failures.push({ ...job, error }); console.log(`FAIL ${job.kind} ${job.label} (${seconds}s): ${error}`); }
    resolve();
  });
});
const workers = (kind) => Array.from({ length: Math.min(limits[kind], queues[kind].length || 1) }, async () => {
  while (queues[kind].length) await runOne(queues[kind].shift());
});
console.log(`dispatching ${refuters.length} DeepSeek refuters at scheduler concurrency ${limits.refuter} and ${certifiers.length} Terra certifiers at concurrency ${limits.certifier}`);
await Promise.all([...workers("refuter"), ...workers("certifier")]);
console.log(`reader dispatch complete: ${jobs.length - failures.length}/${jobs.length} passed, ${failures.length} failed`);
for (const row of failures) console.log(`FAILED ${row.kind} ${row.label}: ${row.error}`);
process.exit(failures.length ? 1 : 0);

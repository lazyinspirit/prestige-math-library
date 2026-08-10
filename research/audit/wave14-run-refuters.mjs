#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const index = JSON.parse(readFileSync(join(audit, "wave14-refuter-index.json"), "utf8"));
const dispatchDir = join(audit, "wave14-dispatch");
const brief = "research/audit/wave14-refuter-brief.md";
const concurrency = 16;
const tasks = index.items.map((entry) => ({ label: `a6r2-${entry.id}`, path: entry.task }));

const passed = ({ label }) => {
  const path = join(dispatchDir, `audit-refuter-${label}.result.json`);
  if (!existsSync(path)) return false;
  try { const row = JSON.parse(readFileSync(path, "utf8")); return row.ok === true && row.model === "deepseek-v4-pro" && /VERDICT:\s*CLEAN/.test(row.tail ?? ""); }
  catch { return false; }
};
const pending = tasks.filter((task) => !passed(task));
console.log(`wave14 r2 refuters: ${tasks.length} prepared; ${tasks.length - pending.length} clean; ${pending.length} pending; scheduler concurrency ${concurrency}`);
let cursor = 0;
const failures = [];
const runOne = (task) => new Promise((resolve) => {
  const started = Date.now();
  const child = spawn(process.execPath, ["tools/dispatch.mjs", "--role", "audit-refuter", "--brief", brief, "--label", task.label, "--run", "wave14", "--task", task.path, "--timeout", "7200", "--json"], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
  let stdout = "", stderr = "";
  child.stdout.on("data", (chunk) => { stdout += chunk; }); child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => { failures.push({ label: task.label, error: error.message }); console.log(`FAIL ${task.label} — ${error.message}`); resolve(); });
  child.on("close", (code) => { const seconds = ((Date.now() - started) / 1000).toFixed(1); if (code === 0) console.log(`PASS ${task.label} (${seconds}s)`); else { const detail = (stderr || stdout || `exit ${code}`).trim().split("\n").slice(-3).join(" | "); failures.push({ label: task.label, error: detail }); console.log(`FAIL ${task.label} (${seconds}s) — ${detail}`); } resolve(); });
});
const worker = async () => { while (cursor < pending.length) await runOne(pending[cursor++]); };
await Promise.all(Array.from({ length: Math.min(concurrency, pending.length || 1) }, worker));
console.log(`wave14 r2 refuters: ${tasks.length - failures.length}/${tasks.length} dispatches passed; ${failures.length} failed`);
for (const failure of failures) console.log(`FAILED ${failure.label}: ${failure.error}`);
process.exit(failures.length ? 1 : 0);

#!/usr/bin/env node

// Inventory every Wave 8 independent-reader result, including null transport
// attempts.  Exact-current coverage remains defined by the preserved receipts;
// this file records the cost/attempt surface without turning failure into proof.

import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

const dispatchDir = "research/audit/wave8-dispatch";
const refuterIndex = JSON.parse(readFileSync("research/audit/wave8-refuter-index.json", "utf8"));
const certifierIndex = JSON.parse(readFileSync("research/audit/wave8-certifier-index.json", "utf8"));
const preservedRefuters = JSON.parse(readFileSync("research/audit/wave8-preserved-refuters.json", "utf8"));
const preservedCertifiers = JSON.parse(readFileSync("research/audit/wave8-preserved-certifiers.json", "utf8"));
const refuters = new Map(refuterIndex.items.map((entry) => [entry.id, entry]));
const certifiers = new Map(certifierIndex.targets.map((entry) => [entry.label, entry]));

function target(label, role) {
  const routes = role === "audit-refuter" ? refuters : certifiers;
  if (routes.has(label)) return label;
  for (const prefix of ["a6-current-", "a6-probe-"]) if (label.startsWith(prefix) && routes.has(label.slice(prefix.length))) return label.slice(prefix.length);
  const retry = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  return retry && routes.has(retry) ? retry : null;
}

const attempts = [];
for (const name of readdirSync(dispatchDir).filter((file) => /^(?:audit-refuter|certifier)-.*\.result\.json$/.test(file)).sort()) {
  const path = `${dispatchDir}/${name}`;
  let row;
  try { row = JSON.parse(readFileSync(path, "utf8")); } catch { continue; }
  const id = target(row.label ?? "", row.role);
  const route = row.role === "audit-refuter" ? refuters.get(id) : certifiers.get(id);
  let exactCurrentTask = false;
  if (route && existsSync(row.prompt) && existsSync(route.task)) {
    exactCurrentTask = readFileSync(row.prompt, "utf8").includes(readFileSync(route.task, "utf8").trim());
  }
  attempts.push({
    role: row.role,
    target: id,
    label: row.label,
    model: row.model,
    ok: row.ok === true,
    verdict: String(row.tail ?? "").match(/VERDICT:\s*(CLEAN|DEFECTS|CERTIFIED|REFUSED|BLOCKED)/)?.[1] ?? null,
    exact_current_task: exactCurrentTask,
    started_at: row.started_at,
    ended_at: row.ended_at,
    ms: row.ms,
    result: path,
    log: row.log,
    prompt: row.prompt,
  });
}
const grouped = (role) => {
  const rows = attempts.filter((entry) => entry.role === role);
  return {
    attempts: rows.length,
    successful_inference: rows.filter((entry) => entry.ok && entry.verdict).length,
    failed_before_verdict: rows.filter((entry) => !entry.ok || !entry.verdict).length,
    exact_current_successes: rows.filter((entry) => entry.ok && entry.verdict && entry.exact_current_task).length,
  };
};
writeFileSync("research/audit/wave8-reader-attempts.json", `${JSON.stringify({
  version: 1,
  scope: "wave8-a6-independent-reader-attempt-inventory",
  generated_at: new Date().toISOString(),
  summary: {
    note: "attempts counts surviving mutable dispatch result paths; canonical retry paths can overwrite an earlier null attempt. Append-only exact-current mathematical evidence is counted separately below.",
    audit_refuter: grouped("audit-refuter"),
    certifier: grouped("certifier"),
    preserved_exact_current: {
      audit_refuter: preservedRefuters.coverage,
      certifier: preservedCertifiers.coverage,
    },
  },
  attempts,
}, null, 2)}\n`);
console.log(`wrote ${attempts.length} reader attempts (${attempts.filter((entry) => entry.ok && entry.verdict).length} verdict-bearing)`);

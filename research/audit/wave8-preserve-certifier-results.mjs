#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const auditDir = "research/audit";
const dispatchDir = `${auditDir}/wave8-dispatch`;
const preserveDir = `${auditDir}/wave8-preserved-certifiers`;
const receiptPath = `${auditDir}/wave8-preserved-certifiers.json`;
const index = JSON.parse(readFileSync(`${auditDir}/wave8-certifier-index.json`, "utf8"));
const indexed = new Map(index.targets.map((entry) => [entry.label, entry]));
const hash = (value) => createHash("sha256").update(value).digest("hex");
const receipt = existsSync(receiptPath)
  ? JSON.parse(readFileSync(receiptPath, "utf8"))
  : { version: 1, scope: "wave8-a6-current-task-terra-certifications", captures: [] };
const keys = new Set(receipt.captures.map((entry) => entry.capture_sha256));
mkdirSync(preserveDir, { recursive: true });

function targetFromLabel(label) {
  if (indexed.has(label)) return label;
  for (const prefix of ["a6-current-", "a6-probe-"]) {
    if (label.startsWith(prefix) && indexed.has(label.slice(prefix.length))) return label.slice(prefix.length);
  }
  const retry = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  return retry && indexed.has(retry) ? retry : null;
}

let added = 0;
for (const name of readdirSync(dispatchDir).filter((file) => file.startsWith("certifier-") && file.endsWith(".result.json")).sort()) {
  const resultPath = `${dispatchDir}/${name}`;
  const resultRaw = readFileSync(resultPath);
  let result;
  try { result = JSON.parse(resultRaw); } catch { continue; }
  const label = targetFromLabel(result.label ?? "");
  const target = indexed.get(label);
  if (!target || !result.ok || result.model !== "gpt-5.6-terra" || result.role !== "certifier") continue;
  const verdict = String(result.tail ?? "").match(/VERDICT:\s*(CERTIFIED|REFUSED|BLOCKED)/)?.[1];
  if (!verdict || !existsSync(result.log) || !existsSync(result.prompt)) continue;
  const taskText = readFileSync(target.task, "utf8").trim();
  const logRaw = readFileSync(result.log);
  const promptRaw = readFileSync(result.prompt);
  if (!promptRaw.toString("utf8").includes(taskText)) continue;
  const captureSha256 = hash(Buffer.concat([resultRaw, Buffer.from([0]), logRaw, Buffer.from([0]), promptRaw]));
  if (keys.has(captureSha256)) continue;
  const stem = `${label}--${captureSha256.slice(0, 16)}`;
  const preserved = {
    result: `${preserveDir}/${stem}.result.json`,
    log: `${preserveDir}/${stem}.log`,
    prompt: `${preserveDir}/${stem}.prompt.md`,
  };
  writeFileSync(preserved.result, resultRaw);
  writeFileSync(preserved.log, logRaw);
  writeFileSync(preserved.prompt, promptRaw);
  receipt.captures.push({
    label,
    type: target.type,
    normalized_sha256: target.normalized_sha256,
    full_file_sha256: target.full_file_sha256,
    task_sha256: target.task_sha256,
    verdict,
    original_label: result.label,
    original_result: resultPath,
    preserved,
    sha256: { result: hash(resultRaw), log: hash(logRaw), prompt: hash(promptRaw) },
    capture_sha256: captureSha256,
    started_at: result.started_at,
    ended_at: result.ended_at,
    captured_at: new Date().toISOString(),
  });
  keys.add(captureSha256);
  added += 1;
}
receipt.captures.sort((a, b) => a.label.localeCompare(b.label) || a.capture_sha256.localeCompare(b.capture_sha256));
const current = new Map();
for (const capture of receipt.captures) {
  const target = indexed.get(capture.label);
  if (target?.task_sha256 !== capture.task_sha256) continue;
  const prior = current.get(capture.label);
  if (!prior || capture.ended_at > prior.ended_at) current.set(capture.label, capture);
}
receipt.coverage = {
  routed: index.targets.length,
  exact_current_results: current.size,
  certified: [...current.values()].filter((entry) => entry.verdict === "CERTIFIED").length,
  refused: [...current.values()].filter((entry) => entry.verdict === "REFUSED").map((entry) => entry.label),
  blocked: [...current.values()].filter((entry) => entry.verdict === "BLOCKED").map((entry) => entry.label),
  pending: index.targets.filter((entry) => !current.has(entry.label)).map((entry) => entry.label),
};
writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`preserved ${added} new result(s); exact-current ${current.size}/${index.targets.length}, CERTIFIED ${receipt.coverage.certified}, REFUSED ${receipt.coverage.refused.length}, BLOCKED ${receipt.coverage.blocked.length}`);


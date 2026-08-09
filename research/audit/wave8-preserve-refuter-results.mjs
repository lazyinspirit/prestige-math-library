#!/usr/bin/env node

// Preserve successful, current-hash Wave 8 DeepSeek audit-refuter packets.
// Canonical dispatch files are mutable retry locations; this archive makes the
// evidence append-only and binds it to the normalized item hash in the routing
// index.  Failed transport attempts are counted but never become evidence.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const auditDir = "research/audit";
const dispatchDir = `${auditDir}/wave8-dispatch`;
const preserveDir = `${auditDir}/wave8-preserved-refuters`;
const receiptPath = `${auditDir}/wave8-preserved-refuters.json`;
const index = JSON.parse(readFileSync(`${auditDir}/wave8-refuter-index.json`, "utf8"));
const indexed = new Map(index.items.map((entry) => [entry.id, entry]));
const hash = (value) => createHash("sha256").update(value).digest("hex");

const receipt = existsSync(receiptPath)
  ? JSON.parse(readFileSync(receiptPath, "utf8"))
  : { version: 1, scope: "wave8-a6-current-hash-refuter-results", captures: [] };
const captureKeys = new Set(receipt.captures.map((entry) => entry.capture_sha256));
mkdirSync(preserveDir, { recursive: true });

function idFromLabel(label) {
  if (indexed.has(label)) return label;
  for (const prefix of ["a6-current-", "a6-probe-"]) {
    if (label.startsWith(prefix) && indexed.has(label.slice(prefix.length))) return label.slice(prefix.length);
  }
  const retry = label.match(/^a6-retry\d+-(.+)$/)?.[1];
  if (retry && indexed.has(retry)) return retry;
  return null;
}

let added = 0;
for (const resultName of readdirSync(dispatchDir).filter((name) => name.startsWith("audit-refuter-") && name.endsWith(".result.json")).sort()) {
  const resultPath = `${dispatchDir}/${resultName}`;
  const resultRaw = readFileSync(resultPath);
  let result;
  try { result = JSON.parse(resultRaw); } catch { continue; }
  const id = idFromLabel(result.label ?? "");
  const entry = indexed.get(id);
  if (!entry) continue;
  const verdict = String(result.tail ?? "").match(/VERDICT:\s*(CLEAN|DEFECTS)/)?.[1];
  if (!result.ok || result.model !== "deepseek-v4-pro" || result.role !== "audit-refuter" || !verdict) continue;
  if (!existsSync(result.log) || !existsSync(result.prompt)) continue;
  const logRaw = readFileSync(result.log);
  const promptRaw = readFileSync(result.prompt);
  const promptText = promptRaw.toString("utf8");
  const taskText = readFileSync(entry.task, "utf8").trim();
  if (!promptText.includes(entry.normalized_sha256) || !promptText.includes(taskText)) continue;
  const captureSha256 = hash(Buffer.concat([resultRaw, Buffer.from([0]), logRaw, Buffer.from([0]), promptRaw]));
  if (captureKeys.has(captureSha256)) continue;

  const stem = `${entry.id}--${captureSha256.slice(0, 16)}`;
  const preserved = {
    result: `${preserveDir}/${stem}.result.json`,
    log: `${preserveDir}/${stem}.log`,
    prompt: `${preserveDir}/${stem}.prompt.md`,
  };
  writeFileSync(preserved.result, resultRaw);
  writeFileSync(preserved.log, logRaw);
  writeFileSync(preserved.prompt, promptRaw);
  receipt.captures.push({
    id,
    normalized_sha256: entry.normalized_sha256,
    task_sha256: entry.task_sha256,
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
  captureKeys.add(captureSha256);
  added += 1;
}

receipt.captures.sort((a, b) => a.id.localeCompare(b.id) || a.capture_sha256.localeCompare(b.capture_sha256));
const current = new Map();
for (const capture of receipt.captures) {
  const route = indexed.get(capture.id);
  if (route?.normalized_sha256 !== capture.normalized_sha256 || route?.task_sha256 !== capture.task_sha256) continue;
  const prior = current.get(capture.id);
  if (!prior || capture.verdict === "DEFECTS" || capture.ended_at > prior.ended_at) current.set(capture.id, capture);
}
receipt.coverage = {
  routed: index.items.length,
  exact_current_results: current.size,
  clean: [...current.values()].filter((entry) => entry.verdict === "CLEAN").length,
  defects: [...current.values()].filter((entry) => entry.verdict === "DEFECTS").length,
  pending: index.items.filter((entry) => !current.has(entry.id)).map((entry) => entry.id),
};
writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`preserved ${added} new result(s); exact-current coverage ${current.size}/${index.items.length}, CLEAN ${receipt.coverage.clean}, DEFECTS ${receipt.coverage.defects}`);
if (receipt.coverage.pending.length) console.log(`pending: ${receipt.coverage.pending.join(", ")}`);

#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const id = "cex-differentiable-with-unbounded-derivative-is-not-lipschitz";
const targetPath = `items/${id}.md`;
const target = readFileSync(join(root, targetPath), "utf8");
const fm = target.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
const deps = (fm.match(/^deps:\s*\[([^\]]*)\]/m)?.[1] ?? "")
  .split(",").map((value) => value.trim()).filter(Boolean);
const contracts = JSON.parse(readFileSync(join(root, "research/audit/wave10-proof-contracts.json"), "utf8"));
const provenance = readFileSync(join(root, "research/audit/wave10-real-analysis.provenance.jsonl"), "utf8")
  .split(/\r?\n/).filter(Boolean).map(JSON.parse).find((row) => row.id === id);
const failed = JSON.parse(readFileSync(join(root, "research/audit/wave10-dispatch/certifier-a6-source-unlp-tls.result.json"), "utf8"));

const task = [
  `## Assigned exact-final source-only repair — \`${id}\``, "",
  "Audit-Alpha removed the unreadable UNLP endpoint after the first Terra source-disposition reader required replacement. It added the live official MIT lecture-note URL `https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf`, whose page 2 explicitly states that the square-root function on `[0,1]` is not Lipschitz and supplies the unbounded difference-quotient sequence. The current item adapts that standard witness to the punctured domain `(0,1]` and proves the punctured-domain contradiction locally.", "",
  "This is a source/provenance-only repair. Independently verify the exact current target, its proof, all current dependencies, the replacement URL's reader usability and semantic support, and the current provenance row. Certify only if the exact-final item is correct and the replacement closes the source defect. Do not treat the prior refused attempt as a verdict on the repaired text.", "",
  `Item path: \`${targetPath}\``, "",
  `Normalized exact-final SHA-256 at dispatch: \`${itemContentHash(target)}\``, "",
  "## Prior append-only refused source disposition", "", "```json", JSON.stringify(failed, null, 2), "```", "",
  "## Complete exact-current target", "", "````markdown", target.trimEnd(), "````", "",
  "## Exact-current provenance row", "", "```json", JSON.stringify(provenance, null, 2), "```", "",
  "## Exact-current proof contract", "", "```json", JSON.stringify(contracts.contracts[id], null, 2), "```", "",
  `## Complete exact-current declared dependencies (${deps.length})`, "",
  ...deps.flatMap((dep) => [
    `### \`${dep}\``, "", "````markdown",
    readFileSync(join(root, `items/${dep}.md`), "utf8").trimEnd(), "````", "",
  ]),
].join("\n") + "\n";

const out = join(root, "research/audit/wave10-certifier-tasks/cex-differentiable-source-repair.md");
writeFileSync(out, task);
writeFileSync(join(root, "research/audit/wave10-source-repair-certifier-index.json"), `${JSON.stringify({
  version: 1,
  scope: "wave10-a6-source-only-repair",
  targets: [{
    label: "cex-differentiable-source-repair",
    type: "item-source-repair",
    id,
    normalized_sha256: itemContentHash(target),
    task: "research/audit/wave10-certifier-tasks/cex-differentiable-source-repair.md",
    task_sha256: createHash("sha256").update(task).digest("hex"),
  }],
}, null, 2)}\n`);
console.log(`assembled exact-final source-repair certifier for ${id}: ${itemContentHash(target)}`);

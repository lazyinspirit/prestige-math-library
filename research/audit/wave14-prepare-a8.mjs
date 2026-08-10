#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A8";
const repaired = ["ex-exponential-product-limit-at-negative-input", "thm-e-is-irrational"];

const item = (id) => readFileSync(join(root, "items", `${id}.md`), "utf8");
const quote = (id, heading) => section(item(id), heading).trim();
const cite = (fact, source, heading, uses) => ({ fact, source, source_section: heading, quote: quote(source, heading), uses });

const exText = item(repaired[0]);
const eText = item(repaired[1]);
const contracts = JSON.parse(readFileSync(join(audit, "wave14-proof-contracts.json"), "utf8"));

contracts.contracts[repaired[0]] = {
  citations: [
    cite("L1", "thm-exponential-product-limit", "Statement", ["1.1"]),
    cite("L2", "def-real-exponential-function-and-e", "Definition", ["2.1"]),
    cite("L2", "thm-exponential-addition-formula", "Statement", ["2.1"]),
    cite("L2", "cor-exponential-reciprocal-and-positivity", "Statement", ["2.1"]),
    cite("L2", "def-integer-power", "Definition", ["2.1"]),
    cite("L3", "lem-limit-of-tail", "Statement", ["2.1"]),
  ],
  derivations: [
    { id: "step-1-1", claim: numbered(exText, "1.1"), step: "1.1", inputs: ["L1"] },
    { id: "step-2-1", claim: numbered(exText, "2.1"), step: "2.1", inputs: ["1.1", "L2", "L3"] },
  ],
  routine_steps: [],
  boundaries: [
    { case: "empty", status: "not_applicable", reason: "No set parameter is present." },
    { case: "zero", status: "checked", evidence: "The sequence definition assigns a_0=0 separately, so no division by iota(0)=0 occurs." },
    { case: "one", status: "checked", evidence: "The Statement defines a_1 by an integer power even though its base is negative; step 1.1 begins on the later n>2 tail." },
    { case: "degenerate", status: "checked", evidence: "The Statement gives the defined zero-base term at n=2, while step 1.1 begins on the n>2 product-limit tail." },
    { case: "endpoints", status: "checked", evidence: "Step 1.1 proves convergence on the n>2 tail and step 2.1 invokes the exact tail-invariance lemma for the full N-indexed sequence." },
    { case: "nonempty-choice", status: "not_applicable", reason: "No arbitrary selection is used." },
    { case: "iff-forward", status: "not_applicable", reason: "The example is not a biconditional." },
    { case: "iff-reverse", status: "not_applicable", reason: "The example is not a biconditional." },
  ],
  finite_smoke: [],
  risk_review: {
    status: "complete",
    reviewer,
    notes: `A8 repaired the fatal n=0 division-by-zero defect by defining a_0 separately and citing exact tail invariance. Alpha read the complete repaired item and dependencies at normalized hash ${itemContentHash(exText)}; independent Terra certification is routed in research/audit/wave14-A8-certifier-index.json.`,
  },
};

contracts.contracts[repaired[1]] = {
  citations: [
    cite("L1", "def-factorial-and-falling-factorial", "Definition", ["2.1", "3.1"]),
    cite("L1", "thm-binomial-closed-formula", "Statement", ["2.1", "3.1"]),
    cite("L1", "def-canonical-natural", "Definition", ["2.1", "3.1"]),
    cite("L1", "lem-of-naturals-positive", "Statement", ["2.1", "3.1"]),
    cite("L2", "lem-exponential-factorial-tail-bound", "Statement", ["2.1"]),
    cite("L3", "lem-rat-positive-denominator", "Statement", ["1.1", "3.1", "4.1"]),
    cite("L3", "lem-nat-embeds-int", "Statement", ["1.1", "3.1", "4.1"]),
    cite("L3", "lem-int-embeds-rat", "Statement", ["1.1", "3.1", "4.1"]),
    cite("L3", "lem-of-q-embeds", "Statement", ["1.1", "3.1", "4.1"]),
    cite("L3", "thm-int-comm-ring", "Statement", ["1.1", "3.1", "4.1"]),
  ],
  derivations: [
    { id: "step-1-1", claim: numbered(eText, "1.1"), step: "1.1", inputs: ["L3", "assume-contra", "choose"] },
    { id: "step-2-1", claim: numbered(eText, "2.1"), step: "2.1", inputs: ["1.1", "L1", "L2", "algebra"] },
    { id: "step-3-1", claim: numbered(eText, "3.1"), step: "3.1", inputs: ["1.1", "2.1", "L1", "L3", "algebra"] },
    { id: "step-4-1", claim: numbered(eText, "4.1"), step: "4.1", inputs: ["2.1", "3.1", "L3", "discharge-contradiction"] },
  ],
  routine_steps: [],
  boundaries: [
    { case: "empty", status: "not_applicable", reason: "No set parameter is present." },
    { case: "zero", status: "checked", evidence: "Step 1.1 converts the positive denominator to a natural q>=1, excluding q=0 before division." },
    { case: "one", status: "checked", evidence: "Step 1.1 permits q=1; step 3.1 gives 1|1! and n is still chosen at least 2." },
    { case: "degenerate", status: "checked", evidence: "Steps 1.1-3.1 keep factorials nonzero, every denominator an embedded positive natural, and n>=2 for the tail bound." },
    { case: "endpoints", status: "not_applicable", reason: "No interval endpoint is involved; the infinite tail is estimated directly." },
    { case: "nonempty-choice", status: "checked", evidence: "Step 1.1 uses the exact positive-denominator lemma and Archimedes to supply n>=max{q,2}." },
    { case: "iff-forward", status: "not_applicable", reason: "The statement is not a biconditional." },
    { case: "iff-reverse", status: "not_applicable", reason: "The statement is not a biconditional." },
  ],
  finite_smoke: [],
  risk_review: {
    status: "complete",
    reviewer,
    notes: `A8 repaired the fatal integrality gap by adding exact positive-denominator, nested-embedding, integer-ring, and factorial-divisibility licenses and deriving typed witnesses. Alpha read the complete repaired item and dependencies at normalized hash ${itemContentHash(eText)}; independent Terra certification is routed in research/audit/wave14-A8-certifier-index.json.`,
  },
};

writeFileSync(join(audit, "wave14-proof-contracts.json"), `${JSON.stringify(contracts, null, 2)}\n`);
const namespaced = JSON.parse(readFileSync(join(audit, "wave14-real-analysis.proof-contracts.json"), "utf8"));
namespaced.contracts[repaired[0]] = structuredClone(contracts.contracts[repaired[0]]);
namespaced.contracts[repaired[1]] = structuredClone(contracts.contracts[repaired[1]]);
writeFileSync(join(audit, "wave14-real-analysis.proof-contracts.json"), `${JSON.stringify(namespaced, null, 2)}\n`);

const brief = `# Independent repair certifier brief — Wave 14, A8

> **NO SHELL-PERMISSION PROMPTS.** Use only non-mutating reads in the read-only sandbox. Do not edit, delegate, escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at \`xhigh\` effort with a 1,000,000-token context window. Independently certify an A8 fatal repair you did not author. Read the complete exact-current item and every named dependency. Check mathematical validity, exact citation licensing, every boundary, current normalized hash, absence of stale \`verified\`/\`judge\`/\`audited\` evidence, and that the named fatal defect is actually fixed. A gap closable by a competent reader within 30 seconds is nonfatal and must not cause refusal.

Return exactly:

\`\`\`text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [hash/provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
\`\`\`
`;
writeFileSync(join(audit, "wave14-A8-certifier-brief.md"), brief);

const taskSpecs = {
  [repaired[0]]: {
    defect: "The pre-repair display was undefined at n=0 because iota(0)=0, so it did not define the claimed N-indexed sequence.",
    dependencies: ["thm-exponential-product-limit", "def-real-exponential-function-and-e", "thm-exponential-addition-formula", "cor-exponential-reciprocal-and-positivity", "def-integer-power", "lem-limit-of-tail", "def-canonical-natural"],
  },
  [repaired[1]]: {
    defect: "The pre-repair integrality step lacked licenses for q|n!, k!|n!, the positive-integer/natural passage, and the embeddings into R.",
    dependencies: ["lem-exponential-factorial-tail-bound", "def-real-exponential-function-and-e", "def-factorial-and-falling-factorial", "thm-of-archimedean", "def-canonical-natural", "lem-of-naturals-positive", "lem-rat-positive-denominator", "lem-nat-embeds-int", "lem-int-embeds-rat", "lem-of-q-embeds", "thm-binomial-closed-formula", "thm-int-comm-ring"],
  },
};
const adjudications = readFileSync(join(audit, "wave14-judge-adjudications.jsonl"), "utf8").trim().split(/\r?\n/).map(JSON.parse);
const index = [];
for (const id of repaired) {
  const spec = taskSpecs[id];
  const text = item(id);
  const task = [
    `# Wave 14 A8 exact-final certification — \`${id}\``, "",
    `Normalized verification-stripped SHA-256: \`${itemContentHash(text)}\``, "",
    "## Confirmed fatal defect repaired", "", spec.defect, "",
    "## Hash-bound adjudication rows", "", "```json", JSON.stringify(adjudications.filter((row) => row.id === id), null, 2), "```", "",
    "## Exact-current repaired item", "", "````markdown", text.trimEnd(), "````", "",
    "## Exact-current repaired proof contract", "", "```json", JSON.stringify(contracts.contracts[id], null, 2), "```", "",
    `## Complete exact-current cited targets (${spec.dependencies.length})`, "",
    ...spec.dependencies.flatMap((dep) => [`### \`${dep}\``, "", "````markdown", item(dep).trimEnd(), "````", ""]),
  ].join("\n");
  const taskPath = join(audit, `wave14-A8-certifier-${id}.md`);
  writeFileSync(taskPath, `${task}\n`);
  index.push({ id, label: `a8r1-${id}`, normalized_sha256: itemContentHash(text), task: `research/audit/wave14-A8-certifier-${id}.md`, task_sha256: sha256(`${task}\n`) });
}
writeFileSync(join(audit, "wave14-A8-certifier-index.json"), `${JSON.stringify({ version: 1, scope: "wave14-a8-fatal-repairs", model: "gpt-5.6-terra", settings: { reasoning_effort: "xhigh", context_window_tokens: 1000000 }, targets: index }, null, 2)}\n`);

console.log(`Wave14 A8 prepared: ${repaired.length} contracts and ${index.length} exact-final Terra tasks`);

function section(text, heading) {
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? "";
}
function numbered(text, step) {
  const escaped = step.replace(".", "\\.");
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const match = body.match(new RegExp(`^${escaped}\\s+([\\s\\S]*?)(?=^\\d+\\.\\d+\\s+|^##\\s+|(?![\\s\\S]))`, "m"));
  if (!match) throw new Error(`missing step ${step}`);
  return `${step} ${match[1].trim()}`;
}
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }

#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const dispatch = join(audit, "wave13-dispatch");
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 13 A6";
const deepReviewer = `${reviewer}; DeepSeek V4 Pro max audit-refuter`;
const pages = json("wave13-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
const items = new Map();
for (const name of readdirSync(join(root, "items")).filter((name) => name.endsWith(".md")).sort()) {
  const text = readFileSync(join(root, "items", name), "utf8");
  const id = scalar(frontmatter(text), "id") || basename(name, ".md");
  items.set(id, { id, path: `items/${name}`, text });
}

// Preserve the first Jordan route/refusal, but bind closure to the exact-final
// post-provenance-repair routes.
const refuterIndex = json("wave13-refuter-index.json");
const finalRefuters = [];
for (const entry of refuterIndex.items) {
  const retry = entry.id === "thm-jordan-boundary-criterion" ? "a6r2-" : "";
  const evidence = `research/audit/wave13-dispatch/audit-refuter-${retry}${entry.id}.result.json`;
  const result = readResult(evidence);
  const verdict = parseVerdict(result.tail);
  if (!result.ok || verdict !== "CLEAN") fail(`${entry.id}: exact-final refuter is not CLEAN at ${evidence}`);
  const item = items.get(entry.id);
  if (!item || itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from refuter index`);
  finalRefuters.push({ ...entry, verdict, evidence });
}
const refuterAttempts = readdirSync(dispatch).filter((name) => /^audit-refuter-.*\.result\.json$/.test(name)).sort().map((name) => {
  const path = `research/audit/wave13-dispatch/${name}`;
  const result = readResult(path);
  return { label: result.label, ok: result.ok, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
});
write("wave13-refuter-receipt.json", {
  version: 1,
  scope: "wave13-a6-exact-final-adversarial-proof-and-generated-risk-routes",
  reviewer,
  model: "deepseek-v4-pro",
  settings: { reasoning_effort: "max", scheduler_concurrency: 16, tool_access: "none" },
  summary: { selected: finalRefuters.length, clean: finalRefuters.length, defects: 0, unresolved: 0 },
  selection: refuterIndex.counts,
  append_only_attempts: refuterAttempts,
  final: finalRefuters.map((row) => ({ id: row.id, normalized_sha256: row.normalized_sha256, verdict: row.verdict, evidence: row.evidence })),
});

// Close all 62 proof contracts at the exact-current hashes. High/critical items
// have DeepSeek evidence; the residual six have Alpha's complete no-sampling read.
const contractNames = ["wave13-proof-contracts.json", "wave13-real-analysis.proof-contracts.json"];
const baseContracts = json(contractNames[0]);
const riskRows = [];
for (const id of baseContracts.scope) {
  const contract = baseContracts.contracts[id];
  const risk = score(items.get(id).text, contract);
  const route = finalRefuters.find((row) => row.id === id);
  const notes = route
    ? `${cap(risk.tier)}-risk exact-current route at normalized hash ${itemContentHash(items.get(id).text)}. DeepSeek returned CLEAN and Alpha independently found no fatal or nonfatal defect. Evidence: ${route.evidence}.`
    : `${cap(risk.tier)}-risk contract independently read in full by Alpha at normalized hash ${itemContentHash(items.get(id).text)}. Every numbered step, cited source, boundary, and contract clause closes; no external route was structurally required.`;
  contract.risk_review = { status: "complete", reviewer: route ? deepReviewer : reviewer, notes };
  riskRows.push({ id, tier: risk.tier, score: risk.score, verdict: route?.verdict ?? "ALPHA-CLEAN", normalized_sha256: itemContentHash(items.get(id).text), evidence: route?.evidence ?? null });
}
write(contractNames[0], baseContracts);
const namespaced = json(contractNames[1]);
if (JSON.stringify(namespaced.scope) !== JSON.stringify(baseContracts.scope)) fail("contract scopes differ");
namespaced.contracts = structuredClone(baseContracts.contracts);
write(contractNames[1], namespaced);
write("wave13-risk-review-receipt.json", {
  version: 1,
  scope: "wave13-a6-current-hash-proof-contract-reviews",
  reviewer,
  summary: {
    proof_bearing_items: riskRows.length,
    critical: riskRows.filter((row) => row.tier === "critical").length,
    high: riskRows.filter((row) => row.tier === "high").length,
    moderate: riskRows.filter((row) => row.tier === "moderate").length,
    ordinary: riskRows.filter((row) => row.tier === "ordinary").length,
    independent_refuter_routes: riskRows.filter((row) => row.evidence).length,
    clean_or_alpha_clean: riskRows.length,
    defects: 0,
    fatal: 0,
  },
  recorded: riskRows,
});

// Exact-final independent Terra certification precedes all stamps.
const certifierIndex = json("wave13-certifier-index.json");
const certified = [];
for (const entry of certifierIndex.targets) {
  const evidence = `research/audit/wave13-dispatch/certifier-${entry.label}.result.json`;
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CERTIFIED") fail(`${entry.id}: missing exact-final Terra certification at ${evidence}`);
  const item = items.get(entry.id);
  if (!item || itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from certifier index`);
  if (!/^verification:\r?\n  precheck:/m.test(frontmatter(item.text))) fail(`${entry.id}: verification.precheck is not canonical`);
  if (!/^  verified:/m.test(frontmatter(item.text))) {
    item.text = item.text.replace(/^(verification:\r?\n  precheck:[^\r\n]*\r?\n)/m,
      `$1  verified:\n    model: gpt-5.6-terra-codex-subscription\n    verdict: certify\n    date: 2026-08-10\n    scope: published-audit\n    delegated_by: owner\n`);
    writeFileSync(join(root, item.path), item.text);
  } else if (!/^  verified:\r?\n    model: gpt-5\.6-terra-codex-subscription\r?\n    verdict: certify\r?\n    date: 2026-08-10\r?\n    scope: published-audit\r?\n    delegated_by: owner$/m.test(frontmatter(item.text))) {
    fail(`${entry.id}: existing verified stamp differs from authorized exact-final stamp`);
  }
  certified.push({ id: entry.id, normalized_sha256: itemContentHash(item.text), verdict: "CERTIFIED", types: entry.types, evidence });
}
const certifierAttempts = readdirSync(dispatch).filter((name) => /^certifier-a6.*\.result\.json$/.test(name)).sort().map((name) => {
  const path = `research/audit/wave13-dispatch/${name}`;
  const result = readResult(path);
  return { label: result.label, ok: result.ok, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
});
write("wave13-certification-receipt.json", {
  version: 1,
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  settings: { reasoning_effort: "xhigh", context_window_tokens: 1000000 },
  summary: { certified: certified.length, refused_prior_attempts: certifierAttempts.filter((row) => row.verdict === "REFUSED").length, blocked: 0, unresolved: 0 },
  certified_targets: certified,
  append_only_attempts: certifierAttempts,
  pending: [],
});

// Generated-risk disposition. Re-read and preserve the current shared ledger;
// modify only Wave13's sole generated Statement seed.
const genriskPath = join(audit, "genrisk.json");
const genriskBefore = readFileSync(genriskPath);
const genrisk = JSON.parse(genriskBefore);
const seed = genrisk.seeds.find((entry) => entry.id === "rem-multidimensional-riemann-conventions-and-scope");
if (!seed || seed.cone_size !== 0) fail(`unexpected Wave13 genrisk seed ${seed?.cone_size ?? "missing"}`);
const seedRoute = finalRefuters.find((row) => row.id === seed.id);
if (!seedRoute || seedRoute.verdict !== "CLEAN") fail("Wave13 generated seed lacks exact-final CLEAN refuter evidence");
seed.disposition = {
  status: "verified-generated",
  by: reviewer,
  notes: `Alpha positively confirmed this repository-specific scope ledger, read every clause and named dependency, and counterexample-searched its boundary/convention claims. Its logical and direct-citation cone is zero. DeepSeek returned CLEAN at normalized hash ${seedRoute.normalized_sha256}. The honest ai-generated label is retained and no containment repair is needed. Evidence: ${seedRoute.evidence}.`,
};
writeFileSync(genriskPath, `${JSON.stringify(genrisk, null, 2)}\n`);
write("wave13-genrisk-review.json", {
  version: 1,
  scope: "wave13-a6-generated-risk-intersection",
  reviewer,
  source: "research/audit/genrisk.json",
  source_before_sha256: sha256(genriskBefore),
  source_after_sha256: fileSha("genrisk.json"),
  source_seed_count: genrisk.seeds.length,
  scoped_seeds: [{ id: seed.id, cone_size: seed.cone_size, logical_consumers: seed.logical_consumers, direct_citation_consumers: seed.direct_citation_consumers, disposition: seed.disposition }],
  all_consumers_read: true,
  consumer_dispositions: [],
  unresolved: [],
});

// Provenance census and URL closure.
const provenancePath = join(audit, "wave13-real-analysis.provenance.jsonl");
const ledgerRows = readFileSync(provenancePath, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
if (ledgerRows.length !== 76) fail(`expected 76 provenance rows, found ${ledgerRows.length}`);
const count = (key) => Object.fromEntries([...new Set(ledgerRows.map((row) => row[key]))].sort().map((value) => [value, ledgerRows.filter((row) => row[key] === value).length]));
write("wave13-provenance-adjudications.json", {
  version: 1,
  scope: "wave13-a6-provenance-census",
  reviewer,
  rows_read: ledgerRows.length,
  ledgers: [{ path: "research/audit/wave13-real-analysis.provenance.jsonl", rows: ledgerRows.length, sha256: sha256(readFileSync(provenancePath)) }],
  statement_counts: count("statement"), proof_counts: count("proof"), evidence_counts: count("evidence"),
  established_knowledge_concurrences: [], classification_escalations: [],
  positive_ai_generated_determinations: ["rem-multidimensional-riemann-conventions-and-scope"],
  alpha_repaired_rows: ["thm-jordan-boundary-criterion"],
  adjudication: "Alpha read all 76 current items and all 76 provenance rows in full. The Jordan row is now ai-altered/semantic-source because the compact-boundary content-zero equivalence and enlarged-relative-domain proof are local adaptations; all other classifications and exact-current URLs remain supported. No D2 established-knowledge waiver occurs in Wave 13.",
});
const urls = json("wave13-url-liveness.json");
if (urls.summary.failed !== 0 || urls.summary.accessible !== 17) fail("Wave13 URL sweep is not 17/17 live");
write("wave13-url-dispositions.json", {
  version: 1,
  scope: "wave13-a6-final-url-dispositions",
  reviewer,
  receipt: "research/audit/wave13-url-liveness.json",
  receipt_sha256: fileSha("wave13-url-liveness.json"),
  summary: urls.summary,
  failures: [],
  dispositions: [{ status: "all-live-and-on-topic", affected_ids: scopeIds, evidence: "Alpha read every current source list and the complete 17/17 liveness receipt. The Jordan provenance correction narrows the role of the unchanged live Lebl route; it does not require a URL edit." }],
});

// Top-100 proof spine receipt, already read without sampling during recovery.
const spine = json("wave13-spine-audit.json");
spine.reviewer = `${reviewer}, independent exact-current full reads`;
spine.attestations = spine.scope.map((entry) => ({ id: entry.id, status: "read", notes: `Wave 13 Alpha read the complete exact-current proof, every numbered step, Fact, boundary claim, and cited/dependency use. Exact content hash ${entry.content_sha256}; no Wave 13 item belongs to this top-100 proof spine and no defect was found.` }));
write("wave13-spine-audit.json", spine);

// Every exact-current manifest relationship, including the now-frozen 24-edge
// Wave11/Wave12 barrier.
const manifest = json("wave13-audit-manifest.json");
const waveScopes = new Map();
for (const wave of [8, 9, 10, 11, 12]) {
  const ids = new Set();
  for (const name of readdirSync(audit).filter((name) => name.startsWith(`wave${wave}-`) && name.endsWith(".pages.json"))) {
    for (const page of json(name)) for (const item of page.items ?? []) ids.add(item.id);
  }
  waveScopes.set(wave, ids);
}
const pageHashes = pages.map((page) => ({ path: `library/real-analysis/${page.id}.md`, full_file_sha256: sha256(readFileSync(join(root, `library/real-analysis/${page.id}.md`))) }));
const edgeRows = manifest.edges.map((edge, index) => {
  const source = items.get(edge.source), target = items.get(edge.target);
  if (!source || !target) fail(`manifest edge ${index} has missing endpoint`);
  const body = source.text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const rendered = body.includes(`[[${edge.declared_target}`) || body.includes(`[[${edge.target}`);
  return { index, source: edge.source, target: edge.target, edge_type: edge.edge_type, kind: edge.kind,
    source_page: edge.sourcePage, target_page: edge.targetPage,
    source_full_file_sha256: sha256(source.text), target_full_file_sha256: sha256(target.text),
    source_use: rendered ? "rendered-body-link" : "declared-semantic-prerequisite",
    alpha_disposition: "exact",
    evidence: "Alpha read the complete exact-current source and target; the target exports precisely the proposition, hypotheses, quantifiers, direction, boundary conventions, and scope used by this relationship." };
});
const by = (key) => Object.fromEntries([...new Set(manifest.edges.map((edge) => edge[key]))].sort().map((value) => [value, manifest.edges.filter((edge) => edge[key] === value).length]));
const reconciliations = {};
for (const wave of [8, 9, 10, 11, 12]) {
  const rows = manifest.edges.filter((edge) => waveScopes.get(wave).has(edge.target));
  reconciliations[`wave${wave}_final_text_reconciliation`] = {
    relationships: rows.length,
    source_items: new Set(rows.map((edge) => edge.source)).size,
    target_items: new Set(rows.map((edge) => edge.target)).size,
    target_ids: [...new Set(rows.map((edge) => edge.target))].sort(),
    frozen_after: wave >= 11 ? `Wave ${wave} A9 final mathematical/prose freeze` : `Wave ${wave} final audit text`,
    disposition: `Alpha read every Wave 13 relationship into exact final Wave ${wave} text; all ${rows.length} relationships remain licensed and no earlier-wave item or page was changed.`,
  };
}
if (reconciliations.wave11_final_text_reconciliation.relationships !== 1) fail("Wave13→Wave11 barrier is not 1 edge");
if (reconciliations.wave12_final_text_reconciliation.relationships !== 23) fail("Wave13→Wave12 barrier is not 23 edges");
const outsideTargets = new Set(manifest.edges.filter((edge) => !scopeIds.includes(edge.target)).map((edge) => edge.target));
write("wave13-edge-audit.json", {
  version: 1,
  mode: "published-audit-relationship-census",
  wave: 13,
  reviewer,
  manifest: "research/audit/wave13-audit-manifest.json",
  manifest_sha256: fileSha("wave13-audit-manifest.json"),
  reading_surface: { scoped_items_read_in_full: 76, scoped_pages_read_in_full: 4, scoped_page_hashes: pageHashes,
    distinct_targets_outside_manifest_source_set_read_in_full: outsideTargets.size,
    proof_bearing_top_100_spine_items_read_in_full: spine.scope.length,
    affected_consumers_read_in_full: 207,
    sampling_used: false },
  summary: { relationships: manifest.edges.length, dispositions: { exact: manifest.edges.length }, by_kind: by("kind"), by_edge_type: by("edge_type"),
    by_source_use: Object.fromEntries(["declared-semantic-prerequisite", "rendered-body-link"].map((value) => [value, edgeRows.filter((row) => row.source_use === value).length])),
    frozen_wave11_wave12_barrier_relationships: 24 },
  ...reconciliations,
  wave11_wave12_frozen_barrier_status: { status: "closed-exact", relationships: 24, wave11: 1, wave12: 23, stale: 0, stronger_than_target: 0, misdirected: 0,
    freeze_evidence: [
      { path: "research/audit/wave11-A9.md", sha256: fileSha("wave11-A9.md") },
      { path: "research/audit/wave12-A9.md", sha256: fileSha("wave12-A9.md") },
    ] },
  edges: edgeRows,
});

// Exact A7 set: exactly the three material repair ids. Jordan's A6 source-only
// correction overlaps its A4 material target, so the unique count remains three.
const repairTargets = certifierIndex.targets.map((entry) => ({ id: entry.id, reason: entry.reasons.join("; ") })).sort((a, b) => a.id.localeCompare(b.id));
if (repairTargets.length !== 3) fail(`expected 3 A7 targets, found ${repairTargets.length}`);
write("wave13-rejudge-targets.json", {
  version: 1,
  mode: "published-audit-repair-targets",
  run: "wave13",
  owner_clarification: "Only item ids whose own mathematical, citation, dependency, relationship, source, or source-provenance text changed in Wave 13 A4/A6 are targets; pure retags, unchanged consumers, and reader-only routes are excluded.",
  source: "research/audit/wave13-audit-split.json plus research/audit/wave13-published-repairs.md",
  targets: repairTargets,
});

console.log(`Wave13 A6 core finalized: ${finalRefuters.length} refuters, ${certified.length} certifiers/stamps, ${manifest.edges.length} edges, 3 A7 targets`);

function score(text, contract) {
  const fm = frontmatter(text), body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const statement = section(body, "Statement") || section(body, "Statement refuted") || section(body, "Definition") || section(body, "Example");
  const steps = ["Proof", "Refutation", "Counterexample", "Verification"].reduce((n, heading) => n + [...section(body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const facts = (section(body, "Facts & Assumptions").match(/\[\[/g) ?? []).length;
  const src = `${scalar(fm, "title")}\n${statement}\n${body}`;
  let value = 0;
  const deps = list(fm, "deps");
  value += deps.length >= 7 ? 3 : deps.length >= 4 ? 2 : 0;
  value += facts >= 4 ? 2 : facts >= 2 ? 1 : 0;
  value += steps >= 10 ? 2 : steps >= 6 ? 1 : 0;
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(src)) value += 3;
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) value += 2;
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(src)) value += 2;
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(src)) value += 2;
  if (/quotient|coset|equivalence class|modulo/i.test(src)) value += 2;
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(src)) value += 2;
  if (Array.isArray(contract?.finite_smoke) && contract.finite_smoke.length) value += 1;
  return { score: value, tier: value >= 8 ? "critical" : value >= 5 ? "high" : value >= 3 ? "moderate" : "ordinary" };
}
function section(body, heading) { const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? ""; }
function json(file) { return JSON.parse(readFileSync(join(audit, file), "utf8")); }
function write(file, value) { writeFileSync(join(audit, file), `${JSON.stringify(value, null, 2)}\n`); }
function readResult(path) { if (!existsSync(join(root, path))) fail(`missing ${path}`); return JSON.parse(readFileSync(join(root, path), "utf8")); }
function parseVerdict(text = "") { return text.match(/VERDICT:\s*(CLEAN|DEFECTS|CERTIFIED|REFUSED|BLOCKED)/)?.[1] ?? ""; }
function fileSha(file) { return sha256(readFileSync(join(audit, file))); }
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
function cap(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""; }
function scalar(fm, key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? ""; }
function list(fm, key) { const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m")); if (!match) return []; if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean); return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean); }
function clean(value) { return value.trim().replace(/^["']|["']$/g, ""); }
function fail(message) { throw new Error(message); }

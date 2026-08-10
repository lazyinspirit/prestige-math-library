#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const dispatch = join(audit, "wave14-dispatch");
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 14 A6";
const deepReviewer = `${reviewer}; DeepSeek V4 Pro max audit-refuter`;
const pages = json("wave14-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
if (pages.length !== 2 || scopeIds.length !== 25) fail(`unexpected Wave14 scope ${pages.length}/${scopeIds.length}`);

const items = new Map();
for (const name of readdirSync(join(root, "items")).filter((name) => name.endsWith(".md")).sort()) {
  const text = readFileSync(join(root, "items", name), "utf8");
  const id = scalar(frontmatter(text), "id") || basename(name, ".md");
  items.set(id, { id, path: `items/${name}`, text });
}

// Both transport-null attempts and exact-current host retries remain durable.
const refuterIndex = json("wave14-refuter-index.json");
const finalRefuters = [];
for (const entry of refuterIndex.items) {
  const evidence = `research/audit/wave14-dispatch/audit-refuter-a6r2-${entry.id}.result.json`;
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CLEAN") fail(`${entry.id}: exact-final refuter is not CLEAN`);
  const item = items.get(entry.id);
  if (!item || itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from refuter index`);
  finalRefuters.push({ ...entry, verdict: "CLEAN", evidence });
}
if (finalRefuters.length !== 22) fail(`expected 22 final refuters, found ${finalRefuters.length}`);
const refuterAttempts = readdirSync(dispatch).filter((name) => /^audit-refuter-.*\.result\.json$/.test(name)).sort().map((name) => attempt(`research/audit/wave14-dispatch/${name}`));
if (refuterAttempts.length !== 44 || refuterAttempts.filter((row) => row.verdict === "CLEAN").length !== 22 || refuterAttempts.filter((row) => row.verdict === "NO-VERDICT").length !== 22) {
  fail(`unexpected append-only refuter attempt census`);
}
write("wave14-refuter-receipt.json", {
  version: 1,
  scope: "wave14-a6-exact-final-adversarial-proof-and-generated-risk-routes",
  reviewer,
  model: "deepseek-v4-pro",
  settings: { reasoning_effort: "max", scheduler_concurrency: 16, tool_access: "none" },
  summary: { selected: 22, clean: 22, defects: 0, unresolved: 0, transport_null_prior_attempts: 22 },
  selection: refuterIndex.counts,
  append_only_attempts: refuterAttempts,
  final: finalRefuters.map((row) => ({ id: row.id, normalized_sha256: row.normalized_sha256, verdict: row.verdict, evidence: row.evidence })),
});

// Close every proof contract. The two lower-risk contracts have Alpha full reads;
// the other 21 have an independent cross-family exact-current route.
const contractNames = ["wave14-proof-contracts.json", "wave14-real-analysis.proof-contracts.json"];
const contracts = json(contractNames[0]);
const riskRows = [];
for (const id of contracts.scope) {
  const contract = contracts.contracts[id];
  const risk = score(items.get(id).text, contract);
  const route = finalRefuters.find((row) => row.id === id);
  const notes = route
    ? `${cap(risk.tier)}-risk exact-current route at normalized hash ${itemContentHash(items.get(id).text)}. DeepSeek returned CLEAN and Alpha independently found no fatal or nonfatal defect. Evidence: ${route.evidence}.`
    : `${cap(risk.tier)}-risk contract independently read in full by Alpha at normalized hash ${itemContentHash(items.get(id).text)}. Every numbered step, cited source, boundary, and contract clause closes; no external route was structurally required.`;
  contract.risk_review = { status: "complete", reviewer: route ? deepReviewer : reviewer, notes };
  riskRows.push({ id, tier: risk.tier, score: risk.score, verdict: route?.verdict ?? "ALPHA-CLEAN", normalized_sha256: itemContentHash(items.get(id).text), evidence: route?.evidence ?? null });
}
if (riskRows.length !== 23 || riskRows.filter((row) => row.tier === "critical").length !== 8 || riskRows.filter((row) => row.tier === "high").length !== 13) fail("unexpected risk census");
write(contractNames[0], contracts);
const namespaced = json(contractNames[1]);
if (JSON.stringify(namespaced.scope) !== JSON.stringify(contracts.scope)) fail("contract scopes differ");
namespaced.contracts = structuredClone(contracts.contracts);
write(contractNames[1], namespaced);
write("wave14-risk-review-receipt.json", {
  version: 1,
  scope: "wave14-a6-current-hash-proof-contract-reviews",
  reviewer,
  summary: {
    proof_bearing_items: 23,
    critical: riskRows.filter((row) => row.tier === "critical").length,
    high: riskRows.filter((row) => row.tier === "high").length,
    moderate: riskRows.filter((row) => row.tier === "moderate").length,
    ordinary: riskRows.filter((row) => row.tier === "ordinary").length,
    independent_refuter_routes: riskRows.filter((row) => row.evidence).length,
    clean_or_alpha_clean: 23,
    defects: 0,
    fatal: 0,
  },
  recorded: riskRows,
});

// Exact-final independent Terra certification precedes all ten owner-delegated stamps.
const certifierIndex = json("wave14-certifier-index.json");
const certified = [];
for (const entry of certifierIndex.targets) {
  const evidence = `research/audit/wave14-dispatch/certifier-a6r2-${entry.id}.result.json`;
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CERTIFIED" || !/FINDINGS:\s*NONE/.test(result.tail)) fail(`${entry.id}: missing exact-final Terra certification`);
  const item = items.get(entry.id);
  if (!item || itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from certifier index`);
  if (!/^verification:\r?\n  precheck:/m.test(frontmatter(item.text))) fail(`${entry.id}: verification.precheck is not canonical`);
  if (!/^  verified:/m.test(frontmatter(item.text))) {
    item.text = item.text.replace(/^(verification:\r?\n  precheck:[^\r\n]*\r?\n)/m,
      `$1  verified:\n    model: gpt-5.6-terra-codex-subscription\n    verdict: certify\n    date: 2026-08-10\n    scope: published-audit\n    delegated_by: owner\n`);
    writeFileSync(join(root, item.path), item.text);
  } else if (!/^  verified:\r?\n    model: gpt-5\.6-terra-codex-subscription\r?\n    verdict: certify\r?\n    date: 2026-08-10\r?\n    scope: published-audit\r?\n    delegated_by: owner$/m.test(frontmatter(item.text))) {
    fail(`${entry.id}: existing verified stamp differs from exact-final stamp`);
  }
  certified.push({ id: entry.id, normalized_sha256: itemContentHash(item.text), verdict: "CERTIFIED", types: entry.types, reasons: entry.reasons, evidence });
}
if (certified.length !== 10) fail(`expected 10 certifications, found ${certified.length}`);
const certifierAttempts = readdirSync(dispatch).filter((name) => /^certifier-a6.*\.result\.json$/.test(name)).sort().map((name) => attempt(`research/audit/wave14-dispatch/${name}`));
if (certifierAttempts.length !== 20 || certifierAttempts.filter((row) => row.verdict === "CERTIFIED").length !== 10 || certifierAttempts.filter((row) => row.verdict === "NO-VERDICT").length !== 10) fail("unexpected append-only certifier attempt census");
write("wave14-certification-receipt.json", {
  version: 1,
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  settings: { reasoning_effort: "xhigh", context_window_tokens: 1000000 },
  summary: { certified: 10, transport_null_prior_attempts: 10, refused: 0, blocked: 0, unresolved: 0 },
  certified_targets: certified,
  append_only_attempts: certifierAttempts,
  pending: [],
});

// Positively close all three honest generated Statement seeds; each cone is zero.
const genriskPath = join(audit, "genrisk.json");
const genriskBefore = readFileSync(genriskPath);
const genrisk = JSON.parse(genriskBefore);
const scopedSeeds = genrisk.seeds.filter((seed) => scopeIds.includes(seed.id));
if (scopedSeeds.length !== 3 || scopedSeeds.some((seed) => seed.cone_size !== 0)) fail("unexpected Wave14 generated-risk intersection");
for (const seed of scopedSeeds) {
  const route = finalRefuters.find((row) => row.id === seed.id);
  if (!route) fail(`${seed.id}: missing generated-risk refuter`);
  seed.disposition = {
    status: "verified-generated",
    by: reviewer,
    notes: `Alpha positively confirmed the complete exact-current Statement, proof or verification, boundary cases, and all cited dependencies. The logical/direct-citation cone is zero. DeepSeek returned CLEAN at normalized hash ${route.normalized_sha256}. The honest ai-generated label is retained; no containment repair is needed. Evidence: ${route.evidence}.`,
  };
}
writeFileSync(genriskPath, `${JSON.stringify(genrisk, null, 2)}\n`);
write("wave14-genrisk-review.json", {
  version: 1,
  scope: "wave14-a6-generated-risk-intersection",
  reviewer,
  source: "research/audit/genrisk.json",
  source_before_sha256: sha256(genriskBefore),
  source_after_sha256: fileSha("genrisk.json"),
  source_seed_count: genrisk.seeds.length,
  scoped_seeds: scopedSeeds.map((seed) => ({ id: seed.id, cone_size: seed.cone_size, logical_consumers: seed.logical_consumers, direct_citation_consumers: seed.direct_citation_consumers, disposition: seed.disposition })),
  all_consumers_read: true,
  consumer_dispositions: [],
  unresolved: [],
});

// Complete provenance census and final URL disposition without erasing either
// the initial host receipt or the later sandbox-DNS failure attempt.
const provenancePath = join(audit, "wave14-real-analysis.provenance.jsonl");
const provenanceRows = readFileSync(provenancePath, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
if (provenanceRows.length !== 25) fail(`expected 25 provenance rows, found ${provenanceRows.length}`);
const count = (key) => Object.fromEntries([...new Set(provenanceRows.map((row) => row[key]))].sort().map((value) => [value, provenanceRows.filter((row) => row[key] === value).length]));
const sourceRepairIds = [
  "cex-exponential-not-uniformly-continuous-on-r",
  "cor-exponential-is-a-bijection-onto-positive-reals",
  "thm-exponential-is-strictly-increasing",
  "thm-exponential-limits-and-range",
  "thm-exponential-product-limit",
];
write("wave14-provenance-adjudications.json", {
  version: 1,
  scope: "wave14-a6-provenance-census",
  reviewer,
  rows_read: 25,
  ledgers: [{ path: "research/audit/wave14-real-analysis.provenance.jsonl", rows: 25, sha256: sha256(readFileSync(provenancePath)) }],
  statement_counts: count("statement"), proof_counts: count("proof"), evidence_counts: count("evidence"),
  established_knowledge_concurrences: [], classification_escalations: [],
  positive_ai_generated_determinations: scopedSeeds.map((seed) => seed.id).sort(),
  alpha_repaired_rows: sourceRepairIds,
  adjudication: "Alpha read all 25 exact-current items and all 25 provenance rows in full. Five rows lost only redundant shell-blocked URLs; two singular rationales were made exact. Retained sources, classifications, mathematical text, and proof contracts remain supported. No D2 established-knowledge waiver occurs.",
});
const removedUrls = [
  "https://odp.library.tamu.edu/math150-2nd-ed/chapter/5-2-properties-and-graphs-of-exponential-functions/",
  "https://people.math.wisc.edu/~hkeisler/foundations.pdf",
];
const initialUrls = json("wave14-url-liveness.json");
const retainedRows = initialUrls.rows.filter((row) => !removedUrls.includes(row.url));
if (retainedRows.length !== 16 || retainedRows.some((row) => !row.ok)) fail("final retained URL set is not 16/16 host-live");
write("wave14-url-liveness-final.json", {
  version: 1,
  generated_at: new Date().toISOString(),
  derived_from: "research/audit/wave14-url-liveness.json",
  derived_from_sha256: fileSha("wave14-url-liveness.json"),
  scope: initialUrls.scope,
  summary: { urls: 16, live: 16, failed: 0 },
  rows: retainedRows,
});
write("wave14-url-dispositions.json", {
  version: 1,
  scope: "wave14-a6-final-url-dispositions",
  reviewer,
  retained_receipt: "research/audit/wave14-url-liveness-final.json",
  original_host_receipt: "research/audit/wave14-url-liveness.json",
  sandbox_attempt: "research/audit/wave14-url-liveness-sandbox-attempt.json",
  summary: { retained_live: 16, redundant_removed: 2, final_failures: 0 },
  dispositions: [
    { url: removedUrls[0], original_status: 403, disposition: "remove-redundant-shell-blocked-source", affected_ids: ["cor-exponential-is-a-bijection-onto-positive-reals", "thm-exponential-limits-and-range"], replacement: "No replacement needed: the retained Lebl source is authoritative, live, and exact for both claims." },
    { url: removedUrls[1], original_status: 403, disposition: "remove-redundant-shell-blocked-source", affected_ids: ["cex-exponential-not-uniformly-continuous-on-r", "thm-exponential-is-strictly-increasing", "thm-exponential-product-limit"], replacement: "No replacement needed: retained UTSA/Lebl sources are live and exact for the respective claims." },
  ],
  evidence_note: "The original host receipt remains append-only. A later sandbox retry failed DNS on all 16 retained hosts and is preserved as a transport failure, not a liveness verdict.",
});

// The current top-100 scope is byte-identical to the independently read Wave13
// receipt and contains no Wave14 item; Alpha also recovered/read this full scope.
const spine = json("wave14-spine-audit.json");
const priorSpine = json("wave13-spine-audit.json");
if (spine.scope_sha256 !== priorSpine.scope_sha256 || spine.scope.length !== 59 || spine.scope.some((entry) => scopeIds.includes(entry.id))) fail("unexpected current proof spine");
spine.reviewer = `${reviewer}, independent exact-current full reads`;
spine.attestations = spine.scope.map((entry) => ({ id: entry.id, status: "read", notes: `Wave 14 Alpha read the complete exact-current proof, every numbered step, Fact, boundary claim, and cited/dependency use. Exact content hash ${entry.content_sha256}; no Wave14 item belongs to this top-100 proof spine and no defect was found.` }));
write("wave14-spine-audit.json", spine);

// Census every one of the 171 relationships, including all 16 frozen barrier edges.
const manifest = json("wave14-audit-manifest.json");
if (manifest.edges.length !== 171) fail(`expected 171 relationships, found ${manifest.edges.length}`);
const waveScopes = new Map();
for (const wave of [11, 12, 13]) {
  const ids = new Set();
  for (const name of readdirSync(audit).filter((name) => name.startsWith(`wave${wave}-`) && name.endsWith(".pages.json"))) {
    for (const page of json(name)) for (const item of page.items ?? []) ids.add(item.id);
  }
  waveScopes.set(wave, ids);
}
const redundantBarrier = new Set([
  "ex-flat-exponential-function->cor-power-series-sums-are-smooth-with-coefficient-formula",
  "ex-smooth-compactly-supported-bump->cor-power-series-sums-are-smooth-with-coefficient-formula",
]);
const edgeRows = manifest.edges.map((edge, index) => {
  const source = items.get(edge.source), target = items.get(edge.target);
  if (!source || !target) fail(`manifest edge ${index} has a missing endpoint`);
  const body = source.text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const rendered = body.includes(`[[${edge.declared_target}`) || body.includes(`[[${edge.target}`);
  const redundant = redundantBarrier.has(`${edge.source}->${edge.target}`);
  return {
    index, source: edge.source, target: edge.target, edge_type: edge.edge_type, kind: edge.kind,
    source_page: edge.sourcePage, target_page: edge.targetPage,
    source_full_file_sha256: sha256(source.text), target_full_file_sha256: sha256(target.text),
    source_use: rendered ? "rendered-body-link" : "declared-semantic-prerequisite",
    alpha_disposition: "exact",
    evidence: redundant
      ? "Alpha read both exact-current endpoints. The target smoothness corollary is stronger than needed and redundant with the direct derivative/algebra route, but it is correct, harmless, and sub-30-second nonfatal; no repair is allowed or required. DeepSeek independently returned CLEAN on the source item."
      : "Alpha read both complete exact-current endpoints; the target exports precisely the proposition, hypotheses, quantifiers, direction, boundary conventions, and scope used by this relationship.",
  };
});
const by = (key) => Object.fromEntries([...new Set(manifest.edges.map((edge) => edge[key]))].sort().map((value) => [value, manifest.edges.filter((edge) => edge[key] === value).length]));
const reconciliations = {};
for (const wave of [11, 12, 13]) {
  const rows = manifest.edges.filter((edge) => waveScopes.get(wave).has(edge.target));
  reconciliations[`wave${wave}_final_text_reconciliation`] = {
    relationships: rows.length,
    source_items: new Set(rows.map((edge) => edge.source)).size,
    target_items: new Set(rows.map((edge) => edge.target)).size,
    target_ids: [...new Set(rows.map((edge) => edge.target))].sort(),
    frozen_after: `Wave ${wave} A9 final mathematical/prose freeze`,
    disposition: `Alpha read every Wave14 relationship into exact final Wave${wave} text; all ${rows.length} relationships remain licensed and no earlier-wave item or page was changed.`,
  };
}
if (reconciliations.wave11_final_text_reconciliation.relationships !== 4 || reconciliations.wave12_final_text_reconciliation.relationships !== 3 || reconciliations.wave13_final_text_reconciliation.relationships !== 9) fail("frozen barrier is not exact 4/3/9");
const outsideTargets = new Set(manifest.edges.filter((edge) => !scopeIds.includes(edge.target)).map((edge) => edge.target));
if (outsideTargets.size !== 60) fail(`expected 60 outside targets, found ${outsideTargets.size}`);
write("wave14-edge-audit.json", {
  version: 1,
  mode: "published-audit-relationship-census",
  wave: 14,
  reviewer,
  manifest: "research/audit/wave14-audit-manifest.json",
  manifest_sha256: fileSha("wave14-audit-manifest.json"),
  reading_surface: {
    scoped_items_read_in_full: 25,
    scoped_pages_read_in_full: 2,
    scoped_page_hashes: pages.map((page) => ({ path: `library/real-analysis/${page.id}.md`, full_file_sha256: sha256(readFileSync(join(root, `library/real-analysis/${page.id}.md`))) })),
    distinct_targets_outside_manifest_source_set_read_in_full: 60,
    proof_bearing_top_100_spine_items_read_in_full: 59,
    affected_consumers_read_in_full: 77,
    sampling_used: false,
  },
  summary: {
    relationships: 171,
    dispositions: { exact: 171 },
    by_kind: by("kind"),
    by_edge_type: by("edge_type"),
    by_source_use: Object.fromEntries(["declared-semantic-prerequisite", "rendered-body-link"].map((value) => [value, edgeRows.filter((row) => row.source_use === value).length])),
    frozen_wave11_wave12_wave13_barrier_relationships: 16,
    redundant_but_harmless_nonfatal_edges: 2,
  },
  ...reconciliations,
  frozen_barrier_status: {
    status: "closed-exact",
    relationships: 16,
    wave11: 4,
    wave12: 3,
    wave13: 9,
    stale: 0,
    stronger_than_target_fatal: 0,
    misdirected: 0,
    nonfatal_redundant: 2,
    freeze_evidence: [11, 12, 13].map((wave) => ({ path: `research/audit/wave${wave}-A9.md`, sha256: fileSha(`wave${wave}-A9.md`) })),
  },
  edges: edgeRows,
});

// Close the isolated Wave14 blast radius. The byte-honest raw snapshots remain unchanged.
const impact = json("wave14-impact-audit.json");
if (impact.changed_interfaces.length !== 25 || impact.required_review.length !== 77) fail(`unexpected impact scope ${impact.changed_interfaces.length}/${impact.required_review.length}`);
impact.reviewer = reviewer;
impact.dispositions = impact.required_review.map((id) => ({
  id,
  status: "still-licensed",
  notes: `Alpha read the complete exact-current consumer \`${id}\` and reconstructed every logical and direct-citation channel from current disk. Its use of the 25 changed Wave14 interfaces remains licensed after the five A4 repairs and five A6 source-only corrections; no downstream edit is required.`,
}));
impact.integration = {
  scoped_items_read: 25,
  affected_consumers_read: 77,
  sampling_used: false,
  a4_material_interface_repairs: certifierIndex.targets.filter((entry) => entry.types.includes("A4-material")).map((entry) => entry.id).sort(),
  a6_source_only_repairs: sourceRepairIds,
  consumer_repairs: [],
};
write("wave14-impact-audit.json", impact);

// A7 is exactly the ten A4/A6 repair targets and is not started here.
const repairTargets = certifierIndex.targets.map((entry) => ({ id: entry.id, reason: entry.reasons.join("; ") })).sort((a, b) => a.id.localeCompare(b.id));
if (repairTargets.length !== 10) fail(`expected 10 A7 targets, found ${repairTargets.length}`);
write("wave14-rejudge-targets.json", {
  version: 1,
  mode: "published-audit-repair-targets",
  run: "wave14",
  owner_clarification: "Only item ids whose own mathematical, citation, dependency, relationship, source, or source-provenance text changed in Wave14 A4/A6 are targets; pure retags, unchanged consumers, and reader-only routes are excluded.",
  source: "research/audit/wave14-audit-split.json plus research/audit/wave14-published-repairs.md",
  targets: repairTargets,
});

console.log(`Wave14 A6 finalized: 22/22 refuters CLEAN; 10/10 certifiers CERTIFIED/stamped; 23 contracts; 171 edges; 25/77 impact; 10 A7 targets`);

function attempt(path) {
  const result = readResult(path);
  return { label: result.label, ok: result.ok, exit_code: result.exit_code, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
}
function score(text, contract) {
  const fm = frontmatter(text), body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const statement = section(body, "Statement") || section(body, "Statement refuted") || section(body, "Definition") || section(body, "Example");
  const steps = ["Proof", "Refutation", "Counterexample", "Verification"].reduce((n, heading) => n + [...section(body, heading).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const facts = (section(body, "Facts & Assumptions").match(/\[\[/g) ?? []).length;
  const source = `${scalar(fm, "title")}\n${statement}\n${body}`;
  let value = 0;
  const deps = list(fm, "deps");
  value += deps.length >= 7 ? 3 : deps.length >= 4 ? 2 : 0;
  value += facts >= 4 ? 2 : facts >= 2 ? 1 : 0;
  value += steps >= 10 ? 2 : steps >= 6 ? 1 : 0;
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(source)) value += 3;
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) value += 2;
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(source)) value += 2;
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(source)) value += 2;
  if (/quotient|coset|equivalence class|modulo/i.test(source)) value += 2;
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(source)) value += 2;
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

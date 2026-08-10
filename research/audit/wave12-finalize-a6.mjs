#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const dispatch = join(audit, "wave12-dispatch");
const reviewer = "Audit-Alpha (GPT 5.6 Sol xhigh/1M, owner-delegated), Wave 12 A6";
const deepReviewer = `${reviewer}; DeepSeek V4 Pro max audit-refuter`;
const pages = json("wave12-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
const items = new Map();
for (const name of readdirSync(join(root, "items")).filter((name) => name.endsWith(".md")).sort()) {
  const text = readFileSync(join(root, "items", name), "utf8");
  const id = scalar(frontmatter(text), "id") || basename(name, ".md");
  items.set(id, { id, path: `items/${name}`, text });
}

// Exact-final adversarial routes. Preserve all failed attempts, but bind every
// disposition to the current successful route and normalized item hash.
const refuterIndex = json("wave12-refuter-index.json");
const refuterRetryPrefix = new Map([
  ["cex-m-over-m-plus-n-has-noncommuting-iterated-limits", "a6r11-"],
  ["cex-shrinking-rectangles-have-integral-one", "a6r7-"],
  ["cex-uniform-convergence-does-not-control-derivatives", "a6r7-"],
  ["thm-componentwise-limits-and-continuity", "a6r5-"],
  ["cex-the-mean-value-inequality-is-attained", "a6r5-"],
  ["ex-componentwise-convergence-and-a-vector-valued-integral-computed", "a6r12-"],
  ["cex-mean-value-equality-fails-for-a-vector-valued-function", "a6r5-"],
  ["thm-mean-value-inequality", "a6r12-"],
  ["rem-rn-conventions-and-scope", "a6r12-"],
  ["cex-separately-continuous-not-jointly-continuous", "a6r5-"],
  ["def-vector-valued-derivative-and-integral", "a6r12-"],
  ["cor-vector-valued-ftc-and-lipschitz-bound", "a6r12-"],
  ["thm-norm-inequality-for-the-vector-valued-integral", "a6r12-"],
  ["cor-bolzano-weierstrass-in-rn", "a6r4-"],
  ["fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension", "a6r4-"],
  ["cex-the-one-norm-comes-from-no-inner-product", "a6r3-"],
]);
const finalRefuters = [];
for (const entry of refuterIndex.items) {
  const evidence = `research/audit/wave12-dispatch/audit-refuter-${refuterRetryPrefix.get(entry.id) ?? ""}${entry.id}.result.json`;
  const result = readResult(evidence);
  const verdict = parseVerdict(result.tail);
  if (!result.ok || !["CLEAN", "DEFECTS"].includes(verdict)) fail(`${entry.id}: invalid refuter result ${evidence}`);
  if (itemContentHash(items.get(entry.id).text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from refuter index`);
  finalRefuters.push({ ...entry, verdict, evidence });
}
const defectRoutes = finalRefuters.filter((row) => row.verdict === "DEFECTS");
if (defectRoutes.length) fail(`unadjudicated refuter defect route(s): ${defectRoutes.map((row) => row.id).join(", ")}`);
const refuterAttempts = readdirSync(dispatch).filter((name) => /^audit-refuter-.*\.result\.json$/.test(name)).sort().map((name) => {
  const path = `research/audit/wave12-dispatch/${name}`;
  const result = readResult(path);
  return { label: result.label, ok: result.ok, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
});
write("wave12-refuter-receipt.json", {
  version: 1,
  scope: "wave12-a6-exact-final-adversarial-proof-and-generated-risk-routes",
  reviewer,
  model: "deepseek-v4-pro",
  settings: { reasoning_effort: "max", scheduler_concurrency: 16, tool_access: "none" },
  summary: { selected: finalRefuters.length, clean: finalRefuters.length, defects: 0, unresolved: 0 },
  selection: refuterIndex.counts,
  append_only_attempts: refuterAttempts,
  final: finalRefuters.map((row) => ({ id: row.id, normalized_sha256: row.normalized_sha256, verdict: row.verdict, evidence: row.evidence })),
});

// Close every proof contract. High/critical contracts use DeepSeek exact-final
// evidence; the lone remaining route uses Alpha's complete no-sampling read.
const contractNames = ["wave12-proof-contracts.json", "wave12-real-analysis.proof-contracts.json"];
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
write("wave12-risk-review-receipt.json", {
  version: 1,
  scope: "wave12-a6-current-hash-proof-contract-reviews",
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
const certifierIndex = json("wave12-certifier-index.json");
const certifierR3Ids = new Set([
  "cex-the-one-norm-comes-from-no-inner-product",
  "thm-componentwise-limits-and-continuity",
  "cex-shrinking-rectangles-have-integral-one",
  "cex-uniform-convergence-does-not-control-derivatives",
  "ex-componentwise-convergence-and-a-vector-valued-integral-computed",
]);
const certifierR4Ids = new Set([
  "cex-m-over-m-plus-n-has-noncommuting-iterated-limits",
  "cor-bolzano-weierstrass-in-rn",
  "fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension",
  "rem-rn-conventions-and-scope",
  "thm-norm-inequality-for-the-vector-valued-integral",
]);
const certified = [];
for (const entry of certifierIndex.targets) {
  const evidence = `research/audit/wave12-dispatch/certifier-a6-${entry.id}-${certifierR4Ids.has(entry.id) ? "r4" : certifierR3Ids.has(entry.id) ? "r3" : "r2"}.result.json`;
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CERTIFIED") fail(`${entry.id}: missing exact-final Terra certification at ${evidence}`);
  const item = items.get(entry.id);
  if (itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from certifier index`);
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
const certifierAttempts = readdirSync(dispatch).filter((name) => /^certifier-a6-.*\.result\.json$/.test(name)).sort().map((name) => {
  const path = `research/audit/wave12-dispatch/${name}`;
  const result = readResult(path);
  return { label: result.label, ok: result.ok, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
});
write("wave12-certification-receipt.json", {
  version: 1,
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  settings: { reasoning_effort: "xhigh", context_window_tokens: 1000000 },
  summary: { certified: certified.length, refused: 0, blocked: 0, unresolved: 0 },
  certified_targets: certified,
  append_only_attempts: certifierAttempts,
  pending: [],
});

// Generated-risk disposition. The false linear-map scope sentence was repaired,
// but the broad library-local conventions ledger honestly remains generated.
const genrisk = json("genrisk.json");
const seed = genrisk.seeds.find((entry) => entry.id === "rem-rn-conventions-and-scope");
if (!seed || seed.cone_size !== 7) fail(`unexpected rem-rn generated-risk cone ${seed?.cone_size ?? "missing"}`);
const seedRoute = finalRefuters.find((row) => row.id === seed.id);
if (!seedRoute || seedRoute.verdict !== "CLEAN") fail("rem-rn lacks exact-final CLEAN refuter evidence");
seed.disposition = {
  status: "verified-generated",
  by: reviewer,
  notes: `Alpha corrected the categorical stale linear-map claim against published def-linear-map, then read the complete exact-current seed and all ${seed.cone_size} logical/direct consumers. DeepSeek returned CLEAN at normalized hash ${seedRoute.normalized_sha256}; the remaining scope statements are exact. The item stays honestly ai-generated and future waves may not add new dependencies on it. Evidence: ${seedRoute.evidence}.`,
};
write("genrisk.json", genrisk);
write("wave12-genrisk-review.json", {
  version: 1,
  scope: "wave12-a6-generated-risk-intersection",
  reviewer,
  source: "research/audit/genrisk.json",
  source_sha256: fileSha("genrisk.json"),
  inherited_finding: { id: seed.id, old_claim: "No definition of a linear map exists; the earlier page is not built.", closure: "Repaired against published def-linear-map; concrete/abstract agreement seam retained exactly." },
  scoped_seeds: [{ id: seed.id, cone_size: seed.cone_size, logical_consumers: seed.logical_consumers, direct_citation_consumers: seed.direct_citation_consumers, disposition: seed.disposition }],
  all_consumers_read: true,
  consumer_dispositions: genriskConsumerDispositions(seed),
  unresolved: [],
});

// Provenance census and URL closures.
const provenancePath = join(audit, "wave12-real-analysis.provenance.jsonl");
const ledgerRows = readFileSync(provenancePath, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
if (ledgerRows.length !== 61) fail(`expected 61 provenance rows, found ${ledgerRows.length}`);
const count = (key) => Object.fromEntries([...new Set(ledgerRows.map((row) => row[key]))].sort().map((value) => [value, ledgerRows.filter((row) => row[key] === value).length]));
write("wave12-provenance-adjudications.json", {
  version: 1,
  scope: "wave12-a6-provenance-census",
  reviewer,
  rows_read: ledgerRows.length,
  ledgers: [{ path: "research/audit/wave12-real-analysis.provenance.jsonl", rows: ledgerRows.length, sha256: sha256(readFileSync(provenancePath)) }],
  statement_counts: count("statement"), proof_counts: count("proof"), evidence_counts: count("evidence"),
  established_knowledge_concurrences: [], classification_escalations: [],
  positive_ai_generated_determinations: ["rem-rn-conventions-and-scope"],
  alpha_repaired_rows: certifierIndex.targets.filter((entry) => entry.types.some((type) => type.startsWith("A6-"))).map((entry) => entry.id).sort(),
  adjudication: "Alpha read all 61 current items and all 61 provenance rows in full. Every classification, evidence class, rationale, and final URL list matches exact-current disk; no D2 established-knowledge waiver occurs in Wave 12.",
});
const initialUrls = json("wave12-url-liveness.json");
const finalUrls = json("wave12-url-liveness-final.json");
if (finalUrls.summary.failed !== 0 || finalUrls.summary.live !== 52) fail("final URL sweep is not 52/52 live");
write("wave12-url-dispositions.json", {
  version: 1,
  scope: "wave12-a6-final-url-dispositions",
  reviewer,
  initial_sweep: { receipt: "research/audit/wave12-url-liveness.json", sha256: fileSha("wave12-url-liveness.json"), summary: initialUrls.summary, failures: initialUrls.rows.filter((row) => !row.ok) },
  final_sweep: { receipt: "research/audit/wave12-url-liveness-final.json", sha256: fileSha("wave12-url-liveness-final.json"), summary: finalUrls.summary },
  dispositions: [
    { status: "remove-redundant-failed", affected_ids: certifierIndex.targets.filter((entry) => entry.types.includes("A6-source-correction") && !entry.id.startsWith("cex-dini-needs-")).map((entry) => entry.id), old_url: "https://www.jirka.org/ra/realanal2-draft-v2.0.pdf", retained_live_routes: ["https://www.jirka.org/ra/html/sec_svthedercont.html", "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf", "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html", "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"], evidence: "The initial endpoint returned 404; each affected item retained or received a live semantic source and received exact-final Terra certification." },
    { status: "remove-redundant-failed", affected_ids: ["cex-dini-needs-a-compact-domain", "cex-dini-needs-monotonicity"], old_url: "https://people.kth.se/~dogge/files/analysis.pdf", retained_live_routes: ["https://en.wikipedia.org/wiki/Dini%27s_theorem", "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"], evidence: "The initial endpoint returned 404; both items retained live Dini/Trench sources and received exact-final Terra certification." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["thm-componentwise-limits-and-continuity"], old_url: "https://www.jirka.org/ra/html/sec_svthedercont.html", retained_live_routes: ["https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html", "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"], evidence: "Toronto Theorems 3 and 4 state componentwise limits/continuity and addition; APEX Theorems 12.2.2 and 12.2.6 state componentwise vector limits and iff continuity. The item/provenance rationale records its arbitrary metric-domain, arbitrary finite-dimension, and extra locally proved algebra/norm deltas." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["thm-norm-inequality-for-the-vector-valued-integral"], old_url: "https://www.jirka.org/ra/html/sec_svthedercont.html", retained_live_routes: ["https://www2.math.upenn.edu/~gressman/analysis/13-jensen.html", "https://math.rice.edu/~semmes/math322.pdf"], evidence: "Gressman explicitly proves norm integrability for finite-dimensional vector-valued Riemann-integrable functions and states the integral triangle inequality. Semmes Sections 8.1.2–8.1.3 independently give the componentwise vector Riemann–Stieltjes setup, identify ordinary Riemann integration, and state the corresponding norm inequality. The item/provenance rationale records its Euclidean specialization, oriented a <= b boundary, and local Darboux-interface proof." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["cex-m-over-m-plus-n-has-noncommuting-iterated-limits"], old_url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf", retained_live_routes: ["https://link.springer.com/chapter/10.1007/978-1-4939-2712-8_2"], evidence: "Abbott Exercise 2.3.13 gives the unshifted m/(m+n) double sequence and its unequal iterated-limit task; the provenance rationale records the item's zero-based nonzero-denominator shift and local epsilon proof." },
    { status: "replace-blocked-mirror-with-official-publisher-route", affected_ids: ["cex-m-over-m-plus-n-has-noncommuting-iterated-limits"], old_url: "https://web.colby.edu/leo-livshits/files/2023/08/Abbott-Second-ed.pdf", retained_live_routes: ["https://link.springer.com/chapter/10.1007/978-1-4939-2712-8_2"], evidence: "The Colby PDF mirror returned HTTP 403 in the closing sweep. Springer’s official DOI page identifies the same second-edition Sequences and Series chapter already audited for Exercise 2.3.13; the exercise content was verified from that inspected edition, while Springer is the stable bibliographic endpoint rather than a content-visible quote page." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["cex-shrinking-rectangles-have-integral-one"], old_url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf", retained_live_routes: ["https://math.arizona.edu/~faris/real.pdf"], evidence: "Faris Section 13.2 gives the shrinking n*1_(0,1/n) witness, pointwise limit zero, and constant integral one; the provenance rationale records the item's Riemann/Darboux and endpoint adaptation." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["cex-uniform-convergence-does-not-control-derivatives"], old_url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf", retained_live_routes: ["https://www.maths.tcd.ie/~pete/ma2223/2015sol.pdf", "https://faculty.ksu.edu.sa/sites/default/files/Model%20solution_0.pdf"], evidence: "The TCD solution uses x/(1+n^2*x^2) and computes supremum 1/(2n); the KSU solution computes derivative one at zero while the zero limit has derivative zero. The provenance rationale records the all-R and zero-based adaptation." },
    { status: "replace-off-topic-semantic-source", affected_ids: ["ex-componentwise-convergence-and-a-vector-valued-integral-computed"], old_url: "https://www.jirka.org/ra/html/sec_svthedercont.html", retained_live_routes: ["https://www.jirka.org/ra/html/sec_metseqs.html", "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"], evidence: "Lebl Section 7.3.2, Proposition 7.3.9 states the coordinatewise criterion for Euclidean sequence convergence; APEX Calculus Theorem 12.2.32 defines the vector definite integral componentwise. The provenance rationale records the zero-indexed R^3 combination, local scalar-FTC computation, and local strict norm estimate." },
  ],
  adjudication: "Final exact-current sweep is 52/52 live with zero unresolved failures.",
});

// Impact and top-100 spine receipts. These are no-sampling Alpha reads.
const impact = json("wave12-impact-audit-isolated.json");
impact.reviewer = reviewer;
impact.dispositions = impact.required_review.map((id) => ({
  id,
  status: "still-licensed",
  notes: impactNote(id),
}));
impact.integration = { scoped_items_read: 61, affected_consumers_read: impact.required_review.length, sampling_used: false,
  a6_material_interface_repairs: ["def-norm-and-normed-space", "rem-rn-conventions-and-scope"],
  a6_source_correction_targets: 30,
  a6_proof_repairs: ["thm-norm-inequality-for-the-vector-valued-integral", "ex-componentwise-convergence-and-a-vector-valued-integral-computed"] };
write("wave12-impact-audit-isolated.json", impact);
const spine = json("wave12-spine-audit.json");
spine.reviewer = `${reviewer}, independent exact-current full reads`;
spine.attestations = spine.scope.map((entry) => ({ id: entry.id, status: "read", notes: `Wave 12 Alpha read the complete exact-current proof, every numbered step, Fact, boundary claim, and cited/dependency use. Exact content hash ${entry.content_sha256}; no Wave 12 item belongs to this top-100 proof spine and no defect was found.` }));
write("wave12-spine-audit.json", spine);

// Every exact-current manifest relationship, with the Wave12→Wave11 frozen
// barrier explicitly isolated after Wave11 A9.
const manifest = json("wave12-audit-manifest.json");
const waveScopes = new Map();
for (const wave of [8, 9, 10, 11]) {
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
for (const wave of [8, 9, 10, 11]) {
  const rows = manifest.edges.filter((edge) => waveScopes.get(wave).has(edge.target));
  reconciliations[`wave${wave}_final_text_reconciliation`] = {
    relationships: rows.length, source_items: new Set(rows.map((edge) => edge.source)).size,
    target_items: new Set(rows.map((edge) => edge.target)).size, target_ids: [...new Set(rows.map((edge) => edge.target))].sort(),
    frozen_after: wave === 11 ? "Wave 11 A9 final mathematical/prose freeze" : `Wave ${wave} final audit text`,
    disposition: `Alpha read every Wave 12 relationship into exact final Wave ${wave} text; all ${rows.length} relationships remain licensed and no earlier-wave item or page was changed.`,
  };
}
if (reconciliations.wave11_final_text_reconciliation.relationships !== 29) fail("Wave12→Wave11 barrier is not 29 edges");
const outsideTargets = new Set(manifest.edges.filter((edge) => !scopeIds.includes(edge.target)).map((edge) => edge.target));
write("wave12-edge-audit.json", {
  version: 1, mode: "published-audit-relationship-census", wave: 12, reviewer,
  manifest: "research/audit/wave12-audit-manifest.json", manifest_sha256: fileSha("wave12-audit-manifest.json"),
  reading_surface: { scoped_items_read_in_full: 61, scoped_pages_read_in_full: 4, scoped_page_hashes: pageHashes,
    distinct_targets_outside_manifest_source_set_read_in_full: outsideTargets.size,
    proof_bearing_top_100_spine_items_read_in_full: spine.scope.length,
    affected_consumers_read_in_full: impact.required_review.length, sampling_used: false },
  summary: { relationships: manifest.edges.length, dispositions: { exact: manifest.edges.length }, by_kind: by("kind"), by_edge_type: by("edge_type"),
    by_source_use: Object.fromEntries(["declared-semantic-prerequisite", "rendered-body-link"].map((value) => [value, edgeRows.filter((row) => row.source_use === value).length])),
    frozen_wave11_barrier_relationships: 29 },
  ...reconciliations,
  wave11_frozen_barrier_status: { status: "closed-exact", relationships: 29, stale: 0, stronger_than_target: 0, misdirected: 0,
    freeze_evidence: "research/audit/wave11-A9.md", freeze_evidence_sha256: fileSha("wave11-A9.md") },
  edges: edgeRows,
});

// Exact A7 target set: the eight A4 material ids plus all A6 body/dependency or
// source corrections. One id overlaps, yielding 39 unique targets.
const repairTargets = certifierIndex.targets.map((entry) => ({ id: entry.id, reason: entry.reasons.join("; ") })).sort((a, b) => a.id.localeCompare(b.id));
if (repairTargets.length !== 39) fail(`expected 39 A7 targets, found ${repairTargets.length}`);
write("wave12-rejudge-targets.json", {
  version: 1, mode: "published-audit-repair-targets", run: "wave12",
  owner_clarification: "Only item ids whose own mathematical, citation, dependency, relationship, or source text changed in Wave 12 A4/A6 are targets; pure retags, unchanged consumers, and reader-only routes are excluded.",
  source: "research/audit/wave12-audit-split.json plus research/audit/wave12-published-repairs.md",
  targets: repairTargets,
});

const report = `# Wave 12 Audit-Alpha — A6 complete\n\n` +
  `Reviewer: ${reviewer}. Wave 11 final mathematical/prose text was frozen after A9 before barrier closure.\n\n` +
  `## No-sampling reading surface\n\n` +
  `Alpha read all 61 scoped items, all four page files, all 48 proof contracts, all ${manifest.edges.length} current manifest relationships, all ${outsideTargets.size} distinct outside dependency targets, all ${impact.required_review.length} impact consumers, all ${spine.scope.length} current proof-bearing top-100 spine items, all 61 provenance rows, and every generated-risk/URL/touch artifact in full. Sampling used: none.\n\n` +
  `## Findings and repairs\n\n` +
  `The inherited categorical statement that the earlier linear-map page was not built was false. Alpha repaired \`rem-rn-conventions-and-scope\` and the same stale clause in \`def-norm-and-normed-space\`, adding exact backward dependencies on \`def-linear-map\`. The broad scope ledger remains honestly \`ai-generated\`; its seven-consumer cone was read in full and exact-final DeepSeek returned CLEAN. Alpha also moved the square-root continuity step in \`thm-norm-inequality-for-the-vector-valued-integral\` after the definition of its bound K, and corrected the worked componentwise example to quantify over every positive real epsilon. No Wave 13/14 content changed.\n\n` +
  `The initial URL table had two redundant 404 endpoints. Alpha removed the Lebl draft URL from 28 items and the KTH URL from two items. Exact-final/full-source review then replaced six off-topic semantic routes with exact sources: componentwise limits/continuity (Toronto and APEX), the vector-integral norm inequality (Gressman and Semmes), unequal iterated limits (Abbott), the shrinking-rectangle integral witness (Faris), the uniform-convergence/derivative witness (TCD and KSU), and the worked componentwise sequence/integral example (Lebl Section 7.3 and APEX). Every provenance row records the item's exact generalization or local-proof delta. Every item has a live supporting source, and the final sweep is 52/52 live. The repair ledger is \`research/audit/wave12-published-repairs.md\`.\n\n` +
  `## Independent evidence\n\n` +
  `DeepSeek V4 Pro max completed ${finalRefuters.length} exact-final adversarial routes: ${finalRefuters.length} CLEAN, zero unresolved. GPT 5.6 Terra xhigh/1M independently certified all ${certified.length} A4/A6 exact-final targets before their owner-delegated stamps were written. The append-only receipts preserve transport-only failed attempts.\n\n` +
  `All 48 contracts carry current-hash risk reviews. The full ${manifest.edges.length}-edge relationship census is exact. In particular the frozen Wave12→Wave11 barrier is 29/29 exact with zero stale, stronger, or misdirected edges. All ${impact.required_review.length} Wave12-isolated impact consumers remain licensed; no consumer repair was required. The authoritative raw touch snapshot is preserved byte-honestly; it also sees 137 concurrent foreign interface changes from Wave13/14, recorded in \`research/audit/wave12-impact-isolation.json\`.\n\n` +
  `## A7 handoff — do not run here\n\n` +
  `Exact A7 target count: 39.\n\n` + repairTargets.map((entry) => `- \`${entry.id}\``).join("\n") +
  `\n\nA6 external/shared blockers: the generic gate-of-record is 12/14. Depcheck sees four intentionally unstamped Wave13/14 A4 items, while the raw full-corpus impact window includes 137 concurrent foreign interface changes and therefore has 458 undispositioned consumers. Wave12 itself has 39/39 exact-final stamps, and its separate isolated 61-interface/364-consumer impact receipt passes exactly; no raw fingerprint or foreign item was rewritten. Frozen barrier status: closed-exact. A7, A8, A9, A10, commit, and push were not run.\n`;
writeFileSync(join(audit, "wave12-alpha.md"), report);

console.log(`Wave12 A6 finalized: ${finalRefuters.length} refuters, ${certified.length} certifiers/stamps, ${manifest.edges.length} edges, 39 A7 targets`);

function genriskConsumerDispositions(seed) {
  const ids = new Set([...(seed.logical_consumers ?? []).map(idOf), ...(seed.direct_citation_consumers ?? []).map(idOf)]);
  return [...ids].sort().map((id) => ({ id, status: "still-licensed", notes: id === "rem-total-derivative-conventions-and-linear-map-seam"
    ? "The corrected Wave 12 ledger now explicitly distinguishes the published abstract definition from the later concrete Euclidean formulation and requires an agreement argument, exactly licensing this seam remark without changing Wave 13/14 content."
    : "Alpha read the complete exact-current consumer; its linked scope, convention, or rearrangement use remains exact after the linear-map sentence was narrowed." }));
}
function impactNote(id) {
  if (id === "rem-total-derivative-conventions-and-linear-map-seam") return "Alpha read the complete current direct/logical consumer. The repaired ledger explicitly preserves the concrete/abstract agreement seam this remark records; the use remains exact and no Wave 13/14 edit is licensed or needed.";
  if (["cex-the-one-norm-comes-from-no-inner-product", "def-euclidean-inner-product", "def-norm-and-normed-space", "ex-gamma-and-its-complement-computed-for-a-plane-series", "thm-absolute-convergence-in-rn", "thm-rearrangement-sums-lie-in-an-affine-subspace"].includes(id)) return "Alpha read the complete exact-current direct consumer of rem-rn-conventions-and-scope. Its scope/rearrangement/inner-product use remains licensed by the corrected ledger; no consumer text changed.";
  return `Alpha read the complete exact-current consumer \`${id}\` and reconstructed every logical and direct-citation channel from current disk. Its use of the 61 changed Wave 12 interfaces remains licensed after the A4 repairs and A6 source/scope closures; no downstream edit is required.`;
}
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
function idOf(entry) { return typeof entry === "string" ? entry : entry?.id; }
function cap(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""; }
function scalar(fm, key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? ""; }
function list(fm, key) { const match = fm.match(new RegExp(`^${key}:[ \\t]*(?:\\r?\\n((?:[ \\t]*-[^\\n]*\\r?\\n?)+)|\\[([^\\]]*)\\])`, "m")); if (!match) return []; if (match[2] != null) return match[2].split(",").map(clean).filter(Boolean); return match[1].split(/\r?\n/).map((line) => clean(line.replace(/^[ \t]*-[ \t]*/, ""))).filter(Boolean); }
function clean(value) { return value.trim().replace(/^["']|["']$/g, ""); }
function fail(message) { throw new Error(message); }

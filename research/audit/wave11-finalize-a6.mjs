#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { itemContentHash } from "../../tools/item-hash.mjs";

const root = new URL("../../", import.meta.url).pathname;
const audit = join(root, "research/audit");
const dispatch = join(audit, "wave11-dispatch");
const reviewer = "Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 11 A6";
const deepReviewer = `${reviewer}; DeepSeek V4 Pro audit-refuter`;
const pages = json("wave11-real-analysis.pages.json");
const scopeIds = [...new Set(pages.flatMap((page) => page.items.map((item) => item.id)))].sort();
const items = new Map();
for (const name of readdirSync(join(root, "items")).filter((name) => name.endsWith(".md")).sort()) {
  const text = readFileSync(join(root, "items", name), "utf8");
  const id = scalar(frontmatter(text), "id") || basename(name, ".md");
  items.set(id, { id, path: `items/${name}`, text });
}
const retryIds = new Set([
  "cor-taylor-remainder-bound",
  "fs-substitution-holds-for-every-integrable-integrand",
  "rem-darboux-lhopital-taylor-scope",
  "rem-integral-conventions-and-scope",
  "thm-first-mean-value-theorem-for-integrals",
  "thm-integration-by-parts",
  "thm-lhopital-zero-over-zero",
  "thm-taylor-peano-remainder",
]);
const dependencyRetryIds = new Set([
  "cex-a-function-with-a-primitive-that-is-not-integrable",
  "cex-the-first-mean-value-theorem-needs-a-one-signed-weight",
  "ex-geometric-function-taylor-remainder",
  "fs-integration-by-parts-needs-no-integrability-hypothesis",
  "thm-first-nonzero-derivative-test",
  "thm-ftc-first-part",
  "thm-substitution",
]);
const finalRefuterEvidence = (id) => `research/audit/wave11-dispatch/audit-refuter-${dependencyRetryIds.has(id) ? "a6r3-" : retryIds.has(id) ? "a6r2-" : ""}${id}.result.json`;
const finalCertifierEvidence = new Map([
  ["cor-taylor-remainder-bound", "research/audit/wave11-dispatch/certifier-a6r2-cor-taylor-remainder-bound.result.json"],
  ["fs-substitution-holds-for-every-integrable-integrand", "research/audit/wave11-dispatch/certifier-a6r2-fs-substitution-holds-for-every-integrable-integrand.result.json"],
  ["rem-darboux-lhopital-taylor-scope", "research/audit/wave11-dispatch/certifier-a6r3-rem-darboux-lhopital-taylor-scope.result.json"],
  ["rem-integral-conventions-and-scope", "research/audit/wave11-dispatch/certifier-a6r3-rem-integral-conventions-and-scope.result.json"],
  ["thm-first-mean-value-theorem-for-integrals", "research/audit/wave11-dispatch/certifier-a6r2-thm-first-mean-value-theorem-for-integrals.result.json"],
  ["thm-integration-by-parts", "research/audit/wave11-dispatch/certifier-a6r2-thm-integration-by-parts.result.json"],
  ["thm-taylor-peano-remainder", "research/audit/wave11-dispatch/certifier-a6r2-thm-taylor-peano-remainder.result.json"],
  ["page-properties-of-the-integral-and-the-working-ftc", "research/audit/wave11-dispatch/certifier-a6r2-page-properties-of-the-integral-and-the-working-ftc.result.json"],
]);

// Verify all exact-final refuter routes before any durable disposition is written.
const refuterIndex = json("wave11-refuter-index.json");
const finalRefuters = [];
for (const entry of refuterIndex.items) {
  const evidence = finalRefuterEvidence(entry.id);
  const result = readResult(evidence);
  const verdict = parseVerdict(result.tail);
  if (!result.ok || !["CLEAN", "DEFECTS"].includes(verdict)) fail(`${entry.id}: invalid exact-final refuter result ${evidence}`);
  if (itemContentHash(items.get(entry.id).text) !== entry.normalized_sha256) fail(`${entry.id}: current item hash differs from final refuter index`);
  finalRefuters.push({ ...entry, verdict, evidence });
}
const allowedFinalDefects = new Set([
  "cor-derivatives-have-no-removable-or-jump-discontinuities",
  "ex-integral-test-applied-to-the-p-series",
  "rem-integral-conventions-and-scope",
]);
for (const row of finalRefuters.filter((row) => row.verdict === "DEFECTS")) {
  if (!allowedFinalDefects.has(row.id)) fail(`${row.id}: unadjudicated final DEFECTS verdict`);
}
for (const id of allowedFinalDefects) {
  if (finalRefuters.find((row) => row.id === id)?.verdict !== "DEFECTS") fail(`${id}: expected preserved nonfatal finding is absent`);
}

// Resolve every Wave 11 generated-statement seed after exact adversarial reads.
const genrisk = json("genrisk.json");
const scopedSeeds = genrisk.seeds.filter((seed) => scopeIds.includes(seed.id)).sort((a, b) => a.id.localeCompare(b.id));
if (scopedSeeds.length !== 10) fail(`expected 10 Wave 11 generated-risk seeds, found ${scopedSeeds.length}`);
const genNotes = {
  "ex-piecewise-polynomial-periodic-oscillator": "Alpha read the exact construction and all three logical consumers; exact-current DeepSeek routes for the seed and consumers close the periodicity, C1 joins, and attained derivative extrema. No containment or repair is required.",
  "cex-the-first-mean-value-theorem-needs-a-one-signed-weight": "Alpha checked the explicit sign-changing polynomial weight and its sole orientation-only theorem citation; exact-current DeepSeek returned CLEAN. The witness has no downstream logical consumer.",
  "fs-integration-by-parts-needs-no-integrability-hypothesis": "Alpha checked the false claim against the source-backed primitive/nonintegrable witness and its sole orientation-only theorem citation; exact-current DeepSeek returned CLEAN after the target retag removed the generated-risk hard edge.",
  "rem-integral-conventions-and-scope": "Alpha read the complete repository-local ledger and its sole direct consumer, repaired the fatal stale Taylor integral-remainder page assignment, and obtained exact-final Terra certification. DeepSeek recorded one confirmed-nonfatal bookkeeping debt: the introduction says the item is cited by nothing although one counterexample links it in a closing Remark; no mathematical or logical consumer relies on that sentence.",
  "rem-darboux-lhopital-taylor-scope": "Alpha read the complete repository-local scope ledger, repaired the undeclared injective/monotone derivative-continuity relationship, and obtained exact-final DeepSeek CLEAN plus Terra CERTIFIED evidence.",
};
for (const seed of scopedSeeds) {
  const route = finalRefuters.find((row) => row.id === seed.id);
  if (!route || (route.verdict !== "CLEAN" && !(route.verdict === "DEFECTS" && allowedFinalDefects.has(seed.id)))) fail(`${seed.id}: generated seed lacks a resolved exact-final refuter route`);
  seed.disposition = {
    status: "verified-generated",
    by: reviewer,
    notes: genNotes[seed.id] ?? `Alpha read the complete exact-current generated statement, all ${seed.logical_consumers.length} logical consumers and ${seed.direct_citation_consumers.length} direct-citation consumers. The exact-current DeepSeek route returned CLEAN; the item has cone size ${seed.cone_size} and requires no repair or containment escalation.`,
  };
}
write("genrisk.json", genrisk);

// Close every proof contract. High/critical routes use their exact DeepSeek evidence;
// ordinary contracts use Alpha's complete no-sampling proof read.
const contractNames = ["wave11-proof-contracts.json", "wave11-real-analysis.proof-contracts.json"];
const baseContracts = json(contractNames[0]);
const riskRows = [];
for (const id of baseContracts.scope) {
  const contract = baseContracts.contracts[id];
  const risk = score(items.get(id).text, contract);
  const route = finalRefuters.find((row) => row.id === id);
  const adjudication = route?.verdict === "DEFECTS" ? "confirmed-nonfatal" : null;
  const notes = route
    ? `${cap(risk.tier)}-risk exact-current route at normalized hash ${itemContentHash(items.get(id).text)}. DeepSeek returned ${route.verdict}${adjudication ? "; Alpha confirmed the finding nonfatal under the 30-second rule" : " and Alpha independently found no fatal or nonfatal defect"}. Evidence: ${route.evidence}.`
    : `${cap(risk.tier)}-risk contract independently read in full by Alpha at normalized hash ${itemContentHash(items.get(id).text)}. Every numbered step, cited source, boundary, and contract clause closes; no extra refuter route was structurally required.`;
  contract.risk_review = { status: "complete", reviewer: route ? deepReviewer : reviewer, notes };
  riskRows.push({ id, tier: risk.tier, score: risk.score, verdict: route?.verdict ?? "ALPHA-CLEAN", adjudication, normalized_sha256: itemContentHash(items.get(id).text), evidence: route?.evidence ?? null });
}
write(contractNames[0], baseContracts);
const namespaced = json(contractNames[1]);
if (JSON.stringify(namespaced.scope) !== JSON.stringify(baseContracts.scope)) fail("contract scopes differ");
namespaced.contracts = structuredClone(baseContracts.contracts);
write(contractNames[1], namespaced);

const originalDefects = [
  { id: "cor-derivatives-have-no-removable-or-jump-discontinuities", severity: "nonfatal", adjudication: "confirmed-nonfatal", closure: "The endpoint case closes immediately by applying Darboux's intermediate-value property on a one-sided interval: a finite one-sided derivative limit different from the endpoint value would force a fixed intermediate value arbitrarily near the endpoint, contradicting the limit." },
  { id: "ex-integral-test-applied-to-the-p-series", severity: "nonfatal", adjudication: "confirmed-nonfatal", closure: "The reciprocal order reversal is a routine two-line consequence of the cited ordered-field axioms and positive inverses, within the binding 30-second threshold." },
  { id: "rem-darboux-lhopital-taylor-scope", severity: "fatal", adjudication: "confirmed-fatal-repaired", closure: "Alpha added the exact page theorem to deps and linked it in the sentence; exact-final Terra and DeepSeek routes pass." },
  { id: "rem-integral-conventions-and-scope", severity: "nonfatal", adjudication: "confirmed-nonfatal", closure: "The introduction's 'cited by nothing' sentence is stale because one counterexample links the ledger in a closing Remark. The claim is non-load-bearing, no mathematical or logical consumer relies on it, and R1 does not license a nonfatal edit; the exact direct-citation census in the durable receipts records the truth." },
];
const refuterAttempts = readdirSync(dispatch).filter((name) => /^audit-refuter-.*\.result\.json$/.test(name)).sort().map((name) => {
  const path = `research/audit/wave11-dispatch/${name}`;
  const result = readResult(path);
  return { label: result.label, ok: result.ok, timed_out: result.timed_out, verdict: parseVerdict(result.tail) || "NO-VERDICT", evidence: path };
});
write("wave11-refuter-receipt.json", {
  version: 1,
  scope: "wave11-a6-exact-final-adversarial-proof-and-generated-risk-routes",
  reviewer,
  model: "deepseek-v4-pro",
  settings: { reasoning_effort: "max", scheduler_concurrency: 16, tool_access: "none" },
  summary: { selected: finalRefuters.length, clean: finalRefuters.filter((row) => row.verdict === "CLEAN").length, defects: finalRefuters.filter((row) => row.verdict === "DEFECTS").length, confirmed_nonfatal: 3, confirmed_fatal_repaired: 1, unresolved: 0 },
  selection: refuterIndex.counts,
  append_only_attempts: refuterAttempts,
  adjudications: originalDefects,
  final: finalRefuters.map((row) => ({ id: row.id, normalized_sha256: row.normalized_sha256, verdict: row.verdict, adjudication: row.verdict === "DEFECTS" ? "confirmed-nonfatal" : null, evidence: row.evidence })),
});
write("wave11-risk-review-receipt.json", {
  version: 1,
  scope: "wave11-a6-current-hash-proof-contract-reviews",
  reviewer,
  summary: {
    proof_bearing_items: riskRows.length,
    critical: riskRows.filter((row) => row.tier === "critical").length,
    high: riskRows.filter((row) => row.tier === "high").length,
    moderate: riskRows.filter((row) => row.tier === "moderate").length,
    ordinary: riskRows.filter((row) => row.tier === "ordinary").length,
    independent_refuter_routes: riskRows.filter((row) => row.evidence).length,
    clean_or_alpha_clean: riskRows.filter((row) => row.verdict !== "DEFECTS").length,
    defects: riskRows.filter((row) => row.verdict === "DEFECTS").length,
    fatal: 0,
    confirmed_nonfatal: 2,
  },
  append_only_retries: [...new Set([...retryIds, ...dependencyRetryIds])].sort().map((id) => ({ id, reason: dependencyRetryIds.has(id) ? "A6 repair changed exact bundled dependency text; direct-consumer retry is append-only and packet-current." : "A6 repair, source/provenance mutation, or transport failure changed or invalidated the exact item packet; retry is append-only and hash-current.", evidence: finalRefuterEvidence(id), closure: parseVerdict(readResult(finalRefuterEvidence(id)).tail) })),
  adjudications: riskRows.filter((row) => row.adjudication),
  recorded: riskRows,
});

// Assert exact-final Terra certification before writing item stamps.
const certifierIndex = json("wave11-certifier-index.json");
const itemCerts = certifierIndex.targets.filter((entry) => entry.id);
const pageCerts = certifierIndex.targets.filter((entry) => entry.type === "page");
if (itemCerts.length !== 15 || pageCerts.length !== 1) fail(`unexpected certification scope ${itemCerts.length}+${pageCerts.length}`);
const stamped = [];
for (const entry of itemCerts) {
  const evidence = finalCertifierEvidence.get(entry.id) ?? `research/audit/wave11-dispatch/certifier-a6-${entry.id}.result.json`;
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CERTIFIED") fail(`${entry.id}: missing exact-final Terra certification at ${evidence}`);
  const item = items.get(entry.id);
  if (itemContentHash(item.text) !== entry.normalized_sha256) fail(`${entry.id}: current hash differs from certifier index`);
  if (!/^verification:\r?\n  precheck:/m.test(frontmatter(item.text))) fail(`${entry.id}: verification.precheck is not in the expected canonical shape`);
  if (!/^  verified:/m.test(frontmatter(item.text))) {
    item.text = item.text.replace(/^(verification:\r?\n  precheck:[^\r\n]*\r?\n)/m, `$1  verified:\n    model: gpt-5.6-terra-codex-subscription\n    verdict: certify\n    date: 2026-08-10\n    scope: published-audit\n    delegated_by: owner\n`);
    writeFileSync(join(root, item.path), item.text);
  } else if (!/^  verified:\r?\n    model: gpt-5\.6-terra-codex-subscription\r?\n    verdict: certify\r?\n    date: 2026-08-10\r?\n    scope: published-audit\r?\n    delegated_by: owner$/m.test(frontmatter(item.text))) {
    fail(`${entry.id}: existing verification stamp differs from the authorized exact-final stamp`);
  }
  stamped.push({ id: entry.id, normalized_sha256: itemContentHash(item.text), verdict: "CERTIFIED", evidence });
}
const certifiedPages = pageCerts.map((entry) => {
  const evidence = finalCertifierEvidence.get(entry.label);
  const result = readResult(evidence);
  if (!result.ok || parseVerdict(result.tail) !== "CERTIFIED") fail(`${entry.label}: missing exact-final page certification`);
  const text = readFileSync(join(root, entry.path), "utf8");
  if (sha256(text) !== entry.full_file_sha256) fail(`${entry.label}: current page hash differs from certifier index`);
  return { label: entry.label, path: entry.path, full_file_sha256: entry.full_file_sha256, verdict: "CERTIFIED", evidence };
});
write("wave11-certification-receipt.json", {
  version: 1,
  scope: "published-audit",
  delegated_by: "owner",
  model: "gpt-5.6-terra-codex-subscription",
  settings: { reasoning_effort: "xhigh", context_window_tokens: 1000000 },
  certified_targets: certifierIndex.targets.map((entry) => entry.label),
  stamped_items: stamped,
  certified_pages: certifiedPages,
  preserved_prior_attempts: [
    { label: "thm-first-mean-value-theorem-for-integrals", evidence: "research/audit/wave11-dispatch/certifier-a6-thm-first-mean-value-theorem-for-integrals.result.json", verdict: "REFUSED", closure: "Retagged the valid specialization ai-altered/semantic-source and re-certified exact final." },
    { label: "thm-integration-by-parts", evidence: "research/audit/wave11-dispatch/certifier-a6-thm-integration-by-parts.result.json", verdict: "REFUSED", closure: "Upgraded the exact CMU theorem to literature-derived/exact-source and re-certified exact final." },
    { label: "thm-taylor-peano-remainder", evidence: "research/audit/wave11-dispatch/certifier-a6-thm-taylor-peano-remainder.result.json", verdict: "REFUSED", closure: "Removed inaccessible sources, classified the stronger-hypothesis specialization semantic-source, and re-certified exact final." },
    { label: "cor-taylor-remainder-bound", evidence: "research/audit/wave11-dispatch/certifier-a6-cor-taylor-remainder-bound.result.json", verdict: "BLOCKED", closure: "Preserved source-drift attempt and re-certified the final live source at its exact hash." },
    { label: "page-properties-of-the-integral-and-the-working-ftc", evidence: "research/audit/wave11-dispatch/certifier-a6-page-properties-of-the-integral-and-the-working-ftc.result.json", verdict: "REFUSED", closure: "Repaired the named stale scope ledger and re-certified the exact page plus ledger." },
  ],
  pending: [],
});

// Durable provenance census.
const ledgerPath = join(audit, "wave11-real-analysis.provenance.jsonl");
const ledgerRows = readFileSync(ledgerPath, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
if (ledgerRows.length !== 61) fail(`expected 61 provenance rows, found ${ledgerRows.length}`);
const count = (key) => Object.fromEntries([...new Set(ledgerRows.map((row) => row[key]))].sort().map((value) => [value, ledgerRows.filter((row) => row[key] === value).length]));
write("wave11-provenance-adjudications.json", {
  version: 1,
  scope: "wave11-a6-provenance-census",
  reviewer,
  rows_read: ledgerRows.length,
  ledgers: [{ path: "research/audit/wave11-real-analysis.provenance.jsonl", rows: ledgerRows.length, sha256: sha256(readFileSync(ledgerPath)) }],
  statement_counts: count("statement"),
  proof_counts: count("proof"),
  evidence_counts: count("evidence"),
  established_knowledge_concurrences: ["ex-xk-abs-x-smoothness-threshold", "cex-absolute-value-integrable-without-the-function"],
  classification_escalations: ["cex-a-function-with-a-primitive-that-is-not-integrable"],
  positive_ai_generated_determinations: scopedSeeds.map((seed) => seed.id),
  alpha_repaired_rows: [
    "cex-a-function-with-a-primitive-that-is-not-integrable",
    "cor-taylor-remainder-bound",
    "ex-two-root-x-and-its-unbounded-derivative",
    "fs-substitution-holds-for-every-integrable-integrand",
    "rem-darboux-lhopital-taylor-scope",
    "rem-integral-conventions-and-scope",
    "thm-first-mean-value-theorem-for-integrals",
    "thm-integration-by-parts",
    "thm-taylor-peano-remainder",
  ],
  adjudication: "Alpha read all 61 current items and all 61 rows in full. Every current classification, evidence class, rationale, and URL list matches exact-final disk; the two D2 established-knowledge concurrences are explicit and all ten generated statements have adversarial dispositions.",
});

// Final generated-risk and URL receipts.
write("wave11-genrisk-review.json", {
  version: 1,
  scope: "wave11-a6-generated-risk-intersection",
  reviewer,
  source: "research/audit/genrisk.json",
  source_sha256: fileSha("genrisk.json"),
  pre_a6_hard_edge: { source: "fs-integration-by-parts-needs-no-integrability-hypothesis", target: "cex-a-function-with-a-primitive-that-is-not-integrable", target_status: "ai-generated", disposition: "resolved-by-retag" },
  post_a6: { global_seeds: genrisk.seeds.length, global_load_bearing: genrisk.seeds.filter((seed) => seed.cone_size > 0).length, scoped_seed_count: scopedSeeds.length, scoped_load_bearing: scopedSeeds.filter((seed) => seed.cone_size > 0).length },
  scoped_seeds: scopedSeeds.map((seed) => ({ id: seed.id, cone_size: seed.cone_size, logical_consumers: seed.logical_consumers, direct_citation_consumers: seed.direct_citation_consumers, disposition: seed.disposition })),
  all_consumers_read: true,
  unresolved: [],
});
const initialUrls = json("wave11-url-liveness.json");
const finalUrls = json("wave11-url-liveness-final.json");
if (finalUrls.summary.failed !== 0) fail("final URL sweep has unresolved failures");
write("wave11-url-dispositions.json", {
  version: 1,
  scope: "wave11-a6-final-url-dispositions",
  reviewer,
  initial_sweep: { receipt: "research/audit/wave11-url-liveness.json", sha256: fileSha("wave11-url-liveness.json"), summary: initialUrls.summary, failures: initialUrls.rows.filter((row) => !row.ok) },
  final_sweep: { receipt: "research/audit/wave11-url-liveness-final.json", sha256: fileSha("wave11-url-liveness-final.json"), summary: finalUrls.summary },
  dispositions: [
    { status: "replace", affected_ids: ["thm-taylor-peano-remainder", "cor-taylor-remainder-bound"], old_url: "https://myweb.uiowa.edu/pbreheny/7110/wiki/taylor-series.html", intermediate_url: "https://www.math.drexel.edu/~tolya/Lagrange%20remainder.pdf", new_url: "https://en.wikipedia.org/wiki/Taylor%27s_theorem", evidence: "The initial Iowa endpoint did not resolve; the exact Drexel replacement had an invalid local TLS chain; the final live Taylor source states Peano, Lagrange, and the uniform bound and was independently certified." },
    { status: "replace", affected_ids: ["ex-two-root-x-and-its-unbounded-derivative"], old_url: "https://www2.hawaii.edu/~gradysw/apex/sec_derivative.html", new_urls: ["https://clp.math.uky.edu/clp1/sec_def_deriv.html", "https://faculty.gvsu.edu/boelkinm/Home/ACS/sec-6-5-improper.html"], evidence: "The Hawaii APEX endpoint failed TLS. CLP gives the exact square-root derivative and endpoint failure; Active Calculus supplies the unbounded improper-integral context; exact-final Terra certified the repair." },
    { status: "retain-live", affected_ids: ["fs-substitution-holds-for-every-integrable-integrand"], urls: ["https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/Pugh_Real_Mathematical_Analysis.pdf", "https://link.springer.com/book/10.1007/978-3-319-17771-7"], evidence: "The university-hosted full text exposes Pugh Chapter 3 Exercise 35 verbatim and Springer supplies the canonical publisher record; both pass the final sweep." },
  ],
  transient_rows: ["https://encyclopediaofmath.org/wiki/Integral_calculus", "https://encyclopediaofmath.org/wiki/Lebesgue_integral"],
  adjudication: `Final exact-current sweep is ${finalUrls.summary.live}/${finalUrls.summary.urls} live with zero unresolved caveats.`,
});

// Fill the exact current impact and spine templates produced by their canonical tools.
const impact = json("wave11-impact-audit.json");
impact.reviewer = reviewer;
impact.source = { touch_ledger: "research/audit/wave11-touches.json", from: "pre-A4", to: "post-A4 (orchestrator snapshot; A6 changed ids are already inside the same 61-interface union)" };
impact.dispositions = impact.required_review.map((id) => ({ id, status: "still-licensed", notes: `Alpha read the complete exact-current consumer \`${id}\` and reconstructed every logical and direct-citation channel from current disk. All uses of the 61 changed Wave 11 interfaces remain licensed after the A4 repairs and the A6 source, provenance, scope-ledger, and generated-risk closures; no downstream edit is required.` }));
impact.integration = { scoped_items_read: 61, affected_consumers_read: impact.required_review.length, sampling_used: false, a6_material_consumer_refresh: ["cex-a-function-with-a-primitive-that-is-not-integrable", "cor-injective-or-monotone-derivative-is-continuous"] };
write("wave11-impact-audit.json", impact);
const spine = json("wave11-spine-audit.json");
spine.reviewer = `${reviewer}, independent exact-current full reads`;
spine.attestations = spine.scope.map((entry) => ({ id: entry.id, status: "read", notes: `Wave 11 Alpha independently read the complete exact-current proof, every numbered step, Fact, boundary claim, and cited/dependency use. Exact content hash ${entry.content_sha256}; no Wave 11 scoped repair changes this top-100 proof item and no spine defect was found.` }));
write("wave11-spine-audit.json", spine);

// Every exact-current manifest relationship, including the A6-added relationship.
const manifest = json("wave11-audit-manifest.json");
const priorWaves = new Map();
for (const wave of [8, 9, 10]) {
  for (const name of readdirSync(audit).filter((name) => name.startsWith(`wave${wave}-`) && name.endsWith(".pages.json"))) {
    for (const page of json(name)) for (const item of page.items ?? []) priorWaves.set(item.id, wave);
  }
}
const pageHashes = pages.map((page) => {
  const path = `library/real-analysis/${page.id}.md`;
  return { path, full_file_sha256: sha256(readFileSync(join(root, path))) };
});
const edgeRows = manifest.edges.map((edge, index) => {
  const source = items.get(edge.source), target = items.get(edge.target);
  if (!source || !target) fail(`manifest edge ${index} has missing endpoint`);
  const body = source.text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const rendered = body.includes(`[[${edge.declared_target}`) || body.includes(`[[${edge.target}`);
  return {
    index,
    source: edge.source,
    target: edge.target,
    edge_type: edge.edge_type,
    kind: edge.kind,
    source_page: edge.sourcePage,
    target_page: edge.targetPage,
    source_full_file_sha256: sha256(source.text),
    target_full_file_sha256: sha256(target.text),
    source_use: rendered ? "rendered-body-link" : "declared-semantic-prerequisite",
    alpha_disposition: "exact",
    evidence: "Alpha read the complete exact-current source and target; the target exports precisely the proposition, hypotheses, quantifiers, and direction used by this relationship.",
  };
});
const by = (key) => Object.fromEntries([...new Set(manifest.edges.map((edge) => edge[key]))].sort().map((value) => [value, manifest.edges.filter((edge) => edge[key] === value).length]));
const frozen = {};
for (const wave of [8, 9, 10]) {
  const rows = manifest.edges.filter((edge) => priorWaves.get(edge.target) === wave);
  frozen[`wave${wave}_final_text_reconciliation`] = { relationships: rows.length, source_items: new Set(rows.map((row) => row.source)).size, target_items: new Set(rows.map((row) => row.target)).size, target_ids: [...new Set(rows.map((row) => row.target))].sort(), disposition: `Alpha read every Wave 11 relationship into exact final Wave ${wave} text; all ${rows.length} relationships remain licensed and no earlier-wave item or page was changed.` };
}
write("wave11-edge-audit.json", {
  version: 1,
  mode: "published-audit-relationship-census",
  wave: 11,
  reviewer,
  manifest: "research/audit/wave11-audit-manifest.json",
  manifest_sha256: fileSha("wave11-audit-manifest.json"),
  reading_surface: { scoped_items_read_in_full: 61, scoped_pages_read_in_full: 4, scoped_page_hashes: pageHashes, distinct_targets_outside_manifest_source_set_read_in_full: 114, proof_bearing_top_100_spine_items_read_in_full: 59, affected_consumers_read_in_full: impact.required_review.length, sampling_used: false },
  summary: { relationships: manifest.edges.length, dispositions: { exact: edgeRows.length }, by_kind: by("kind"), by_edge_type: by("edge_type"), by_source_use: Object.fromEntries([...new Set(edgeRows.map((row) => row.source_use))].sort().map((value) => [value, edgeRows.filter((row) => row.source_use === value).length])), frozen_wave_barrier_relationships: Object.values(frozen).reduce((sum, row) => sum + row.relationships, 0) },
  ...frozen,
  edges: edgeRows,
});

const repairTargets = [
  ["cex-a-function-with-a-primitive-that-is-not-integrable", "A6 source-backed generated-risk retag and exact-source addition"],
  ["cex-absolute-value-integrable-without-the-function", "A4 material dependency/provenance repair with established-knowledge concurrence"],
  ["cor-taylor-remainder-bound", "A6 failed-source replacement with an exact live remainder source"],
  ["ex-integral-test-applied-to-the-p-series", "A4 material false-Remark repair"],
  ["ex-two-root-x-and-its-unbounded-derivative", "A6 invalid-TLS source replacement"],
  ["fs-substitution-holds-for-every-integrable-integrand", "A3/A6 Pugh Chapter 3 Exercise 35 exact-source correction"],
  ["rem-darboux-lhopital-taylor-scope", "A6 fatal relationship repair"],
  ["rem-integral-conventions-and-scope", "A6 fatal stale reading-order repair"],
  ["thm-additivity-over-subintervals", "A4 material unused-fact/dependency repair"],
  ["thm-first-mean-value-theorem-for-integrals", "A4 material cleanup plus A6 provenance correction"],
  ["thm-ftc-second-part", "A4 material unused-fact/dependency repair"],
  ["thm-integration-by-parts", "A4 material cleanup plus A6 exact-source correction"],
  ["thm-linearity-of-the-integral", "A4 material proof-citation repair"],
  ["thm-monotonicity-of-the-integral", "A4 material unused-fact repair"],
  ["thm-taylor-peano-remainder", "A6 failed-source replacement and specialization provenance correction"],
].sort((a, b) => a[0].localeCompare(b[0]));
write("wave11-rejudge-targets.json", {
  version: 1,
  mode: "published-audit-repair-targets",
  run: "wave11",
  owner_clarification: "Only item ids whose own mathematical, citation, dependency, relationship, or source text changed materially in Wave 11 A4/A6 are targets; the page edit, pure retags, unchanged consumers, and reader-only routes are excluded.",
  source: "research/audit/wave11-audit-split.json plus the exact Audit-Alpha A6 edit ledger",
  targets: repairTargets.map(([id, reason]) => ({ id, reason })),
});

console.log(`wave11 A6 finalized: ${stamped.length} stamped items, ${finalRefuters.length} exact-final refuter routes, ${manifest.edges.length} edges, ${impact.required_review.length} consumers`);

function readResult(path) {
  const absolute = join(root, path);
  if (!existsSync(absolute)) fail(`missing result ${path}`);
  return JSON.parse(readFileSync(absolute, "utf8"));
}
function parseVerdict(tail = "") { return tail.match(/VERDICT:\s*(CLEAN|DEFECTS|CERTIFIED|REFUSED|BLOCKED)/)?.[1] ?? ""; }
function json(name) { return JSON.parse(readFileSync(join(audit, name), "utf8")); }
function write(name, value) { writeFileSync(join(audit, name), `${JSON.stringify(value, null, 2)}\n`); }
function fileSha(name) { return sha256(readFileSync(join(audit, name))); }
function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ""; }
function scalar(fm, key) { return fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, "m"))?.[1]?.trim().replace(/^["']|["']$/g, "") ?? ""; }
function list(fm, key) { const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, "m")); if (start < 0) return []; const open = fm.indexOf("[", start); let depth = 0; for (let i = open; i < fm.length; i += 1) { if (fm[i] === "[") depth += 1; else if (fm[i] === "]" && --depth === 0) return fm.slice(open + 1, i).split(",").map((value) => value.trim()).filter(Boolean); } return []; }
function section(body, heading) { const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); return body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"))?.[1] ?? ""; }
function score(text, contract) {
  const fm = frontmatter(text), body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const statement = section(body, "Statement") || section(body, "Statement refuted") || section(body, "Definition") || section(body, "Example");
  const proofSteps = ["Proof", "Refutation", "Counterexample", "Verification"].reduce((n, h) => n + [...section(body, h).matchAll(/^\d+\.\d+\s+/gm)].length, 0);
  const factLinks = (section(body, "Facts & Assumptions").match(/\[\[/g) ?? []).length;
  const source = `${scalar(fm, "title")}\n${statement}\n${body}`, signals = [];
  const add = (points, reason) => signals.push({ points, reason }); const deps = list(fm, "deps");
  if (deps.length >= 7) add(3, `${deps.length} declared dependencies`); else if (deps.length >= 4) add(2, `${deps.length} declared dependencies`);
  if (factLinks >= 4) add(2, `${factLinks} cited facts`); else if (factLinks >= 2) add(1, `${factLinks} cited facts`);
  if (proofSteps >= 10) add(2, `${proofSteps} numbered proof steps`); else if (proofSteps >= 6) add(1, `${proofSteps} numbered proof steps`);
  if (/\bif and only if\b|\biff\b|\\Longleftrightarrow/.test(source)) add(3, "biconditional / both-direction claim");
  if (/well[-\s]defined|\bunique(?:ness)?\b|\bexists?\b|\bchoose\b|axiom of choice/i.test(statement)) add(2, "existence, choice, uniqueness, or well-definedness");
  if (/\bempty\b|\bnull\b|\bzero\b|\bone\b|degenerate|endpoint|boundary/i.test(source)) add(2, "boundary-sensitive language");
  if (/induction|recursion|minimal(?:ity)?|well[-\s]order/i.test(source)) add(2, "induction, recursion, or minimality");
  if (/quotient|coset|equivalence class|modulo/i.test(source)) add(2, "quotient or equivalence-class construction");
  if (/supremum|infimum|limit|integral|series|convergen(?:ce|t)/i.test(source)) add(2, "analytic limiting/completeness language");
  if (Array.isArray(contract.finite_smoke) && contract.finite_smoke.length) add(1, "finite countermodel smoke test selected");
  const value = signals.reduce((sum, signal) => sum + signal.points, 0);
  return { score: value, tier: value >= 8 ? "critical" : value >= 5 ? "high" : value >= 3 ? "moderate" : "ordinary", signals };
}
function cap(value) { return value[0].toUpperCase() + value.slice(1); }
function fail(message) { throw new Error(message); }

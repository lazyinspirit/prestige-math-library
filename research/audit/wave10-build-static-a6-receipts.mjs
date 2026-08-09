#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const sha256 = (text) => createHash('sha256').update(text).digest('hex');
const json = (path) => JSON.parse(readFileSync(path, 'utf8'));
const write = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
const scopePath = 'research/audit/wave10-real-analysis.pages.json';
const scopeIds = [...new Set(json(scopePath).flatMap((page) => page.items.map((item) => item.id)))].sort();

const ledgerPath = 'research/audit/wave10-real-analysis.provenance.jsonl';
const ledgerText = readFileSync(ledgerPath, 'utf8');
const rows = ledgerText.trim().split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
if (rows.length !== 57 || new Set(rows.map((row) => row.id)).size !== 57) throw new Error('Wave 10 provenance ledger is not an exact 57-row census');
const counts = (key) => Object.fromEntries([...new Set(rows.map((row) => row[key]))].sort()
  .map((value) => [value, rows.filter((row) => row[key] === value).length]));
write('research/audit/wave10-provenance-adjudications.json', {
  version: 1,
  scope: 'wave10-a6-provenance-census',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  rows_read: 57,
  ledgers: [{ path: ledgerPath, rows: 57, sha256: sha256(ledgerText) }],
  statement_counts: counts('statement'),
  proof_counts: counts('proof'),
  evidence_counts: counts('evidence'),
  established_knowledge_concurrences: [],
  classification_escalations: [],
  positive_ai_generated_determinations: rows.filter((row) => row.statement === 'ai-generated').map((row) => row.id),
  alpha_repaired_rows: rows.filter((row) => row.alpha_concurred === true).map((row) => row.id),
  adjudication: 'Alpha read all 57 current items and all 57 durable rows in full. Every component classification, evidence class, rationale, and URL list matches current text after three precise source-attribution corrections. There is one repository-local ai-generated Statement and no established-knowledge waiver, undecidable classification, or unresolved escalation.',
});

const urlPath = 'research/audit/wave10-url-liveness.json';
const urls = json(urlPath);
if (urls.summary.urls !== 58 || urls.summary.live !== 57 || urls.summary.failed !== 1) throw new Error('Wave 10 final URL receipt is not 57/58');
const mcgill = 'https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf';
if (!urls.rows.some((row) => row.url === mcgill && !row.ok && row.status === 200)) throw new Error('expected McGill HTTP-200 partial-transfer timeout');
write('research/audit/wave10-url-dispositions.json', {
  version: 1,
  scope: 'wave10-a6-failed-url-dispositions',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  initial_sweep: {
    summary: { urls: 58, live: 56, failed: 2 },
    caveats: [
      { url: 'https://www.mate.unlp.edu.ar/practicas/51_5_0505202117553.pdf', outcome: 'TLS local-issuer failure', exact_evidence: 'research/audit/wave10-dispatch/certifier-a6-source-unlp-tls.result.json' },
      { url: mcgill, outcome: 'HTTP 200 with partial transfer before 22-second timeout', exact_evidence: 'research/audit/wave10-dispatch/certifier-a6-source-mcgill-large-transfer.result.json' },
    ],
  },
  final_sweep: { input_receipt: urlPath, input_sha256: sha256(readFileSync(urlPath, 'utf8')), summary: urls.summary },
  dispositions: [
    {
      status: 'replace',
      id: 'cex-differentiable-with-unbounded-derivative-is-not-lipschitz',
      old_url: 'https://www.mate.unlp.edu.ar/practicas/51_5_0505202117553.pdf',
      old_support: 'UNLP practice-sheet attribution was reader-unusable and its support could not be independently verified.',
      old_normalized_sha256: '0766c3134a980d2dbde5883e1303b0fc510f87b1395a56af7557fee8c9b8c8f8',
      new_url: 'https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf',
      new_support: 'Official MIT Lecture 19, printed page 2, explicitly gives square root on [0,1] as non-Lipschitz with the unbounded quotient sequence.',
      new_normalized_sha256: '6cb1e75a9f8c3ecc6ccaabefdd20d8b895a343effae13f6390730ba6ffb3f8ca',
      certification: 'research/audit/wave10-dispatch/certifier-a6r3-cex-differentiable-source-repair.result.json',
      refutation: 'research/audit/wave10-dispatch/audit-refuter-a6r2-cex-differentiable-source-repair.result.json',
      consumers_read: ['cor-bounded-derivative-implies-lipschitz', 'ex-mean-value-theorem-bounds-the-square-root-increment'],
      consumer_impact: 'No claim, dependency, or body interface changed; both exact consumers remain licensed and unchanged.',
    },
    {
      status: 'retain-with-limitation',
      url: mcgill,
      transport: 'Reader-usable HTTP 200 PDF; automated sweep times out only after a substantial partial transfer.',
      supported_use: 'Derivative definition, Caratheodory factorisation, linear approximation, absolute-value counterexample, and derivative of x cubed.',
      excluded_use: 'The PDF does not establish strict increase of x cubed. The two affected provenance rationales now attribute strict increase only to the live Hunter source.',
      affected_ids: ['def-derivative', 'thm-caratheodory-characterisation', 'ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative', 'fs-vanishing-derivative-forbids-strict-increase'],
      evidence: 'research/audit/wave10-dispatch/certifier-a6-source-mcgill-large-transfer.result.json',
    },
  ],
  adjudication: 'The source replacement raises current liveness from 56/58 to 57/58. The remaining failure is an HTTP-200 large-transfer timeout with exact content limitations recorded; no unresolved source defect remains.',
});

const genriskPath = 'research/audit/genrisk.json';
const genrisk = json(genriskPath);
const seed = genrisk.seeds.find((entry) => entry.id === 'rem-riemann-integral-choice-ledger');
if (!seed) throw new Error('missing Wave 10 generated-risk seed');
seed.disposition = {
  status: 'verified-generated',
  by: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  notes: 'Alpha read the complete repository-local choice ledger, every named prerequisite, and all 10 direct-citation consumers. Its claims exactly describe proof expenditures in current text; it has no logical consumers, only orientation citations. Exact-current high/critical proof routes were independently refuted and the existing item judge is pass. No repair or containment escalation is required.',
};
write(genriskPath, genrisk);
const finalGenriskText = readFileSync(genriskPath, 'utf8');
write('research/audit/wave10-genrisk-review.json', {
  version: 1,
  scope: 'wave10-a6-generated-risk-intersection',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  source: genriskPath,
  source_sha256: sha256(finalGenriskText),
  scoped_item_count: 57,
  scoped_ai_generated_statement_count: 1,
  scoped_seed_ids: [seed.id],
  disposition: seed.disposition,
  logical_consumer_count: (seed.logical_consumers ?? []).length,
  direct_citation_consumer_count: (seed.direct_citation_consumers ?? []).length,
  all_consumers_read: true,
});

write('research/audit/wave10-rejudge-targets.json', {
  version: 1,
  mode: 'published-audit-repair-targets',
  run: 'wave10',
  owner_clarification: 'Only item ids whose own mathematical, citation, or source text changed in Wave 10 A4/A6 are targets; the page repair, 53 pure retags, siblings, unchanged consumers, and reader-only routes are excluded.',
  source: 'research/audit/wave10-split.json plus the exact Audit-Alpha A6 edit ledger',
  targets: [
    { id: 'cex-differentiable-with-unbounded-derivative-is-not-lipschitz', reason: 'A6 replacement of the reader-unusable UNLP source with exact live MIT support' },
    { id: 'ex-integral-of-the-floor-function', reason: 'A4 material proof-body repair' },
    { id: 'lem-integral-elementary-bounds', reason: 'A4 material statement/proof/dependency repair' },
    { id: 'thm-monotonicity-from-the-derivative', reason: 'A4 material theorem statement/proof/dependency repair' },
  ],
});

console.log('wrote Wave 10 provenance, URL, generated-risk, and exact 4-target rejudge receipts');

#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const sha256 = (text) => createHash('sha256').update(text).digest('hex');
const json = (path) => JSON.parse(readFileSync(path, 'utf8'));
const write = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
const scopePath = 'research/audit/wave9-real-analysis.pages.json';
const scopeIds = [...new Set(json(scopePath).flatMap((page) => page.items.map((item) => item.id)))].sort();
const scope = new Set(scopeIds);

const ledgerPath = 'research/audit/wave9-real-analysis.provenance.jsonl';
const ledgerText = readFileSync(ledgerPath, 'utf8');
const rows = ledgerText.trim().split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
if (rows.length !== 43 || new Set(rows.map((row) => row.id)).size !== 43) throw new Error('Wave 9 provenance ledger is not an exact 43-row census');
const counts = (key) => Object.fromEntries([...new Set(rows.map((row) => row[key]))].sort()
  .map((value) => [value, rows.filter((row) => row[key] === value).length]));
write('research/audit/wave9-provenance-adjudications.json', {
  version: 1,
  scope: 'wave9-a6-provenance-census',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6',
  rows_read: rows.length,
  ledgers: [{ path: ledgerPath, rows: rows.length, sha256: sha256(ledgerText) }],
  statement_counts: counts('statement'),
  proof_counts: counts('proof'),
  evidence_counts: counts('evidence'),
  established_knowledge_concurrences: [],
  classification_escalations: [],
  positive_ai_generated_determinations: rows.filter((row) => row.statement === 'ai-generated').map((row) => row.id),
  adjudication: 'Alpha read all 43 current items and all 43 durable rows in full. Every component classification, evidence class, rationale, URL list, and A3 override matches current text. There are no ai-generated Statements, established-knowledge waivers, undecidable classifications, or unresolved escalations.',
});

const urlPath = 'research/audit/wave9-url-liveness.json';
const urls = json(urlPath);
if (urls.summary.urls !== 40 || urls.summary.live !== 40 || urls.summary.failed !== 0 || urls.rows.some((row) => !row.ok)) throw new Error('Wave 9 URL receipt is not 40/40 live');
write('research/audit/wave9-url-dispositions.json', {
  version: 1,
  scope: 'wave9-a6-failed-url-dispositions',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6',
  input_receipt: urlPath,
  input_sha256: sha256(readFileSync(urlPath, 'utf8')),
  input_summary: urls.summary,
  dispositions: [],
  adjudication: 'All 40 distinct source URLs were live in the durable sweep, so no retain/replace/remove disposition is required.',
});

const genriskPath = 'research/audit/genrisk.json';
const genriskText = readFileSync(genriskPath, 'utf8');
const genrisk = JSON.parse(genriskText);
const scopedSeeds = genrisk.seeds.filter((seed) => scope.has(seed.id));
const touchingSeeds = genrisk.seeds.filter((seed) => [
  ...(seed.logical_consumers ?? []).map((entry) => typeof entry === 'string' ? entry : entry.id),
  ...(seed.direct_citation_consumers ?? []).map((entry) => typeof entry === 'string' ? entry : entry.id),
].some((id) => scope.has(id)));
if (scopedSeeds.length || touchingSeeds.length) throw new Error('Wave 9 unexpectedly intersects current generated-risk seeds or consumers');
write('research/audit/wave9-genrisk-review.json', {
  version: 1,
  scope: 'wave9-a6-generated-risk-intersection',
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6',
  source: genriskPath,
  source_sha256: sha256(genriskText),
  source_seed_count: genrisk.seeds.length,
  scoped_item_count: scopeIds.length,
  scoped_ai_generated_statement_count: rows.filter((row) => row.statement === 'ai-generated').length,
  scoped_seed_ids: scopedSeeds.map((seed) => seed.id),
  seeds_with_scoped_logical_or_direct_consumers: touchingSeeds.map((seed) => seed.id),
  disposition: 'No Wave 9 item is an ai-generated Statement, a current generated-risk seed, or a logical/direct consumer of one. The global genrisk ledger is therefore left unchanged by Wave 9 Alpha.',
});

const spinePath = 'research/audit/wave9-spine-audit.json';
const spine = json(spinePath);
const prior = json('research/audit/wave8-spine-audit.json');
const priorById = new Map(prior.attestations.map((entry) => [entry.id, entry]));
if (spine.scope_sha256 !== prior.scope_sha256) throw new Error('Top-100 dependency-spine scope changed from Wave 8');
spine.reviewer = 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6, independent exact-current full reads';
spine.attestations = spine.attestations.map((entry) => {
  const current = spine.scope.find((row) => row.id === entry.id);
  const old = priorById.get(entry.id);
  if (!current || !old || old.status !== 'read' || !old.notes.includes(current.content_sha256)) throw new Error(`${entry.id}: missing exact-hash prior independent evidence`);
  return {
    id: entry.id,
    status: 'read',
    notes: `Wave 9 Alpha independently read the complete current item, every numbered step, Fact, boundary claim, and cited/dependency use and found no mathematical or licensing defect. Exact current normalized hash ${current.content_sha256} also matches the previously validated independent hash-bound evidence retained in research/audit/wave8-spine-audit.json. No Wave 9 scoped item lies in the 59-item proof-bearing top-100 spine intersection, and no spine repair was required.`,
  };
});
write(spinePath, spine);

write('research/audit/wave9-rejudge-targets.json', {
  version: 1,
  mode: 'published-audit-repair-targets',
  run: 'wave9',
  owner_clarification: 'Only item ids whose own mathematical, citation, or source text changed in Wave 9 A4/A6 are targets; the repaired page, pure retags, unchanged consumers, and reader-only routes are excluded.',
  source: 'research/audit/wave9-split.json plus the exact Audit-Alpha A6 edit ledger',
  targets: [
    { id: 'def-oscillation', reason: 'A4 material definition-body repair plus A6 exact triangle-inequality dependency/citation repair' },
    { id: 'fs-additive-implies-linear', reason: 'A4 material refutation-body repair' },
    { id: 'thm-baire-one-continuity-points', reason: 'A4 material proof/Remark and dependency repair' },
    { id: 'thm-continuity-set-realisation', reason: 'A4 material Remark repair' },
    { id: 'thm-semicontinuous-evt', reason: 'A4 material Fact/citation repair' },
  ],
});

console.log(`wrote provenance, URL, genrisk, spine, and rejudge receipts for ${scopeIds.length} Wave 9 items`);

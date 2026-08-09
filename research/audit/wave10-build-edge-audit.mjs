#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const manifestPath = 'research/audit/wave10-audit-manifest.json';
const outputPath = 'research/audit/wave10-edge-audit.json';
const manifestText = readFileSync(manifestPath, 'utf8');
const manifest = JSON.parse(manifestText);
const sha256 = (text) => createHash('sha256').update(text).digest('hex');
const itemCache = new Map();

function item(id) {
  if (!itemCache.has(id)) {
    const text = readFileSync(`items/${id}.md`, 'utf8');
    const body = text.replace(/^---[\s\S]*?\n---\n?/, '');
    itemCache.set(id, { text, body, sha256: sha256(text) });
  }
  return itemCache.get(id);
}
function evidence(edge, rendered) {
  if (edge.edge_type === 'dependency') return rendered
    ? 'Alpha read the complete exact-current source and target; the target exports precisely the proposition, hypotheses, quantifiers, and direction used at the rendered dependency link.'
    : 'Alpha read the complete exact-current source and target; this declared semantic prerequisite is genuinely used and the target exports precisely the proposition, hypotheses, quantifiers, and direction required.';
  if (edge.edge_type === 'well_definedness_discharge') return 'Alpha read the complete exact-current definition and discharge target; the target proves the existence, uniqueness, independence, or meaningfulness obligation invoked by the source.';
  if (edge.edge_type === 'forward_ref') return 'Alpha read both complete exact-current items; the pointer is orientation only, accurately describes the target, and is not used as a premise.';
  return 'Alpha read both complete exact-current items; the external mention is orientation only and accurately describes its target.';
}
function collectWaveIds(wave) {
  const ids = new Set();
  for (const file of readdirSync('research/audit').filter((name) => new RegExp(`^wave${wave}-.+\\.pages\\.json$`).test(name))) {
    for (const page of JSON.parse(readFileSync(`research/audit/${file}`, 'utf8'))) for (const entry of page.items) ids.add(entry.id);
  }
  return ids;
}

const edges = manifest.edges.map((edge, index) => {
  const source = item(edge.source);
  const target = item(edge.target);
  const rendered = [edge.declared_target, edge.target].some((id) => id && source.body.includes(`[[${id}]]`));
  return {
    index,
    source: edge.source,
    target: edge.target,
    edge_type: edge.edge_type,
    kind: edge.kind,
    source_page: edge.sourcePage,
    target_page: edge.targetPage,
    source_full_file_sha256: source.sha256,
    target_full_file_sha256: target.sha256,
    source_use: rendered ? 'rendered-body-link' : 'declared-semantic-prerequisite',
    alpha_disposition: 'exact',
    evidence: evidence(edge, rendered),
  };
});
const counts = (key, rows = edges) => Object.fromEntries([...new Set(rows.map((edge) => edge[key]))].sort()
  .map((value) => [value, rows.filter((edge) => edge[key] === value).length]));
const wave8Ids = collectWaveIds(8);
const wave9Ids = collectWaveIds(9);
const barrier = (wave, ids, expected) => {
  const rows = edges.filter((edge) => ids.has(edge.target));
  const sources = [...new Set(rows.map((edge) => edge.source))].sort();
  const targets = [...new Set(rows.map((edge) => edge.target))].sort();
  if (rows.length !== expected.edges || sources.length !== expected.sources || targets.length !== expected.targets) {
    throw new Error(`Wave ${wave} barrier mismatch: ${rows.length} edges / ${sources.length} sources / ${targets.length} targets`);
  }
  return {
    relationships: rows.length,
    source_items: sources.length,
    target_items: targets.length,
    kinds: counts('kind', rows),
    edge_types: counts('edge_type', rows),
    source_ids: sources,
    targets: targets.map((id) => ({ id, final_full_file_sha256: item(id).sha256 })),
    disposition: `Alpha reopened every one of the ${rows.length} recorded Wave 10 to Wave ${wave} relationships against exact A9-frozen Wave ${wave} text. Every source use remains licensed by the final target clause, hypotheses, quantifiers, and direction; no source relies on superseded wording.`,
  };
};
const wave8 = barrier(8, wave8Ids, { edges: 86, sources: 36, targets: 20 });
const wave9 = barrier(9, wave9Ids, { edges: 29, sources: 22, targets: 8 });
if (wave8.relationships + wave9.relationships !== 115) throw new Error('combined frozen-wave barrier is not 115 relationships');

const sourceIds = new Set(manifest.edges.map((edge) => edge.source));
const outsideTargets = new Set(manifest.edges.map((edge) => edge.target).filter((id) => !sourceIds.has(id)));
if (sourceIds.size !== 57 || outsideTargets.size !== 99) throw new Error(`reading surface mismatch: ${sourceIds.size} sources, ${outsideTargets.size} outside targets`);

const pages = JSON.parse(readFileSync('research/audit/wave10-real-analysis.pages.json', 'utf8'));
const pagePaths = [...new Set(pages.map((page) => `library/${page.category}/${page.id}.md`))];
if (pagePaths.length !== 4) throw new Error(`expected four scoped pages, got ${pagePaths.length}`);
const receipt = {
  version: 1,
  mode: 'published-audit-relationship-census',
  wave: 10,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6',
  manifest: manifestPath,
  manifest_sha256: sha256(manifestText),
  reading_surface: {
    scoped_items_read_in_full: 57,
    scoped_pages_read_in_full: 4,
    scoped_page_hashes: pagePaths.map((path) => ({ path, full_file_sha256: sha256(readFileSync(path, 'utf8')) })),
    distinct_targets_outside_manifest_source_set_read_in_full: outsideTargets.size,
    proof_bearing_top_100_spine_items_read_in_full: 59,
    affected_consumers_read_in_full: 338,
    sampling_used: false,
  },
  summary: {
    relationships: edges.length,
    dispositions: counts('alpha_disposition'),
    by_kind: counts('kind'),
    by_edge_type: counts('edge_type'),
    by_source_use: counts('source_use'),
    frozen_wave_barrier_relationships: wave8.relationships + wave9.relationships,
  },
  wave8_final_text_reconciliation: wave8,
  wave9_final_text_reconciliation: wave9,
  edges,
};
if (edges.length !== 888) throw new Error(`expected 888 manifest relationships, got ${edges.length}`);
writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${edges.length} exact edges; frozen barriers W8=${wave8.relationships}, W9=${wave9.relationships}`);

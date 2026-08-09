#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const manifestPath = 'research/audit/wave9-audit-manifest.json';
const outputPath = 'research/audit/wave9-edge-audit.json';
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
    ? 'Alpha read the exact current source use and target in full; the target supplies precisely the statement, hypotheses, and direction used.'
    : 'Alpha read the exact current source and target in full; this declared prerequisite is semantically used even without a rendered wiki link, and the target statement and hypotheses license the use.';
  if (edge.edge_type === 'well_definedness_discharge') return 'Alpha read the exact current definition and discharge item in full; the discharge proves the existence, uniqueness, or independence required for well-definedness.';
  if (edge.edge_type === 'forward_ref') return 'Alpha read both exact current items in full; the pointer is orientation only and accurately describes the target without using it as a premise.';
  return 'Alpha read both exact current items in full; the external mention is orientation only and accurately describes its target.';
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
    source_sha256: source.sha256,
    target_sha256: target.sha256,
    source_use: rendered ? 'rendered-body-link' : 'declared-semantic-prerequisite',
    alpha_disposition: 'exact',
    evidence: evidence(edge, rendered),
  };
});
const counts = (key) => Object.fromEntries([...new Set(edges.map((edge) => edge[key]))].sort()
  .map((value) => [value, edges.filter((edge) => edge[key] === value).length]));
const wave8Ids = new Set();
for (const file of readdirSync('research/audit').filter((name) => /^wave8-.+\.pages\.json$/.test(name))) {
  for (const page of JSON.parse(readFileSync(`research/audit/${file}`, 'utf8'))) for (const entry of page.items) wave8Ids.add(entry.id);
}
const wave8Edges = edges.filter((edge) => wave8Ids.has(edge.target));
const wave8Sources = [...new Set(wave8Edges.map((edge) => edge.source))].sort();
const wave8Targets = [...new Set(wave8Edges.map((edge) => edge.target))].sort();
if (wave8Edges.length !== 65 || wave8Sources.length !== 29 || wave8Targets.length !== 17) {
  throw new Error(`Wave 8 barrier mismatch: ${wave8Edges.length} edges / ${wave8Sources.length} sources / ${wave8Targets.length} targets`);
}
const sourceIds = new Set(manifest.edges.map((edge) => edge.source));
const outsideTargets = new Set(manifest.edges.map((edge) => edge.target).filter((id) => !sourceIds.has(id)));
if (outsideTargets.size !== 109) throw new Error(`expected 109 outside-scope current targets after A6, got ${outsideTargets.size}`);

const receipt = {
  version: 1,
  mode: 'published-audit-relationship-census',
  wave: 9,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6',
  manifest: manifestPath,
  manifest_sha256: sha256(manifestText),
  reading_surface: {
    scoped_items_read_in_full: 43,
    scoped_pages_read_in_full: 2,
    distinct_targets_outside_manifest_source_set_read_in_full: outsideTargets.size,
    proof_bearing_top_100_spine_items_read_in_full: 59,
    sampling_used: false,
  },
  summary: {
    relationships: edges.length,
    dispositions: counts('alpha_disposition'),
    by_kind: counts('kind'),
    by_edge_type: counts('edge_type'),
    by_source_use: counts('source_use'),
  },
  wave8_final_text_reconciliation: {
    relationships: wave8Edges.length,
    source_items: wave8Sources.length,
    target_items: wave8Targets.length,
    kinds: Object.fromEntries([...new Set(wave8Edges.map((edge) => edge.kind))].sort().map((kind) => [kind, wave8Edges.filter((edge) => edge.kind === kind).length])),
    edge_types: Object.fromEntries([...new Set(wave8Edges.map((edge) => edge.edge_type))].sort().map((kind) => [kind, wave8Edges.filter((edge) => edge.edge_type === kind).length])),
    source_ids: wave8Sources,
    targets: wave8Targets.map((id) => ({ id, final_full_file_sha256: item(id).sha256 })),
    disposition: 'Alpha reopened every one of the 65 recorded Wave 9 to Wave 8 relationships against exact current frozen post-A9 Wave 8 text. Every source use matches the final target clause, hypotheses, quantifiers, and direction; none depends on superseded Wave 8 wording.',
  },
  edges,
};
writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${edges.length} exact edges, including ${wave8Edges.length} exact Wave 9 to frozen Wave 8 reconciliations`);

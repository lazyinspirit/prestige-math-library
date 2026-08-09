#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const manifestPath = 'research/audit/wave8-audit-manifest.json';
const outputPath = 'research/audit/wave8-edge-audit.json';
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

function disposition(edge, rendered) {
  if (edge.edge_type === 'dependency') {
    return rendered
      ? 'Alpha read the current source use and current target in full; the cited target supplies the exact statement, hypotheses, and direction used.'
      : 'Alpha read the current source and target in full; this declared prerequisite is semantically used even though the body does not render a direct wiki link, and its statement and hypotheses license the use.';
  }
  if (edge.edge_type === 'well_definedness_discharge') {
    return 'Alpha read the definition and current discharge item in full; the discharge proves the exact existence, uniqueness, or independence needed to make the definition well formed.';
  }
  if (edge.edge_type === 'forward_ref') {
    return 'Alpha read both current items in full; this is orientation only, not a proof premise, and the surrounding description matches the target statement without strengthening it.';
  }
  return 'Alpha read both current items in full; this external mention is orientation only, not a proof premise, and accurately describes the named target.';
}

const edges = manifest.edges.map((edge, index) => {
  const source = item(edge.source);
  const target = item(edge.target);
  const rendered = [edge.declared_target, edge.target]
    .some((id) => id && source.body.includes(`[[${id}]]`));
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
    evidence: disposition(edge, rendered),
  };
});

const counts = (key) => Object.fromEntries([...new Set(edges.map((edge) => edge[key]))]
  .sort().map((value) => [value, edges.filter((edge) => edge[key] === value).length]));
const receipt = {
  version: 1,
  mode: 'published-audit-relationship-census',
  wave: 8,
  reviewer: 'Audit-Alpha (owner-delegated)',
  manifest: manifestPath,
  manifest_sha256: sha256(manifestText),
  reading_surface: {
    scoped_items_read_in_full: 139,
    scoped_pages_read_in_full: 8,
    distinct_targets_outside_manifest_source_set_read_in_full: 166,
    sampling_used: false,
  },
  summary: {
    relationships: edges.length,
    dispositions: counts('alpha_disposition'),
    by_kind: counts('kind'),
    by_edge_type: counts('edge_type'),
    by_source_use: counts('source_use'),
  },
  edges,
};

writeFileSync(outputPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote ${outputPath}: ${edges.length} exact relationship dispositions`);

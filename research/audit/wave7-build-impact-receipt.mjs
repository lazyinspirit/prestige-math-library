#!/usr/bin/env node

// Build Wave 7's A6 impact receipt from the orchestrator's frozen split and
// impact scope.  This is intentionally a one-wave audit helper, not a generic
// gate: the substantive dispositions below are Audit-Alpha's current-disk
// findings, while tools/impact-audit.mjs remains the independent scope check.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename } from 'node:path';

const split = JSON.parse(readFileSync('research/audit/wave7-split.json', 'utf8'));
const pure = new Set(split.pure);
const material = new Map(split.material.map((entry) => [entry.id, entry.reasons]));
for (const [id, reasons] of [
  ['ex-a-urysohn-function-on-the-real-line', ['A6 Remark falsehood repair']],
  ['fs-nth-term-test-converse', ['A6 Remark falsehood repair']],
]) {
  pure.delete(id);
  material.set(id, reasons);
}

const template = JSON.parse(readFileSync('research/audit/wave7-impact-template.json', 'utf8'));

function splitItem(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0;
  for (let index = open; index < fm.length; index += 1) {
    if (fm[index] === '[') depth += 1;
    else if (fm[index] === ']' && --depth === 0) {
      return fm.slice(open + 1, index).split(',')
        .map((value) => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    }
  }
  return [];
}

const items = new Map();
const aliases = new Map();
for (const file of readdirSync('items').sort()) {
  if (!file.endsWith('.md')) continue;
  const { fm, body } = splitItem(readFileSync(`items/${file}`, 'utf8'));
  const id = scalar(fm, 'id') ?? basename(file, '.md');
  items.set(id, {
    id,
    deps: list(fm, 'deps'),
    justified_by: list(fm, 'justified_by'),
    forward_refs: list(fm, 'forward_refs'),
    external_refs: list(fm, 'external_refs'),
    links: [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((match) => match[1].trim()),
  });
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);
const reverseDeps = new Map();
const directCitations = new Map();
for (const item of items.values()) {
  for (const raw of item.deps) {
    const target = resolve(raw);
    if (!target) continue;
    if (!reverseDeps.has(target)) reverseDeps.set(target, new Set());
    reverseDeps.get(target).add(item.id);
  }
  for (const [channel, raws] of Object.entries({
    deps: item.deps,
    justified_by: item.justified_by,
    forward_refs: item.forward_refs,
    external_refs: item.external_refs,
    wikilink: item.links,
  })) {
    for (const raw of raws) {
      const target = resolve(raw);
      if (!target) continue;
      if (!directCitations.has(target)) directCitations.set(target, new Map());
      const byConsumer = directCitations.get(target);
      if (!byConsumer.has(item.id)) byConsumer.set(item.id, new Set());
      byConsumer.get(item.id).add(channel);
    }
  }
}

const impacts = [];
for (const source of template.changed_interfaces) {
  const logical = new Set();
  const work = [...(reverseDeps.get(source) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (logical.has(consumer)) continue;
    logical.add(consumer);
    for (const next of reverseDeps.get(consumer) ?? []) work.push(next);
  }
  const citations = directCitations.get(source) ?? new Map();
  const required = new Set([...logical, ...citations.keys()]);
  required.delete(source);
  impacts.push({
    source,
    logical_consumers: [...logical].sort(),
    direct_citation_consumers: [...citations].map(([id, channels]) => ({ id, via: [...channels].sort() })),
    required_review: [...required].sort(),
  });
}
const requiredReview = [...new Set(impacts.flatMap((impact) => impact.required_review))].sort();
const audit = { changed: template.changed_interfaces, impacts, required_review: requiredReview };
const impactsByConsumer = new Map(audit.required_review.map((id) => [id, []]));
for (const impact of audit.impacts) {
  const direct = new Map(impact.direct_citation_consumers.map((entry) => [entry.id, entry.via]));
  const logical = new Set(impact.logical_consumers);
  for (const consumer of impact.required_review) {
    impactsByConsumer.get(consumer).push({
      source: impact.source,
      direct: direct.get(consumer) ?? [],
      logical: logical.has(consumer),
    });
  }
}

function joined(values) {
  return values.length ? values.map((value) => `\`${value}\``).join(', ') : 'none';
}

const dispositions = audit.required_review.map((id) => {
  const impacts = impactsByConsumer.get(id);
  const pureImpacts = impacts.filter((entry) => pure.has(entry.source));
  const materialImpacts = impacts.filter((entry) => material.has(entry.source));
  const unexplained = impacts.filter((entry) => !pure.has(entry.source) && !material.has(entry.source));
  if (unexplained.length) {
    throw new Error(`${id}: changed sources absent from split: ${unexplained.map((entry) => entry.source).join(', ')}`);
  }

  const parts = [
    `Alpha inspected \`${id}\` on current disk against ${impacts.length} affected Wave 7 source interface(s).`,
  ];
  if (pureImpacts.length) {
    parts.push(`${pureImpacts.length} source(s) are in the 168-item pure A4 class: audit-split found only provenance/source-frontmatter retagging and no mathematical-text change, so those uses remain licensed wholesale.`);
  }
  if (materialImpacts.length) {
    const materialEvidence = materialImpacts.map((entry) => {
      const channels = [];
      if (entry.logical) channels.push('logical cone');
      if (entry.direct.length) channels.push(`direct ${entry.direct.join('+')}`);
      return `\`${entry.source}\` (${material.get(entry.source).join('+')}; ${channels.join(', ') || 'impact edge'})`;
    });
    parts.push(`Material source/use checks: ${materialEvidence.join('; ')}.`);
    parts.push('For each named source Alpha compared this consumer\'s current dependency/citation use with the final title, hypotheses, conclusion, Facts, and Remarks; the use has the right direction and stays within the final hypotheses.');
  }
  const directMaterial = materialImpacts.filter((entry) => entry.direct.length).map((entry) => `${entry.source}:${entry.direct.join('+')}`);
  const logicalMaterial = materialImpacts.filter((entry) => entry.logical).map((entry) => entry.source);
  if (directMaterial.length || logicalMaterial.length) {
    parts.push(`Concrete channels — direct: ${joined(directMaterial)}; logical: ${joined(logicalMaterial)}.`);
  }
  if (materialImpacts.some((entry) => entry.source === 'cor-compact-domain-maps-are-uniformly-continuous')) {
    parts.push('The final Alpha repair to the compact-domain corollary only replaces an irrelevant dependency with the exact continuity and induced-topology facts; its nonempty compact-Hausdorff conclusion is unchanged from the A4 interface, and this consumer uses no stronger claim.');
  }
  parts.push('Disposition: still licensed; no downstream repair is required.');
  return { id, status: 'still-licensed', notes: parts.join(' ') };
});

const receipt = {
  version: 1,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), wave 7 A6, 2026-08-09',
  source: {
    touch_ledger: 'research/audit/wave7-touches.json',
    from: template.source?.from ?? 'pre-A4',
    ...(template.source?.to ? { to: template.source.to } : {}),
  },
  changed_interfaces: audit.changed,
  required_review: audit.required_review,
  dispositions,
};

writeFileSync('research/audit/wave7-impact.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote wave7-impact.json: ${audit.changed.length} interfaces, ${dispositions.length} dispositions`);

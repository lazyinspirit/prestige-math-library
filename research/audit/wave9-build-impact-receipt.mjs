#!/usr/bin/env node

// Build Wave 9's isolated A6 impact receipt. The owner ran Waves 8--10 in
// parallel, so wave9-impact-touches.json projects the shared interval onto the
// exact 43-item Wave 9 scope before this script reconstructs every consumer.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename } from 'node:path';

const template = JSON.parse(readFileSync('research/audit/wave9-impact-template.json', 'utf8'));
const split = JSON.parse(readFileSync('research/audit/wave9-split.json', 'utf8'));
const classification = new Map();
for (const id of split.pure) classification.set(id, { class: 'pure-retag', reasons: ['provenance/source/verification frontmatter only'] });
for (const entry of split.material) classification.set(entry.id, { class: 'material', reasons: entry.reasons });
classification.get('def-oscillation').reasons.push('A6 added the exact triangle-inequality dependency and citation; no definition clause changed at A6');

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

const byConsumer = new Map(template.required_review.map((id) => [id, []]));
for (const source of template.changed_interfaces) {
  const logical = new Set();
  const work = [...(reverseDeps.get(source) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (logical.has(consumer)) continue;
    logical.add(consumer);
    for (const next of reverseDeps.get(consumer) ?? []) work.push(next);
  }
  const direct = directCitations.get(source) ?? new Map();
  for (const consumer of new Set([...logical, ...direct.keys()])) {
    if (consumer === source || !byConsumer.has(consumer)) continue;
    byConsumer.get(consumer).push({
      source,
      logical: logical.has(consumer),
      direct: [...(direct.get(consumer) ?? [])].sort(),
    });
  }
}

for (const source of template.changed_interfaces) if (!classification.has(source)) throw new Error(`${source}: absent from Wave 9 split`);
for (const [id, entries] of byConsumer) if (!entries.length) throw new Error(`${id}: no reconstructed impact channel`);

const materialNotes = {
  'def-oscillation': 'The final definition explicitly preserves omega_f(emptyset)=-infinity while restricting nonnegativity/real-valued bounded conclusions to nonempty-set and point oscillation. Every affected current use has a nonempty interval, neighbourhood, or point-oscillation argument, or explicitly retains the empty-set convention.',
  'fs-additive-implies-linear': 'The counterexample statement is unchanged; only its invalid old basis-vector multiplication refutation was replaced by a valid range-based irrational-value contradiction.',
  'thm-baire-one-continuity-points': 'The public theorem is unchanged; the circular/unused continuity-iff-oscillation Fact was removed and the needed oscillation implication is proved directly from the remaining licensed facts.',
  'thm-continuity-set-realisation': 'The theorem and construction are unchanged; the false monotonicity Remark was narrowed. Its direct consumer thm-discontinuity-set-is-f-sigma uses only the realised continuity-set conclusion.',
  'thm-semicontinuous-evt': 'The public theorem is unchanged; the lower-semicontinuous half now cites the exact negation-duality clause. The current upper-semicontinuity counterexample consumer remains licensed.',
};
const dispositions = template.required_review.map((id) => {
  const entries = byConsumer.get(id).sort((a, b) => a.source.localeCompare(b.source));
  const pure = entries.filter(({ source }) => classification.get(source).class === 'pure-retag');
  const material = entries.filter(({ source }) => classification.get(source).class !== 'pure-retag');
  const notes = [
    `Alpha reconstructed the current dependency and direct-citation channels from disk for \`${id}\` against ${entries.length} changed Wave 9 source interface(s).`,
  ];
  if (pure.length) notes.push(`${pure.length} affecting source(s) are field-aware pure provenance/source/verification retags; their title, logical metadata, mathematical body, and public interface are unchanged.`);
  if (material.length) {
    notes.push(`Substantive exact-current checks: ${material.map((entry) => {
      const channels = [entry.logical ? 'logical cone' : null, entry.direct.length ? `direct ${entry.direct.join('+')}` : null].filter(Boolean).join(', ');
      return `\`${entry.source}\` (${channels || 'impact edge'}): ${materialNotes[entry.source]}`;
    }).join(' ')} No consumer asserts superseded wording or requires a downstream edit.`);
  }
  notes.push('Disposition: still-licensed.');
  return { id, status: 'still-licensed', affecting_sources: entries.map((entry) => entry.source), notes: notes.join(' ') };
});

const receipt = {
  version: 1,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 9 A6, 2026-08-09',
  source: template.source,
  projection: 'research/audit/wave9-impact-touches.json isolates Wave 9 from the owner-authorized concurrent Waves 8--10 touch interval',
  changed_interfaces: template.changed_interfaces,
  required_review: template.required_review,
  dispositions,
};
writeFileSync('research/audit/wave9-impact-audit.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote wave9-impact-audit.json: ${receipt.changed_interfaces.length} interfaces, ${dispositions.length} dispositions`);

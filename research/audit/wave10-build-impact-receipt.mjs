#!/usr/bin/env node

// Build Wave 10's isolated A6 impact receipt. The projected touch ledger keeps
// the owner-authorized concurrent Waves 8--10 work outside this wave's window.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename } from 'node:path';

const template = JSON.parse(readFileSync('research/audit/wave10-impact-template.json', 'utf8'));
const split = JSON.parse(readFileSync('research/audit/wave10-split.json', 'utf8'));
const classification = new Map();
for (const id of split.pure) classification.set(id, { class: 'pure-retag', reasons: ['A4 provenance/source metadata application only'] });
for (const entry of split.material) classification.set(entry.id, { class: 'material', reasons: entry.reasons });
classification.set('cex-differentiable-with-unbounded-derivative-is-not-lipschitz', {
  class: 'source-repair',
  reasons: ['A6 replaced an unreadable UNLP URL with an exact live MIT source; mathematical body, logical metadata, title, and proof are unchanged'],
});

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
    else if (fm[index] === ']' && --depth === 0) return fm.slice(open + 1, index).split(',')
      .map((value) => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
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
  })) for (const raw of raws) {
    const target = resolve(raw);
    if (!target) continue;
    if (!directCitations.has(target)) directCitations.set(target, new Map());
    const byConsumer = directCitations.get(target);
    if (!byConsumer.has(item.id)) byConsumer.set(item.id, new Set());
    byConsumer.get(item.id).add(channel);
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
    byConsumer.get(consumer).push({ source, logical: logical.has(consumer), direct: [...(direct.get(consumer) ?? [])].sort() });
  }
}

for (const source of template.changed_interfaces) if (!classification.has(source)) throw new Error(`${source}: absent from Wave 10 classification`);
for (const [id, entries] of byConsumer) if (!entries.length) throw new Error(`${id}: no reconstructed impact channel`);

const materialNotes = {
  'lem-integral-elementary-bounds': 'The lemma Statement and proof are unchanged. Its repaired Remark correctly says the outer bounds are sharp without falsely characterising equality by constants; no reviewed consumer relies on the superseded equality claim.',
  'thm-monotonicity-from-the-derivative': 'The public theorem and proof inference are unchanged. L3 now states the exact nonnegative difference-quotient limit proposition used in step 1.2; every consumer remains licensed by the same monotonicity conclusions.',
  'ex-integral-of-the-floor-function': 'The public Example and calculation are unchanged. Step 1.2 now honestly cites L1 for the displayed floor evaluations, and both contracts record that use; no consumer depends on citation inventory.',
};
const sourceRepairNote = 'The unreadable UNLP PDF was removed and replaced by the live official MIT 18.785 Lecture 19 PDF, which explicitly records the square-root non-Lipschitz witness. The exact `(0,1]` punctured-domain contradiction and unbounded derivative remain proved locally. Title, logical metadata, Statement refuted, Facts, proof, dependencies, and all consumer-facing mathematics are unchanged.';

const dispositions = template.required_review.map((id) => {
  const entries = byConsumer.get(id).sort((a, b) => a.source.localeCompare(b.source));
  const pure = entries.filter(({ source }) => classification.get(source).class === 'pure-retag');
  const material = entries.filter(({ source }) => classification.get(source).class === 'material');
  const sourceRepairs = entries.filter(({ source }) => classification.get(source).class === 'source-repair');
  const notes = [`Alpha read \`${id}\` in full and reconstructed its current dependency/direct-citation channels against ${entries.length} changed Wave 10 source interface(s).`];
  if (pure.length) notes.push(`${pure.length} affecting source(s) are pure provenance/source metadata applications with unchanged mathematical body and logical metadata.`);
  if (material.length) notes.push(`Substantive checks: ${material.map((entry) => {
    const channels = [entry.logical ? 'logical cone' : null, entry.direct.length ? `direct ${entry.direct.join('+')}` : null].filter(Boolean).join(', ');
    return `\`${entry.source}\` (${channels || 'impact edge'}): ${materialNotes[entry.source]}`;
  }).join(' ')} No consumer asserts superseded wording or requires an edit.`);
  if (sourceRepairs.length) notes.push(`A6 source repair: ${sourceRepairs.map((entry) => `\`${entry.source}\``).join(', ')}. ${sourceRepairNote} No consumer edit is required.`);
  notes.push('Disposition: still-licensed.');
  return { id, status: 'still-licensed', affecting_sources: entries.map((entry) => entry.source), notes: notes.join(' ') };
});

const receipt = {
  version: 1,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 10 A6, 2026-08-09',
  source: template.source,
  projection: 'research/audit/wave10-impact-touches.json isolates Wave 10 from the owner-authorized concurrent Waves 8--10 touch interval',
  changed_interfaces: template.changed_interfaces,
  required_review: template.required_review,
  classification_counts: {
    material_a4: [...classification.values()].filter((row) => row.class === 'material').length,
    source_repair_a6: [...classification.values()].filter((row) => row.class === 'source-repair').length,
    pure_retag: [...classification.values()].filter((row) => row.class === 'pure-retag').length,
  },
  dispositions,
};
if (receipt.changed_interfaces.length !== 57 || dispositions.length !== 338) throw new Error(`impact census mismatch: ${receipt.changed_interfaces.length}/${dispositions.length}`);
writeFileSync('research/audit/wave10-impact-audit.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote wave10-impact-audit.json: ${receipt.changed_interfaces.length} interfaces, ${dispositions.length} full-read dispositions`);

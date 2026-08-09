#!/usr/bin/env node

// Build the exact combined Waves 8--10 A4 impact receipt handed to Wave 8.
// The frozen touch interval intentionally combines the three parallel waves;
// every source is attributed to its owner while mathematical edits remain
// confined to Wave 8.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename } from 'node:path';

const template = JSON.parse(readFileSync('research/audit/wave8-impact-template.json', 'utf8'));
const classification = new Map();
for (const wave of [8, 9, 10]) {
  const split = JSON.parse(readFileSync(`research/audit/wave${wave}-split.json`, 'utf8'));
  for (const id of split.pure) classification.set(id, { wave, class: 'pure-retag', reasons: ['provenance/source-frontmatter only'] });
  for (const entry of split.material) classification.set(entry.id, { wave, class: 'material', reasons: entry.reasons });
  for (const entry of split.created ?? []) classification.set(entry.id ?? entry, { wave, class: 'created', reasons: ['created'] });
}
for (const [id, reasons] of [
  ['cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous', ['A6 exact-source replacement']],
  ['thm-mertens', ['A6 semantic-source replacement']],
]) classification.set(id, { wave: 8, class: 'alpha-source-repair', reasons });

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

for (const source of template.changed_interfaces) {
  if (!classification.has(source)) throw new Error(`${source}: absent from Waves 8--10 split attribution`);
}
for (const [id, entries] of byConsumer) {
  if (!entries.length) throw new Error(`${id}: template consumer has no reconstructed impact channel`);
}

const quote = (values) => values.map((value) => `\`${value}\``).join(', ');
const dispositions = template.required_review.map((id) => {
  const entries = byConsumer.get(id);
  const pure = entries.filter(({ source }) => classification.get(source).class === 'pure-retag');
  const substantive = entries.filter(({ source }) => classification.get(source).class !== 'pure-retag');
  const owners = Object.fromEntries([8, 9, 10].map((wave) => [
    `wave${wave}`,
    entries.filter(({ source }) => classification.get(source).wave === wave).map(({ source }) => source).sort(),
  ]));
  const notes = [
    `Alpha reconstructed the current dependency and direct-citation channels from disk for \`${id}\` against ${entries.length} changed source interface(s).`,
  ];
  if (pure.length) {
    notes.push(`${pure.length} affecting source(s) are field-aware pure provenance/source-frontmatter retags; their title, logical metadata, Facts, Statement/Definition/Example, and Remarks are unchanged, so they cannot alter this consumer's mathematical licence.`);
  }
  if (substantive.length) {
    notes.push(`Substantive current-interface checks: ${substantive.map((entry) => {
      const c = classification.get(entry.source);
      const channels = [entry.logical ? 'logical cone' : null, entry.direct.length ? `direct ${entry.direct.join('+')}` : null].filter(Boolean).join(', ');
      return `\`${entry.source}\` (Wave ${c.wave}, ${c.class}, ${c.reasons.join('+')}; ${channels || 'impact edge'})`;
    }).join('; ')}.`);
    notes.push('For each named source, the final statement/definition and hypotheses remain sufficient in the recorded direction; fixes narrow or correct the source and no consumer asserts the superseded wording. Wave 9 and Wave 10 sources are attributed to their owning audits and were not edited by Wave 8 Alpha.');
  }
  notes.push(`Ownership — Wave 8: ${owners.wave8.length ? quote(owners.wave8) : 'none'}; Wave 9: ${owners.wave9.length ? quote(owners.wave9) : 'none'}; Wave 10: ${owners.wave10.length ? quote(owners.wave10) : 'none'}.`);
  notes.push('Disposition: still-licensed; no downstream edit is required.');
  return { id, status: 'still-licensed', notes: notes.join(' ') };
});

const receipt = {
  version: 1,
  reviewer: 'Audit-Alpha (GPT 5.6 Sol, owner-delegated), Wave 8 A6, 2026-08-09',
  source: template.source,
  attribution: {
    interval: 'combined Waves 8--10 A4 interval',
    rule: 'source ownership comes from wave8-split.json, wave9-split.json, and wave10-split.json; Wave 8 Alpha made no Wave 9/10 mathematical edit',
    alpha_source_repairs: [
      'cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous',
      'thm-mertens',
    ],
  },
  changed_interfaces: template.changed_interfaces,
  required_review: template.required_review,
  dispositions,
};

writeFileSync('research/audit/wave8-impact-audit.json', `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`wrote wave8-impact-audit.json: ${receipt.changed_interfaces.length} interfaces, ${dispositions.length} dispositions`);

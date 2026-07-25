#!/usr/bin/env node
// consumers.mjs — cross-page reconciliation helper.
//
//   node tools/consumers.mjs <id|file> [...]     explicit ids
//   node tools/consumers.mjs --changed [REF]     ids derived from git (default: HEAD)
//   node tools/consumers.mjs --changed --json
//
// WHY THIS EXISTS. One authoring agent per page leaves the CONSUMERS of a
// changed item unowned: a restated item on page A is a stale citation on page B,
// and no agent in the run is responsible for page B. That has failed three times
// (lem-max-is-sup and lem-finite-choice rewrites orphaned downstream citations;
// def-ultrafilter kept asserting a claim thm-ultrafilter-lemma had dropped; an id
// collision silently ate the body of rem-riesz-markov-kakutani).
//
// The reconciliation is mechanical, so it should not consume the audit tier.
// This prints, for each changed item, every OTHER item that references it and
// every page that lists it, so each can be opened and checked against the new
// text.
//
// --changed derives the id set from `git diff --name-only`, NOT from an agent's
// self-reported ledger. An agent that forgets to ledger a change is exactly the
// case the ledger cannot catch, so the ledger is a cross-check against this, not
// the source of truth.
//
// Exit code is always 0: this reports, it does not gate.

import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');

// ---------------------------------------------------------------- frontmatter
// Same parsing as tools/depcheck.mjs, deliberately: the two must agree on what
// an edge is, or this reports a different graph from the one the gate enforces.

function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}

function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0, end = -1;
  for (let i = open; i < fm.length; i++) {
    if (fm[i] === '[') depth++;
    else if (fm[i] === ']' && --depth === 0) { end = i; break; }
  }
  if (end < 0) return [];
  return fm.slice(open + 1, end)
    .split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}

// ---------------------------------------------------------------- load

const items = new Map();
const aliasTo = new Map();

for (const f of readdirSync(join(REPO, 'items')).sort()) {
  if (!f.endsWith('.md')) continue;
  const src = readFileSync(join(REPO, 'items', f), 'utf8');
  const { fm, body } = split(src);
  const id = scalar(fm, 'id') ?? basename(f, '.md');
  items.set(id, {
    id,
    file: `items/${f}`,
    deps: list(fm, 'deps'),
    justified: list(fm, 'justified_by'),
    externalRefs: list(fm, 'external_refs'),
    forward: list(fm, 'forward_refs'),
    links: [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].trim()),
  });
  for (const a of list(fm, 'aliases')) aliasTo.set(a, id);
}

const pages = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) { walk(fp); continue; }
    if (!e.name.endsWith('.md') || e.name.startsWith('_')) continue;
    const src = readFileSync(fp, 'utf8');
    const { fm, body } = split(src);
    pages.push({
      file: fp.slice(REPO.length + 1),
      page: scalar(fm, 'page') ?? basename(e.name, '.md'),
      items: [...list(fm, 'items'), ...list(fm, 'examples')],
      links: [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].trim()),
    });
  }
})(join(REPO, 'library'));

const resolve = (x) => (items.has(x) ? x : aliasTo.get(x));

// ---------------------------------------------------------------- target ids

let targets = [];
if (argv.includes('--changed')) {
  const i = argv.indexOf('--changed');
  const ref = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : 'HEAD';
  const out = execFileSync('git', ['diff', '--name-only', ref, '--', 'items/'], {
    cwd: REPO, encoding: 'utf8',
  });
  targets = out.split('\n').filter(Boolean).map((p) => basename(p, '.md'));
} else {
  targets = argv.filter((a) => !a.startsWith('--')).map((a) => basename(a, '.md'));
}
targets = [...new Set(targets)];

// ---------------------------------------------------------------- report

const report = [];
for (const t of targets) {
  const id = resolve(t) ?? t;
  const known = items.has(id);
  const consumers = [];
  for (const it of items.values()) {
    if (it.id === id) continue;
    const via = [];
    if (it.deps.map(resolve).includes(id)) via.push('deps');
    if (it.justified.map(resolve).includes(id)) via.push('justified_by');
    if (it.externalRefs.map(resolve).includes(id)) via.push('external_refs');
    if (it.forward.map(resolve).includes(id)) via.push('forward_refs');
    if (it.links.map(resolve).includes(id)) via.push('wikilink');
    if (via.length) consumers.push({ id: it.id, file: it.file, via });
  }
  const homes = pages.filter((p) => p.items.map(resolve).includes(id)).map((p) => p.file);
  const pageLinks = pages
    .filter((p) => !p.items.map(resolve).includes(id) && p.links.map(resolve).includes(id))
    .map((p) => p.file);
  report.push({ id, known, consumers, homes, pageLinks });
}

if (asJson) {
  console.log(JSON.stringify({ targets, report }, null, 2));
} else if (!targets.length) {
  console.log('no changed items (nothing to reconcile)');
} else {
  for (const r of report) {
    const missing = r.known ? '' : '   [NOT AN ITEM — deleted, or never existed]';
    console.log(`\n=== ${r.id}${missing}`);
    if (r.homes.length) console.log(`    home page(s): ${r.homes.join(', ')}`);
    else if (r.known) console.log('    home page(s): NONE — orphan, appears on no page');
    if (r.pageLinks.length) console.log(`    page prose links: ${r.pageLinks.join(', ')}`);
    if (!r.consumers.length) {
      console.log('    consumers: none');
      continue;
    }
    console.log(`    consumers (${r.consumers.length}) — open each and check it against the new text:`);
    for (const c of r.consumers) {
      console.log(`      ${c.id.padEnd(44)} via ${c.via.join('+')}`);
    }
  }
  const total = new Set(report.flatMap((r) => r.consumers.map((c) => c.id))).size;
  console.log(`\n${targets.length} changed item(s), ${total} distinct consumer(s) to check.`);
  const dead = report.filter((r) => !r.known);
  if (dead.length) {
    console.log(`WARNING: ${dead.length} target(s) are not items — a deleted id with consumers is a broken citation.`);
  }
}

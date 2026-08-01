#!/usr/bin/env node
// spine-audit.mjs — hash-bound independent audits of high-blast-radius proofs.
//
//   node tools/spine-audit.mjs --template research/dependency-spine-audit.json
//   node tools/spine-audit.mjs --receipt research/dependency-spine-audit.json
//
// Select the proof-bearing items among the `--top` (default 100) largest
// transitive dependency cones.  A reader audits each selected proof once; its
// receipt remains valid until the mathematical content hash changes.  This is a
// focused closure for the old blind spot where every reader checked that a cited
// Statement said the right thing, while no one necessarily read the proof of a
// heavily reused cited theorem.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const receiptPath = option('--receipt');
const templatePath = option('--template');
const top = Number(option('--top') ?? 100);
if ((!receiptPath && !templatePath) || (receiptPath && templatePath) || !Number.isInteger(top) || top < 1) usage();

const errors = [];
const warnings = [];
const error = (code, message) => errors.push({ code, message });
const warn = (code, message) => warnings.push({ code, message });

function split(source) {
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
function option(flag) { const index = argv.indexOf(flag); return index >= 0 ? argv[index + 1] : undefined; }
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function stripVerification(source) {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(source);
  if (!match) return source;
  return match[1].replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, '') + '\n---\n' + match[2];
}
function isProofBearing(body) { return /^## (?:Proof|Refutation|Counterexample|Verification)\s*$/m.test(body); }

const items = new Map();
const aliases = new Map();
for (const file of readdirSync(join(REPO, 'items')).sort()) {
  if (!file.endsWith('.md')) continue;
  const source = readFileSync(join(REPO, 'items', file), 'utf8');
  const { fm, body } = split(source);
  const id = scalar(fm, 'id') ?? basename(file, '.md');
  items.set(id, { id, deps: list(fm, 'deps'), proof: isProofBearing(body), content_sha256: createHash('sha256').update(stripVerification(source)).digest('hex') });
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);
const reverse = new Map();
for (const item of items.values()) for (const raw of item.deps) {
  const dependency = resolve(raw);
  if (!dependency) continue;
  if (!reverse.has(dependency)) reverse.set(dependency, new Set());
  reverse.get(dependency).add(item.id);
}
const descendants = (id) => {
  const out = new Set();
  const work = [...(reverse.get(id) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (out.has(consumer)) continue;
    out.add(consumer);
    for (const next of reverse.get(consumer) ?? []) work.push(next);
  }
  return out;
};
const ranked = [...items.values()].map((item) => ({
  ...item,
  direct_consumers: (reverse.get(item.id) ?? new Set()).size,
  transitive_consumers: descendants(item.id).size,
})).sort((a, b) => b.transitive_consumers - a.transitive_consumers || b.direct_consumers - a.direct_consumers || a.id.localeCompare(b.id));
const scope = ranked.slice(0, top).filter((item) => item.proof).map((item) => ({
  id: item.id,
  direct_consumers: item.direct_consumers,
  transitive_consumers: item.transitive_consumers,
  content_sha256: item.content_sha256,
}));
const scopeSha256 = createHash('sha256').update(JSON.stringify({ top, scope })).digest('hex');

if (templatePath) {
  writeFileSync(resolvePath(templatePath), `${JSON.stringify({
    version: 1,
    reviewer: '',
    top,
    scope_sha256: scopeSha256,
    scope,
    attestations: scope.map((entry) => ({ id: entry.id, status: 'pending', notes: '' })),
  }, null, 2)}\n`);
}
if (receiptPath) {
  let receipt;
  try { receipt = JSON.parse(readFileSync(resolvePath(receiptPath), 'utf8')); }
  catch (cause) { error('receipt-read', `${receiptPath}: ${cause.message}`); }
  if (receipt) {
    if (receipt.version !== 1) error('receipt-version', `${receiptPath}: version must be 1`);
    if (typeof receipt.reviewer !== 'string' || !receipt.reviewer.trim()) error('receipt-reviewer', `${receiptPath}: reviewer is required`);
    if (receipt.top !== top || receipt.scope_sha256 !== scopeSha256 || JSON.stringify(receipt.scope) !== JSON.stringify(scope)) error('receipt-scope', `${receiptPath}: scope no longer matches the current high-blast-radius proof set`);
    if (!Array.isArray(receipt.attestations)) error('receipt-attestations', `${receiptPath}: attestations must be an array`);
    else {
      const seen = new Map();
      for (const entry of receipt.attestations) {
        if (!entry || typeof entry.id !== 'string') { error('receipt-attestation-shape', `${receiptPath}: every attestation needs an id`); continue; }
        if (seen.has(entry.id)) error('receipt-attestation-duplicate', `${receiptPath}: duplicate attestation for ${entry.id}`);
        seen.set(entry.id, entry);
        if (!['read', 'repaired'].includes(entry.status)) error('receipt-attestation-status', `${receiptPath}: ${entry.id} needs resolved status read or repaired`);
        if (typeof entry.notes !== 'string' || !entry.notes.trim()) error('receipt-attestation-notes', `${receiptPath}: ${entry.id} needs a concrete proof-reading note`);
      }
      for (const entry of scope) if (!seen.has(entry.id)) error('receipt-attestation-missing', `${receiptPath}: missing high-impact proof ${entry.id}`);
      for (const id of seen.keys()) if (!scope.some((entry) => entry.id === id)) warn('receipt-attestation-extra', `${receiptPath}: ${id} is not in the current scope`);
    }
  }
}

const summary = { ranked_items: ranked.length, top, proof_scope: scope.length, errors: errors.length, warnings: warnings.length };
const result = { summary, scope_sha256: scopeSha256, scope, errors, warnings };
if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  if (templatePath) console.log(`spine-audit: wrote template ${templatePath}`);
  console.log(`spine-audit: ${scope.length} proof-bearing items among the top ${top} transitive consumer cones`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}: ${entry.message}`);
  for (const entry of errors) console.error(`ERROR ${entry.code}: ${entry.message}`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/spine-audit.mjs (--receipt <receipt.json> | --template <receipt.json>) [--top N] [--json]');
  process.exit(2);
}

#!/usr/bin/env node
// content-policy.mjs — enforce future-session provenance and containment rules.
//
//   node tools/content-policy.mjs research/level<n>-batch-*.pages.json [--json]
//
// This gate deliberately receives an explicit in-flight batch scope.  The
// library has a large legacy corpus whose provenance was not recorded under the
// present contract; retrospectively guessing those tags would be dishonest.  A
// future authored item, however, must disclose its provenance and cannot turn a
// newly generated convenience claim into shared load-bearing infrastructure.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const files = argv.filter((arg) => arg !== '--json');
if (!files.length) usage();

const AUTHORSHIP = new Set(['ai-generated', 'ai-altered', 'literature-derived']);
const GENERATED_ROLE = new Map([
  ['lemma', 'proof-decomposition-lemma'],
  ['corollary', 'direct-corollary'],
  ['example', 'example'],
  ['counterexample', 'counterexample'],
]);

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function scalar(fm, key) {
  const match = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function nested(fm, parent, child) {
  const start = fm.search(new RegExp(`^${parent}:[ \\t]*(?:#.*)?$`, 'm'));
  if (start < 0) return undefined;
  const rest = fm.slice(start);
  const match = rest.match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function hasSection(fm, key) {
  return new RegExp(`^${key}:[ \\t]*(?:#.*)?$`, 'm').test(fm);
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
function referenceUrls(fm) {
  // Support both the normal block form and YAML's inline flow form.  We only
  // need stable URLs here, so a small, deliberately constrained reader is
  // preferable to silently accepting an unrecorded source.
  const lines = fm.split(/\r?\n/);
  const index = lines.findIndex((line) => /^\s{2}references:\s*/.test(line));
  if (index < 0) return [];
  const block = [lines[index].replace(/^\s{2}references:\s*/, '')];
  for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
    const line = lines[cursor];
    if (line.trim() && !/^\s{4,}/.test(line)) break;
    block.push(line);
  }
  return [...block.join('\n').matchAll(/\burl:\s*("[^"]+"|'[^']+'|[^,\]}\n]+)/g)]
    .map((match) => match[1].trim().replace(/^['"]|['"]$/g, ''));
}
function readBatch(path) {
  try {
    const doc = JSON.parse(readFileSync(resolvePath(path), 'utf8'));
    if (!Array.isArray(doc)) throw new Error('batch manifest must be an array of pages');
    return doc;
  } catch (cause) {
    error('batch-read', `${path}: ${cause.message}`);
    return [];
  }
}
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }

// Load actual disk content and aliases once.  The policy is intentionally based
// on authored `deps`, never on a potentially stale plan scaffold.
const items = new Map();
const aliases = new Map();
for (const file of readdirSync(join(REPO, 'items')).sort()) {
  if (!file.endsWith('.md')) continue;
  const source = readFileSync(join(REPO, 'items', file), 'utf8');
  const { fm, body } = split(source);
  const id = scalar(fm, 'id') ?? basename(file, '.md');
  const item = {
    id,
    file: `items/${file}`,
    fm,
    body,
    kind: scalar(fm, 'kind'),
    authorship: scalar(fm, 'authorship'),
    deps: list(fm, 'deps'),
    provedHere: scalar(fm, 'proved_here') !== 'false',
  };
  items.set(id, item);
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);

const scope = [];
const seen = new Set();
for (const file of files) {
  for (const page of readBatch(file)) {
    for (const planned of page.items ?? []) {
      const id = typeof planned === 'string' ? planned : planned?.id;
      if (typeof id !== 'string' || !id) {
        error('batch-item-shape', `${file}: page ${page?.id ?? '?'} contains an item without an id`);
        continue;
      }
      if (seen.has(id)) {
        error('batch-duplicate-item', `${id} appears more than once across the supplied batch manifests`, id);
        continue;
      }
      seen.add(id);
      scope.push(id);
    }
  }
}

const directConsumers = new Map();
for (const item of items.values()) {
  for (const raw of item.deps) {
    const target = resolve(raw);
    if (!target) continue;
    if (!directConsumers.has(target)) directConsumers.set(target, new Set());
    directConsumers.get(target).add(item.id);
  }
}

for (const id of scope) {
  const item = items.get(resolve(id) ?? id);
  if (!item) {
    error('scope-item-missing', `${id} is declared by a batch but has no item file`, id);
    continue;
  }
  if (!item.authorship) error('authorship-missing', `${item.file}: every in-flight mathematical-content item needs authorship`, item.id);
  else if (!AUTHORSHIP.has(item.authorship)) error('authorship-invalid', `${item.file}: authorship must be ai-generated, ai-altered, or literature-derived`, item.id);
  // Both source-backed provenance labels make a falsifiable claim about where
  // the mathematical content came from.  Require at least one reader-visible
  // reference so Alpha and the judges have an object to compare against rather
  // than treating an untraceable label as a provenance record.
  if (['literature-derived', 'ai-altered'].includes(item.authorship) && !referenceUrls(item.fm).length) {
    error('source-backed-authorship-uncited', `${item.file}: ${item.authorship} content requires a sources.references URL`, item.id);
  }

  const generationPresent = hasSection(item.fm, 'generation');
  if (item.authorship !== 'ai-generated' && generationPresent) {
    error('generation-on-non-generated', `${item.file}: generation metadata is reserved for ai-generated content`, item.id);
  }
  if (item.authorship === 'ai-generated') {
    const expectedRole = GENERATED_ROLE.get(item.kind);
    if (!expectedRole) {
      error('generated-kind', `${item.file}: an ai-generated ${item.kind ?? 'item'} is forbidden; use source-backed material or an allowed decomposition lemma/corollary/example`, item.id);
    } else {
      const role = nested(item.fm, 'generation', 'role');
      if (role !== expectedRole) error('generated-role', `${item.file}: ai-generated ${item.kind} requires generation.role: ${expectedRole}`, item.id);

      if (item.kind === 'lemma') {
        const parentRaw = nested(item.fm, 'generation', 'parent');
        const parent = parentRaw && resolve(parentRaw);
        for (const key of ['parent', 'subclaim', 'consumer', 'why_not_inline']) {
          if (!nested(item.fm, 'generation', key)) error('generated-lemma-record', `${item.file}: generation.${key} is required for an ai-generated decomposition lemma`, item.id);
        }
        if (!parent) error('generated-lemma-parent', `${item.file}: generation.parent must name an existing item`, item.id);
        else {
          const parentItem = items.get(parent);
          if (!parentItem.deps.map(resolve).includes(item.id)) {
            error('generated-lemma-parent-use', `${item.file}: named parent ${parent} must directly depend on this lemma`, item.id);
          }
          for (const consumer of directConsumers.get(item.id) ?? []) {
            if (consumer !== parent) error('generated-lemma-escape', `${item.file}: ai-generated decomposition lemma is also load-bearing for ${consumer}, not only its named parent ${parent}`, item.id);
          }
        }
      } else if ((directConsumers.get(item.id) ?? new Set()).size) {
        error('generated-nonlemma-loadbearing', `${item.file}: an ai-generated ${item.kind} may not be a dependency-spine item`, item.id);
      }
    }
  }

  const externalPresent = hasSection(item.fm, 'external_dependency');
  if (item.provedHere && externalPresent) {
    error('external-on-proved', `${item.file}: external_dependency is valid only on proved_here: false fallback records`, item.id);
  }
  if (!item.provedHere) {
    const values = Object.fromEntries(['source_url', 'exact_statement', 'local_proof_attempt', 'necessity']
      .map((key) => [key, nested(item.fm, 'external_dependency', key)]));
    for (const [key, value] of Object.entries(values)) {
      if (!value) error('external-record-missing', `${item.file}: external_dependency.${key} is required for an in-flight external fallback`, item.id);
    }
    if (values.source_url && !/^https?:\/\//.test(values.source_url)) {
      error('external-source-url', `${item.file}: external_dependency.source_url must be an http(s) URL`, item.id);
    }
    if (values.source_url && !referenceUrls(item.fm).includes(values.source_url)) {
      error('external-source-reference', `${item.file}: external_dependency.source_url must exactly match a sources.references URL`, item.id);
    }
  }
}

const summary = { scope: scope.length, errors: errors.length, warnings: warnings.length };
if (asJson) console.log(JSON.stringify({ summary, errors, warnings, scope }, null, 2));
else {
  for (const entry of errors) console.error(`ERROR ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  console.log(`content-policy: ${summary.scope} scoped item(s), ${summary.errors} error(s), ${summary.warnings} warning(s)`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/content-policy.mjs research/level<n>-batch-*.pages.json [--json]');
  process.exit(2);
}

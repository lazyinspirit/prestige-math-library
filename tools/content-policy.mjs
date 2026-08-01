#!/usr/bin/env node
// content-policy.mjs — enforce future-session provenance and containment rules.
//
//   node tools/content-policy.mjs research/level<n>-batch-*.pages.json [--manifest-only] [--json]
//
// This gate deliberately receives an explicit in-flight batch scope.  The
// library has a large legacy corpus whose provenance was not recorded under the
// present contract; retrospectively guessing those tags would be dishonest.  A
// future authored item, however, must disclose its provenance and cannot make
// an AI-generated Statement/Construction a dependency. Proof provenance is
// deliberately irrelevant: the cited claim, not its local derivation, bounds
// downstream propagation.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
// Step 0 needs to reject an over-cap or malformed manifest *before* authoring.
// The normal policy additionally verifies the corresponding item files after
// Step 5.  Keeping these modes explicit prevents expected missing draft files
// from being misreported as a failed pre-authoring gate.
const manifestOnly = argv.includes('--manifest-only');
const files = argv.filter((arg) => arg !== '--json' && arg !== '--manifest-only');
if (!files.length) usage();

const STATEMENT_PROVENANCE = new Set(['ai-generated', 'ai-altered', 'literature-derived']);
const PROOF_PROVENANCE = new Set([...STATEMENT_PROVENANCE, 'not-supplied', 'not-applicable']);
const GENERATED_ROLE = new Map([
  ['corollary', 'direct-corollary'],
  ['example', 'example'],
  ['counterexample', 'counterexample'],
]);
// Owner policy, 2026-08-01: each Beta owns at most two A/B pairs.  This is a
// future-scope gate, so historical three-pair manifests remain readable.
const BATCH_A_PAIR_CAP = 2;

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
    provenance: {
      statement: nested(fm, 'provenance', 'statement'),
      proof: nested(fm, 'provenance', 'proof'),
    },
    deps: list(fm, 'deps'),
    provedHere: scalar(fm, 'proved_here') !== 'false',
  };
  items.set(id, item);
  for (const alias of list(fm, 'aliases')) aliases.set(alias, id);
}
const resolve = (id) => items.has(id) ? id : aliases.get(id);

// The Step-0 form also detects a newly minted id that would shadow an existing
// item or another page's plan entry.  It deliberately allows a page's own
// already-spliced entry, so the same manifest can be rechecked immediately
// after Step 4.
const planHomes = new Map();
try {
  const plan = JSON.parse(readFileSync(join(REPO, 'research', 'plan-spec.json'), 'utf8'));
  for (const page of plan.pages ?? []) for (const planned of page.items ?? []) {
    const id = typeof planned === 'string' ? planned : planned?.id;
    if (typeof id === 'string' && id && !planHomes.has(id)) planHomes.set(id, page.id);
  }
} catch (cause) {
  error('plan-read', `research/plan-spec.json: ${cause.message}`);
}

const scope = [];
const seen = new Set();
const plannedItems = new Map();
for (const file of files) {
  const batch = readBatch(file);
  const aPages = batch.filter((page) => page?.kind === 'A');
  if (aPages.length > BATCH_A_PAIR_CAP) {
    error('batch-a-pair-cap', `${file}: contains ${aPages.length} A/B pairs; a Beta may scaffold and author at most ${BATCH_A_PAIR_CAP}`);
  }
  for (const page of batch) {
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
      if (manifestOnly) {
        if (items.has(id)) error('batch-item-already-exists', `${id} already has an item file and cannot be minted by this future batch`, id);
        const priorHome = planHomes.get(id);
        if (priorHome && priorHome !== page?.id) {
          error('batch-plan-id-collision', `${id} is already planned on ${priorHome}, not ${page?.id ?? '?'}`, id);
        }
        plannedItems.set(id, {
          file,
          page: page?.id ?? '?',
          pageKind: page?.kind,
          order: page?.order,
          deps: Array.isArray(planned?.deps) ? planned.deps : [],
        });
      }
      scope.push(id);
    }
  }
}

// A scaffold has enough information to reject the dependency faults that are
// independent of prose: a missing target, a backwards reading-order edge, or
// any edge into a B/examples page.  This is deliberately narrower than the
// post-authoring graph/provenance gate, which reads the actual item files.
if (manifestOnly) for (const [id, planned] of plannedItems) {
  for (const raw of planned.deps) {
    if (typeof raw !== 'string' || !raw) {
      error('batch-dependency-shape', `${planned.file}: ${id} has a malformed dependency`, id);
      continue;
    }
    const target = plannedItems.get(raw);
    if (target) {
      if (target.pageKind === 'B') {
        error('batch-b-leaf-target', `${id} depends on B-page item ${raw} (${target.page})`, id);
      }
      if (typeof target.order === 'number' && typeof planned.order === 'number' && target.order > planned.order) {
        error('batch-forward-dependency', `${id} depends on later item ${raw} (${target.page})`, id);
      }
      continue;
    }
    if (!resolve(raw)) error('batch-dependency-missing', `${id} depends on ${raw}, which is neither declared by this batch nor an item on disk`, id);
  }
}

if (!manifestOnly) for (const id of scope) {
  const item = items.get(resolve(id) ?? id);
  if (!item) {
    error('scope-item-missing', `${id} is declared by a batch but has no item file`, id);
    continue;
  }
  const statement = item.provenance.statement;
  const proof = item.provenance.proof;
  if (!statement) error('provenance-statement-missing', `${item.file}: every in-flight mathematical-content item needs provenance.statement`, item.id);
  else if (!STATEMENT_PROVENANCE.has(statement)) error('provenance-statement-invalid', `${item.file}: provenance.statement must be ai-generated, ai-altered, or literature-derived`, item.id);
  if (!proof) error('provenance-proof-missing', `${item.file}: every in-flight mathematical-content item needs provenance.proof`, item.id);
  else if (!PROOF_PROVENANCE.has(proof)) error('provenance-proof-invalid', `${item.file}: provenance.proof must be ai-generated, ai-altered, literature-derived, not-supplied, or not-applicable`, item.id);
  // A source-backed component makes a falsifiable claim about where that part
  // of the item came from. Require a reader-visible reference for Alpha and
  // the judges to compare against rather than accepting an untraceable label.
  if ([statement, proof].some((value) => ['literature-derived', 'ai-altered'].includes(value)) && !referenceUrls(item.fm).length) {
    error('source-backed-provenance-uncited', `${item.file}: source-backed statement or proof provenance requires a sources.references URL`, item.id);
  }

  // A deps edge is a load-bearing use of the target's Statement/Construction.
  // Only that component controls this rule: a literature-derived or AI-altered
  // statement stays eligible even if its local proof is AI-generated, while an
  // AI-generated statement stays ineligible even if its proof is sourced.
  for (const raw of item.deps) {
    const targetId = resolve(raw);
    const target = targetId && items.get(targetId);
    if (target?.provenance.statement === 'ai-generated') {
      error(
        'ai-generated-statement-dependency',
        item.file + ': ' + item.id + ' may not depend on ' + target.id
          + '; its provenance.statement is ai-generated. Use a literature-derived or ai-altered statement, prove the needed step inline, rescope, or use the documented external fallback.',
        item.id,
      );
    }
  }

  const generationPresent = hasSection(item.fm, 'generation');
  if (statement !== 'ai-generated' && generationPresent) {
    error('generation-on-non-generated-statement', `${item.file}: generation metadata is reserved for an ai-generated statement or construction`, item.id);
  }
  if (statement === 'ai-generated') {
    const expectedRole = GENERATED_ROLE.get(item.kind);
    if (!expectedRole) {
      error('generated-kind', `${item.file}: an ai-generated ${item.kind ?? 'item'} is forbidden; use source-backed material or an allowed non-load-bearing corollary/example/counterexample`, item.id);
    } else {
      const role = nested(item.fm, 'generation', 'role');
      if (role !== expectedRole) error('generated-role', `${item.file}: ai-generated ${item.kind} requires generation.role: ${expectedRole}`, item.id);

      // An ai-generated lemma cannot be a legal dependency target, so a
      // decomposition belongs inline unless an eligible source-backed statement
      // can replace it. The permitted generated roles are all non-load-bearing.
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
  console.error('usage: node tools/content-policy.mjs research/level<n>-batch-*.pages.json [--manifest-only] [--json]');
  process.exit(2);
}

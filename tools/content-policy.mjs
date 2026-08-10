#!/usr/bin/env node
// content-policy.mjs — enforce future-session provenance and containment rules.
//
//   node tools/content-policy.mjs research/level<n>-batch-*.pages.json [--manifest-only] [--json]
//   node tools/content-policy.mjs --audit --manifest-only research/audit/wave<k>-*.pages.json
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
// `--manifest-only --audit` is the AUDIT's A0 shape. It exists because the two
// modes ask different questions of the same file. For a future build batch,
// manifest-only asks "may these ids be minted here?"; for an audit wave the
// manifest lists ids that are published by construction, so those questions
// answer themselves and the checks that encode them (batch-item-already-exists,
// and the reading-order rules batch-b-leaf-target / batch-forward-dependency,
// which legacy pages predate) fire on every well-formed audit manifest. What
// still means something — shape, an id claimed by two batches, a dangling deps
// target, a plan-spec home collision — is kept. Measured 2026-08-04 on wave 4:
// 95 errors before, 0 after, with no check lost that could ever have been true.
// A B-leaf or backwards edge in published content is a FINDING for the wave to
// read, surfaced by audit-manifest.mjs; it is not a gate failure.
// --audit (owner, 2026-08-02, AUDIT-WORKFLOW.md): published-page audit scope.
// The scope is retro-tagged legacy content, so the future-batch containment
// rules that cannot be applied retroactively (generated roles, the
// ai-generated dependency prohibition, structured external records) downgrade
// to visible warnings routed to genrisk/owner dispositions, while provenance
// coverage and source accountability stay hard. Every scoped item must have a
// row in the supplied --ledger provenance evidence ledger(s) matching its
// on-disk tags, and the single URL waiver is the owner's D2 decision:
// evidence `established-knowledge` with Alpha's recorded concurrence.
const auditMode = argv.includes('--audit');
const ledgerPaths = [];
for (let index = 0; index < argv.length; index += 1) {
  if (argv[index] === '--ledger' && argv[index + 1]) ledgerPaths.push(argv[index + 1]);
}
// --rehomed (owner, 2026-08-06): the owner-approved re-home receipt. See the
// note at the batch-item-already-exists / batch-plan-id-collision site below.
// Absent, both checks behave exactly as they did before it existed.
const rehomed = new Map();   // id -> {from_page, to_page}
{
  const index = argv.indexOf('--rehomed');
  if (index >= 0 && argv[index + 1]) {
    const receipt = JSON.parse(readFileSync(join(REPO, argv[index + 1]), 'utf8'));
    if (receipt.approved_by !== 'owner') {
      console.error(`content-policy: ${argv[index + 1]}: a re-home receipt must record approved_by: "owner"`);
      process.exit(2);
    }
    for (const entry of receipt.items ?? []) {
      if (!entry?.id || !entry.from_page || !entry.to_page || !entry.reason) {
        console.error(`content-policy: ${argv[index + 1]}: every re-home entry needs id, from_page, to_page and reason`);
        process.exit(2);
      }
      rehomed.set(entry.id, entry);
    }
  }
}
const files = argv.filter((arg, index) =>
  arg !== '--json' && arg !== '--manifest-only' && arg !== '--audit' &&
  arg !== '--ledger' && argv[index - 1] !== '--ledger' &&
  arg !== '--rehomed' && argv[index - 1] !== '--rehomed');
// The evidence ledger is required by the audit's POST-tagging mode, which reads
// each item's on-disk provenance. Manifest-only never opens an item file, so it
// has nothing to reconcile a ledger against and must not demand one.
if (!files.length || (auditMode && !manifestOnly && !ledgerPaths.length)) usage();

const AUDIT_EVIDENCE = new Map([
  ['exact-source', 'literature-derived'],
  ['semantic-source', 'ai-altered'],
  ['established-knowledge', 'ai-altered'],
  ['trivial', 'ai-generated'],
  ['none', 'ai-generated'],
]);

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

// The audit provenance evidence ledger: one row per retro-tagged item,
// {id, statement, proof, evidence, urls, rationale, alpha_concurred?, at}.
// A later row for the same id supersedes an earlier one (a deeper search or an
// Alpha retag), so the map keeps the last row in file order.
const auditLedger = new Map();
if (auditMode) for (const path of ledgerPaths) {
  let lines;
  try { lines = readFileSync(resolvePath(path), 'utf8').split(/\r?\n/).filter(Boolean); }
  catch (cause) { error('audit-ledger-read', `${path}: ${cause.message}`); continue; }
  for (const [index, line] of lines.entries()) {
    try {
      const row = JSON.parse(line);
      if (typeof row.id !== 'string' || !row.id) throw new Error('row has no id');
      auditLedger.set(row.id, { ...row, source: `${path}:${index + 1}` });
    } catch (cause) {
      error('audit-ledger-json', `${path}:${index + 1}: ${cause.message}`);
    }
  }
}

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
  // The two-pair Beta capacity binds scaffolding/authoring batches. An audit
  // batch is a whole category-level of already-published pairs; the capacity
  // rule is applied to the Betas assigned inside it, not to the manifest.
  if (!auditMode && aPages.length > BATCH_A_PAIR_CAP) {
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
        // A RE-HOME is not a mint (owner, 2026-08-06). Both checks below exist to
        // stop a batch claiming an id that is already someone else's; neither can
        // tell that apart from moving an existing item to an earlier page, which
        // is the only way to give a published statement a home a new foundational
        // page can cite. `--rehomed FILE` is the owner's approval in
        // machine-readable form, and it licenses ONLY the exact id/destination
        // pairs it names — anything else still fails.
        const move = rehomed.get(id);
        const licensed = move && move.to_page === page?.id;
        // Audit scope is published content: every id has a file, by definition.
        if (!auditMode && !licensed && items.has(id)) error('batch-item-already-exists', `${id} already has an item file and cannot be minted by this future batch`, id);
        if (licensed && !items.has(id)) error('batch-rehome-missing-item', `${id} is declared a re-home but has no item file to move`, id);
        const priorHome = planHomes.get(id);
        if (priorHome && priorHome !== page?.id && !licensed) {
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
      // Both of these are rules about what a batch may be SCAFFOLDED to do.
      // Published pages predate them, so in audit scope they are findings for
      // the wave to read, not gate failures.
      if (!auditMode && target.pageKind === 'B') {
        error('batch-b-leaf-target', `${id} depends on B-page item ${raw} (${target.page})`, id);
      }
      if (!auditMode && typeof target.order === 'number' && typeof planned.order === 'number' && target.order > planned.order) {
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
  // Reader-facing notation (owner, 2026-08-11). `\iota(n)` — the canonical
  // embedding of a natural number into Z or R, written explicitly around its
  // argument — is banned in new content: write the number. It reads as an
  // undefined function to anyone who has not just read the embedding lemma, and
  // 350 legacy items carry roughly 4,900 of them.
  //
  // Bare `\iota` is NOT matched and must not be: it is the standard name for the
  // basis inclusion in a universal property, as in a free group `(F, \iota)`
  // with `\phi \circ \iota = \iota'`. 35 items use it that way, correctly. Only
  // the APPLIED form is the defect.
  //
  // Batch-scoped, like every other rule in this file, so the legacy corpus is
  // not retro-flagged — that is an owner decision, not a gate's.
  for (const match of item.body.matchAll(/\\iota\s*(?:_\{[^}]*\}|_[A-Za-z0-9])?\s*\(/g)) {
    const at = item.body.slice(match.index, match.index + 24).replace(/\s+/g, ' ');
    error('notation-iota-applied',
      `${item.file}: applied \\iota notation ("${at}…") — write the natural number directly. Bare \\iota for a universal-property inclusion is still fine.`,
      item.id);
    break;   // one finding per item; the fix is a pass over the file, not per hit
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
    // The single owner-decided waiver (D2, AUDIT-WORKFLOW.md §6): a statement
    // the auditing models recognize as established standard knowledge may be
    // ai-altered WITHOUT a URL, but only with the ledger's evidence class
    // `established-knowledge` and Alpha's recorded concurrence. Everything
    // else keeps the hard reader-visible source requirement.
    const row = auditMode ? auditLedger.get(item.id) : undefined;
    if (row?.evidence === 'established-knowledge' && row?.alpha_concurred === true) {
      warn('established-knowledge-unsourced', `${item.file}: ai-altered without URL under the established-knowledge waiver (Alpha concurred; ${row.source})`, item.id);
    } else {
      error('source-backed-provenance-uncited', `${item.file}: source-backed statement or proof provenance requires a sources.references URL`, item.id);
    }
  }

  if (auditMode) {
    const row = auditLedger.get(item.id);
    if (!row) error('audit-ledger-missing-row', `${item.file}: no provenance evidence ledger row for ${item.id}`, item.id);
    else {
      if (row.statement !== statement || row.proof !== proof) {
        error('audit-ledger-mismatch', `${item.file}: ledger row (${row.source}) declares statement=${row.statement}, proof=${row.proof} but the item carries statement=${statement}, proof=${proof}`, item.id);
      }
      if (!AUDIT_EVIDENCE.has(row.evidence)) {
        error('audit-ledger-evidence', `${item.file}: ledger evidence must be one of ${[...AUDIT_EVIDENCE.keys()].join(', ')}`, item.id);
      } else if (AUDIT_EVIDENCE.get(row.evidence) !== statement) {
        error('audit-ledger-evidence-mismatch', `${item.file}: evidence ${row.evidence} implies provenance.statement ${AUDIT_EVIDENCE.get(row.evidence)}, not ${statement}`, item.id);
      }
      if (row.evidence === 'established-knowledge' && row.alpha_concurred !== true) {
        error('audit-ledger-alpha-concurrence', `${item.file}: established-knowledge requires Alpha's recorded concurrence (alpha_concurred: true); without it the statement falls back to ai-generated`, item.id);
      }
      if (typeof row.rationale !== 'string' || !row.rationale.trim()) {
        error('audit-ledger-rationale', `${item.file}: ledger row needs a concrete rationale`, item.id);
      }
    }
    // Owner decision D5: the legacy one-axis field is deleted in the same edit
    // that writes the audited provenance block.
    if (scalar(item.fm, 'authorship')) {
      error('legacy-authorship-retained', `${item.file}: remove the superseded authorship field in the same edit that writes audited provenance`, item.id);
    }
  }

  // A deps edge is a load-bearing use of the target's Statement/Construction.
  // Only that component controls this rule: a literature-derived or AI-altered
  // statement stays eligible even if its local proof is AI-generated, while an
  // AI-generated statement stays ineligible even if its proof is sourced.
  for (const raw of item.deps) {
    const targetId = resolve(raw);
    const target = targetId && items.get(targetId);
    if (target?.provenance.statement === 'ai-generated') {
      // In audit scope this is a discovered legacy fact, not a fresh authoring
      // choice: the seed and its cone belong to genrisk.mjs, whose receipt
      // requires an Alpha disposition (retag/restate/unfold/narrow/
      // verified-generated) before the wave closes.
      const report = auditMode ? warn : error;
      report(
        'ai-generated-statement-dependency',
        item.file + ': ' + item.id + (auditMode ? ' depends on ' : ' may not depend on ') + target.id
          + '; its provenance.statement is ai-generated. '
          + (auditMode
            ? 'Legacy audit scope: the seed requires a genrisk.mjs disposition.'
            : 'Use a literature-derived or ai-altered statement, prove the needed step inline, rescope, or use the documented external fallback.'),
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
      // A legacy retro-tagged theorem/lemma/definition can honestly BE
      // ai-generated; the future kind restriction cannot rewrite history. The
      // warning keeps it visible and genrisk owns its load-bearing surface.
      const report = auditMode ? warn : error;
      report('generated-kind', `${item.file}: an ai-generated ${item.kind ?? 'item'} is ${auditMode ? 'a legacy truth-risk finding: counterexample-search it and disposition its genrisk cone' : 'forbidden; use source-backed material or an allowed non-load-bearing corollary/example/counterexample'}`, item.id);
    } else {
      const role = nested(item.fm, 'generation', 'role');
      if (role !== expectedRole) {
        // Legacy items predate the generation block; in audit scope its absence
        // is recorded, not fatal.
        const report = auditMode ? warn : error;
        report('generated-role', `${item.file}: ai-generated ${item.kind} ${auditMode ? 'has no recorded' : 'requires'} generation.role: ${expectedRole}`, item.id);
      }

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
      // Legacy deferred-catalogue items predate the structured record; in audit
      // scope its absence is visible but the sources_checked refresh, not this
      // record, is their gate.
      if (!value) (auditMode ? warn : error)('external-record-missing', `${item.file}: external_dependency.${key} is ${auditMode ? 'absent on this legacy proved_here: false item' : 'required for an in-flight external fallback'}`, item.id);
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
  console.error('       node tools/content-policy.mjs --audit --ledger research/audit/wave<k>-<cat>.provenance.jsonl [--ledger ...] research/audit/wave<k>-*.pages.json [--json]');
  console.error('       node tools/content-policy.mjs --audit --manifest-only research/audit/wave<k>-*.pages.json   # A0; no ledger exists yet');
  process.exit(2);
}

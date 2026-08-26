#!/usr/bin/env node
// defect-ledger — every defect this pipeline has ever produced, as rows.
//
// WHY THIS EXISTS. The pipeline's defect history lived in 28 append-only
// adjudication ledgers (structured, but stage-blind: 7 of 3,920 rows carry a
// stage), a dozen step-10 reports (rich, prose-only), reader/Alpha reports
// with per-run numbering schemes, PREVENTIONS.md, 17 tool headers, and an
// out-of-repo memory dir. Nothing could answer "what recurs", "what leaked
// past step 6", or "which detector has ever actually been the catcher" — and
// the one hand-maintained aggregate (BUILD-AUDIT-INDEX.md) was wrong by ~6x
// on its own headline total (70 claimed; 412 counted). A row per defect turns
// every one of those questions into a query, and the generated view cannot
// disagree with its rows.
//
//   node tools/defect-ledger.mjs append   --file rows.json [--ledger <path>] [--no-render]
//   node tools/defect-ledger.mjs validate [--run R] [--ledger <path>]
//   node tools/defect-ledger.mjs stats    [--by f1,f2] [--leakage] [--recurrence] [--coverage] [--run R] [--json]
//   node tools/defect-ledger.mjs render   [--out research/DEFECT-LEDGER.md]
//   node tools/defect-ledger.mjs check    --run R --adjudications <adj.jsonl> [--closure <closure.json>]
//                                         [--view research/DEFECT-LEDGER.md] [--no-open]
//
// THE VIEW IS GENERATED, AND ITS HEADER SAYS SO. `research/DEFECT-LEDGER.md`
// carries "GENERATED from … @ <hash> — do not edit", and until 2026-08-16
// nothing kept that claim true: `render` was wired into no stage, so the first
// append without a manual render made the header a false statement about the
// file it names. That is BUILD-AUDIT-INDEX's 70-versus-412 drift, one level
// down and self-inflicted.
//
// Two mechanisms, at the two ends:
//   `append` re-renders the view in the same invocation, so the view can never
//   lag an append at all (`--no-render` for bulk seeding);
//   `check` recomputes the fingerprint and compares it with the header, so a
//   hand-edited view, a hand-edited ledger and a `--no-render` append are all
//   caught as `render-stale`.
// The machine reads the jsonl; nothing ever reads the view's content beyond
// that one header hash, and that asymmetry is deliberate.
//
// THE ROW. One row per DEFECT — two lanes finding one defect is ONE row with
// two adjudication_ref entries. Mandatory fields are exactly what the
// adjudicator knows at disposition time; `unknown` is a first-class value for
// the optional stage fields, and an unknown that blocks the write is a reason
// the row never gets written. `prevention: {kind: mechanical|brief|process|
// none, ref}` is the field that turns the log into a control.

import { readFileSync, writeFileSync, appendFileSync, existsSync, readdirSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const STEP6_SCOPE_TOOL = fileURLToPath(new URL('./step6-scope.mjs', import.meta.url));
const STEP6_CLOSE_TOOL = fileURLToPath(new URL('./step6-close.mjs', import.meta.url));

const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
/** Was the flag given at all, whatever `opt` made of its value? `opt` silently
 *  returns the default for a bare flag and for one whose value is the next
 *  flag, which is how `stats --by` printed nothing and exited 0. */
const given = (n) => argv.includes(`--${n}`);
const asJson = argv.includes('--json');
const ledgerPath = opt('ledger', 'research/defect-ledger.jsonl');
const lockPath = `${ledgerPath}.append-lock`;
const lockWait = new Int32Array(new SharedArrayBuffer(4));

/** Serialize the append and generated-view refresh. Step 6 group Alphas write
 * concurrently; without one transaction, two unique-id checks can race and a
 * slower renderer can publish a view that predates a completed append. */
function acquireAppendLock(timeoutMs = 30_000) {
  const started = Date.now();
  for (;;) {
    try {
      mkdirSync(lockPath);
      writeFileSync(join(lockPath, 'owner.json'), JSON.stringify({ pid: process.pid, at: new Date().toISOString() }));
      return () => rmSync(lockPath, { recursive: true, force: true });
    } catch (cause) {
      if (cause?.code !== 'EEXIST') throw cause;
      // Append+render normally takes milliseconds. A ten-minute lock is a dead
      // writer; removing it is safer than making every future build permanent.
      try {
        if (Date.now() - statSync(lockPath).mtimeMs > 10 * 60_000) {
          rmSync(lockPath, { recursive: true, force: true });
          continue;
        }
      } catch { continue; }
      if (Date.now() - started >= timeoutMs) throw new Error(`timed out waiting for ${lockPath}`);
      Atomics.wait(lockWait, 0, 0, 50);
    }
  }
}

const STAGES = ['1-scaffold', '2-assign', '3-review', '3-fix', '3-recheck', '4-splice', '4-baseline',
  '5-author', '6a-read', '6b-adjudicate', '6b-baseline', '6c-cross', '7-judge', '8-baseline',
  '8-adjudicate', '8-rejudge', '9-scope', '9-receipt', '10-report',
  'A0', 'A1', 'A2', 'A3', 'A4', 'A6', 'A7', 'A8', 'A9', 'A10',
  'owner', 'escaped-to-publication', 'post-publication', 'unknown'];
const ENUMS = {
  class: ['accuracy', 'richness', 'breaking-runtime', 'silent-runtime'],
  subclass: [
    // accuracy — the citation class splits four ways deliberately: inflated,
    // truncated, missing and corrupted have four different detectors and four
    // different fixes, and the collapsed `dependency_citation` hid truncation
    // for a whole run.
    'invalid-inference', 'citation-inflated', 'citation-truncated', 'citation-missing',
    'citation-misattributed', 'citation-corrupted', 'false-or-overstrong-statement',
    'false-or-overstrong-title', 'missing-hypothesis', 'missing-choice-scope',
    'invalid-witness', 'false-boundary-disposition', 'arithmetic-error',
    'undefined-notation', 'ill-typed-construction',
    // richness
    'scope-drop', 'scope-loss', 'false-decline', 'deferral-without-destination',
    'thin-harvest', 'unsourced-locator',
    // runtime
    'gate-vacuous', 'gate-wrong-signature', 'dispatch-lost', 'artifact-overwritten',
    'stage-unowned', 'scheduler-race', 'prompt-transcription', 'liveness-false-positive',
    'read-only-role-asked-to-write',
    'other'],
  severity: ['fatal', 'nonfatal', 'polish'],
  location: ['title', 'statement', 'definition', 'proof-step', 'facts-block', 'remark',
    'page-prose', 'page-summary', 'contract-row', 'coverage-row', 'frontmatter',
    'tool-code', 'engine-stage', 'brief', 'task-file'],
  caught_at_stage: STAGES,
  // Keep one role value per registered GPT judge lane so dispositions remain
  // valid when the active GPT lineup changes.
  caught_by_role: ['beta', 'reader', 'refuter', 'judge-terra', 'judge-sol', 'judge-gpt54',
    'group-alpha', 'lead-alpha', 'orchestrator', 'owner', 'gate', 'detector', 'unknown'],
  disposition: ['fixed', 'narrowed', 'deferred', 'dropped', 'open', 'false-positive', 'nonfatal-recorded'],
};
const OPTIONAL_ENUMS = {
  introduced_at_stage: STAGES,
  should_have_caught: STAGES,
  repair_cost: ['none', 'inline-fix', 'repair+rejudge', 'rewrite', 'rescope', 'blocker', 'tool-change', 'run-restart'],
};
const MANDATORY = ['defect_id', 'run', 'at', 'class', 'subclass', 'severity', 'location',
  'subject', 'caught_at_stage', 'caught_by_role', 'disposition'];
// The scalar fields `stats --by` can group on. Grouping on a field no row has
// produces one bucket named "(none)" holding every row — a table that looks
// like an answer and is not one, which is exactly what a typo used to yield.
const GROUPABLE = [...MANDATORY, ...Object.keys(OPTIONAL_ENUMS),
  'introduced_by_role', 'subclass_note', 'source', 'batch', 'orig_id',
  'item_sha256', 'recurrence_of'].sort();

function loadLedger(path = ledgerPath) {
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8').split('\n').filter(Boolean).map((l, i) => {
    try { return JSON.parse(l); } catch { return { __parse_error: `line ${i + 1}` }; }
  });
}

function validateRow(row, ids) {
  const errs = [];
  if (row.__parse_error) return [`unparseable jsonl at ${row.__parse_error}`];
  for (const f of MANDATORY) if (row[f] === undefined || row[f] === null || row[f] === '') errs.push(`${row.defect_id ?? '(no id)'}: missing ${f}`);
  for (const [f, dom] of Object.entries(ENUMS)) if (row[f] !== undefined && !dom.includes(row[f])) errs.push(`${row.defect_id}: ${f} "${row[f]}" outside the closed enum`);
  for (const [f, dom] of Object.entries(OPTIONAL_ENUMS)) if (row[f] !== undefined && !dom.includes(row[f])) errs.push(`${row.defect_id}: ${f} "${row[f]}" outside the closed enum`);
  if (row.subclass === 'other' && !row.subclass_note) errs.push(`${row.defect_id}: subclass "other" requires subclass_note`);
  if (row.prevention && !['mechanical', 'brief', 'process', 'none'].includes(row.prevention.kind)) errs.push(`${row.defect_id}: prevention.kind invalid`);
  if (row.adjudication_ref && !Array.isArray(row.adjudication_ref)) errs.push(`${row.defect_id}: adjudication_ref must be an array`);
  if (row.evidence && row.evidence.some((e) => !e?.path)) errs.push(`${row.defect_id}: evidence entries need a path`);
  if (row.defect_id) {
    if (ids.has(row.defect_id)) errs.push(`duplicate defect_id ${row.defect_id}`);
    ids.add(row.defect_id);
  }
  return errs;
}

function validate(rows, runFilter) {
  const ids = new Set();
  const errs = [];
  for (const row of rows) {
    if (runFilter && row.run !== runFilter) { if (row.defect_id) ids.add(row.defect_id); continue; }
    errs.push(...validateRow(row, ids));
  }
  return errs;
}

const filtered = (rows) => { const r = opt('run'); return r ? rows.filter((x) => x.run === r) : rows; };

// ---------------------------------------------------------------------------
// The generated view, and the ONE definition of its fingerprint.
//
// `render` stamps it into the header and `check` recomputes it. Two copies of a
// hash rule drift — that is this repo's `item_sha256` defect — so there is one.
const VIEW_DEFAULT = 'research/DEFECT-LEDGER.md';
const VIEW_HEADER_RE = /^> GENERATED from `[^`]+` @ ([0-9a-f]{12}) by/m;

/** sha256 of the ledger's bytes, first 12 hex. An absent ledger fingerprints as
 *  the empty string, so a view rendered from nothing still has a checkable
 *  header rather than an exemption. */
function ledgerFingerprint(path = ledgerPath) {
  return createHash('sha256')
    .update(existsSync(path) ? readFileSync(path) : '')
    .digest('hex').slice(0, 12);
}

/** The fingerprint the view CLAIMS it was generated from, or null when the view
 *  is absent or its header has been removed. */
function viewFingerprint(viewPath) {
  if (!existsSync(viewPath)) return null;
  return VIEW_HEADER_RE.exec(readFileSync(viewPath, 'utf8'))?.[1] ?? null;
}

function renderView(outPath) {
  const rows = loadLedger().filter((r) => !r.__parse_error);
  const sha = ledgerFingerprint();
  const runs = [...new Set(rows.map((r) => r.run))].sort();
  const count = (pred) => rows.filter(pred).length;
  const lines = [];
  lines.push(`# Defect ledger — generated view`);
  lines.push('');
  lines.push(`> GENERATED from \`${ledgerPath}\` @ ${sha} by \`tools/defect-ledger.mjs render\` — do not edit.`);
  lines.push('');
  // The lead is outcomes, never a bare total: a raw defect count reads as a
  // quality signal and is not one (judge-rejection-rates-mislead).
  lines.push('## What the numbers mean, first');
  lines.push('');
  lines.push('| | |');
  lines.push('|---|---|');
  lines.push(`| defects caught before publication | ${count((r) => r.caught_at_stage !== 'escaped-to-publication' && r.caught_at_stage !== 'post-publication')} |`);
  lines.push(`| now mechanically prevented | ${count((r) => r.prevention?.kind === 'mechanical')} |`);
  lines.push(`| escaped to publication | ${count((r) => r.caught_at_stage === 'escaped-to-publication' || r.caught_at_stage === 'post-publication')} |`);
  lines.push(`| still open | ${count((r) => r.disposition === 'open')} |`);
  lines.push('');
  for (const run of runs) {
    const rr = rows.filter((r) => r.run === run);
    lines.push(`## ${run} — ${rr.length} row(s)`);
    lines.push('');
    const table = {};
    for (const r of rr) {
      (table[r.subclass] ??= {})[r.caught_at_stage] = ((table[r.subclass] ?? {})[r.caught_at_stage] ?? 0) + 1;
    }
    const stages = [...new Set(rr.map((r) => r.caught_at_stage))].sort((a, b) => STAGES.indexOf(a) - STAGES.indexOf(b));
    lines.push(`| subclass | ${stages.join(' | ')} |`);
    lines.push(`|---|${stages.map(() => '---').join('|')}|`);
    for (const [sub, cells] of Object.entries(table).sort((a, b) =>
      Object.values(b[1]).reduce((x, y) => x + y, 0) - Object.values(a[1]).reduce((x, y) => x + y, 0))) {
      lines.push(`| ${sub} | ${stages.map((s) => cells[s] ?? '').join(' | ')} |`);
    }
    lines.push('');
  }
  const open = rows.filter((r) => r.disposition === 'open');
  if (open.length) {
    lines.push('## Open');
    lines.push('');
    for (const r of open) lines.push(`- \`${r.defect_id}\` ${r.run} · ${r.subclass} · ${r.subject}`);
    lines.push('');
  }
  writeFileSync(outPath, lines.join('\n'));
  return rows.length;
}

// ---------------------------------------------------------------------------
if (cmd === 'append') {
  const file = opt('file');
  if (!file) { console.error('append needs --file <rows.json> — never quote JSON through a shell'); process.exit(2); }
  const incoming = JSON.parse(readFileSync(file, 'utf8'));
  const rows = Array.isArray(incoming) ? incoming : [incoming];
  const release = acquireAppendLock();
  try {
    const existing = loadLedger();
    const ids = new Set(existing.map((r) => r.defect_id));
    const errs = [];
    for (const row of rows) errs.push(...validateRow(row, ids));
    if (errs.length) {
      console.error(`defect-ledger: ${errs.length} invalid row(s); nothing appended`);
      for (const e of errs) console.error(`  ${e}`);
      process.exitCode = 1;
    } else {
      appendFileSync(ledgerPath, rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
      console.log(`defect-ledger: appended ${rows.length} row(s) to ${ledgerPath} (${existing.length + rows.length} total)`);
      // The view fingerprint and append are one locked transaction. A second
      // writer starts from the first writer's completed ledger and view.
      if (!argv.includes('--no-render')) {
        const viewPath = opt('out', VIEW_DEFAULT);
        const n = renderView(viewPath);
        console.log(`defect-ledger: re-rendered ${n} row(s) -> ${viewPath} @ ${ledgerFingerprint()}`);
      }
    }
  } finally {
    release();
  }
  process.exit(process.exitCode ?? 0);
}

if (cmd === 'validate') {
  const rows = loadLedger();
  const errs = validate(rows, opt('run'));
  const n = filtered(rows).length;
  if (errs.length) { for (const e of errs) console.error(`ERROR ${e}`); }
  console.log(`defect-ledger: ${n} defect row(s) checked, ${errs.length} error(s)`);
  process.exit(errs.length ? 1 : 0);
}

if (cmd === 'stats') {
  const rows = filtered(loadLedger()).filter((r) => !r.__parse_error);
  const out = {};
  const by = opt('by');
  // A bare `--by`, or a `--by` whose value is the next flag, printed nothing and
  // exited 0 — the query silently became "no query", and a caller reading the
  // exit code learned that everything was fine. An unknown field was worse: it
  // grouped every row into one bucket named "(none)" and printed it as a result.
  if (given('by') && !by) {
    console.error('stats --by needs a comma-separated field list, e.g. --by subclass,caught_at_stage');
    console.error(`valid fields: ${GROUPABLE.join(', ')}`);
    process.exit(2);
  }
  if (by) {
    const fields = by.split(',').map((f) => f.trim());
    const unknown = fields.filter((f) => !GROUPABLE.includes(f));
    if (unknown.length) {
      console.error(`stats --by: unknown field(s) ${unknown.join(', ')}`);
      console.error(`valid fields: ${GROUPABLE.join(', ')}`);
      process.exit(2);
    }
    const table = {};
    for (const r of rows) {
      const key = fields.map((f) => r[f] ?? '(none)').join(' × ');
      table[key] = (table[key] ?? 0) + 1;
    }
    out.by = Object.fromEntries(Object.entries(table).sort((a, b) => b[1] - a[1]));
  }
  if (argv.includes('--leakage')) {
    // should_have_caught vs caught_at_stage — numerator AND denominator,
    // always: a bare ratio cannot distinguish a healthier pipeline from a
    // ledger that quietly stopped being written.
    const leaked = rows.filter((r) => r.should_have_caught && r.should_have_caught !== 'unknown'
      && r.caught_at_stage !== r.should_have_caught);
    const denom = rows.filter((r) => r.should_have_caught && r.should_have_caught !== 'unknown');
    out.leakage = {
      leaked: leaked.length, of: denom.length,
      pairs: leaked.reduce((acc, r) => {
        const k = `${r.should_have_caught} -> ${r.caught_at_stage}`;
        acc[k] = (acc[k] ?? 0) + 1; return acc;
      }, {}),
    };
  }
  if (argv.includes('--recurrence')) {
    const byClass = {};
    for (const r of rows) {
      (byClass[r.subclass] ??= { runs: new Set(), mechanical: false }).runs.add(r.run);
      if (r.prevention?.kind === 'mechanical') byClass[r.subclass].mechanical = true;
    }
    out.recurrence = Object.entries(byClass)
      .filter(([, v]) => v.runs.size >= 2 && !v.mechanical)
      .map(([subclass, v]) => ({ subclass, runs: [...v.runs].sort(),
        note: 'present in 2+ runs with no mechanical prevention — a design input for the next run' }));
  }
  if (argv.includes('--coverage')) {
    // A run with confirmed_fatal adjudications and zero ledger rows is the
    // ledger going stale — surfaced at the START of the next run via doctor.
    const runsWithRows = new Set(loadLedger().map((r) => r.run));
    const holes = [];
    for (const dir of ['research', 'research/audit']) {
      if (!existsSync(dir)) continue;
      for (const f of readdirSync(dir).filter((x) => x.endsWith('-judge-adjudications.jsonl'))) {
        const run = f.replace('-judge-adjudications.jsonl', '');
        const fatal = readFileSync(join(dir, f), 'utf8').split('\n')
          .filter((l) => l.includes('"confirmed_fatal"')).length;
        if (fatal && !runsWithRows.has(run)) holes.push({ run, confirmed_fatal: fatal });
      }
    }
    out.coverage = { runs_with_fatal_and_no_rows: holes };
  }
  console.log(asJson ? JSON.stringify(out, null, 2) : Object.entries(out).map(([k, v]) =>
    `## ${k}\n${JSON.stringify(v, null, 2)}`).join('\n\n'));
  process.exit(0);
}

if (cmd === 'render') {
  const outPath = opt('out', VIEW_DEFAULT);
  const n = renderView(outPath);
  console.log(`defect-ledger: rendered ${n} row(s) -> ${outPath}`);
  process.exit(0);
}

if (cmd === 'check') {
  const run = opt('run');
  const adjPath = opt('adjudications');
  const closurePath = opt('closure');
  if (!run || !adjPath) { console.error('check needs --run and --adjudications'); process.exit(2); }
  const rows = loadLedger();
  const mine = rows.filter((r) => r.run === run);
  const errs = validate(rows, run);

  // (a) exact-hash bijection: every confirmed_fatal adjudication row appears in
  // EXACTLY ONE ledger row's adjudication_ref — the anti-double-count clause.
  if (!existsSync(adjPath)) { errs.push(`no adjudication ledger at ${adjPath}`); }
  else {
    const fatals = readFileSync(adjPath, 'utf8').split('\n').filter(Boolean)
      .map((l) => { try { return JSON.parse(l); } catch { return null; } })
      .filter((a) => a?.outcome === 'confirmed_fatal');
    for (const a of fatals) {
      // Current rows identify the exact model verdict and context. Two judges
      // can find DIFFERENT defects on the same bytes, so item_sha256 alone is
      // not an ownership key. Prefer exact structured references; fall back to
      // old item-only references only when no exact owner exists, preserving
      // pre-contract ledgers without letting them double-own a current row.
      const references = (r) => (r.adjudication_ref ?? []).filter((ref) => ref && typeof ref === 'object');
      const sameItem = (r, ref) => a.item_sha256 ? ref.item_sha256 === a.item_sha256 : r.subject === a.id;
      const exactOwners = mine.filter((r) => references(r).some((ref) => sameItem(r, ref)
        && (!ref.id || ref.id === a.id)
        && (!a.model || ref.model === a.model)
        && (!a.context_sha256 || ref.context_sha256 === a.context_sha256)));
      const legacyOwners = mine.filter((r) => references(r).some((ref) => sameItem(r, ref)
        && (!ref.id || ref.id === a.id)
        && (!ref.model || !ref.context_sha256)));
      const owners = exactOwners.length ? exactOwners : legacyOwners;
      if (owners.length === 0) errs.push(`confirmed_fatal on ${a.id} (${a.model ?? '?'}) has no ledger row — the defect the adjudicator confirmed was never recorded`);
      if (owners.length > 1) errs.push(`confirmed_fatal on ${a.id} appears in ${owners.length} rows (${owners.map((o) => o.defect_id).join(', ')}) — one defect, one row`);
    }
  }

  // (b) the generated view is current. Its header asserts which ledger bytes it
  // was built from; recompute and compare. This is the only thing anything ever
  // reads out of the view — the machine reads the jsonl — and it catches the
  // window between an adjudication and its close, a `--no-render` append, and a
  // hand-edit of a file whose own header forbids editing.
  const viewPath = opt('view', VIEW_DEFAULT);
  const stamped = viewFingerprint(viewPath);
  const actual = ledgerFingerprint();
  if (stamped === null) {
    errs.push(`render-stale: ${viewPath} is missing or carries no GENERATED header — run \`node tools/defect-ledger.mjs render\``);
  } else if (stamped !== actual) {
    errs.push(`render-stale: ${viewPath} was generated from ${stamped} but ${ledgerPath} is now ${actual} — run \`node tools/defect-ledger.mjs render\``);
  }

  // (c) step-6 liveness: the 6b reports are the rows with no other mechanical
  // source (78% of frontier-14's fatals lived only in prose). Without this
  // clause the gate is satisfiable by mirroring the adjudication ledger.
  const has6b = existsSync('research') && readdirSync('research').some((f) =>
    f.startsWith(`${run}-alpha-`) && f.endsWith('-6b.md'));
  if (has6b && !mine.some((r) => ['6a-read', '6b-adjudicate', '6c-cross'].includes(r.caught_at_stage))) {
    errs.push('a 6b report exists but no ledger row is caught at 6a/6b/6c — the step-6 body is the part no other artifact holds');
  }

  // (d) open-defect agreement with the closure receipt. FATAL rows only in the
  // ledger→closure direction: the closure receipt's namespace is unrepaired
  // fatal PROOF defects, and a nonfatal row deliberately left open — B41 on
  // frontier-15 was a 503-ing archive snapshot whose 6b Alpha correctly
  // recorded "re-sweep before publish; re-source only if still dead when the
  // archive is demonstrably healthy" — is legitimate ledger state with no
  // business in that receipt. The first version compared every open row and
  // spent a step-8 repair round on the false positive. The reverse direction
  // is unconditional as before, and clause (e) is the terminal backstop that
  // keeps a nonfatal open row from surviving to publication.
  if (closurePath && existsSync(closurePath)) {
    const closure = JSON.parse(readFileSync(closurePath, 'utf8'));
    const openFatal = new Set((closure.open_fatal ?? []).map(String));
    for (const r of mine.filter((x) => x.disposition === 'open' && x.severity === 'fatal')) {
      if (!openFatal.has(String(r.subject))) errs.push(`${r.defect_id} is open in the ledger but ${r.subject} is not open in the closure receipt — one of them is stale`);
    }
    for (const id of openFatal) {
      if (!mine.some((r) => r.subject === id && r.disposition === 'open')) {
        errs.push(`closure names ${id} open_fatal with no open ledger row — exactly how two blockers lived only in markdown`);
      }
    }
  }

  // (e) the terminal stage may not end with ANY open row, whatever its
  // severity. `--no-open` is passed by the terminal 10-close gate alone: step 9 owns
  // sweeping the run's open rows (closing each whose recorded condition is
  // met, with evidence), so a row still open here is unfinished work the
  // owner must see, not a waivable detail.
  if (given('no-open')) {
    for (const r of mine.filter((x) => x.disposition === 'open')) {
      errs.push(`${r.defect_id} (${r.severity}) is still open at the terminal stage: ${r.subject} — close it with evidence or it ships open`);
    }
  }

  // (f) New Step-6 runs carry exact routed decisions, not a fatal-count proxy.
  // Re-run their mechanical closure here so a later ledger edit cannot break
  // obligation ownership after Step 6 passed. Historical runs with no decision
  // artifacts retain their evidence and are not retroactively failed.
  {
    let inResearch = [];
    try { inResearch = readdirSync('research'); } catch { /* no research dir: nothing to cross-check */ }
    const decisionFiles = inResearch.filter((x) => x.startsWith(`${run}-alpha-`) && x.endsWith('-6b-decisions.json'));
    const reportFiles = inResearch.filter((x) => x.startsWith(`${run}-alpha-`) && x.endsWith('-6b.md'));
    if (decisionFiles.length) {
      for (const rf of reportFiles) {
        const sibling = rf.replace(/-6b\.md$/, '-6b-decisions.json');
        if (!decisionFiles.includes(sibling)) {
          errs.push(`${rf} has no ${sibling} — every routed Step-6 group needs exact decisions`);
        }
      }
      const frozenPath = join('research', `${run}-step6-closure.json`);
      const closure = spawnSync(process.execPath,
        existsSync(frozenPath)
          ? [STEP6_CLOSE_TOOL, 'verify', '--root', process.cwd(), '--run', run]
          : [STEP6_SCOPE_TOOL, 'check', '--root', process.cwd(), '--run', run, '--phase', 'final'],
        { encoding: 'utf8', timeout: 120_000 });
      if (closure.status !== 0) errs.push(`Step-6 routed decisions or frozen closure no longer close:\n${closure.stderr || closure.stdout}`);
    } else if (reportFiles.length) {
      console.log(`note: ${reportFiles.length} 6b report(s) predate exact -6b-decisions.json routing; retained as historical evidence`);
    }
  }

  if (errs.length) for (const e of errs) console.error(`ERROR ${e}`);
  console.log(`defect-ledger: ${mine.length} defect row(s) checked for ${run}, ${errs.length} error(s)`);
  process.exit(errs.length ? 1 : 0);
}

console.error('usage: node tools/defect-ledger.mjs append|validate|stats|render|check …  (see header)');
process.exit(2);

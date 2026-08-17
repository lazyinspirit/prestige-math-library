#!/usr/bin/env node
// obligations.mjs — externally-blocked work as rows, not caveat prose.
//
//   node tools/obligations.mjs add   --run R --id <slug> --kind <kind> --note "<why>"
//                                    [--blocked-by "<what>"] [--unblock-at <ISO>]
//                                    [--tier block|report] [--dispatch '<json>']
//   node tools/obligations.mjs list  --run R [--due] [--json]
//   node tools/obligations.mjs check --run R [--terminal]
//   node tools/obligations.mjs close --run R --id <slug> --evidence "<what closed it>"
//   node tools/obligations.mjs accept --run R --id <slug> --by owner --reason "<why>"
//
// WHY. frontier-15 ended with 141 items lacking independent refuter coverage
// because the chartered lane was quota-locked until 2026-08-20 — and that debt
// existed only as caveat PROSE in the step-10 report. Nothing tracked it,
// nothing would re-dispatch group b's eight ready task files when the lane
// recovered. The same lesson the closure receipts taught twice: an obligation
// recorded in prose is an obligation forgotten; an id row with an unblock
// condition is work the engine can pick back up.
//
// Tiers: a `block` row holds the terminal gate until closed or owner-accepted;
// a `report` row is surfaced at the pause and never blocks (the step-10 report
// called the refuter re-run OPTIONAL, and the render check belongs to the
// owner's publish routine). Rows live in research/<run>-obligations.jsonl,
// append-only for adds; close/accept UPDATE THE ROW IN PLACE — one obligation,
// one row, same as the defect ledger.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] !== undefined && !String(argv[i + 1]).startsWith('--') ? argv[i + 1] : d; };
const given = (n) => argv.includes(`--${n}`);

const run = opt('run');
if (!cmd || !run) {
  console.error('usage: obligations.mjs add|list|check|close|accept --run <run> [...]  (see header)');
  process.exit(2);
}
const path = join(REPO, 'research', `${run}-obligations.jsonl`);

const load = () => (existsSync(path)
  ? readFileSync(path, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l))
  : []);
const save = (rows) => writeFileSync(path, rows.map((r) => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : ''));

const TIERS = new Set(['block', 'report']);
const STATUSES = new Set(['open', 'closed', 'accepted']);

if (cmd === 'add') {
  const id = opt('id'); const kind = opt('kind'); const note = opt('note');
  const tier = opt('tier', 'block');
  if (!id || !kind || !note) { console.error('add needs --id, --kind and --note'); process.exit(2); }
  if (!TIERS.has(tier)) { console.error(`--tier must be block or report, got ${tier}`); process.exit(2); }
  const rows = load();
  if (rows.some((r) => r.id === id)) { console.error(`${id}: already exists — one obligation, one row`); process.exit(1); }
  let dispatch = null;
  if (opt('dispatch')) {
    try { dispatch = JSON.parse(opt('dispatch')); }
    catch (e) { console.error(`--dispatch is not valid JSON: ${e.message}`); process.exit(2); }
  }
  rows.push({
    id, run, kind, note, tier, status: 'open',
    blocked_by: opt('blocked-by') ?? null,
    unblock_at: opt('unblock-at') ?? null,
    dispatch,
    at: new Date().toISOString(),
  });
  save(rows);
  console.log(`obligations: added ${id} (${tier})`);
  process.exit(0);
}

if (cmd === 'list') {
  const rows = load();
  const due = given('due')
    ? rows.filter((r) => r.status === 'open' && (!r.unblock_at || new Date(r.unblock_at).getTime() <= Date.now()))
    : rows;
  if (given('json')) { console.log(JSON.stringify(due, null, 1)); process.exit(0); }
  for (const r of due) {
    console.log(`${r.id} [${r.tier}/${r.status}] ${r.kind} — ${r.note}`
      + (r.blocked_by ? ` (blocked by: ${r.blocked_by}${r.unblock_at ? ` until ${r.unblock_at}` : ''})` : ''));
  }
  console.log(`obligations: ${due.length} row(s)${given('due') ? ' due' : ''} of ${rows.length}`);
  process.exit(0);
}

if (cmd === 'check') {
  const rows = load();
  const errs = [];
  for (const r of rows) {
    if (!STATUSES.has(r.status)) errs.push(`${r.id}: unknown status ${r.status}`);
    if (r.status === 'accepted' && !(r.accepted?.by && (r.accepted?.reason ?? '').length >= 20)) {
      errs.push(`${r.id}: accepted without a named acceptor and a real reason — acceptance is a decision, not a shrug`);
    }
    if (given('terminal') && r.tier === 'block' && r.status === 'open') {
      const when = r.unblock_at ? ` (unblocks ${r.unblock_at})` : '';
      errs.push(`${r.id} is open at the terminal stage${when}: ${r.note} — close it, or the owner accepts it on the record`);
    }
  }
  const reportRows = rows.filter((r) => r.tier === 'report' && r.status === 'open');
  for (const r of reportRows) console.log(`REPORT ${r.id}: ${r.note}${r.unblock_at ? ` (unblocks ${r.unblock_at})` : ''}`);
  if (errs.length) for (const e of errs) console.error(`ERROR ${e}`);
  console.log(`obligations: ${rows.length} row(s) checked, ${errs.length} error(s), ${reportRows.length} open report-tier row(s) surfaced`);
  process.exit(errs.length ? 1 : 0);
}

if (cmd === 'close' || cmd === 'accept') {
  const id = opt('id');
  if (!id) { console.error(`${cmd} needs --id`); process.exit(2); }
  const rows = load();
  const row = rows.find((r) => r.id === id);
  if (!row) { console.error(`${id}: no such obligation`); process.exit(1); }
  if (cmd === 'close') {
    const evidence = opt('evidence');
    if (!evidence || evidence.length < 20) { console.error('close needs --evidence saying what actually closed it'); process.exit(2); }
    row.status = 'closed';
    row.closed = { at: new Date().toISOString(), evidence };
  } else {
    const by = opt('by'); const reason = opt('reason');
    if (!by || !reason || reason.length < 20) { console.error('accept needs --by and a real --reason'); process.exit(2); }
    row.status = 'accepted';
    row.accepted = { at: new Date().toISOString(), by, reason };
  }
  save(rows);
  console.log(`obligations: ${id} ${row.status}`);
  process.exit(0);
}

console.error(`unknown command: ${cmd}`);
process.exit(2);

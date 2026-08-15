#!/usr/bin/env node
// gate-liveness — fail a gate that reports success while checking nothing.
//
// WHY THIS EXISTS. Every gate in this repo reports "0 error(s)". None of them
// distinguishes "I checked 400 things and found no problem" from "I checked
// nothing." On frontier-13 that difference was load-bearing four separate
// times:
//
//   finite-smoke        reported "0 error(s), 0 check(s)" for most of the run.
//                       The registry held only graph, poset and cyclic-subgroup
//                       checks, and a contract can REFERENCE a check but not
//                       DEFINE one — so every reference silently resolved to
//                       nothing. Green, and empty.
//   proof-contract      passed input maps with a single step.
//   impact-audit        took its baseline after authoring, so the diff was
//                       empty by construction and the gate confirmed rather
//                       than checked.
//   url-sweep (early)   read a comma-joined flag as one argument and saw only
//                       batch 1 of seven, reporting 5/5 live.
//
// The shared shape is that the SCOPE collapsed, not that the check failed. So
// this tool asserts the scope: it runs each gate, extracts the count of things
// actually examined, and fails when that count is zero — or below a floor the
// caller states.
//
// It is not a replacement for the gates. It is the assertion that they ran.
//
//   node tools/gate-liveness.mjs --run frontier-14 --contracts <merged.json>
//        --checklists <a.coverage.json,b.coverage.json> [--min-checks 1] [--json]
//
// Any gate whose inputs do not exist is reported as `skipped`, never as passed.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const argv = process.argv.slice(2);
const flag = (name, fallback = null) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};
/** Accept both `--flag a,b` and `--flag a b`. gates.mjs expands a checklist
 *  placeholder into separate argv entries, and a comma-only reader silently
 *  saw one file out of seven — the url-sweep bug above. */
const list = (name) => {
  const i = argv.indexOf(`--${name}`);
  if (i < 0) return [];
  const out = [];
  for (let j = i + 1; j < argv.length && !argv[j].startsWith('--'); j += 1) out.push(...argv[j].split(','));
  return out.filter(Boolean);
};

const run = flag('run');
const contracts = flag('contracts');
const checklists = list('checklists');
const minChecks = Number(flag('min-checks', '1'));
const asJson = argv.includes('--json');

if (!run) {
  console.error('usage: node tools/gate-liveness.mjs --run <name> [--contracts <merged.json>]');
  console.error('       [--checklists <a.json,b.json>] [--min-checks N] [--json]');
  process.exit(2);
}

/** Each probe names the gate, how to invoke it, and how to read the number of
 *  things it examined out of its own output. The regex is deliberately tied to
 *  the gate's real wording — if a gate changes its summary line, this reports
 *  `unparsed` rather than inventing a count. */
const PROBES = [
  {
    name: 'finite-smoke',
    needs: () => Boolean(contracts) && existsSync(contracts),
    argv: () => ['tools/finite-smoke.mjs', contracts],
    count: (out) => /finite-smoke:.*?(\d+)\s+check/.exec(out)?.[1],
    unit: 'checks',
    note: 'a contract may reference a check the registry does not define; those resolve to nothing',
  },
  {
    name: 'proof-contract',
    needs: () => Boolean(contracts) && existsSync(contracts),
    argv: () => ['tools/proof-contract.mjs', contracts, '--strict'],
    count: (out) => /proof-contract:.*?(\d+)\/\d+\s+item/.exec(out)?.[1],
    unit: 'items checked',
  },
  {
    name: 'coverage-checklist',
    needs: () => checklists.length > 0 && checklists.every((f) => existsSync(f)),
    argv: () => ['tools/coverage-checklist.mjs', ...checklists],
    count: (out) => /coverage-checklist:.*?(\d+)\s+harvested/.exec(out)?.[1],
    unit: 'harvested results',
    note: 'a comma-joined flag read as one path silently narrows this to a single batch',
  },
  {
    name: 'precheck',
    needs: () => existsSync('tools/precheck.mts'),
    argv: () => ['tools/tsx-run.mjs', 'tools/precheck.mts'],
    count: (out) => /(\d+)\s+checked/.exec(out)?.[1],
    unit: 'items checked',
  },
];

const results = [];
for (const p of PROBES) {
  if (!p.needs()) {
    results.push({ gate: p.name, status: 'skipped', why: 'inputs not present' });
    continue;
  }
  const r = spawnSync('node', p.argv(), { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const out = `${r.stdout ?? ''}${r.stderr ?? ''}`;
  const raw = p.count(out);
  if (raw === undefined || raw === null) {
    results.push({ gate: p.name, status: 'unparsed', exit: r.status, why: 'summary line did not match the expected wording' });
    continue;
  }
  const n = Number(raw);
  results.push({
    gate: p.name,
    status: n >= minChecks ? 'live' : 'VACUOUS',
    checked: n,
    unit: p.unit,
    exit: r.status,
    ...(n < minChecks && p.note ? { why: p.note } : {}),
  });
}

const vacuous = results.filter((r) => r.status === 'VACUOUS');
const unparsed = results.filter((r) => r.status === 'unparsed');
const skipped = results.filter((r) => r.status === 'skipped');

if (asJson) {
  console.log(JSON.stringify({ run, min_checks: minChecks, results }, null, 2));
} else {
  console.log(`gate-liveness [${run}] — a gate that checked nothing is not a gate that passed\n`);
  for (const r of results) {
    if (r.status === 'live') console.log(`  live      ${r.gate.padEnd(20)} ${r.checked} ${r.unit}`);
    else if (r.status === 'VACUOUS') {
      console.log(`  VACUOUS   ${r.gate.padEnd(20)} ${r.checked} ${r.unit} (exit ${r.exit})`);
      if (r.why) console.log(`            ${r.why}`);
    } else if (r.status === 'unparsed') console.log(`  unparsed  ${r.gate.padEnd(20)} ${r.why} (exit ${r.exit})`);
    else console.log(`  skipped   ${r.gate.padEnd(20)} ${r.why}`);
  }
  if (vacuous.length) console.log(`\n${vacuous.length} gate(s) reported a result over an empty scope. Fix the scope, not the gate.`);
  if (unparsed.length) console.log(`\n${unparsed.length} gate(s) could not be read. Treat as unknown, never as passed.`);
  if (skipped.length && !vacuous.length && !unparsed.length) {
    console.log(`\n${skipped.length} gate(s) skipped for missing inputs — expected before the artifacts they read exist.`);
  }
}

process.exit(vacuous.length || unparsed.length ? 1 : 0);

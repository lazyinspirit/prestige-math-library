#!/usr/bin/env node
// step8-terminal-resolution.mjs — exact-hash manual closure after both Step-8
// rejudge cycles have exhausted.
//
// The ordinary closure remains paired judges -> Alpha adjudication -> repair ->
// targeted rejudge.  This file is the deliberately narrow terminal exception:
// after the engine has recorded `repair-exhausted` for `8-rejudge`, the owner or
// supervising session resolves the blocker directly and records the exact text
// and context accepted.  It never writes a judge verdict or a judge stamp.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, appendFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tsxLoader } from './paths.mjs';
import { loadStep8JudgeEvidence, rejectionKey } from './step8-evidence.mjs';

export const TERMINAL_RESOLUTION_VERSION = 2;
export const TERMINAL_REJUDGE_ROUNDS = 2;

const HASH = /^[a-f0-9]{64}$/;
const DISPOSITIONS = new Set(['repaired', 'accepted-after-review']);
const RESOLVERS = new Set(['owner', 'session']);

export function terminalResolutionPath(run) {
  return `research/${run}-step8-terminal-resolutions.jsonl`;
}

export function parseTerminalResolutions(path, { allowMissing = true } = {}) {
  const rows = [];
  const errors = [];
  if (!path || !existsSync(path)) {
    if (path && !allowMissing) errors.push(`${path}: file does not exist`);
    return { rows, latest: new Map(), errors };
  }
  for (const [index, line] of readFileSync(path, 'utf8').split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    let row;
    try { row = JSON.parse(line); }
    catch { errors.push(`${path}:${index + 1}: invalid JSON`); continue; }
    const where = `${path}:${index + 1}`;
    const legacy = row?.version === 1;
    if ((!legacy && row?.version !== TERMINAL_RESOLUTION_VERSION) || row?.stage !== '8-rejudge')
      errors.push(`${where}: expected version 1 or 2 and stage "8-rejudge"`);
    if (typeof row?.run !== 'string' || !row.run || typeof row?.id !== 'string' || !row.id)
      errors.push(`${where}: run and id are required`);
    if (!RESOLVERS.has(row?.resolved_by))
      errors.push(`${where}: resolved_by must be owner or session`);
    if (!DISPOSITIONS.has(row?.disposition))
      errors.push(`${where}: disposition must be repaired or accepted-after-review`);
    const expectedRounds = legacy ? 3 : TERMINAL_REJUDGE_ROUNDS;
    if (row?.rejudge_rounds_exhausted !== expectedRounds)
      errors.push(`${where}: rejudge_rounds_exhausted must be ${expectedRounds} for version ${row?.version}`);
    if (!HASH.test(row?.context_sha256 ?? '') || !HASH.test(row?.item_sha256 ?? ''))
      errors.push(`${where}: context_sha256 and item_sha256 must be lowercase SHA-256 values`);
    if (typeof row?.basis !== 'string' || row.basis.trim().length < 80)
      errors.push(`${where}: basis must contain at least 80 characters of concrete mathematical evidence`);
    if (typeof row?.exhausted_at !== 'string' || !Number.isFinite(Date.parse(row.exhausted_at)))
      errors.push(`${where}: exhausted_at must be an ISO timestamp`);
    if (typeof row?.at !== 'string' || !Number.isFinite(Date.parse(row.at)))
      errors.push(`${where}: at must be an ISO timestamp`);
    if (!legacy) {
      if (!Array.isArray(row?.failure_evidence?.cycle_ids)
        || new Set(row.failure_evidence.cycle_ids).size < TERMINAL_REJUDGE_ROUNDS
        || typeof row?.failure_evidence?.closure_path !== 'string'
        || !/^research\/[a-zA-Z0-9._/-]+\.json$/.test(row.failure_evidence.closure_path)
        || row.failure_evidence.closure_path.includes('..')
        || !HASH.test(row?.failure_evidence?.closure_sha256 ?? '')
        || !['needs_rejudge', 'unadjudicated', 'open_fatal'].includes(row?.failure_evidence?.unresolved_as))
        errors.push(`${where}: version 2 requires exact per-item cycle ids and hash-bound unresolved closure evidence`);
    }
    rows.push(row);
  }
  const latest = new Map();
  for (const row of rows) {
    const prior = latest.get(row.id);
    if (!prior || String(row.at) >= String(prior.at)) latest.set(row.id, row);
  }
  return { rows, latest, errors };
}

export function terminalResolutionIsCurrent(row, now) {
  return Boolean(row && now
    && row.context_sha256 === now.context_sha256
    && row.item_sha256 === now.item_sha256);
}

function currentHashes(root, id) {
  const loader = tsxLoader();
  const stdout = execFileSync(process.execPath,
    ['--import', loader, 'tools/judge.mts', `items/${id}.md`, '--context-hash'],
    { cwd: root, encoding: 'utf8' });
  return JSON.parse(stdout);
}

function initialFatalCycleErrors(root, run, cycles) {
  const seeded = cycles.filter((cycle) => cycle.kind === 'initial-fatal');
  if (!seeded.length) return [];
  const evidence = loadStep8JudgeEvidence(
    join(root, 'research', `${run}-judge.jsonl`),
    join(root, 'research', `${run}-judge-adjudications.jsonl`),
    { allowMissingAdjudications: false },
  );
  const errors = [...evidence.errors];
  for (const entry of evidence.surplusAnswers) {
    errors.push(`${entry.path}:${entry.line}: adjudication does not exact-match a real rejection`);
  }
  for (const cycle of seeded) {
    const id = cycle.items?.[0];
    const matching = [...evidence.answers.values()].some((entry) =>
      entry.row.id === id
      && entry.row.context_sha256 === cycle.context_sha256
      && entry.row.outcome === 'confirmed_fatal'
      && evidence.rejections.has(rejectionKey(entry.row)));
    if (!id || cycle.items?.length !== 1 || !matching) {
      errors.push(`${cycle.cycle_id}: initial-fatal cycle does not bind a real confirmed-fatal judge context`);
    }
  }
  return errors;
}

export function terminalEvidence(root, run, id) {
  const statePath = join(root, '.autopilot', 'state.json');
  if (!existsSync(statePath)) throw new Error(`${statePath}: active run state is required`);
  const state = JSON.parse(readFileSync(statePath, 'utf8'));
  if (state.run !== run) throw new Error(`${statePath}: active run is ${state.run}, not ${run}`);

  const cyclesPath = join(root, 'research', `${run}-step8-rejudge-cycles.json`);
  if (!existsSync(cyclesPath)) throw new Error(`${cyclesPath}: per-item rejudge-cycle receipt is required`);
  const cycles = JSON.parse(readFileSync(cyclesPath, 'utf8'));
  const itemCycles = (cycles.cycles ?? []).filter((cycle) => (cycle.items ?? []).includes(id));
  const seedErrors = initialFatalCycleErrors(root, run, itemCycles);
  if (seedErrors.length) throw new Error(seedErrors.join('; '));
  const distinctCycleIds = new Set(itemCycles.map((cycle) => cycle.cycle_id));
  if (distinctCycleIds.size < TERMINAL_REJUDGE_ROUNDS)
    throw new Error(`${id}: consumed ${itemCycles.length}/${TERMINAL_REJUDGE_ROUNDS} rejudge cycles; terminal intervention is not licensed`);

  const candidates = [
    join(root, 'research', `${run}-judge-closure.json`),
    join(root, 'research', `${run}-step8-published-closure.json`),
  ];
  for (const path of candidates) {
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8');
    const closure = JSON.parse(text);
    const classes = [
      ['needs_rejudge', closure.needs_rejudge ?? []],
      ['unadjudicated', [
        ...(closure.unadjudicated ?? []),
        ...(closure.unadjudicated_rows ?? []).map((row) => row.id),
      ]],
      ['open_fatal', closure.open_fatal ?? []],
    ];
    const hit = classes.find(([, ids]) => ids.includes(id));
    if (!hit) continue;
    return {
      exhaustedAt: itemCycles.at(-1).completed_at ?? itemCycles.at(-1).started_at,
      evidence: {
        cycle_ids: itemCycles.slice(-TERMINAL_REJUDGE_ROUNDS).map((cycle) => cycle.cycle_id),
        closure_path: path.replace(`${root}/`, ''),
        closure_sha256: createHash('sha256').update(text).digest('hex'),
        unresolved_as: hit[0],
      },
    };
  }
  throw new Error(`${id}: not named in the current unresolved run or published Step-8 closure receipt`);
}

function value(argv, flag) {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] : '';
}

function usage() {
  console.error('usage: node tools/step8-terminal-resolution.mjs record --run <run> --id <id> --resolved-by owner|session --disposition repaired|accepted-after-review --basis <evidence> [--root <repo>]');
  console.error('       node tools/step8-terminal-resolution.mjs check --run <run> [--root <repo>]');
  process.exit(2);
}

function main() {
  const argv = process.argv.slice(2);
  const command = argv[0];
  const root = resolve(value(argv, '--root') || process.cwd());
  const run = value(argv, '--run');
  if (!run || !['record', 'check'].includes(command)) usage();
  const rel = terminalResolutionPath(run);
  const path = join(root, rel);

  if (command === 'check') {
    const parsed = parseTerminalResolutions(path, { allowMissing: false });
    const errors = [...parsed.errors];
    for (const row of parsed.latest.values()) {
      if (row.run !== run) errors.push(`${row.id}: row run ${row.run} does not match ${run}`);
      if (row.version === TERMINAL_RESOLUTION_VERSION) {
        try {
          const cycleReceipt = JSON.parse(readFileSync(join(root, 'research', `${run}-step8-rejudge-cycles.json`), 'utf8'));
          const cycles = new Map((cycleReceipt.cycles ?? []).map((cycle) => [cycle.cycle_id, cycle]));
          const selected = [];
          for (const cycleId of row.failure_evidence.cycle_ids) {
            const cycle = cycles.get(cycleId);
            if (!cycle || !(cycle.items ?? []).includes(row.id))
              errors.push(`${row.id}: failure evidence cycle ${cycleId} does not bind this item`);
            else selected.push(cycle);
          }
          errors.push(...initialFatalCycleErrors(root, run, selected).map((error) => `${row.id}: ${error}`));
        } catch (cause) { errors.push(`${row.id}: cannot verify rejudge cycles (${cause.message})`); }
        try {
          const closurePath = join(root, row.failure_evidence.closure_path);
          const closureText = readFileSync(closurePath, 'utf8');
          const closureHash = createHash('sha256').update(closureText).digest('hex');
          if (closureHash !== row.failure_evidence.closure_sha256) {
            errors.push(`${row.id}: unresolved closure evidence changed after terminal resolution`);
          } else {
            const closure = JSON.parse(closureText);
            const unresolved = row.failure_evidence.unresolved_as === 'unadjudicated'
              ? [...(closure.unadjudicated ?? []),
                  ...(closure.unadjudicated_rows ?? []).map((entry) => entry.id)]
              : (closure[row.failure_evidence.unresolved_as] ?? []);
            if (!unresolved.includes(row.id)) {
              errors.push(`${row.id}: no longer appears as ${row.failure_evidence.unresolved_as} in its bound closure receipt`);
            }
          }
        } catch (cause) {
          errors.push(`${row.id}: cannot verify unresolved closure evidence (${cause.message})`);
        }
      }
      try {
        const now = currentHashes(root, row.id);
        if (!terminalResolutionIsCurrent(row, now)) errors.push(`${row.id}: terminal resolution is stale against current item/context`);
      } catch (cause) { errors.push(`${row.id}: ${cause.message}`); }
    }
    console.log(`step8-terminal-resolution: ${parsed.latest.size} current resolution(s), ${errors.length} error(s)`);
    for (const error of errors) console.error(`ERROR ${error}`);
    process.exit(errors.length ? 1 : 0);
  }

  const id = value(argv, '--id');
  const resolvedBy = value(argv, '--resolved-by');
  const disposition = value(argv, '--disposition');
  const basis = value(argv, '--basis');
  if (!id || !RESOLVERS.has(resolvedBy) || !DISPOSITIONS.has(disposition) || basis.trim().length < 80) usage();
  const exhausted = terminalEvidence(root, run, id);
  const now = currentHashes(root, id);
  const row = {
    version: TERMINAL_RESOLUTION_VERSION,
    run,
    stage: '8-rejudge',
    id,
    resolved_by: resolvedBy,
    disposition,
    rejudge_rounds_exhausted: TERMINAL_REJUDGE_ROUNDS,
    exhausted_at: exhausted.exhaustedAt,
    failure_evidence: exhausted.evidence,
    context_sha256: now.context_sha256,
    item_sha256: now.item_sha256,
    basis: basis.trim(),
    at: new Date().toISOString(),
  };
  appendFileSync(path, `${JSON.stringify(row)}\n`);
  console.log(`step8-terminal-resolution: recorded ${id} at ${now.context_sha256}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();

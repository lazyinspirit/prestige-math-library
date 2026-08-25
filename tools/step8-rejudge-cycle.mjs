#!/usr/bin/env node
// One durable Step-8 rejudge cycle. The receipt is per item, so an unrelated
// repair does not spend another item's budget, and the frozen context that
// licensed the first repair counts.
// A paired funded-lane preflight runs immediately before fan-out (or is reused
// for at most five minutes under the identical lineup).

import { existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveLineup } from './models.mjs';
import { tsxLoader } from './paths.mjs';
import { loadStep8JudgeEvidence, rejectionKey } from './step8-evidence.mjs';

export const STEP8_MAX_REJUDGE_CYCLES = 2;
export const STEP8_PREFLIGHT_TTL_MS = 5 * 60_000;

export function cycleCounts(receipt) {
  const counts = new Map();
  for (const cycle of receipt?.cycles ?? []) {
    for (const id of new Set(cycle?.items ?? [])) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return counts;
}

export function exhaustedItems(ids, receipt, ceiling = STEP8_MAX_REJUDGE_CYCLES) {
  const counts = cycleCounts(receipt);
  return [...new Set(ids)].filter((id) => (counts.get(id) ?? 0) >= ceiling);
}

export function fundedPreflightIsFresh(row, lineupKey, now = Date.now()) {
  return row?.version === 1 && row?.lineup === lineupKey && row?.ok === true
    && Number.isFinite(Date.parse(row.at))
    && now - Date.parse(row.at) <= STEP8_PREFLIGHT_TTL_MS;
}

export function seedInitialFatalContexts(receipt, evidence, ids, run) {
  receipt.initial_fatal_contexts ??= {};
  let changed = false;
  for (const id of new Set(ids)) {
    if (Object.hasOwn(receipt.initial_fatal_contexts, id)) continue;
    const fatal = [...evidence.answers.values()]
      .filter((entry) => entry.row.id === id && entry.row.outcome === 'confirmed_fatal')
      .filter((entry) => evidence.rejections.has(rejectionKey(entry.row)));
    const contexts = [...new Set(fatal.map((entry) => entry.row.context_sha256))].sort();
    receipt.initial_fatal_contexts[id] = contexts;
    for (const context of contexts) {
      const sources = fatal.filter((entry) => entry.row.context_sha256 === context)
        .map((entry) => ({
          id,
          model: entry.row.model,
          context_sha256: context,
        }));
      receipt.cycles.push({
        cycle_id: `${run}-initial-fatal-${id}-${context.slice(0, 16)}`,
        kind: 'initial-fatal',
        lineup: 'pre-step8',
        items: [id],
        context_sha256: context,
        source_rejections: sources,
        started_at: fatal.find((entry) => entry.row.context_sha256 === context)?.row.at ?? null,
        completed_at: fatal.find((entry) => entry.row.context_sha256 === context)?.row.at ?? null,
        exit_code: 0,
      });
    }
    changed = true;
  }
  return changed;
}

function writeJsonAtomic(path, value) {
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, `${JSON.stringify(value, null, 2)}\n`);
  renameSync(tmp, path);
}

function value(argv, flag, fallback = '') {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] ?? fallback : fallback;
}

function usage() {
  console.error('usage: node tools/step8-rejudge-cycle.mjs --run <run> --ledger <jsonl> --adjudications <jsonl> --cost <jsonl> --items <ids> [--kind initial|repair|alert] [--receipt <json>]');
  process.exit(2);
}

function main() {
  const argv = process.argv.slice(2);
  const root = resolve(value(argv, '--root', process.cwd()));
  const run = value(argv, '--run');
  const ledger = value(argv, '--ledger');
  const adjudications = value(argv, '--adjudications');
  const cost = value(argv, '--cost');
  const ids = [...new Set(value(argv, '--items').split(',').map((id) => id.trim()).filter(Boolean))];
  const kind = value(argv, '--kind', 'repair');
  const receiptPath = resolve(root, value(argv, '--receipt', `research/${run}-step8-rejudge-cycles.json`));
  const preflightPath = resolve(root, value(argv, '--preflight-receipt', `research/${run}-step8-judge-preflight.json`));

  if (!run || !ledger || !adjudications || !cost || !ids.length || !['initial', 'repair', 'alert'].includes(kind)) usage();

  let receipt = {
    version: 1,
    run,
    max_cycles_per_item: STEP8_MAX_REJUDGE_CYCLES,
    initial_fatal_contexts: {},
    cycles: [],
  };
  if (existsSync(receiptPath)) {
    try { receipt = JSON.parse(readFileSync(receiptPath, 'utf8')); }
    catch (cause) { console.error(`${receiptPath}: invalid JSON (${cause.message})`); process.exit(2); }
  }
  if (receipt.version !== 1 || receipt.run !== run
    || receipt.max_cycles_per_item !== STEP8_MAX_REJUDGE_CYCLES || !Array.isArray(receipt.cycles)) {
    console.error(`${receiptPath}: expected a version-1 ${run} receipt with a ${STEP8_MAX_REJUDGE_CYCLES}-cycle ceiling`);
    process.exit(2);
  }

  // Check recorded lifetime currency before even reading the other ledgers. An item that has
  // already consumed both frozen contexts is an intervention blocker, not a
  // reason to run another availability probe or judge call.
  let exhausted = exhaustedItems(ids, receipt);
  if (exhausted.length) {
    for (const id of exhausted) {
      console.error(`ERROR rejudge-cycle-exhausted [${id}]: already consumed ${STEP8_MAX_REJUDGE_CYCLES} Step-8 rejudge cycles; intervention required`);
    }
    process.exit(1);
  }

  // The frozen judge context that produced the Step-8 repair is cycle one. It
  // predates this wrapper, so seed it exactly once from a genuine rejection +
  // confirmed-fatal adjudication join. Without this, "three rejudge rounds"
  // meant the initial context plus three more paid contexts.
  const evidence = loadStep8JudgeEvidence(
    resolve(root, ledger),
    resolve(root, adjudications),
    { allowMissingAdjudications: false },
  );
  if (evidence.errors.length || evidence.surplusAnswers.length) {
    for (const error of evidence.errors) console.error(`ERROR ${error}`);
    for (const entry of evidence.surplusAnswers) {
      console.error(`ERROR ${entry.path}:${entry.line}: adjudication does not exact-match a real rejection`);
    }
    process.exit(2);
  }
  if (seedInitialFatalContexts(receipt, evidence, ids, run)) writeJsonAtomic(receiptPath, receipt);
  exhausted = exhaustedItems(ids, receipt);
  if (exhausted.length) {
    for (const id of exhausted) {
      console.error(`ERROR rejudge-cycle-exhausted [${id}]: two frozen contexts already exist; intervention required`);
    }
    process.exit(1);
  }

  const lineup = resolveLineup();
  const lineupKey = `${lineup.name}:${lineup.models.join('+')}`;
  let cached = null;
  try { cached = JSON.parse(readFileSync(preflightPath, 'utf8')); } catch { /* run a live preflight */ }
  if (!fundedPreflightIsFresh(cached, lineupKey)) {
    const preflight = spawnSync(process.execPath,
      ['--import', tsxLoader(), 'tools/judge.mts', '--preflight', '--parallel'],
      { cwd: root, encoding: 'utf8', timeout: 300_000 });
    const row = {
      version: 1,
      run,
      lineup: lineupKey,
      models: lineup.models,
      ok: preflight.status === 0,
      at: new Date().toISOString(),
      detail: String(preflight.stderr || preflight.stdout || '').trim().slice(-1200),
    };
    writeJsonAtomic(preflightPath, row);
    if (preflight.status !== 0) {
      console.error(`step8-rejudge-cycle: paired judge preflight failed before fan-out\n${row.detail}`);
      process.exit(preflight.status === 3 ? 3 : 1);
    }
  } else {
    console.log(`step8-rejudge-cycle: using funded paired-lane preflight from ${cached.at}`);
  }

  const cycle = {
    cycle_id: `${run}-${Date.now()}-${process.pid}`,
    kind,
    lineup: lineupKey,
    items: ids,
    started_at: new Date().toISOString(),
    completed_at: null,
    exit_code: null,
  };
  receipt.cycles.push(cycle);
  // Count before fan-out: a killed process cannot silently buy a third call.
  writeJsonAtomic(receiptPath, receipt);

  const sweep = spawnSync(process.execPath, ['tools/judge-sweep.mjs',
    '--ledger', ledger, '--cost', cost, '--items', ids.join(',')],
  { cwd: root, stdio: 'inherit', timeout: 43_200_000 });
  cycle.completed_at = new Date().toISOString();
  cycle.exit_code = sweep.status;
  writeJsonAtomic(receiptPath, receipt);
  process.exit(sweep.status ?? 1);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();

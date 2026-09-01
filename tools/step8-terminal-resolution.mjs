#!/usr/bin/env node
// step8-terminal-resolution.mjs — exact-hash terminal closure after both
// Step-8 rejudge contexts have exhausted.
//
// The ordinary closure remains judge -> Alpha adjudication -> repair ->
// targeted rejudge.  After the second confirmed-fatal repair, one independent
// Sol-max Final Adjudicator per affected group accepts Alpha's repair or repairs
// it independently, then records the exact text/context here. Legacy owner or
// session interventions remain parseable for concluded runs. This tool never
// writes a judge verdict or a judge stamp.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tsxLoader } from './paths.mjs';
import { loadStep8JudgeEvidence, rejectionKey } from './step8-evidence.mjs';
import { MODELS } from './models.mjs';

export const TERMINAL_RESOLUTION_VERSION = 2;
export const TERMINAL_REJUDGE_ROUNDS = 2;

const HASH = /^[a-f0-9]{64}$/;
const DISPOSITIONS = new Set(['repaired', 'accepted-after-review']);
const RESOLVERS = new Set(['owner', 'session', 'final-adjudicator']);
const FA_SOURCE_STATUSES = new Set(['verified', 'familiar']);

function relativeResearchPath(path) {
  return typeof path === 'string'
    && /^research\/[A-Za-z0-9._/-]+$/.test(path)
    && !path.includes('..');
}

export function finalAdjudicatorQueueProblems(queue, { run, id, group } = {}) {
  const errors = [];
  if (queue?.version !== 1 || queue?.stage !== '8-rejudge')
    errors.push('queue must be version 1 for stage 8-rejudge');
  if (typeof queue?.run !== 'string' || !queue.run || (run && queue.run !== run))
    errors.push(`queue run must be ${run ?? 'a nonempty string'}`);
  if (typeof queue?.group !== 'string' || !queue.group || (group && queue.group !== group))
    errors.push(`queue group must be ${group ?? 'a nonempty string'}`);
  if (typeof queue?.dispatch_label !== 'string' || !/^[A-Za-z0-9._-]+$/.test(queue.dispatch_label ?? ''))
    errors.push('queue dispatch_label must be a plain dispatch label');
  if (!Array.isArray(queue?.items) || !queue.items.length) {
    errors.push('queue must contain at least one ordered item');
    return errors;
  }
  const seen = new Set();
  for (const [index, item] of queue.items.entries()) {
    if (typeof item?.id !== 'string' || !item.id) errors.push(`queue item ${index + 1} has no id`);
    else if (seen.has(item.id)) errors.push(`queue item ${item.id} appears more than once`);
    else seen.add(item.id);
    if (item?.position !== index + 1) errors.push(`queue item ${item?.id ?? index + 1} must have position ${index + 1}`);
    if (item?.owner !== queue.group) errors.push(`queue item ${item?.id ?? index + 1} is not owned by group ${queue.group}`);
  }
  if (id && !seen.has(id)) errors.push(`queue does not contain ${id}`);
  return errors;
}

/** Structural half of the serial-attention rule.  Current-hash checks stay at
 * the call site because the pure shape is useful to tests and receipt audits. */
export function finalAdjudicatorPredecessorProblems(queue, id, latest, queueSha256) {
  const position = queue?.items?.findIndex((item) => item.id === id) ?? -1;
  if (position < 0) return [`queue does not contain ${id}`];
  const errors = [];
  for (const prior of queue.items.slice(0, position)) {
    const priorRow = latest.get(prior.id);
    if (priorRow?.resolved_by !== 'final-adjudicator'
      || priorRow?.final_adjudicator?.queue_sha256 !== queueSha256
      || priorRow?.final_adjudicator?.queue_position !== prior.position) {
      errors.push(`queue item ${prior.id} at position ${prior.position} must be resolved before ${id}`);
    }
  }
  return errors;
}

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
      errors.push(`${where}: resolved_by must be owner, session, or final-adjudicator`);
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
    if (row?.resolved_by === 'final-adjudicator') {
      const fa = row?.final_adjudicator;
      if (typeof fa?.group !== 'string' || !fa.group
        || fa?.model !== MODELS.sol.id || fa?.effort !== 'max'
        || !relativeResearchPath(fa?.queue_path)
        || !HASH.test(fa?.queue_sha256 ?? '')
        || !Number.isInteger(fa?.queue_position) || fa.queue_position < 1
        || !Number.isInteger(fa?.queue_total) || fa.queue_total < fa.queue_position
        || typeof fa?.dispatch_label !== 'string' || !/^[A-Za-z0-9._-]+$/.test(fa.dispatch_label)
        || !FA_SOURCE_STATUSES.has(fa?.source_verification)
        || !Array.isArray(fa?.authoritative_sources)
        || fa.authoritative_sources.some((url) => typeof url !== 'string' || !/^https?:\/\//.test(url))) {
        errors.push(`${where}: final-adjudicator resolution requires group, Sol/max attestation, ordered queue evidence, source status, and authoritative_sources`);
      } else if (fa.source_verification === 'verified' && !fa.authoritative_sources.length) {
        errors.push(`${where}: source_verification=verified requires at least one authoritative source URL`);
      }
    } else if (row?.final_adjudicator != null) {
      errors.push(`${where}: only a final-adjudicator resolution may carry final_adjudicator metadata`);
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

function freezeClosureEvidence(root, run, text) {
  const hash = createHash('sha256').update(text).digest('hex');
  const dir = join(root, 'research', `${run}-step8-terminal-evidence`);
  const path = join(dir, `${hash}.json`);
  mkdirSync(dir, { recursive: true });
  if (existsSync(path)) {
    const frozen = readFileSync(path, 'utf8');
    if (createHash('sha256').update(frozen).digest('hex') !== hash || frozen !== text) {
      throw new Error(`${path}: content-addressed terminal evidence does not match ${hash}`);
    }
  } else {
    writeFileSync(path, text, { flag: 'wx' });
  }
  return {
    path: path.replace(`${root}/`, ''),
    sha256: hash,
  };
}

export function terminalEvidence(root, run, id, stateDir = '.autopilot') {
  const statePath = join(resolve(root, stateDir), 'state.json');
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
    const frozen = freezeClosureEvidence(root, run, text);
    return {
      exhaustedAt: itemCycles.at(-1).completed_at ?? itemCycles.at(-1).started_at,
      evidence: {
        cycle_ids: itemCycles.slice(-TERMINAL_REJUDGE_ROUNDS).map((cycle) => cycle.cycle_id),
        closure_path: frozen.path,
        closure_sha256: frozen.sha256,
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
  console.error('usage: node tools/step8-terminal-resolution.mjs record --run <run> --id <id> --resolved-by owner|session|final-adjudicator --disposition repaired|accepted-after-review (--basis <evidence> | --basis-file <file>) [--root <repo>] [--state-dir <dir>]');
  console.error('       final-adjudicator additionally requires --group <label> --queue <research/...json> --source-status verified|familiar');
  console.error('       node tools/step8-terminal-resolution.mjs check --run <run> [--root <repo>] [--allow-missing]');
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
    const parsed = parseTerminalResolutions(path, { allowMissing: argv.includes('--allow-missing') });
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
      if (row.resolved_by === 'final-adjudicator' && row.final_adjudicator) {
        const fa = row.final_adjudicator;
        try {
          const queueText = readFileSync(join(root, fa.queue_path), 'utf8');
          const queueHash = createHash('sha256').update(queueText).digest('hex');
          if (queueHash !== fa.queue_sha256) errors.push(`${row.id}: final-adjudicator queue changed after resolution`);
          const queue = JSON.parse(queueText);
          errors.push(...finalAdjudicatorQueueProblems(queue,
            { run, id: row.id, group: fa.group }).map((error) => `${row.id}: ${error}`));
          const position = queue.items?.findIndex((item) => item.id === row.id) ?? -1;
          if (position + 1 !== fa.queue_position || queue.items?.length !== fa.queue_total)
            errors.push(`${row.id}: final-adjudicator queue position/total does not match the frozen queue`);
          errors.push(...finalAdjudicatorPredecessorProblems(queue, row.id, parsed.latest, fa.queue_sha256)
            .map((error) => `${row.id}: ${error}`));
          for (const prior of (queue.items ?? []).slice(0, Math.max(0, position))) {
            const priorRow = parsed.latest.get(prior.id);
            if (priorRow && String(priorRow.at) > String(row.at))
              errors.push(`${row.id}: prior queue item ${prior.id} was resolved after this item`);
          }
          const resultPath = join(root, 'research', `${run}-dispatch`,
            `final-adjudicator-${fa.dispatch_label}.result.json`);
          const dispatch = JSON.parse(readFileSync(resultPath, 'utf8'));
          if (dispatch.ok !== true || dispatch.role !== 'final-adjudicator'
            || dispatch.model !== MODELS.sol.id
            || dispatch.provider_effort !== 'max' || dispatch.requested_effort !== 'max') {
            errors.push(`${row.id}: ${resultPath} does not attest a successful ${MODELS.sol.id} max final-adjudicator dispatch`);
          }
        } catch (cause) {
          errors.push(`${row.id}: cannot verify final-adjudicator queue/dispatch (${cause.message})`);
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
  const basisFile = value(argv, '--basis-file');
  let basis = value(argv, '--basis');
  if (basisFile) {
    try { basis = readFileSync(resolve(root, basisFile), 'utf8'); }
    catch (cause) { console.error(`cannot read --basis-file ${basisFile}: ${cause.message}`); process.exit(2); }
  }
  if (!id || !RESOLVERS.has(resolvedBy) || !DISPOSITIONS.has(disposition) || basis.trim().length < 80) usage();
  let finalAdjudicator = null;
  if (resolvedBy === 'final-adjudicator') {
    const group = value(argv, '--group');
    const queuePath = value(argv, '--queue');
    const sourceVerification = value(argv, '--source-status');
    if (!group || !relativeResearchPath(queuePath) || !FA_SOURCE_STATUSES.has(sourceVerification)) usage();
    let queueText;
    let queue;
    try {
      queueText = readFileSync(join(root, queuePath), 'utf8');
      queue = JSON.parse(queueText);
    } catch (cause) {
      console.error(`cannot read final-adjudicator queue ${queuePath}: ${cause.message}`);
      process.exit(2);
    }
    const queueErrors = finalAdjudicatorQueueProblems(queue, { run, id, group });
    if (queueErrors.length) {
      for (const error of queueErrors) console.error(`ERROR ${error}`);
      process.exit(2);
    }
    const position = queue.items.findIndex((item) => item.id === id);
    const queueSha256 = createHash('sha256').update(queueText).digest('hex');
    const existing = parseTerminalResolutions(path, { allowMissing: true });
    if (existing.errors.length) {
      for (const error of existing.errors) console.error(`ERROR ${error}`);
      process.exit(2);
    }
    const predecessorErrors = finalAdjudicatorPredecessorProblems(queue, id, existing.latest, queueSha256);
    for (const error of predecessorErrors) {
      console.error(`ERROR ${id}: ${error}`);
    }
    if (predecessorErrors.length) process.exit(1);
    for (const prior of queue.items.slice(0, position)) {
      const priorRow = existing.latest.get(prior.id);
      let current = false;
      try { current = terminalResolutionIsCurrent(priorRow, currentHashes(root, prior.id)); } catch { current = false; }
      if (!current) {
        console.error(`ERROR ${id}: queue item ${prior.id} at position ${prior.position} must remain current before this item`);
        process.exit(1);
      }
    }
    const authoritativeSources = [...new Set((basis.match(/https?:\/\/[^\s<>"']+/g) ?? [])
      .map((url) => url.replace(/[)\].,;:]+$/, '')))];
    if (sourceVerification === 'verified' && !authoritativeSources.length) {
      console.error('ERROR --source-status verified requires at least one authoritative http(s) URL in the basis evidence');
      process.exit(2);
    }
    finalAdjudicator = {
      group,
      model: MODELS.sol.id,
      effort: 'max',
      queue_path: queuePath,
      queue_sha256: queueSha256,
      queue_position: position + 1,
      queue_total: queue.items.length,
      dispatch_label: queue.dispatch_label,
      source_verification: sourceVerification,
      authoritative_sources: authoritativeSources,
    };
  } else if (value(argv, '--group') || value(argv, '--queue') || value(argv, '--source-status')) {
    console.error('ERROR FA queue/source flags require --resolved-by final-adjudicator');
    process.exit(2);
  }
  const exhausted = terminalEvidence(root, run, id, value(argv, '--state-dir') || '.autopilot');
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
    ...(finalAdjudicator ? { final_adjudicator: finalAdjudicator } : {}),
    at: new Date().toISOString(),
  };
  appendFileSync(path, `${JSON.stringify(row)}\n`);
  console.log(`step8-terminal-resolution: recorded ${id} at ${now.context_sha256}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();

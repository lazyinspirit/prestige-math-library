#!/usr/bin/env node
// Deterministic, item-local Step-7 handoff. The owning Alpha awaits this
// command and releases its group files to the final adjudicator until it exits.
import { existsSync, readFileSync, writeFileSync, mkdirSync, rmdirSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { tsxLoader } from '../../paths.mjs';
import { cycleCounts } from '../../step7-rejudge-cycle.mjs';
import { currentHashes, parseTerminalResolutions, terminalResolutionIsCurrent } from '../../step7-terminal-resolution.mjs';

export function itemVerdict(rows, id, hashes) {
  return rows.filter(row => row.id === id && row.context_sha256 === hashes.context_sha256
    && row.item_sha256 === hashes.item_sha256).at(-1);
}

export function scopedIntegrityErrors(report, id) {
  if (!Array.isArray(report?.errors)) throw new Error('missing integrity report');
  return report.errors.filter(error => !error.id || error.id === id);
}

function main() {
  const args = process.argv.slice(2);
  const option = flag => args[args.indexOf(flag) + 1];
  const run = args.includes('--run') ? option('--run') : '';
  const id = args.includes('--id') ? option('--id') : '';
  const group = args.includes('--group') ? option('--group') : '';
  if (![run, id, group].every(x => /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(x)))
    throw new Error('usage: complete-step7-item.mjs --run RUN --id ITEM --group GROUP [--state-dir DIR]');
  const root = process.cwd();
  const stateDir = args.includes('--state-dir') ? option('--state-dir') : `.autopilot/${run}`;
  const state = JSON.parse(readFileSync(resolve(stateDir, 'state.json'), 'utf8'));
  if (state.run !== run || !['7-adjudicate', '7-preflight', '7-rejudge'].includes(state.stage))
    throw new Error('item handoff requires this run in Step 7');
  const prefix = `research/${run}`;
  const json = path => JSON.parse(readFileSync(path, 'utf8'));
  const rows = path => existsSync(path) ? readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
  const scope = json(`${prefix}-step7-scope.json`);
  const published = rows(`${prefix}-step7-published-repairs.jsonl`).find(row => row.id === id && row.group === group);
  if (scope.by_item?.[id] !== group && !published) throw new Error(`${id}: not owned by ${group}`);
  if (!args.includes('--execute') && !args.includes('--check-only')) {
    // A sandboxed Alpha only submits and waits. The controller launches all
    // model subprocesses outside that sandbox, retaining dispatch ownership.
    const key = createHash('sha256').update(`${run}:${id}:${group}:${process.pid}:${Date.now()}`).digest('hex').slice(0,24);
    const requestPath = `${prefix}-step7-handoff-request-${key}.json`;
    writeFileSync(`${requestPath}.tmp`, JSON.stringify({run,id,group,key}));
    renameSync(`${requestPath}.tmp`, requestPath);
    const response = `${prefix}-step7-handoff-response-${key}.json`;
    console.log(`${id}: handed to the controller; awaiting item-local completion`);
    const until = Date.now() + 43200000;
    while (!existsSync(response)) {
      if (Date.now() >= until) throw new Error(`${id}: handoff timed out; inspect ${requestPath}, do not repeat payment`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
    }
    const result = json(response);
    if (!result.ok) throw new Error(result.error);
    console.log(`${id}: engine handoff completed`); return;
  }
  const lock = `${prefix}-step7-handoff-${group}.lock`;
  mkdirSync(lock); // No concurrent owner or FA handoff within a group.
  try {
    const execute = (argv, capture = false) => {
      const result = spawnSync(process.execPath, argv, {
        cwd: root, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit',
        maxBuffer: 32 * 1024 * 1024, timeout: 43200000,
      });
      if (result.error) throw result.error;
      if (!capture && result.status !== 0) throw new Error(`${argv[0]} exited ${result.status}`);
      return result;
    };
    let hashes = currentHashes(root, id);
    const terminalPath = `${prefix}-step7-terminal-resolutions.jsonl`;
    const terminal = parseTerminalResolutions(terminalPath, { allowMissing: true });
    if (terminal.errors.length) throw new Error(terminal.errors.join('\n'));
    if (terminalResolutionIsCurrent(terminal.latest.get(id), hashes)) {
      console.log(`${id}: terminal resolution already current`); return;
    }
    const receiptPath = `${prefix}-step7-rejudge-cycles.json`;
    const receipt = existsSync(receiptPath) ? json(receiptPath) : { cycles: [] };
    const paid = (cycleCounts(receipt).get(id) ?? 0) > 0;
    if (!paid) {
      const guard = execute(['tools/step7-guard.mjs', '--touches', `${prefix}-touches.json`,
        '--baseline', 'pre-step7', '--judge-ledger', `${prefix}-judge.jsonl`,
        '--adjudications', `${prefix}-judge-adjudications.jsonl`, '--scope', `${prefix}-step7-scope.json`,
        '--terminal-resolutions', terminalPath, '--published-repairs', `${prefix}-step7-published-repairs.jsonl`,
        '--owner-prerequisite-repairs', `${prefix}-step7-owner-prerequisite-repairs.jsonl`, '--json'], true);
      const report = JSON.parse(guard.stdout);
      const errors = scopedIntegrityErrors(report, id);
      if (errors.length) throw new Error(JSON.stringify(errors));
      if (!report.changed.includes(id) && !report.created.includes(id))
        throw new Error(`${id}: no licensed change or new lemma needs rejudgment`);
      execute(['--import', tsxLoader(), 'tools/precheck.mts', `items/${id}.md`]);
      // Owned contract only: concurrent groups need not have finished theirs.
      const manifests = Object.keys(scope.by_item ?? {}).includes(id)
        ? (owningContractFiles(prefix, id)) : [];
      const inheritedPublished = /^status:\s*published\s*$/m.test(readFileSync(`items/${id}.md`, 'utf8'))
        && !report.created.includes(id);
      if (!published && !inheritedPublished && !manifests.length)
        throw new Error(`${id}: owning proof contract not found`);
      for (const contract of manifests)
        execute(['tools/proof-contract.mjs', contract, '--strict', '--items', id]);
      if (args.includes('--check-only')) {
        console.log(`${id}: item-local preflight passed; no model call made`); return;
      }
      execute(['tools/step7-rejudge-cycle.mjs', '--run', run, '--ledger', `${prefix}-judge.jsonl`,
        '--adjudications', `${prefix}-judge-adjudications.jsonl`, '--cost', `${prefix}-judge-cost.jsonl`,
        '--items', id, '--kind', 'repair']);
    }
    hashes = currentHashes(root, id);
    if (args.includes('--check-only')) {
      console.log(`${id}: paid cycle already exists; no model call made`); return;
    }
    const verdict = itemVerdict(rows(`${prefix}-judge.jsonl`), id, hashes);
    if (!verdict || verdict.keep === null) throw new Error(`${id}: paid rejudge has no current result; no second call permitted`);
    if (verdict.keep === true) { console.log(`${id}: rejudge accepted`); return; }
    const cycles = json(receiptPath).cycles.filter(row => row.items.includes(id) && !String(row.kind).startsWith('initial-'));
    if (!cycles.some(row => row.completed_at && row.exit_code === 0))
      throw new Error(`${id}: paid rejudge is not complete`);
    const digest = createHash('sha256').update(id).digest('hex').slice(0, 16);
    const label = `step7-fa-${group}-item-${digest}`;
    const queuePath = `${prefix}-${label}.json`;
    const taskPath = `${prefix}-${label}.task.md`;
    const evidence = `${prefix}-${label}-evidence.md`;
    const queue = { version: 1, run, stage: '7-rejudge', group, round: 1,
      dispatch_label: label, state_dir: stateDir,
      items: [{ id, owner: group, scope: published ? 'published' : 'run', position: 1 }] };
    const queueText = `${JSON.stringify(queue, null, 2)}\n`;
    if (existsSync(queuePath) && readFileSync(queuePath, 'utf8') !== queueText)
      throw new Error('item final-adjudicator queue changed');
    writeFileSync(queuePath, queueText);
    // Per-item failure evidence avoids races with the whole-run closure file.
    writeFileSync(`${prefix}-step7-item-${id}-closure.json`, JSON.stringify({
      run, unadjudicated: [id], unadjudicated_rows: [verdict], needs_rejudge: [], open_fatal: [],
    }, null, 2));
    writeFileSync(taskPath, `# Immediate Step-7 final adjudication\n\n` +
      `Your exact queue is \`${queuePath}\`: one item, \`${id}\`, group ${group}.\n` +
      `The owning Alpha is waiting and must not edit group files until you finish.\n` +
      `Read the item, dependencies, pair context, contract, both judge results and initial adjudication.\n` +
      `Independently accept or repair the current item. Consult authoritative sources for unfamiliar mathematics.\n` +
      `Write exact evidence and focused checks to \`${evidence}\`. Do not judge this consumer again.\n` +
      `Record your result with:\n\n` +
      `\`node tools/step7-terminal-resolution.mjs record --run ${run} --id ${id} --resolved-by final-adjudicator --group ${group} --queue ${queuePath} --state-dir ${stateDir} --disposition accepted-after-review --source-status familiar --basis-file ${evidence}\`\n\n` +
      `Use disposition repaired if you edit it; use source-status verified when you consult sources and include their URLs.\n` +
      `Do not edit unrelated items, invent source reading or bypass the recorder. Report any unresolved blocker.\n`);
    const resultPath = `research/${run}-dispatch/final-adjudicator-${label}.result.json`;
    if (existsSync(resultPath)) throw new Error(`${id}: final dispatch already attempted; inspect its result instead of looping`);
    execute(['tools/dispatch.mjs', '--role', 'final-adjudicator', '--profile', 'gpt-6-astra-medium',
      '--brief', 'briefs/final-adjudicator.md', '--task', taskPath, '--label', label, '--run', run,
      '--timeout', '21600', '--attempt', '1']);
    const completed = parseTerminalResolutions(terminalPath, { allowMissing: false });
    if (completed.errors.length || !terminalResolutionIsCurrent(completed.latest.get(id), currentHashes(root, id)))
      throw new Error(`${id}: final adjudicator returned without current terminal closure`);
    console.log(`${id}: final adjudication complete`);
  } finally { rmdirSync(lock); }
}

import { readdirSync } from 'node:fs';
function owningContractFiles(prefix, id) {
  return readdirSync('research').filter(name => name.startsWith(prefix.slice('research/'.length) + '-batch-')
    && name.endsWith('.proof-contracts.json')).map(name => `research/${name}`)
    .filter(path => readFileSync(path, 'utf8').includes(`"${id}"`));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let failure = null;
  try { main(); } catch (error) { failure = error; console.error(error.stack); process.exitCode = 1; }
  const args = process.argv.slice(2);
  if (args.includes('--execute') && args.includes('--request-key')) {
    const run = args[args.indexOf('--run')+1], key = args[args.indexOf('--request-key')+1];
    if (/^[a-zA-Z0-9._-]+$/.test(run) && /^[a-f0-9]{24}$/.test(key)) {
      const path = `research/${run}-step7-handoff-response-${key}.json`;
      writeFileSync(`${path}.tmp`, JSON.stringify({ok:!failure,error:failure?.message ?? null,at:new Date().toISOString()}));
      renameSync(`${path}.tmp`,path);
    }
  }
}

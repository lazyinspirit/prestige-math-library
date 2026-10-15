// Root's pre-gate protocol only. The native engine owns every transition.
import { readFileSync, statSync, openSync, readSync, closeSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
const run = 'physics-td-qft-rpm-62-2026-10-14';
const stateDir = `.physics-autopilot/${run}`;
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const events = `${stateDir}/events.jsonl`;
let offset = statSync(events).size, pending = '';
function inspectEvents() {
  const size = statSync(events).size;
  if (size === offset) return;
  if (size < offset) throw Error('Native event history shrank');
  const fd = openSync(events, 'r'), bytes = Buffer.alloc(size - offset);
  try { readSync(fd, bytes, 0, bytes.length, offset); } finally { closeSync(fd); }
  offset = size;
  const lines = (pending + bytes.toString('utf8')).split('\n');
  pending = lines.pop();
  for (const line of lines.filter(Boolean)) {
    const row = JSON.parse(line);
    if ((['gate', 'gate-advisory', 'dispatch-failed'].includes(row.type) && row.ok === false)
      || row.type === 'blocked' && !row.message?.startsWith('Pre-gate owner hold:')) {
      throw Error(`Actual native failure: ${JSON.stringify({ at: row.at, type: row.type, id: row.id, stage: row.stage,
        message: String(row.message ?? row.why ?? '').slice(0, 500) })}`);
    }
    if (['stage', 'gates-ok', 'finished'].includes(row.type)) console.log(JSON.stringify({ at: row.at, type: row.type, message: row.message }));
  }
}
async function command(args, env = {}, onLine = () => {}) {
  const child = spawn(process.execPath, args, { env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
  let error = '';
  const lines = createInterface({ input: child.stdout });
  lines.on('line', onLine);
  child.stderr.on('data', bytes => { error = (error + bytes).slice(-3000); });
  const code = await new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
  inspectEvents();
  if (code !== 0) throw Error(`Root protocol command failed (${args[0]}, exit ${code}): ${error}`);
}
let previousStage = '';
while (true) {
  inspectEvents();
  const state = read(`${stateDir}/state.json`);
  if (state.run !== run) throw Error('Wrong native run');
  if (state.stage !== previousStage) {
    console.log(JSON.stringify({ native_stage: state.stage, finishedAt: state.finishedAt }));
    previousStage = state.stage;
  }
  if (state.finishedAt) { console.log(JSON.stringify({ native_finished: true, finishedAt: state.finishedAt })); break; }
  if (!state.stage.startsWith('6-')) throw Error(`Root review required for stage ${state.stage}`);
  if (state.paused) throw Error('Native run paused; no automatic resume');
  if (Object.values(state.dispatches).some(row => row.startedAt && !row.endedAt)) { await sleep(10000); continue; }
  const request = read(`${stateDir}/owner-gate-request.json`);
  if (request.consumedAt || request.snapshot.stages.length !== 1 || request.snapshot.stages[0] !== state.stage) { await sleep(10000); continue; }
  const receipt = read(`${stateDir}/owner-gate-receipt.json`);
  if (receipt.attempt === request.attempt && receipt.snapshotSha256 === request.snapshot.sha256) { await sleep(10000); continue; }
  if (request.snapshot.items.length !== 686 || request.snapshot.recertificationScope !== 'formatting-metadata-only')
    throw Error('Unexpected native gate frontier');
  let archive;
  console.log(JSON.stringify({ root_formatting_metadata_started: request.attempt, stage: state.stage, items: 686 }));
  await command([`research/${run}-owner-gate-format-recertification.mjs`], {
    NODE_OPTIONS: '--import /tmp/prestige-physics-renderer-runtime/node_modules/tsx/dist/loader.mjs',
    TSX_TSCONFIG_PATH: '/Users/ianx/Projects/prestige-intelligence/web/tsconfig.json',
  }, line => {
    let row; try { row = JSON.parse(line); } catch { return; }
    if (row.passed === true) { archive = row.report.replace(/\/report\.json$/, ''); console.log(line); }
    if (row.passed === false) console.log(line);
  });
  if (!archive) throw Error('No complete current formatting/metadata receipt');
  await command([`research/${run}-owner-publish-current-gate.mjs`, '--archive', archive, '--writers-drained'], {}, console.log);
  await command(['tools/tsx-run.mjs', 'tools/physics-autopilot/bin/autopilot.mts', 'retry', '--run', run, '--state-dir', stateDir], {}, console.log);
  console.log(JSON.stringify({ root_protocol_complete: request.attempt, stage: state.stage }));
  await sleep(10000);
}

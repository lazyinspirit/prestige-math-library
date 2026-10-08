import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { stages } from '/home/lazyinspirit/Projects/prestige-math-library/tools/autopilot/stages/mathlib.mts';
import { runGate } from '/home/lazyinspirit/Projects/prestige-math-library/tools/autopilot/src/gates.mts';
const repo = '/home/lazyinspirit/Projects/prestige-math-library';
const run = 'frontier-42-coxeter-32';
const stateDir = join(repo, '.autopilot', run);
const state = JSON.parse(readFileSync(join(stateDir, 'state.json'), 'utf8'));
if (!state.paused || !existsSync(join(stateDir, 'stopped')) || existsSync(join(stateDir, 'controller.lock'))) throw Error('paused/drained/stopped recovery window required');
const part = process.argv[2];
const ids = part === 'baseline' ? ['9-report-baseline-v2'] : ['9-readiness-v2', '9-evidence-v2'];
const outFile = part === 'baseline' ? '/tmp/frontier-42-coxeter-32-owner-step9-baseline-validation.json' : join(repo, 'research', run + '-codex-step9-report-guard-recovery/current-validation.json');
const config = existsSync(join(repo, 'autopilot.config.json')) ? JSON.parse(readFileSync(join(repo, 'autopilot.config.json'), 'utf8')) : {};
const ctx = { repo, run, dispatchDir: join(repo, 'research', run + '-dispatch'), coversMap: {}, config, stageRounds: state.stageRounds ?? {}, stageFailures: state.stageFailures ?? {} };
const record: any = { version: 1, run, kind: 'owner-executed-native-mechanical-recertification', native_history_rewritten: false, started_at: new Date().toISOString(), stages: [] };
function save() { writeFileSync(outFile, JSON.stringify(record, null, 2) + '\n'); }
async function execute(argv: string[]) {
  return await new Promise<any>((resolve, reject) => {
    const child = spawn(argv[0], argv.slice(1), { cwd: repo, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '';
    child.stdout.on('data', chunk => stdout += chunk); child.stderr.on('data', chunk => stderr += chunk);
    child.on('error', reject); child.on('close', code => resolve({ code, stdout, stderr }));
  });
}
for (const id of ids) {
  const stage: any = stages.find(s => s.id === id); if (!stage) throw Error('missing native stage ' + id);
  const plans = stage.plan(ctx, ['all']);
  const entry: any = { id, started_at: new Date().toISOString(), plans: [], gates: [] }; record.stages.push(entry);
  for (const plan of plans) {
    if (plan.role !== 'tool' || !Array.isArray(plan.argv)) throw Error('nonmechanical dispatch refused');
    const actual = await execute(plan.argv); entry.plans.push({ argv: plan.argv, ...actual });
    process.stdout.write(id + ' actual plan exit=' + actual.code + '\n'); save();
    if (actual.code !== 0) { record.ok = false; save(); process.exit(1); }
  }
  const gates = stage.gates(ctx);
  for (const gate of gates) {
    const result = await runGate(gate, { cwd: repo }); entry.gates.push({ argv: typeof gate.argv === 'function' ? gate.argv() : gate.argv, checked_at: new Date().toISOString(), ...result });
    process.stdout.write(id + ' gate ' + gate.id + ': ' + (result.ok ? 'PASS' : 'FAIL') + '\n'); save();
  }
  entry.ok = entry.gates.every((r: any) => r.ok); entry.finished_at = new Date().toISOString(); save();
  if (!entry.ok) { record.ok = false; save(); process.exit(1); }
}
record.ok = true; record.finished_at = new Date().toISOString(); save();
process.stdout.write('COMPLETE native descriptor plans and every gate PASS; part=' + part + '\n');

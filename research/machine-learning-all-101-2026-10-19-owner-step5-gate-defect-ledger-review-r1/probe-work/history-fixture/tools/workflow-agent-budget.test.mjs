import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { workflowAgentBudget } from './workflow-agent-budget.mjs';

const helper = new URL('./workflow-agent-budget.mjs', import.meta.url).href;
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate) {
  const deadline = Date.now() + 20000;
  while (!predicate()) { if (Date.now() > deadline) throw Error('Agent budget test timed out'); await pause(20); }
}
function fixture(config = { concurrency: 30, globalConcurrency: 30 }) {
  const root = mkdtempSync(join(tmpdir(), 'workflow-agent-budget-test-'));
  const repo = join(root, 'repo'); mkdirSync(repo);
  writeFileSync(join(repo, 'autopilot.config.json'), JSON.stringify(config));
  const slotRoot = join(root, 'slots');
  return { root, repo, slotRoot, cleanup: () => rmSync(root, { recursive: true, force: true }) };
}
function child(f, behavior = 'wait') {
  const source = `import {workflowAgentBudget} from ${JSON.stringify(helper)};
const budget=workflowAgentBudget(${JSON.stringify({ repo: f.repo, run: 'run', slotRoot: f.slotRoot })});
const release=await budget.acquire();console.log('acquired');
${behavior === 'throw' ? "throw Error('deliberate launch error');" : behavior === 'exit' ? 'process.exit(0);' : "process.stdin.once('data',()=>{release();process.exit(0);});process.stdin.resume();"}`;
  const processChild = spawn(process.execPath, ['--input-type=module', '-e', source], { stdio: ['pipe', 'pipe', 'pipe'] });
  const value = { process: processChild, acquired: false, exited: false, stderr: '' };
  processChild.stdout.on('data', bytes => { if (String(bytes).includes('acquired')) value.acquired = true; });
  processChild.stderr.on('data', bytes => { value.stderr += bytes; });
  processChild.once('exit', () => { value.exited = true; });
  return value;
}

test('14 dispatched readers and 27 sweep judges share 30 actual slots, returned dynamically', { timeout: 30000 }, async () => {
  const f = fixture(), children = [];
  const budget = workflowAgentBudget({ ...f, run: 'run' });
  try {
    const readers = Array.from({ length: 14 }, () => child(f)); children.push(...readers);
    await until(() => readers.every(value => value.acquired));
    assert.equal(budget.held(), 14);
    const judges = Array.from({ length: 27 }, () => child(f)); children.push(...judges);
    await until(() => judges.filter(value => value.acquired).length === 16);
    await pause(500);
    assert.equal(children.filter(value => value.acquired).length, 30);
    assert.equal(budget.held(), 30);
    for (const reader of readers) reader.process.stdin.end('release');
    await until(() => readers.every(value => value.exited) && judges.every(value => value.acquired));
    assert.equal(budget.held(), 27, 'all 27 judges can proceed after the readers finish');
    for (const judge of judges) judge.process.stdin.end('release');
    await until(() => judges.every(value => value.exited));
    assert.equal(budget.held(), 0);
  } finally { for (const value of children) if (!value.exited) value.process.kill('SIGTERM'); await until(() => children.every(value => value.exited)); f.cleanup(); }
});

test('canonical workspace aliases share a budget; different runs and workspaces do not', async () => {
  const f = fixture({ concurrency: 1 });
  const alias = join(f.root, 'alias'); symlinkSync(f.repo, alias);
  const other = join(f.root, 'other'); mkdirSync(other);
  try {
    const a = workflowAgentBudget({ ...f, run: 'one' });
    assert.equal(a, workflowAgentBudget({ ...f, repo: alias, run: 'one' }));
    const b = workflowAgentBudget({ ...f, run: 'two' });
    const c = workflowAgentBudget({ ...f, repo: other, run: 'one' });
    assert.notEqual(a.root, b.root); assert.notEqual(a.root, c.root);
    const releases = await Promise.all([a.acquire(), b.acquire(), c.acquire()]);
    assert.equal(a.held(), 1); assert.equal(b.held(), 1); assert.equal(c.held(), 1);
    for (const release of releases) release();
  } finally { f.cleanup(); }
});

for (const behavior of ['exit', 'throw', 'signal']) test(`actual-agent capacity returns on ${behavior}`, async () => {
  const f = fixture({ concurrency: 1 }), value = child(f, behavior === 'signal' ? 'wait' : behavior);
  try {
    const budget = workflowAgentBudget({ ...f, run: 'run' });
    await until(() => value.acquired);
    if (behavior === 'signal') value.process.kill('SIGTERM');
    await until(() => value.exited);
    assert.equal(budget.held(), 0, value.stderr);
    const release = await budget.acquire(); release();
  } finally { if (!value.exited) value.process.kill('SIGTERM'); await until(() => value.exited); f.cleanup(); }
});

test('configuration caps, physics configuration and standalone behavior are preserved', () => {
  const f = fixture({ concurrency: 7 });
  try {
    assert.equal(workflowAgentBudget({ ...f, run: 'lower' }).maxConcurrent, 7);
    writeFileSync(join(f.repo, 'physics-autopilot.config.json'), JSON.stringify({ concurrency: 30, globalConcurrency: 5 }));
    assert.equal(workflowAgentBudget({ ...f, run: 'physics' }).maxConcurrent, 5);
    writeFileSync(join(f.repo, 'physics-autopilot.config.json'), JSON.stringify({ concurrency: 80, globalConcurrency: 80 }));
    assert.equal(workflowAgentBudget({ ...f, run: 'ceiling' }).maxConcurrent, 30);
    assert.equal(workflowAgentBudget({ repo: '/nonexistent', run: '' }), null);
    assert.throws(() => workflowAgentBudget({ ...f, run: '../other' }), /Invalid.*run/);
    writeFileSync(join(f.repo, 'physics-autopilot.config.json'), JSON.stringify({ concurrency: 0 }));
    assert.throws(() => workflowAgentBudget({ ...f, run: 'bad' }), /positive integers/);
  } finally { f.cleanup(); }
});

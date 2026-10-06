import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { configuration, classifyProcess, observation, scanProcesses, recoveryDecision } from '../bin/watchdog.mjs';
function fixture(t) {
  const repo = mkdtempSync(join(tmpdir(), 'watchdog-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const run = 'frontier-41', stateDir = join(repo, '.autopilot', run);
  mkdirSync(stateDir, { recursive: true });
  writeFileSync(join(stateDir, 'state.json'), JSON.stringify({ run, finishedAt: null }));
  return { repo, run, stateDir };
}
const empty = () => ({ controller: [], preflight: [], writer: [] });
test('mandatory scope fails closed; custom state identity must match', t => {
  const c = fixture(t), args = ['--repo', c.repo, '--run', c.run, '--state-dir', c.stateDir];
  assert.equal(configuration(args).stateDir, c.stateDir);
  assert.throws(() => configuration(['--repo', c.repo]));
  assert.throws(() => configuration(args.filter(v => v !== '--run' && v !== c.run)));
  assert.throws(() => configuration([...args, '--run', c.run]));
  assert.throws(() => configuration(args.map(v => v === c.run ? 'frontier-40' : v)));
  assert.throws(() => configuration([...args, '--interval', '601']));
});
test('exact repo/run argv isolation includes startup doctor and runner wrapper', t => {
  const c = fixture(t), classify = argv => classifyProcess({ argv, cwd: c.repo }, c);
  const args = ['node', 'tools/autopilot/bin/autopilot.mts', 'start', '--repo', c.repo, '--run', c.run, '--state-dir', c.stateDir];
  assert.equal(classify(args), 'controller');
  assert.equal(classify(['node', 'tools/tsx-run.mjs', ...args.slice(1)]), 'controller');
  assert.equal(classify(args.map(v => v === 'start' ? 'doctor' : v)), 'preflight');
  assert.equal(classify(args.map(v => v === c.run ? 'frontier-410' : v)), null);
  assert.equal(classify(args.map(v => v === c.repo ? `${c.repo}-other` : v)), null);
  assert.equal(classifyProcess({ argv: args, cwd: `${c.repo}-other` }, c), null);
  assert.equal(classify(['sh', '-c', args.join(' ')]), null);
  assert.equal(classify(['node', '-e', args.join(' ')]), null);
});
test('native writers drain before restart; other frontiers do not hold this run', t => {
  const c = fixture(t);
  assert.equal(classifyProcess({ argv: ['node', 'tools/dispatch.mjs', '--run', c.run], cwd: c.repo }, c), 'writer');
  assert.equal(classifyProcess({ argv: ['node', 'tools/dispatch.mjs', '--run', 'frontier-40'], cwd: c.repo }, c), null);
  assert.equal(classifyProcess({ argv: ['codex', 'exec'], cwd: c.repo, sessionHome: join(c.stateDir, 'sessions', 'one') }, c), 'writer');
  assert.equal(classifyProcess({ argv: ['codex', 'exec'], cwd: c.repo, sessionHome: join(c.repo, '.autopilot', 'frontier-40', 'sessions') }, c), null);
  assert.equal(observation(c, () => ({ ...empty(), writer: [12] })).action, 'wait');
  assert.equal(observation(c, () => ({ ...empty(), preflight: [13] })).action, 'wait');
  assert.equal(observation(c, empty).action, 'absent');
});
test('stop and completion prevent restart without consuming native controls', t => {
  const c = fixture(t), control = join(c.stateDir, 'control.json');
  writeFileSync(control, JSON.stringify({ command: 'stop' }));
  assert.equal(observation(c, () => { throw new Error('must not scan'); }).action, 'exit');
  rmSync(control);
  writeFileSync(join(c.stateDir, 'stopped'), 'now');
  assert.equal(observation(c, empty).action, 'exit');
  rmSync(join(c.stateDir, 'stopped'));
  writeFileSync(join(c.stateDir, 'status.md'), `# ${c.run} — COMPLETE\n`);
  assert.equal(observation(c, empty).action, 'exit');
  rmSync(join(c.stateDir, 'status.md'));
  writeFileSync(join(c.stateDir, 'state.json'), JSON.stringify({ run: c.run, finishedAt: 'now' }));
  assert.equal(observation(c, empty).action, 'exit');
  writeFileSync(join(c.stateDir, 'state.json'), '{broken');
  assert.throws(() => observation(c, empty));
});
test('/proc scan parses NUL argv and descendants, excluding zombies', t => {
  const c = fixture(t), proc = join(c.repo, 'proc'); mkdirSync(proc);
  const add = (pid, parent, argv, zombie = false) => {
    const path = join(proc, String(pid)); mkdirSync(path);
    writeFileSync(join(path, 'status'), `Uid:\t${process.getuid()}\t${process.getuid()}\n`);
    writeFileSync(join(path, 'cmdline'), argv.join('\0') + '\0');
    writeFileSync(join(path, 'stat'), `${pid} (a name) ${zombie ? 'Z' : 'S'} ${parent} 0`);
    symlinkSync(c.repo, join(path, 'cwd'));
  };
  add(1, 0, ['node', 'tools/dispatch.mjs', '--run', c.run]);
  add(2, 1, ['worker-with-no-run']);
  add(3, 2, ['worker-grandchild']);
  add(4, 0, ['node', 'tools/dispatch.mjs', '--run', 'frontier-40']);
  add(5, 1, ['node', 'tools/dispatch.mjs', '--run', c.run], true);
  assert.deepEqual(scanProcesses(c, proc).writer.sort(), [1, 2, 3]);
  assert.throws(() => scanProcesses(c, '/no-such-proc'));
});

test('restart guard requires repeated absence, resets on writers, and tracks startup child', () => {
  const memory = { absent: false, restarts: 0 }, absent = { action: 'absent' };
  assert.equal(recoveryDecision(absent, memory, false, 2), 'confirm');
  assert.equal(recoveryDecision({ action: 'wait' }, memory, false, 2), 'wait');
  assert.equal(recoveryDecision(absent, memory, false, 2), 'confirm');
  assert.equal(recoveryDecision(absent, memory, true, 2), 'wait');
  assert.equal(recoveryDecision(absent, memory, false, 2), 'confirm');
  assert.equal(recoveryDecision(absent, memory, false, 2), 'start');
  memory.restarts = 2;
  assert.throws(() => recoveryDecision(absent, memory, false, 2));
  assert.equal(recoveryDecision({ action: 'exit' }, memory, false, 2), 'exit');
});

test('exact watchdog lifecycle cannot hold its own recovery; actual scoped writers remain recognized', t => {
  const c = fixture(t), watchdog = `${c.repo}/tools/autopilot/bin/watchdog.mjs`;
  const argv = ['node', watchdog, '--repo', c.repo, '--run', c.run, '--state-dir', c.stateDir];
  assert.equal(classifyProcess({ argv, cwd: c.repo }, c), null);
  assert.equal(classifyProcess({ argv: ['node', 'tools/dispatch.mjs', '--run', c.run, '--task', watchdog], cwd: c.repo }, c), 'writer');
  assert.equal(classifyProcess({ argv: ['node', 'tools/owner-helper.mjs', '--run', c.run], cwd: c.repo }, c), 'writer');
  const onlyWatchdog = () => { const kind = classifyProcess({ argv, cwd: c.repo }, c); return { ...empty(), writer: kind === 'writer' ? [100] : [] }; };
  assert.equal(observation(c, onlyWatchdog).action, 'absent');
  const memory = { absent: false, restarts: 0 };
  assert.equal(recoveryDecision(observation(c, onlyWatchdog), memory, false, 5), 'confirm');
  assert.equal(recoveryDecision(observation(c, onlyWatchdog), memory, false, 5), 'start');
});

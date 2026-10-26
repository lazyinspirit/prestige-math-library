import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tsxLoader } from '../../paths.mjs';

const helper = fileURLToPath(new URL('../../autopilot-status.mjs', import.meta.url));
const runner = fileURLToPath(new URL('../../tsx-run.mjs', import.meta.url));
const root = fileURLToPath(new URL('../../../', import.meta.url));
const loader = tsxLoader();

function launch(cli, args = [], env = process.env) {
  const child = spawn(process.execPath, [cli, ...args], { env, stdio: ['ignore', 'pipe', 'pipe'] });
  const result = new Promise((resolve, reject) => {
    let stdout = '', stderr = '';
    child.stdout.on('data', data => { stdout += data; });
    child.stderr.on('data', data => { stderr += data; });
    child.on('error', reject);
    child.on('close', (code, signal) => resolve({ code, signal, stdout, stderr }));
  });
  return { child, result };
}

function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), 'status-single-flight-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const cli = join(dir, 'cli.mjs'), stateDir = join(dir, 'state');
  mkdirSync(stateDir);
  const configPath = join(dir, 'config.json');
  writeFileSync(configPath, '{}');
  const options = { cli, argv: ['status', 'math'], repo: dir, stateDir,
    guardDir: join(dir, 'guard'), configPath, log: join(dir, 'computations.jsonl'), delay: 300 };
  writeFileSync(cli, `
    import { runStatus, isStatusComputation } from ${JSON.stringify(helper)};
    import { appendFileSync } from 'node:fs';
    const options = JSON.parse(process.argv[2]);
    if (!isStatusComputation()) process.exit(await runStatus(options));
    appendFileSync(options.log, JSON.stringify({ pid: process.pid, name: options.name }) + '\\n');
    await new Promise(resolve => setTimeout(resolve, options.delay ?? 200));
    if (options.warn) console.error('live status unavailable; showing old report');
    console.log('report ' + options.name);
  `);
  const startFixture = (extra = {}, env) => {
    const selected = { ...options, name: 'math', ...extra };
    const workerOptions = { ...selected };
    selected.argv = [JSON.stringify(workerOptions)];
    return launch(cli, [JSON.stringify(selected)], env);
  };
  const rows = () => {
    try { return readFileSync(options.log, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse); }
    catch { return []; }
  };
  return { ...options, start: startFixture, rows };
}

async function until(predicate) {
  const end = Date.now() + 8_000;
  while (!predicate()) {
    assert.ok(Date.now() < end, 'timed out waiting for fixture');
    await new Promise(resolve => setTimeout(resolve, 20));
  }
}

test('20 overlapping math/physics polls admit exactly one computation and do not queue', async t => {
  const f = fixture(t);
  const first = f.start({ delay: 2500 });
  await until(() => f.rows().length === 1);
  const pollers = Array.from({ length: 20 }, (_, index) => f.start({ name: index % 2 ? 'physics' : 'math', delay: 2500 }));
  const results = await Promise.all(pollers.map(p => p.result));
  assert.equal(f.rows().length, 1, 'overlapping checks started additional computations');
  for (const result of results) {
    assert.equal(result.code, 0, result.stderr);
    assert.match(result.stdout, /another status computation is running/);
    assert.doesNotMatch(result.stdout, /report math|report physics/);
  }
  assert.equal((await first.result).code, 0);
});

test('fresh results are shared; different runs and changed configuration never reuse them', async t => {
  const f = fixture(t);
  assert.match((await f.start().result).stdout, /report math/);
  const cached = await f.start().result;
  assert.match(cached.stdout, /Status cached at .*at most five seconds old/);
  assert.equal(f.rows().length, 1);
  assert.match((await f.start({ name: 'physics' }).result).stdout, /report physics/);
  assert.equal(f.rows().length, 2);
  writeFileSync(f.configPath, '{"run":"different"}');
  await f.start().result;
  assert.equal(f.rows().length, 3);
});

test('stale cache is labeled during contention, then recomputed after its TTL', async t => {
  const f = fixture(t);
  await f.start().result;
  const cachePath = join(f.stateDir, readdirSync(f.stateDir).find(name => name.startsWith('status-cache-')));
  const cache = JSON.parse(readFileSync(cachePath));
  cache.at = '2000-01-01T00:00:00.000Z';
  writeFileSync(cachePath, JSON.stringify(cache));
  const other = f.start({ name: 'physics', delay: 1000 });
  await until(() => f.rows().length === 2);
  const stale = await f.start().result;
  assert.match(stale.stdout, /cached at 2000-01-01.*another status computation is running/);
  await other.result;
  await f.start().result;
  assert.equal(f.rows().length, 3);
});

test('kernel lock is released after SIGKILL without manual lockfile recovery', async t => {
  const f = fixture(t);
  const first = f.start({ delay: 60000 });
  await until(() => f.rows().length === 1);
  process.kill(f.rows()[0].pid, 'SIGKILL');
  assert.notEqual((await first.result).code, 0);
  const next = await f.start().result;
  assert.equal(next.code, 0, next.stderr);
  assert.equal(f.rows().length, 2);
});

test('a missing guard fails closed, and failed reports are never cached as fresh', async t => {
  const f = fixture(t);
  const unavailable = await f.start({}, { ...process.env, PATH: '/no-such-path' }).result;
  assert.equal(unavailable.code, 2);
  assert.match(unavailable.stdout, /status guard unavailable/);
  assert.equal(f.rows().length, 0);
  await f.start({ warn: true }).result;
  await f.start({ warn: true }).result;
  assert.equal(f.rows().length, 2);
  assert.equal(readdirSync(f.stateDir).filter(name => name.startsWith('status-cache-')).length, 0);
});

test('20 real mixed-workflow CLI polls import only one stage graph', async t => {
  const f = fixture(t);
  mkdirSync(join(f.repo, 'research'));
  const stagePath = join(f.repo, 'stages.mts');
  writeFileSync(stagePath, `
    import { appendFileSync } from 'node:fs';
    appendFileSync(${JSON.stringify(f.log)}, JSON.stringify({ pid: process.pid }) + '\\n');
    await new Promise(resolve => setTimeout(resolve, 4000));
    export const stages = [{ id: 'fixture', label: 'fixture', units: () => ['all'], pattern: /^worker-/ }];
  `);
  for (const name of ['autopilot.config.json', 'physics-autopilot.config.json'])
    writeFileSync(join(f.repo, name), JSON.stringify({ stages: stagePath }));
  const roots = [];
  const start = (engine, direct = false) => {
    const cli = join(root, 'tools', engine, 'bin/autopilot.mts');
    const args = ['status', '--repo', f.repo, '--state-dir', join(f.repo, engine), '--run', 'mixed-status-fixture'];
    const selectedRunner = engine === 'autopilot' ? runner : join(root, 'tools/physics-support/tsx-run.mjs');
    const result = direct ? launch('--import', [loader, cli, ...args])
      : launch(selectedRunner, [cli, ...args]);
    roots.push(result.child.pid);
    return result;
  };
  let peakRssKiB = 0;
  const sample = () => {
    const processes = [];
    for (const pid of readdirSync('/proc').filter(name => /^\d+$/.test(name))) {
      try {
        const status = readFileSync(`/proc/${pid}/status`, 'utf8');
        processes.push({ pid: Number(pid), parent: Number(status.match(/^PPid:\s*(\d+)/m)?.[1]),
          rss: Number(status.match(/^VmRSS:\s*(\d+)/m)?.[1] ?? 0) });
      } catch { /* process exited */ }
    }
    const family = new Set(roots);
    for (let changed = true; changed;) {
      changed = false;
      for (const process of processes) if (family.has(process.parent) && !family.has(process.pid)) {
        family.add(process.pid); changed = true;
      }
    }
    peakRssKiB = Math.max(peakRssKiB,
      processes.filter(process => family.has(process.pid)).reduce((sum, process) => sum + process.rss, 0));
  };
  const timer = setInterval(sample, 100);
  t.after(() => clearInterval(timer));
  const first = start('autopilot');
  await until(() => f.rows().length === 1);
  const others = Array.from({ length: 19 }, (_, index) => start(index % 2 ? 'autopilot' : 'physics-autopilot', index < 2));
  const results = await Promise.all(others.map(p => p.result));
  assert.equal(f.rows().length, 1, 'a contender imported a second stage graph');
  for (const result of results) {
    assert.equal(result.code, 0, result.stderr);
    assert.match(result.stdout, /another status computation is running/);
  }
  const report = await first.result;
  assert.equal(report.code, 0, report.stderr);
  assert.match(report.stdout, /mixed-status-fixture/);
  assert.equal(f.rows().length, 1);
  clearInterval(timer);
  t.diagnostic(`20 real CLI polls: one stage graph; sampled peak combined process RSS ${Math.round(peakRssKiB / 1024)} MiB`);
});

for (const engine of ['autopilot', 'physics-autopilot']) {
  test(`${engine} real entrypoint computes and shares a fixture report`, async t => {
    const f = fixture(t);
    mkdirSync(join(f.repo, 'research'));
    writeFileSync(join(f.repo, 'stages.mts'), `export const stages = [{ id: 'fixture', label: 'fixture', units: () => ['all'], pattern: /^worker-/ }];`);
    writeFileSync(join(f.repo, engine === 'autopilot' ? 'autopilot.config.json' : 'physics-autopilot.config.json'),
      JSON.stringify({ stages: join(f.repo, 'stages.mts') }));
    const cli = join(root, 'tools', engine, 'bin/autopilot.mts');
    const args = [cli, 'status', '--repo', f.repo, '--state-dir', f.stateDir, '--run', 'status-fixture'];
    const selectedRunner = engine === 'autopilot' ? runner : join(root, 'tools/physics-support/tsx-run.mjs');
    const first = await launch(selectedRunner, args).result;
    assert.equal(first.code, 0, first.stderr);
    assert.match(first.stdout, /status-fixture/);
    assert.doesNotMatch(first.stderr, /live status unavailable/);
    const second = await launch('--import', [loader, ...args]).result;
    assert.equal(second.code, 0, second.stderr);
    assert.match(second.stdout, /Status cached at/);
    assert.match(second.stdout, /status-fixture/);
  });
}

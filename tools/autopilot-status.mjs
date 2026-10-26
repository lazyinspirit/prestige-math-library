// Shared admission control for math and physics status CLI computations.
// flock owns the slot for the worker's lifetime, including crashes/reboots.
// Contenders return immediately, before importing either engine's heavy graph.
import { spawn } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { mkdirSync, readFileSync, renameSync, statSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const WORKER = fileURLToPath(new URL('./autopilot-status-worker.mjs', import.meta.url));
const TTL_MS = 5_000;
const BUSY = 75;
let computing = false;
export const isStatusComputation = () => computing;

/** Let supported JS launchers reject overlapping polls before loading TS. */
export async function statusFromRunner(target, argv, loader) {
  if (argv[0] !== 'status') return null;
  const cli = resolve(target);
  const checkout = fileURLToPath(new URL('../', import.meta.url));
  const math = resolve(checkout, 'tools/autopilot/bin/autopilot.mts');
  const physics = resolve(checkout, 'tools/physics-autopilot/bin/autopilot.mts');
  if (cli !== math && cli !== physics) return null;
  const physical = cli === physics;
  const opt = (name, fallback) => {
    const index = argv.indexOf(`--${name}`);
    return index >= 0 && argv[index + 1] && !argv[index + 1].startsWith('--')
      ? argv[index + 1] : fallback;
  };
  const repo = resolve(opt('repo', physical ? join(checkout, 'physics') : process.cwd()));
  const stateDir = resolve(opt('state-dir', join(repo, physical ? '.physics-autopilot' : '.autopilot')));
  if (physical && repo === resolve(checkout))
    throw new Error('physics engine refuses the mathematics repository as --repo');
  if (physical && !stateDir.startsWith(repo + '/'))
    throw new Error('physics state-dir must be inside its workspace');
  return await runStatus({ cli, argv, repo, stateDir,
    guardDir: join(checkout, '.autopilot'),
    configPath: join(repo, physical ? 'physics-autopilot.config.json' : 'autopilot.config.json'),
    execArgv: ['--import', loader],
  });
}

function stamp(path) {
  try { const s = statSync(path); return [s.mtimeMs, s.size, s.ino]; }
  catch { return null; }
}

function cacheFor(options) {
  const identity = JSON.stringify([resolve(options.cli), options.argv, options.repo,
    options.stateDir, stamp(options.configPath), stamp(join(options.stateDir, 'config.json'))]);
  return { identity, path: join(options.stateDir,
    `status-cache-${createHash('sha256').update(identity).digest('hex').slice(0, 20)}.json`) };
}

function readCache(cache, freshOnly = false) {
  try {
    const saved = JSON.parse(readFileSync(cache.path, 'utf8'));
    const age = Date.now() - Date.parse(saved.at);
    if (saved.identity !== cache.identity || typeof saved.output !== 'string'
      || !Number.isFinite(age) || age < 0 || (freshOnly && age > TTL_MS)) return null;
    return saved;
  } catch { return null; }
}

function printCached(cache, reason) {
  const saved = readCache(cache);
  if (!saved) return false;
  console.log(`Status cached at ${saved.at} (${reason}; observation only).\n`);
  process.stdout.write(saved.output);
  return true;
}

function fallback(options, cache, reason) {
  if (printCached(cache, reason)) return;
  const report = join(options.stateDir, 'status.md');
  try {
    const output = readFileSync(report, 'utf8');
    console.log(`Last controller report, file timestamp ${statSync(report).mtime.toISOString()} (${reason}; not recomputed).\n`);
    process.stdout.write(output);
  } catch {
    console.log(`Status unavailable: ${reason}; no cached report. Retry shortly.`);
  }
}

export async function runStatus(options) {
  const cache = cacheFor(options);
  if (readCache(cache, true)) {
    printCached(cache, 'at most five seconds old');
    return 0;
  }
  try { mkdirSync(options.guardDir, { recursive: true }); }
  catch (error) {
    fallback(options, cache, `status guard unavailable: ${error.message}`);
    return 2;
  }
  // One slot across both workflows and all runs in this checkout. No waiter
  // queue, lockfile PID recovery, concurrency reduction, or unguarded fallback.
  return await new Promise((done) => {
    const child = spawn('flock', ['--exclusive', '--nonblock', '--conflict-exit-code', String(BUSY),
      join(options.guardDir, 'status-computation.lock'), process.execPath,
      ...(options.execArgv ?? process.execArgv), WORKER, JSON.stringify(options)],
    { stdio: ['ignore', 'pipe', 'pipe'] });
    child.stdout.pipe(process.stdout, { end: false });
    child.stderr.pipe(process.stderr, { end: false });
    child.once('error', (error) => {
      fallback(options, cache, `status guard unavailable: ${error.message}`);
      done(2);
    });
    child.once('close', (code, signal) => {
      if (code === BUSY) {
        fallback(options, cache, 'another status computation is running');
        done(0);
      } else {
        if (signal) console.error(`Status computation interrupted by ${signal}`);
        done(code ?? 2);
      }
    });
  });
}

export async function computeStatus(options) {
  const cache = cacheFor(options);
  // A previous holder may have published its result between the caller's cache
  // read and our acquiring the kernel lock.
  if (readCache(cache, true)) {
    printCached(cache, 'at most five seconds old');
    return;
  }
  computing = true;
  process.argv = [process.execPath, options.cli, ...options.argv];
  let output = '', warned = false, oversized = false;
  const stdout = process.stdout.write, stderr = process.stderr.write;
  process.stdout.write = function (chunk, ...args) {
    if (!oversized) {
      output += chunk.toString();
      if (output.length > 4 * 1024 * 1024) { oversized = true; output = ''; }
    }
    return stdout.call(this, chunk, ...args);
  };
  process.stderr.write = function (chunk, ...args) {
    warned = true;
    return stderr.call(this, chunk, ...args);
  };
  try {
    await import(pathToFileURL(options.cli).href);
  } finally {
    process.stdout.write = stdout;
    process.stderr.write = stderr;
    computing = false;
  }
  // Failed/fallback reports must not acquire a fresh successful timestamp.
  if (warned || oversized || !output || process.exitCode) return;
  const temporary = `${cache.path}.${randomUUID()}.tmp`;
  try {
    mkdirSync(options.stateDir, { recursive: true });
    writeFileSync(temporary, JSON.stringify({ identity: cache.identity,
      at: new Date().toISOString(), output }) + '\n');
    renameSync(temporary, cache.path);
  } catch (error) {
    console.error(`Status cache not saved: ${error.message}`);
  } finally {
    rmSync(temporary, { force: true });
  }
}

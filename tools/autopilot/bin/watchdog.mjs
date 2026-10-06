#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, readlinkSync, realpathSync, openSync, closeSync } from 'node:fs';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
const inside = (root, path) => { const rel = relative(root, path); return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel)); };
export function option(argv, name) {
  const values = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === `--${name}`) values.push(argv[++i]);
    else if (argv[i].startsWith(`--${name}=`)) values.push(argv[i].slice(name.length + 3));
  }
  return values.length === 1 && values[0] && !values[0].startsWith('--') ? values[0] : null;
}
export function configuration(argv, cwd = process.cwd()) {
  const repoArg = option(argv, 'repo'), run = option(argv, 'run'), stateArg = option(argv, 'state-dir');
  if (!repoArg || !run || !stateArg || !/^[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(run))
    throw new Error('required: --repo REPO --run RUN --state-dir STATE');
  const allowed = new Set(['--repo', '--run', '--state-dir', '--interval', '--max-restarts']);
  for (let i = 0; i < argv.length; i++) {
    if (!allowed.has(argv[i].split('=')[0])) throw new Error('unknown watchdog option');
    if (!argv[i].includes('=')) i++;
  }
  const repo = realpathSync(resolve(cwd, repoArg));
  const stateDir = realpathSync(resolve(repo, stateArg));
  const state = JSON.parse(readFileSync(join(stateDir, 'state.json'), 'utf8'));
  if (!inside(repo, stateDir) || stateDir === join(repo, '.autopilot') || state.run !== run)
    throw new Error('state directory must be inside repository and contain named run');
  const interval = Number(option(argv, 'interval') ?? 60), maxRestarts = Number(option(argv, 'max-restarts') ?? 5);
  if (!Number.isInteger(interval) || interval < 1 || interval > 600 || !Number.isInteger(maxRestarts) || maxRestarts < 1 || maxRestarts > 20)
    throw new Error('interval must be 1–600 seconds; max-restarts must be 1–20');
  return { repo, run, stateDir, interval, maxRestarts };
}
export function terminalReason({ stateDir, run }) {
  if (existsSync(join(stateDir, 'stopped'))) return 'stop marker';
  const state = JSON.parse(readFileSync(join(stateDir, 'state.json'), 'utf8'));
  if (state.run !== run) throw new Error('run identity changed');
  if (state.finishedAt) return 'completed state';
  try {
    const raw = readFileSync(join(stateDir, 'control.json'), 'utf8').trim();
    let command; try { command = JSON.parse(raw)?.command; } catch { command = raw.replace(/['"]/g, ''); }
    if (command === 'stop') return 'pending stop';
  } catch (e) { if (e.code !== 'ENOENT') throw e; }
  try { if (readFileSync(join(stateDir, 'status.md'), 'utf8').split('\n')[0] === `# ${run} — COMPLETE`) return 'completed status'; }
  catch (e) { if (e.code !== 'ENOENT') throw e; }
  return null;
}
/** Match exact argv tokens; never log full argv or environment. */
export function classifyProcess({ argv, cwd, zombie, sessionHome }, { repo, run, stateDir }) {
  if (!argv?.length || !cwd || zombie || !/^(node|nodejs|codex|claude)$/.test(argv[0].split('/').pop())) return null;
  const index = argv.findIndex(arg => !arg.startsWith('-') && resolve(cwd, arg) === join(repo, 'tools/autopilot/bin/autopilot.mts'));
  if (index >= 0) {
    const args = argv.slice(index + 1), processRepo = option(args, 'repo');
    if (!['start', 'doctor'].includes(args[0]) || option(args, 'run') !== run || (processRepo ? resolve(cwd, processRepo) : cwd) !== repo) return null;
    const state = option(args, 'state-dir');
    // A same-run start using another state dir is a conflicting writer.
    return args[0] === 'start' && state && resolve(cwd, state) === stateDir ? 'controller' : 'preflight';
  }
  if (cwd !== repo) return null;
  if (option(argv, 'run') === run && argv.some(arg => !arg.startsWith('-') && inside(join(repo, 'tools'), resolve(cwd, arg)))) return 'writer';
  if (sessionHome && inside(join(repo, '.autopilot', run), resolve(cwd, sessionHome))) return 'writer';
  if (argv.some(arg => !arg.startsWith('-') && (inside(join(repo, '.autopilot', run), resolve(cwd, arg)) ||
    (resolve(cwd, arg).startsWith(join(repo, 'research', `${run}-`)))))) return 'writer';
  return null;
}
export function scanProcesses(config, procRoot = '/proc') {
  const found = { controller: [], preflight: [], writer: [] }, parents = new Map();
  for (const pid of readdirSync(procRoot).filter(name => /^\d+$/.test(name))) {
    try {
      const root = join(procRoot, pid);
      // Processes of other users cannot be this user's native workers. Avoid
      // reading their protected cwd/environment; same-user errors fail closed.
      const uid = Number(/^Uid:\s+(\d+)/m.exec(readFileSync(join(root, 'status'), 'utf8'))?.[1]);
      if (uid !== process.getuid()) continue;
      const argv = readFileSync(join(root, 'cmdline'), 'utf8').split('\0').filter(Boolean);
      if (!argv.length) continue;
      const stat = readFileSync(join(root, 'stat'), 'utf8');
      const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
      const zombie = fields[0] === 'Z';
      if (!zombie) parents.set(Number(pid), Number(fields[1]));
      if (!/^(node|nodejs|codex|claude)$/.test(argv[0].split('/').pop())) continue;
      const cwd = readlinkSync(join(root, 'cwd'));
      let sessionHome;
      if (['codex', 'claude'].includes(argv[0]?.split('/').pop()))
        sessionHome = readFileSync(join(root, 'environ'), 'utf8').split('\0').find(v => v.startsWith('CODEX_HOME='))?.slice(11);
      const kind = classifyProcess({ argv, cwd, zombie, sessionHome }, config);
      if (kind) found[kind].push(Number(pid));
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ESRCH') throw new Error('process scan unavailable; refusing restart');
    }
  }
  // Descendants may carry no run flag; bind them only through a live scoped parent.
  const writers = new Set(found.writer);
  let changed = true;
  while (changed) {
    changed = false;
    for (const [pid, parent] of parents) if (writers.has(parent) && !writers.has(pid)) { writers.add(pid); changed = true; }
  }
  found.writer = [...writers];
  return found;
}
export function observation(config, scan = scanProcesses) {
  const terminal = terminalReason(config);
  if (terminal) return { action: 'exit', reason: terminal };
  const live = scan(config);
  if (live.controller.length || live.preflight.length) return { action: 'wait', reason: 'controller or startup preflight live' };
  if (live.writer.length) return { action: 'wait', reason: 'native writers draining' };
  return { action: 'absent', reason: 'no scoped controller or writers' };
}
// Pure restart guard, also exercised without launching any real run.
export function recoveryDecision(result, memory, childLive, maxRestarts) {
  if (result.action === 'exit') return 'exit';
  if (result.action !== 'absent' || childLive) { memory.absent = false; return 'wait'; }
  if (!memory.absent) { memory.absent = true; return 'confirm'; }
  if (memory.restarts >= maxRestarts) throw new Error('restart bound reached');
  return 'start';
}
export async function supervise(config) {
  const log = message => console.log(`[${new Date().toISOString()}] ${config.run}: ${message}`);
  const sleep = () => new Promise(done => setTimeout(done, config.interval * 1000));
  const memory = { absent: false, restarts: 0 };
  let child = null, childFailed = false;
  log(`watchdog checking every ${config.interval}s; bounded to ${config.maxRestarts} starts`);
  while (true) {
    const result = observation(config);
    if (result.action === 'exit') { log(result.reason); return; }
    if (childFailed) throw new Error('started engine exited unsuccessfully; inspect autopilot.log');
    const decision = recoveryDecision(result, memory, Boolean(child), config.maxRestarts);
    if (decision === 'confirm') log('absence observed; confirming after one polling interval');
    if (decision === 'start') {
      if (observation(config).action !== 'absent') { memory.absent = false; continue; }
      const fd = openSync(join(config.stateDir, 'autopilot.log'), 'a', 0o600);
      try {
        child = spawn(process.execPath, [join(config.repo, 'tools/tsx-run.mjs'), join(config.repo, 'tools/autopilot/bin/autopilot.mts'),
          'start', '--repo', config.repo, '--run', config.run, '--state-dir', config.stateDir],
          { cwd: config.repo, detached: true, stdio: ['ignore', fd, fd] });
        child.once('error', () => { childFailed = true; child = null; });
        child.once('exit', code => { childFailed = code !== 0; child = null; });
        child.unref();
      } finally { closeSync(fd); }
      memory.restarts++; memory.absent = false; log(`started native controller (${memory.restarts}/${config.maxRestarts})`);
    }
    await sleep();
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { await supervise(configuration(process.argv.slice(2))); }
  catch { console.error('watchdog refused/ended: invalid scope, unavailable process evidence, failed engine start, or restart bound. Inspect configuration and autopilot.log.'); process.exitCode = 1; }
}

import { closeSync, existsSync, mkdirSync, openSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Owner = { pid: number; run: string; started_at: string };

function processIsController(owner: Owner): boolean {
  // A second acquisition in this process is unambiguously a duplicate even
  // when the process is a test harness rather than the CLI executable.
  if (owner.pid === process.pid) return true;
  try {
    process.kill(owner.pid, 0);
  } catch (error: any) {
    return error?.code === 'EPERM';
  }

  // On Linux, reject a recycled pid instead of holding the run forever. On a
  // platform without /proc, kill(0) is the best available liveness answer.
  const commandLine = `/proc/${owner.pid}/cmdline`;
  if (!existsSync(commandLine)) return true;
  try {
    const command = readFileSync(commandLine, 'utf8').replaceAll('\0', ' ');
    return command.includes('autopilot.mts') && command.includes('start');
  } catch {
    return true;
  }
}

/** Acquire the one controller slot for a state directory.
 *
 * Dispatch children are intentionally not locked: a controller may exit and a
 * successor adopts them. The lock covers only the deterministic transition
 * loop, which must have exactly one writer.
 */
export function acquireControllerLock(stateDir: string, run: string): () => void {
  mkdirSync(stateDir, { recursive: true });
  const lock = join(stateDir, 'controller.lock');
  const owner: Owner = { pid: process.pid, run, started_at: new Date().toISOString() };

  const create = () => {
    const fd = openSync(lock, 'wx', 0o600);
    try { writeFileSync(fd, JSON.stringify(owner) + '\n'); }
    finally { closeSync(fd); }
  };

  try {
    create();
  } catch (error: any) {
    if (error?.code !== 'EEXIST') throw error;
    let prior: Owner | null = null;
    try { prior = JSON.parse(readFileSync(lock, 'utf8')); } catch { /* incomplete/stale lock */ }

    if (prior?.pid && processIsController(prior)) {
      throw new Error(`controller already running for ${prior.run} (pid ${prior.pid}, since ${prior.started_at})`);
    }

    // Do not steal a file another process has just exclusively created but has
    // not yet populated. A crash leaves it stale after this short grace period.
    if (!prior) {
      const ageMs = Date.now() - statSync(lock).mtimeMs;
      if (ageMs < 5_000) throw new Error('another controller is acquiring the controller lock');
    }
    rmSync(lock, { force: true });
    try { create(); }
    catch (retry: any) {
      if (retry?.code === 'EEXIST') throw new Error('another controller acquired the controller lock');
      throw retry;
    }
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    try {
      const current = JSON.parse(readFileSync(lock, 'utf8'));
      if (current?.pid === process.pid) rmSync(lock, { force: true });
    } catch { /* already released or replaced */ }
  };
}

// The universal adapter: run a command, wait, report the exit code.
//
// PORTABILITY IS THE POINT. Claude Code, Codex, pi, opencode and everything
// after them differ in exactly one place — how you start an agent and how you
// know it finished. Everything else the engine does (stage order, coverage,
// gates, retries, reporting) is identical everywhere, so the platform-specific
// surface is deliberately this one function.
//
// ARGV, NOT A COMMAND STRING. This file previously took a shell-ish template
// and split it with a hand-rolled tokenizer that understood quotes but not
// backslash escapes. That design produced the worst defect of the build:
//
//   1. A stage tried to write a JSON receipt with `echo '{"ok":true}'`. The
//      shell ate the double quotes and the file landed as {ok:true} — valid to
//      look at, unparseable to read. Coverage could not count the stage, so the
//      engine re-dispatched a completed twelve-hour judge sweep 33 times.
//   2. The fix wrote it with `node -e "..."` inside `sh -c "..."`. The
//      tokenizer ended the quoted section at the first backslash-escaped quote,
//      mangling it differently.
//   3. The test written to prove the fix ALSO failed on its own quoting.
//
// Three failures of the same kind is a design defect, not three mistakes.
// Commands are now argv arrays with placeholder substitution per element, so
// there is no parsing step, no quoting, and no shell unless a caller explicitly
// asks for one. An argument containing spaces, quotes or a dollar sign is just
// an element of an array.
//
// Placeholders: {role} {label} {run} {brief} {task} {covers} {timeout}
// An element that expands to empty is dropped, along with the flag before it —
// `--task` with no argument silently swallows the next flag as its value, which
// turns a missing file into a corrupted command line rather than an error.

import { spawn } from 'node:child_process';
import type { Adapter, InvokeResult } from '../types.mts';

/** Substitute placeholders element-wise. No parsing: each element is already
 *  one argument, exactly as `spawn` will receive it. */
export function render(argvTemplate: string[], vars: Record<string, unknown>): string[] {
  if (!Array.isArray(argvTemplate)) {
    throw new TypeError(
      'exec adapter needs an argv ARRAY, not a string. A command string has to be '
      + 'parsed, and every attempt to parse one here has produced a quoting defect. '
      + 'Write ["node", "tools/dispatch.mjs", "--role", "{role}"].');
  }
  const out: any[] = [];
  for (let i = 0; i < argvTemplate.length; i += 1) {
    const raw = String(argvTemplate[i]);
    const hasPlaceholder = /\{(\w+)\}/.test(raw);
    const value = raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] === undefined || vars[k] === null ? '' : String(vars[k])));

    if (hasPlaceholder && value === '') {
      // Drop the empty value AND its flag, if the previous element was one.
      if (out.length && /^-/.test(out[out.length - 1])) out.pop();
      continue;
    }
    out.push(value);
  }
  return out;
}

export function makeExecAdapter({ argv, cwd, env = {}, logger = () => {} }: { argv: string[]; cwd?: string; env?: Record<string,string>; logger?: (m: string) => void }): Adapter {
  if (!Array.isArray(argv)) {
    throw new TypeError('makeExecAdapter needs `argv` as an array of arguments');
  }
  return {
    name: 'exec',
    describe: (vars) => render(argv, vars).join(' '),
    /** Resolves when the process exits. Never throws for a nonzero exit — a
     *  failed lane is data the retry policy consumes, not an exception that
     *  unwinds the whole run. */
    invoke(vars, { signal } = {}) {
      const parts = render(argv, vars);
      const [cmd, ...args] = parts;
      logger(`exec: ${parts.join(' ')}`);
      return new Promise((resolve) => {
        let settled = false;
        const finish = (r) => { if (!settled) { settled = true; resolve(r); } };
        let child;
        try {
          // shell:false is the default and is load-bearing: with a shell, an
          // argument containing a metacharacter would be reinterpreted.
          child = spawn(cmd, args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
        } catch (err: any) {
          finish({ ok: false, code: null, error: String(err?.message ?? err), stdout: '', stderr: '' });
          return;
        }
        let stdout = '';
        let stderr = '';
        child.stdout?.on('data', (d: any) => { stdout += d; });
        child.stderr?.on('data', (d: any) => { stderr += d; });
        const onAbort = () => { try { child.kill('SIGTERM'); } catch { /* already gone */ } };
        signal?.addEventListener('abort', onAbort, { once: true });
        child.on('error', (err: any) => {
          signal?.removeEventListener('abort', onAbort);
          finish({ ok: false, code: null, error: String(err?.message ?? err), stdout, stderr });
        });
        child.on('close', (code: any) => {
          signal?.removeEventListener('abort', onAbort);
          finish({ ok: code === 0, code, stdout, stderr, error: null });
        });
      });
    },
  };
}

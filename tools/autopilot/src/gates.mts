// Running a pipeline's gates, and refusing to believe one that checked nothing.
//
// Exit code 0 answers "did the gate find a problem". It does not answer "did
// the gate look at anything", and those come apart constantly in practice:
// a checker whose input glob matched no files, a validator whose scope list
// was empty, a smoke-test runner whose registry defined none of the checks its
// input referenced. Each reports success. Each is a hole with a green tick over
// it.
//
// So a gate may declare a `liveness` probe: a regex that pulls the number of
// things examined out of the gate's own summary line, and a floor. Zero
// examined over a non-empty scope is a failure, and a summary line that does
// not match at all is UNKNOWN — never a pass. Refusing to interpret is the
// safe direction; a gate whose output format changed should stop the run, not
// wave it through.

import { spawn } from 'node:child_process';
import type { Gate, GateResult } from './types.mts';
import { existsSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';

export async function runGate(gate: Gate, { cwd, env = {}, signal, logger = () => {} }: any = {}): Promise<GateResult> {
  const argv = typeof gate.argv === 'function' ? gate.argv() : gate.argv;
  // A gate with no command checked nothing. Reporting that as a pass is the
  // same shape as the empty gate list that let frontier-14 finish.
  if (!argv?.length) return { id: gate.id, ok: false, why: 'gate has no command — nothing was checked' };

  if (gate.needs) {
    // `needs` is a list of PATHS. The previous version filtered on `p.exists`,
    // a property a string never has, so `!undefined` was always true, every
    // entry counted as missing, and any gate declaring `needs` was silently
    // skipped with ok:true — a gate that never ran, reporting success. Latent
    // here only because no stage uses `needs` yet.
    const paths = (typeof gate.needs === 'function' ? gate.needs() : gate.needs)
      .flat().filter(Boolean).map(String);
    const absent = paths.filter((f: any) => !existsSync(isAbsolute(f) ? f : join(cwd ?? '.', f)));
    if (absent.length) {
      // MISSING INPUTS ARE A FAILURE BY DEFAULT.
      //
      // This used to return ok:true — so a gate pointed at a receipt that was
      // never generated reported success, which is precisely how frontier-14's
      // whole-level audit receipt went missing without anything noticing. The
      // gate that would have caught it would itself have been skipped.
      //
      // `required: false` opts a genuinely conditional gate out, and says so on
      // the result so a reader can see it was not run.
      if (gate.required === false) {
        return { id: gate.id, ok: true, skipped: true, why: `not required; inputs absent: ${absent.join(', ')}` };
      }
      return { id: gate.id, ok: false, why: `inputs absent: ${absent.join(', ')} — a gate that cannot read its input has not passed` };
    }
  }

  logger(`gate ${gate.id}: ${argv.join(' ')}`);
  const [cmd, ...args] = argv;
  const res = await new Promise<{ code: number | null; stdout: string; stderr: string }>((resolve) => {
    let child;
    try { child = spawn(cmd, args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] }); }
    catch (err: any) { resolve({ code: null, stdout: '', stderr: String(err?.message ?? err) }); return; }
    let stdout = ''; let stderr = '';
    child.stdout?.on('data', (d: any) => { stdout += d; });
    child.stderr?.on('data', (d: any) => { stderr += d; });
    const onAbort = () => { try { child.kill('SIGTERM'); } catch { /* gone */ } };
    signal?.addEventListener('abort', onAbort, { once: true });
    child.on('error', (err: any) => { signal?.removeEventListener('abort', onAbort); resolve({ code: null, stdout, stderr: String(err?.message ?? err) }); });
    child.on('close', (code: any) => { signal?.removeEventListener('abort', onAbort); resolve({ code, stdout, stderr }); });
  });

  const out = `${res.stdout}${res.stderr}`;
  // The complete output is repair input, not display text. Step 6 derives the
  // per-item repair scope from every canonical `ERROR ... [<id>]` line. Keeping
  // only a tail silently turns one level-wide failure into serial waves: the
  // first id survives through `why`, a handful survive in the tail, and every
  // omitted id appears as a supposedly new failure after the next battery.
  // Reporter/status formatting already shortens the human-facing summary.
  const base = { id: gate.id, code: res.code, output: out };

  if (res.code !== 0) {
    return { ...base, ok: false, why: firstProblem(out) ?? `exit ${res.code}` };
  }

  if (gate.liveness) {
    const { pattern, min = 1, unit = 'checks' } = gate.liveness;
    const m = new RegExp(pattern).exec(out);
    if (!m) {
      return { ...base, ok: false, why: `liveness unreadable — summary line did not match /${pattern}/; treating as unknown, not as a pass` };
    }
    const n = Number(m[1]);
    if (!Number.isFinite(n) || n < min) {
      return { ...base, ok: false, why: `vacuous — reported success over ${n} ${unit} (need >= ${min}); fix the scope, not the gate` };
    }
    return { ...base, ok: true, checked: n, why: `${n} ${unit}` };
  }

  return { ...base, ok: true, why: 'exit 0' };
}

/** The most useful line of a failing gate's output, for a one-line report.
 *  Full output stays on the in-memory result for repair routing; events.jsonl
 *  keeps the reporter's bounded diagnostic copy. */
function firstProblem(out: string): string | null {
  for (const line of out.split('\n')) {
    if (/^\s*(ERROR|FAIL|error:|✗)/i.test(line)) return line.trim().slice(0, 240);
  }
  const last = out.trim().split('\n').filter(Boolean).pop();
  return last ? last.trim().slice(0, 240) : null;
}

/** Failures that are about the network rather than the work.
 *
 *  A citation sweep over thirty URLs will eventually hit one of these; on the
 *  first live run it was an HTTP/2 framing error on a host that had returned
 *  200 twice that hour. Halting a fourteen-hour build on a transport blip is
 *  not rigour, it is fragility, and the retry costs one repeat of a check that
 *  is cheap by construction. A failure that survives the retry is real. */
const TRANSIENT = [
  /HTTP2 framing layer/i, /curl: \((6|7|16|18|28|35|52|56)\)/,
  /ECONNRESET/, /ETIMEDOUT/, /EAI_AGAIN/, /socket hang up/i,
  /timed? ?out/i, /temporarily unavailable/i,
];

export async function runGates(gates: Gate[], ctx: any): Promise<{ ok: boolean; results: GateResult[] }> {
  const out: any[] = [];
  for (const g of gates) {
    let r = await runGate(g, ctx);
    if (!r.ok && TRANSIENT.some((p: any) => p.test(`${r.why} ${r.output ?? ''}`))) {
      ctx.logger?.(`gate ${g.id}: transient failure, retrying once — ${r.why}`);
      await new Promise((res) => setTimeout(res, ctx.retryDelayMs ?? 5000));
      const again = await runGate(g, ctx);
      r = again.ok ? { ...again, why: `${again.why} (passed on retry after a transient failure)` } : again;
    }
    out.push(r);
    if (!r.ok) break;             // stop at the first failure; the rest is noise
  }
  return { ok: out.every((r: any) => r.ok), results: out };
}

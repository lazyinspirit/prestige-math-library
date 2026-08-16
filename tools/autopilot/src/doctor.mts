// doctor — check the things that fail silently, hours in, with nobody watching.
//
// Every check here corresponds to something that actually went wrong, or that I
// checked by hand at 22:00 because getting it wrong would have wasted the night:
//
//   * a stage command naming a flag its tool does not define. Four of the first
//     six invocations written from memory were wrong, and the judge sweep's
//     would have failed twelve hours into an unattended run.
//   * a brief or task file that does not exist, discovered when the stage that
//     needs it dispatches, at 02:00.
//   * a judge lane that cannot authenticate — the key resolves through the app
//     repo's .env, not the environment, so an engine started from a bare shell
//     may or may not find it depending on machinery it does not control.
//   * a scope ledger that was never written, leaving manifest-integrity with
//     nothing to compare against and a whole pair free to vanish.
//
// The point is that all of these are answerable in seconds BEFORE the run, and
// each costs hours if discovered during one.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

import { validateStages } from './spec.mts';

const flagsOf = (s: string): string[] => [...new Set(s.match(/--[a-z-]+/g) ?? [])];

export async function doctor({ repo, run, stagesPath, config = {} as any }: { repo: string; run: string; stagesPath: string; config?: any }) {
  const problems: any[] = [];
  const notes: any[] = [];
  const ok: any[] = [];

  const mod = await import(stagesPath);
  const ctx = { run, repo, dispatchDir: join(repo, 'research', `${run}-dispatch`), config };
  const units = ['1', '2', '3', '4', '5', '6', '7', '8'];

  // 0. the spec must be able to fail. A stage with no gate reports success
  //    unconditionally, and the terminal one doing that is how frontier-14
  //    finished with open fatal defects and a red receipt gate.
  const specProblems = validateStages(mod.stages, ctx as any);
  for (const p of specProblems) problems.push(`stage spec — ${p.stage}: ${p.message}`);
  if (!specProblems.length) ok.push(`stage spec: ${mod.stages.length} stage(s), every one able to fail`);

  // 1. every flag a stage passes must exist in the tool receiving it
  let checkedFlags = 0;
  for (const st of mod.stages) {
    const cmds: any[] = [];
    for (const g of (st.gates?.(ctx) ?? [])) {
      const argv = typeof g.argv === 'function' ? g.argv() : g.argv;
      if (argv?.[1]?.startsWith('tools/')) cmds.push([`${st.id}/${g.id}`, argv[1], argv.join(' ')]);
    }
    let plans = [];
    try { plans = st.plan?.(ctx, units) ?? []; } catch (err: any) { problems.push(`${st.id}: plan() threw — ${err?.message ?? err}`); }
    for (const p of plans) {
      if (!p.argv) continue;
      const tool2 = (p.argv ?? []).find((a: any) => typeof a === 'string' && a.startsWith('tools/'));
      if (tool2) cmds.push([`${st.id}/${p.label}`, tool2, (p.argv ?? []).join(' ')]);
    }
    for (const [where, tool, line] of cmds) {
      if (!existsSync(join(repo, tool))) { problems.push(`${where}: no such tool ${tool}`); continue; }
      const src = readFileSync(join(repo, tool), 'utf8');
      for (const f of flagsOf(line)) {
        checkedFlags += 1;
        if (!src.includes(f)) problems.push(`${where}: ${tool} defines no ${f}`);
      }
    }
  }
  ok.push(`${checkedFlags} command flag(s) checked against their tools`);

  // 2. every brief and task a stage will ask for, for every plausible unit count
  let missing = 0;
  for (const st of mod.stages) {
    let plans = [];
    try { plans = st.plan?.(ctx, units) ?? []; } catch { /* reported above */ }
    for (const p of plans) {
      for (const v of [p.brief, p.task]) {
        if (!v) continue;
        const cands = Array.isArray(v) ? v : [v];
        if (!cands.some((c: any) => existsSync(join(repo, c)))) {
          problems.push(`${st.id}/${p.label}: no brief/task exists — tried ${cands.join(' | ')}`);
          missing += 1;
        }
      }
    }
  }
  if (!missing) ok.push('every stage resolves a brief and task file');

  // 3. the scope ledger, without which scope loss is invisible
  const ledger = join(repo, 'research', `${run}-scope-ledger.json`);
  if (existsSync(ledger)) {
    const n = JSON.parse(readFileSync(ledger, 'utf8')).pages?.length ?? 0;
    ok.push(`scope ledger present, ${n} page(s) owed`);
  } else {
    problems.push(`no scope ledger at ${ledger} — a page could leave the run unnoticed. Run \`autopilot plan\`, or write one with tools/manifest-integrity.mjs --write-ledger`);
  }

  // 4. the dispatch command itself
  const dispatchArgv = config.argv ?? [];
  const tool = dispatchArgv.find((a: any) => typeof a === 'string' && a.endsWith('.mjs'));
  if (tool && !existsSync(join(repo, tool))) problems.push(`the dispatch argv names ${tool}, which does not exist`);
  else if (tool) ok.push(`dispatch argv resolves (${tool})`);

  // 5. judge lanes — checked only if a stage mentions them
  const usesJudge = mod.stages.some((s: any) => {
    try { return (s.plan?.(ctx, units) ?? []).some((p: any) => (p.argv ?? []).join(' ').includes('judge')); }
    catch { return false; }
  });
  if (usesJudge) {
    const r = spawnSync('node', ['--input-type=module', '-e',
      `import { deepseekEnvFile } from '${join(repo, 'tools/paths.mjs')}';
       import { readFileSync, existsSync } from 'node:fs';
       const p = deepseekEnvFile();
       if (!p || !existsSync(p)) { console.log('NOKEY'); process.exit(0); }
       console.log(readFileSync(p,'utf8').split(/\\r?\\n/).some(l => l.startsWith('DEEPSEEK_API_KEY=')) ? 'OK' : 'NOKEY');`],
      { cwd: repo, encoding: 'utf8', env: { PATH: process.env.PATH, HOME: process.env.HOME } });
    if (/OK/.test(r.stdout ?? '')) ok.push('DeepSeek lane resolves its key from a bare environment');
    else problems.push('DeepSeek lane cannot find DEEPSEEK_API_KEY — the judge stage will fail when it runs');

    const codex = spawnSync('sh', ['-c', 'command -v codex >/dev/null && test -f "$HOME/.codex/auth.json" && echo OK'], { encoding: 'utf8' });
    if (/OK/.test(codex.stdout ?? '')) ok.push('Codex lane is on PATH and authenticated');
    else notes.push('Codex CLI not found or not authenticated — the second judge lane may fail');
  }

  return { problems, notes, ok };
}

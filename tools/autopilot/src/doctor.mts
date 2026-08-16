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

  // 1. every flag a stage passes must exist in a tool receiving it.
  //
  // Detection is uniform for gates and plans, and a command may name SEVERAL
  // tools/ paths (a runner shim plus its real target — `tsx-run.mjs
  // precheck.mts`): a flag passes if ANY of them defines it. The old rule read
  // only argv[1] for gates, so a shimmed gate's flags were checked against the
  // 35-line shim; and `src.includes(f)` was a substring test, so `--fail`
  // passed on a tool that defines only `--fail-on-dead`.
  let checkedFlags = 0;
  let toolCommands = 0;
  for (const st of mod.stages) {
    const cmds: any[] = [];
    const collect = (where: string, argv: any[]) => {
      const tools = (argv ?? []).filter((a: any) => typeof a === 'string' && a.startsWith('tools/'));
      if (tools.length) cmds.push([where, tools, (argv ?? []).join(' ')]);
    };
    for (const g of (st.gates?.(ctx) ?? [])) {
      collect(`${st.id}/${g.id}`, typeof g.argv === 'function' ? g.argv() : g.argv);
    }
    let plans = [];
    try { plans = st.plan?.(ctx, units) ?? []; } catch (err: any) { problems.push(`${st.id}: plan() threw — ${err?.message ?? err}`); }
    for (const p of plans) if (p.argv) collect(`${st.id}/${p.label}`, p.argv);
    for (const [where, tools, line] of cmds) {
      toolCommands += 1;
      const sources: string[] = [];
      for (const tool of tools) {
        if (!existsSync(join(repo, tool))) { problems.push(`${where}: no such tool ${tool}`); continue; }
        sources.push(readFileSync(join(repo, tool), 'utf8'));
      }
      if (!sources.length) continue;
      for (const f of flagsOf(line)) {
        checkedFlags += 1;
        const defined = sources.some((src) => new RegExp(`${f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z0-9-])`).test(src));
        if (!defined) problems.push(`${where}: ${tools.join('/')} defines no ${f}`);
      }
    }
  }
  // An ok-line that says 0 reads as green. Zero flags over a table that HAS
  // tool commands means the detection broke, not that the table is clean.
  if (toolCommands && !checkedFlags) problems.push('flag check examined 0 flags over a table with tool commands — the detection is broken');
  else ok.push(`${checkedFlags} command flag(s) checked against their tools`);

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

  // 4. the dispatch command itself.
  //
  // Every branch here has to say something. The old shape was
  // `if (tool && missing) problem; else if (tool) ok;` — so an absent or empty
  // `config.argv`, and an argv naming no tool at all, both fell through
  // emitting NEITHER, and the check vanished from the report without a trace.
  // A doctor that goes quiet is indistinguishable from a doctor that passed,
  // and this particular silence hides the one setting that starts every agent:
  // with no dispatch argv the engine cannot launch a single Beta, and the run
  // discovers it at the first dispatch rather than at preflight.
  const dispatchArgv: any[] = Array.isArray(config?.argv) ? config.argv : [];
  if (!Array.isArray(config?.argv)) {
    problems.push('no dispatch argv: config.argv is '
      + (config?.argv === undefined ? 'absent' : `${typeof config.argv}, not an array`)
      + ' — nothing can start an agent. Set "argv" in autopilot.config.json to the '
      + 'dispatch command as an ARRAY (see bin/autopilot.mts loadConfig for the default)');
  } else if (!dispatchArgv.length) {
    problems.push('no dispatch argv: config.argv is an empty array — nothing can start an agent');
  } else {
    const tool = dispatchArgv.find((a: any) => typeof a === 'string' && /\.(mjs|mts|js)$/.test(a));
    if (!tool) {
      problems.push(`the dispatch argv names no dispatcher script: ${dispatchArgv.join(' ')}`);
    } else if (!existsSync(join(repo, tool))) {
      problems.push(`the dispatch argv names ${tool}, which does not exist`);
    } else {
      ok.push(`dispatch argv resolves (${tool})`);
    }
  }

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

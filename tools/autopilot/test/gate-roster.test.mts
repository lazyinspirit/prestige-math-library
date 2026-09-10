// The gates of record must actually be in the stage table.
//
// WHY. tools/gates.mjs — the documented "gates of record", referenced 19 times
// across docs and briefs — listed prosecheck and depsource as hard gates at
// steps 3/5/8/9 and 2/3/5/9. The engine's stage table, the only gate list
// that runs, carried neither: prosecheck (the prose defect class, which
// LEVELS.md calls "where 100% of this library's found defects live") and
// depsource (dependency-to-page resolution) were run by nobody. Two divergent
// gate tables is exactly how a gate stops running without anyone noticing —
// gates.mjs's own header says so.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('the step-7 window is guarded end to end', async () => {
  // Mathematical currency and non-judge integrity intentionally have separate
  // stages. The guard remains live around every mathematical edit/rejudge,
  // while contracts run before paid calls and once more after the loop.
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['7-adjudicate', '7-rejudge']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const argvRows = st.gates(ctx)
      .map((g: any) => (typeof g.argv === 'function' ? g.argv() : g.argv));
    const tools = argvRows
      .map((argv: string[]) => argv.find((a) => a.startsWith('tools/')));
    assert.ok(tools.includes('tools/step7-guard.mjs'), `${id} does not run the fatal-only guard`);
    const guardArgv = argvRows.find((argv: string[]) => argv.includes('tools/step7-guard.mjs'));
    assert.ok(guardArgv?.includes('--owner-prerequisite-repairs'),
      `${id} drops exact owner-authorized prerequisite repair receipts`);
    assert.ok(!tools.includes('tools/proof-contract.mjs'),
      `${id} lets contract bookkeeping consume the bounded judge loop`);
  }
  for (const id of ['7-preflight']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const tools = st.gates(ctx)
      .map((g: any) => (typeof g.argv === 'function' ? g.argv() : g.argv))
      .map((argv: string[]) => argv.find((a) => a.startsWith('tools/')));
    for (const tool of ['tools/step7-guard.mjs', 'tools/proof-contract.mjs',
      'tools/boundary-audit.mjs', 'tools/citation-fidelity.mjs']) {
      assert.ok(tools.includes(tool), `${id} does not run ${tool}`);
    }
  }
});

test('the scope-loss gate never switches off once content exists', async () => {
  // manifest-integrity was written because a fully scaffolded A/B pair
  // vanished between steps 3 and 4 with every gate green — and then it ran
  // only through step 3, switched off for the entire half of the run in which
  // briefs/alpha.md grants add/delete authority ("You may add or delete
  // in-flight items as needed"). Step 8 built two items on frontier-14.
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['5a-adjudicate', '5b-cross', '7-preflight', '8-scope', '9-readiness-v2']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const tools = st.gates(ctx)
      .map((g: any) => (typeof g.argv === 'function' ? g.argv() : g.argv))
      .map((argv: string[]) => argv.find((a) => a.startsWith('tools/')));
    assert.ok(tools.includes('tools/manifest-integrity.mjs'),
      `${id} does not run manifest-integrity — scope loss is invisible to every other gate`);
  }
});

test('prosecheck and depsource run at every repo-wide gate point', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['3b-author', '5b-cross', '8-scope', '9-readiness-v2']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const tools = st.gates(ctx)
      .map((g: any) => (typeof g.argv === 'function' ? g.argv() : g.argv))
      .map((argv: string[]) => argv.find((a) => a.startsWith('tools/')));
    for (const tool of ['tools/prosecheck.mjs', 'tools/depsource.mjs']) {
      assert.ok(tools.includes(tool), `${id} does not run ${tool}`);
    }
  }
});

test('only Step 5b opens the routed published-repair audit window', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  const argvFor = (id: string) => {
    const st = mod.stages.find((s: any) => s.id === id);
    return st.gates(ctx)
      .map((g: any) => ({ id: g.id, argv: typeof g.argv === 'function' ? g.argv() : g.argv }));
  };

  const step5 = argvFor('5b-cross');
  const routingIndex = step5.findIndex((g: any) => g.id === 'step5-routing-final');
  const depcheckIndex = step5.findIndex((g: any) => g.id === 'depcheck');
  assert.ok(routingIndex >= 0 && routingIndex < depcheckIndex,
    'Step 5b must validate the exact repair handoff before opening the audit window');
  assert.ok(step5[depcheckIndex].argv.includes('--pending-audit-ok'),
    'Step 5b depcheck does not permit its routed repairs to await independent certification');

  for (const id of ['3b-author', '8-scope', '9-readiness-v2']) {
    const depcheck = argvFor(id).find((g: any) => g.id === 'depcheck');
    assert.ok(depcheck && !depcheck.argv.includes('--pending-audit-ok'),
      `${id} incorrectly weakens the published-audit invariant`);
  }
});

// content-policy has two modes, and only one of them reads items.
//
// WHY. `--manifest-only` guards every per-item check behind
// `if (!manifestOnly)`: applied-iota notation, provenance enum validity,
// reader-visible source URLs for literature-derived/ai-altered components,
// generated-claim containment, and the external_dependency record. The engine
// only ever invoked the tool with `--manifest-only`, so all of those were
// documented as enforced and executed never. Scope comes from the batch
// manifests passed on argv, so item mode cannot retro-flag the legacy corpus.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const argvOf = (g: any): string[] => (typeof g.argv === 'function' ? g.argv() : g.argv);

test('the post-authoring stages run content-policy in item mode', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['5-author', '6c-cross']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const full = st.gates(ctx).filter((g: any) =>
      argvOf(g).includes('tools/content-policy.mjs') && !argvOf(g).includes('--manifest-only'));
    assert.ok(full.length >= 1,
      `${id} never runs content-policy in item mode — the applied-iota, provenance-validity `
      + `and source-URL checks live only there`);
    for (const g of full) {
      assert.ok(g.liveness,
        `${id}/${g.id}: item mode over an empty manifest selection prints "0 scoped item(s)" `
        + `and exits 0 — it needs a liveness floor`);
    }
  }
});

test('the scaffold stages keep manifest mode — item files do not exist yet', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['1-scaffold', '3-fix']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const wrong = st.gates(ctx).filter((g: any) =>
      argvOf(g).includes('tools/content-policy.mjs') && !argvOf(g).includes('--manifest-only'));
    assert.equal(wrong.length, 0,
      `${id} runs content-policy in item mode before authoring: every scaffolded id would `
      + `fail scope-item-missing`);
  }
});

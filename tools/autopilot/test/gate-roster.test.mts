// The gates of record must actually be in the stage table.
//
// WHY. tools/gates.mjs — the documented "gates of record", referenced 19 times
// across docs and briefs — listed prosecheck and depsource as hard gates at
// steps 5/6/9/10 and 2/5/6/10. The engine's stage table, the only gate list
// that runs, carried neither: prosecheck (the prose defect class, which
// LEVELS.md calls "where 100% of this library's found defects live") and
// depsource (dependency-to-page resolution) were run by nobody. Two divergent
// gate tables is exactly how a gate stops running without anyone noticing —
// gates.mjs's own header says so.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('prosecheck and depsource run at every repo-wide gate point', async () => {
  const mod = await import('../stages/mathlib.mts');
  const ctx = { run: 'frontier-14', repo: REPO };
  for (const id of ['5-author', '6c-cross', '9-scope', '10-report']) {
    const st = mod.stages.find((s: any) => s.id === id);
    const tools = st.gates(ctx)
      .map((g: any) => (typeof g.argv === 'function' ? g.argv() : g.argv))
      .map((argv: string[]) => argv.find((a) => a.startsWith('tools/')));
    for (const tool of ['tools/prosecheck.mjs', 'tools/depsource.mjs']) {
      assert.ok(tools.includes(tool), `${id} does not run ${tool}`);
    }
  }
});

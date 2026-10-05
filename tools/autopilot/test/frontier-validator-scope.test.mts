import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { stages } from '../stages/mathlib.mts';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-stage-scope-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['research', 'items', 'library/test']) mkdirSync(join(repo, dir), { recursive: true });
  const pages = [
    { id: 'selected', category: 'test', kind: 'A', companion: 'selected-examples', items: [{ id: 'thm-selected' }] },
    { id: 'selected-examples', category: 'test', kind: 'B', items: [{ id: 'ex-selected' }] },
  ];
  writeFileSync(join(repo, 'research/run-test-batch-1.pages.json'), JSON.stringify(pages));
  writeFileSync(join(repo, 'research/plan-spec.json'), JSON.stringify({ pages }));
  for (const page of pages) {
    writeFileSync(join(repo, `library/test/${page.id}.md`), `---\npage: ${page.id}\n---\n`);
    for (const item of page.items) writeFileSync(join(repo, `items/${item.id}.md`), `---\nid: ${item.id}\n---\n`);
  }
  return { repo, run: 'run-test' };
}
const argv = (gate: any) => typeof gate.argv === 'function' ? gate.argv() : gate.argv;

test('actual stage validators receive only current manifest subjects', t => {
  const ctx = fixture(t);
  for (const id of ['3b-author', '5b-cross', '8-scope', '9-readiness-v2']) {
    const stage: any = stages.find(s => s.id === id);
    const gates = stage.gates(ctx);
    for (const tool of ['precheck', 'rendercheck', 'prosecheck', 'depcheck', 'fwdcheck', 'extcheck', 'depsource', 'pathcheck']) {
      const args = argv(gates.find((g: any) => g.id === tool));
      assert.ok(!args.includes('-e'), `${id}/${tool}: ${args}`);
      if (tool === 'depsource') assert.equal(args[args.indexOf('--run') + 1], ctx.run);
      if (['precheck', 'rendercheck', 'prosecheck'].includes(tool)) {
        assert.ok(args.includes('items/thm-selected.md'));
        assert.ok(args.includes('items/ex-selected.md'));
        assert.equal(args.includes('library/test/selected.md'), tool !== 'precheck');
      } else {
        const flag = tool === 'pathcheck' ? '--pages-file' : '--items-file';
        assert.ok(args.includes(flag), `${id}/${tool}`);
        assert.deepEqual(JSON.parse(readFileSync(args[args.indexOf(flag) + 1], 'utf8')),
          tool === 'pathcheck' ? ['selected', 'selected-examples'] : ['ex-selected', 'thm-selected']);
      }
    }
  }
});

test('standalone external and Step 9 page gates also carry manifest selectors', t => {
  const ctx = fixture(t);
  for (const id of ['1-scaffold', '3a-scope', '9-pathway-sync-v2', '9-pathway-author-v2']) {
    const stage: any = stages.find(s => s.id === id);
    assert.ok(stage, id);
    for (const gate of stage.gates(ctx).filter((g: any) => ['extcheck', 'pathcheck', 'prosecheck'].includes(g.id))) {
      const args = argv(gate);
      assert.ok(!args.includes('-e'), `${id}/${gate.id}: ${args}`);
      assert.ok(args.includes(gate.id === 'extcheck' ? '--items-file' : gate.id === 'pathcheck' ? '--pages-file' : 'items/thm-selected.md'));
    }
  }
});

test('future descriptors can be inspected before manifests exist; execution fails closed', t => {
  const ctx = fixture(t);
  rmSync(join(ctx.repo, 'research/run-test-batch-1.pages.json'));
  const stage: any = stages.find(s => s.id === '9-readiness-v2');
  const gate = stage.gates(ctx).find((g: any) => g.id === 'depcheck');
  assert.match(argv(gate)[2], /No current run manifests/);
  const descriptor = stage.gates({ ...ctx, doctor: true }).find((g: any) => g.id === 'depcheck');
  assert.ok(argv(descriptor).includes('<current-run-manifest-selection>'));
});

// Every plan invocation, including later closure, uses the current run.
test('all actual stage plan gates carry the run selector', t => {
  const ctx = fixture(t);
  let count = 0;
  for (const stage of stages.filter(s => ['1-drift', '1-drift-apply', '1-scaffold', '4-splice', '5b-cross', '8-scope', '9-readiness-v2'].includes(s.id))) {
    for (const gate of stage.gates?.(ctx) ?? []) {
      if (gate.id !== 'validate-plan') continue;
      count++;
      const args = argv(gate);
      assert.equal(args[args.indexOf('--run') + 1], ctx.run, stage.id);
    }
  }
  assert.ok(count >= 5);
});

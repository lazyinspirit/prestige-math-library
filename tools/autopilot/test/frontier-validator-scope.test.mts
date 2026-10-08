import test from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { stages } from '../stages/mathlib.mts';

function fixture(t: any) {
  const repo = mkdtempSync(join(tmpdir(), 'frontier-stage-scope-'));
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  for (const dir of ['research', 'items', 'library/test', 'tools']) mkdirSync(join(repo, dir), { recursive: true });
  copyFileSync(new URL('../../frontier-item-gate.mjs', import.meta.url), join(repo, 'tools/frontier-item-gate.mjs'));
  // Capture the real wrapper's downstream invocation without running unrelated
  // content checks. Corpus/prerequisite resolution is covered by the selector
  // integration suites; this suite checks the actual stage-to-wrapper protocol.
  writeFileSync(join(repo, 'tools/tsx-run.mjs'),
    'console.log(JSON.stringify({script: process.argv[2], args: process.argv.slice(3)}));\n');
  for (const tool of ['rendercheck', 'prosecheck', 'depcheck', 'fwdcheck', 'extcheck', 'depsource', 'pathcheck'])
    writeFileSync(join(repo, `tools/${tool}.mjs`),
      `console.log(JSON.stringify({script: 'tools/${tool}.mjs', args: process.argv.slice(2)}));\n`);
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
  // Existing outside corpus content and another run's manifests are context,
  // never extra validation subjects for this run.
  writeFileSync(join(repo, 'items/thm-unrelated.md'), '---\nid: thm-unrelated\n---\n');
  writeFileSync(join(repo, 'library/test/unrelated.md'), '---\npage: unrelated\n---\n');
  writeFileSync(join(repo, 'research/other-run-batch-1.pages.json'), JSON.stringify([
    { id: 'unrelated', category: 'test', items: [{ id: 'thm-unrelated' }] },
  ]));
  return { repo, run: 'run-test' };
}
const argv = (gate: any) => typeof gate.argv === 'function' ? gate.argv() : gate.argv;
const execute = (ctx: any, gate: any) => spawnSync(process.execPath, argv(gate).slice(1),
  { cwd: ctx.repo, encoding: 'utf8', timeout: 10_000 });

function validatorArgs(ctx: any, gate: any) {
  const args = argv(gate), tool = gate.id;
  assert.deepEqual(args.slice(0, 7), ['node', 'tools/frontier-item-gate.mjs', '--run', ctx.run, '--tool', tool, '--']);
  assert.ok(!args.includes('--items-file') && !args.includes('--pages-file'));
  const result = execute(ctx, gate);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const capture = JSON.parse(result.stdout.trim().split('\n').at(-1)!);
  assert.equal(capture.script, `tools/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`);
  for (const flag of args.slice(7)) assert.ok(capture.args.includes(flag), `lost forwarded flag ${flag}`);
  return capture.args as string[];
}

function assertSelection(ctx: any, tool: string, args: string[]) {
  if (['precheck', 'rendercheck', 'prosecheck'].includes(tool)) {
    const expected = ['items/ex-selected.md', 'items/thm-selected.md',
      ...(tool === 'precheck' ? [] : ['library/test/selected.md', 'library/test/selected-examples.md'])];
    assert.deepEqual(args.filter(arg => !arg.startsWith('--')), expected);
  } else {
    const flag = tool === 'pathcheck' ? '--pages-file' : '--items-file';
    assert.equal(args.filter(arg => arg === flag).length, 1);
    assert.deepEqual(JSON.parse(readFileSync(join(ctx.repo, args[args.indexOf(flag) + 1]), 'utf8')),
      tool === 'pathcheck' ? ['selected', 'selected-examples'] : ['ex-selected', 'thm-selected']);
    if (tool === 'depsource') assert.equal(args[args.indexOf('--run') + 1], ctx.run);
  }
}

test('actual stage validators receive only current manifest subjects', t => {
  const ctx = fixture(t);
  for (const id of ['3b-author', '5b-cross', '8-scope', '9-readiness-v2']) {
    const stage: any = stages.find(s => s.id === id);
    const gates = stage.gates(ctx);
    for (const tool of ['precheck', 'rendercheck', 'prosecheck', 'depcheck', 'fwdcheck', 'extcheck', 'depsource', 'pathcheck']) {
      const args = validatorArgs(ctx, gates.find((g: any) => g.id === tool));
      assertSelection(ctx, tool, args);
    }
  }
});

test('standalone external and Step 9 page gates also carry manifest selectors', t => {
  const ctx = fixture(t);
  let checked = 0;
  for (const id of ['1-scaffold', '3a-scope', '9-pathway-sync-v2', '9-pathway-author-v2']) {
    const stage: any = stages.find(s => s.id === id);
    assert.ok(stage, id);
    for (const gate of stage.gates(ctx).filter((g: any) => ['extcheck', 'pathcheck', 'prosecheck'].includes(g.id))) {
      assertSelection(ctx, gate.id, validatorArgs(ctx, gate));
      checked++;
    }
  }
  assert.ok(checked > 0, 'standalone gates must exercise real manifest selections');
});

test('future descriptors can be inspected before manifests exist; execution fails closed', t => {
  const ctx = fixture(t);
  rmSync(join(ctx.repo, 'research/run-test-batch-1.pages.json'));
  const stage: any = stages.find(s => s.id === '9-readiness-v2');
  const gate = stage.gates(ctx).find((g: any) => g.id === 'depcheck');
  const descriptor = stage.gates({ ...ctx, doctor: true }).find((g: any) => g.id === 'depcheck');
  assert.deepEqual(argv(descriptor), argv(gate));
  assert.equal(existsSync(join(ctx.repo, 'research/run-test-frontier-gate-items.json')), false);
  const missing = execute(ctx, gate);
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /No manifests for frontier run-test/);
  assert.equal(missing.stdout, '', 'missing scope must not dispatch a validator');
  writeFileSync(join(ctx.repo, 'research/run-test-batch-1.pages.json'), '[]');
  const empty = execute(ctx, gate);
  assert.notEqual(empty.status, 0);
  assert.match(empty.stderr, /no valid populated item scope/);
  assert.equal(empty.stdout, '', 'empty scope must not dispatch a validator');
});

test('an assembled stage gate refreshes its selection from current manifests at execution', t => {
  const ctx = fixture(t);
  const stage: any = stages.find(s => s.id === '9-readiness-v2');
  const gate = stage.gates(ctx).find((g: any) => g.id === 'depcheck');
  assertSelection(ctx, 'depcheck', validatorArgs(ctx, gate));
  writeFileSync(join(ctx.repo, 'items/thm-updated.md'), '---\nid: thm-updated\n---\n');
  writeFileSync(join(ctx.repo, 'research/run-test-batch-1.pages.json'), JSON.stringify([
    { id: 'selected', category: 'test', items: [{ id: 'thm-updated' }] },
    { id: 'selected-examples', category: 'test', items: [{ id: 'ex-selected' }] },
  ]));
  const args = validatorArgs(ctx, gate);
  assert.deepEqual(JSON.parse(readFileSync(join(ctx.repo, args[args.indexOf('--items-file') + 1]), 'utf8')),
    ['ex-selected', 'thm-updated']);
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

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runGate } from './autopilot/src/gates.mts';
import { stages as math } from './autopilot/stages/mathlib.mts';
import { stages as physics } from './physics-autopilot/stages/mathlib.mts';
import { prepareRenderingQuality, writeRenderingQuality } from './rendering-quality.mjs';
import { APP_DIR } from './paths.mjs';
import { commandDefinesFlag, commandFlagSources } from './physics-autopilot/src/doctor.mts';

const repo = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
for (const [name, stages, physical] of [['math', math, false], ['physics', physics, true]] as const) {
  test(`${name} native final gate actually consumes selected current rendering checks and enforces liveness`, async t => {
    const root = mkdtempSync(join(tmpdir(), 'native-rendering-gate-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    const put = (file: string, text: any) => { mkdirSync(dirname(join(root, file)), { recursive: true }); writeFileSync(join(root, file), typeof text === 'string' ? text : JSON.stringify(text)); };
    put('research/demo-batch-1.pages.json', [{ id: 'page', kind: 'A', category: 'test', order: 1,
      items: [{ id: 'def-test', kind: 'definition', title: 'A definition', deps: [] }] }]);
    const source = '---\nid: def-test\nkind: definition\ntitle: A definition\nstatus: draft\ndeps: []\n---\n\n## Definition\n\nLet $x$ be real.\n';
    put('items/def-test.md', source);
    put('library/test/page.md', '---\npage: page\nitems: [def-test]\nexamples: []\n---\n');
    const ctx: any = { repo: root, run: 'demo', doctor: true };
    const row: any = stages.find(stage => stage.id === '6-final-validation-v3')!.gates!(ctx).find((gate: any) => gate.id === 'rendering-quality');
    assert.ok(row);
    assert.equal(row.required, undefined);
    assert.equal(row.liveness.min, 1);
    assert.ok(row.argv.includes('--verify'));
    assert.ok(!row.argv.includes('--write'));
    const tool = row.argv[1], argv = ['node', join(repo, tool), ...row.argv.slice(2)];
    const env = { PRESTIGE_MATH_REPO: root, PHYSICS_REPO: root, PRESTIGE_APP_DIR: APP_DIR! };
    const gate = { ...row, argv, needs: row.needs };
    assert.equal((await runGate(gate, { cwd: root, env })).ok, false, 'missing prepared inputs must fail');
    const receipt = await prepareRenderingQuality(root, 'demo', { physics: physical });
    assert.equal(receipt.errors.length, 0);
    writeRenderingQuality(root, 'demo', receipt);
    const passed = await runGate(gate, { cwd: root, env });
    assert.equal(passed.ok, true, JSON.stringify(passed));
    assert.match(passed.output ?? '', /rendering-quality: 2 file\(s\)/);
    put('items/def-test.md', source.replace('$x$', '$y$'));
    assert.equal((await runGate(gate, { cwd: root, env })).ok, false, 'source edits invalidate the actual gate');
    const sources = commandFlagSources(join(repo, tool));
    for (const flag of ['--run', '--verify']) assert.equal(commandDefinesFlag(sources, flag), true);
  });
}

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync, symlinkSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const repo = fileURLToPath(new URL('../', import.meta.url));
for (const physical of [false, true]) test(`${physical ? 'physics' : 'math'} task generation reaches only current eight-step prompts`, t => {
  const root = mkdtempSync(join(tmpdir(), 'eight-step-tasks-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research', 'tools', 'tools/physics-support']) mkdirSync(join(root, dir), { recursive: true });
  const engine = physical ? 'physics-autopilot' : 'autopilot';
  symlinkSync(join(repo, 'tools', engine), join(root, 'tools', engine));
  symlinkSync(join(repo, physical ? 'physics/briefs' : 'briefs'), join(root, 'briefs'));
  const path = physical ? 'tools/physics-support/run-tasks.mjs' : 'tools/run-tasks.mjs';
  copyFileSync(join(repo, path), join(root, path));
  const pages = [
    { id: 'demo-a', title: 'Fixture foundations', kind: 'A', category: 'algebra', order: 1, companion: 'demo-b', requires: [], items: [{ id: 'def-fixture-item', deps: [] }] },
    { id: 'demo-b', title: 'Fixture examples', kind: 'B', category: 'algebra', order: 2, companion: 'demo-a', requires: ['demo-a'], items: [{ id: 'ex-fixture-item', deps: ['def-fixture-item'] }] },
  ];
  for (const [file, value] of [['plan-spec.json', { pages }], ['demo-batch-1.pages.json', pages]])
    writeFileSync(join(root, 'research', file), JSON.stringify(value));
  // Initial planning owns this task; the generic generator checks its presence.
  writeFileSync(join(root, 'research/demo-alpha-step1-drift.task.md'), '# Fixture drift assignment\n');
  const r = spawnSync(process.execPath, [join(root, path), '--run', 'demo'], {
    cwd: root, encoding: 'utf8', env: { ...process.env, ...(physical ? { PHYSICS_REPO: root } : {}) },
  });
  assert.equal(r.status, 0, r.stderr + r.stdout);
  const tasks = readdirSync(join(root, 'research')).filter(f => f.endsWith('.task.md'));
  assert.ok(tasks.includes('demo-alpha-step6.task.md'));
  assert.ok(!tasks.some(f => /step9|receipts|step6-(?:adjudicate|gate-adjudication)/.test(f)));
  assert.match(readFileSync(join(root, 'research/demo-alpha-step6.task.md'), 'utf8'), /demo-step6-evidence.json/);
  const checked = spawnSync(process.execPath, [join(root, path), '--run', 'demo', '--check'], {
    cwd: root, encoding: 'utf8', env: { ...process.env, ...(physical ? { PHYSICS_REPO: root } : {}) },
  });
  assert.equal(checked.status, 0, checked.stderr + checked.stdout);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
const tool = new URL('./impact-audit.mjs', import.meta.url).pathname;
test('impact scope retains changed external suppliers reaching selected consumers', t => {
 const root = mkdtempSync(join(tmpdir(), 'physics-impact-frontier-'));
 t.after(() => rmSync(root, { recursive: true, force: true }));
 mkdirSync(join(root, 'items'));
 const item = (id, deps) => writeFileSync(join(root, 'items', `${id}.md`), `---\nid: ${id}\ndeps: ${JSON.stringify(deps)}\n---\n`);
 item('thm-source', []); item('thm-selected', ['thm-source']); item('thm-outside', ['thm-source']); item('thm-isolated', []);
 writeFileSync(join(root, 'scope.json'), JSON.stringify(['thm-selected']));
 writeFileSync(join(root, 'touches.json'), JSON.stringify({ snapshots: [
  { label: 'before', surfaces: { 'thm-source': 'a', 'thm-isolated': 'a' } },
  { label: 'after', surfaces: { 'thm-source': 'b', 'thm-isolated': 'b' } },
 ] }));
 const args = ['--touches', 'touches.json', '--from', 'before', '--to', 'after', '--direct-boundary', '--items-file', 'scope.json', '--json'];
 const run = () => spawnSync(process.execPath, [tool, ...args], { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8' });
 const result = run(); assert.equal(result.status, 0, result.stderr);
 const data = JSON.parse(result.stdout);
 assert.deepEqual(data.changed, ['thm-source']); assert.deepEqual(data.required_review, ['thm-selected']);
 assert.deepEqual(data.impacts[0].logical_consumers, ['thm-selected']);
 for (const ids of [[], ['thm-unknown'], ['thm-selected', 'thm-selected']]) {
  writeFileSync(join(root, 'scope.json'), JSON.stringify(ids));
  assert.notEqual(run().status, 0);
 }
});

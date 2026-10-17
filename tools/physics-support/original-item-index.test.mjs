import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readOriginalItemIdentity } from './original-item-index.mjs';

test('identity projection retains classification and block/flow aliases without descriptive YAML', t => {
 const dir = mkdtempSync(join(tmpdir(), 'physics-original-index-'));
 t.after(() => rmSync(dir, { recursive: true, force: true }));
 const file = join(dir, 'thm-test.md');
 for (const aliases of ['aliases: [first, second]', 'aliases:\n  - first\n  - second', 'aliases:\n- first\n- second']) {
  writeFileSync(file, `---\nid: thm-test\nkind: theorem\ndomain: mathematics\n${aliases}\nlocator: "bad \\gamma"\n---\n`);
  assert.deepEqual(readOriginalItemIdentity(file), { id: 'thm-test', aliases: ['first', 'second'], kind: 'theorem', domain: 'mathematics', file });
 }
});

test('unreadable or ambiguous identity/classification shapes fail closed', t => {
 const dir = mkdtempSync(join(tmpdir(), 'physics-original-index-'));
 t.after(() => rmSync(dir, { recursive: true, force: true }));
 const file = join(dir, 'thm-test.md');
 for (const extra of ['aliases: [unterminated', 'aliases: []\naliases: [stolen]', 'id: another', '"aliases": [stolen]', '<<: { aliases: [stolen] }', '? aliases\n: [stolen]', 'domain: [physics]', 'kind: [postulate]']) {
  writeFileSync(file, `---\nid: thm-test\nkind: theorem\n${extra}\nlocator: "bad \\gamma"\n---\n`);
  assert.throws(() => readOriginalItemIdentity(file), undefined, extra);
 }
});

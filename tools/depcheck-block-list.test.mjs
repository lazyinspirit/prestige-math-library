import assert from 'node:assert/strict';
import test from 'node:test';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const HERE = new URL('.', import.meta.url).pathname;

test('depcheck rejects draft items listed by block-form published pages', () => {
  const root = mkdtempSync(join(tmpdir(), 'depcheck-block-list-'));
  try {
    mkdirSync(join(root, 'tools'));
    mkdirSync(join(root, 'items'));
    mkdirSync(join(root, 'library', 'test'), { recursive: true });
    for (const file of ['depcheck.mjs', 'facts-block.mjs', 'frontmatter-list.mjs'])
      copyFileSync(join(HERE, file), join(root, 'tools', file));
    for (const id of ['lem-indented', 'lem-indentless', 'ex-next-line-flow']) {
      writeFileSync(join(root, 'items', `${id}.md`),
        `---\nid: ${id}\nkind: ${id.startsWith('ex-') ? 'example' : 'lemma'}\nstatus: draft\ndeps: []\n---\n## Statement\n\nDraft.\n`);
    }
    writeFileSync(join(root, 'library', 'test', 'indented.md'),
      '---\npage: indented\nstatus: published\nitems:\n  - lem-indented\nexamples: []\n---\n');
    writeFileSync(join(root, 'library', 'test', 'other-forms.md'),
      '---\npage: other-forms\nstatus: published\nitems:\n- lem-indentless\nexamples:\n  [ex-next-line-flow]\n---\n');

    const result = spawnSync(process.execPath, ['tools/depcheck.mjs', '--json'],
      { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 1, result.stderr);
    const errors = JSON.parse(result.stdout).errors
      .filter((row) => row.code === 'draft-on-published-page').map((row) => row.msg);
    for (const id of ['lem-indented', 'lem-indentless', 'ex-next-line-flow'])
      assert.ok(errors.some((message) => message.includes(`"${id}"`)), id);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

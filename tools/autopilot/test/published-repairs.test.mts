import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const REPO = join(import.meta.dirname, '..', '..', '..');
const TOOL = join(REPO, 'tools', 'published-repairs.mjs');

test('one published item has one pre-edit Step-6 repair owner', () => {
  const root = mkdtempSync(join(tmpdir(), 'published-repair-'));
  try {
    mkdirSync(join(root, 'research'));
    mkdirSync(join(root, 'items'));
    writeFileSync(join(root, 'items', 'thm-published.md'), 'published baseline\n');
    const claim = (group: string) => spawnSync(process.execPath,
      [TOOL, 'claim', '--run', 'r', '--id', 'thm-published', '--group', group, '--root', root],
      { cwd: root, encoding: 'utf8' });
    assert.equal(claim('a').status, 0);
    const competing = claim('b');
    assert.equal(competing.status, 3);
    assert.match(competing.stderr, /owned by group a/);
    const claims = readFileSync(join(root, 'research', 'r-step6-published-claims.jsonl'), 'utf8')
      .trim().split('\n').map((line) => JSON.parse(line));
    assert.equal(claims.length, 1);
    assert.equal(claims[0].group, 'a');

    const rowPath = join(root, 'row.json');
    writeFileSync(rowPath, JSON.stringify({
      kind: 'repaired', id: 'thm-published', group: 'b', repair_owner_group: 'a',
      found_via: 'consumer-b', found_at_stage: '6a-read', step6_obligation: 'reader:2:1',
      pre_sha256: claims[0].pre_sha256,
    }));
    const append = spawnSync(process.execPath,
      [TOOL, 'append', '--run', 'r', '--file', rowPath, '--root', root],
      { cwd: root, encoding: 'utf8' });
    assert.equal(append.status, 0, append.stderr);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

test('large piped boundary diagnostics retain every candidate and strict exit status', t => {
  const dir = mkdtempSync(join(tmpdir(), 'boundary-output-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const items = join(dir, 'items');
  mkdirSync(items);
  const contracts = {};
  const ids = Array.from({ length: 600 }, (_, i) => `thm-output-fixture-${i}`);
  for (const id of ids) contracts[id] = { boundaries: [{
    case: 'one', status: 'checked',
    evidence: `Step 1.1 handles ${id}. ` + 'A repeated unsupported boundary explanation. '.repeat(60),
  }] };
  const file = join(dir, 'contracts.json');
  writeFileSync(file, JSON.stringify({ contracts }));
  for (const strict of [false, true]) {
    const result = spawnSync(process.execPath, [new URL('./boundary-audit.mjs', import.meta.url).pathname,
      file, '--items-dir', items, '--json', ...(strict ? ['--fail-on-template'] : [])],
    { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, timeout: 30_000 });
    assert.equal(result.error, undefined);
    assert.equal(result.status, strict ? 1 : 0, result.stderr);
    assert.ok(result.stdout.length > 1024 * 1024, 'fixture must exceed ordinary pipe buffering');
    const report = JSON.parse(result.stdout);
    assert.equal(report.summary.boundary_rows, ids.length);
    assert.equal(report.summary.rows_in_template_clusters, ids.length);
    assert.deepEqual(report.templates.flatMap(cluster => cluster.items).sort(), [...ids].sort());
    assert.equal(report.templates.flatMap(cluster => cluster.rows).length, ids.length);
  }
});

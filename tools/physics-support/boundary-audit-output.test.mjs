import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import {projectFrontierGate} from './step5-frontier-gate.mjs';
import {freezeFrontier} from './step5-rounds.mjs';

test('large piped boundary diagnostics retain every candidate and strict exit status', t => {
  const dir = mkdtempSync(join(process.env.PHYSICS_GATE_OUTPUT_TEST_ROOT ?? tmpdir(), 'boundary-output-'));
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
    if (strict) {
      const frontier = freezeFrontier({run:'fixture',batches:[{id:'1',items:ids}]});
      const projected = projectFrontierGate('boundary-audit', {code:result.status,stdout:result.stdout,stderr:result.stderr}, frontier, ids);
      assert.equal(projected.code, 1, 'complete output must retain every owned template finding');
      assert.equal(projected.scopeError, undefined);
      assert.deepEqual(JSON.parse(projected.output).templates.flatMap(cluster=>cluster.items).sort(), [...ids].sort());
    }
  }
});

test('empty boundary scope and unparseable contracts remain blocking runtime errors', t => {
  const dir = mkdtempSync(join(process.env.PHYSICS_GATE_OUTPUT_TEST_ROOT ?? tmpdir(), 'boundary-empty-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const file = join(dir, 'contracts.json');
  for (const data of ['{', JSON.stringify({contracts:{}})]) {
    writeFileSync(file, data);
    const result = spawnSync(process.execPath, [new URL('./boundary-audit.mjs', import.meta.url).pathname, file, '--json'], {encoding:'utf8'});
    assert.equal(result.status, 2);
    assert.ok(result.stderr.trim());
  }
});

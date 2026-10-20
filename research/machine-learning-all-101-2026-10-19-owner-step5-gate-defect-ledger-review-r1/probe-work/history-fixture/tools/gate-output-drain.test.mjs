import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

for (const file of ['depsource.mjs', 'level-coverage.mjs', 'proof-contract.mjs']) {
  for (const failed of [false, true]) {
    test(`${file} drains large piped reports with exit ${Number(failed)}`, () => {
      const source = readFileSync(new URL(file, import.meta.url), 'utf8');
      const expression = file === 'depsource.mjs'
        ? 'counts.unresolved === 0 ? 0 : 1' : 'errors.length ? 1 : 0';
      const line = source.split('\n').find(line => line.includes(expression));
      assert.ok(line, 'exercise the production report termination statement');
      const script = `const counts={unresolved:${Number(failed)}};
        const errors=${failed ? '["defect"]' : '[]'};
        console.log(JSON.stringify({payload:"x".repeat(4*1024*1024),errors}));
        ${line}`;
      const result = spawnSync(process.execPath, ['-e', script], {
        encoding: 'utf8', maxBuffer: 8 * 1024 * 1024,
      });
      assert.ifError(result.error);
      assert.equal(result.status, Number(failed));
      assert.equal(result.stderr, '');
      const report = JSON.parse(result.stdout);
      assert.equal(report.payload.length, 4 * 1024 * 1024);
      assert.equal(report.errors.length, Number(failed));
    });
  }
}

import assert from 'node:assert/strict';
import { chmodSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const REPO = join(import.meta.dirname, '../../..');

test('source-writing dispatches enable shell networking on fresh and resumed sessions', () => {
  const fixture = mkdtempSync(join(tmpdir(), 'dispatch-network-'));
  const fake = join(fixture, 'codex.mjs');
  const captured = join(fixture, 'argv.json');
  writeFileSync(fake, `#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
writeFileSync(process.env.CAPTURE_ARGV, JSON.stringify(process.argv.slice(2)));
process.stdin.resume();
`);
  chmodSync(fake, 0o755);
  const run = `network-test-${process.pid}-${Date.now()}`;
  try {
    for (const resume of [false, true]) {
      const result = spawnSync('node', ['tools/dispatch.mjs', '--role', 'beta',
        '--brief', 'briefs/beta-scaffold.md', '--label', resume ? 'resumed' : 'fresh',
        '--run', run, '--timeout', '30',
        ...(resume ? ['--session-home', join(fixture, 'session'), '--resume-session',
          '11111111-1111-1111-1111-111111111111'] : [])], {
        cwd: REPO, encoding: 'utf8', timeout: 45_000,
        env: { ...process.env, CODEX_BIN: fake, CAPTURE_ARGV: captured,
          DISPATCH_SLOT_ROOT: join(fixture, 'slots') },
      });
      assert.equal(result.status, 0, result.stderr || result.stdout);
      const args = JSON.parse(readFileSync(captured, 'utf8'));
      assert.ok(args.includes('sandbox_workspace_write.network_access=true'));
      assert.ok(resume ? args.includes('sandbox_mode="workspace-write"')
        : args[args.indexOf('--sandbox') + 1] === 'workspace-write');
      assert.equal(args.includes('resume'), resume);
      assert.ok(!args.includes('danger-full-access'));
    }
  } finally {
    rmSync(join(REPO, 'research', `${run}-dispatch`), { recursive: true, force: true });
    rmSync(fixture, { recursive: true, force: true });
  }
});

test('read-only and non-source roles do not gain shell network access', () => {
  for (const role of ['alpha-report', 'mechanic']) {
    const result = spawnSync('node', ['tools/dispatch.mjs', '--role', role,
      '--brief', 'briefs/alpha.md', '--task', 'briefs/alpha.md', '--label', 'probe',
      '--run', 'network-dry-run', '--dry-run', '--json'], {
      cwd: REPO, encoding: 'utf8', timeout: 30_000,
    });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.doesNotMatch(report.command, /sandbox_workspace_write.network_access=true/);
    if (role === 'alpha-report') assert.equal(report.sandbox, 'read-only');
  }
});

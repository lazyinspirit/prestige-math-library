import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { preflightCloseoutScope, operationalContextState, captureOutsidePreservation,
  assertOutsidePreservationSame } from './run-commit-scope.mjs';
import { sha256 } from './step6-lib.mjs';
import { ownedStep6Paths } from './step6-owned-inputs.mjs';
import { preflightStep6 } from './step6-commit.mjs';

const run = 'fixture';
function fixture(t, { legacy = false } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'closeout-context-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (path, text) => { mkdirSync(join(root, path, '..'), { recursive: true }); writeFileSync(join(root, path), text); };
  const json = (path, value) => put(path, JSON.stringify(value));
  const git = args => {
    const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); return result.stdout;
  };
  git(['init', '-b', 'main']);
  git(['config', 'user.name', 'Fixture']); git(['config', 'user.email', 'fixture@example.invalid']);
  put('base', 'base'); git(['add', 'base']); git(['-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'base']);
  json('research/fixture-scope-ledger.json', { pages: [{ id: 'page' }] });
  put('library/category/page.md', '---\npage: page\nitems: [def-example]\n---\n');
  put('items/def-example.md', '---\nid: def-example\n---\n');
  json('research/fixture-closeout-scope.json', { version: 1, run, authorized_by: 'owner',
    authorization: 'Exact fixture-only ownership authority', additional_paths: [] });
  json('research/plan-spec.json', {}); put('research/published-consumer-supplier-ledger.md', '');
  git(['add', 'research/plan-spec.json', 'research/published-consumer-supplier-ledger.md']);
  git(['-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'shared fixture baseline']);
  const dir = legacy ? 'research/fixture-owner-escalation-repairs/repair/overlay'
    : 'research/fixture-proposal/preview';
  const regular = dir + '/tools/repair.mjs', link = dir + '/items';
  put(regular, 'accepted proposal bytes');
  symlinkSync('/unavailable/external/target', join(root, link));
  const evidence = 'research/fixture-accepted-repair.json'; json(evidence, { accepted: true });
  const authority = 'research/fixture-closeout-operational-contexts.json';
  const manifest = { version: 1, kind: 'closeout-operational-context-exclusions', run,
    authorized_by: 'owner', authorization: 'Exact fixture-only opaque context selection', directories: [{
      path: dir, ...(legacy ? {} : { selection: 'symlinks-only' }),
      reason: 'Preserve the historical resolver context', ...operationalContextState(root, dir),
      evidence: [{ path: evidence, sha256: sha256(readFileSync(join(root, evidence))) }],
    }] };
  const seal = () => { Object.assign(manifest.directories[0], operationalContextState(root, dir)); json(authority, manifest); };
  seal();
  const scope = () => preflightCloseoutScope(root, run, 'research/fixture-dispatch/tool-step6-finalize-v3.result.json');
  return { root, put, json, git, dir, regular, link, evidence, authority, manifest, seal, scope };
}

test('typed exact context omits actual symlinks only, retaining regular proposals and outside link state', t => {
  const f = fixture(t), scope = f.scope();
  assert.ok(scope.paths.includes(f.regular)); assert.ok(!scope.paths.includes(f.link));
  assert.ok(scope.paths.includes(f.evidence)); assert.ok(scope.paths.includes(f.authority));
  const before = captureOutsidePreservation(f.root, run, scope);
  assert.equal(before.outside_working.find(row => row.path === f.link)?.kind, 'symlink');
  f.put(f.regular, 'new owned regular bytes');
  assertOutsidePreservationSame(captureOutsidePreservation(f.root, run, scope), before, 'outside');
  unlinkSync(join(f.root, f.link)); symlinkSync('/other/target', join(f.root, f.link));
  assert.throws(() => assertOutsidePreservationSame(captureOutsidePreservation(f.root, run, scope), before, 'outside'), /preservation mismatch/);
});

test('legacy absent selection retains original whole-directory behavior', t => {
  const f = fixture(t, { legacy: true }), scope = f.scope();
  assert.ok(!scope.paths.includes(f.regular)); assert.ok(!scope.paths.includes(f.link));
});

test('arbitrary research roots require explicit typed opt-in', t => {
  const f = fixture(t); delete f.manifest.directories[0].selection; f.seal();
  assert.throws(f.scope, /invalid exact operational context directory/);
});

test('changed root bytes, link text, mode or external evidence invalidate the seal', t => {
  const f = fixture(t); f.put(f.regular, 'changed');
  assert.throws(f.scope, /operational context directory changed/); f.seal();
  chmodSync(join(f.root, f.regular), 0o755);
  assert.throws(f.scope, /operational context directory changed/); f.seal();
  unlinkSync(join(f.root, f.link)); symlinkSync('/changed/target', join(f.root, f.link));
  assert.throws(f.scope, /operational context directory changed/); f.seal();
  f.put(f.evidence, 'changed evidence'); assert.throws(f.scope, /operational context evidence changed/);
});

for (const kind of ['frozen', 'certificate', 'absolute-certificate', 'historical-collection', 'transitive', 'absolute-transitive', 'required', 'explicit']) {
  test(kind + ' authoritative symlink cannot be exempted', t => {
    const f = fixture(t);
    if (kind === 'frozen') f.json('research/fixture-step3-closure.json', { artifacts: { [f.link]: 'hash' } });
    if (kind === 'absolute-certificate') f.json('research/fixture-step5-v2/certification-2.json', { evidence: { [join(f.root, f.link)]: 'hash' } });
    if (kind === 'certificate') f.json('research/fixture-step5-v2/certification-2.json', { evidence: { [f.link]: 'hash' } });
    if (kind === 'historical-collection') f.json('research/fixture-step5-v2/repeat-1-collected.json', { evidence: { [f.link + '/def-example.md']: 'hash' } });
    if (kind === 'absolute-transitive') {
      f.json('research/fixture-step5-v2/certification-2.json', { evidence: { [join(f.root, 'research/fixture-archive.json')]: 'hash' } });
      f.json('research/fixture-archive.json', { artifact: { path: f.link + '/def-example.md', sha256: 'hash' } });
    }
    if (kind === 'transitive') {
      f.json('research/fixture-step5-v2/certification-2.json', { evidence: { 'research/fixture-archive.json': 'hash' } });
      f.json('research/fixture-archive.json', { artifact: { path: f.link, sha256: 'hash' } });
    }
    if (kind === 'required') { unlinkSync(join(f.root, 'items/def-example.md')); symlinkSync('../base', join(f.root, 'items/def-example.md')); }
    if (kind === 'explicit') {
      f.json('research/fixture-closeout-scope.json', { version: 1, run, authorized_by: 'owner',
        authorization: 'Exact explicit outside-file ownership', additional_paths: [{ path: 'base',
          sha256: sha256('base'), reason: 'Explicit fixture administrative carrier', ownership_evidence: f.link }] });
    }
    assert.throws(f.scope, /authoritative input|symlink in owned path|scoped item .* has no|evidence is not external/);
  });
}

test('typed regular native evidence remains owned; referenced regular context artifacts remain admissible', t => {
  const f = fixture(t);
  f.json('research/fixture-step5-v2/certification-2.json', { evidence: { [f.regular]: sha256(readFileSync(join(f.root, f.regular))) } });
  assert.ok(f.scope().paths.includes(f.regular));
});

test('foreign-run context roots are never admitted', t => {
  const f = fixture(t); f.manifest.directories[0].path = 'research/foreign-preview';
  f.json(f.authority, f.manifest); assert.throws(f.scope, /invalid exact operational context directory/);
});


test('readiness/report owned-input selection and transaction preflight agree with typed scope', t => {
  const f = fixture(t), expected = f.scope().paths;
  f.put('outside', 'foreign staged bytes'); f.git(['add', 'outside']); f.put('outside', 'foreign working bytes');
  const before = f.git(['ls-files', '--stage']);
  assert.deepEqual(ownedStep6Paths(f.root, run), expected);
  assert.deepEqual(preflightStep6(f.root, run).localPaths, expected);
  assert.equal(f.git(['ls-files', '--stage']), before);
  assert.equal(readFileSync(join(f.root, 'outside'), 'utf8'), 'foreign working bytes');
});


test('foreign absolute evidence and workspace-prefix lookalikes are never followed', t => {
  const f = fixture(t), lookalike = f.root + '-foreign';
  mkdirSync(lookalike); t.after(() => rmSync(lookalike, { recursive: true, force: true }));
  writeFileSync(join(lookalike, 'invalid.json'), 'must never be parsed');
  f.json('research/fixture-step5-v2/certification-2.json', { evidence: {
    [join(lookalike, 'invalid.json')]: 'hash', '/outside/workspace/unavailable.json': 'hash',
  } });
  assert.ok(f.scope().paths.includes(f.regular));
});

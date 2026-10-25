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


for (const format of ['JSONL', 'Markdown']) {
  test('native supporting metadata preserves opaque ' + format + ' bytes without following history', t => {
    const f = fixture(t);
    const bytes = format === 'JSONL'
      ? JSON.stringify({run:'foreign-run', path:f.link}) + '\n' + JSON.stringify({evidence:{[f.link]:'old'}}) + '\n'
      : '# Foreign historical ledger\n\n' + f.link + '\n';
    const hash = sha256(bytes), path = 'research/' + (format === 'JSONL' ? 'foreign-run' : 'fixture') + '-step5-v2/supporting-metadata/' + hash + '.json';
    f.put(path, bytes);
    f.json('research/fixture-step5-v2/certification-2.json', {evidence:{[join(f.root,path)]:hash}});
    assert.equal(f.scope().paths.includes(path), format !== 'JSONL', 'foreign archive context never becomes owned');
    assert.ok(!f.scope().paths.includes(f.link));
  });
}

test('content-addressed native supporting archive rejects changed bytes', t => {
  const f = fixture(t), hash = sha256('original historical bytes');
  const path = 'research/fixture-step5-v2/supporting-metadata/' + hash + '.json';
  f.put(path, 'different bytes');
  f.json('research/fixture-step5-v2/certification-2.json', {evidence:{[join(f.root,path)]:hash}});
  assert.throws(f.scope, /native supporting metadata archive changed/);
});

test('pinned supporting archive symlink remains forbidden before reading target bytes', t => {
  const f = fixture(t), hash = sha256('{}'), dir = 'research/fixture-step5-v2/supporting-metadata';
  mkdirSync(join(f.root,dir),{recursive:true});
  const path = dir + '/' + hash + '.json';
  symlinkSync('/outside/unavailable/archive',join(f.root,path));
  f.json('research/fixture-step5-v2/certification-2.json', {evidence:{[join(f.root,path)]:hash}});
  assert.throws(f.scope, /symlink in owned path/);
});

test('malformed normal native JSON cannot use opaque archive treatment', t => {
  const f = fixture(t);
  f.put('research/fixture-step5-v2/certification-2.json','{malformed');
  assert.throws(f.scope, SyntaxError);
});

test('opaque treatment does not cover malformed archive names or lookalike namespaces', t => {
  const f = fixture(t), hash = sha256('not structured JSON');
  for (const path of ['research/foreign-step5-v2/supporting-metadata-copy/' + hash + '.json',
    'research/fixture-step5-v2/supporting-metadata/not-a-content-hash.json']) {
    f.put(path,'not structured JSON');
    f.json('research/fixture-step5-v2/certification-2.json',{evidence:{[path]:hash}});
    assert.throws(f.scope,SyntaxError);
  }
});

function generatedReceipt(f, kind = 'readiness') {
  const path = `research/fixture-${kind === 'readiness' ? 'publication-readiness' : 'step6-report-integrity'}.json`;
  const capture = 'research/fixture-history/raw-cli.json';
  f.put(capture, 'step5-workflow advance-impact: 0 item(s), complete\n\n');
  const record = kind === 'readiness'
    ? { schema: 2, run, protected_tree_scope: 'frontier-prerequisite-context-v1',
      protected_tree_paths: [capture, f.link], protected_tree_projections: [capture], input_sha256: {} }
    : { version: 2, run, scope: 'frontier-prerequisite-report-v2',
      selectors: { ledger: 'research/fixture-scope-ledger.json', pages: [{ file: 'library/category/page.md' }],
        items: [{ file: 'items/def-example.md' }], pathways: [], owned_paths: [capture, f.link], projections: [capture] },
      protected_tree: { [capture]: sha256('original capture'), [f.link]: 'sealed link text' } };
  // Reproduce the evidence -> readiness chain; report snapshots are native roots.
  f.json('research/fixture-step6-evidence.json', { input_sha256: { [path]: 'hash' } });
  const save = () => f.json(path, record); save();
  return { path, capture, record, save };
}

for (const kind of ['readiness', 'report']) {
  test(kind + ' generated seal inventory retains raw captures and omits operational links without source discovery', t => {
    const f = fixture(t), g = generatedReceipt(f, kind), scope = f.scope();
    assert.ok(scope.paths.includes(g.path)); assert.ok(scope.paths.includes(g.capture));
    assert.ok(!scope.paths.includes(f.link));
    assert.equal(readFileSync(join(f.root, g.capture), 'utf8'), 'step5-workflow advance-impact: 0 item(s), complete\n\n');
  });
  for (const mutation of ['run', 'schema', 'scope']) {
    test(kind + ' generated inventory rejects invalid ' + mutation, t => {
      const f = fixture(t), g = generatedReceipt(f, kind);
      if (mutation === 'run') g.record.run = 'foreign';
      if (mutation === 'schema') g.record[kind === 'readiness' ? 'schema' : 'version'] = 99;
      if (mutation === 'scope') g.record[kind === 'readiness' ? 'protected_tree_scope' : 'scope'] = 'foreign';
      g.save(); assert.throws(f.scope, /invalid generated seal inventory/);
    });
  }
  for (const reference of ['input-map', 'nested', 'second-native-root']) {
    test(kind + ' inventory cannot suppress a genuine ' + reference + ' source reference', t => {
      const f = fixture(t), g = generatedReceipt(f, kind);
      if (reference === 'input-map') g.record.input_sha256 = { [g.capture]: 'hash' };
      if (reference === 'nested') g.record.actual = { artifact: { path: g.capture } };
      if (reference === 'second-native-root') f.json('research/fixture-step5-v2/certification-2.json', { evidence: { [g.capture]: 'hash' } });
      g.save(); assert.throws(f.scope, SyntaxError);
    });
  }
  test(kind + ' genuine link ref remains forbidden even when also in seal inventory', t => {
    const f = fixture(t), g = generatedReceipt(f, kind);
    g.record.input_sha256 = { [f.link]: 'hash' }; g.save();
    assert.throws(f.scope, /symlink in owned path|authoritative input/);
  });
  test(kind + ' lookalike filename receives ordinary strict structured traversal', t => {
    const f = fixture(t), g = generatedReceipt(f, kind);
    const lookalike = g.path.replace('.json', '-copy.json');
    f.json(lookalike, g.record);
    f.json('research/fixture-step6-evidence.json', { input_sha256: { [lookalike]: 'hash' } });
    assert.throws(f.scope, SyntaxError);
  });
}

function historicalReadiness(f, historicalRun = 'historical-run') {
  const path = `research/${historicalRun}-publication-readiness.json`, input = 'research/historical-run-input.json';
  f.json(input, { actual: 'preserved historical structured context' });
  const record = { schema: 2, run: historicalRun, verdict: 'publishable-pending-owner-approval', workflow_owned_blockers: [],
    content_sha256: sha256('historical source'), input_sha256: { [input]: sha256(readFileSync(join(f.root, input))) },
    published_baseline_commit: 'a'.repeat(40), protected_tree_files: 142201, protected_tree_sha256: sha256('historical complete tree'),
    owner_actions_remaining: ['owner review'], generated_at: '2026-10-15T02:03:36.961Z' };
  f.json('research/fixture-step6-evidence.json', { input_sha256: { [path]: sha256(JSON.stringify(record)) } });
  const save = () => f.json(path, record); save(); return { path, input, record, save };
}

test('foreign pre-scoped readiness remains unchanged structured context without acquiring ownership', t => {
  const f = fixture(t), g = historicalReadiness(f), before = readFileSync(join(f.root, g.path)), scope = f.scope();
  assert.ok(!scope.paths.includes(g.path)); assert.ok(!scope.paths.includes(g.input));
  assert.deepEqual(readFileSync(join(f.root, g.path)), before);
});

for (const reference of ['input-map', 'nested', 'operational-link']) {
  test('foreign legacy readiness preserves strict ' + reference + ' references', t => {
    const f = fixture(t), g = historicalReadiness(f);
    if (reference === 'input-map') f.put(g.input, 'actual input is not structured JSON');
    if (reference === 'nested') g.record.actual = { artifact: { path: g.input } };
    if (reference === 'nested') f.put(g.input, 'actual nested input is not structured JSON');
    if (reference === 'operational-link') g.record.input_sha256 = { [f.link]: sha256('sealed link text') };
    g.save(); assert.throws(f.scope, reference === 'operational-link' ? /symlink in owned path|authoritative input/ : SyntaxError);
  });
}

test('current-run readiness cannot use historical aggregate-only compatibility', t => {
  const f = fixture(t); historicalReadiness(f, run); assert.throws(f.scope, /invalid generated seal inventory/);
});

for (const field of ['protected_tree_scope', 'protected_tree_paths', 'protected_tree_projections', 'protected_tree_rows']) {
  test('partial foreign scoped readiness cannot use legacy compatibility: ' + field, t => {
    const f = fixture(t), g = historicalReadiness(f); g.record[field] = field === 'protected_tree_scope' ? 'frontier-prerequisite-context-v1' : [];
    g.save(); assert.throws(f.scope, /invalid|malformed generated seal inventory/);
  });
}

for (const field of ['run', 'schema', 'protected_tree_sha256', 'input_sha256']) {
  test('malformed foreign legacy readiness stays rejected: ' + field, t => {
    const f = fixture(t), g = historicalReadiness(f); g.record[field] = field === 'schema' ? 99 : field === 'input_sha256' ? [] : 'malformed';
    g.save(); assert.throws(f.scope, /invalid generated seal inventory/);
  });
}

test('report source selectors stay strict beyond generated ownership/projection inventories', t => {
  const f = fixture(t), g = generatedReceipt(f, 'report');
  g.record.selectors.pages.push({ file: f.link + '/page.md' }); g.save();
  assert.throws(f.scope, /symlink in owned path|authoritative input/);
});

for (const [kind, field] of [['readiness', 'protected_tree_paths'], ['readiness', 'protected_tree_projections'],
  ['report', 'protected_tree'], ['report', 'selectors'], ['report', 'owned_paths'], ['report', 'projections']]) {
  test(kind + ' malformed inventory ' + field + ' cannot hide a structured source', t => {
    const f = fixture(t), g = generatedReceipt(f, kind);
    if (['owned_paths', 'projections'].includes(field)) g.record.selectors[field] = [{ path: f.link }];
    else g.record[field] = field === 'protected_tree' ? { actual: { path: f.link } } : { path: f.link };
    g.save(); assert.throws(f.scope, /malformed generated seal inventory/);
  });
}

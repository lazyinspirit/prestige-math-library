import { test } from 'node:test';
import assert from 'node:assert/strict';
import { copyFileSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { recordedPublishedRepair } from '../../published-repair-policy.mjs';
import { itemHashGuard } from '../../item-hash.mjs';

const REPO = join(import.meta.dirname, '..', '..', '..');
const sha = (text: string) => createHash('sha256').update(text).digest('hex');
const id = 'thm-repaired';
const receiptPath = 'research/repair.json';
const auditedBefore = '---\nid: thm-repaired\nkind: theorem\nstatus: published\nverification:\n  audited: 2026-09-30\n---\n## Statement\nOriginal.\n';
const judgedBefore = auditedBefore.replace('  audited: 2026-09-30', '  judge:\n    model: "gpt-6.1-sol"\n    verdict: pass');

function fixture(t: any, before = auditedBefore) {
  const root = mkdtempSync(join(tmpdir(), 'published-repair-policy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'library', 'research', 'tools']) mkdirSync(join(root, dir));
  writeFileSync(join(root, 'research/b-leaf-legacy-allowlist.json'), JSON.stringify({ version: 1, edges: [] }));
  const current = before.replace('  audited: 2026-09-30\n', '')
    .replace('verification:\n', `verification:\n  repair: ${receiptPath}\n`).replace('Original.', 'Corrected.');
  const content = itemHashGuard(current);
  const evidence = `\n${id}: bounded correction; current canonical hash ${content}. Local checks only, no whole-item audit.\n`;
  const claim = { version: 1, run: 'r', id, group: 'h', pre_sha256: itemHashGuard(before), claimed_at: '2026-10-01T00:00:00Z' };
  const checks = Object.fromEntries(['precheck', 'rendercheck'].map((tool) => [tool, {
    checked_at: '2026-10-01T00:01:00Z', content_sha256: content, exit_code: 0,
    command: ['node', `tools/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`, `items/${id}.md`],
    output: tool === 'precheck' ? `PASS items/${id}.md\n1 checked, 0 failing` : 'OK — 1 file(s)',
  }]));
  const receipt: any = {
    version: 1, kind: 'recorded-local-published-repair', id, run: 'r', group: 'h',
    correction: 'Corrected the supplied premise.', content_sha256: content,
    before_file: 'research/before.md', before_raw_sha256: sha(before), pre_sha256: itemHashGuard(before),
    recorded_at: '2026-10-01T00:02:00Z', ledger_marker: 'r:thm-repaired', ledger_sha256: sha(evidence), local_checks: checks,
  };
  const putReceipt = () => writeFileSync(join(root, receiptPath), JSON.stringify(receipt));
  writeFileSync(join(root, 'items', `${id}.md`), current);
  writeFileSync(join(root, 'research/before.md'), before);
  writeFileSync(join(root, 'research/r-step3-published-claims.jsonl'), JSON.stringify(claim) + '\n');
  writeFileSync(join(root, 'research/published-consumer-supplier-ledger.md'),
    `<!-- local-published-repair:r:thm-repaired:begin -->${evidence}<!-- local-published-repair:r:thm-repaired:end -->\n`);
  putReceipt();
  const check = (text = current) => recordedPublishedRepair(root, id, text, receiptPath);
  const git = (...args: string[]) => {
    const result = spawnSync('git', ['-C', root, '-c', 'user.name=Policy test', '-c', 'user.email=policy@example.invalid',
      '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null', ...args], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stdout + result.stderr);
    return result.stdout.trim();
  };
  const commit = (timestamp = '2026-09-30T00:00:00Z', stage = true) => {
    if (stage) git('add', '-A', '--', 'items');
    const result = spawnSync('git', ['-C', root, '-c', 'user.name=Policy test', '-c', 'user.email=policy@example.invalid',
      '-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'Published baseline'],
      { encoding: 'utf8', env: { ...process.env, GIT_AUTHOR_DATE: timestamp, GIT_COMMITTER_DATE: timestamp } });
    assert.equal(result.status, 0, result.stdout + result.stderr);
    return git('rev-parse', 'HEAD');
  };
  const depcheck = (...args: string[]) => {
    for (const file of ['depcheck.mjs', 'facts-block.mjs', 'frontmatter-list.mjs', 'item-scope.mjs', 'item-hash.mjs', 'published-repair-policy.mjs', 'published-repair-adoption.mjs', 'physics-math-context-import.mjs', 'physics-math-context-history.mjs', 'pathway-lib.mjs', 'paths.mjs'])
      copyFileSync(join(REPO, 'tools', file), join(root, 'tools', file));
    return spawnSync(process.execPath, [join(root, 'tools/depcheck.mjs'), '--json', ...args], { encoding: 'utf8' });
  };
  return { root, before, current, claim, receipt, putReceipt, check, depcheck, git, commit };
}

function committedFixture(t: any, committedBefore = judgedBefore, timestamp?: string) {
  const f = fixture(t, judgedBefore);
  f.git('init', '--initial-branch=main');
  writeFileSync(join(f.root, 'items', `${id}.md`), committedBefore);
  f.receipt.prior_publication_commit = f.commit(timestamp);
  writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
  f.putReceipt();
  return f;
}

test('already-published current repair passes as local evidence, never an audit stamp', (t) => {
  const f = fixture(t);
  assert.equal(f.check().ok, true);
  const result = f.depcheck();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /published-local-repair/);
  assert.doesNotMatch(f.current, /audited:|verified:/);
  // Verification metadata itself is outside the mathematical hash.
  assert.equal(f.check(f.current.replace('verification:\n', 'verification:\n  precheck: pass\n')).ok, true);
});

test('new publication cannot use an unpublished pre-carrier even with matching hashes', (t) => {
  const f = fixture(t);
  const draft = f.before.replace('status: published', 'status: draft');
  writeFileSync(join(f.root, 'research/before.md'), draft);
  f.receipt.before_raw_sha256 = sha(draft);
  f.receipt.pre_sha256 = itemHashGuard(draft);
  f.claim.pre_sha256 = itemHashGuard(draft);
  writeFileSync(join(f.root, 'research/r-step3-published-claims.jsonl'), JSON.stringify(f.claim));
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

test('ordinary publication still requires audit and retains the existing audit path', (t) => {
  const f = fixture(t);
  const path = join(f.root, 'items', `${id}.md`);
  writeFileSync(path, f.current.replace(`  repair: ${receiptPath}\n`, ''));
  assert.notEqual(f.depcheck().status, 0);
  writeFileSync(path, f.current.replace(`  repair: ${receiptPath}`, '  audited: 2026-10-01'));
  assert.equal(f.depcheck().status, 0);
});

test('a published but never-audited pre-carrier cannot establish initial publication by repair', (t) => {
  const f = fixture(t);
  const before = f.before.replace('  audited: 2026-09-30\n', '');
  writeFileSync(join(f.root, 'research/before.md'), before);
  f.receipt.before_raw_sha256 = sha(before);
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

test('exact preexisting judge-only publication passes with an immutable ancestor, without claiming an audit', (t) => {
  const f = committedFixture(t);
  assert.equal(f.check().ok, true);
  assert.doesNotMatch(f.before + f.current, /audited:|verified:/);
  const result = f.depcheck();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /published-local-repair/);
  // The named commit remains valid after HEAD advances beyond the publication.
  writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
  f.commit('2026-09-30T01:00:00Z');
  assert.equal(f.check().ok, true);
});

for (const defect of ['missing-commit', 'unknown-commit', 'abbreviated-commit', 'mutable-ref', 'tag-object', 'blob-object',
  'nonancestor', 'postclaim-commit', 'missing-carrier', 'historical-draft', 'historical-unproved', 'historical-id',
  'historical-metadata', 'forged-before', 'replacement-object']) {
  test(`unaudited publication rejects ${defect}`, (t) => {
    const committed = defect === 'historical-draft' ? judgedBefore.replace('status: published', 'status: draft')
      : defect === 'historical-unproved' ? judgedBefore.replace('kind: theorem', 'kind: theorem\nproved_here: false')
      : defect === 'historical-id' ? judgedBefore.replace('id: thm-repaired', 'id: thm-other')
      : defect === 'historical-metadata' ? judgedBefore.replace('gpt-6.1-sol', 'another-model')
      : defect === 'replacement-object' ? judgedBefore.replace('Original.', 'Fabricated.') : judgedBefore;
    const f = committedFixture(t, committed, defect === 'postclaim-commit' ? '2026-10-01T00:00:01Z' : undefined);
    if (defect === 'missing-commit') delete f.receipt.prior_publication_commit;
    if (defect === 'unknown-commit') f.receipt.prior_publication_commit = '0'.repeat(40);
    if (defect === 'abbreviated-commit') f.receipt.prior_publication_commit = f.receipt.prior_publication_commit.slice(0, 12);
    if (defect === 'mutable-ref') f.receipt.prior_publication_commit = 'HEAD';
    if (defect === 'tag-object') {
      f.git('tag', '-a', 'publication', '-m', 'Publication');
      f.receipt.prior_publication_commit = f.git('rev-parse', 'publication');
    }
    if (defect === 'blob-object') f.receipt.prior_publication_commit = f.git('rev-parse', `HEAD:items/${id}.md`);
    if (defect === 'nonancestor') {
      const ancestor = f.receipt.prior_publication_commit;
      f.git('checkout', '--orphan', 'unrelated');
      writeFileSync(join(f.root, 'items', `${id}.md`), judgedBefore);
      f.receipt.prior_publication_commit = f.commit('2026-09-30T01:00:00Z');
      assert.notEqual(f.receipt.prior_publication_commit, ancestor);
      f.git('checkout', '--detach', ancestor);
    }
    if (defect === 'missing-carrier') {
      f.git('rm', '-f', '--', `items/${id}.md`);
      f.receipt.prior_publication_commit = f.commit(undefined, false);
      mkdirSync(join(f.root, 'items'));
    }
    if (defect === 'forged-before') {
      const forged = judgedBefore.replace('Original.', 'Invented historical statement.');
      writeFileSync(join(f.root, 'research/before.md'), forged);
      f.receipt.before_raw_sha256 = sha(forged);
      f.receipt.pre_sha256 = itemHashGuard(forged);
      f.claim.pre_sha256 = itemHashGuard(forged);
      writeFileSync(join(f.root, 'research/r-step3-published-claims.jsonl'), JSON.stringify(f.claim));
    }
    if (defect === 'replacement-object') {
      writeFileSync(join(f.root, 'items', `${id}.md`), judgedBefore);
      const substitute = f.commit();
      f.git('replace', f.receipt.prior_publication_commit, substitute);
    }
    writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
    f.putReceipt();
    assert.equal(f.check().ok, false);
    assert.notEqual(f.depcheck('--pending-audit-ok').status, 0);
  });
}

test('a claimed prior audit outside the verification block does not establish publication', (t) => {
  const f = fixture(t);
  const before = f.before.replace('verification:\n', 'other:\n');
  writeFileSync(join(f.root, 'research/before.md'), before);
  f.receipt.before_raw_sha256 = sha(before);
  f.receipt.pre_sha256 = itemHashGuard(before);
  f.claim.pre_sha256 = itemHashGuard(before);
  writeFileSync(join(f.root, 'research/r-step3-published-claims.jsonl'), JSON.stringify(f.claim));
  f.putReceipt();
  assert.equal(f.check().ok, false);
  assert.notEqual(f.depcheck().status, 0);
});

for (const baseline of ['audited', 'committed'])
for (const defect of ['current-content', 'missing-receipt', 'wrong-owner', 'missing-claim', 'before-content', 'ledger-content', 'missing-ledger', 'stale-check', 'failed-check', 'undocumented-check', 'receipt-path']) {
  test(`${baseline} recorded repair rejects ${defect}, including legacy pending mode`, (t) => {
    const f = baseline === 'audited' ? fixture(t) : committedFixture(t);
    if (defect === 'current-content') writeFileSync(join(f.root, 'items', `${id}.md`), f.current.replace('Corrected.', 'Different.'));
    if (defect === 'missing-receipt') rmSync(join(f.root, receiptPath));
    if (defect === 'wrong-owner') { f.receipt.group = 'other'; f.putReceipt(); }
    if (defect === 'missing-claim') rmSync(join(f.root, 'research/r-step3-published-claims.jsonl'));
    if (defect === 'before-content') writeFileSync(join(f.root, 'research/before.md'), f.before + 'changed');
    if (defect === 'ledger-content') {
      const path = join(f.root, 'research/published-consumer-supplier-ledger.md');
      writeFileSync(path, readFileSync(path, 'utf8').replace('bounded correction', 'different correction'));
    }
    if (defect === 'missing-ledger') rmSync(join(f.root, 'research/published-consumer-supplier-ledger.md'));
    if (defect === 'stale-check') { f.receipt.local_checks.precheck.content_sha256 = '0'.repeat(64); f.putReceipt(); }
    if (defect === 'failed-check') { f.receipt.local_checks.rendercheck.exit_code = 1; f.putReceipt(); }
    if (defect === 'undocumented-check') { delete f.receipt.local_checks; f.putReceipt(); }
    if (defect === 'receipt-path') { f.receipt.before_file = 'research/../items/thm-repaired.md'; f.putReceipt(); }
    const source = readFileSync(join(f.root, 'items', `${id}.md`), 'utf8');
    assert.equal(f.check(source).ok, false);
    const result = f.depcheck('--pending-audit-ok');
    assert.notEqual(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /published-unaudited/);
  });
}

function adoptedFixture(t: any, shape = 'actual_source_repairs') {
  const f = fixture(t);
  f.git('init', '--initial-branch=main');
  writeFileSync(join(f.root, 'items', `${id}.md`), f.before);
  f.receipt.prior_publication_commit = f.commit();
  writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
  // Preserve the exact corrected delegated bytes before changing verification.
  const corrected = f.current;
  writeFileSync(join(f.root, 'research/corrected.md'), corrected);
  const delegated: any = { version: 1, run: 'r', agent: '/root/delegated-repair', lane: 'focused',
    [shape]: [{ id, [shape === 'items' ? 'original' : 'before']: { path: 'research/before.md', sha256: sha(f.before) },
      current: { path: `items/${id}.md`, sha256: sha(corrected) } }] };
  const delegatedRaw = JSON.stringify(delegated);
  writeFileSync(join(f.root, 'research/delegated.json'), delegatedRaw);
  const acceptance: any = { version: 1, kind: 'owner-acceptance-delegated-published-repair',
    authorized_by: 'owner', verdict: 'accepted', accepted_at: new Date().toISOString(),
    run: 'r', id, group: 'h', before_file: 'research/before.md', before_raw_sha256: sha(f.before),
    pre_sha256: itemHashGuard(f.before), corrected_file: 'research/corrected.md', corrected_raw_sha256: sha(corrected),
    content_sha256: itemHashGuard(corrected), prior_publication_commit: f.receipt.prior_publication_commit,
    delegated_file: 'research/delegated.json', delegated_sha256: sha(delegatedRaw), delegated_pointer: `/${shape}/0` };
  const putAcceptance = () => writeFileSync(join(f.root, 'research/acceptance.json'), JSON.stringify(acceptance));
  putAcceptance();
  rmSync(join(f.root, 'research/r-step3-published-claims.jsonl'));
  const adopt = () => spawnSync(process.execPath, [join(REPO, 'tools/published-repairs.mjs'), 'adopt',
    '--run', 'r', '--root', f.root, '--file', 'research/acceptance.json', '--receipt', 'research/adoption.json'], { encoding: 'utf8' });
  const finalize = () => {
    const now = new Date().toISOString();
    for (const check of Object.values(f.receipt.local_checks) as any[]) check.checked_at = now;
    f.receipt.recorded_at = now;
    f.putReceipt();
  };
  return { ...f, acceptance, delegated, putAcceptance, adopt, finalize };
}

for (const shape of ['actual_source_repairs', 'items']) test(`owner adoption authenticates ${shape} without audit or native credit`, t => {
  const f = adoptedFixture(t, shape);
  const started = Date.now();
  const result = f.adopt();
  assert.equal(result.status, 0, result.stderr);
  const claim = JSON.parse(readFileSync(join(f.root, 'research/r-step3-published-claims.jsonl'), 'utf8'));
  assert.equal(claim.claim_kind, 'owner-adopted-delegated-repair');
  assert.ok(Date.parse(claim.claimed_at) >= started);
  assert.equal(f.check().ok, false, 'old local checks cannot be reused');
  f.finalize();
  assert.equal(f.check().ok, true);
  assert.equal(f.check(f.current.replace('verification:\n', 'verification:\n  precheck: pass\n')).ok, true);
  assert.notEqual(f.adopt().status, 0, 'existing claim cannot be replaced');
  assert.equal(f.depcheck().status, 0);
});

for (const defect of ['wrong-run', 'wrong-owner', 'wrong-id', 'wrong-source', 'wrong-pointer', 'missing-delegate',
  'changed-delegate', 'wrong-before-record', 'wrong-current-record', 'forged-before', 'unbound-snapshot',
  'current-body', 'missing-commit', 'nonancestor', 'unpublished-ancestor', 'not-owner', 'not-accepted', 'future-acceptance']) {
  test(`adoption rejects ${defect} before writing ownership`, t => {
    const f = adoptedFixture(t), a = f.acceptance;
    if (defect === 'wrong-run') a.run = 'other';
    if (defect === 'wrong-owner') a.group = 'other';
    if (defect === 'wrong-id') a.id = 'thm-other';
    if (defect === 'wrong-source') a.corrected_file = 'research/before.md';
    if (defect === 'wrong-pointer') a.delegated_pointer = '/existing_consumers/0';
    if (defect === 'missing-delegate') rmSync(join(f.root, 'research/delegated.json'));
    if (defect === 'changed-delegate') writeFileSync(join(f.root, 'research/delegated.json'), '{}');
    if (defect === 'wrong-before-record' || defect === 'wrong-current-record' || defect === 'wrong-owner') {
      if (defect === 'wrong-before-record') f.delegated.actual_source_repairs[0].before.sha256 = '0'.repeat(64);
      if (defect === 'wrong-current-record') f.delegated.actual_source_repairs[0].current.path = 'items/thm-other.md';
      // Owner group is explicitly bound by the acceptance, not invented by the delegate.
      if (defect === 'wrong-owner') a.authorized_by = 'other';
      const raw = JSON.stringify(f.delegated);
      writeFileSync(join(f.root, 'research/delegated.json'), raw); a.delegated_sha256 = sha(raw);
    }
    if (defect === 'forged-before') {
      const before = f.before.replace('Original.', 'Fabricated.');
      writeFileSync(join(f.root, 'research/before.md'), before);
      a.before_raw_sha256 = sha(before); a.pre_sha256 = itemHashGuard(before);
      f.delegated.actual_source_repairs[0].before.sha256 = sha(before);
      const raw = JSON.stringify(f.delegated); writeFileSync(join(f.root, 'research/delegated.json'), raw); a.delegated_sha256 = sha(raw);
    }
    if (defect === 'unbound-snapshot') writeFileSync(join(f.root, 'research/corrected.md'), f.current + 'changed');
    if (defect === 'current-body') writeFileSync(join(f.root, 'items', `${id}.md`), f.current + 'changed');
    if (defect === 'missing-commit') delete a.prior_publication_commit;
    if (defect === 'nonancestor') {
      const ancestor = a.prior_publication_commit;
      f.git('checkout', '--orphan', 'unrelated');
      writeFileSync(join(f.root, 'items', `${id}.md`), auditedBefore);
      a.prior_publication_commit = f.commit('2026-09-30T01:00:00Z');
      f.git('checkout', '--detach', ancestor);
      writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
    }
    if (defect === 'unpublished-ancestor') {
      writeFileSync(join(f.root, 'items', `${id}.md`), auditedBefore.replace('published', 'draft'));
      a.prior_publication_commit = f.commit();
      writeFileSync(join(f.root, 'items', `${id}.md`), f.current);
    }
    if (defect === 'not-owner') a.authorized_by = 'delegate';
    if (defect === 'not-accepted') a.verdict = 'pending';
    if (defect === 'future-acceptance') a.accepted_at = '2999-01-01T00:00:00Z';
    f.putAcceptance();
    assert.notEqual(f.adopt().status, 0);
    assert.equal(readFileSync(join(f.root, 'research/acceptance.json'), 'utf8').length > 0, true);
    assert.throws(() => readFileSync(join(f.root, 'research/r-step3-published-claims.jsonl')));
  });
}

for (const defect of ['receipt-hash', 'receipt-identity', 'acceptance-hash', 'delegated-hash', 'claim-kind', 'downgraded-kind', 'missing-kind', 'claim-owner', 'receipt-owner',
  'commit', 'current-body', 'ledger', 'stale-precheck', 'failed-rendercheck', 'pre-adoption-check']) {
  test(`recorded repair reauthenticates adoption and rejects ${defect}`, t => {
    const f = adoptedFixture(t);
    assert.equal(f.adopt().status, 0);
    f.finalize();
    assert.equal(f.check().ok, true);
    const claimPath = join(f.root, 'research/r-step3-published-claims.jsonl');
    const claim = JSON.parse(readFileSync(claimPath, 'utf8'));
    if (defect === 'receipt-hash') writeFileSync(join(f.root, 'research/adoption.json'), '{}');
    if (defect === 'receipt-identity') {
      const adoption = JSON.parse(readFileSync(join(f.root, 'research/adoption.json'), 'utf8'));
      adoption.run = 'other';
      const raw = JSON.stringify(adoption);
      writeFileSync(join(f.root, 'research/adoption.json'), raw);
      claim.adoption_sha256 = sha(raw);
    }
    if (defect === 'acceptance-hash') { f.acceptance.group = 'other'; f.putAcceptance(); }
    if (defect === 'delegated-hash') writeFileSync(join(f.root, 'research/delegated.json'), '{}');
    if (defect === 'claim-kind') claim.claim_kind = 'unknown';
    if (defect === 'downgraded-kind') claim.claim_kind = 'pre-edit';
    if (defect === 'missing-kind') delete claim.claim_kind;
    if (defect === 'claim-owner') claim.group = 'other';
    if (defect === 'receipt-owner') f.receipt.group = 'other';
    if (defect === 'commit') f.receipt.prior_publication_commit = '0'.repeat(40);
    if (defect === 'current-body') writeFileSync(join(f.root, 'items', `${id}.md`), f.current + 'changed');
    if (defect === 'ledger') writeFileSync(join(f.root, 'research/published-consumer-supplier-ledger.md'), 'changed');
    if (defect === 'stale-precheck') f.receipt.local_checks.precheck.content_sha256 = '0'.repeat(64);
    if (defect === 'failed-rendercheck') f.receipt.local_checks.rendercheck.exit_code = 1;
    if (defect === 'pre-adoption-check') f.receipt.local_checks.precheck.checked_at = '2026-10-01T00:00:00Z';
    writeFileSync(claimPath, JSON.stringify(claim)); f.putReceipt();
    assert.equal(f.check(readFileSync(join(f.root, 'items', `${id}.md`), 'utf8')).ok, false);
  });
}

function chainedFixture(t: any) {
  const f = adoptedFixture(t);
  const intermediate = f.current.replace('Corrected.', 'Intermediate delegated repair.');
  writeFileSync(join(f.root, 'research/intermediate.md'), intermediate);
  f.delegated.actual_source_repairs[0].current.sha256 = sha(intermediate);
  const firstRaw = JSON.stringify(f.delegated);
  writeFileSync(join(f.root, 'research/delegated.json'), firstRaw);
  const second = { version: 1, run: 'r', agent: '/root/second-repair', lane: 'integration',
    items: [{ id, original: { path: 'research/before.md', sha256: sha(f.before) },
      integrated_preimage: { path: 'research/intermediate.md', sha256: sha(intermediate) },
      current: { path: `items/${id}.md`, sha256: sha(f.current) } }] };
  const secondRaw = JSON.stringify(second);
  writeFileSync(join(f.root, 'research/second.json'), secondRaw);
  for (const key of ['delegated_file', 'delegated_sha256', 'delegated_pointer']) delete f.acceptance[key];
  f.acceptance.delegated_chain = [
    { file: 'research/delegated.json', sha256: sha(firstRaw), pointer: '/actual_source_repairs/0',
      before_field: 'before', corrected_file: 'research/intermediate.md' },
    { file: 'research/second.json', sha256: sha(secondRaw), pointer: '/items/0',
      before_field: 'integrated_preimage', corrected_file: 'research/corrected.md' },
  ];
  f.putAcceptance();
  return f;
}

test('explicit delegated chain authenticates ancestor through genuine intermediate snapshots', t => {
  const f = chainedFixture(t), result = f.adopt();
  assert.equal(result.status, 0, result.stderr);
  f.finalize();
  assert.equal(f.check().ok, true);
  writeFileSync(join(f.root, 'research/intermediate.md'), 'fabricated intermediate');
  assert.equal(f.check().ok, false, 'policy reauthenticates each chain snapshot');
});

for (const defect of ['disconnected', 'swapped', 'final-endpoint', 'wrong-before-field', 'mixed-single-chain', 'changed-artifact'])
  test(`delegated chain rejects ${defect}`, t => {
    const f = chainedFixture(t), chain = f.acceptance.delegated_chain;
    if (defect === 'disconnected') chain[1].before_field = 'original';
    if (defect === 'swapped') chain.reverse();
    if (defect === 'final-endpoint') chain.pop();
    if (defect === 'wrong-before-field') chain[0].before_field = 'integrated_preimage';
    if (defect === 'mixed-single-chain') f.acceptance.delegated_file = 'research/delegated.json';
    if (defect === 'changed-artifact') writeFileSync(join(f.root, 'research/second.json'), '{}');
    f.putAcceptance();
    assert.notEqual(f.adopt().status, 0);
    assert.throws(() => readFileSync(join(f.root, 'research/r-step3-published-claims.jsonl')));
  });

function refreshFixture(t: any) {
  const f = adoptedFixture(t), initial = f.adopt();
  assert.equal(initial.status, 0, initial.stderr);
  const claimsPath = join(f.root, 'research/r-step3-published-claims.jsonl');
  const previousClaim = JSON.parse(readFileSync(claimsPath, 'utf8'));
  const before = f.current.replace('verification:\n', 'verification:\n  precheck: pass\n');
  const formatted = before.replace('Corrected.', 'Formatted corrected.');
  writeFileSync(join(f.root, 'research/format-before.md'), before);
  writeFileSync(join(f.root, 'research/formatted.md'), formatted);
  writeFileSync(join(f.root, 'items', `${id}.md`), formatted);
  const formatter: any = { version: 1, run: 'r', agent: '/root/formatter', lane: 'mechanical-normalization',
    actual_source_repairs: [{ id, before: { path: 'research/format-before.md', sha256: sha(before) },
      current: { path: `items/${id}.md`, sha256: sha(formatted) } }] };
  const formatterRaw = JSON.stringify(formatter);
  writeFileSync(join(f.root, 'research/formatter.json'), formatterRaw);
  const acceptance: any = { ...f.acceptance, accepted_at: new Date().toISOString(),
    corrected_file: 'research/formatted.md', corrected_raw_sha256: sha(formatted), content_sha256: itemHashGuard(formatted),
    previous_claim_sha256: sha(JSON.stringify(previousClaim)), delegated_file: 'research/formatter.json',
    delegated_sha256: sha(formatterRaw), delegated_pointer: '/actual_source_repairs/0' };
  const putAcceptance = () => writeFileSync(join(f.root, 'research/refresh-acceptance.json'), JSON.stringify(acceptance));
  putAcceptance();
  const refresh = (command = 'adopt-refresh') => spawnSync(process.execPath, [join(REPO, 'tools/published-repairs.mjs'), command,
    '--run', 'r', '--root', f.root, '--file', 'research/refresh-acceptance.json', '--receipt', 'research/refresh-adoption.json',
    '--history', 'research/refresh-history.json'], { encoding: 'utf8' });
  const finalize = () => {
    const content = itemHashGuard(formatted);
    f.receipt.content_sha256 = content;
    for (const check of Object.values(f.receipt.local_checks) as any[]) check.content_sha256 = content;
    const path = join(f.root, 'research/published-consumer-supplier-ledger.md');
    const ledger = readFileSync(path, 'utf8').replace(itemHashGuard(f.current), content);
    writeFileSync(path, ledger);
    f.receipt.ledger_sha256 = sha(ledger.split(':begin -->')[1].split('<!-- local-published-repair:')[0]);
    f.finalize();
  };
  const check = () => recordedPublishedRepair(f.root, id, formatted, receiptPath);
  return { ...f, acceptance, formatter, before, formatted, previousClaim, claimsPath, putAcceptance, refresh, finalize, check };
}

test('explicit adoption refresh preserves complete history and permits only initial verification-only guard join', t => {
  const f = refreshFixture(t);
  const oldClaim = readFileSync(f.claimsPath, 'utf8');
  const unrelated = '  {"version":1,"run":"r","id":"thm-unrelated","group":"other"}  ';
  writeFileSync(f.claimsPath, oldClaim + unrelated + '\n');
  const oldAdoption = readFileSync(join(f.root, 'research/adoption.json'), 'utf8');
  const oldAcceptance = readFileSync(join(f.root, 'research/acceptance.json'), 'utf8');
  const started = Date.now(), result = f.refresh();
  assert.equal(result.status, 0, result.stderr);
  const claim = JSON.parse(readFileSync(f.claimsPath, 'utf8').split('\n')[0]);
  assert.ok(Date.parse(claim.claimed_at) >= started);
  const history = JSON.parse(readFileSync(join(f.root, 'research/refresh-history.json'), 'utf8'));
  assert.deepEqual(history.previous_claim, JSON.parse(oldClaim));
  assert.equal(history.previous_claim_raw, oldClaim.trim());
  assert.ok(readFileSync(f.claimsPath, 'utf8').endsWith(unrelated + '\n'), 'unrelated claim bytes preserved');
  assert.equal(history.previous_adoption_raw, oldAdoption);
  assert.equal(history.previous_acceptance_raw, oldAcceptance);
  assert.equal(readFileSync(join(f.root, 'research/adoption.json'), 'utf8'), oldAdoption);
  assert.equal(readFileSync(join(f.root, 'research/acceptance.json'), 'utf8'), oldAcceptance);
  assert.equal(f.check().ok, false, 'old checks and old repair receipt cannot certify refreshed content');
  f.finalize();
  assert.equal(f.check().ok, true);
  assert.notEqual(f.refresh().status, 0, 'cannot overwrite history or receipt');
});

for (const defect of ['predecessor-guard', 'pre-edit-claim', 'wrong-prehash', 'wrong-owner', 'wrong-run', 'wrong-id',
  'wrong-original', 'wrong-commit', 'missing-predecessor-binding', 'wrong-predecessor-binding', 'stale-formatter',
  'forged-predecessor', 'ordinary-adopt']) test(`adoption refresh rejects ${defect}`, t => {
    const f = refreshFixture(t), a = f.acceptance;
    if (defect === 'predecessor-guard') {
      const before = f.before.replace('Corrected.', 'Unrelated mathematical predecessor.');
      writeFileSync(join(f.root, 'research/format-before.md'), before);
      f.formatter.actual_source_repairs[0].before.sha256 = sha(before);
      const raw = JSON.stringify(f.formatter); writeFileSync(join(f.root, 'research/formatter.json'), raw); a.delegated_sha256 = sha(raw);
    }
    if (defect === 'pre-edit-claim') {
      const claim = { ...f.previousClaim, claim_kind: 'pre-edit' };
      writeFileSync(f.claimsPath, JSON.stringify(claim));
      a.previous_claim_sha256 = sha(JSON.stringify(claim));
    }
    if (defect === 'wrong-prehash') a.pre_sha256 = '0'.repeat(64);
    if (defect === 'wrong-owner') a.group = 'other';
    if (defect === 'wrong-run') a.run = 'other';
    if (defect === 'wrong-id') a.id = 'thm-other';
    if (defect === 'wrong-original') a.before_file = 'research/format-before.md';
    if (defect === 'wrong-commit') a.prior_publication_commit = '0'.repeat(40);
    if (defect === 'missing-predecessor-binding') delete a.previous_claim_sha256;
    if (defect === 'wrong-predecessor-binding') a.previous_claim_sha256 = '0'.repeat(64);
    if (defect === 'stale-formatter') writeFileSync(join(f.root, 'research/formatter.json'), '{}');
    if (defect === 'forged-predecessor') writeFileSync(join(f.root, 'research/adoption.json'), '{}');
    f.putAcceptance();
    const before = readFileSync(f.claimsPath, 'utf8');
    assert.notEqual(f.refresh(defect === 'ordinary-adopt' ? 'adopt' : 'adopt-refresh').status, 0);
    assert.equal(readFileSync(f.claimsPath, 'utf8'), before);
    assert.throws(() => readFileSync(join(f.root, 'research/refresh-history.json')));
  });

for (const defect of ['history-bytes', 'history-predecessor', 'previous-adoption', 'previous-acceptance', 'previous-snapshot',
  'formatter-preimage', 'pre-refresh-check']) test(`recorded repair reauthenticates refreshed history: ${defect}`, t => {
    const f = refreshFixture(t), result = f.refresh();
    assert.equal(result.status, 0, result.stderr);
    f.finalize(); assert.equal(f.check().ok, true);
    if (defect === 'history-bytes') writeFileSync(join(f.root, 'research/refresh-history.json'), '{}');
    if (defect === 'history-predecessor') {
      // Even rehashing the outer carriers cannot manufacture an earlier claim.
      const historyPath = join(f.root, 'research/refresh-history.json');
      const h = JSON.parse(readFileSync(historyPath, 'utf8'));
      h.previous_claim.claimed_at = '2026-09-01T00:00:00Z';
      h.previous_claim_raw = JSON.stringify(h.previous_claim); h.previous_claim_sha256 = sha(h.previous_claim_raw);
      const historyRaw = JSON.stringify(h); writeFileSync(historyPath, historyRaw);
      const adoptionPath = join(f.root, 'research/refresh-adoption.json');
      const adoption = JSON.parse(readFileSync(adoptionPath, 'utf8'));
      adoption.previous_claim = h.previous_claim; adoption.previous_history_sha256 = sha(historyRaw);
      const raw = JSON.stringify(adoption); writeFileSync(adoptionPath, raw);
      const claim = JSON.parse(readFileSync(f.claimsPath, 'utf8')); claim.adoption_sha256 = sha(raw);
      writeFileSync(f.claimsPath, JSON.stringify(claim));
    }
    if (defect === 'previous-adoption') writeFileSync(join(f.root, 'research/adoption.json'), '{}');
    if (defect === 'previous-acceptance') writeFileSync(join(f.root, 'research/acceptance.json'), '{}');
    if (defect === 'previous-snapshot') writeFileSync(join(f.root, 'research/corrected.md'), 'forged previous snapshot');
    if (defect === 'formatter-preimage') writeFileSync(join(f.root, 'research/format-before.md'), 'forged formatter preimage');
    if (defect === 'pre-refresh-check') {
      f.receipt.local_checks.precheck.checked_at = f.previousClaim.claimed_at; f.putReceipt();
    }
    assert.equal(f.check().ok, false);
  });

// Two hashes are both called `item_sha256` on disk, and they are not the same.
//
// WHY. `itemHashGuard` excludes the whole `verification:` block and answers
// "did the mathematics change?" — it is what a touchlog baseline holds and what
// step8-guard matches a confirmed_fatal adjudication against. `itemHashJudge`
// excludes only the two-space-indented `judge:` sub-block and answers "is this
// verdict still about this text?" — it is what judge.mts writes on a verdict row
// and what apply-judge-stamps validates a stamp with.
//
// Both were spelled inline, in four files, under the one name `item_sha256`.
// That is invisible until it isn't: a row carrying the judge form can never
// match a guard-form baseline, and step8-guard reads the non-match as an
// unlicensed edit — a false `nonfatal-edit` on a repair that was licensed.
// Now they live in tools/item-hash.mjs under names that cannot be confused, and
// the two error messages that consume them say which form they expect.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  itemHashGuard, itemHashJudge, stripVerification, stripJudgeStamp,
} from '../../item-hash.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const ITEM = `---
id: thm-demo
title: A demonstration
deps: [def-widget]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  audited: 2026-08-01
  judge:
    lineup: terra
    at: 2026-08-02
---

## Statement

Every widget is blue.

## Proof

1.1 By assumption.
`;

test('the two forms differ on an item whose verification block contains judge:', () => {
  assert.notEqual(itemHashGuard(ITEM), itemHashJudge(ITEM),
    'if these agree the distinction this module exists for has been lost');
});

test('the guard form ignores every verification field; the judge form ignores only judge:', () => {
  const auditedLater = ITEM.replace('audited: 2026-08-01', 'audited: 2026-09-30');
  assert.equal(itemHashGuard(auditedLater), itemHashGuard(ITEM),
    'an owner audit date is not a mathematical change');
  assert.notEqual(itemHashJudge(auditedLater), itemHashJudge(ITEM),
    'a verdict cast before an owner audit is not evidence about the audited text');

  const restamped = ITEM.replace('    at: 2026-08-02', '    at: 2026-11-11');
  assert.equal(itemHashJudge(restamped), itemHashJudge(ITEM),
    'stamping a pass must not invalidate the pass it records');
});

test('a first judge stamp and its otherwise-empty verification parent are both hash-neutral', () => {
  const withoutVerification = ITEM.replace(
    /verification:\n  precheck: pass\n  audited: 2026-08-01\n  judge:\n    lineup: terra\n    at: 2026-08-02\n/,
    'sources:\n  references: []\n',
  );
  const stamped = withoutVerification.replace(
    'sources:\n',
    'verification:\n  judge:\n    lineup: terra\n    at: 2026-08-02\nsources:\n',
  );
  assert.equal(itemHashJudge(stamped), itemHashJudge(withoutVerification),
    'creating the verification container for a first stamp must preserve verdict currency');
  assert.doesNotMatch(stripJudgeStamp(stamped), /^verification:$/m,
    'the empty parent left by stripping the stamp must also be removed');
});

test('both forms bind the mathematics, in frontmatter as well as the body', () => {
  for (const changed of [
    ITEM.replace('Every widget is blue.', 'Every widget is red.'),
    ITEM.replace('deps: [def-widget]', 'deps: [def-widget, def-gadget]'),
    ITEM.replace('title: A demonstration', 'title: A stronger demonstration'),
  ]) {
    assert.notEqual(itemHashGuard(changed), itemHashGuard(ITEM));
    assert.notEqual(itemHashJudge(changed), itemHashJudge(ITEM));
  }
});

test('the strippers do what their names say', () => {
  assert.doesNotMatch(stripVerification(ITEM), /verification:|precheck:|judge:/);
  assert.match(stripJudgeStamp(ITEM), /verification:/);
  assert.match(stripJudgeStamp(ITEM), /precheck: pass/);
  assert.doesNotMatch(stripJudgeStamp(ITEM), /judge:/);
});

test('judge.mts --context-hash reports exactly itemHashJudge of the file, and not the guard form', () => {
  const file = join(REPO, 'items', 'lem-cauchy-bounded.md');
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'tsx-run.mjs'), join(REPO, 'tools', 'judge.mts'), file, '--context-hash'],
    { cwd: REPO, encoding: 'utf8', timeout: 180_000 });
  assert.equal(r.status, 0, `${r.stdout}${r.stderr}`);
  const out = JSON.parse(r.stdout);
  const text = readFileSync(file, 'utf8');
  assert.equal(out.item_sha256, itemHashJudge(text));
  assert.notEqual(out.item_sha256, itemHashGuard(text));
});

test('nothing keeps a private copy of either normalisation any more', () => {
  const inline = [
    // the judge form, verbatim as it stood in judge.mts and apply-judge-stamps
    /\{ 2\}judge:\\n\(\?: \{4\}\.\*\\n\)\*/,
    // the guard form, verbatim as it stood in spine-audit
    /\^verification:\(\?:\\n\(\?:\[ \\t\]\+\.\*\\n\?\)\*/,
  ];
  for (const tool of ['judge.mts', 'apply-judge-stamps.mjs', 'spine-audit.mjs',
    'touchlog.mjs', 'step8-guard.mjs']) {
    const src = readFileSync(join(REPO, 'tools', tool), 'utf8');
    for (const re of inline) {
      assert.doesNotMatch(src, re, `${tool} still spells a normalisation inline`);
    }
    assert.match(src, /from ['"]\.\/item-hash\.mjs['"]/, `${tool} does not import the shared hashes`);
  }
});

test('the errors that consume these hashes say which form they expect', () => {
  const guard = readFileSync(join(REPO, 'tools', 'step8-guard.mjs'), 'utf8');
  assert.match(guard, /itemHashGuard/, 'judge-adjudication-unhashed must name the guard form');
  assert.match(guard, /NOT the judge-ledger form/i);
  assert.match(guard, /nonfatal-edit/);

  const coverage = readFileSync(join(REPO, 'tools', 'level-coverage.mjs'), 'utf8');
  const block = coverage.slice(coverage.indexOf("error('judge-adjudication-unhashed'"));
  assert.match(block.slice(0, 900), /itemHashGuard/,
    'level-coverage must say which of the two item_sha256 forms it validates');
  assert.match(block.slice(0, 900), /itemHashJudge/,
    'and must name the one it is NOT');
});

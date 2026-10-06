import { test } from 'node:test';
import assert from 'node:assert/strict';
import { activeOwnershipRows } from './defect-ledger-ownership.mjs';
const row = (id, subject = 'item', extra = {}) => ({ defect_id: id, run: 'r', subject, ...extra });
test('append-only genuine ownership corrections retain originals and newest exact owner', () => {
  const old = row('old'), corrected = row('corrected', 'item', { supersedes: ['old'] });
  const ledger = [old, corrected], before = JSON.stringify(ledger), errors = [];
  assert.deepEqual(activeOwnershipRows(ledger, errors), [corrected]);
  assert.deepEqual(errors, []);
  assert.equal(JSON.stringify(ledger), before);
});
test('transitive ownership correction projects to latest exact same-subject row', () => {
  const ledger = [row('old'), row('middle', 'item', { supersedes: ['old'] }), row('latest', 'item', { supersedes: ['middle'] })];
  const errors = [];
  assert.deepEqual(activeOwnershipRows(ledger, errors), [ledger[2]]);
  assert.deepEqual(errors, []);
});
for (const [name, ledger, pattern] of [
  ['missing predecessor', [row('new', 'item', { supersedes: ['missing'] })], /not an earlier ledger row/],
  ['future predecessor', [row('old', 'item', { supersedes: ['new'] }), row('new')], /not an earlier ledger row/],
  ['cycle', [row('old', 'item', { supersedes: ['new'] }), row('new', 'item', { supersedes: ['old'] })], /not an earlier ledger row/],
  ['other subject', [row('old', 'different'), row('new', 'item', { supersedes: ['old'] })], /same run and subject/],
  ['other run', [row('old', 'item', { run: 'other' }), row('new', 'item', { supersedes: ['old'] })], /same run and subject/],
  ['empty map', [row('new', 'item', { supersedes: [] })], /nonempty array/],
  ['duplicate references', [row('old'), row('new', 'item', { supersedes: ['old', 'old'] })], /unique defect ids/],
]) test(`invalid ownership mapping blocks ${name}`, () => {
  const errors = []; activeOwnershipRows(ledger, errors);
  assert(errors.some(x => pattern.test(x)), JSON.stringify(errors));
});

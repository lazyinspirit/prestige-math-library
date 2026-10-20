import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { alphabeticLabel, generateAssignment, validateAssignment } from './alpha-group-assignment.mjs';
import { MAX_GROUPS, MAX_BATCHES_PER_GROUP } from './autopilot/src/capacity.mjs';
const limits = { maxGroups: MAX_GROUPS, maxBatches: MAX_BATCHES_PER_GROUP };
const batches = categories => categories.map((category, index) => ({ id: String(index + 1), categories: [category] }));
function assertComplete(groups, batchMetadata) {
  assert.deepEqual(groups.flatMap(group => group.covers).sort((a, b) => Number(a) - Number(b)), batchMetadata.map(batch => batch.id));
  assert.ok(groups.every(group => group.covers.length <= 3));
  assert.ok(groups.length <= MAX_GROUPS);
  assert.deepEqual(validateAssignment(groups, batchMetadata, limits).errors, []);
}
test('40 batches are covered exactly once, deterministically, without load or edge data', () => {
  const metadata = batches([...Array(21).fill('relativity'), ...Array(19).fill('electromagnetism')]);
  const groups = generateAssignment(metadata, limits);
  assertComplete(groups, metadata);
  assert.deepEqual(generateAssignment([...metadata].reverse(), limits), groups);
  assert.equal(groups.length, 14);
});
test('80 batches require 27 legal groups including aa, with stable larger-category chunks', () => {
  const metadata = batches(Array.from({ length: 80 }, (_, index) => `category-${String(Math.floor(index / 5)).padStart(2, '0')}`));
  const groups = generateAssignment(metadata, limits);
  assertComplete(groups, metadata);
  assert.equal(groups.length, 27);
  assert.equal(groups[26].label, 'aa');
  assert.equal(alphabeticLabel(25), 'z'); assert.equal(alphabeticLabel(51), 'az'); assert.equal(alphabeticLabel(52), 'ba');
});
test('80 batches in forty two-batch categories retain cohesion without an artificial 27-group ceiling', () => {
  const metadata = batches(Array.from({ length: 80 }, (_, index) => `paired-${String(Math.floor(index / 2)).padStart(2, '0')}`));
  const groups = generateAssignment(metadata, limits);
  assertComplete(groups, metadata);
  assert.equal(groups.length, 40);
  assert.ok(groups.every(group => group.covers.length === 2));
  assert.equal(MAX_GROUPS, 80);
});
test('categories fitting one group stay together even with interleaved batch IDs', () => {
  const metadata = batches(['a', 'b', 'a', 'c', 'b', 'a', 'b', 'd']);
  const groups = generateAssignment(metadata, limits);
  assertComplete(groups, metadata);
  assert.ok(groups.some(group => group.covers.join(',') === '1,3,6'));
  assert.ok(groups.some(group => group.covers.join(',') === '2,5,7'));
});
test('overlapping small categories stay together; infeasible cohesion or capacity fails explicitly', () => {
  const metadata = [ { id: '1', categories: ['a'] }, { id: '2', categories: ['a', 'b'] }, { id: '3', categories: ['b'] } ];
  assert.equal(generateAssignment(metadata, limits).length, 1);
  metadata.push({ id: '4', categories: ['b'] });
  assert.throws(() => generateAssignment(metadata, limits), /Category cohesion/);
  assert.throws(() => generateAssignment(batches(Array(4).fill('large')), { ...limits, maxGroups: 1 }), /capacity is 1/);
});
test('structural validator rejects missing, duplicate, oversized, split, empty and invalid-label groups', () => {
  const metadata = batches(['a', 'a', 'b', 'b']);
  const valid = generateAssignment(metadata, limits);
  for (const mutate of [
    groups => groups.pop(), groups => groups[0].covers.push(groups[1].covers[0]),
    groups => groups[0].covers.push('99'), groups => groups[0].covers = [],
    groups => groups[0].label = 'a1', groups => groups[1].label = groups[0].label,
    groups => groups[0].rationale = '',
    groups => { groups[0].covers = ['1', '3']; groups[1].covers = ['2', '4']; },
  ]) { const groups = structuredClone(valid); mutate(groups); assert.ok(validateAssignment(groups, metadata, limits).errors.length); }
  assert.ok(validateAssignment(valid, metadata, { ...limits, maxGroups: 1 }).errors.length);
});
const repo = fileURLToPath(new URL('../', import.meta.url));
for (const tool of ['tools/alpha-groups.mjs', 'tools/physics-support/alpha-groups.mjs']) {
  test(`${tool}: bounded native generation validates and preserves a valid artifact byte-for-byte`, t => {
    const dir = mkdtempSync(join(tmpdir(), 'alpha-assignment-'));
    t.after(() => rmSync(dir, { recursive: true, force: true }));
    mkdirSync(join(dir, 'research'));
    for (let index = 1; index <= 80; index++) writeFileSync(join(dir, 'research', `demo-batch-${index}.pages.json`),
      JSON.stringify([{ category: 'physics', items: 'deliberately irrelevant to assignment', deps: null }]));
    const run = args => spawnSync(process.execPath, [join(repo, tool), '--run', 'demo', ...args], { cwd: dir, encoding: 'utf8', timeout: 5000 });
    assert.equal(run(['--generate']).status, 0);
    assert.equal(run([]).status, 0);
    const path = join(dir, 'research/demo-alpha-groups.json');
    const groups = JSON.parse(readFileSync(path, 'utf8'));
    assert.equal(groups.length, 27); assert.equal(groups[26].label, 'aa');
    // Preserve a valid historical wrapped/custom assignment, not just our own serialization.
    groups.reverse(); groups[0].rationale = 'Existing accepted assignment reason retained exactly.';
    writeFileSync(path, JSON.stringify({ groups, historical_note: 'preserve' }));
    const before = readFileSync(path, 'utf8'), mtime = statSync(path).mtimeMs;
    const again = run(['--generate', '--json']);
    assert.equal(again.status, 0, again.stderr);
    assert.equal(JSON.parse(again.stdout).summary.reused, true);
    assert.equal(readFileSync(path, 'utf8'), before); assert.equal(statSync(path).mtimeMs, mtime);
    assert.notEqual(run(['--generate', '--max-batches', '4']).status, 0);
    assert.notEqual(run(['--generate', '--max-groups', '81']).status, 0);
    assert.equal(readFileSync(path, 'utf8'), before);
    // Malformed historical output is archived as bytes before regeneration.
    const malformed = Buffer.from('{ malformed prior assignment\n\xff', 'latin1');
    writeFileSync(path, malformed);
    assert.equal(run(['--generate']).status, 0);
    const history = join(dir, 'research/demo-alpha-groups-history', `${createHash('sha256').update(malformed).digest('hex')}.json`);
    assert.deepEqual(readFileSync(history), malformed);
    assert.deepEqual(validateAssignment(JSON.parse(readFileSync(path, 'utf8')),
      batches(Array(80).fill('physics')), limits).errors, []);
    assert.equal(run(['--generate']).status, 0);
    assert.deepEqual(readFileSync(history), malformed);
    const invalid = Buffer.from(JSON.stringify([{ label: 'a', covers: ['1', '1'], rationale: 'Duplicate historical batch ownership must be preserved.' }]));
    writeFileSync(path, invalid);
    assert.equal(run(['--generate']).status, 0);
    const invalidHistory = join(dir, 'research/demo-alpha-groups-history', `${createHash('sha256').update(invalid).digest('hex')}.json`);
    assert.deepEqual(readFileSync(invalidHistory), invalid);
    assert.equal(JSON.parse(readFileSync(path, 'utf8')).length, 27);
  });
}

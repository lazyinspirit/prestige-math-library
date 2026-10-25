import test from 'node:test';
import assert from 'node:assert/strict';
import { stampObservation, verifyNativePassStamp, verifyNativeStampDelta } from './step6-judge-stamp-delta.mjs';

const block = date => `  judge:\n    model: "gpt-6-luna"\n    verdict: pass\n    date: ${date}\n`;
const source = verification => '---\nid: thm-test\nkind: theorem\nstatus: draft\n' + verification + 'sources:\n  references: []\n---\n## Statement\nA supplied finite identity.\n\n## Proof\nA complete argument.\n';
const context = { model: 'gpt-6-luna' };

for (const [name, before, after] of [
  ['no prior verification parent', source(''), source('verification:\n' + block('2026-10-25'))],
  ['precheck parent', source('verification:\n  precheck: pass\n'), source('verification:\n  precheck: pass\n' + block('2026-10-25'))],
  ['prior normal stamp', source('verification:\n  precheck: pass\n' + block('2026-10-24')), source('verification:\n  precheck: pass\n' + block('2026-10-25'))],
  ['verification-only parent', source('verification:\n' + block('2026-10-24')), source('verification:\n' + block('2026-10-25'))],
  ['native flow suffix', source('verification: {precheck: pass}\n'), source('verification: {precheck: pass, judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-25}}\n')],
]) test('only native own mapping changes are retained: ' + name, () => {
  const observed = stampObservation(before), afterObserved = verifyNativeStampDelta(after, observed, context);
  assert.equal(afterObserved.item_sha256, observed.item_sha256);
  assert.equal(afterObserved.guard_sha256, observed.guard_sha256);
  assert.notEqual(afterObserved.raw_sha256, observed.raw_sha256);
  assert.ok(Buffer.byteLength(observed.fragment.text) <= 4096);
  assert.equal(JSON.stringify(observed).includes('A complete argument.'), false);
  assert.deepEqual(verifyNativeStampDelta(after, afterObserved, context), afterObserved);
});

test('unchanged source requires no new native stamp claim', () => {
  const text = source('verification:\n  precheck: pass\n');
  assert.deepEqual(verifyNativeStampDelta(text, stampObservation(text), context), stampObservation(text));
});

test('insertion at the last frontmatter field retains the existing strict Guard boundary', () => {
  const before = source('').replace('sources:\n  references: []\n', '');
  const after = source('verification:\n' + block('2026-10-25')).replace('sources:\n  references: []\n', '');
  // The existing stripVerification implementation leaves different newline
  // bytes in this case. This helper cannot turn that mismatch into acceptance.
  assert.throws(() => verifyNativeStampDelta(after, stampObservation(before), context), /item or guard changed/);
});

for (const [name, change] of [
  ['body', text => text.replace('A complete argument.', 'A different argument.')],
  ['title', text => text.replace('kind: theorem\n', 'kind: theorem\ntitle: A new title\n')],
  ['precheck', text => text.replace('precheck: pass', 'precheck: failed')],
  ['another verification field', text => text.replace('  precheck: pass\n', '  precheck: pass\n  audited: now\n')],
]) test('native stamp validation rejects unrelated ' + name + ' delta', () => {
  const before = source('verification:\n  precheck: pass\n'), after = source('verification:\n  precheck: pass\n' + block('2026-10-25'));
  assert.throws(() => verifyNativeStampDelta(change(after), stampObservation(before), context), /item or guard changed/);
});

for (const [name, change] of [
  ['wrong model', text => text.replace('gpt-6-luna', 'gpt-6.1-sol')],
  ['wrong verdict', text => text.replace('verdict: pass', 'verdict: accepted')],
  ['extra mapping key', text => text.replace('    verdict: pass\n', '    verdict: pass\n    acceptance: true\n')],
  ['invalid ISO date', text => text.replace('2026-10-25', '2026-02-30')],
]) test('native stamp validation rejects ' + name, () => {
  const before = source('verification:\n  precheck: pass\n'), after = source('verification:\n  precheck: pass\n' + block('2026-10-25'));
  assert.throws(() => verifyNativeStampDelta(change(after), stampObservation(before), context), /exact native Luna/);
});

for (const [name, change] of [
  ['before raw hash', before => { before.raw_sha256 = 'a'.repeat(64); }],
  ['before fragment hash', before => { before.fragment.sha256 = 'a'.repeat(64); }],
  ['before fragment offset', before => { before.fragment.offset = 100000; }],
]) test('native stamp validation rejects forged ' + name, () => {
  const before = stampObservation(source('verification:\n  precheck: pass\n' + block('2026-10-24')));
  change(before);
  assert.throws(() => verifyNativeStampDelta(source('verification:\n  precheck: pass\n' + block('2026-10-25')), before, context), /before/);
});

test('multiple separated stripping regions are unsupported', () => {
  const text = source('verification: {precheck: pass, judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-24}}\nother: value\n  judge:\n    model: "gpt-6-luna"\n    verdict: pass\n    date: 2026-10-24\n');
  assert.throws(() => stampObservation(text), /not one contiguous deletion/);
});

test('observations cannot retain an oversized stamp mapping', () => {
  assert.throws(() => stampObservation(source('verification:\n  judge:\n    note: ' + 'x'.repeat(4096) + '\n')), /bounded mapping size/);
});

test('mapping-only recognition verifies an existing native pass without granting before-source authority', () => {
  const current = source('verification:\n' + block('2026-10-25')).replace('sources:\n  references: []\n', '');
  assert.deepEqual(verifyNativePassStamp(current, context), stampObservation(current));
  const before = source('').replace('sources:\n  references: []\n', '');
  assert.throws(() => verifyNativeStampDelta(current, stampObservation(before), context), /item or guard changed/);
});

for (const [name, current] of [
  ['another parent', source('other:\n' + block('2026-10-25'))],
  ['another model', source('verification:\n' + block('2026-10-25').replace('gpt-6-luna', 'gpt-6.1-sol'))],
  ['extra key', source('verification:\n' + block('2026-10-25').replace('    verdict: pass\n', '    verdict: pass\n    scope: all\n'))],
  ['absent stamp', source('verification:\n  precheck: pass\n')],
]) test('mapping-only recognition rejects ' + name, () => {
  assert.throws(() => verifyNativePassStamp(current, context), /another parent|exact native Luna|outside frontmatter/);
});

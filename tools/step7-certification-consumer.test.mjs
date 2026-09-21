import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { loadStep7ClosureCertification, currentStep7Certification, stripStep7JudgeStamp } from './step7-certification-consumer.mjs';
import { digest } from './step7-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';

const text = '---\nid: thm-test\ntitle: Test\n---\nA complete argument.\n';
const row = { id: 'thm-test', guard_sha256: itemHashGuard(text),
  item_sha256: itemHashJudge(text), context_sha256: 'current-context' };
const certificate = { items: [row] };

test('the consumer requires verified later-wave evidence and never closes initial certification', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'step7-consumer-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research', 'demo-step7-v2');
  mkdirSync(dir, { recursive: true });
  const evidence = join(dir, 'evidence.json');
  writeFileSync(evidence, 'verified evidence');
  const path = join(dir, 'certification.json');
  const payload = { version: 2, run: 'demo', phase: 'impact-initial', round: 1,
    items: [{ ...row, context_sha256: 'a'.repeat(64) }], evidence: { [evidence]: digest('verified evidence') } };
  const save = () => writeFileSync(path, JSON.stringify({ ...payload, sha256: digest(payload) }));
  save();
  assert.equal(loadStep7ClosureCertification(root, 'demo'), null);
  payload.phase = 'impact-repeat'; save();
  assert.equal(loadStep7ClosureCertification(root, '', 'research/demo-judge.jsonl').phase, 'impact-repeat');
  writeFileSync(evidence, 'changed evidence');
  assert.throws(() => loadStep7ClosureCertification(root, 'demo'), /evidence changed/);
  writeFileSync(evidence, 'verified evidence');
  writeFileSync(path, JSON.stringify({ ...payload, phase: 'gate', sha256: digest(payload) }));
  assert.throws(() => loadStep7ClosureCertification(root, 'demo'), /payload changed/);
});

test('central closure requires both current content and current context', () => {
  assert.equal(currentStep7Certification(certificate, row.id, text, 'current-context'), row);
  assert.equal(currentStep7Certification(certificate, row.id, text, 'changed-context'), null);
  assert.equal(currentStep7Certification(certificate, row.id, text + 'Changed.', 'current-context'), null);
  assert.equal(currentStep7Certification(certificate, 'thm-other', text, 'current-context'), null);
  assert.equal(currentStep7Certification(null, row.id, text, 'current-context'), null);
});

test('a changed certified neighbor does not revoke this item or manufacture fresh coverage', () => {
  const mixed = { items: [row, { ...row, id: 'thm-neighbor', context_sha256: 'old-context' }] };
  assert.equal(currentStep7Certification(mixed, row.id, text, 'current-context'), row);
  assert.equal(currentStep7Certification(mixed, 'thm-neighbor', text, 'new-context'), null);
});

test('central certification removes display endorsement without changing proof or precheck', () => {
  const block = 'verification:\n  precheck: pass\n  judge:\n    model: "Terra"\n    verdict: pass\n    date: 2026-09-21\nsources:\n  - Source\n';
  assert.equal(stripStep7JudgeStamp(block), 'verification:\n  precheck: pass\nsources:\n  - Source\n');
  assert.equal(stripStep7JudgeStamp('verification: {precheck: pass, judge: {model: "Terra", verdict: pass}}\n'),
    'verification: {precheck: pass}\n');
  assert.equal(stripStep7JudgeStamp('verification: {judge: {model: "Terra", verdict: pass}, precheck: pass}\n'),
    'verification: {precheck: pass}\n');
  assert.equal(stripStep7JudgeStamp('verification: {judge: {model: "Terra", verdict: pass}}\n'),
    'verification: {}\n');
  assert.equal(stripStep7JudgeStamp(text), text);
});

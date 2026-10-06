import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isCertifiedOwnerContextAddition } from '../../step5-owner-context-addition.mjs';
const id = 'rem-unproved-general-parameter-comparison';
const input = () => ({ id, batch: '2', run: 'r', item: { id, kind: 'remark', status: 'draft', pipeline_run: 'r', proved_here: false, provenance: { proof: 'not-supplied' } }, certificates: [{ id, batch: '2', evidence_class: 'owner-spawned-creation', owner_creation: { path: `research/r-step5-owner-creation-${id}.json`, sha256: 'a'.repeat(64) } }] });
test('validated current owner creation can retain explicitly unproved context as a Remark', () => assert.equal(isCertifiedOwnerContextAddition(input()), true));
for (const [name, change] of [
  ['missing creation', (x: any) => x.certificates = []],
  ['native author certification', (x: any) => x.certificates[0].evidence_class = 'auditor-created'],
  ['wrong batch', (x: any) => x.certificates[0].batch = '3'],
  ['wrong creation path', (x: any) => x.certificates[0].owner_creation.path = 'research/other.json'],
  ['invalid source binding', (x: any) => x.certificates[0].owner_creation.sha256 = 'missing'],
  ['proved context', (x: any) => x.item.proved_here = true],
  ['supplied proof', (x: any) => x.item.provenance.proof = 'ai-altered'],
  ['theorem addition', (x: any) => x.item.kind = 'theorem'],
  ['wrong run', (x: any) => x.item.pipeline_run = 'other'],
] as const) test(`ordinary scope guard still refuses ${name}`, () => { const x = input(); change(x); assert.equal(isCertifiedOwnerContextAddition(x), false); });

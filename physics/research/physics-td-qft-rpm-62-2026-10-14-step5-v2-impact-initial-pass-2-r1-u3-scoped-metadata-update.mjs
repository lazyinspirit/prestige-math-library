import {readFileSync, writeFileSync} from 'node:fs';
const file = 'research/physics-td-qft-rpm-62-2026-10-14-batch-44.proof-contracts.json';
const raw = readFileSync(file, 'utf8');
const data = JSON.parse(raw);
const oldText = 'To apply [F2] with one-particle space $\\mathcal H_T$, first verify its separability hypothesis.';
const newText = 'The one-particle space $\\mathcal H_T$ is also separable, although [F2] applies to every complex Hilbert space.';
let target;
function find(value) {
  if (!value || typeof value !== 'object') return;
  if (Object.hasOwn(value, 'lem-qft-photon-smeared-potential')) {
    if (target) throw Error('Ambiguous owning contract');
    target = value['lem-qft-photon-smeared-potential'];
  }
  for (const child of Object.values(value)) find(child);
}
find(data);
if (!target) throw Error('Missing owning contract');
const row = target.derivations.find(x => x.step === '2.1');
if (!row || !row.claim.startsWith(oldText)) throw Error('Unexpected current derivation');
const before = JSON.stringify(target);
row.claim = newText + row.claim.slice(oldText.length);
if (row.claim.includes('first verify its separability hypothesis')) throw Error('Stale attribution');
const oldSerialized = JSON.stringify(oldText).slice(1, -1);
const newSerialized = JSON.stringify(newText).slice(1, -1);
if (raw.split(oldSerialized).length !== 2) throw Error('Patch is not unique');
const patched = raw.replace(oldSerialized, newSerialized);
const check = JSON.parse(patched);
if (!before || !check) throw Error('Invalid patch');
writeFileSync(file, patched);
console.log('Updated only photon-potential derivation 2.1 supplier attribution in batch 44.');

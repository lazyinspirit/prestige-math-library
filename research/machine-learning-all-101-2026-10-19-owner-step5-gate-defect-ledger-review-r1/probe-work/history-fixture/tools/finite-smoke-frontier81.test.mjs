import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { frontier81ClassicalChecks as classical } from './finite-smoke-frontier81-classical.mjs';
import { frontier81QuantumChecks as quantum } from './finite-smoke-frontier81-quantum.mjs';
import { frontier81TLCherednikChecks as tlCherednik } from './finite-smoke-frontier81-tl-cherednik.mjs';
const groups = { classical, quantum, 'tl-cherednik': tlCherednik };
const fixtures = [
  {"group":"classical","name":"subprobability-reference-point-mass","params":{"fixture":"subprobability-reference-point-mass"}},
  {"group":"classical","name":"two-point-shannon-codes","params":{"fixture":"two-point-shannon-codes"}},
  {"group":"classical","name":"symmetric-markov-block-entropy","params":{"fixture":"symmetric-markov-block-entropy"}},
  {"group":"classical","name":"iid-bernoulli-half-conditional-block","params":{"fixture":"iid-bernoulli-half-conditional-block"}},
  {"group":"classical","name":"singleton-source-recurrence","params":{"fixture":"singleton-source-recurrence"}},
  {"group":"classical","name":"first-block-endpoints","params":{"fixture":"first-block-endpoints"}},
  {"group":"classical","name":"explicit-lz78-parse","params":{"fixture":"explicit-lz78-parse"}},
  {"group":"classical","name":"four-symbol-block-entropies","params":{"fixture":"four-symbol-block-entropies"}},
  {"group":"quantum","name":"frontier81-quantum-gentle","params":{"fixture":"frontier81-quantum-gentle-v1"}},
  {"group":"quantum","name":"frontier81-quantum-sqrt-order","params":{"fixture":"frontier81-quantum-sqrt-order-v1"}},
  {"group":"quantum","name":"frontier81-quantum-hayashi-nagaoka","params":{"fixture":"frontier81-quantum-hayashi-nagaoka-v1"}},
  {"group":"quantum","name":"frontier81-quantum-entropy-zero","params":{"fixture":"frontier81-quantum-entropy-zero-v1"}},
  {"group":"quantum","name":"frontier81-quantum-packing-one","params":{"fixture":"frontier81-quantum-packing-one-v1"}},
  {"group":"quantum","name":"frontier81-quantum-schmidt-pure","params":{"fixture":"frontier81-quantum-schmidt-pure-v1"}},
  {"group":"quantum","name":"frontier81-quantum-typical-pure","params":{"fixture":"frontier81-quantum-typical-pure-v1"}},
  {"group":"quantum","name":"frontier81-quantum-schumacher-pure","params":{"fixture":"frontier81-quantum-schumacher-pure-v1"}},
  {"group":"quantum","name":"frontier81-quantum-hsw-single","params":{"fixture":"frontier81-quantum-hsw-single-v1"}},
  {"group":"quantum","name":"frontier81-quantum-qubit-rates","params":{"fixture":"frontier81-quantum-qubit-rates-v1"}},
  {"group":"quantum","name":"frontier81-quantum-fixed-povm","params":{"fixture":"frontier81-quantum-fixed-povm-v1"}},
  {"group":"quantum","name":"frontier81-quantum-binary-pure","params":{"fixture":"frontier81-quantum-binary-pure-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-inventory","params":{"fixture":"frontier81-quantum-toric-inventory-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-ranks","params":{"fixture":"frontier81-quantum-toric-ranks-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-commutation","params":{"fixture":"frontier81-quantum-toric-commutation-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-dimension","params":{"fixture":"frontier81-quantum-toric-dimension-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-loops","params":{"fixture":"frontier81-quantum-toric-loops-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-gap","params":{"fixture":"frontier81-quantum-toric-gap-v1"}},
  {"group":"quantum","name":"frontier81-quantum-toric-worked","params":{"fixture":"frontier81-quantum-toric-worked-v1"}},
  {"group":"quantum","name":"frontier81-quantum-planar-toric","params":{"fixture":"frontier81-quantum-planar-toric-v1"}},
  {"group":"quantum","name":"frontier81-quantum-fusion-measurement","params":{"fixture":"frontier81-quantum-fusion-measurement-v1"}},
  {"group":"quantum","name":"frontier81-quantum-controlled-phase","params":{"fixture":"frontier81-quantum-controlled-phase-v1"}},
  {"group":"quantum","name":"frontier81-quantum-b6-identity","params":{"fixture":"frontier81-quantum-b6-identity-v1"}},
  {"group":"quantum","name":"frontier81-quantum-sk-budget","params":{"fixture":"frontier81-quantum-sk-budget-v1"}},
  {"group":"quantum","name":"frontier81-quantum-multiplicity-two","params":{"fixture":"frontier81-quantum-multiplicity-two-v1"}},
  {"group":"quantum","name":"frontier81-quantum-ising-periodic","params":{"fixture":"frontier81-quantum-ising-periodic-v1"}},
  {"group":"quantum","name":"frontier81-quantum-fib-projector","params":{"fixture":"frontier81-quantum-fib-projector-v1"}},
  {"group":"tl-cherednik","name":"parenthesis-enumeration-n0-through-n3","params":{"max_n":3}},
  {"group":"tl-cherednik","name":"normal-form-index-sets-n0-through-n3","params":{"max_n":3}},
  {"group":"tl-cherednik","name":"rank-zero-through-three-basis-and-product-table","params":{"max_n":3}},
  {"group":"tl-cherednik","name":"rank-three-normal-form-enumeration","params":{"n":3}},
  {"group":"tl-cherednik","name":"rank-two-loop-zero-boundary","params":{"n":2,"delta":0}},
  {"group":"tl-cherednik","name":"zero-loop-small-boundaries","params":{"method":"explicit hand calculation"}},
  {"group":"tl-cherednik","name":"TL2-zero-loop-head-counterexample","params":{"method":"explicit hand calculation"}},
  {"group":"tl-cherednik","name":"rank-three-one-defect-module","params":{"method":"explicit hand calculation"}},
  {"group":"tl-cherednik","name":"rank-one-boundary-recurrence","params":{"c":0.5,"max_degree":3}},
  {"group":"tl-cherednik","name":"weyl-commutator-on-monomials","params":{"max_degree":2}},
  {"group":"tl-cherednik","name":"rank-one-dunkl-values","params":{"c":0.5,"max_degree":2}},
  {"group":"tl-cherednik","name":"extension-obstruction-matrix","params":{"mu":2}},
  {"group":"tl-cherednik","name":"rank-one-repeated-root","params":{"c":0.5,"e":2}},
  {"group":"tl-cherednik","name":"rank-one-low-degree-reduction","params":{"max_degree":2}},
];

test('all 49 fixed finite models run with distinct, explicit selectors', () => {
  const names = Object.values(groups).flatMap(Object.keys);
  assert.equal(names.length, 49);
  assert.equal(new Set(names).size, 49);
  assert.equal(fixtures.length, 49);
  for (const {group, name, params} of fixtures) {
    const result = groups[group][name]({check: name, ...params});
    assert.equal(result.ok, true, `${name}: ${result.summary}`);
    assert.ok(result.summary.length > 20);
  }
});
test('each fixed model rejects a conflicting selector', () => {
  for (const {group, name, params} of fixtures) {
    const selector = Object.keys(params)[0];
    const invalid = {...params, [selector]: 'unsupported'};
    const result = groups[group][name]({check: name, ...invalid});
    assert.equal(result.ok, false, `${name} silently ignored ${selector}`);
  }
});
async function mutated(file, before, after) {
  const original = readFileSync(new URL(file, import.meta.url), 'utf8');
  assert.equal(original.split(before).length, 2, 'mutation must bind one actual kernel');
  return import('data:text/javascript;base64,' + Buffer.from(original.replace(before, after)).toString('base64'));
}
test('finite KL fixture detects a reversed likelihood ratio', async () => {
  const module = await mutated('./finite-smoke-frontier81-classical.mjs', 'Math.log2(p[i]/q[i])', 'Math.log2(q[i]/p[i])');
  assert.equal(module.frontier81ClassicalChecks['subprobability-reference-point-mass']({}).ok, false);
});
test('toric overlap fixture detects a displaced plaquette edge', async () => {
  const module = await mutated('./finite-smoke-frontier81-quantum.mjs', 'h(i,j+1),v(i,j)', 'h(i+1,j+1),v(i,j)');
  assert.equal(module.frontier81QuantumChecks['frontier81-quantum-toric-commutation']({fixture:'frontier81-quantum-toric-commutation-v1'}).ok, false);
});
test('diagram product fixture detects doubled closed-loop counts', async () => {
  const module = await mutated('./finite-smoke-frontier81-tl-cherednik.mjs', 'if(!ext.length)loops++', 'if(!ext.length)loops+=2');
  assert.equal(module.frontier81TLCherednikChecks['rank-zero-through-three-basis-and-product-table']({max_n:3}).ok, false);
});

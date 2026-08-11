#!/usr/bin/env node
// step8c-contract-refresh.mjs — rewrite the proof contracts of the two items
// repaired in step-8 round 3, IN THEIR BATCH FILES so a later re-merge cannot
// clobber them. Same shape and same reason as step8b-contract-refresh.mjs.
//
//   ex-row-echelon-form-is-not-unique-but-rref-is  (batch 9)
//       gained [L3] (elementary row operations / row equivalence) and a new
//       dependency edge; [L1] is no longer cited by step 1.1.
//   prop-maximal-plane-triangulation-characterisation  (batch 6)
//       gained step 1.3 (the two regions of a polygon carry different crossing
//       parities), which step 5.1 now cites.

import { readFileSync, writeFileSync } from 'node:fs';

const load = (p) => JSON.parse(readFileSync(p, 'utf8'));
const save = (p, o) => writeFileSync(p, JSON.stringify(o, null, 2) + '\n');

// ---- batch 9 : ex-row-echelon-form-is-not-unique-but-rref-is ---------------
const p9 = 'research/frontier-10-batch-9.proof-contracts.json';
const b9 = load(p9);
const ex = b9.contracts['ex-row-echelon-form-is-not-unique-but-rref-is'];

const L1 = ex.citations.find((c) => c.fact === 'L1');
const L2 = ex.citations.find((c) => c.fact === 'L2');
L1.uses = ['2.1'];                       // step 1.1 no longer cites uniqueness
L2.uses = ['1.1', '2.1'];
L2.quote =
  'A matrix is in **row echelon form** when:';

ex.citations.push({
  fact: 'L3',
  source: 'def-elementary-row-operations-and-row-equivalence',
  source_section: 'Definition',
  quote:
    'Matrices $A,B\\in M_{m\\times n}(F)$ are **row equivalent**, written $A\\sim B$, when a finite sequence of elementary row operations transforms $A$ into $B$.',
  uses: ['1.1', '2.1'],
});

ex.derivations = [
  {
    id: 'step-1-1',
    claim:
      'The replacement $R_1\\leftarrow R_1+(-1)R_0$ is elementary of the third kind and takes $A$ to $R$; the scaling $R_1\\leftarrow(-1)R_1$ is elementary of the second kind and takes $R$ to $S$. Hence $A$ is row equivalent to each of $R$ and $S$ by [L3], each satisfies the row echelon conditions of [L2], and $R\\ne S$ because $-1\\ne1$ in $\\mathbb Q$.',
    step: '1.1',
    inputs: ['L2', 'L3'],
  },
  {
    id: 'step-2-1',
    claim:
      'The replacement $R_0\\leftarrow R_0+(-1)R_1$ carries $S$ to $I_2$ and, after the scaling of step 1.1, carries $R$ to $I_2$ as well; $I_2$ is row equivalent to $A$ by [L3] and is in reduced row echelon form by [L2], in agreement with the uniqueness of [L1].',
    step: '2.1',
    inputs: ['step 1.1', 'L1', 'L2', 'L3'],
  },
];
save(p9, b9);

// ---- batch 6 : prop-maximal-plane-triangulation-characterisation ------------
const p6 = 'research/frontier-10-batch-6.proof-contracts.json';
const b6 = load(p6);
const pm = b6.contracts['prop-maximal-plane-triangulation-characterisation'];

const add = (fact, source, step) => {
  const c = pm.citations.find((x) => x.fact === fact && x.source === source);
  if (!c) throw new Error(`no citation ${fact} -> ${source}`);
  if (!c.uses.includes(step)) c.uses.push(step);
  c.uses.sort();
};
// step 1.3 cites [L1, L3, L4, L6].
add('L1', 'thm-polygonal-jordan-curve', '1.3');
add('L3', 'lem-polygonal-crossing-parity-is-locally-constant', '1.3');
add('L3', 'lem-polygonal-ray-general-position', '1.3');
add('L4', 'def-plane-region-and-frontier', '1.3');
add('L4', 'cor-components-of-open-subsets-of-rn-are-polygonally-connected', '1.3');
add('L6', 'def-polygonal-arc-and-polygon', '1.3');
add('L6', 'def-plane-graph-face-and-boundary', '1.3');

pm.derivations.splice(2, 0, {
  id: 'step-1-3',
  claim:
    'The two regions of a polygon $P$ carry different crossing parities: a small disc about a nonvertex point $p$ of $P$ meets $P$ only in one segment [L6], its two half-discs lie in different regions because [L1] gives exactly two regions each with frontier $P$ and [L4] makes each half-disc lie in one region, and a general-position direction $d$ transverse to that segment [L3] gives mirror points $q,q\'$ in those half-discs whose rays differ by the single transverse crossing at $p$, so their parities differ; parity is constant on each region [L3].',
  step: '1.3',
  inputs: ['L1', 'L3', 'L4', 'L6'],
});
const s51 = pm.derivations.find((d) => d.step === '5.1');
s51.inputs = ['1.1', '1.3', '4.1', 'L3'];
s51.claim =
  'Assuming a facial boundary cycle $C$ of length at least four, the crossing parities of $J_1$, $J_2$ and $C$ force the relative interior of $e\'$ to have the same $C$-parity as $f$; by step 1.3 the two regions of $C$ have different parities, so $e\'$ meets the region containing $f$, which by step 1.1 is $f$ itself — impossible for part of the drawing.';
save(p6, b6);

console.log('step8c contract refresh: batch 9 and batch 6 rewritten');

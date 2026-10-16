# Step 3a reader report — batch 55

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `55`

## Opened inventory

Pages:

- `library/quantum-algorithms/period-hidden-shift-and-number-theoretic-algorithms.md` (A page).
- `library/quantum-algorithms/period-hidden-shift-and-number-theoretic-algorithms-examples.md` (B page).

Assigned items, read in dependency order (all under `items/`):

- A page: `alg-qa-euclidean-modular-inverse`, `rem-qa-number-theoretic-extension-scope`, `thm-qa-euclidean-modular-inverse-correctness-cost`, `lem-qa-dihedral-sieve-pair-combination`, `lem-qa-dihedral-coset-state-fourier-law`, `def-qa-finite-abelian-hidden-shift-problem`, `def-qa-finite-cyclic-discrete-logarithm-problem`, `thm-qa-hidden-shift-generalized-dihedral-reduction`, `alg-qa-dihedral-hidden-subgroup-sieve`, `lem-qa-controlled-cyclic-multiplication-clean`, `lem-qa-cyclic-dlp-hidden-subgroup`, `thm-qa-dihedral-sieve-scope`, `lem-qa-cyclic-dlp-annihilator-equation`, `alg-qa-cyclic-group-power-evaluation`, `thm-qa-cyclic-group-power-evaluation-correctness`, `alg-qa-finite-cyclic-discrete-logarithm`, `thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost`.
- B page: `ex-qa-hidden-shift-dihedral-cosets`, `ex-qa-cyclic-discrete-log-fourier-sample`.

The batch manifest names 59 external direct dependencies; I opened their relevant definitions/statements and, where used to resolve a proof step, their proof sections: `alg-qa-exact-binary-qft-circuit`, `alg-qa-finite-abelian-hidden-subgroup-sample`, `alg-qc-reversible-embedding`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-dihedral-groups-as-semidirect-products`, `def-addition-and-multiplication-modulo-n`, `def-additive-character-of-a-finite-abelian-group`, `def-external-semidirect-product`, `def-generalized-dihedral-group`, `def-integers-modulo-n`, `def-non-negative-and-positive-operator`, `def-qa-cyclic-quantum-fourier-transform`, `def-qa-finite-abelian-character-dual`, `def-qa-finite-abelian-hidden-subgroup-problem`, `def-qa-finite-abelian-subgroup-annihilator`, `def-qa-normalized-finite-abelian-fourier-transform`, `def-qa-qft-gate-cost-model`, `def-qc-circuit-cost-model`, `def-qc-circuit-denotational-semantics`, `def-qc-circuit-syntax-and-register-order`, `def-qc-clean-and-dirty-ancillas`, `def-qc-cnot-and-control-target-order`, `def-qc-coherent-function-oracle`, `def-qc-controlled-unitary-access`, `def-qc-dirac-notation-conversion`, `def-qc-elementary-circuit-resources`, `def-qc-instrument-and-conditional-state`, `def-qc-ordered-bitstring-encoding`, `def-qc-partial-trace`, `def-qc-pauli-matrices`, `def-qc-povm-and-outcome-law`, `def-qc-projective-measurement`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `def-qc-toffoli-and-fredkin`, `def-trace-of-an-endomorphism`, `def-unit-group-modulo-n-and-euler-totient`, `lem-chernoff-bound-for-independent-bernoulli-trials`, `lem-group-power-laws`, `lem-qa-character-dual-of-a-product-factors`, `lem-qa-cyclic-group-has-n-characters`, `lem-qa-totient-ratio-logarithmic-lower-bound`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-nth-roots-and-roots-of-unity`, `thm-division-algorithm-in-z`, `thm-euclidean-algorithm`, `thm-external-semidirect-product-is-a-group`, `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-qa-exact-binary-qft-circuit-correct`, `thm-qa-finite-abelian-fourier-transform-is-unitary`, `thm-qa-finite-abelian-hidden-subgroup-sample-law`, `thm-qc-computational-basis-orthonormal`, `thm-qc-dirac-notation-coordinate-identity`, `thm-qc-luders-instrument-of-a-povm-is-valid`, `thm-qc-projective-conditional-state`, `thm-qc-projective-measurement-outcome-law`, `thm-qc-reversible-embedding-cost`, and `thm-unit-criterion-modulo-n`.

To check the Fourier-sampling supplier proof, I also opened `lem-qa-hidden-coset-state-law`, `thm-qa-finite-abelian-dual-character-orthogonality`, `thm-qa-finite-abelian-coset-fourier-transform`, `thm-qa-finite-abelian-subgroup-annihilator-cardinality`, `lem-qa-finite-character-values-have-unit-modulus`, `def-qc-density-operator`, `prop-trace-is-linear`, and `lem-qc-tensor-product-basis-and-dimension`.

External source passages checked:

- Kuperberg, “A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem,” §3–§3.1, PDF pp. 2–3: [arXiv PDF](https://arxiv.org/pdf/quant-ph/0302112). The source gives the reflection-coset state, pair combiner, parity extraction, recursion, and list-size/Chernoff argument; the shortened-final-width claim is proved locally in this batch.
- Childs, *Lecture Notes on Quantum Algorithms*, §5.4, PDF pp. 23–24, for the cyclic DLP HSP and invertible Fourier coordinate; §7.1, PDF pp. 29–31, for the elliptic-curve formulas and the stated “Mathematica” exercise: [lecture notes PDF](https://www.cs.umd.edu/~amchilds/qa/qa.pdf).
- Proos and Zalka, “Shor’s Discrete Logarithm Quantum Algorithm for Elliptic Curve Groups,” §3, PDF p. 7, for the group-law statement and its citation to Chahal; §5.2, PDF pp. 14–15, for the (O(n^3)) full-width extended-Euclidean implementation: [arXiv PDF](https://arxiv.org/pdf/quant-ph/0301141).

## Review and repairs

- `alg-qa-dihedral-hidden-subgroup-sieve`: repaired its direct-oracle input condition to require that the total function is constant on each hidden left coset as well as distinct across different left cosets. The base case and `lem-qa-dihedral-coset-state-fourier-law` both require this exact hiding promise; the old wording supplied only the distinctness half.
- `thm-qa-dihedral-sieve-scope`: made the same exact left-coset promise explicit in the theorem statement and Given clause. Its direct branch, Fourier-sampling step, recursive embeddings, probability bounds, and resource calculations were otherwise sound.
- `alg-qa-finite-cyclic-discrete-logarithm`: replaced a loop count defined through a real logarithm and ceiling with an exactly computable integer: (L=lceillog_2q
ceil) from the bit length of (q-1), (D=min{dge0:2^ddeltage1}) found by exact rational comparisons, and (t=(1+L)D).
- `thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost`: updated the sample-count statement and its success and cost bounds. The proof uses (Dgelog_2(1/delta)>ln(1/delta)), while (Dlelog_2(1/delta)+1<2ln(1/delta)+1), so the guarantee and stated asymptotic costs remain valid.
- `library/quantum-algorithms/period-hidden-shift-and-number-theoretic-algorithms.md`: corrected “right-coset reduction” to “left-coset reduction” in its summary.
- Updated `research/quantum-computing-algorithms-60-2026-10-15-batch-55.proof-contracts.json` to match the changed algorithm citations and the DLP theorem’s steps 2.1–2.2. No `verification.judge` record was present on the changed items.
- Checked the DLP example after changing its supplier algorithm; its single ((c,d)=(2,8)) sample remains a valid illustrative run. The other example’s left-coset computation is correct.

## Defect not edited

The B-page summary opening sentence says the examples “check the right-coset sign convention.” `ex-qa-hidden-shift-dihedral-cosets` instead gives the hidden fibers as left cosets (C_a) and explicitly notes that the displayed right coset is not the hidden left coset. The summary wording may misstate which convention the examples check. B-page prose is outside my edit scope; the suspected nonfatal issue is in the findings JSON.

## Page verdicts

- `period-hidden-shift-and-number-theoretic-algorithms`: mathematical summary is accurate after the left-coset correction; the page’s assigned item list and scope match the reviewed claims.
- `period-hidden-shift-and-number-theoretic-algorithms-examples`: both examples’ computations and dependency claims are sound. The opening summary has the suspected convention wording defect above.

## Validation and blockers

Reflow reported unchanged for all four changed items. Precheck passed for both theorem proofs; both algorithms reported zero proof sections and no failures. The required single proof-layout pass reported: `4 items, 15 steps, 0 defects`.

Batch 55 has no blocker. At the final run-status check (2026-10-16 03:06 UTC), the run remained active with the stage-spec blocker for invalid scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12, and a `3a-collect` blocker because `collect-36` had failed three times. These are run-level blockers outside this batch.

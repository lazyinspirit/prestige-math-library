# Step 3a reader report — batch 28

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `28`

## Opened inventory

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch-28 manifest, and the current batch-28 notes, proof contracts, and cross-batch dependency record. Confirmed from `autopilot status` that this run is active and batch 28 has no reader result yet.

Assigned pages:

- `library/quantum-algorithms/simon-algorithm-and-finite-field-recovery.md`
- `library/quantum-algorithms/simon-algorithm-and-finite-field-recovery-examples.md`

Assigned item inventory, listed in the manifest’s dependency-level order:

- `thm-qa-binary-field-f2-is-a-field`
- `def-qa-binary-vector-space`
- `alg-qa-f2-gaussian-elimination`
- `lem-qa-computational-basis-measurement-law`
- `def-qa-simon-promise`
- `lem-qa-simon-annihilator-subspace-basis`
- `alg-qa-simon-one-sample`
- `def-qa-simon-random-instance-distribution`
- `thm-qa-simon-postquery-coset-state`
- `thm-qa-f2-gaussian-elimination-correct-and-cost`
- `thm-qa-simon-classical-randomized-query-lower-bound`
- `thm-qa-simon-hadamard-sampling-law`
- `def-qa-simon-rank-process`
- `thm-qa-simon-rank-growth-probability`
- `alg-qa-simon-recovery-with-budget`
- `thm-qa-simon-recovery-correctness-and-query-bound`
- `ex-qa-simon-finite-rank-and-sampling`

Also opened the eleven required-page summaries: `exact-oracle-algorithms`, `gaussian-elimination-and-row-reduction`, `primes-and-the-fundamental-theorem-of-arithmetic`, `series-and-nonnegative-tests`, `reversible-arithmetic-and-oracle-conversion`, `congruences-and-the-chinese-remainder-theorem`, `linear-maps-rank-nullity-and-quotient-spaces`, `computational-problems-promises-and-cost-models`, `measurements-povms-and-instruments`, `finite-probability-spaces-and-random-variables`, and `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`.

Direct item dependencies opened at their current bodies:

- Binary and linear algebra: `def-qa-binary-field-f2`, `def-prime`, `thm-z-mod-p-is-a-field`, `def-vector-space`, `def-linear-independence`, `def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`, `def-linear-basis`, `def-dimension`, `def-linear-subspace`, `def-qa-binary-dot-product`, `def-matrix-equation-augmented-matrix-and-linear-system`, `thm-rank-nullity`, `cor-matrix-rank-equals-the-rank-of-its-linear-map`, `def-row-space-column-space-nullspace-and-matrix-ranks`, and `thm-gaussian-elimination-produces-row-echelon-form`.
- Quantum measurement and state: `def-qc-dirac-notation-conversion`, `thm-qc-computational-basis-orthonormal`, `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`, `def-qc-density-operator`, `def-trace-of-an-endomorphism`, `thm-qc-unit-vector-projector-is-density`, `def-qc-instrument-and-conditional-state`, `thm-qc-luders-instrument-of-a-povm-is-valid`, `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-instrument-conditional-state-is-density`, `thm-non-negative-square-root-exists-and-is-unique`, `def-qc-tensor-register-and-permutation`, and `lem-qa-hadamard-f2-kernel`.
- Probability and query costs: `def-qa-classical-query-algorithm`, `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-expectation-on-a-finite-probability-space`, `thm-geometric-series`, `thm-markov-inequality`, `def-qa-expected-query-cost`, `def-qa-classical-bit-cost`, and `def-qa-standard-bit-query`.

Additional supporting results opened where used by those interfaces: `thm-row-rank-equals-column-rank`, `thm-any-two-finite-bases-have-the-same-size`, `thm-induction-principle`, and `lem-finite-sum-reindexing-and-fubini`.

## Review and edits

No confirmed defect was found in the assigned items, page prose, or the inspected direct dependency interfaces. In particular:

- The modulus-two specialization establishes primality of 2 before using the prime-modulus field theorem; the coordinate operations, standard basis, and the $n=0$ case are accounted for.
- The Simon promise construction has enough labels exactly when $m\ge n-1$, and the iff condition gives the stated two-element fibers and unique nonzero mask, including the $n=1$ boundary.
- The annihilator basis has $n-1$ vectors, including the empty basis for $n=1$; the Fourier amplitudes and squared-amplitude measurement law yield the uniform distribution on $s^\perp$.
- The elimination procedure’s full-rank branch returns the unique nonzero kernel vector. The randomized lower bound’s collision-free transcript posterior and collision estimate support its stated $\Omega(2^{n/2})$ query bound.
- Fresh samples are modeled by finite product experiments. The rank-growth and truncated-waiting calculations support the stated finite-prefix cost, tail, and capped-failure bounds. The two finite examples agree with those laws.

**Edits:** None. No proof contract or judge record was changed. Reflow, precheck, and proof-layout were not run because no item was edited.

**Uneditable defects:** None identified.

## Page verdicts

- `simon-algorithm-and-finite-field-recovery` (A page): no confirmed defect. Its summary matches the reviewed item statements and proofs, including the $n-1$ equation count, the finite-prefix cost convention, and the scope of the classical query lower bound.
- `simon-algorithm-and-finite-field-recovery-examples` (B page): no confirmed defect. Its summary matches the $n=1$ zero-query branch and the $n=2$ computations in the assigned example.

## Blocker

The active run status reports an unrelated scaffold blocker in batch 12: `1-scaffold` has an invalid unit prerequisite graph because of construction scheduling item identity `def-qc-effective-unitary-matrix-input`. It does not prevent this batch-28 review; no batch-local blocker was found.

# Step 3a reader report — batch 43

Run: `physics-remaining-80-2026-10-17`  
Role: reader (`reader-43`)  
Scope: the two assigned QSM pages and their seven assigned items.

## Opened inventory

Assigned pages:

- `library/quantum-statistical-mechanics/qsm-nonnormal-thermal-states.md` (A page)
- `library/quantum-statistical-mechanics/qsm-nonnormal-thermal-states-examples.md` (B page)

Page prerequisite read for context:

- `library/quantum-statistical-mechanics/qsm-kms-equilibrium.md`

Assigned items:

- `def-qsm-vacuum-spin-representation`
- `lem-qsm-vacuum-representation-irreducible`
- `thm-qsm-onsite-product-kms`
- `thm-qsm-product-thermal-state-nonnormal`
- `cex-qsm-invariant-not-kms`
- `cex-qsm-global-spin-thermal-trace-diverges`
- `ex-qsm-nonnormal-tracial-spin-state`

In-run mathematical/QSM supplier items opened from the batch-43 dependency inputs:

- Batch 36: `def-qsm-density-trace-state`, `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-gibbs-kms`, `lem-qsm-finite-matrix-cstar-and-state-duality`.
- Batch 38: `lem-qsm-integer-lattice-countable`, `def-qsm-local-spin-algebras`, `lem-qsm-local-spin-inclusions-isometric`, `def-qsm-quasilocal-spin-algebra`, `lem-qsm-quasilocal-completion`, `def-qsm-infinite-algebraic-state`, `lem-qsm-consistent-local-states`, `lem-qsm-spin-state-compactness`.
- Batch 39: `def-qsm-bounded-finite-range-interaction`, `lem-qsm-finite-range-commutator-path-bound`, `lem-qsm-boundary-dynamics-cauchy`, `thm-qsm-finite-range-spin-dynamics`, `lem-qsm-local-generator-domain`.
- Batch 41: `def-qsm-kms-state`, `lem-qsm-kms-strip-uniqueness`, `lem-qsm-gibbs-strip-limit`, `thm-qsm-finite-kms-gibbs-characterization`.

The 31 pinned published mathematical suppliers named by the dependency inputs were opened at their applicable Definition or Statement interfaces: `cor-bolzano-weierstrass-in-rn`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-c-star-algebra`, `def-completion-of-a-normed-space`, `def-countable`, `def-countable-choice`, `def-matrix-units`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-qc-density-operator`, `def-real-and-complex-inner-product-space`, `def-state-on-a-c-star-algebra`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `lem-completion-operations-are-well-defined`, `lem-countable-iff-surjection-from-n`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-rat-embeds-dense`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-countable-union-of-countable`, `thm-hadamard-three-lines`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `thm-nested-interval-property`, `thm-rationals-countable`, `thm-recursion`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, and `thm-weierstrass-convergence-holomorphic-functions`.

The item proof contracts and `research/physics-remaining-80-2026-10-17-batch-43.dependency-inputs.json` were consulted as evidence. I independently checked the current authored claims and proofs. The cited source locations were checked in Naaijkens, *Quantum Spin Systems on Infinite Lattices*, §3.1, printed pp. 50–53 (finite-excitation spin-chain representation and irreducibility) and §3.4, Definition 3.4.4 and finite Gibbs/KMS discussion, printed pp. 74–77; and Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*, Chapter 1 §7, printed pp. 13–14 (KMS strip and norm bound), and Chapter 2 §§1, 5, printed pp. 17–18 and 42–44 (quasi-local spin algebra, commutant/bicommutant, and normal states). The sources are [Naaijkens](https://arxiv.org/pdf/1311.2717) and [Ruelle](https://arxiv.org/pdf/math-ph/0107009). Their spin-chain and natural-unit conventions are not silently imported: the local proofs state the finite-site, lattice, and physical-time hypotheses they use.

## Edit and evidence

Repaired `cex-qsm-invariant-not-kms`: the witness previously said only that the onsite Hamiltonian was zero and inferred identity dynamics, without excluding non-onsite interaction terms. The counterexample now specifies the onsite-only model with `Φ(Z)=0` for every finite nonempty support, derives `H_Λ=0` and `α_t=id`, and ties the KMS-state comparison to the exact onsite model in `thm-qsm-onsite-product-kms`. Its proof contract now records the same model, supplier excerpt, and Step 1.1 dependency. The item had no `verification.judge` record to remove.

Post-edit commands:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-qsm-invariant-not-kms.md` — exit 0; unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-qsm-invariant-not-kms.md` — PASS; 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/cex-qsm-invariant-not-kms.md` — exit 0; 1 item, 4 steps, 0 defects.

No other item or page was edited. No gate, adjudication, or acceptance stamp was run or added.

## Findings not repaired

None. No defect remains in the assigned scope or in the inspected in-run dependencies.

## Page verdicts

- `qsm-nonnormal-thermal-states` (A): its summary accurately describes the finite-excitation representation, irreducibility result, conditional onsite KMS result, and representation-specific nonnormality theorem. No page-prose defect found.
- `qsm-nonnormal-thermal-states-examples` (B): its summary matches the stationarity counterexample, the explicit positive-energy trace divergence example, and the zero-field tracial example. It presents mathematical model results, not empirical findings. No page-prose defect found.

## Blocker and coverage limit

No blocker. The pinned published mathematical items were checked at the interfaces used here; their full historical proofs were not re-audited as part of this batch review. The local draft supplier proofs in the relevant QSM dependency chain were read and checked, and no unresolved defect was found.

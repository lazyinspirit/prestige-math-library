# Step 3a reader report — batch 42

Run: `physics-remaining-80-2026-10-17`  
Reader: `reader-42`  
Scope: `qsm-commuting-quantum-phases` and its examples companion.

## Opened inventory

Pages opened:

- `library/quantum-statistical-mechanics/qsm-commuting-quantum-phases.md` (A page)
- `library/quantum-statistical-mechanics/qsm-commuting-quantum-phases-examples.md` (B page)

All nine assigned items opened and reviewed in batch dependency order:

1. `def-qsm-diagonal-ising-interaction`
2. `lem-qsm-diagonal-ising-specification-consistency`
3. `lem-qsm-commuting-local-dynamics`
4. `lem-qsm-kms-diagonal-reduction`
5. `thm-qsm-diagonal-kms-dlr-bijection`
6. `thm-qsm-chain-kms-uniqueness`
7. `thm-qsm-ising-high-temperature-kms-uniqueness`
8. `thm-qsm-ising-kms-coexistence`
9. `cex-qsm-finite-gibbs-unique-infinite-not`

The 23 distinct direct mathematical suppliers were inspected at their relevant definitions/statements and proof status: `def-qsm-local-spin-algebras`, `def-qsm-bounded-finite-range-interaction`, `def-csm-finite-range-lattice-interaction`, `def-csm-lattice-gibbs-specification`, `def-countable-choice`, `lem-csm-lattice-specification-consistency`, `thm-qsm-finite-range-spin-dynamics`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `def-qsm-kms-state`, `lem-qsm-kms-strip-uniqueness`, `thm-qsm-finite-kms-gibbs-characterization`, `def-qsm-quasilocal-spin-algebra`, `lem-qsm-quasilocal-completion`, `lem-qsm-matrix-state-calculus`, `lem-csm-lattice-product-and-measure-compactness`, `thm-dynkin-pi-lambda`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-csm-chain-dlr-uniqueness`, `thm-csm-ising-high-temperature-state`, `def-qsm-translation-invariant-spin-interaction`, `thm-csm-lattice-van-hove-pressure`, `thm-csm-ising-low-temperature-coexistence`, and `thm-csm-ising-coexistence-pressure-cusp`.

I also inspected the current `lem-csm-lattice-product-and-measure-compactness` carrier, a direct supplier to the KMS–DLR theorem. Older batch notes describe duplicate YAML-like text in that item; the current carrier has a normal frontmatter/body boundary and no duplicate block.

## Edits and evidence

- In `items/def-qsm-diagonal-ising-interaction.md`, clarified the support domain in the zero-term clause to “all other finite nonempty” sets. The cited `def-qsm-bounded-finite-range-interaction` indexes interactions only by finite nonempty supports. I traced the current reverse dependency closure (10 consumers, including `ex-qsm-ising-phase-regimes` and `pthm-qsm-diagonal-quantum-phase-predictions` in batch 44); each use is of the stated singleton and pair terms. No consumer repair was needed.
- In `items/lem-qsm-diagonal-ising-specification-consistency.md`, replaced Proof 2.2’s incorrect cancellation claim with the normalized finite-sum computation. The factor `e^{-βC(ξ,η)}` depends on the outside spins `ξ` in Λ minus Δ and remains in the outer sum; the factor `Z_Δ^{ξη}` cancels against the conditional-kernel denominator. The resulting sum is exactly `γ_Λ f`. This is consistent with the explicit finite-sum calculation in the inspected `lem-csm-lattice-specification-consistency` supplier. Updated derivation `step-2-2` in `research/physics-remaining-80-2026-10-17-batch-42.proof-contracts.json`. Neither edited item had a `verification.judge` record.
- Checks after the final edits: `reflow.mts` reported both items unchanged; `precheck.mts` reported the definition with 0 proof rows and 0 failures, and the lemma passed with 0 failures. The required one-shot proof-layout command over both changed items reported 4 steps and 0 defects.

## Source checks and limits

I independently inspected Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, §3.4 Definition 3.4.4 and Proposition 3.4.5 (printed pp. 74–75) for the bounded KMS strip, and the finite Gibbs/KMS calculation (printed pp. 76–77): [arXiv PDF](https://arxiv.org/pdf/1311.2717). I inspected the Princeton seminar's Peierls setup and contour, energy, and probability estimates, §§8.1–8.2 (PDF pp. 52–55): [seminar PDF](https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf). These passages support the conventions and contextual Ising estimates; the QSM correspondence and the inhomogeneous consistency argument are checked from the local proofs.

The cited Friedli–Velenik PDF failed to render in the available browser during this review. Its prior full-text inspection is recorded in the batch source bundle, but I do not claim a fresh independent reading of that PDF. Draft suppliers are treated conditionally at their inspected exact interfaces. I did not audit every proof in the full transitive mathematical dependency closure.

The assigned carriers were initially opened before the external supplier files. I subsequently inspected the direct supplier statements and relevant proof arguments and rechecked the dependent deductions, but I cannot attest to a strictly supplier-first first-pass reading sequence.

## Page verdicts

- `qsm-commuting-quantum-phases`: Acceptable after the two item repairs. The summary accurately describes the diagonal model, full-algebra correspondence, conditional uniqueness/coexistence transfers, and scope limits.
- `qsm-commuting-quantum-phases-examples`: Acceptable. Its summary accurately frames the counterexample as an exact model distinction and makes no empirical claim. No B-page prose was edited.

## Uneditable findings and blockers

None. No remaining defect was confirmed in a page or dependency, and there is no blocker.

# Independent reader report — batch 44

Run: `physics-remaining-80-2026-10-17`  
Batch: `44`  
Role: Step 3a reader

## Opened inventory

Assigned pages:

- `qsm-infinite-spin-physical-models` — `library/quantum-statistical-mechanics/qsm-infinite-spin-physical-models.md`
- `qsm-infinite-spin-physical-models-examples` — `library/quantum-statistical-mechanics/qsm-infinite-spin-physical-models-examples.md`

Assigned items:

- `def-qsm-infinite-spin-physical-quantities`
- `post-qsm-infinite-spin-equilibrium`
- `pthm-qsm-infinite-spin-equilibrium-predictions`
- `pthm-qsm-diagonal-quantum-phase-predictions`
- `ex-qsm-ising-phase-regimes`

Required page context opened:

- `qsm-commuting-quantum-phases`
- `qsm-spin-thermodynamic-limits`

All 58 current-run items in the batch-44 transitive supplier closure were opened, including the local definitions, state and algebra constructions, dynamics and KMS arguments, pressure and entropy arguments, CSM DLR arguments, and Ising uniqueness/coexistence suppliers. The opened IDs were:

`def-csm-finite-range-lattice-interaction`, `def-csm-lattice-gibbs-specification`, `def-qsm-bounded-finite-range-interaction`, `def-qsm-density-trace-state`, `def-qsm-diagonal-ising-interaction`, `def-qsm-infinite-algebraic-state`, `def-qsm-kms-state`, `def-qsm-local-spin-algebras`, `def-qsm-quasilocal-spin-algebra`, `def-qsm-relative-entropy-domain`, `def-qsm-translation-invariant-spin-interaction`, `lem-csm-chain-markov-bridge`, `lem-csm-finite-gibbs-variational-identity`, `lem-csm-ising-influence-bound`, `lem-csm-ising-parity-contours`, `lem-csm-lattice-product-and-measure-compactness`, `lem-csm-lattice-specification-consistency`, `lem-csm-maximal-coupling-and-heat-bath`, `lem-csm-peierls-energy-injection`, `lem-csm-stationary-dlr-construction`, `lem-csm-stationary-lattice-entropy-energy`, `lem-qsm-boundary-dynamics-cauchy`, `lem-qsm-commuting-local-dynamics`, `lem-qsm-consistent-local-states`, `lem-qsm-diagonal-ising-specification-consistency`, `lem-qsm-finite-gibbs-kms`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `lem-qsm-finite-range-commutator-path-bound`, `lem-qsm-gibbs-strip-limit`, `lem-qsm-integer-lattice-countable`, `lem-qsm-kms-diagonal-reduction`, `lem-qsm-kms-strip-uniqueness`, `lem-qsm-local-generator-domain`, `lem-qsm-local-spin-inclusions-isometric`, `lem-qsm-matrix-exponential-response`, `lem-qsm-matrix-state-calculus`, `lem-qsm-quasilocal-completion`, `lem-qsm-spin-state-compactness`, `lem-qsm-stationary-spin-entropy-density`, `lem-qsm-trace-state-calculus`, `thm-csm-chain-dlr-uniqueness`, `thm-csm-dobrushin-finite-range-uniqueness`, `thm-csm-ising-coexistence-pressure-cusp`, `thm-csm-ising-high-temperature-state`, `thm-csm-ising-low-temperature-coexistence`, `thm-csm-lattice-dlr-existence`, `thm-csm-lattice-dlr-variational-pressure`, `thm-csm-lattice-van-hove-pressure`, `thm-qsm-chain-kms-uniqueness`, `thm-qsm-diagonal-kms-dlr-bijection`, `thm-qsm-finite-entropy-composition`, `thm-qsm-finite-kms-gibbs-characterization`, `thm-qsm-finite-range-spin-dynamics`, `thm-qsm-infinite-spin-kms-existence`, `thm-qsm-ising-high-temperature-kms-uniqueness`, `thm-qsm-ising-kms-coexistence`, `thm-qsm-quantum-lattice-pressure`, and `thm-qsm-trace-cross-log-inequality`.

Additional read-only mathematical suppliers opened where used by those arguments: `def-axiom-of-choice`, `def-countable-choice`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-dynkin-pi-lambda`, `thm-hadamard-three-lines`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, `thm-tdmath-finite-range-lattice-pressure-limit`, `thm-tdmath-ising-chain-limit`, and `thm-weierstrass-convergence-holomorphic-functions`.

## Review and repair

The five assigned items define the local and quasi-local spin algebras, the algebraic state and local density matrices, the physical-time KMS convention, and the model's units and thermodynamic quantities. The definition distinguishes adopted Born/KMS interpretations from mathematical constructions. The postulate labels Born probabilities and KMS equilibrium as adopted model assumptions and reports no experiment or measured input.

The dynamics and KMS-existence theorem proofs apply their stated finite-range, Countable Choice, and finite-matrix hypotheses. The pressure result is restricted to translation-invariant interactions and van Hove sequences. The diagonal Ising proof transfers the local CSM chain, Dobrushin, and Peierls results through the full-algebra KMS–DLR correspondence, preserving the pair-counting, field, unit, and temperature conventions. Its two-dimensional coexistence bound is sufficient and is explicitly separated from a critical-temperature claim. The example specializes those conditional conclusions without claiming behavior outside them. I found no unsupported experiment, empirical certainty claim, or fabricated measurement.

I repaired a source-locator omission in `post-qsm-infinite-spin-equilibrium`. Its existing citations identified the KMS discussion, while the Born-rule statement is located in Naaijkens §2.6, printed pp. 45–46. The added reference records that locator; the postulate contract now records the separate Born-rule and KMS source passages. Naaijkens §2.6 states the spectral-projection probability as the state applied to $P^*P$, which is $omega(P)$ for a projection. Naaijkens §3.4, Definition 3.4.4, printed pp. 74–77, supports the KMS strip convention. [Naaijkens, *Quantum Spin Systems on Infinite Lattices*](https://arxiv.org/pdf/1311.2717)

Ruelle Chapter 1 §7, printed pp. 13–14, gives the bounded analytic KMS boundary identity and discusses time rescaling; this matches the item's explicit SI-time convention. [Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*](https://arxiv.org/pdf/math-ph/0107009)

The repair changes citation metadata only. The physical scope, postulate formulation, and consumer-facing claims are unchanged, so no consumer-interface review was triggered. The item had no `verification.judge` record to remove; I did not add a stamp.

## Checks

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/post-qsm-infinite-spin-equilibrium.md` — `unchanged`.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/post-qsm-infinite-spin-equilibrium.md` — `PASS` (nonproof structure).
- `node tools/physics-support/proof-layout.mjs items/post-qsm-infinite-spin-equilibrium.md` — 1 item, 0 proof steps, 0 defects.

## Page verdicts

- `qsm-infinite-spin-physical-models` — pass. Its summary matches the page's unit definitions, adopted physical interpretations, conditional dynamics/KMS/pressure results, and stated exclusions.
- `qsm-infinite-spin-physical-models-examples` — pass. Its summary accurately states the one-dimensional uniqueness and two-dimensional sufficient regimes. The schematic description matches the free-boundary pair sum and is explicitly illustrative.

## Uneditable defects and blocker

No uneditable defects were found. There is no blocker to the assigned review.

## Coverage limitation

The web viewer returned an internal fetch error for the Friedli–Velenik author PDF, so I do not attest to a new full-text reading of that source. I checked the local CSM supplier proofs through the claimed Ising estimates and used the accessible Princeton seminar notes for the Dobrushin and Peierls context; the local derivations, rather than an unverified quotation from Friedli–Velenik, support the reviewed conditional claims. The Princeton notes' Dobrushin section gives the binary influence bound with the same pair-energy normalization, and its Peierls section confirms the contour energy and exponential-counting method. [Princeton seminar notes](https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf)

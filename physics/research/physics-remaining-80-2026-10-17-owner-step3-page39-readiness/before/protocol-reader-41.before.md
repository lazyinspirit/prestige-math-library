# Reader report — batch 41

Run: `physics-remaining-80-2026-10-17`  
Role: read-only Step 3a reader  
Batch: `41`

## Inventory reviewed

Assigned pages:

- `qsm-kms-equilibrium` (A): `def-qsm-kms-state`, `lem-qsm-kms-strip-uniqueness`, `lem-qsm-gibbs-strip-limit`, `lem-qsm-kms-invariance`, `thm-qsm-finite-kms-gibbs-characterization`, and `thm-qsm-infinite-spin-kms-existence`.
- `qsm-kms-equilibrium-examples` (B): `ex-qsm-kms-two-level-gibbs-boundary`.

I read all seven current item carriers and both page carriers. I also read the current batch manifest, assigned-page summaries, the assigned batch notes and relevant proof-contract rows, and the 16 QSM items in the assigned dependency closure from batches 36, 38 and 39:

`lem-qsm-matrix-state-calculus`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `lem-qsm-finite-gibbs-kms`, `def-qsm-infinite-algebraic-state`, `def-qsm-local-spin-algebras`, `lem-qsm-integer-lattice-countable`, `lem-qsm-local-spin-inclusions-isometric`, `def-qsm-quasilocal-spin-algebra`, `def-qsm-bounded-finite-range-interaction`, `lem-qsm-quasilocal-completion`, `lem-qsm-consistent-local-states`, `lem-qsm-spin-state-compactness`, `lem-qsm-finite-range-commutator-path-bound`, `lem-qsm-boundary-dynamics-cauchy`, `thm-qsm-finite-range-spin-dynamics`, and `lem-qsm-local-generator-domain`.

Published mathematical suppliers opened for the uses at issue included `def-c-star-algebra`, `def-countable-choice`, `thm-hadamard-three-lines`, `thm-goursat-triangle-theorem`, `thm-morera-triangle-theorem`, `thm-liouville-bounded-entire-function`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-nested-interval-property`, `thm-recursion`, and `thm-dedekind-complete`. I read the current required context pages `qsm-finite-range-spin-dynamics`, `analyticity-liouville-and-morera`, `goursat-and-cauchys-theorem-in-a-convex-domain`, and `the-identity-theorem-and-the-open-mapping-theorem`.

## Uneditable findings

1. **Citation mismatch in `lem-qsm-kms-strip-uniqueness`** — its frontmatter cites Naaijkens, Proposition 3.4.5, pp. 74–75, and Ruelle, Chapter 1 §7, p. 13, for a general three-lines interpolation inequality and zero-lower-edge uniqueness. Naaijkens Proposition 3.4.5 (printed p. 74) concerns extending KMS correlations for entire analytic elements. Ruelle’s KMS theorem (printed p. 13) states the strip condition and correlation norm bound, not the general interpolation or uniqueness statement. The local proof is sound from its direct `thm-hadamard-three-lines` dependency; the bibliography should cite the actual theorem supporting the stated result. See [Naaijkens](https://arxiv.org/pdf/1311.2717) and [Ruelle](https://arxiv.org/pdf/math-ph/0107009).

2. **Unstated real-completeness step in the draft supplier `lem-qsm-matrix-state-calculus`** — Proof 1.1 defines `m := sup_{||u||=1} q(u)` and uses it to select an approximating sequence, but its Facts & Assumptions do not cite the least-upper-bound property of the real numbers or a maximum theorem. The bounded-sequence supplier `cor-bolzano-weierstrass-in-rn` alone does not state that a bounded real set has a supremum. Add the exact real-completeness supplier `thm-dedekind-complete` (with the real-number construction interface) or provide the required compactness/maximization argument. This is a short, locally closable gap, but the prerequisite is not licensed in the current proof. The assigned consumer `thm-qsm-finite-kms-gibbs-characterization` directly depends on this supplier. The batch-41 dependency-input record’s old supplier fingerprint differs from the current item bytes, so no observed-source fingerprint is claimed here.

3. **Suspected stale readiness wording in the in-run dependency page `qsm-finite-range-spin-dynamics`** — paragraph 2 says the finite-matrix C*-identity supplier’s Step-1 readiness “remains pending.” The current run has a later Step-1 record for `lem-qsm-finite-matrix-cstar-and-state-duality` with `decision: ready` and `owner: true` (`research/physics-remaining-80-2026-10-17-step1-lem-qsm-finite-matrix-cstar-and-state-duality.json`). This is authoring readiness, not proof acceptance, so the page’s caveat that the assumption is not thereby established remains sound; the word “pending” conflicts with the later recorded readiness and should be reconciled. The page carrier changed during review; I reopened the relevant current paragraph and the pending sentence remains. Its current raw SHA-256 is bound in the findings file. The current assigned consumer `def-qsm-kms-state` reaches the page’s `thm-qsm-finite-range-spin-dynamics` item through its direct dependency. The current C*-supplier hash differs from the older batch-41 dependency-input fingerprint, so the finding is limited to the recorded status wording and does not certify that older fingerprint.

## Page verdicts

- **`qsm-kms-equilibrium` (A):** the page summary accurately describes the current definitions and conditional results. The assigned items’ proofs are mathematically sound on their stated premises. The strip-uniqueness bibliography finding remains open for the owner, and the external QSM dynamics page has the readiness-wording issue above.
- **`qsm-kms-equilibrium-examples` (B):** the page summary and two-level calculation are accurate. The model parameters are not presented as measurements, and the physical-time upper-edge factor has the stated sign and dimensions.

## Repairs and checks

No edits were made: this was a read-only assignment. Accordingly, I did not run item reflow, precheck, or proof-layout formatting. No repair is claimed.

## Coverage limits and blocker

I checked the assigned items, their current QSM supplier carriers, and the exact published mathematical interfaces used by the reviewed arguments. I did not audit every upstream proof in the root mathematics library or reread the complete source chapters. I checked the cited author-hosted source passages relevant to the KMS definition, finite Gibbs/KMS discussion, infinite-volume existence discussion, and bibliography finding: Naaijkens §3.4, printed pp. 74 and 76–77, and Ruelle Chapter 1 §7, printed p. 13, and Chapter 2 §6, printed p. 24. One in-run page changed during review; I checked the current relevant paragraph and bound the current page hash in the finding.

There is no blocker to this batch’s mathematical review. The current C*-supplier bytes differ from the older `batch-41.dependency-inputs.json` fingerprint, so that historical fingerprint is not used as proof of current-source currency; the findings make no claim that it is.

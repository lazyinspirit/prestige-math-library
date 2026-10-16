# Step 3a reader report — batch 1

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader-1  
Batch: `1`

## Opened inventory

Pages:

- `library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md` (A page)
- `library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces-examples.md` (B page)

Assigned items, in the manifest's dependency order:

- `def-qc-dirac-notation-conversion`
- `def-qc-trace-norm`
- `thm-qc-dirac-adjoint-amplitude-translation`
- `thm-qc-dirac-notation-coordinate-identity`
- `thm-qc-trace-norm-spectral-formula`
- `thm-qc-trace-norm-rank-one-formula`
- `thm-qc-trace-norm-duality-and-norm-properties`
- `thm-qc-trace-norm-unitary-invariance-and-positive-formula`
- `prop-qc-trace-holder-inequality`
- `thm-qc-hermitian-trace-norm-positive-negative-parts`
- `ex-qc-inner-product-dirac-coordinate-check`

Direct prerequisite items opened:

- `def-linear-map`
- `def-real-and-complex-inner-product-space`
- `def-coordinate-column-and-matrix-of-a-linear-map`
- `def-matrix-product-and-identity-matrix`
- `def-transpose-of-a-matrix`
- `def-complex-conjugate-real-imaginary-part-and-modulus`
- `def-singular-values-of-an-endomorphism`
- `prop-singular-values-are-well-defined`
- `def-adjoint-of-a-linear-map-between-inner-product-spaces`
- `thm-adjoint-exists-and-is-unique-in-finite-dimension`
- `thm-bessel-inequality-and-finite-parseval-identity`
- `thm-singular-value-decomposition`
- `def-trace-of-an-endomorphism`
- `def-operator-norm-on-a-finite-dimensional-inner-product-space`
- `thm-cauchy-schwarz-in-an-inner-product-space`
- `lem-complex-conjugation-and-modulus-laws`
- `def-non-negative-and-positive-operator`
- `thm-non-negative-operator-characterisations`
- `thm-non-negative-square-root-exists-and-is-unique`
- `def-linear-isometry-and-orthogonal-or-unitary-operator`
- `thm-finite-dimensional-isometry-characterisations`
- `prop-adjoint-algebra`
- `def-self-adjoint-and-normal-endomorphism`
- `thm-complex-spectral-theorem-for-normal-endomorphisms`
- `prop-standard-coordinate-inner-products`

Additional cited support items opened for the direct prerequisite arguments:

- `def-inner-product-space`
- `thm-riesz-representation-in-finite-dimensions`
- `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`
- `thm-finite-dimensional-orthogonal-decomposition`
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
- `prop-pythagorean-parallelogram-and-polarisation-identities`
- `def-orthogonal-vectors-sets-and-orthonormal-bases`
- `lem-span-is-the-set-of-linear-combinations`
- `cor-trace-is-invariant-under-similarity`
- `thm-of-square-roots`

## Review and edits

The Dirac conversion, adjoint-amplitude identity, coordinate identity, trace-norm definition and spectral formula are consistent with the root convention (linear in the first argument). The rectangular-map and zero-dimensional cases are handled. The rank-one trace-norm calculation, SVD duality construction, unitary invariance, positive-operator formula, trace Holder bound, Hermitian positive-negative decomposition, and the worked `C^2` example all follow from their cited finite-dimensional suppliers. I found no remaining unsupported mathematical inference in the assigned items.

I repaired one notation defect in two assigned items. In `thm-qc-trace-norm-duality-and-norm-properties`, the statement and proof used `||B||_infty`, while the cited local definition `def-operator-norm-on-a-finite-dimensional-inner-product-space` defines the operator norm as `||B||`. I changed the constraint and its proof uses to the defined notation. In `prop-qc-trace-holder-inequality`, I made the same correction to the statement, cited dual formula, and proof. The two current proof-contract entries were updated to match the revised statement/derivations in `research/quantum-computing-algorithms-60-2026-10-15-batch-1.proof-contracts.json`.

Neither edited draft has a `verification.judge` record to remove. The existing hash-bound Step 2 `template_review` records in those proof-contract entries still refer to the pre-reader item/row bytes; I retained those prior records rather than replacing their hashes or self-certifying a new review. They need the normal later re-review against the repaired bytes.

Validation after the final item edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qc-trace-norm-duality-and-norm-properties.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-trace-norm-duality-and-norm-properties.md` — passed, 1 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/prop-qc-trace-holder-inequality.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-qc-trace-holder-inequality.md` — passed, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-qc-trace-norm-duality-and-norm-properties.md items/prop-qc-trace-holder-inequality.md` — passed, 2 items, 12 steps, 0 defects.

## Source checks

- John Watrous, *The Theory of Quantum Information*, Chapter 1, §1.1.3: Eq. (1.173) gives Schatten-norm duality; Eq. (1.174) gives the Holder inequality; Eq. (1.181) identifies the trace norm with `Tr(sqrt(A^*A))`; Eq. (1.171) gives isometric invariance. The author-hosted manuscript is at <https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf>.
- Watrous, Chapter 1, “Jordan–Hahn decompositions,” Eqs. (1.141)–(1.144), gives the decomposition of a Hermitian operator into positive semidefinite parts with product zero; the positive square-root construction is in Eq. (1.148). Chapter 3, §3.1.1, Theorem 3.4, Eq. (3.18), uses that decomposition to obtain `||X||_1 = Tr(P)+Tr(Q)`. These locations support the cited trace-norm/Jordan–Hahn results.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, Appendix A.3 distinguishes the physics inner-product convention from the mathematical convention and defines the outer product; Appendix A.5 gives the SVD for rectangular matrices; Appendix A.7 defines trace as the diagonal sum; Appendix A.10 gives ket/bra notation. Source: <https://arxiv.org/pdf/1907.09415v6>.

These sources agree with the local claims. The source conventions are translated by the local root/Dirac definitions; the assigned proofs establish the needed identities locally.

## Page verdicts

- A page `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`: pass. Its summary matches the reviewed definitions and results; the notation repair above makes the duality and Holder formulas use the local operator-norm notation.
- B page `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces-examples`: pass. Its summary and example agree with the computed action, coordinate matrix, and adjoint.

## Unedited defects

None identified.

## Blockers and coverage limit

The batch-1 review is complete. The live autopilot status still reports a run-level `1-scaffold` specification blocker: invalid construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. That issue is outside this batch.

I reviewed every assigned page and item, all direct dependencies cited by those items, and the additional support items listed above. I did not audit the entire transitive foundation closure of those published suppliers. The notation repair also leaves the pre-reader hash-bound template reviews stale by design; their exact-hash review evidence must be refreshed by the authorized later workflow before certification.

# Step 3a reader report — batch 39

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `39`  
Role: independent reader

## Opened inventory

Assigned pages:

- A page `polynomial-method-and-approximate-degree` — `library/quantum-algorithms/polynomial-method-and-approximate-degree.md`.
- B page `polynomial-method-and-approximate-degree-examples` — `library/quantum-algorithms/polynomial-method-and-approximate-degree-examples.md`.

Assigned items, read in the manifest's local dependency order:

- `lem-qa-15-continuous-markov-derivative-bound`
- `lem-qa-15-grid-return-derivative`
- `lem-qa-15-discrete-markov-ehlich-zeller`
- `def-qa-15-bit-oracle-query-model`
- `def-qa-15-acceptance-polynomial`
- `def-qa-15-bit-oracle-query-complexity`
- `lem-qa-15-branch-density-degree`
- `lem-qa-15-query-amplitude-degree`
- `lem-qa-15-symmetrization`
- `prop-qa-15-promise-domain-scope`
- `thm-qa-15-acceptance-degree-bound`
- `thm-qa-15-exact-degree-or`
- `thm-qa-15-or-approximate-degree-lower-bound`
- `thm-qa-15-parity-approximate-degree`
- `ex-qa-15-or-polynomial-small-n`
- `cex-qa-15-off-cube-values-are-unconstrained`

The six A-page prerequisite summaries were also opened: `reversible-arithmetic-and-oracle-conversion`, `fundamental-trigonometric-identities`, `linear-algebra-methods-in-combinatorics`, `computational-problems-promises-and-cost-models`, `the-complex-exponential-and-eulers-formula`, and `uniform-circuit-families-promise-problems-and-complexity`.

Direct supplier statements or definitions used in the assigned arguments were checked in the current carriers. These included the polynomial, derivative, Chebyshev, trigonometric, compactness, mean-value, root-counting, and induction suppliers (`def-real-polynomial-degree-leading-coefficient-and-monic`, `def-formal-derivative-of-a-polynomial`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `def-chebyshev-polynomials-first-and-second-kind`, `lem-chebyshev-degree-leading-coefficients-and-extreme-values`, `thm-chebyshev-multiple-angle-identities`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `cor-pi-is-the-first-positive-sine-zero`, `thm-quarter-turn-values-and-shift-formulas`, `thm-cofunction-supplementary-and-reflection-identities`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-chain-rule`, `thm-sine-and-cosine-derivatives`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `lem-real-polynomial-factor-at-a-root`, `thm-sine-and-cosine-addition-formulas`, `thm-extreme-value-r`, `thm-algebra-of-continuous-functions`, `cor-differentiable-implies-continuous`, `lem-of-triangle-inequality`, `thm-induction-principle`, and `cor-mean-value-theorem`).

Other checked suppliers were `def-qa-standard-bit-query`, `def-qa-finite-branch-output-law`, `def-qa-task-and-promise-domain`, `def-qc-ordered-bitstring-encoding`, `def-qc-register-and-computational-basis`, `def-qc-instrument-and-conditional-state`, `def-qc-completely-positive-map`, `def-trace-of-an-endomorphism`, `thm-non-negative-operator-characterisations`, `thm-complex-numbers-form-a-field`, `thm-qc-instrument-outcome-law-normalizes`, `thm-qc-instrument-conditional-state-is-density`, `def-qc-density-operator`, `def-non-negative-and-positive-operator`, `def-multivariate-polynomial-ring-by-iteration`, `def-monomials-multidegree-and-total-degree`, `thm-reals-ordered-field`, `lem-finite-set-has-max`, `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction`, `thm-intermediate-value`, `def-qc-clifford-t-gate-library`, and `def-qc-pauli-matrices`. The page's QA01 comparison was checked against `def-qa-quantum-query-algorithm`, `def-qa-quantum-query-complexity`, and `def-qa-promise-query-instance`.

I checked the 13 proof-like entries in `research/quantum-computing-algorithms-60-2026-10-15-batch-39.proof-contracts.json` against the current proof sections, citations, and boundary cases. The three definition items have no phase-proof contracts.

## Review and edit

The Markov proof chain is mathematically sound: the interpolation nodes are distinct with nonzero derivatives, the interpolation identity yields the outer-interval estimate, the centered-difference argument proves the trigonometric derivative bound, and centering the polynomial gives the stated range-height constant. The grid-return argument uses the mean value theorem with the stated compact-interval hypotheses; rescaling gives the discrete derivative inequality.

The bit-query definitions state an explicit one-hot oracle-only model. The branch-density and coherent-amplitude arguments establish the claimed degree increases per query; finite permutation averaging preserves the promise-domain error; and the acceptance, exact-OR, approximate-OR, and parity conclusions follow with their stated constants and quantifiers. Both B-page witnesses and computations check out. The assigned page summaries match the reviewed items.

One title defect was repaired in `items/thm-qa-15-or-approximate-degree-lower-bound.md`. The original title said “OR has square-root approximate degree,” which suggests a two-sided characterization, while the statement proves only a square-root lower bound and corresponding query lower bounds. The title now says “OR has a square-root approximate-degree lower bound and corresponding query lower bounds.” The statement and proof were unchanged, so no proof-contract derivation was affected. This item had no `verification.judge` record to remove.

One short proof-support defect was repaired in `items/lem-qa-15-symmetrization.md`, step 2.1. The finite averaging estimate invoked the triangle inequality without a cited supplier. The proof now cites `lem-of-triangle-inequality`, gives the finite-sum bound explicitly, and the batch proof contract now records that citation and step input. The item had no `verification.judge` record to remove.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qa-15-or-approximate-degree-lower-bound.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qa-15-or-approximate-degree-lower-bound.md` — passed; one proof checked, zero failures.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-qa-15-symmetrization.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-qa-15-symmetrization.md` — passed; one proof checked, zero failures.
- `node tools/proof-layout.mjs items/thm-qa-15-or-approximate-degree-lower-bound.md items/lem-qa-15-symmetrization.md` — two items, seven steps, zero defects.

The relevant cited source sections were checked in their cached full-text files: Childs, *Lecture Notes on Quantum Algorithms*, Chapter 21 §§21.3–21.6, printed pp. 98–101 (PDF pp. 106–110), `research/quantum-computing-planning/sources/qc_r6/childs-lecture-notes.txt` (URL: <https://cs.umd.edu/~amchilds/qa/qa.pdf>); de Wolf, *Quantum Computing: Lecture Notes*, §11.2, printed pp. 90–92 (PDF pp. 102–104), `research/quantum-computing-planning/sources/qc_r3/de-wolf-1907.09415.txt` (URL: <https://arxiv.org/pdf/1907.09415>); and Carothers, *A Short Course on Approximation Theory*, Chapter 5, Lemma 5.19 and Theorems 5.21–5.22, printed pp. 57–60, `research/quantum-computing-algorithms-60-2026-10-15-batch-39-sources/carothers.txt` (URL: <https://eigen-space.org/approx2526/pdf/carothers+a-short-course-in-approximation-theory-new.pdf>). The cited results agree with the local proofs; the local items supply the additional details used here.

No defect remains that this reader could not edit.

## Page verdicts

- `polynomial-method-and-approximate-degree` (A): no unresolved mathematical or summary defect found after the OR theorem title correction.
- `polynomial-method-and-approximate-degree-examples` (B): no unresolved defect found in the page summary or assigned examples. B-page prose was read-only.

## Blockers and coverage limits

At the status check, the run had two blockers outside batch 39: the `1-scaffold` stage specification reported an invalid prerequisite graph because of `def-qc-effective-unitary-matrix-input` in batch 12, and `3a-split` reported `split-10` failed three times. Neither blocked this batch's mathematical review.

I checked the direct supplier interfaces needed for these claims and selected in-run supplier proofs used by the output-law argument; I did not independently re-audit every transitive proof of the published foundational dependencies.

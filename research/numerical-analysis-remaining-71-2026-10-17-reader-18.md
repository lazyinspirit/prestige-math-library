# Step 3a reader report — batch 18

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `18`  
Reviewed: 2026-10-18

## Inventory opened

Pages:

- `library/numerical-linear-algebra-and-approximation/interpolative-cur-and-nystrom-decompositions.md` (assigned A page).
- `library/numerical-linear-algebra-and-approximation/interpolative-cur-and-nystrom-decompositions-examples.md` (assigned B page).
- `library/numerical-linear-algebra-and-approximation/sketched-least-squares-and-subspace-embeddings.md` (the A page's required page dependency).

Assigned items, reviewed in supplier order:

- `alg-strong-rrqr-interpolative-decomposition`
- `lem-moore-penrose-products-are-orthogonal-projectors`
- `def-cur-reconstruction-cores`
- `def-psd-nystrom-approximation`
- `lem-strong-rrqr-interpolative-decomposition-returns-a-status`
- `thm-strong-rrqr-interpolative-decomposition-error`
- `thm-skeleton-cur-exactness`
- `thm-cur-projection-residual-bound`
- `lem-nystrom-square-root-projector-identity`
- `thm-psd-nystrom-order-and-exactness`
- `thm-nystrom-deterministic-spectral-residual-bound`
- `cex-arbitrary-selected-columns-miss-dominant-direction`
- `ex-exact-rank-two-skeleton-cur`
- `ex-psd-nystrom-residual-is-psd`

Opened the direct item suppliers needed for these proofs: `alg-strong-rank-revealing-qr-with-finite-swaps`; `def-full-reduced-and-column-pivoted-computational-qr-factorisations`; `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block`; `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`; `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`; `def-householder-reflector`; `def-real-and-complex-givens-transformations`; `def-permutation-matrix-partial-pivoting-and-pivot-growth`; `thm-qr-factorisation-over-r-or-c`; `def-matrix-product-and-identity-matrix`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`; `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique`; `def-rank-and-nullity`; `thm-rank-nullity`; `thm-cauchy-schwarz-in-an-inner-product-space`; `def-non-negative-and-positive-operator`; `thm-non-negative-operator-characterisations`; `thm-non-negative-square-root-exists-and-is-unique`; `def-singular-values-of-an-endomorphism`; `prop-singular-values-are-well-defined`; `thm-singular-value-decomposition`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `thm-operator-norm-is-the-largest-singular-value`; `lem-singular-value-product-bound`; `lem-singular-values-lipschitz-in-spectral-norm`; `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`; and `thm-strong-rrqr-singular-value-comparisons`.

## Source evidence

- Gu and Eisenstat, [*Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization*](https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf), Lemma 3.1, Algorithm 4, and Theorem 3.2, printed pp. 853–854. The theorem's full-column-rank premise and the combined coefficient/trailing-block score support the exact-arithmetic comparison used by the assigned theorem. The local proof was checked against the actual block argument.
- Gittens and Mahoney, [*Revisiting the Nyström Method*](https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf), Lemma 1 and §4.1.1 Theorem 2, printed pp. 42–43, including the full-row-rank premise on the leading sketch block. The (q=1) specialization matches the assigned deterministic estimate.
- Halko, Martinsson, and Tropp, [*Finding Structure with Randomness*](https://arxiv.org/pdf/0909.4061), Theorem 9.1 and its proof, printed pp. 50–52. The theorem assumes full row rank of the leading sketch block; the assigned Nyström proof also supplies its own square-root projection comparison.

The CUR exactness, projected-core residual bound, Moore–Penrose projector identities, and direct ID certificate were checked from the opened local statements and proofs. The cited sketch page is a page-level prerequisite; the assigned deterministic statements do not use randomized embedding conclusions.

## Repairs made

- `def-psd-nystrom-approximation`, `lem-nystrom-square-root-projector-identity`, `thm-psd-nystrom-order-and-exactness`, `thm-nystrom-deterministic-spectral-residual-bound`, and `thm-cur-projection-residual-bound`: explicitly declared `\(\mathbb F\in\{\mathbb R,\mathbb C\}\)` where the Statement/Definition used an otherwise unbound `\(\mathbb F\)`. The Nyström constructions and proofs already used adjoints, Hermitian positivity, and the real/complex pseudoinverse and square-root suppliers; the declared field makes those existing hypotheses explicit without changing the results.
- `thm-psd-nystrom-order-and-exactness`: changed “selected columns capture the range” to “the sketch captures the range.” Its actual hypothesis allows any conformal sketch (S) and is stated as `\(\operatorname{Ran}(AS)=\operatorname{Ran}(A)\)`.
- `cex-arbitrary-selected-columns-miss-dominant-direction`: restricted the false universal claim to `\(m\ge n\ge2\)` and `\(1\le k<n\)`, and declared `\(T\in\mathbb R^{k\times n}\)`. This makes `\(\sigma_{k+1}(A)\)` and the coefficient maximum defined throughout the claim; the displayed (2\times2), (k=1) witness still refutes it.

Updated the affected batch proof contracts: regenerated six proof-bearing entries and refreshed the boundary evidence for the changed Nyström field/range wording. The changed items contained no `verification.judge` records to remove. No proof steps or page prose required edits.

## Uneditable defect

`alg-strong-rank-revealing-qr-with-finite-swaps` is a published dependency, so it was not edited. In `## Definition`, line 29 says each finite-precision Householder/Givens update is a “fixed finite sequence” of scalar operations without specifying that sequence or its parameter construction. Line 37 requires retaining data representing an *exact* unitary product (W) and certifying `\(\|A\Pi-W\widehat R\|_2\le\varepsilon\)`, but gives no procedure or representation for constructing and checking that exact (W) from the rounded updates. The cited QR definition and transformation theorem establish factorization/annihilation facts, but do not supply these finite-precision instructions. A complete finite-precision QR update specification and exact transformation-record/certificate procedure are needed. This affects the assigned consumer `alg-strong-rrqr-interpolative-decomposition`.

## Page verdicts

- `interpolative-cur-and-nystrom-decompositions`: the summary matches the current exact-arithmetic ID result, its finite-precision direct certificate, the CUR distinction, and the deterministic Nyström hypotheses. The page-level sketch prerequisite was opened; no randomized claim is imported into the assigned statements. Verdict: **pass**, with the published QR dependency issue above routed to the owner.
- `interpolative-cur-and-nystrom-decompositions-examples`: the summary accurately describes the three assigned examples. The counterexample witness still refutes its now well-formed interior-rank claim. Verdict: **pass**.

## Validation and blocker

- `reflow` on all six changed items: exit 0; all unchanged by reflow.
- `precheck`: all five changed proof-bearing items passed; the changed definition had no proof section to check.
- Strict batch `proof-contract`: 14/14 items checked, zero errors and zero warnings.
- `proof-layout`: six changed items, 17 steps, zero defects.
- A run-wide `proof-contract-coverage` invocation against this batch-local contract compared it with unrelated run items and reported missing entries outside batch 18; it is not a batch-scoped contract check. The strict batch contract check above passed.
- No blocker to completing this reader assignment. The uneditable published dependency defect remains for owner routing.

Coverage limitation: I opened every assigned page and item and the direct item suppliers used by their proofs, but did not recursively audit every older dependency behind each published supplier. The conclusions here are therefore limited to the opened supplier statements/proofs and the assigned batch; the published dependency finding records the concrete finite-precision specification gap found in that scope.

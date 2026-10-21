# Step 3a reader report — batch 53

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `53`

## Opened inventory

Assigned pages:

- `real-phase-retrieval-and-complement-property`
- `real-phase-retrieval-and-complement-property-examples`

Assigned items, reviewed in dependency order:

- `lem-ip-vandermonde-determinant`
- `def-ip-real-frame-phase-retrieval`
- `lem-ip-real-phase-retrieval-quotient-metric`
- `def-ip-frame-complement-property`
- `def-ip-real-full-spark-measurement-family`
- `alg-ip-finite-sign-enumeration-phase-retrieval`
- `thm-ip-real-phase-retrieval-complement-property`
- `thm-ip-finite-sign-enumeration-correctness`
- `cor-ip-full-spark-sharp-real-phase-measurement-count`
- `ex-ip-fourier-translation-reflection-ambiguity`
- `cex-ip-real-failed-complement-partition`
- `ex-ip-sign-enumeration-budget-exhaustion`
- `ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame`
- `cex-ip-complex-complement-property-insufficient`

Supporting dependency items opened for the determinant, quotient, complement-property, full-spark, least-squares, and Fourier arguments:

- Determinant and polynomial suppliers: `def-determinant-of-a-square-matrix`, `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, `thm-invertible-matrix-theorem`, `def-multivariate-polynomial-ring-by-iteration`, `def-polynomial-ring-over-a-commutative-ring`, `cor-factor-theorem-over-a-commutative-ring`, `cor-polynomial-ring-over-a-domain-is-a-domain`, `thm-universal-property-of-a-polynomial-ring`, `thm-reals-field`, `def-natural-numbers`, and `thm-induction-principle`.
- Inverse-problem and quotient suppliers: `def-ip-forward-map-and-solution-classes`, `def-ip-identifiability-and-stability-modulus`, `def-metric-space`, `def-max-min`, `def-ordered-field`, `def-euclidean-inner-product`, `lem-metrics-on-rn`, `def-abs-value`, `lem-of-abs-value`, `lem-of-square-positive`, and `thm-of-square-roots`.
- Linear-algebra suppliers: `def-linear-independence`, `def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`, `def-real-and-complex-inner-product-space`, `def-orthogonality-and-orthogonal-complement`, `def-standard-bilinear-form-on-a-coordinate-space`, `def-linear-subspace`, `def-linear-basis`, `thm-dimension-of-a-linear-subspace`, `def-dimension`, `cor-independent-set-is-no-larger-than-a-finite-spanning-set`, `lem-standard-basis-of-f-n`, `def-linear-map`, `def-kernel-and-image-of-a-linear-map`, `thm-linear-kernel-image-and-injectivity`, `def-rank-and-nullity`, and `thm-rank-nullity`.
- Least-squares suppliers: `def-moore-penrose-pseudoinverse`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b`, and `thm-singular-value-decomposition`.
- Complex-arithmetic suppliers: `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, and `lem-complex-conjugation-and-modulus-laws`.
- Matrix-scope suppliers used to assess a published hypothesis issue: `def-invertible-matrix-and-general-linear-group` and `def-matrices-over-a-commutative-ring`.

The batch proof-contract file was opened. Its derivations and boundary records were treated as evidence and checked against the current item arguments. Both page bodies are empty; their inventories, status, and `compact-v1` layout match the manifest. The only TikZ diagram in scope is in `def-ip-real-frame-phase-retrieval`; its arrows and labels express `I_Φ ∘ q = S ∘ T_Φ`, with the stated fixed relabeling identifying the lower codomain with `Y_m`. No proof relies on the diagram. The assigned statements and examples are uninterrupted by hyperlinks, with references following their complete sections.

## Edits and evidence

- `ex-ip-fourier-translation-reflection-ambiguity`, Verification step 3.1: repaired the witness check. The old text used nonzeroness to infer that a transform was not `-f`; that inference does not follow. The revised step compares supports directly: `f` and `-f` have support `{0,1}`, while the two transforms have supports `{1,2}` and `{0,2}`. The previously checked Fourier-magnitude identities are unchanged. The matching derivation in the batch proof contract was updated.
- `alg-ip-finite-sign-enumeration-phase-retrieval`: removed the assertion that the incumbent is minimal among processed candidates and the pattern-count/complexity assertion from `## Definition`. Those are algorithmic properties, not procedure instructions.
- `thm-ip-finite-sign-enumeration-correctness`: stated and proved termination, the exact canonical-pattern count (`1` for `m=0`, `2^(m−1)` for `m≥1`), the resulting exponential pattern count, the SVD/solve bounds, and the incumbent-minimum invariant. The final global-minimum argument now cites the earlier invariant. The contracts for this theorem and its assigned example consumer were updated to quote the current supplier sections and steps. No stale `verification.judge` record was present on the changed items.
- A current item/manifest reference search found the correctness theorem and `ex-ip-sign-enumeration-budget-exhaustion` as the algorithm's consumers, and only that example as a consumer of the correctness theorem; both were reviewed, and no outside consumer was found.

Checks for the three changed items:

- `alg-ip-finite-sign-enumeration-phase-retrieval`: reflow unchanged; precheck passed (0 proof rows).
- `thm-ip-finite-sign-enumeration-correctness`: reflow unchanged; precheck passed (1 proof checked, 0 failing).
- `ex-ip-fourier-translation-reflection-ambiguity`: reflow unchanged; precheck passed (direct, 1 proof checked, 0 failing).
- Final batched `node tools/proof-layout.mjs` on all three changed item paths: 3 items, 11 steps, 0 defects.

## Uneditable findings

1. `thm-invertible-matrix-theorem`, Statement opening sentence: `F` is not declared to be a field. The repository's matrix carrier is defined over commutative rings; over `Z`, multiplication by `2` has trivial kernel but is not invertible, so the stated equivalence between invertibility and trivial kernel fails. The Vandermonde consumer uses the real specialization, but the published statement needs an explicit field hypothesis. Routed with consumer `lem-ip-vandermonde-determinant`.
2. `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b`, Statement opening sentence: the scalar field `F` is unrestricted, while `A^+` is defined here only for real or complex matrices. The theorem needs to state that scope (or otherwise restrict its interface). The assigned real algorithm is within the valid scope. Routed with consumer `alg-ip-finite-sign-enumeration-phase-retrieval`.
3. `def-euclidean-inner-product`, Definition opening paragraph: the defining prose is malformed, including “is the function space of The vector space `F^X`” and the later phrase “the same set that … calls `R^n`.” The inner-product formula is present, but the domain/vector-space setup in this published supplier is not coherently stated. It needs a clean definition of `R^n` as functions `n → R` with pointwise vector operations. Routed with consumer `lem-ip-real-phase-retrieval-quotient-metric`.

These subjects are published dependencies and outside this reader's edit scope. No other defect was found in the assigned items or pages.

## Page verdicts and blockers

- `real-phase-retrieval-and-complement-property` (A page): no page-level defect. Its frontmatter-only inventory matches the manifest; the real retrieval definitions, quotient metric, complement-property theorem, sign-enumeration algorithm, and full-spark count are supported by the reviewed arguments after the edits above. The published dependency findings are reported separately.
- `real-phase-retrieval-and-complement-property-examples` (B page): no page-level defect. Its frontmatter-only inventory matches the manifest, and the five listed examples/counterexamples are supported by the reviewed computations and witnesses after the Fourier witness repair.
- Blocker: none within the assigned write scope. The three published-dependency findings require owner routing if those published interfaces are to be repaired.

## Coverage note

All 14 assigned items, both assigned pages, the batch proof contracts, and the listed dependencies needed to check the local arguments were opened. I did not independently authenticate the external bibliography PDFs; the reviewed claims were checkable from the local proofs and explicit computations. The three findings concern published carriers, so no in-run observed-byte snapshot is claimed.

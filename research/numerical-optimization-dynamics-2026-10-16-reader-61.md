# Step 3a reader report — batch 61

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `61`  
Role: reader

## Verdict

- **A page — `verified-linear-systems-and-spectral-enclosures`:** The page summary matches the assigned mathematics and its seven prerequisite pages support the stated topics. The page remains draft. Its interval LDL consumer path reaches two batch 14 defects in outward complex-rectangle division; those are routed in the findings file.
- **B page — `verified-linear-systems-and-spectral-enclosures-examples`:** The summary and all three examples are consistent with their computations and cited results. The page remains draft; no page defect found.
- **Blocker:** No reader-side blocker. The run remains active; the latest status reported `3a-read` at 61/107 with nothing running. Two uneditable batch 14 dependency findings remain for owner routing.

## Opened inventory

### Assigned pages

- `library/numerical-linear-algebra-and-approximation/verified-linear-systems-and-spectral-enclosures.md`
- `library/numerical-linear-algebra-and-approximation/verified-linear-systems-and-spectral-enclosures-examples.md`

### Page prerequisites opened

- `library/linear-algebra/dual-spaces-bilinear-forms-and-inertia.md`
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`
- `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md`
- `library/numerical-linear-algebra-and-approximation/sparse-direct-elimination-and-ordering.md`
- `library/numerical-linear-algebra-and-approximation/outward-rounded-interval-and-ball-arithmetic.md`
- `library/numerical-linear-algebra-and-approximation/computed-schur-decompositions-and-nonnormal-spectra.md`
- `library/algebraic-topology/homology-axioms-degree-and-classical-applications.md`

The homology prerequisite supplies Brouwer through the page’s fixed-box lemma. The other prerequisites match the spectral, inertia, direct-factorization, sparse LDL, interval-arithmetic, and Neumann-bound dependencies.

### Assigned items reviewed in dependency order

**A page (36 items):**

`def-complex-infinity-matrix-norm`; `def-hermitian-residual-orthogonality-certificate`; `def-verified-linear-residual-certificate-data`; `lem-brouwer-fixed-point-for-closed-boxes`; `lem-complex-hermitian-realification-identities`; `lem-hermitian-eigenvalue-frobenius-bound`; `lem-hermitian-rayleigh-residual-spectrum-distance`; `thm-inertia-guided-bisection-loop-soundness`; `thm-interval-determinant-sign-certificate-soundness`; `lem-complex-hermitian-eigenvalue-perturbation`; `lem-complex-hermitian-inertia-congruence`; `lem-complex-infinity-matrix-norm-submultiplicative`; `lem-neumann-inverse-norm-bound`; `lem-hermitian-two-by-two-inertia-sign-test`; `lem-complex-infinity-neumann-inverse-norm-bound`; `lem-hermitian-block-ldl-inertia-additivity`; `thm-krawczyk-set-inclusion-existence-and-uniqueness`; `thm-near-orthonormal-hermitian-eigenvalue-enclosure`; `thm-uniform-linear-residual-solution-enclosure`; `thm-complex-resolvent-cover-certificate-soundness`; `alg-complex-resolvent-cover-validator`; `alg-interval-determinant-sign-certifier`; `alg-interval-hermitian-ldl-inertia-certifier`; `alg-interval-linear-krawczyk-certifier`; `alg-near-orthonormal-hermitian-eigenvalue-certifier`; `alg-point-verified-linear-system-certifier`; `alg-uniform-interval-linear-residual-certifier`; `thm-complex-resolvent-cover-validator-soundness`; `thm-interval-determinant-sign-certifier-soundness`; `thm-interval-hermitian-ldl-inertia-certifier-soundness`; `thm-interval-linear-krawczyk-certifier-soundness`; `thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness`; `thm-point-verified-linear-system-certifier-soundness`; `thm-uniform-interval-linear-residual-certifier-soundness`; `alg-ordered-hermitian-eigenvalue-bisection`; `thm-ordered-hermitian-eigenvalue-bisection-soundness`.

**B page (3 items):**

`ex-certified-ill-conditioned-two-by-two-linear-solve`; `ex-uncertain-linear-matrix-family-contains-singular-member`; `ex-hermitian-eigenvalue-bisection-by-verified-inertia`.

### Dependency items opened

**Published mathematical suppliers:**

`def-matrix-product-and-identity-matrix`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `thm-brouwer-fixed-point-theorem`; `thm-complex-spectral-theorem-for-normal-endomorphisms`; `def-self-adjoint-and-normal-endomorphism`; `thm-rank-nullity`; `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`; `def-euclidean-inner-product`; `thm-sylvesters-law-of-inertia`; `thm-weyl-inequalities-for-self-adjoint-sums`; `cor-operator-norm-submultiplicative-and-t-star-t-identity`; `def-determinant-of-a-square-matrix`; `thm-real-square-matrix-invertible-iff-determinant-nonzero`; `thm-characteristic-polynomial-is-similarity-invariant`; `def-characteristic-polynomial-of-a-matrix`; `thm-determinant-of-a-triangular-matrix`; `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`; `def-trace-of-a-square-matrix`; `def-real-and-complex-inner-product-space`; `def-inner-product-space`; `def-inner-product-norm`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`; `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`; `thm-non-negative-square-root-exists-and-is-unique`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`; `lem-neumann-invertibility-for-finite-matrices`; `def-complex-l-two-inner-product`.

**Current-run dependencies, read before their batch 61 consumers:**

- Batch 1: `def-standard-relative-floating-point-model-and-unit-roundoff`; `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`; `lem-product-of-one-plus-deltas-gives-theta-n`; `thm-cauchy-schwarz-in-an-inner-product-space`; `lem-rounded-linear-and-normal-residual-certificates`.
- Batch 2: `def-field`; `def-matrix-space`; `def-symmetric-structural-elimination-graph-and-ordering`.
- Batch 33: `lem-neumann-invertibility-for-finite-matrices`.
- Batch 14: `def-complete-ordered-real-field`; `def-dyadic-floating-point-format-and-directed-rounding`; `lem-nonnegative-square-root-exists-and-unique`; `alg-dyadic-square-root-bisection`; `def-intervals-rectangles-and-complex-balls`; `lem-directed-dyadic-rounding-enclosure-and-error`; `lem-real-and-complex-modulus-rules`; `thm-dyadic-square-root-bisection-encloses`; `def-outward-rounded-interval-and-ball-operations`; `thm-outward-rounded-operations-are-isotone-and-dag-sound`.
- Batch 16: `def-hermitian-structural-graph-adapter`; `def-permutation-matrix-partial-pivoting-and-pivot-growth`; `alg-certified-hermitian-one-and-two-by-two-ldl-kernel`; `alg-symmetric-indefinite-block-ldl-star`.

The current batch manifest, batch 1/2/14/16 manifests, batch 61 proof-contract file, reader brief, and run status were also opened. The proofs and algorithms were judged from current item text, not from manifest or contract verdicts.

## Edits and evidence

- **`lem-complex-hermitian-realification-identities`:** Defined realification for rectangular matrices, stated the compatible-product and rectangular-adjoint identities with their dimensions, made the standard coordinate inner products explicit, and added the Euclidean norm, complex inner-product, and matrix-adjoint suppliers used by the proof. The direct/indirect batch 61 consumer chain was reviewed: `lem-complex-hermitian-eigenvalue-perturbation` and `lem-complex-hermitian-inertia-congruence`, then their downstream eigenvalue enclosure, inertia, certifier, and bisection results. No consumer repair was needed. Its proof contract now cites the added suppliers and current step claims.
- **`lem-hermitian-rayleigh-residual-spectrum-distance`:** Specified the standard complex inner product and vector domain, replaced its real-only Euclidean dependency with the real/complex inner-product definition, and made the norm-ratio step explicit. The eigenbasis expansion then directly gives the residual lower bound. Its proof contract now reflects the complex inner-product source and repaired step. No assigned consumer depends on this item.
- **`def-hermitian-residual-orthogonality-certificate`:** Changed the title to say the data concern an approximate Hermitian eigenbasis; the definition already allows nonzero residual and Gram defect, so “eigenbasis” without “approximate” was too strong.
- No page prose was edited. No `verification.judge` record was present on the repaired lemmas.

Validation after the final item edits: reflow reported all three changed paths unchanged; precheck passed for both proof-bearing lemmas and reported 0 checked / 0 failing for the definition; `node tools/proof-layout.mjs` checked all three changed paths and reported 3 items, 5 steps, 0 defects.

## Uneditable dependency defects

Both findings below are in batch 14, outside this reader’s edit scope. For format precision $p=2$ and lower normal exponent $e_{\min}=0$, the least positive subnormal is $\eta=1/2$. The admissible complex rectangle $X+iY$ with $X=[1/4,1/4]$ and $Y=[0,0]$ excludes zero, but outward rounding of $X^2=[1/16,1/16]$ gives $[0,1/2]$. Thus the rounded denominator $X^2+Y^2$ contains zero. The interval LDL algorithm in this batch returns `pivot-inconclusive` if a required denominator contains zero, so I found no false certificate in that guarded branch; the dependency definition and its proof still need a corrected finite/non-finite branch.

- `def-outward-rounded-interval-and-ball-operations`, `## Definition`, complex-rectangle reciprocal paragraph: the claim that the denominator interval is strictly positive whenever the rectangle excludes zero is false under the stated outward rounding.
- `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `## Proof`, step 1.1: the claim that a coordinate interval excluding zero necessarily has a squared interval with positive lower endpoint is false for the same subnormal example. The proof needs to condition on the *rounded* denominator excluding zero and otherwise use the non-finite status branch.

The findings file binds both subjects to the assigned consumer `alg-interval-hermitian-ldl-inertia-certifier` and records current-source SHA-256 hashes. I did not edit either batch 14 supplier.

## Source access and limitation

I opened Higham’s cited MIMS EPrint PDF. The Rump Acta Numerica PDF cited by the interval suppliers timed out on direct retrieval; the indexed result identified the official paper, but I did not use an unread passage as evidence. The interval counterexample above follows from the exact dyadic-format and outward-operation definitions opened from batch 14.

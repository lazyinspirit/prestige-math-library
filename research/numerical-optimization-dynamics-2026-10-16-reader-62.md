# Step 3a reader report — batch 62

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader (`reader-62`)

## Inventory opened

Assigned pages:

- A page `interval-newton-krawczyk-and-polynomial-root-isolation` — `library/numerical-linear-algebra-and-approximation/interval-newton-krawczyk-and-polynomial-root-isolation.md`.
- B page `interval-newton-krawczyk-and-polynomial-root-isolation-examples` — `library/numerical-linear-algebra-and-approximation/interval-newton-krawczyk-and-polynomial-root-isolation-examples.md`.

Assigned A-page items, read in the manifest's dependency order:

- `lem-polynomial-squarefree-decomposition-and-multiplicity`
- `thm-sturm-sign-variation-counts-distinct-roots`
- `lem-squarefree-integer-polynomial-root-separation-bound`
- `alg-rational-polynomial-root-isolation`
- `thm-rational-polynomial-root-isolation-is-sound-and-finite`
- `def-real-boxes-and-interval-jacobian-enclosures`
- `lem-brouwer-fixed-point-for-closed-box`
- `lem-real-interval-arithmetic-preserves-enclosure`
- `alg-scalar-interval-newton-certification`
- `alg-krawczyk-root-certification`
- `alg-smooth-function-root-isolation`
- `lem-interval-jacobian-mean-value-enclosure`
- `thm-scalar-interval-newton-exclusion-and-inclusion`
- `thm-smooth-function-root-isolation-soundness`
- `thm-krawczyk-inclusion-exclusion-and-uniqueness`

Assigned B-page examples:

- `ex-double-polynomial-root-has-no-sign-change`
- `ex-validated-mass-action-equilibrium-root`
- `ex-event-root-with-derivative-separated-from-zero`

Page prerequisites opened as context:

- `nonlinear-equations-and-newton-methods`
- `outward-rounded-interval-and-ball-arithmetic`
- `verified-linear-systems-and-spectral-enclosures`
- `analyticity-liouville-and-morera`

I also checked the relevant statement/definition interfaces of these direct item dependencies: `def-monic-greatest-common-divisor-of-polynomials`, `thm-bezout-identity-for-polynomials`, `lem-polynomial-gcd-is-stable-under-field-extension`, `def-polynomial-ring-over-a-commutative-ring`, `def-formal-derivative-of-a-polynomial`, `thm-polynomial-division-algorithm-over-a-field`, `thm-polynomial-degree-of-a-product-over-a-domain`, `thm-fundamental-theorem-of-algebra-liouville-proof`, `prop-formal-derivative-laws`, `cor-factor-theorem-over-a-commutative-ring`, `thm-rat-ordered-field`, `thm-complex-numbers-form-a-field`, `thm-algebra-of-continuous-functions`, `thm-intermediate-value`, `def-real-numbers`, `thm-reals-field`, `thm-reals-ordered-field`, `def-determinant-of-a-square-matrix`, `lem-complex-conjugation-and-modulus-laws`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `cor-determinant-is-invariant-under-similarity`, `def-intervals-rectangles-and-complex-balls`, `def-c-one-map-and-local-inverse`, `def-jacobian-matrix-and-gradient`, `thm-brouwer-fixed-point-theorem`, `def-outward-rounded-interval-and-ball-operations`, `lem-directed-dyadic-rounding-enclosure-and-error`, `def-continuity-and-derivative-on-real-interval`, `thm-rank-nullity`, `lem-mean-value-theorem-on-closed-interval`, `def-total-derivative-in-euclidean-space`, `thm-chain-rule-for-total-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, and `lem-geometric-sequence-null`.

## Review and edits

The polynomial chain is sound: the gcd sequence removes one unit of root multiplicity at each stage; the Sturm proof establishes the sign-variation change at roots and internal sequence zeros; and the determinant/discriminant argument gives the stated positive separation bound. The isolation procedure handles exact split-point roots separately, labels roots through the squarefree factors, and terminates because intervals containing two distinct active roots cannot shrink below the fixed separation bound. The double-root example's initial interval and variation count are correct.

The scalar interval-Newton proof uses the mean value theorem for root containment and monotonicity, and uses the intermediate value theorem for existence under strict inclusion. The multidimensional proof's rowwise mean-value matrix, Brouwer fixed-point step, exclusion argument, and separate contraction bound justify the claims as stated. The mass-action and event examples' interval ranges, derivatives, Newton images, and statuses were checked exactly.

Three repairs were made:

1. In `alg-krawczyk-root-certification`, the input now requires an exactly represented rational minimum side width `η`. The procedure compares dyadic box widths to `η`; the former unrestricted real input did not supply an exact comparison operation. Reflow reported unchanged, precheck reported `0 checked, 0 failing` (the algorithm has no proof section), and the final proof-layout pass reported no defects.
2. In `alg-smooth-function-root-isolation`, the minimum width `η` is likewise now an exactly represented rational. Its width comparisons are therefore exact. Reflow reported unchanged, precheck reported `0 checked, 0 failing`, and the final proof-layout pass reported no defects.
3. The A-page summary now says that Krawczyk strict inclusion proves existence with a certified nonsingular point preconditioner. The previous sentence omitted this essential hypothesis: the local theorem assumes nonsingular `C`, and the procedure certifies it by an exact left-inverse witness (`WC=I`).

The affected procedure quotes were synchronized in `research/numerical-optimization-dynamics-2026-10-16-batch-62.proof-contracts.json`: the Krawczyk theorem contract, smooth-isolation theorem contract, and event-example contract. The changed items had no stale `verification.judge` records.

Authoritative cross-checks:

- Siegfried M. Rump, “Verification methods: Rigorous results using floating-point arithmetic,” *Acta Numerica* 19 (2010), §6.2, Theorem 6.2, pp. 30–31: with `0∉f′(X)`, the interval Newton image contains every root; an image contained in `X` yields a unique root, and an image disjoint from `X` excludes roots. The proof uses the mean value theorem and the endpoint sign argument. The local result uses the stricter interior-inclusion test. [Article PDF](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf).
- Rump, §§13.1 and 13.3, Theorems 13.1 and 13.3: the vector mean-value enclosure and Krawczyk/Brouwer inclusion argument. The local proof also supplies its own contraction argument for uniqueness. [Article PDF](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf).
- Marc Moreno Maza, “Tutorial on real root isolation of polynomial systems,” §§12–14, PDF pp. 12–14: the Sturm-sequence conditions, variation theorem, and Euclidean-sequence construction. [Tutorial PDF](https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf).

No defects remained outside the permitted edit scope.

## Page verdicts

- `interval-newton-krawczyk-and-polynomial-root-isolation` — pass after the page-summary caveat repair. Its polynomial, scalar interval-Newton, Krawczyk, and unresolved-box summaries match the reviewed items.
- `interval-newton-krawczyk-and-polynomial-root-isolation-examples` — pass. Its three examples' claims and computed intervals match the cited procedures and theorems.

## Blocker

No batch 62 blocker. The current autopilot status still reports an unrelated run-level `3a-split` blocker: `split-20 failed 3x (covers 20)`.

## Coverage note

All assigned items and pages, all four declared page prerequisites, and the direct item-supplier statements/interfaces needed for these claims were reviewed. This was not a full independent audit of every transitive proof behind published suppliers; page edges to the Newton and verified-linear-systems pages were checked as context and are not imported as logical premises by this batch's item proofs.

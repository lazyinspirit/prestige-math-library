# Step 3a reader report — batch 47

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-47`

## Opened assignment

Pages reviewed:

- `library/quantum-algorithms/quantum-signal-processing.md` (A-page)
- `library/quantum-algorithms/quantum-signal-processing-examples.md` (B-page)

All 22 assigned item carriers were opened and reviewed in dependency order. The B-page example is listed last; internal suppliers precede their consumers.

1. `lem-qa-23-polynomial-interval-sign-certificate`
2. `lem-qa-23-sturm-root-counting`
3. `lem-qa-23-exact-interval-boundedness-decision`
4. `alg-qa-23-polynomial-root-isolation`
5. `thm-qa-23-polynomial-root-isolation-correctness`
6. `alg-qa-23-bounded-height-numerical-roots`
7. `thm-qa-23-bounded-height-root-arithmetic-cost`
8. `def-qa-23-qsp-signal-sequence`
9. `alg-qa-23-certified-phase-approximation`
10. `def-qa-23-qsp-admissible-polynomial-pair`
11. `lem-qa-23-hermitian-signal-convention-conversion`
12. `lem-qa-23-phase-sequence-unitarity`
13. `lem-qa-23-positive-polynomial-complement-factorization`
14. `thm-qa-23-certified-phase-approximation-correctness`
15. `thm-qa-23-qsp-phase-factorization`
16. `thm-qa-23-real-polynomial-completion`
17. `lem-qa-23-qsp-completion-peel-arithmetic-cost`
18. `alg-qa-23-qsp-phase-synthesis`
19. `thm-qa-23-qsp-phase-implementation-error`
20. `thm-qa-23-qsp-query-cost`
21. `thm-qa-23-qsp-synthesis-correctness`
22. `ex-qa-23-degree-one-qsp`

I opened the direct outside-assignment dependency statements/definitions needed by the assigned proofs, including the polynomial, field, complex-analysis, inner-product/operator-norm, quantum circuit and register, trigonometric, and arithmetic-cost foundations. The specifically checked dependency IDs were:

`cor-operator-norm-submultiplicative-and-t-star-t-identity`; `cor-triangle-inequality-for-inner-product-norm`; `def-complex-conjugate-real-imaginary-part-and-modulus`; `def-discriminant-of-a-monic-polynomial`; `def-field`; `def-formal-derivative-of-a-polynomial`; `def-inner-product-norm`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `def-ordered-field`; `def-polynomial-degree-leading-coefficient-and-monic`; `def-polynomial-ring-over-a-commutative-ring`; `def-principal-inverse-tangent`; `def-qc-circuit-cost-model`; `def-qc-circuit-denotational-semantics`; `def-qc-controlled-unitary-access`; `def-qc-dirac-notation-conversion`; `def-qc-register-and-computational-basis`; `def-qc-relative-phase`; `def-real-and-complex-inner-product-space`; `def-real-numbers`; `def-sine-and-cosine-by-power-series`; `lem-complex-conjugation-and-modulus-laws`; `lem-derivative-of-a-power`; `lem-integral-elementary-bounds`; `lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs`; `lem-polynomial-gcd-is-stable-under-field-extension`; `lem-sine-and-cosine-series-converge-everywhere`; `lem-sine-positive-and-cosine-decreasing-on-zero-two`; `thm-algebra-of-continuous-functions`; `thm-alternating-series-test`; `thm-cofunction-supplementary-and-reflection-identities`; `thm-complex-exponential-addition-and-real-extension`; `thm-complex-numbers-form-a-field`; `thm-discriminant-root-formula-and-repeated-root-criterion`; `thm-eulers-formula`; `thm-extreme-value-r`; `thm-fermat-interior-extremum`; `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`; `thm-intermediate-value`; `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`; `thm-of-square-roots`; `thm-polar-form-with-unique-principal-argument`; `thm-polynomial-degree-of-a-product-over-a-domain`; `thm-polynomial-division-algorithm-over-a-field`; `thm-principal-inverse-tangent-calculus`; `thm-qc-computational-basis-orthonormal`; `thm-quarter-turn-values-and-shift-formulas`; `thm-reals-field`; `thm-reals-ordered-field`; `thm-sine-and-cosine-parametrize-the-unit-circle`; `thm-sine-and-cosine-subtraction-formulas`; `thm-sine-cosine-signs-monotonicity-and-ranges`.

Additional context sources opened for dependency details were `def-inner-product-space`, `def-monoid-finite-product`, `prop-standard-coordinate-inner-products`, and `lem-standard-basis-of-f-n`. The phase-approximation repair also uses `def-complex-exponential` and `lem-complex-exponential-series-converges-everywhere`.

The source literature checked for the root-count and QSP claims was Gilyén et al., *Quantum singular value transformation and beyond*, arXiv:1806.01838, Theorems 3–5 and Lemma 6 (PDF pp. 7–11), Eq. (16) (p. 12), and Corollary 10 (p. 13); Perrucci and Roy, *Algebraic Winding Numbers*, arXiv:2305.08638v3, §1.2 and Theorem 14; UC Davis, *Complex Analysis*, Theorem 25 and argument/winding discussion, pp. 43–45; and Childs, *Lecture Notes on Quantum Algorithms*, Chapter 29 §29.2, Lemma 29.1 and Eq. (29.21), pp. 144–146.

## Repairs and evidence

- `alg-qa-23-bounded-height-numerical-roots`: made `ROUND-QSP` an exact finite coefficient-rounding procedure. It now specifies the coefficient bound (`A=1` for degree zero and `A=(d+1)d^d` for `d≥1`), initializes and increments the precision loop, gives the finite mesh-index interval `M=(A+2)2^L`, and specifies the binary-search bounds, branches, and downward tie rule. `GRID-ROOTS` now returns an empty list immediately for a nonzero constant polynomial, before the `max_{j<n}` expression and the outer grid box are used. These cases and loop instructions are required for the algorithm to be defined on every stated input.
- `thm-qa-23-bounded-height-root-arithmetic-cost`: aligned the cost proof with the repaired procedure. The constant-input case is handled directly; the bivariate grid-exclusion estimate is restricted to `n≥1`; the coefficient-mesh search and integer-midpoint work are counted as specified; and normalization is only invoked for `n≥1`, where the coefficient ratios are defined.
- `lem-qa-23-hermitian-signal-convention-conversion`: added the quarter-turn theorem dependency and used its exact sine/cosine values, together with the cited cancellation identity, in the conversion derivation. Added exact source locators for Gilyén Eq. (16) and Childs Eq. (29.21), and marked those printed conversion formulas as not used: direct substitution at `x=1` makes each displayed equation fail. The local convention conversion remains proved by its displayed matrix calculation.
- `lem-qa-23-phase-sequence-unitarity`: stated the required 2×2 matrix adjoint/unitary convention locally and used `†` for matrix adjoints, retaining `P*` and `Q*` for polynomial coefficient conjugation. This removes the ambiguity between the two operations in the unitarity calculation.
- `thm-qa-23-qsp-phase-factorization`: stated the matrix convention locally, used `†` for matrix adjoints, corrected the off-diagonal cancellation signs, and derived unitarity of the source matrix in the proof. Polynomial coefficient conjugation remains denoted by `P*` and `Q*`.
- `thm-qa-23-certified-phase-approximation-correctness`: added the complex-exponential definition and its absolute-convergence lemma as dependencies. The proof now derives the chord estimate from the sourced exponential series rather than assuming an unstated series estimate.

The affected proof contracts were updated. The assigned batch manifest's direct dependencies were synchronized with the two dependency additions. No edited carrier had a `verification.judge` record to remove. Reflow and precheck passed for each of the six changed items. The final batched proof-layout command covered all six changed item paths and reported `6 items, 37 steps, 0 defects`. The proof-contract and batch-manifest JSON both parse successfully.

## Unedited defects

No confirmed uneditable defect remains in the assigned pages, items, or checked dependency statements. The source-equation issues noted above were in an assigned item and are explicitly qualified there; the item's own conversion proof does not depend on those equations. No findings are therefore routed for this batch.

## Page verdicts

- `quantum-signal-processing` (A-page): after the listed repairs, the summaries and linked claims match the reviewed constructions and results. No remaining page-prose defect found.
- `quantum-signal-processing-examples` (B-page): the summary and degree-one example are consistent with the reviewed definitions and convention. No defect found; no B-page prose was edited.

## Status and coverage limit

The run status reports batch 47 still missing from 3a-read until this reader artifact is integrated. There is no batch-local execution blocker. The run also reports an unrelated stage-spec blocker at `1-scaffold`: invalid construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12.

The dependency-closure artifact lists 31 transitive in-run suppliers. I opened the assigned carriers, the direct outside-assignment dependency statements/definitions listed above, and the additional transitive sources needed to check the reviewed arguments, but did not audit every one of those 31 transitive suppliers as a standalone proof. No defect was confirmed in an unaudited supplier; that boundary is the coverage limitation for this report.

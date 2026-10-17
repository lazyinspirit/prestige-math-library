# Step 3a reader report — batch 19

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `19`

At the final status check, the run was active in `3a-read` with no workers in flight.

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/polynomial-approximation-and-chebyshev-interpolation.md`
- `library/numerical-linear-algebra-and-approximation/polynomial-approximation-and-chebyshev-interpolation-examples.md`

Assigned items:

- `def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants`
- `lem-sine-chord-and-lipschitz-bounds`
- `lem-cardinal-lagrange-interpolation-and-operator-norm`
- `cor-best-polynomial-approximation-errors-vanish`
- `lem-chebyshev-cardinal-polynomial-formulas`
- `thm-chebyshev-interpolation-near-best-error-bound`
- `thm-chebyshev-interpolation-lebesgue-constant-log-bound`
- `ex-equispaced-runge-function-interpolation-diverges`
- `ex-chebyshev-interpolation-node-families-and-degree-one-norms`
- `ex-exponential-best-error-rate-for-chebyshev-interpolation`

The seven unique pages listed by the two manifests' `requires` fields were also opened: `approximation-and-compactness-in-ck`, `fundamental-trigonometric-identities`, `polynomial-interpolation-and-remainder`, `the-logarithm-and-general-powers`, `the-topology-of-euclidean-space`, `complex-norms-and-realification`, and `the-complex-exponential-and-eulers-formula`.

Dependency sources opened for the interpolation and Chebyshev claims included `def-cardinal-polynomial-interpolation`, `lem-cardinal-basis-degree-and-values`, `thm-cardinal-polynomial-interpolant-exists-uniquely`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `def-real-polynomial-degree-leading-coefficient-and-monic`, `lem-real-polynomial-factor-at-a-root`, `def-chebyshev-polynomials-first-and-second-kind`, `lem-chebyshev-degree-leading-coefficients-and-extreme-values`, `thm-chebyshev-multiple-angle-identities`, and `thm-half-angle-identities-with-sign-conditions`.

Trigonometric and calculus sources opened included `thm-sine-and-cosine-derivatives`, `thm-algebra-of-derivatives`, `cor-mean-value-theorem`, `cor-differentiable-implies-continuous`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-subtraction-formulas`, `thm-chain-rule`, `lem-derivative-of-a-power`, `cor-trigonometric-parity-and-pythagorean-identity`, `thm-logarithm-derivative-and-integral`, `thm-intermediate-value`, `cor-intermediate-value-theorem-topological`, and `def-pi-via-first-positive-cosine-zero`.

Approximation and compactness sources opened included `cor-weierstrass-approximation-on-a-closed-interval`, `cor-weierstrass-approximation-on-the-unit-interval`, `thm-bernstein-polynomials-converge-uniformly`, `lem-bernstein-basis-moment-identities`, `thm-heine-cantor-metric`, `cor-archimedean-reciprocal`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, and `thm-composition-of-continuous-functions`.

The exponential, factorial, logarithm, geometric-series, and binomial sources opened included `def-real-exponential-function-and-e`, `lem-exponential-series-has-infinite-radius`, `thm-exponential-is-strictly-increasing`, `def-factorial-and-falling-factorial`, `def-natural-logarithm`, `lem-geometric-sequence-null`, `thm-geometric-series`, `thm-binomial-theorem`, `thm-binomial-closed-formula`, and `lem-binomial-coefficients-symmetric-and-unimodal`.

The rational-power and complex sources opened included `def-rational-power`, `lem-rational-power-laws`, `lem-rational-power-monotone`, `lem-rational-power-well-defined`, `def-rational-power-by-rational-supremum`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `def-rationals`, `def-rat-order`, `lem-nat-embeds-int`, `lem-int-embeds-rat`, `def-integer-power`, `def-ordered-field`, `lem-of-square-positive`, `lem-of-zero-mult`, `thm-of-square-roots`, `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-polynomial-degree-and-monic`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`, and `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`.

For the Definition repair, the three outside-batch current-run consumers `thm-na-clenshaw-curtis-interpolation-coefficients`, `thm-chebyshev-lobatto-interpolation-near-best-weighted-error`, and `thm-na-clenshaw-curtis-exactness-and-near-best-error` were opened and checked against the unchanged interpolation interface. Appending the real-root justification preserved their existing exact source excerpts; no outside-batch carrier was edited.

## Repairs

- In `def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants`, added the Chebyshev degree result and real-polynomial root bound to `deps`, then stated why the displayed root nodes exhaust the real roots of $T_{n+1}$. The existing formulas and interpolation interface remain the same. The batch-19 manifest dependencies were synchronized.
- In `lem-cardinal-lagrange-interpolation-and-operator-norm`, defined `sgn` for positive, negative, and zero values and stated why the piecewise-linear test function stays in the unit ball and attains the cardinal sum.
- In `thm-chebyshev-interpolation-near-best-error-bound`, made the pointwise triangle inequality explicit and justified $1+\Lambda_n^\sigma>0$ before taking the infimum.
- In `thm-chebyshev-interpolation-lebesgue-constant-log-bound`, corrected [F2] to quote the cardinal-sum supremum over $x\in[-1,1]$. Added the cosine parameterization of that interval using continuity, endpoint values, and IVT, and made the logarithm comparisons explicit from its integral representation. Added the required dependencies and synchronized the manifest.
- In `ex-equispaced-runge-function-interpolation-diverges`, established that $1+25x^2$ never vanishes, so the example's function is continuous before applying the best-error corollary. Added rational-power dependencies and stated their role in the fractional exponents $n/8\pm1$ used by the product bound. Synchronized the manifest and contract.
- In `ex-exponential-best-error-rate-for-chebyshev-interpolation`, cited continuity of the exponential before using $E_n$ and the interpolation operator. Added the dependency and updated the contract.

No changed item had a stale `verification.judge` record. The Definition has no proof-phase contract. Proof contracts were updated for the changed proof-bearing items.

## Uneditable published-dependency findings

All findings are published items outside batch 19. The exact subject, assigned consumer, location, evidence, and severity are in `numerical-optimization-dynamics-2026-10-16-reader-findings-19.json`.

- `thm-sine-cosine-signs-monotonicity-and-ranges`, Proof 1.1–1.2: the mean value theorem requires continuity on closed subintervals; differentiability of sine and cosine is supplied, but continuity is not cited or included in the source's dependencies.
- `thm-sine-cosine-signs-monotonicity-and-ranges`, Proof 2.1: endpoint values and monotonicity alone do not establish that both ranges contain every intermediate value. The proof needs continuity and the intermediate value theorem.
- `thm-chebyshev-multiple-angle-identities`, Proof 1.1 and 2.1: the $n=1$ second-kind base identity and the induction recurrences from addition formulas are asserted without the calculations or a cited Fact.
- `thm-bernstein-polynomials-converge-uniformly`, Facts [L1] and Proof 1.1: Heine–Cantor is applied without establishing compactness of $[0,1]$, and the proof chooses a uniform bound $M$ although [L1] supplies only uniform continuity.
- `cor-weierstrass-approximation-on-a-closed-interval`, Proof 1.2–1.3: continuity of the affine pullback $g$ is needed before applying the unit-interval Weierstrass theorem, but is not shown or cited.
- `lem-geometric-sequence-null`, Proof 3.6 and 6.1: the convergence conclusion quantifies over rational tolerances only, while the sequence-limit definition requires every positive real tolerance.
- `thm-complex-numbers-form-a-field`, Proof 2.2: [F4] covers nonzero squares only, leaving the zero-square case needed for the claim that the other square is nonnegative.
- `def-complex-conjugate-real-imaginary-part-and-modulus`, Definition: the radicand $a^2+b^2$ is not shown nonnegative before invoking existence of its square root.
- `lem-complex-conjugation-and-modulus-laws`, Proof 1.3 and 2.1: [F5] handles nonzero squares, but the proof also needs the zero-square case.

Each is a short, locally repairable proof or well-definedness omission; all are classified nonfatal and routed to an assigned consumer in the findings file.

## Page verdicts

- **Polynomial approximation and Chebyshev interpolation (A): pass.** The summary matches the definitions, near-best estimate, logarithmic Lebesgue-constant bound, and its caveat about the rate needed for interpolation convergence.
- **Polynomial approximation and Chebyshev interpolation — Examples (B): pass.** The summary matches the degree-one norm calculation, the factorial-rate transfer, and the fixed-function equispaced divergence example.

## Validation and blockers

- `reflow.mts` and `precheck.mts` were run for each of the five changed proof-bearing items; all prechecks passed. The definition check was not applicable and checked zero proofs.
- Strict proof-contract validation passed for all five changed proof-bearing items with zero errors and warnings.
- The required single final renderer-based command reported `proof-layout: 6 items, 20 steps, 0 defects`.
- The batch-19 item and manifest dependency arrays match. No assigned-batch blocker remains; the published-dependency findings remain outside this reader's edit scope.

## Coverage note

All assigned pages and items and the relevant cited suppliers listed above were opened. I did not reconstruct every transitive proof closure of every published supplier. The full sine-chord supplier and the unit-interval Weierstrass/Bernstein suppliers were opened after their consumers rather than before; I checked their exact source sections before finalizing dependent claims, but did not strictly maintain supplier-first reading order on those branches. No external web source was needed for the reviewed claims.

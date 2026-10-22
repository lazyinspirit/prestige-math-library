# Step 3a reader report — batch 2

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `2` only

## Opened inventory

Assigned pages:

- `library/classical-electromagnetism-mathematics/emx-lorentz-form-algebra.md`
- `library/classical-electromagnetism-mathematics/emx-lorentz-form-algebra-examples.md`

Assigned items, read in dependency order:

- `def-emx-lorentz-star`
- `lem-emx-unit-sphere-radial-flux`
- `lem-emx-lorentz-star-square`
- `thm-emx-local-potential-homotopy`
- `ex-emx-punctured-flux`
- `ex-emx-flat-nonexact-connection`

I also read the batch-2 manifest, proof contracts, author notes, coverage record, and cross-batch dependency file. The exact current `Definition`/`Statement` interfaces needed for the six items were opened for all 42 unique direct mathematical suppliers:

`cor-power-series-sums-are-smooth-with-coefficient-formula`, `cor-trigonometric-parity-and-pythagorean-identity`, `cor-zero-total-derivative-on-a-convex-open-set-is-constant`, `def-admissible-regular-parametrized-surface-patch`, `def-closed-and-exact-differential-forms`, `def-cross-product-in-r3`, `def-de-rham-cohomology`, `def-euclidean-inner-product`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `def-pi-via-first-positive-cosine-zero`, `def-riemann-integral-over-a-jordan-set`, `def-sine-and-cosine-by-power-series`, `def-smooth-differential-k-form`, `def-smooth-singular-chain-and-cochain-complexes`, `def-wedge-product-of-differential-forms`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `lem-riemann-integral-unchanged-by-content-zero-modification`, `lem-sine-and-cosine-series-converge-everywhere`, `lem-wedge-monomials-in-a-dual-basis-form-a-basis`, `prop-integration-of-top-forms-by-finite-parametrizations`, `prop-integration-over-an-oriented-embedded-submanifold`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-ftc-second-part`, `thm-heine-borel-rn`, `thm-jordan-boundary-criterion`, `thm-jordan-fubini-by-sections`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `thm-newton-leibniz-with-interior-derivative`, `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains`, `thm-quarter-turn-values-and-shift-formulas`, `thm-real-power-continuity-and-derivatives`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-cosine-zero-sets-and-fundamental-period`, and `thm-stokes-theorem-for-smooth-singular-chains`.

The 42 direct suppliers are present in `research/math-imports.json`; each current local snapshot hash matched its import pin. I checked the exact supplier interfaces and hypotheses used by the assigned arguments, not the complete proofs of every published imported supplier.

## Review and repairs

- `def-emx-lorentz-star`: The fixed coframe, orientation, metric `diag(-1,1,1,1)`, pairing, complementary-basis formula, periods, and exactness definitions are mutually consistent. The basis-pair calculation establishes the defining identity and uniqueness. No edit was needed.
- `lem-emx-lorentz-star-square`: Applying the basis formula twice gives the one negative metric sign and the complementary-block sign `(-1)^{k(4-k)}`. The general exponent and the two stated two-form images are correct. No edit was needed.
- `thm-emx-local-potential-homotopy`: The radial integral is smooth under the stated star-shaped and smoothness hypotheses. Differentiation gives the displayed component expression; closedness reduces it to the derivative of `t^2 F_{mu nu}(a+t(x-a))`, and the cited Newton–Leibniz result has the required interior derivative and endpoint hypotheses. The global class-zero equivalence is the quotient definition; Stokes on the finite cycle proves the nonzero-period obstruction. The conclusion is mathematical and conditional; it makes no claim that a physical field is observed. No edit was needed.
- `lem-emx-unit-sphere-radial-flux`: The spherical map is one-to-one on the parameter interior and has cross product `sin(theta) Phi`; the seam and poles are confined to the boundary. The outward integrand is `sin(theta)`, and the stated Jordan-integral treatment yields `4 pi`. I made the smooth structure and orientation used by the calculation explicit in Facts & Assumptions [lem-emx-unit-sphere-radial-flux.md](/home/lazyinspirit/Projects/prestige-math-library/physics/items/lem-emx-unit-sphere-radial-flux.md:95), and added the short deduction that repeated sine/cosine derivative identities make `Phi` smooth for the finite-parametrization supplier. The Statement itself is unchanged. Its current batch-3 consumer, `ex-emx-topological-flux-sector`, uses the same sphere-integral conclusion in its step 2.1; the clarification does not alter that use.
- `ex-emx-punctured-flux`: The field is closed on `N = R^3 \ {0}`; the tetrahedron boundary maps orientation-preservingly to the sphere and has period `4 pi`. The original statement put the cycle on `S^2` while applying the period definition to a form on `N`. I corrected the type by making the cycle the `N`-valued chain through the inclusion `iota:S^2 -> N`, and made explicit that `q^* omega = beta` and `iota^* beta = omega`. I also proved smoothness of `q` and `beta` before applying smooth-form suppliers. The checker prescribed phase numbering `1.1`, `2.1`, `3.1`; I adopted that form and updated the proof contract [batch-2.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-2.proof-contracts.json).
- `ex-emx-flat-nonexact-connection`: The derivative computation gives `dA=0`; the unit circle is a smooth singular cycle with period `2 pi`, so Stokes excludes a global primitive. The Poincare lemma gives a primitive on each convex ball, and the zero-derivative result proves two such primitives differ by a constant. I added the repeated power-rule argument that the coefficients of `A` are smooth, as required by the smooth-form hypotheses, and updated its proof-contract derivation.

No item had a `verification.judge` record to remove. The amended contracts are the current records for the repaired item proofs.

## Source review

I consulted Baez and Muniain, *Gauge Fields, Knots, and Gravity*, Part I §1.5.3, for the metric-and-orientation Hodge-star characterization and complementary-basis convention; its §1.6 discussion was context only, since the local proofs use the exact Stokes supplier. I checked Lee, *Introduction to Smooth Manifolds*, Theorem 17.14 for star-shaped-domain local exactness; the item independently proves its explicit two-form formula. I checked the University of Toronto MAT237 §5.3 parameterized flux and orientation conventions and Taylor §3.2's cross-product surface-density formula; the `4 pi` radial-flux value is computed locally. The batch coverage record's claims were treated as evidence rather than a verdict.

The browser could not independently retrieve the Fitzmaurice PDF during this review (fetch timeout). The current batch coverage record reports an earlier full-text fetch of §§12.4–12.5, and Baez provides an independently checked Hodge convention. The local Lorentzian square proof derives every sign directly; no unresolved proof step depends on the timed-out source.

## Page verdicts

- `emx-lorentz-form-algebra` — **pass**. Draft A-page frontmatter and four-item inventory match the manifest; its compact page body is empty as required. The four assigned claims and their proofs are complete under the cited direct suppliers.
- `emx-lorentz-form-algebra-examples` — **pass**. Draft B-page frontmatter and two-example inventory match the manifest; its compact page body is empty as required. The punctured-flux type defect is repaired; the flat-connection calculation is sound.

No TikZ or tikzcd diagrams occur in the assigned pages or items; no diagram was needed for the exposition. All six items are pure mathematics and contain no physical premise, empirical observation, or statistical inference.

## Checks and remaining issues

- Reflow: all three changed items were unchanged by the final reflow pass.
- Precheck: all three changed items pass. The initial punctured-flux precheck proposed canonical step numbering; that repair was adopted before the passing precheck.
- Proof layout: `3 items, 9 steps, 0 defects` for the three changed items.
- Every confirmed defect found in the assigned items was repaired. No uneditable defect or blocker remains.

Coverage limit: I checked the current exact interfaces for the 42 direct imported mathematical suppliers and the actual uses made of them; I did not re-audit their full dependency closures or complete proofs. The prior batch coverage record documents source retrievals beyond those I independently opened in this review.

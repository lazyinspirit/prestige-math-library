# Step 3a reader report — batch 70

Run: physics-remaining-80-2026-10-17  
Role: independent reader  
Scope: pages tgr-mg02 and tgr-mg02-examples and their assigned items.

## Opened inventory

Assigned pages opened:

- tgr-mg02 — library/thermodynamics-and-general-relativity-mathematics/tgr-mg02.md (draft mathematical A page).
- tgr-mg02-examples — library/thermodynamics-and-general-relativity-mathematics/tgr-mg02-examples.md (draft mathematical B page).

All 11 assigned items were opened in supplier order:

- Level 0: def-tgr-spherical-static-state-domain, lem-tgr-even-radial-center-regularity.
- Level 1: lem-tgr-spherical-einstein-tov-reduction, def-tgr-spherical-entropy-constraint-functional.
- Level 2: thm-tgr-tov-regular-center-local-existence, thm-tgr-constant-density-star-verified, thm-tgr-constrained-entropy-tov-criticality.
- Level 3: ex-tgr-regular-central-pressure-family, ex-tgr-constant-density-positive-branch, cex-tgr-constant-density-critical-center, cex-tgr-incompressible-causal-transport.

The 38 unique direct external item suppliers were opened at their used Definition, Statement, or Example sections. Their frontmatter status was published:

~~~text
def-gr-smooth-lorentzian-objects
def-countable-choice
prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
ex-the-round-metric-on-the-sphere-as-an-induced-metric
def-gr-smooth-covariant-two-tensor-field
def-gr-tensor-fields-and-components
def-gr-curvature-tensor-and-derived-tensors
def-euclidean-inner-product
thm-chain-rule-for-total-derivatives
thm-algebra-of-derivatives
thm-taylor-peano-remainder
thm-real-power-continuity-and-derivatives
thm-gr-curvature-tensoriality-and-coordinate-formula
thm-gr-nondegenerate-levi-civita-and-tensor-derivative
thm-gr-second-bianchi-and-divergence-free-einstein
thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
def-darboux-integral
thm-continuous-implies-integrable
thm-cm-compact-continuation-for-locally-lipschitz-odes
thm-ftc-first-part
thm-ftc-second-part
thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
thm-mean-value-inequality-for-total-derivatives
thm-ck-euclidean-maps-closed-under-algebra-and-composition
cor-mean-value-theorem
thm-monotonicity-of-the-integral
thm-linearity-of-the-integral
def-oriented-integral
thm-heine-cantor-r
lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
thm-euclidean-implicit-function-theorem
lem-smooth-bump-between-concentric-euclidean-balls
thm-heine-cantor-metric
lem-uniform-integral-error-bound
thm-integration-by-parts
thm-nonnegative-continuous-with-zero-integral-vanishes
lem-tdmath-reciprocal-naturals-tend-zero
lem-q-and-irrationals-dense-r
~~~

All page-level prerequisites were opened: cm-math-dynamics, geodesics-the-exponential-map-completeness-and-hopf-rinow, gr-curvature-and-tides, riemannian-metrics-length-distance-and-volume, uniform-convergence-of-functions, darboux-lhopital-and-taylor, and td-math-ordered-composition. The page-level GR curvature prerequisite is a physics page; the assigned A-page item dependency closures use mathematical curvature suppliers and do not depend on a physical item.

I also opened the batch notes, batch-70 cross-batch dependency file, and all nine proof contracts. They were used as navigation and contract evidence, not as verdicts. For the definition repair below, I inspected the direct and indirect batch-72 consumers: post-tgr-static-spherical-fluid-preparation, pthm-tgr-static-tov-local-branch, post-tgr-incompressible-star-preparation, post-tgr-gravitating-entropy-variational-preparation, pthm-tgr-static-constant-density-star, pthm-tgr-gravitating-entropy-criticality, ex-tgr-physical-star-half-compactness, and cex-tgr-physical-critical-star-limit. I also opened def-tgr-framework-units to check their coordinate and constant conventions.

## Source passages inspected

I inspected the relevant sections of Chavanis, “Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas”: Sec. III.A, Eqs. (95)–(107) on the static metric, mass function, and TOV system, with Eq. (100) giving total mass-energy; Sec. III.C, Eqs. (122)–(124) on proper entropy, proper particle number, and the separate binding-energy convention; and Sec. III.E, Eqs. (149)–(163) on first variations and Tolman/Klein relations. Its metric and curvature-sign conventions differ from this workspace’s; the assigned component calculation is local. The source’s binding-energy convention and broader claims are not substituted for the local definitions.

I inspected the MIT 8.962 Spring 2020 Lecture Guide, Lectures 20–21, PDF pp. 8–9. It gives the spherical Einstein/TOV equations and the uniform-density central-pressure formula, including the family-specific compactness threshold. The guide is a synopsis, so it corroborates those formulas rather than replacing the local proofs. Its broader Buchdahl discussion is not adopted. [Chavanis PDF](https://arxiv.org/pdf/1908.10806), [MIT 8.962 Lecture Guide PDF](https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf).

## Defects repaired

### def-tgr-spherical-static-state-domain

The Definition used c to define x⁰ = ct without requiring c ≠ 0, and divided by G in M(r) without requiring G ≠ 0. It also attributed the Killing property to timelikeness, and described a mixed (1,1) tensor’s smooth type through a supplier that defines covariant (0,2) fields. I repaired the Definition by fixing positive formal c,G parameters, defining t = x⁰/c and its interval, separating the isometric-flow/Killing property from timelikeness, and defining the source tensor as a smooth (1,1) field with its lowered symmetric (0,2) tensor. I made the round-sphere area calculation explicit. The exact earlier interfaces are def-gr-smooth-lorentzian-objects, def-gr-tensor-fields-and-components, def-gr-smooth-covariant-two-tensor-field, the product-structure proposition, and the round-metric example.

The direct and indirect assigned consumers were checked against the corrected Definition; no consumer prose repair was needed. Batch-72 consumer prose and proofs were also checked and already adopt positive c,G or inherit those conventions.

### thm-tgr-constant-density-star-verified

The Statement said the u < 8/9 bound was proved, while the original proof assumed that range and showed sufficiency only. I added a sharpness calculation: at u = 8/9 the center pressure denominator vanishes and lapse is zero; for 8/9 < u < 1, continuity gives an interior radius with B = 3a, a pressure pole, and zero lapse; at u = 1, b(R) = 0; and for u > 1, B(R) is not real. Together with the existing 0 < u < 8/9 calculation, this proves the exact range for the displayed constant-density formulas only. It makes no general Buchdahl claim.

I made the no-surface-layer argument explicit. In the proper-radial matching chart the metric and first derivatives match. The proof defines radial distributional derivatives on test functions, displays the jump terms in the second derivative, and shows that matching values and first derivatives remove both delta and delta-prime terms. The coordinate curvature formula then has no surface-supported term. The title now reads “Exact regular constant-density solution with verified matching.”

### cex-tgr-incompressible-causal-transport

The item invoked a differentiable barotropic map and a causal slope criterion without specifying the map’s domain and regularity. I defined a C¹ pressure map P on an open energy-density interval containing ε₀, stated its units and relation to the interior profile, and separated the stipulated slope bound from any fluid-evolution or empirical signal-speed claim. I clarified the title to state the actual witness: equal energy densities have unequal pressures. The two-radius algebra then refutes single-valuedness directly.

No stale verification.judge records were present on the three changed items. The affected batch-70 proof-contract source quotes, derivation records, and branch-boundary worksheets were updated.

## Page verdicts

- tgr-mg02: **Pass after item repairs.** Its mathematical summary matches the exact static domain, conditional TOV reduction, local regular-center theorem, constant-density branch, and first-variation entropy result. It does not claim a general Buchdahl theorem, an entropy maximum, or empirical validation.
- tgr-mg02-examples: **Pass.** Its four examples/counterexamples match the repaired suppliers. The page makes no observational claim and does not infer a signal speed from the constant-density profile.

No A-page or B-page prose was edited.

## Validation

- reflow.mts completed for all three changed items; each reported unchanged after normalization.
- precheck.mts passed for the theorem and counterexample; the Definition had zero proof steps to check and reported all clean.
- proof-layout.mjs items/def-tgr-spherical-static-state-domain.md items/thm-tgr-constant-density-star-verified.md items/cex-tgr-incompressible-causal-transport.md passed: 3 items, 8 numbered proof steps, 0 defects.
- Contract review covered all 9 proof-bearing batch items and 40 proof steps; no contract/step mismatch remained. Current Definition and constant-density Statement quotes were refreshed in all matching batch-70 contract entries.

## Unrepaired findings and follow-up

No confirmed scientific defect remains in an assigned item or page, and no defect was confirmed in the inspected direct published supplier interfaces.

The changed def-tgr-spherical-static-state-domain is also used by batch 72. Its current proof-contracts.json and cross-batch-dependencies.json retain pre-edit supplier evidence for that Definition, including “hash-current”/“verified” reviews. Those batch-72-owned files were not edited; their owners should refresh the exact-source evidence before accepting batch 72. The affected consumer claims were checked and remain compatible with the repaired Definition. This is the only downstream follow-up; batch 70 has no remaining blocker.

## Coverage limit

The 38 direct external item suppliers were reviewed at their exact used Definition/Statement/Example interfaces and published statuses. I did not audit their recursive proof-dependency chains. I inspected the cited source passages listed above, not every page of either PDF.

# Reader report — batch 10

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: assigned batch `10`

## Verdict

Both assigned pages are acceptable as page prose. I found and repaired confirmed defects in 14 assigned in-flight items. No confirmed defect remains uneditable in this batch, and no finding is routed to another batch or a published dependency. The assigned material is mathematical; it makes no empirical observation or claim about the physical accuracy of a model.

## Opened inventory

Pages opened:

- `library/non-relativistic-classical-mechanics-mathematics/cm-math-numerical.md` (A page)
- `library/non-relativistic-classical-mechanics-mathematics/cm-math-numerical-examples.md` (B page)

All 24 items listed for batch 10 were opened and reviewed:

1. `lem-cm-roundoff-accumulation-in-one-step-schemes`
2. `def-cm-complex-phase-domains-and-holomorphic-maps`
3. `def-cm-splitting-hamiltonian-and-verlet-map`
4. `lem-cm-cauchy-formula-and-power-series-on-polydiscs`
5. `lem-cm-verlet-local-truncation-error-is-cubic`
6. `lem-cm-holomorphic-map-calculus`
7. `prop-cm-drift-kick-and-verlet-preserve-the-canonical-form`
8. `def-cm-analytic-splitting-data-and-exact-splitting-map`
9. `thm-cm-verlet-finite-time-error-is-quadratic`
10. `lem-cm-complex-analytic-flow-existence-and-holomorphy`
11. `lem-cm-exact-splitting-map-preserves-the-complex-canonical-form`
12. `lem-cm-difference-operator-and-domain-loss-bound`
13. `def-cm-modified-log-coefficients-and-truncations`
14. `lem-cm-binomial-pullback-family-and-its-log-are-derivations`
15. `lem-cm-truncated-log-coefficient-bounds`
16. `lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives`
17. `lem-cm-symmetric-log-parity-removes-odd-coefficients`
18. `lem-cm-optimal-truncation-gives-exponential-local-defect`
19. `lem-cm-modified-energy-differs-by-order-two`
20. `thm-cm-analytic-verlet-energy-on-exponential-times`
21. `lem-cm-separate-roundoff-energy-accumulation`
22. `rem-cm-scope-of-the-certified-verlet-estimates`
23. `ex-cm-verlet-map-of-the-harmonic-oscillator`
24. `ex-cm-analytic-pendulum-verlet-domain-check`

To verify their uses, I opened the current-run suppliers `def-cm-phase-domain-and-standard-symplectic-two-form`, `def-cm-local-flow-of-an-autonomous-system`, `prop-cm-canonical-map-tests-and-hamiltonian-transport`, `def-cm-finite-regularity-canonical-calculus`, and `lem-cm-local-flow-composition-law`, in dependency order. I also checked the cited mathematical statements and definitions needed for the local arguments, including the Cauchy formula and estimates, holomorphic parameter integrals, Fubini and continuous-rectangle integrability, contour and vector-valued integrals, finite-dimensional derivative and Hessian calculus, Picard–Lindelöf, the Poincaré lemma, norm and compactness facts, and the real exponential and logarithm. For unfamiliar complex-analysis and numerical-flow details, I checked the relevant passages in the Lebl several-complex-variables source (PDF pp. 13–23, 28–31) and Hairer lecture notes (Lecture 2, pp. 1–3 and 7–13; Lecture 3, pp. 1–8). These sources were used to check conditional mathematical statements, not as evidence that a physical model describes nature.

## Repairs and evidence

- `def-cm-complex-phase-domains-and-holomorphic-maps`: Defined the distinguished boundary only for finite polyradii, required nonempty (U) for the distance-domain infimum, explicitly complexified the entries of (J), and limited the real-restriction assertion to a nonempty real slice and to ω and (J). The prior unrestricted boundary was undefined at infinite radii, and the prior real-bracket/field assertion exceeded what the cited real-phase definition established. Coordinate derivatives are now tied to the preceding coordinate-derivative definition.
- `def-cm-splitting-hamiltonian-and-verlet-map`: Made (U) nonempty and open, included an explicit two-sided inverse for (M), and used transposed inverse identities to establish symmetry of (M^{-1}). Defined the local coordinate Hamiltonian-field convention and its contraction identity, which fixes downstream citations that previously pointed to a supplier that did not define this convention. Drift and kick are now explicit ambient formulas with exact partial self-map domains; the Verlet composite has a domain requiring each intermediate state and endpoint to lie in (U). No physical units are assigned.
- `def-cm-analytic-splitting-data-and-exact-splitting-map`: Removed the unused star-shaped condition on compact (K), defined Ḧ as the sum of the holomorphic extensions, replaced an unsupported globally maximal complex solution-family description with local solutions and explicitly chosen continuation branches, and restricted the real-flow remark to real data and segments that stay in (U). The proof uses compactness for the positive margin and local uniqueness only; it does not establish global single-valued complex time flow.
- `lem-cm-complex-analytic-flow-existence-and-holomorphy`: Specified the complex-time solution regularity and continuity at the closed-disc boundary, stated holomorphy through a larger open disc and uniqueness among holomorphic solutions, and limited composition/inverse claims to connected common continuations of the same local branch. This matches the uniform Picard-contraction construction and avoids asserting a global maximal complex flow.
- `lem-cm-cauchy-formula-and-power-series-on-polydiscs`: Quantified the full admissible polyradius in the derivative estimate; added the continuous-rectangle integrability prerequisite before product-rectangle Fubini; made the componentwise complex integral convention explicit; fixed the Taylor remainder bound to display its dependence on the chosen positive polyradius; and chose a larger contour polydisc centered at the point where derivatives are estimated. This removes an invalid comparison of radii centered at different points. Three multi-line proof steps were flattened into single step paragraphs so the final tags and cited step dependencies are read at the end of each complete step.
- `lem-cm-verlet-local-truncation-error-is-cubic`: Corrected the field citation to the splitting definition, which now supplies the Hamiltonian-field convention and symmetric inverse used by the displayed vector field.
- `prop-cm-drift-kick-and-verlet-preserve-the-canonical-form`: Removed the incomplete implication from (Mv=0) to invertibility as the sole source of an inverse; the definition now supplies a two-sided inverse, whose transpose identities justify symmetry of (M^{-1}).
- `lem-cm-binomial-pullback-family-and-its-log-are-derivations`: Replaced undefined radius indices at (j=0,1) by (Q_j=\max(2,j)), specified the common domain, and supplied the missing finite-jet/locality argument: finite compositions have (O(h)) displacement, Taylor remainder has the required order, and the derivation rule kills terms of degree at least two.
- `lem-cm-symmetric-log-parity-removes-odd-coefficients`: Defined the complex modified Hamiltonian with baseline Ḧ and separately stated its real restriction with baseline (H=A+B), removing the undefined use of real (H) as a complex-domain function.
- `lem-cm-exact-splitting-map-preserves-the-complex-canonical-form`: Restricted the inverse-time argument to the reverse continuation of the same solution branch, as required by the local-flow supplier.
- `lem-cm-optimal-truncation-gives-exponential-local-defect`: Added direct dependencies and roles for the real exponential, natural logarithm, exponential addition law, and strict monotonicity. Stated (c>0) and supplied the derivation of (2^{-N}=\exp(-N\log 2)\le\exp(-c/h)); the previous proof used positivity and exponential identities without citing or deriving them.
- `thm-cm-analytic-verlet-energy-on-exponential-times`: Added the real exponential dependency and convention for (e^x), supplied the power-series bound (\exp(x)\ge x^2/2), and explicitly bounded both comparison endpoints before placing their joining segment in (D(\rho/8)).
- `ex-cm-verlet-map-of-the-harmonic-oscillator`: Supplied the dimension, phase domain, position domain, mass matrix, potential, and arbitrary initial state used by the calculation.
- `ex-cm-analytic-pendulum-verlet-domain-check`: Supplied the position domain, mass matrix, real functions, and holomorphic extensions. The perturbation clause now requires retained points, the stated residual bound, and comparison segments in (D(1/8)), as required by the estimate it invokes.

The batch 10 proof contracts were updated for the repaired proofs and refreshed for 40 stale source excerpts affected by the revised in-batch suppliers. New direct dependencies and their mathematical-premise roles are present in the item frontmatter. No repaired proof item had a `verification.judge` record to remove.

## Validation

Reflow and precheck were run for all 14 changed item paths. Every checkable proof item passed; non-proof items produced no proof checks. The required final formatting command reported: `proof-layout: 14 items, 51 steps, 0 defects`.

## Uneditable findings and page verdicts

- A page `cm-math-numerical`: no page-prose defect found.
- B page `cm-math-numerical-examples`: no page-prose defect found.
- Uneditable defects: none identified.

Integration note (outside the reader's edit scope): `research/physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json` still carries the pre-repair dependency lists for three assigned item rows. The item frontmatter now adds `thm-continuous-on-a-rectangle-is-riemann-integrable` to `lem-cm-cauchy-formula-and-power-series-on-polydiscs`; adds `def-real-exponential-function-and-e`, `def-natural-logarithm`, `thm-exponential-addition-formula`, and `thm-exponential-is-strictly-increasing` to `lem-cm-optimal-truncation-gives-exponential-local-defect`; and adds `def-real-exponential-function-and-e` to `thm-cm-analytic-verlet-energy-on-exponential-times`. Regenerate or synchronize the batch manifest before using it as a current dependency snapshot. The manifest was not edited because this reader assignment authorizes item and assigned A-page prose repairs only.

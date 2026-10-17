# Step 3a reader report — batch 20

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `20`

## Inventory opened

- Batch evidence: `research/physics-remaining-80-2026-10-17-batch-20.pages.json`, `research/physics-remaining-80-2026-10-17-batch-20.cross-batch-dependencies.json`, and the batch-20 contract entries in `research/physics-remaining-80-2026-10-17-proof-contracts.json`.
- Assigned pages: `library/einstein-maxwell-models/emg-mp02.md` and `library/einstein-maxwell-models/emg-mp02-examples.md`.
- Required page context: `library/einstein-maxwell-models-mathematics/emg-mm02.md` and `library/einstein-maxwell-models/emg-mp01.md`.
- Assigned items: `items/pthm-emg-counterpoised-smooth-sphere.md`, `items/ex-emg-ml-b05.md`, and `items/ex-emg-ml-b06.md`.
- In-run suppliers read in the proof dependency chain: `items/def-emg-explicit-power-regimes.md`, `items/post-emg-transported-charged-dust.md`, `items/thm-emg-smooth-counterpoised-dust.md`, `items/cor-emg-regular-counterpoised-sphere.md`, `items/lem-emg-conformastatic-curvature.md`, `items/def-emg-conformastatic-chart-data.md`, `items/lem-emg-conformastatic-chart-is-lorentzian.md`, `items/def-emg-geometry-units.md`, `items/def-emg-matter-formal-systems.md`, `items/def-emg-matter-observables.md`, `items/post-emg-einstein-maxwell-equations.md`, `items/post-emg-covariant-maxwell.md`, `items/thm-emg-charged-dust-projection.md`, `items/thm-emg-selected-matter-energy-conditions.md`, `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`, and `items/thm-the-exterior-derivative-squares-to-zero.md`.
- Geometric framework definition checked at the used observer, curvature, and coordinate-convention clauses: `items/def-emg-lorentzian-forms.md`.
- Mathematical suppliers checked for the exact definitions and claims used: `items/def-countable-choice.md`, `items/thm-algebra-of-derivatives.md`, `items/thm-local-coordinate-formula-for-the-exterior-derivative.md`, `items/lem-emg-positive-square-root-smoothness.md`, `items/def-lebesgue-measure-and-the-lebesgue-sigma-algebra.md`, `items/def-nonnegative-lebesgue-integral.md`, `items/def-integrable-real-and-complex-functions-and-their-integrals.md`, `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`, `items/cor-continuous-functions-are-borel-measurable.md`, `items/thm-borel-sets-are-lebesgue-measurable.md`, `items/def-polar-surface-measure-on-the-unit-sphere.md`, `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`, `items/lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates.md`, `items/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions.md`, `items/thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null.md`, `items/thm-monotonicity-of-the-integral.md`, `items/thm-real-power-continuity-and-derivatives.md`, `items/thm-chain-rule.md`, `items/thm-sine-and-cosine-derivatives.md`, `items/thm-quarter-turn-values-and-shift-formulas.md`, `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`, `items/cor-trigonometric-parity-and-pythagorean-identity.md`, `items/thm-euclidean-inverse-function-theorem.md`, `items/thm-intermediate-value.md`, `items/thm-continuous-implies-integrable.md`, `items/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.md`, and `items/thm-newton-leibniz-with-interior-derivative.md`. The exact statement clauses needed from `items/lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space.md`, `items/thm-clairaut-schwarz-mixed-partials.md`, and `items/thm-ck-euclidean-maps-closed-under-algebra-and-composition.md` were also checked.

## Review and verdicts

### `emg-mp02` — pass

The page summary accurately describes a smooth conditional solution family for the selected SI Einstein–Maxwell–dust system, the regular spherical specialization, its proper integrals, and the dilute estimates. It expressly disclaims empirical realization, dynamical existence, formation, and stability.

The assigned theorem fixes the chart, orientation, time orientation, smooth positive dimensionless profile, signs, constants, and units. Its `AC_omega` premise is explicit. The adopted physical equations are separated from the mathematical deductions by [A1]; the local Einstein, Maxwell, and stress conventions agree with that postulate and the formal tensor definitions. The theorem supplier provides the full arbitrary-profile field identities and energy conditions. The assigned proof locally verifies mass continuity, the undivided force identity (including zero density), charge-current conservation, and the observer electric field. The curvature supplier's connection components give the stated coordinate acceleration. No division by density is used at its zero set.

The regular-sphere supplier matches the stated profile and supplies its smoothness, strict density, induced-volume factor, proper mass and signed charge, scalar curvature, and pointwise dilute bounds. The radial integral evaluates to 1/(3b²); the proof’s polar-coordinate and one-variable change-of-variables hypotheses are stated and met under the inherited `AC_omega` premise. The dilute metric bound follows from the explicit second-derivative remainder estimate, and the density bound follows from 0 ≤ 3(1+u)⁻⁴ ≤ 3. These are ideal model calculations, not reported measurements. Units and the distinction from ADM mass are preserved.

The contract citations and derivation rows agree with the item's Facts and steps. Its repeated `F5` contract citation maps the two suppliers named together in the single item fact `[F5]` (derivative rules and the power convention); it does not create an ambiguous item fact label.

### `emg-mp02-examples` — pass

The page summary correctly limits its examples to central values and a dilute subfamily of exact model fields. `ex-emg-ml-b05` substitutes a=b into the spherical formulas: H(0)=2, ΔH(0)=−3/b², the stated central density and curvature follow, and the observer electric field vanishes because H_i(0)=0. Its positive-density, infinite-extent, proper-integral, and no-point-source wording agrees with the supplier. `ex-emg-ml-b06` applies the theorem’s 0<δ≤1 bounds on the narrower interval 0<δ≤1/10, yielding 3δ²≤3/100, δ²≤1/100, and 3δ≤3/10. Both examples retain the conditional model scope and make no empirical or stability claim. Their verification steps are separated, tagged, and conclude with QED.

## Edits and uneditable defects

- Edits: none. No assigned item or A-page prose repair was warranted; no contract or verification metadata was changed.
- Confirmed or suspected defects outside edit scope: none.
- Blocker: none.

No item changed, so reflow, precheck, and proof-layout were not run. Existing author `verification.precheck` values were treated as metadata, not as independent proof judgments.

## Coverage limitation

I reviewed the assigned carriers, the current-run suppliers directly used by their arguments, and the exact statements of the relevant mathematical suppliers. I did not independently re-audit every remote transitive proof in the published mathematics library, and I performed no new external full-text retrieval. No unresolved mathematical uncertainty in the reviewed calculations required that broader audit.

# Step 3a Reader Report — Batch 3

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `3`  
Role: independent reader

## Scope and opened inventory

Assigned pages:

- `library/classical-electromagnetism/emx-premetric-maxwell.md`
- `library/classical-electromagnetism/emx-premetric-maxwell-examples.md`

Assigned items, in manifest order:

- `def-emx-continuous-chain-integral`
- `def-emx-excitation-form`
- `lem-emx-c1-stokes-on-standard-3-simplex`
- `pthm-emx-exterior-maxwell`
- `pthm-emx-duality-vacuum`
- `ex-emx-topological-flux-sector`
- `ex-emx-duality-pec-failure`

Page context opened:

- `em-lorentz-covariant-formulation`
- `em-material-response`
- `em-primitives-and-postulates`
- `emx-lorentz-form-algebra`
- `emx-lorentz-form-algebra-examples` (additional nearby context)

Physics suppliers opened:

- `def-em-lab-geometry`
- `def-em-electromagnetic-tensor`
- `def-em-polarization-magnetization`
- `def-em-si-conventions`
- `post-em-vacuum-maxwell`
- `def-emx-lorentz-star`
- `lem-emx-lorentz-star-square`
- `thm-emx-local-potential-homotopy`
- `lem-emx-unit-sphere-radial-flux`

Mathematical suppliers opened for the assigned arguments:

- `def-smooth-singular-simplex`
- `def-standard-topological-simplex-and-its-affine-face-maps`
- `def-standard-orientation-of-the-affine-simplex`
- `def-smooth-singular-chain-and-cochain-complexes`
- `def-integral-of-a-form-over-a-smooth-singular-simplex`
- `def-pullback-of-a-differential-form`
- `def-pullback-of-a-covariant-tensor-field`
- `def-smooth-differential-k-form`
- `def-continuous-map-top`
- `prop-topological-spaces-and-continuous-maps-form-category-top`
- `def-directional-and-partial-derivatives`
- `def-c-one-map-and-local-inverse`
- `def-finite-sum`
- `lem-finite-sum-laws`
- `def-null-and-content-zero-in-rn`
- `def-riemann-integral-over-a-jordan-set`
- `thm-continuous-functions-on-compact-jordan-sets-are-integrable`
- `thm-heine-borel-rn`
- `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`
- `thm-jordan-boundary-criterion`
- `thm-multidimensional-integral-properties`
- `thm-newton-leibniz-with-interior-derivative`
- `thm-jordan-fubini-by-sections`
- `thm-change-of-variables-for-compact-jordan-sets`
- `thm-local-coordinate-formula-for-the-exterior-derivative`
- `thm-chain-rule-for-total-derivatives`
- `thm-clairaut-schwarz-mixed-partials`
- `thm-algebra-of-derivatives`
- `def-divergence-and-curl-of-a-c1-vector-field`
- `thm-real-power-continuity-and-derivatives`
- `prop-integration-of-top-forms-by-finite-parametrizations`
- `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains`
- `thm-stokes-theorem-for-smooth-singular-chains`

The current cross-batch supplier page `emx-lorentz-form-algebra` and its relevant Hodge-star, sphere-period, and potential-obstruction statements were checked against the uses in this batch. No TikZ or tikzcd diagram occurs in the assigned items or page prose; none is needed to state or prove these arguments.

## Review findings and repairs

### Title repairs

- `def-emx-continuous-chain-integral`: changed the title to specify Euclidean domains, matching the definition's hypothesis $V\subseteq\mathbb R^n$.
- `def-emx-excitation-form`: changed “conserved current forms” to “free-current forms.” The item constructs $\mathcal J$ but does not establish $d\mathcal J=0$; the later theorem derives continuity only under its additional $C^2$ hypotheses.
- `pthm-emx-exterior-maxwell`: changed the title to distinguish the metric-free exterior equations from the metric-dependent Lorentzian vacuum closure proved in the item.
- `ex-emx-duality-pec-failure`: narrowed the title to the single ideal PEC condition and quarter-turn calculation in its Statement; it does not assert failure for every electric-conductor model or every boundary condition.

### Proof repairs

- `lem-emx-c1-stokes-on-standard-3-simplex`, step 1.1: explicitly identified $T$ and each projected domain $D_i$ as standard simplices, hence compact Jordan, before applying the section-integral theorem. The continuous coefficient integrals are justified by the chain-integral construction. This closes the unstated domain hypothesis needed for the Fubini step.
- `pthm-emx-exterior-maxwell`, step 4.1: stated that each prism composite is a smooth singular simplex with a smooth extension on a parameter neighbourhood, restricted into the open laboratory region. Consequently its pullback of the $C^1$ field form is $C^1$ on a neighbourhood, as required by the local Stokes lemma.
- `ex-emx-topological-flux-sector`, step 1.2: gave the smooth inverse on each radial face patch, $x\mapsto hx/(n\cdot x)$, so the diffeomorphism hypothesis of the finite-parametrization integration result is explicit.

The affected proof contracts were updated. During strict contract validation, the recorded quote for `lem-emx-unit-sphere-radial-flux` did not match its current Statement, which now includes its atlas and tangent-plane definitions. I refreshed the batch-3 contract excerpt to the current Statement and rechecked that its outward area form and $4\pi$ period are the quantities used by `ex-emx-topological-flux-sector`. No defect in that supplier's current result was found. None of the edited items contained a `verification.judge` record.

## Source checks

The exact cited passages were checked in accessible PDF text views:

- Niklas Beisert, *Elektrodynamik*, [ETH Zurich 2024 FS lecture script](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf): §5.3, equation (5.10), for the displacement convention; §6.3–6.4, equations (6.14)–(6.16), for the four SI equations, continuity consistency, and magnetic-flux integrals; §8.5, equations (8.28)–(8.29), for source-free duality and its rotation convention.
- Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, [*Recent developments in premetric classical electrodynamics*](https://arxiv.org/pdf/physics/0610221): §§2–4, equations (1), (3)–(5), and (9)–(11), for the current/excitation/field-strength forms and separate magnetic-source extension; §6, equations (25)–(26), for metric dependence of the vacuum Hodge-star closure.

The source conventions were not imported silently: the local proof uses $x^0=ct$, the $(-+++)$ star, and the framework's SI normalization. The source supports the model context; the Maxwell postulate remains an adopted assumption, and no experiment or empirical inference is claimed by these items.

## Page verdicts

- `emx-premetric-maxwell`: **Pass.** Its scope summary correctly separates metric-free exterior equations from the Lorentzian vacuum closure, gives the regularity branches for charge continuity and flux constancy, and does not assert a constitutive law for general material response. No page-prose edit was needed.
- `emx-premetric-maxwell-examples`: **Pass.** Its summary describes both items as conditional calculations and explicitly says they are not reported observations. The flux example excludes a full-space magnetic-source law; the PEC example is scoped to an imposed ideal boundary condition. No page-prose edit was needed.

## Validation and remaining defects

- Reflow: all six changed item files returned `unchanged`.
- Precheck: all six changed item files passed.
- Strict proof-contract check: the three repaired proof-bearing contracts passed with 0 errors and 0 warnings.
- Final proof-layout check: 6 items, 22 steps, 0 defects.
- Uneditable defects: none identified.
- Blocker: none for the mathematical disposition.

## Coverage limitation

I initially opened assigned item bodies in manifest order to establish the inventory, before finishing the dependency reads. I then inspected the relevant supplier statements and arguments before reaching the dispositions, but cannot claim that the first file-opening pass itself was strictly supplier-first. I also did not independently re-audit every transitive proof behind the published mathematical suppliers. I checked the cited sections of the Beisert and Hehl PDFs, not every page of either document.

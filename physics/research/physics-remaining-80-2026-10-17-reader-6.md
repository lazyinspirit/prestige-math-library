# Step 3a reader report — batch 6

Run: `physics-remaining-80-2026-10-17`  
Reader: `reader-6`  
Scope: batch `6`

## Assigned inventory

Opened the two assigned draft pages:

- `library/einstein-maxwell-models-mathematics/emg-cp01.md` (A): **Electrovacuum tensor Cauchy system**.
- `library/einstein-maxwell-models-mathematics/emg-cp01-examples.md` (B): **Electrovacuum tensor Cauchy system — Examples**.

Opened all 13 assigned items, in the manifest dependency order:

| Level | Item IDs |
|---|---|
| 0 | `def-emg-electrovacuum-cauchy-system`; `def-emg-causal-solution-and-horizon-vocabulary` |
| 1 | `def-emg-periodic-high-sobolev-state`; `lem-emg-maxwell-stress-conservation`; `prop-emg-potential-ricci-wave-identity` |
| 2 | `thm-emg-symmetric-hyperbolic-research-supplier`; `lem-emg-local-potential-gauge`; `def-emg-constrained-electrovacuum-data` |
| 3 | `thm-emg-gauss-codazzi-maxwell-constraints`; `lem-emg-fixed-smooth-background-harmonic-data`; `ex-emg-flat-zero-field-data`; `ex-emg-nontrivial-magnetic-period` |
| 4 | `cex-emg-test-field-not-coupled-flat-solution` |

The A page has ten items and the B page has three. The older batch notes say nine A items and three B items; the current manifest and page list contain ten A items, including `def-emg-causal-solution-and-horizon-vocabulary`. I reviewed the current manifest inventory.

## Supplier context opened

Opened the direct mathematical supplier statements and the proof portions used by the assigned items. This included:

- Lorentzian field conventions and the Hodge/observer decompositions: `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-observer-field-decomposition`.
- Causal, hypersurface, Killing, and initial-data conventions: `def-gr-causal-curves-and-reachability`, `def-gr-causal-conditions-and-global-hyperbolicity`, `def-gr-spacelike-hypersurfaces-and-cauchy-sets`, `def-gr-spacelike-initial-data-and-constraints`, `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form`, `def-gr-killing-field`, `thm-gr-killing-and-on-shell-matter-identities`, `def-embedded-submanifold-and-slice-chart`.
- Local geometry and curvature: `thm-gr-local-geodesics-and-exponential-map`, `thm-smooth-inverse-function-theorem-on-manifolds`, `lem-gr-parallel-transport-and-geodesic-speed`, `lem-gr-contracted-commutator-identity`, `def-gr-harmonic-gauge-and-reduced-equations`.
- Periodic Fourier/Sobolev and symmetric-hyperbolic suppliers: `def-function`, `def-gr-periodic-torus-and-sobolev-spaces`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `lem-gr-periodic-fourier-differentiation-and-norm-equivalence`, `lem-gr-periodic-sobolev-embedding`, `lem-gr-periodic-sobolev-algebra`, `lem-gr-smooth-composition-and-commutator-estimates`, `def-gr-periodic-symmetric-hyperbolic-system`, `thm-gr-periodic-symmetric-hyperbolic-existence`, `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`, `thm-gr-periodic-symmetric-hyperbolic-smooth-persistence`, `thm-gr-local-symmetric-hyperbolic-well-posedness`.
- Density integration and constraints: `def-riemannian-volume-density`, `lem-the-riemannian-volume-density-is-coordinate-independent`, `def-riemannian-volume-of-a-compactly-supported-smooth-density`, `thm-density-integration-is-defined-without-an-orientation`, `def-extended-reals`, `lem-extended-reals-complete`, `def-countable-choice`, `thm-gr-constraint-equations-in-normal-frame`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`.

For the geodesic dependency chain I compared the pinned import and current root original `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, and opened its use in `thm-smooth-dependence-of-ode-solutions-on-parameters`. The import ledger pins raw SHA-256 `ee393eca16ff7f7ec9baae1c17c6efda5da0fb3787fd6dac6afdadacd589d7b9`; both current files have that exact hash. The previous batch note's stale-import description does not match the current bytes.

The manifest also names ten page-level prerequisites. I checked those page records and their summaries for context: `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `emg-mg01`, `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`, `gr-causal-and-initial-value-boundaries`, `limsup-and-subsequential-limits`, `gr-einstein-and-matter`, `countability-and-uncountability`, `riemannian-metrics-length-distance-and-volume`, and `integration-of-forms-and-the-general-stokes-theorem`.

## Source checks

I checked the cited primary-source passages relevant to the local claims:

- Reall, *General Relativity*, §6.2 equation (6.8) states the curved-spacetime Maxwell equations in Gaussian units; §6.3 equation (6.27) gives the Maxwell stress tensor and leaves conservation as an exercise; §10.4 equations (10.24)–(10.26) gives the normal constraint projections. The SI conversion and sign conventions in these items are supplied locally.
- Alcubierre, Degollado, and Salgado, *The Einstein-Maxwell System in 3+1 Form and Initial Data for Multiple Charged Black Holes*, §II.B equations (2.75)–(2.80) gives the electromagnetic energy/momentum split and Einstein constraints in Gaussian normalization.
- Friedrich and Rendall, *The Cauchy Problem for the Einstein Equations*, §5.4, printed pp. 83–84 (PDF pp. 82–83), states local Maxwell-potential representation and the possible global-topology obstruction. Sections 3.1–3.2 treat symmetric-hyperbolic systems and local Cauchy theory.
- Reall §5.3 gives the Killing-field/Lie-derivative terminology used by the causal-vocabulary item. The local horizon, escape, area, and extension definitions are supported by their mathematical dependencies and the local proofs, not attributed to this source.

The former Friedrich–Rendall locators in `lem-emg-local-potential-gauge` and `prop-emg-potential-ricci-wave-identity` attributed the local-potential passage to §3.2. I corrected them to §5.4. The source work here checked the relevant sections; it was not a reread of the complete cited books or papers.

## Repairs

- `lem-emg-local-potential-gauge`, proof step 3.1: the old cutoff was only required to lie in the Gaussian chart, but the proof had established positivity of the symmetric-hyperbolic time matrix only on a smaller neighborhood. I confined the cutoff support to a relatively compact cylinder inside that positive region, specified the time interval and torus-coordinate extension, and gave the full lower-order vector. The extended time matrix is now an explicit convex combination of positive matrices on the cutoff support and the identity outside it, so the periodic supplier's global positive-time-matrix hypothesis holds. The correction uses `thm-gr-periodic-symmetric-hyperbolic-existence` with `O=R^5`, `s=5`, `K={0}`, the closed unit ball for `K'`, `R=0`, and zero data.
- `lem-emg-local-potential-gauge` and `prop-emg-potential-ricci-wave-identity`, source locators: corrected the Friedrich–Rendall section/page references as described above.
- `def-emg-causal-solution-and-horizon-vocabulary`: made the hypersurface dimension and null radical explicit, replaced the undefined “branches meet” phrase with two specified transverse Killing-horizon branches and a common-intersection condition for a bifurcation surface, specified chart representatives in the selected piecewise-$C^1$ path class, and defined sequence/curve approaches and polynomial complete curvature contractions. Corrected the Reall locator to its actual §5.3 Killing-field material. Updated the affected proof-contract derivations for steps 1.1, 1.2, and 1.4.
- Consumer impact check for that definition: the current run manifest has 13 direct consumers across batches 21, 22, 24, and 73, plus 12 transitive consumers. I checked the direct uses: the horizon-data items use the null/Killing/surface-gravity and area clauses; the ergoregion items use clause (c); escape items use clause (d); and the curvature/charged-ring items use clause (e). Those uses remain within the clarified definitions. None uses the new bifurcation-surface subdefinition. No consumer item was edited, and no direct consumer interface changed.
- `cex-emg-test-field-not-coupled-flat-solution`: changed the invalid heading `## Counterexample data` to the required `## Counterexample`; moved the witness construction and its two tagged deductions into that proof-like section, with the Given and explicit Minkowski metric, orientation, future field, and SI coordinate convention. Updated the step 1.1 proof-contract derivation.
- `ex-emg-nontrivial-magnetic-period`: specified the product manifold, Lorentz metric, orientation, future field, global torus one-forms, SI length-coordinate convention, and the fixed time and longitudinal coordinates of the integration torus. Updated the period computation and proof-contract derivations for steps 1.1 and 2.1.

No published or imported mathematics was edited. No stale `verification.judge` record was present on any changed item. Proof contracts were updated for the changed derivations.

### Validation

For each of the five changed items, `reflow.mts` reported unchanged layout and `precheck.mts` passed. The final combined `proof-layout.mjs` check reported 5 items, 20 numbered steps, and 0 defects. An earlier layout attempt caught that the required counterexample heading had no steps; the witness deductions were moved under `## Counterexample`, after which the final layout check passed.

## Remaining defects and page verdicts

No confirmed defect remains in an uneditable dependency. The cited imported ODE item matches the current root original byte-for-byte; I found no other defective supplier needed by these claims.

- `emg-cp01`: **pass after local repairs**. The page summary accurately limits the symmetric-hyperbolic result to a general PDE supplier and does not claim a coupled Einstein–Maxwell development.
- `emg-cp01-examples`: **pass after local repairs**. Its three examples remain distinct; the magnetic-period example is explicitly a Maxwell-sector example on a prescribed background and is not presented as a coupled flat solution.

## Blocker and coverage limit

No mathematical blocker remains in the reviewed content. The prior batch notes record an owner readiness escalation based on a stale imported ODE snapshot; the current imported/root hashes now match. I did not edit or recertify owner readiness records, so their current workflow disposition was not checked. The online-source review was limited to the cited sections relevant to these items; I did not reread the complete source works.

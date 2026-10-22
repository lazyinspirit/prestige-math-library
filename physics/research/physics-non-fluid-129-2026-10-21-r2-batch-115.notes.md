# Batch 115 authoring notes — `tgrx-thermal-geometry`

## Inventory and plan reconciliation

- The assigned A/B IDs, titles, category, library, order, companion relationship, and page-level prerequisites match `research/plan-spec.json`: A `tgrx-thermal-geometry` at 927 requires `tgr-et01` and `tgr-et02`; B `tgrx-thermal-geometry-examples` at 928 requires the A page. The plan's empty item arrays are pre-authoring scaffolds, not an inventory conflict.
- The detailed module assigns `def-tgrx-thermal-vorticity`, `prop-tgrx-equilibrium-obstructions`, and `ex-tgrx-rotating-annulus`. I added `def-tgrx-period-of-one-form` and `lem-tgrx-exact-one-form-zero-period` to A because period and exact-form obstruction are load-bearing mathematical notions that need explicit local carriers and complete proofs under the authoring instructions. A further local lemma, `lem-tgrx-compensator-implies-exact`, supplies the compensated contraction identity without the charged-trajectory hypothesis of the existing gauge-energy theorem. These additions preserve the planned claims and proof route.
- No run-specific owner-authoring-direction file was present. Page count is 5 A items and 1 B example, well below the 100-item cap.
- No page-level plan conflict was found. The batch-115 scheduling row in `physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json` is level 0 with `requires: []`; its declared page prerequisites are outside this run.

## Prerequisite audit and dependency levels

- The inspected `tgr-et01` and `tgr-et02` pages are published mathematics pages. `def-tgr-stationary-thermal-carriers` supplies the connected smooth Lorentzian geometry, Levi-Civita connection, thermal units, and chemical-potential conventions. Its actual dependency chain carries only countable choice `def-countable-choice`; the new items add no stronger choice principle.
- `lem-tgr-thermal-killing-kinematic-equivalence` is published and its full proof establishes all four kinematic conditions exactly, without hypersurface orthogonality or zero vorticity. `lem-tgr-gauge-killing-energy` is published and its full statement assumes a charged trajectory; the new `lem-tgrx-compensator-implies-exact` derives only the needed contraction identity from the coordinate Lie-derivative formula without assuming any trajectory. `def-tgr-charged-liouville-data` fixes the SI potential, field, charge, contraction, and sign conventions.
- The thermal-vorticity supplier is used only in the Killing subcases of the proposition. The separate kinematic equivalence uses the formulas displayed in the proposition for a general smooth future-timelike field, then applies the published equivalence directly.
- `thm-tgr-electrochemical-stationarity` is published with a complete proof. Its first stationarity equivalence does not assume a global potential compensator and states \(d\zeta=-c q_{\rm SI}\,\iota_\beta F\). The local convention \(\alpha=-\zeta\) and \(q_{\rm eff}=c q_{\rm SI}\) gives exactly \(d\alpha=q_{\rm eff}\,\iota_\beta F\), with \(q_{\rm eff}\) carrying units \(\mathrm{C\,m\,s^{-1}}\); this equation is conditional on Liouville stationarity. This resolves the design's \(c=1\) shorthand without changing its sign or scope.
- The \(\Omega=0\) branch is stated explicitly because \(1/|\Omega|\) is undefined there. With \(b=1\,\mathrm{J}^{-1}\), \(\Omega=1\,\mathrm{m}^{-1}\), and \(r=1/2\,\mathrm{m}\), the SI temperature is \(2\,\mathrm{J}/(\sqrt3 k_B)\); the \(b\) factor is retained so units remain explicit.
- The in-batch DAG is `def-tgrx-thermal-vorticity:0`, `def-tgrx-period-of-one-form:0`, `lem-tgrx-compensator-implies-exact:0`, `lem-tgrx-exact-one-form-zero-period:1`, `prop-tgrx-equilibrium-obstructions:2`, `ex-tgrx-rotating-annulus:3`. Every new mathematical item has only mathematical dependencies. The two page-level prerequisites are out-of-run published pages; there is no in-run cross-batch item or page edge, so the required cross-batch dependency array is empty.

## Source harvest and disposition

See `physics-non-fluid-129-2026-10-21-r2-batch-115.coverage.json` for complete URLs, locators, supported items, inspected extents, limitations, and per-result dispositions.

- Becattini, [Thermodynamic equilibrium in relativity](https://arxiv.org/pdf/1606.06605), §§3–6: read proper temperature, Killing equilibrium, thermal vorticity, and rigid rotation. Used as an independent thermal-equilibrium treatment; the local proof computes the rotation norm and domain.
- Acuña-Cárdenas, Gabarrete, and Sarbach, [An introduction to relativistic kinetic theory on curved spacetimes](https://arxiv.org/pdf/2106.09235), complete §VI.B: read the charged equilibrium equation, closedness argument, beta norm, and global-potential qualification. Their distribution-prefactor \(\alpha\) differs from the local \(-\zeta\); the SI conversion is stated above.
- Santiago and Visser, [Tolman-like temperature gradients in stationary spacetimes](https://arxiv.org/pdf/1807.02915), §§III–IV and VIII: read the selected Killing-flow calculation and the warning that stationary non-static spacetimes permit distinct heat-bath flows and temperature profiles.
- Tong, [General Relativity](https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf), complete 290-page Cambridge lecture notes, §§2.4.1–2.4.5 and §4.3.1: read the definitions of closed/exact forms, the circle example, integration/Stokes, and the Killing criterion. This is the full lecture-note treatment supporting the mathematical language.
- Shi et al., [Thermodynamic equilibrium condition for charged perfect fluids](https://arxiv.org/pdf/2108.08729), §§2–3: read the charged-fluid stationary-potential identity, gauge shift, and equilibrium profile. It is recorded as convention context only; no perfect-fluid or entropy-extremum premise is imported.
- The detailed module names Wald, [The Thermodynamics of Black Holes](https://arxiv.org/pdf/gr-qc/9912119). The inherited recorded excerpt covers black-hole collapse, Hawking radiation, and Unruh/state distinctions, not the assigned claims. It is retained as `out-of-scope` in the coverage history and is not used or cited by the authored items.
- Full-text retrieval succeeded for the selected sources. No retrieval failure or source-resolution record arose; no source was dropped for retrieval reasons.

## Local mathematical prerequisites

### period-definition

The local period definition fixes the oriented integral on a closed piecewise-C1 curve and proves its partition independence from continuity and interval additivity.

### period-lemma

The local exact-form lemma applies the coordinate chain rule and one-dimensional fundamental theorem on each chartwise C1 piece, then telescopes the endpoint increments. It asserts only exact implies zero periods, not the converse.

### compensator-lemma

The local compensator lemma expands the charged-data coordinate formula for `\mathcal L_\xi A`, substitutes `d\Lambda_\xi=\mathcal L_\xi A`, and obtains `\iota_\xi F=-d(\xi^aA_a-\Lambda_\xi)` in every chart. It establishes global exactness from a global compensator and makes no assumption that a charged trajectory exists.

## Proof and interface decisions

- `def-tgrx-thermal-vorticity` explicitly fixes the chosen inverse-temperature vector, norm temperature, normalized future unit field, thermal-vorticity sign, units, domain, and absence of physical-state claims.
- `def-tgrx-period-of-one-form` fixes the oriented integral and finite-piece regularity. `lem-tgrx-exact-one-form-zero-period` proves the endpoint cancellation on each smooth piece and does not invoke a converse such as the Poincaré lemma.
- `prop-tgrx-equilibrium-obstructions` separates the kinematic equivalence, the conditional Liouville stationarity equation, the exactness criterion, the global-compensator special case, and the rotating Minkowski calculation. A nonzero period is used only to obstruct a global scalar; the theorem does not claim a physical equilibrium exists.
- `ex-tgrx-rotating-annulus` defines the smooth closed form and potential globally on an annulus excluding the axis, computes its period, and verifies the exactness contradiction. It records no observation or experiment.

## Scoped checks and Step 1 readiness

- `precheck.mts` passes all 6 proof-bearing items. Final `proof-layout.mjs` reports 6 items, 18 steps, and 0 defects. The scoped `rendercheck.mjs` covers all 6 items and both pages with 0 errors and 0 warnings.
- The strict proof-contract check passes all 6 items with 0 errors and 0 warnings. The focused `depcheck.mjs` closes 1,185 prerequisite items and 349 pages with 0 errors or warnings. `content-policy.mjs` passes all 6 assigned items. Coverage check reports 2 pages and 14 harvested results with 0 errors or warnings; `source-fetch-check --stamp` verifies all 9 source entries, with no retrieval failures or documented drops.
- The assigned-pair item DAG recomputes without errors: thermal definition 0, period definition 0, compensator lemma 0, exact-period lemma 1, proposition 2, rotating-annulus example 3. The six Step 1 records are current and `ready`; their direct dependency lists were recorded and hashed in supplier-before-consumer order. These readiness records document completed authoring prerequisites, not independent approval.
- The required run-wide item-level check still reports 186 `empty scaffold inventory` errors in other pairs; it reports no errors for batch 115. The current batch-115 schedule row recomputes to level 0 with `requires: []`, matching the recorded row, but `batch-dependency-levels.mjs check` reports the run-wide input hash as stale after manifest authoring. The shared scheduling record is left to the owner to refresh. No assigned prerequisite is missing or escalated.
- The cross-batch dependency file is the valid empty array: both page prerequisites `tgr-et01` and `tgr-et02` are outside this run, and no direct item/page supplier edge crosses between batches of this run.

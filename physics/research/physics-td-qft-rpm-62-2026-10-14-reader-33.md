# Step 3a reader report — batch 33

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `33`

## Opened inventory

- Batch manifest: `research/physics-td-qft-rpm-62-2026-10-14-batch-33.pages.json` (two pages; eight assigned items).
- Assigned A page: `library/einstein-maxwell-models-mathematics/emg-c01.md`.
- Assigned B/examples page: `library/einstein-maxwell-models-mathematics/emg-c01-examples.md`.
- Assigned items, checked against the direct supplier statements used in their arguments:
  - `items/def-emg-geometric-scaling.md`
  - `items/thm-emg-field-normalization-equivalence.md`
  - `items/thm-emg-conformal-maxwell.md`
  - `items/thm-emg-conformal-einstein-transformation.md`
  - `items/prop-emg-constant-electrovac-rescaling.md`
  - `items/prop-emg-test-field-residual-order.md`
  - `items/cex-emg-conformal-maxwell-not-einstein.md`
  - `items/ex-emg-coulomb-charge-normalization.md`
- Direct mathematical prerequisite context opened: `def-countable-choice`, `def-emg-lorentzian-forms`, `def-gr-smooth-lorentzian-objects`, `def-gr-metric-selected-connection`, `def-gr-curvature-tensor-and-derived-tensors`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-conformal-hodge-multiplier`, `thm-chain-rule-for-total-derivatives`, `thm-real-power-continuity-and-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, and `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`.
- The `emg-mg01` prerequisite page was also opened for its geometry and convention context. Published mathematical imports were treated as read-only.
- The batch proof-contract file and author-check record were consulted as navigation/context only, not as proof verdicts.

The files were all opened, but the initial opening sequence did not consistently put every supplier before its consumer. Before forming verdicts, I checked each assigned claim against its direct suppliers and revisited the consumer arguments in dependency order.

## Independent review and edit

- `def-emg-geometric-scaling`: the SI dimensions and derived units are algebraically consistent. The item distinguishes symbolic conversion parameters from any physical field equation or empirical value.
- `thm-emg-field-normalization-equivalence`: the quadratic tensor is trace-free in four dimensions; homogeneity gives the stated field normalization, and tracing both equations gives the stated trace-reversed form. The proof is conditional tensor algebra.
- `thm-emg-conformal-maxwell`: the volume and two-form Hodge scalings give the stated current scaling in both directions. The stress tensor, observer contraction, and quadratic action density have the stated weights. No Einstein-equation invariance is asserted.
- `thm-emg-conformal-einstein-transformation`: the connection-difference tensor, curvature-difference formula, Ricci contraction, scalar trace, and Einstein-tensor expression agree with the stated curvature convention. The smoothness of the positive reciprocal and the symmetry of `H` are supplied locally. The conclusion is a mathematical transformation identity.
- `prop-emg-constant-electrovac-rescaling`: constant metric scaling leaves the lower Ricci and Einstein tensors unchanged; the simultaneous field, cosmological, and current scalings preserve the displayed equations. The Maxwell step uses linearity after applying the conformal result.
- `prop-emg-test-field-residual-order`: the source-free equations remain exact on the fixed background, the residual is exactly quadratic in `epsilon`, and the compact chart-component norm claim follows from continuity, compactness, and homogeneity. The text correctly makes no nearby-solution or backreaction claim.
- `cex-emg-conformal-maxwell-not-einstein`: the zero-field Minkowski solution and positive exponential conformal factor give nonzero transformed scalar curvature, so the displayed universal preservation claim is refuted. No empirical claim is made.
- `ex-emg-coulomb-charge-normalization`: the positive-constant identity and resulting coefficient `-q_geo/r^2` follow from the definitions on the stated exterior domain; the origin is excluded and no point-source solution is asserted.

One confirmed title defect was repaired in `items/ex-emg-coulomb-charge-normalization.md`: `Coulomb flux and geometric charge scale` was changed to `Coulomb field and geometric charge scale`. The item specifies a Coulomb two-form and verifies its component normalization but does not integrate a flux. Its Statement, Verification, and derivation contract were unchanged; it had no `verification.judge` record to remove.

The BIPM 9th-edition SI Brochure, version 4.01, was checked at the ampere discussion (printed p. 129): it states that `mu_0` must be determined experimentally and that `epsilon_0 mu_0 = 1/c^2` remains exact. The brochure's metre definition fixes `c` exactly. Tong's GR notes were checked at §§3.1.3, 4.5.1, and 4.5.3 for the Hodge-star, Maxwell-action/equation, and electromagnetic stress conventions used as context. The batch makes no measurement or statistical inference claim.

No other confirmed defect remained outside edit scope.

## Page verdicts

- `emg-c01`: **Pass.** Its summary accurately describes the parameter dictionary, normalization, conformal identities, coupled constant scaling, and the fixed-metric residual limitation.
- `emg-c01-examples`: **Pass.** Its summary accurately describes the zero-field counterexample and the Coulomb coefficient calculation. The B-page prose was not edited.

## Checks and blocker

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-emg-coulomb-charge-normalization.md`: completed; item unchanged by reflow.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-emg-coulomb-charge-normalization.md`: passed (1 checked, 0 failing).
- The required single `proof-layout` run was attempted for the changed item, but the renderer failed to resolve the `@/components` import from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. Thus rendered proof-layout validation remains blocked by the external renderer module resolution; no proof text was changed.

## Findings not editable in this assignment

None.

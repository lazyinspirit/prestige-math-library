# Batch 4 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-4`.

Reviewed in dispatched order: `rem-fd-turbulence-and-closure-scope`, then `ex-fd-reynolds-stress-sign-and-units`. Two touched obligations and one historical supplier reader finding are owed; no page or refuter decisions are owed.

## Remark — accepted repair

The pre-reader remark is recovered exactly at `research/fluid-dynamics-all-47-2026-10-23-owner-step2-escalations/before-root-metadata/items__rem-fd-turbulence-and-closure-scope.md`, SHA256 `748faa910b01d2f50a4c305507a53766696b4125018858b7e72374bd079b0e82`. Current SHA256 `b0ea748d321064e329f5e48b1562d99ec9cad2c68a71b57cc8a101e4bc36ce08` matches the post-reader snapshot. The complete diff adds the formal SI interpretation and dimensionless weights without changing the finite identity. The prior omission of physical meanings/units is nonfatal; the repair supplies velocity, pressure per mass, acceleration, viscosity and covariance units.

Independently read `thm-fdmath-finite-reynolds-identity` Statement and all four proof steps, and `def-fdmath-finite-ensemble-and-covariance` Definition. The fixed finite sums commute with each indicated derivative; expanding the product cancels both mixed terms since the weighted fluctuation sum is zero. This gives precisely the displayed negative divergence term. The remark has all regularity/common-viscosity hypotheses. Zero weights, a singleton family and singular covariance cause no division or existence issue. A continuous function on the compact time window has a componentwise Riemann integral; no limit, probabilistic expectation identity or closure theorem is imported. No AC is used. No diagram occurs or is needed.

## Example — accepted repair

The earlier archived example at `research/fluid-dynamics-all-47-2026-10-23-owner-step2-escalations/before-root-metadata/items__ex-fd-reynolds-stress-sign-and-units.md` is not itself the pre-reader carrier. Moving its explicitly nonlogical F5 readiness paragraph to Authoring status and deleting the corresponding Given disclaimer reconstructs exactly the immutable pre-reader SHA256 `6006437d58b1ceb28a45a35cb4faf232cea2ca010f64563f1c3a6bf3bf18d912`. This reconstruction was performed in memory and hash-checked, not assumed from a similar file. Comparing those exact bytes with current SHA256 `48dd2177fa2802438f98b301bf40cb04e1abc7526f38997c655591b90b11c693` confirms the reader's unit/domain clarifications, F2 metre-coordinate convention and step 1.1 dimensional sentence. The current item matches the post-reader snapshot.

All four Verification steps were independently checked. Translations map U bijectively onto open translated images, have the stated inverses, determinant one and initial identity. Their Eulerian extensions are smooth constant fields on R3; all member-equation derivatives vanish. Equal weights give zero mean and covariance c^2 e tensor e. The quadratic form is c^2(z dot e)^2, and evaluating at z=e proves nonzero covariance for c>0. Multiplication by positive constant rho_0 preserves positive semidefiniteness and gives Pa. Moving the covariance divergence to the right with the adopted plus-stress-divergence convention gives sigma_R=-rho_0 R. This is a defined correction, not a unique tensor recovered from its divergence: in this constant-field example both divergences are zero. A2 explicitly prevents the uniqueness inference. There is no measured density, stress, sampling distribution or closure assertion. The admitted covariance is rank one and therefore singular; no inverse is used. Zero c is outside the stated example but yields zero covariance consistently; empty and singleton ensembles are outside scope. Time is open and no endpoint limit is asserted. No AC or diagram is needed.

## Historical supplier finding — confirmed nonfatal

`reader:4:1` concerns producer batch 3 `def-fd-quantity-and-frame-conventions`, reached by consumer `ex-fd-reynolds-stress-sign-and-units`. The exact observed pre-reader bytes (SHA256 `8e614dda8eaff14cf4dec53783d8548c9acccc47244f0f71eadb32a2e3a1dd6c`) are recovered in the same before-root-metadata directory. Its Authoring status says the current supplier readiness record is missing. The actual `research/fluid-dynamics-all-47-2026-10-23-step1-def-fd-smooth-motion.json` records ready at `2026-10-22T19:46:20.450Z`. The current supplier SHA256 `b1d3cdef7ef0e5c009281076ea499045f6a7e7da39bbbfd8750b47c1ccb17335` removes exactly that sentence. This confirms a historical false status claim; it does not refute the current source. No historical-byte uncertainty remains for this finding.

Independently opened the current producer Definition, its complete contract entry and manifest placement at fd-f01, and its actual `def-fd-smooth-motion` supplier. This is a definition with no claimed proof; the cited motion supplier's inverse-label argument applies the Euclidean inverse function theorem to the injective spacetime map with nonzero block determinant. Its local inverses patch by uniqueness. The imported inverse-function theorem's statement and complete proof were inspected as context. The example itself uses explicit translation inverses. The actual F2–F4 uses agree with the current Definition: C2 positive-Jacobian motions, Eulerian velocity and metre/second units, tension-positive traction and Pa. Readiness is never used as a logical premise. The outside supplier was not edited. The closed ledger row records the already completed current-source correction, while all immutable producer/consumer routing data are retained verbatim in the decision.

## Sources and consumer review

Read the relevant MIT Flierl/Ferrari Chapter 3 §§3.2, 3.3 and 3.6–3.8 at [official MIT PDF](https://ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf), PDF pp. 5–6 and 8–11. The original www URL failed in the browser; the official no-www URL worked. These sections distinguish averaging operations, identify unresolved nonlinear correlations and exhibit the negative covariance contribution to the momentum equation. They support context, not an empirical or finite-field existence claim.

Read Tennekes/Lumley §2.1, printed pp. 30–33, especially equations (2.1.24)–(2.1.25), through the [cited text rendering](https://djvu.online/file/rx5CLAMFpVjaT). Its signed stress convention agrees with the example. OCR formulas are imperfect, so the local sign conclusion was also derived directly from the inspected local identity. No claim to reading the whole book, a new experimental report or the reader's other cited sources is made.

The repository item/page reference search found no consumers of the two repaired interfaces beyond their own items and fd-c02/fd-c02-examples placements. These pages remain frontmatter only with compact-v1 and unchanged inventories. Therefore no outside consumer repair is needed. Existing cross-batch dependencies remain valid; owned consumer records and frontier notes are maintained. No defective published supplier was found, no published item was edited, and no published-ledger entry or withdrawal is required.

## Local changes and checks

Retained both reader item repairs without further item edits. Synchronized the two manifest statement mirrors and stale remark boundary excerpts; completed the HIGH example risk review. The example risk review covers each proof step and citation, exact algebra/dimensions, degenerate covariance and the empirical/nonunique-divergence limits above. No judge stamp is added or acceptance gate claimed.

Local checks completed successfully:

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-4.proof-contracts.json`: MODERATE 4 remark, HIGH 6 example; zero errors. After completing the review, the same command with `--require-reviewed` reports zero errors, two routed items.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/rem-fd-turbulence-and-closure-scope.md items/ex-fd-reynolds-stress-sign-and-units.md`: both unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/rem-fd-turbulence-and-closure-scope.md items/ex-fd-reynolds-stress-sign-and-units.md`: one proof-bearing item checked, zero failing. The nonproof remark has no numbered proof to check.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-4.proof-contracts.json --strict`: 2/2 checked, zero errors and warnings.
- `node tools/physics-support/proof-layout.mjs items/rem-fd-turbulence-and-closure-scope.md items/ex-fd-reynolds-stress-sign-and-units.md`: 2 items, 4 steps, zero defects.
- Defect-ledger append validated all three new closed rows and refreshed the generated ledger view.

No scientific blocker remains in the routed batch. Engine hash stamping, cross-batch owner reconciliation and the gate battery remain engine-owned. No judgment, publication or self-certification was performed.

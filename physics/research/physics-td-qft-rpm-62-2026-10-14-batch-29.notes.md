# Batch 29 authoring notes — Circular timelike orbit and reduced radial stability

Run: `physics-td-qft-rpm-62-2026-10-14`  
Owner: beta / batch 29.  
Scope: the assigned A/B pair `rpm-curved-orbits-scattering` and `rpm-curved-orbits-scattering-examples`, plus missing mathematical suppliers placed on the assigned A page. No other pair or shared run state was edited.

## Owner direction and plan/design comparison

The binding owner direction requires authoring every available part of the pair even while a different pair's supplier remains draft. The Coulomb physical theorem is therefore written as a complete conditional deduction from the actual batch 24 interfaces; it is not presented as proved or accepted while batch 24 remains in flight.

The current `plan-spec.json` A-page entry is order 427 and requires `cm-math-central`, `cm-math-dynamics`, `gr-spherical-vacuum-model`, and `rpm-external-charge`; its planned item array is empty. The design section at line 248 lists those same four earlier page prerequisites, but its embedded original reservation lists only `rpm-external-charge` in `deps`. This is an internal design conflict. The assignment and current `plan-spec.json` agree on all four page requirements, so the A page preserves all four; the B page requires the A page.

The design reserves four main A results: `pthm-rpm-schwarzschild-circular-stability`, `pthm-rpm-schwarzschild-null-scattering`, `pthm-rpm-static-clock-redshift`, and `pthm-rpm-relativistic-coulomb-scattering`. The A page also adds five local mathematical carriers needed to make the consuming proofs complete: `lem-rpm-schwarzschild-null-geodesic-reduction`, `def-rpm-relativistic-coulomb-phase-system`, `lem-rpm-sine-over-angle-limit`, `lem-rpm-arctangent-reciprocal-angle`, and `prop-rpm-relativistic-coulomb-scattering-branch`. The four assigned worked examples remain on the B page. The shared plan was not modified.

## Inventory, direct in-run edges, and dependency levels

Levels below follow the rule zero without an in-run supplier, otherwise one plus the maximum level of direct in-run suppliers. Published mathematical prerequisites do not raise an item's in-run level.

| Item | Level | Direct in-run suppliers |
|---|---:|---|
| `pthm-rpm-schwarzschild-circular-stability` | 0 | — |
| `lem-rpm-schwarzschild-null-geodesic-reduction` | 0 | — |
| `pthm-rpm-schwarzschild-null-scattering` | 1 | `lem-rpm-schwarzschild-null-geodesic-reduction` |
| `pthm-rpm-static-clock-redshift` | 0 | — |
| `def-rpm-relativistic-coulomb-phase-system` | 0 | — |
| `lem-rpm-sine-over-angle-limit` | 0 | — |
| `lem-rpm-arctangent-reciprocal-angle` | 0 | — |
| `prop-rpm-relativistic-coulomb-scattering-branch` | 1 | `def-rpm-relativistic-coulomb-phase-system`, `lem-rpm-sine-over-angle-limit` |
| `pthm-rpm-relativistic-coulomb-scattering` | 5 | `def-rpm-relativistic-coulomb-phase-system`, `prop-rpm-relativistic-coulomb-scattering-branch`, and batch 24's level-4 `pthm-rpm-charge-mass-shell` plus its level-0 action/IVP suppliers |
| `ex-rpm-schwarzschild-radial-stability-values` | 1 | `pthm-rpm-schwarzschild-circular-stability` |
| `ex-rpm-schwarzschild-null-critical-impact` | 2 | `pthm-rpm-schwarzschild-null-scattering`, `lem-rpm-schwarzschild-null-geodesic-reduction` |
| `ex-rpm-schwarzschild-static-redshift-acceleration` | 1 | `pthm-rpm-static-clock-redshift` |
| `ex-rpm-relativistic-coulomb-newtonian-limit` | 6 | `pthm-rpm-relativistic-coulomb-scattering`, `prop-rpm-relativistic-coulomb-scattering-branch`, `lem-rpm-arctangent-reciprocal-angle` |

The current batch dependency file records batch 24 at level 1 and batch 29 at level 2 requiring batch 24. The item-level path for the physical Coulomb result uses batch 24's current `pthm-rpm-charge-mass-shell` level 4, so its declared level is 5. A full-run dependency recomputation is blocked by malformed, unassigned inventory in batch 42 (`qft-mf03` and `qft-mf03-examples` contain string entries without item IDs); numerous other planned pages also still have empty inventories. The assigned 13 items were independently recalculated from current manifests and all declared item levels match.

## Supplier and mathematical audit

- `cm-math-central`, `cm-math-dynamics`, and `gr-spherical-vacuum-model` are current prerequisites. The required `rpm-external-charge` page and its carriers are still assigned to the active batch 24 run and are not accepted inputs.
- The actual batch 24 drafts were inspected at their statements and proofs. `def-rpm-charge-spin-model` supplies constant positive mass and charge, prescribed external two-form, local potential convention, and units. `post-rpm-external-charge-action` adopts finite fixed-endpoint stationary timelike segments in a local potential domain. `pthm-rpm-external-charge-action-equivalence` gives stationarity iff the covariant Lorentz-force equation and explicitly assumes exactly countable choice `AC_omega`. `lem-rpm-external-charge-local-ivp` supplies a unique local future-timelike solution under the same `AC_omega`. `pthm-rpm-charge-mass-shell` supplies the curved shell and flat SI three-force/power identities under `AC_omega`; its current flat clause cites `pthm-sr-momentum-and-four-force` under that supplier's stated model assumptions, whose actual dependency chain includes `post-sr-massive-particle-dynamics`. These are all still draft, unvalidated suppliers. The SI field convention used here is the current `def-em-electromagnetic-tensor` plus `def-em-si-conventions`; no stale convention name was substituted. The Coulomb theorem and its B example state the exact `AC_omega` premise and preserve the flat massive-particle postulate.
- The published circular-orbit supplier distinguishes `V_ell=W_ell/2`. Its clause (c) gives `V_ell''=c^2 s(r-3s)/(r^3(2r-3s))`; therefore `W_ell''=2V_ell''`. The local circular theorem and B examples use the corrected factor 2. In particular `W_ell''(4s)=c^2/(160s^2)` and `W_ell''(2s)=-c^2/(4s^2)`. At `r=3s`, direct fixed-ell differentiation gives `W_ell'=c^2s(r-3s)^2/r^4` and `W_ell''=-2c^2s(r-3s)(r-6s)/r^5`, proving the stationary inflection and one-sided instability without calling it a local extremum.
- The local null reduction is required because the inspected published Schwarzschild reduction is timelike-only. It derives the null Killing invariants and radial first integral from the metric and null constraint. The null scattering theorem proves simple-root, double-root, endpoint convergence, and conditional Kruskal claims locally; no measured shadow or lensing statement is made.
- The Coulomb proposition proves the repulsive turning root, global noncollision branch, exact angle, and impact parameter. Two local mathematical lemmas now explicitly provide the small-angle sine limit and reciprocal-positive-argument inverse-tangent identity used in the proof and Newtonian-limit example. The proposition's global-tail argument now shows radial unboundedness before asserting asymptotic rates.
- Static-clock results remain conditional model deductions. The clock and frequency ratios use ideal clocks and geometric optics; the proper acceleration is a model requirement for static observers. No observations or measured precision are asserted.

## Sources and retrieval history

Coverage records are in `physics-td-qft-rpm-62-2026-10-14-batch-29.coverage.json`. The A-page Schwarzschild baseline has two independent complete treatments: Sean Carroll's full lecture notes, §7, pp. 172–181, and David Tong's complete Chapter 1 HTML, §§1.2.5 and 1.3.1–1.3.5, printed pp. 24–46. The Coulomb dynamics has Landau and Lifshitz's complete *Classical Theory of Fields*, §§16–17, 19, 39 and Problem 1, and Boyer's complete 14-page paper, §§II and IV–VI. The local SI proof handles the sign conversion directly. Boyer treats the opposite attractive sign and is not used as a proof of the repulsive formula.

The coverage file preserves all failed-source history and alternatives: Gourgoulhon's official PDF and same-work mirror, Naculich's complete notes PDF, and Tong's official PDF are documented drops after the initial failure plus five recovery attempts. Their relevant full text was inspected where available; accepted claims are independently carried by complete local proofs and the active Carroll/Tong or Landau/Boyer records. Three additional active full-text records support the local math carriers: OpenStax *Calculus Volume 1* §2.3's sine-limit argument, NIST DLMF §4.23 on principal inverse branches and reflection formulas, and OpenStax *Precalculus 2e* §6.3 on inverse-trigonometric ranges and compositions. The source history lists URLs, locators, supported items, dispositions, attempts, searches, and per-item alternative arguments/dependencies. Both local math carriers have complete proofs from exact published suppliers and are listed as canonical coverage results.

## Readiness and blockers

All available authoring is complete. The 11 items whose prerequisites are current are intended `ready`. `pthm-rpm-relativistic-coulomb-scattering` and `ex-rpm-relativistic-coulomb-newtonian-limit` are intended `escalated` because the exact batch 24 action, equivalence, local-IVP, and mass-shell carriers remain draft/unvalidated and the `rpm-external-charge` page prerequisite is still pending. Both items retain complete conditional arguments, explicit supplier hypotheses, and the exact unresolved dependency chain.

The required `step1-decisions.mjs record` command cannot load any item in this run because `loadStep3` fails before reaching batch 29 with `Duplicate item undefined`. The specific cause is batch 42's malformed QFT example inventory: `research/physics-td-qft-rpm-62-2026-10-14-batch-42.pages.json` has seven string entries (six on `qft-mf03`, one on `qft-mf03-examples`) where item objects with IDs are required. This is outside batch 29 scope and was left untouched. No readiness record was fabricated or marked ready through a bypass. The same whole-run defect blocks `batch-dependency-levels.mjs check`; its owner-managed file was not edited.

## Scoped checks

- Scoped normative precheck: 12 proof-bearing items checked, 0 failing. The mathematical definition has no proof section.
- Scoped `content-policy`: 13 items, 0 errors, 0 warnings.
- Strict proof contracts: 13/13 items checked, 0 errors, 0 warnings.
- Scoped KaTeX/frontmatter `rendercheck`: all 13 assigned items and both pages pass (15 files).
- `coverage-checklist --require-destination`: 1 page, 39 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 7/11 sources fetch-verified; all 11 resolved, including four documented drops. A final check-mode rerun returned the same result.
- Required explicit-item `proof-layout` invocation was attempted after final proof edits. Its renderer fails before layout because Node cannot resolve `@/components` imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`.
- Full-run `item-dependency-levels.mjs check` reports unrelated empty inventories plus seven missing IDs in batch 42; the assigned 13 items' recomputed levels exactly match their manifest labels. `batch-dependency-levels.mjs check` fails with `Duplicate item undefined` on the same batch-42 string entries. The shared dependency file and batch 42 were not modified.
- `step1-decisions.mjs record` was attempted for one ready item and one escalated item; both stop at `Duplicate item undefined` before writing, because `loadStep3` validates all run manifests first. No readiness record was created through a bypass. The item-level status disposition is documented above for the owner to record when the malformed batch-42 inventory is repaired.

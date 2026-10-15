# Batch 1 notes — Thermodynamic Framework

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta, batch 1  
Assigned pair: `td-thermodynamic-framework` and `td-thermodynamic-framework-examples`

## Plan and design comparison

The current `plan-spec.json` row and the complete TD1 section in `plan-thermodynamics-track.md` agree on A/B page IDs, title, thermodynamics category, physics library, order 263/264, companion, and no declared earlier page prerequisite. The design reserves six A items, an A-page cap of 18, and a B-page cap of 8. All six reserved A IDs are present. The seven-item A page adds `def-td-galilean-rest-frame` as a local prerequisite for the Newtonian frame, center-of-mass, and internal-energy conventions. This is permitted local prerequisite work, not a change to the plan row. The four B examples include the scaffolded Joule primary-source example and remain below the reserved cap. No design/spec metadata conflict was found.

The current plan’s cross-page inputs are preserved: the B page requires its A page; `td-entropy-foundation` (order 265) requires this framework A page; and `td-accessibility-foundation` (order 271) requires both `td-math-convex-contact-and-mixing` and this framework A page. The framework A page itself has no earlier page prerequisite.

The A page has 7 items and the B page has 4 examples, both below the hard 100-item limit. The exact item statements, dependency roles, sources, and levels are in `physics-td-qft-rpm-62-2026-10-14-batch-1.pages.json`. All locally authored physical items have a nonempty `physical_scope`.

## Item dependency levels

The assigned batch-scoped dependency check recomputed all 11 item labels with no cycles or level errors. Imported mathematical suppliers do not raise in-run levels.

| Level | Items and in-run suppliers |
|---|---|
| 0 | `def-td-si-quantities`, `def-td-system-and-permitted-exchanges`, `ex-td-joule-primary-work-heat-report` |
| 1 | `def-td-galilean-rest-frame` ← SI quantities; `ex-td-system-exchange-boundaries` ← system definition; `ex-td-si-unit-arithmetic` ← SI quantities |
| 2 | `def-td-equilibrium-state-domain` ← SI quantities, system definition, Galilean frame |
| 3 | `def-td-process-and-protocol` ← equilibrium domain, system definition, SI quantities, Galilean frame; `post-td-bulk-additivity` ← equilibrium domain, system definition, SI quantities |
| 4 | `post-td-first-law-energy` ← equilibrium domain, Galilean frame, process protocol, SI quantities |
| 5 | `ex-td-first-law-sign-convention` ← process protocol, first-law postulate |

The final direct mathematical dependencies are declared in the manifest with `mathematical-premise` roles. They were inspected in the pinned imports, including function limits and uniqueness, finite sums, matrix space/product/transpose, Euclidean norm, subset and function-space definitions. `physics-imports.mjs --verify` passed for all 29,362 pinned mathematical files.

The inspected run-level batch-dependency file originally labeled batch 1 level 0 with `requires: []`, matching the current plan row. Its current global validation is stale after shared plan/inventory changes (`batch-dependency-levels.mjs check` reports “Stale batch dependency levels”). I left this shared run artifact to the owner and report only the independently recomputed batch-1 item levels above.

## Sources and coverage

Full text was inspected for Tong, *Statistical Physics*, §4.2; OpenStax *University Physics* Volume 2 §§3.1–3.3 and Volumes 1 §5.2 and 3 §5.1; Lieb–Yngvason §§II.A and III.A; BIPM SI Brochure 9th edition v4.01, printed pp. 123–135; and Joule’s 1850 report, printed pp. 64–67, 70–71, and 82 (digitized PDF pp. 3–6, 9–10, and 22). Coverage records each locator, supported item, and disposition.

The initial Tong PDF route downloaded but the fetch checker could not verify its compressed-object page count with `mutool` after the initial attempt and five recovery retries. The recorded source-resolution row preserves those six attempts and the searches. The author-hosted full-text HTML chapter was found and inspected; OpenStax §3.3 independently supports the equivalent heat-in/work-by convention. The Tong PDF URL is documented as redundant, while its section content is harvested once under the fetch-verified HTML URL. No further retries were made on the PDF route.

For Joule, the 1884 archive.org reprint route returned a web-parser error and a JSTOR landing page did not provide full text. The Princeton digitized copy of the original 1850 report was then opened and inspected at the water-series apparatus, controls, tabulation, and concluding qualification. The example reports the paper’s nominal historical ratio and Joule’s slight-high vibration/sound caveat; it adds no modern uncertainty or statistical inference.

`source-fetch-check --stamp` resolved 10/10 coverage rows: 9 full-text fetch stamps and the single documented Tong PDF drop. The subsequent check-mode run passed. The checklist records 25 unique harvested results: 9 included, 7 inline, 4 deferred, and 5 out of scope. Its only warning is low yield (9 included results), with Alpha asked to confirm the declines. The four deferrals route zeroth-law/temperature material to `td-entropy-foundation` and pressure/temperature state functions or quasi-static pressure-volume work to `td-representation-and-equilibrium`. The five out-of-scope dispositions concern material-specific ideal-gas/vaporization examples, relativity, Newtonian dynamics, Celsius/thermometer calibration, and Joule’s mercury/cast-iron series. Each disposition has a specific reason in the coverage JSON.

## Scoped checks

| Check | Result |
|---|---|
| `source-fetch-check --stamp` and check mode | 9/10 full-text stamps; 10/10 resolved |
| `coverage-checklist --require-destination` | 0 errors, 1 low-yield warning |
| `proof-contract.mjs --strict` | 4/4 contracts checked, 0 errors, 0 warnings |
| Batch-isolated `proof-contract-coverage` | 11 manifest items, 2/2 supplied proof arguments covered |
| Scoped `content-policy` | 11 items, 0 errors, 0 warnings |
| Scoped `physics-content` | 11 items, 0 errors |
| Scoped `depcheck` | 11 item checks and prerequisite cycle checks passed |
| `rendercheck` | 13 changed item/page files passed YAML and KaTeX rendering checks |
| `proof-layout` | 11 items, 4 proof steps, 0 defects |
| Normative `precheck` | 4 proof-bearing/nonproof carriers checked, 0 failures |
| `prosecheck` | 2 pages, 0 errors, 0 warnings |
| Batch-scoped item dependency levels | 11 items, 0 errors, maximum level 5 |
| Manifest/page and item/dependency consistency scan | 0 errors |

The app checkout lacks the `tsx` loader used by its normal proof-layout command, and its minimal TypeScript fallback does not resolve the web `@/` alias. The direct proof-layout attempt therefore failed to load the renderer. A temporary ESM alias resolver in `/private/tmp` allowed the same renderer and proof-layout checks to run successfully; no app checkout or engine files were changed.

## Run-wide holds for the owner

These are outside batch 1 and were not edited:

- The latest run-wide item-level check reports 82 empty page inventories and 28 item-level mismatches outside batch 1. Batch 1’s scoped level check passes.

| Other item | Declared level | Computed level |
|---|---:|---:|
| `pthm-rpm-inverse-momentum-and-work` | 4 | 6 |
| `def-rpm-collision-objects` | 4 | 6 |
| `post-rpm-isolated-collision-balance` | 5 | 7 |
| `pthm-rpm-system-mass-threshold` | 6 | 8 |
| `pthm-rpm-fixed-target-threshold` | 7 | 9 |
| `pthm-rpm-two-body-com-kinematics` | 7 | 9 |
| `pthm-rpm-two-null-invariant-energy` | 7 | 9 |
| `pthm-rpm-kinematic-elastic-channel` | 8 | 10 |
| `texp-rpm-ideal-fusion-mass` | 6 | 8 |
| `texp-rpm-one-null-decay-recoil` | 8 | 10 |
| `def-rpm-h-poincare-charge-space` | 1 | 0 |
| `thm-rpm-h-local-hamilton-jacobi` | 2 | 0 |
| `thm-rpm-h-poincare-moment-map-and-algebra` | 5 | 1 |
| `thm-rpm-h-positive-spin-orbit` | 6 | 2 |
| `post-rpm-h-classical-spin-orbit-model` | 7 | 3 |
| `thm-rpm-h-spinless-kks-identification` | 6 | 2 |
| `pthm-rpm-h-classical-orbit-evolution` | 8 | 4 |
| `thm-rpm-h-killing-shell-first-integral` | 5 | 0 |
| `pthm-rpm-h-free-symmetry-conservation` | 6 | 2 |
| `thm-rpm-h-complete-integral-coordinates` | 6 | 1 |
| `pthm-rpm-h-hj-trajectories` | 7 | 2 |
| `cex-rpm-h-instantaneous-potential-free-boost` | 6 | 2 |
| `ex-rpm-h-two-shell-consistency-obstruction` | 3 | 0 |
| `cex-rpm-h-relativistic-hj-caustic` | 5 | 1 |
| `ex-rpm-h-free-relativistic-complete-integral` | 7 | 2 |
| `def-qft-scalar-mass-shell` | 1 | 0 |
| `lem-qft-mass-shell-measure-invariant` | 2 | 1 |
| `lem-qft-mass-shell-test-range-dense` | 2 | 1 |
- Run-wide proof-contract coverage stops at the empty inventory for `td-cycles-and-low-temperature`. The batch-isolated contract coverage check passes.
- Current autopilot status remains at `1-scaffold`, 4/64 covered, with no in-flight worker. Batch 1 is still listed as missing from scaffold coverage, while its artifact is no longer listed among the missing artifacts. The owner/controller must reconcile the dispatch receipt; no engine state was changed here.
- The shared batch-dependency-level file needs an owner refresh after shared plan/inventory changes.

## Step 1 readiness

All 11 assigned items have `ready` records with `owner: false`, their direct dependencies, and current item/dependency hashes. The postulates carry physics-review contracts; the two examples with verification arguments carry strict proof contracts. Definitions and source-only examples have no proof contract requirement. The run-wide readiness check sees all 11 batch-1 records as current, but the run remains open: at its latest check 51/207 items were ready and 82 pages still had empty inventories.

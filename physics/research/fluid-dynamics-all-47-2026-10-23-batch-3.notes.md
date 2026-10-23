# Batch 3 authoring notes — `fd-f01`

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: beta, batch 3  
Pair: `fd-f01` / `fd-f01-examples`  
Date: 2026-10-23

## Design and placement

The controlling design is [the refreshed fluid-dynamics track](plan-fluid-dynamics-refresh-track.md#L81). It is the current revision for this frontier; [the older fluid-dynamics track](plan-fluid-dynamics-track.md#L67) is historical. Both identify the classical-frames/primitive-quantities/SI-units pair, its fluid-dynamics category, position, and `fd-mf01` prerequisite. The old design's inventory path is stale. The refreshed design and current `plan-spec.json` agree on page identity, title, category, order 365, companion `fd-f01-examples`, and required page `fd-mf01`; `plan-spec.json` is still an unfilled scaffold for this pair and has no item inventory. The refreshed design therefore controls item selection and detail. The B page follows the A page at order 366.

The authored route is conventions and primitive quantities, then the adopted material-balance postulate, then the conditional smooth mass-balance theorem and worked dilation calculation, followed by explicit witnesses about incompressibility versus density homogeneity, unsteady pathlines versus frozen streamlines, and spin-sensitive stress. The conventions retain material incompressibility as `div u = 0`, distinct from spatially homogeneous density `grad rho = 0`; use tension-positive traction `sigma n`; and use local material temperature in the entropy flux. The dilation example is conditional on its stated smoothness, balance, local-equilibrium Gibbs, and Newtonian/Fourier assumptions. It asserts neither empirical measurement nor universal material behavior.

Both page files are YAML frontmatter only, with empty Markdown bodies as required. The A page contains five items and the B page four. No page summary was authored. Two mathematical prerequisites absent from the supplier interface were added to A before consumers: `lem-fd-c1-domain-jordan-integrals` proves the open C1-domain to compact-Jordan integral bridge; `lem-fd-continuous-localization-on-c1-domains` proves localization of continuous zero/nonnegative residuals. Each is a mathematics-domain item with only mathematical prerequisites, complete proof, and explicit dependency roles. The page remains within the 100-item limit.

## Inventory, dependencies, and levels

`dependency_level` is computed over in-run item edges. Out-of-run mathematical items have level zero for this calculation. The nine item IDs and direct dependency roles are recorded in the batch manifest; the dependency levels are:

| Level | Item | Direct dependencies |
|---:|---|---|
| 0 | `lem-fd-c1-domain-jordan-integrals` | `thm-graphs-of-continuous-functions-have-content-zero`, `def-null-and-content-zero-in-rn`, `thm-jordan-boundary-criterion`, `thm-heine-borel-rn`, `thm-compactness-under-continuous-maps`, `thm-lebesgue-criterion-in-rn`, `thm-jordan-content-and-indicator-integrability`, `thm-multidimensional-integral-properties`, `def-riemann-integral-over-a-jordan-set`, `thm-euclidean-inverse-function-theorem`, `thm-chain-rule-for-total-derivatives` |
| 1 | `def-fd-quantity-and-frame-conventions` | `def-fd-smooth-motion` |
| 1 | `lem-fd-continuous-localization-on-c1-domains` | `lem-fd-c1-domain-jordan-integrals`, `thm-multidimensional-integral-properties`, `thm-jordan-content-and-indicator-integrability` |
| 2 | `post-fd-continuum-balances` | `def-fd-quantity-and-frame-conventions`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals` |
| 2 | `cex-fd-unsteady-pathlines-streamlines` | `def-fd-quantity-and-frame-conventions` |
| 2 | `cex-fd-spin-sensitive-stress` | `def-fd-quantity-and-frame-conventions`, `lem-fd-observer-calculus` |
| 3 | `pthm-fd-smooth-material-kinematics` | `post-fd-continuum-balances`, `def-fd-quantity-and-frame-conventions`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `lem-fd-continuous-localization-on-c1-domains` |
| 4 | `ex-fd-material-dilation` | `pthm-fd-smooth-material-kinematics`, `post-fd-continuum-balances`, `def-fd-quantity-and-frame-conventions`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `lem-fd-continuous-localization-on-c1-domains`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-countable-choice` |
| 4 | `cex-fd-incompressibility-not-homogeneity` | `def-fd-quantity-and-frame-conventions`, `pthm-fd-smooth-material-kinematics` |

The in-batch graph is acyclic. The local Jordan lemma is authored before its consumers, and the localization lemma before the mass theorem and dilation example. Physical assumptions are marked `physical-assumption`; formulation prerequisites, mathematical premises, and physical results are separately typed in `dependency_roles`.

## Supplier interface checks

The live `fd-mf01` page and current item files were inspected. `def-fd-smooth-motion` has the C2 orientation-preserving diffeomorphism, positive Jacobian, inverse label, Eulerian velocity, and derivative conventions used by the frame/quantity definition. Batch 3 explicitly adds the initial-chart normalization. `lem-fd-transport-and-density` supplies C1-field change of variables, transport differentiation, Jacobian evolution, and the compact-Jordan mass/density equivalences. Its compact-Jordan quantifier does not itself give the adopted postulate's open C1-domain integrals; the local Jordan conversion and continuous-localization proofs close that exact gap. `lem-fd-observer-calculus` supplies the time-dependent rigid-observer velocity-gradient formula, including the spin term used in the stress counterexample. The complete supplier proofs were read, not inferred from draft labels.

Immediately before recording this batch, `loadStep1Record` plus `step1Decision` reported current, closed `ready` records for all three carriers (`def-fd-smooth-motion`, `lem-fd-transport-and-density`, `lem-fd-observer-calculus`). Their actual statements and proofs match the uses above. All nine batch items now have current `ready` Step 1 records with their examined direct dependency IDs and item/dependency hashes. These are authoring-readiness records, not independent proof approvals.

## Source reading and coverage

The full relevant sections were read. URLs, exact locators, item support, and a disposition for every harvested result are in [`batch-3.coverage.json`](fluid-dynamics-all-47-2026-10-23-batch-3.coverage.json); its 30 rows comprise 21 `included`, one `inline`, and eight `out-of-scope` results. Sources were inspected through their complete PDFs or relevant complete browser-rendered sections:

| Source and URL | Read locator | Supported items; harvest disposition counts |
|---|---|---|
| [MIT OCW 8.01SC, Chapter 11](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter11.pdf) | Complete PDF, §§11.1–11.3: Galilean inertial coordinates and frame dependence | `def-fd-quantity-and-frame-conventions`; 2 included, 1 out of scope |
| [MIT OCW 8.09, full lecture notes](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf) | Complete PDF, §1.1: inertial/non-inertial frames and time-dependent rotation | `def-fd-quantity-and-frame-conventions`, `cex-fd-spin-sensitive-stress`; 2 included, 1 out of scope |
| [David Tong, Fluid Mechanics, Part I](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf) | Complete PDF, §§1.1–1.1.3: continuum fields, Lagrangian/Eulerian descriptions, pathlines/streamlines, material derivative, continuity | `post-fd-continuum-balances`, `def-fd-quantity-and-frame-conventions`, `pthm-fd-smooth-material-kinematics`; 3 included, 1 out of scope |
| [David Tong, Fluid Mechanics, Part II](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf) | Complete PDF, Chapter 3, §§3.1–3.1.2: stress, Newtonian rates, bulk viscosity, momentum and kinetic energy | `post-fd-continuum-balances`, `ex-fd-material-dilation`; 2 included, 1 inline, 1 out of scope |
| [Ain A. Sonin, MIT 2.25 lecture notes](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Sonin.pdf) | Complete notes, §§1.1–1.3: material-volume mass, momentum, energy, entropy and transport/localization | `post-fd-continuum-balances`, `pthm-fd-smooth-material-kinematics`; 3 included |
| [Andrew Hazel, MATH45061, Chapter 3](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf) | Complete Chapter 3, contact force, traction, momentum, angular momentum and stress symmetry | `post-fd-continuum-balances`; 2 included, 1 out of scope; direct fetch dropped after six timeouts, with browser inspection and alternatives recorded |
| [Andrew Hazel, MATH45061, Chapter 4](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf) | Complete Chapter 4, §§4.1–4.5: mass, momentum, energy, entropy; local-temperature qualification | `post-fd-continuum-balances`, `pthm-fd-smooth-material-kinematics`, `ex-fd-material-dilation`; 4 included, 1 out of scope; direct fetch dropped after six timeouts, with browser inspection and alternatives recorded |
| [BIPM, SI Brochure, 9th edition v4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1780410776583&version=7.0) | Complete current English brochure, §§2.2–2.3 and Tables 4–6 | `def-fd-quantity-and-frame-conventions`; 2 included, 1 out of scope |
| [NIST SP 330-2019](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf) | Complete publication, §§2–3 and Tables 4–6 | `def-fd-quantity-and-frame-conventions`; 1 included, 1 out of scope |

The two Manchester PDFs each had an initial direct-fetch timeout plus five recovery timeouts. Exact-title/course-page searches found only the same official links and no alternate direct mirror. Their relevant passages were read in the browser; complete local conditional proofs and the independently read Sonin/Tong treatments preserve the retained coverage. `source-resolution.mjs` validation and `coverage-checklist` pass for both documented drops. An earlier legacy Tong URL, `https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf`, was reported as HTTP 404 in the historical source evidence; the current author-hosted Part I and II PDFs above were searched, read, and fetch-stamped. The old record and searches remain in `source_resolution_history`.

## Proof and model decisions

- The continuum balance laws are explicitly adopted postulates for the stated smooth, positive-density, single-component, nonpolar regime. No source or experiment is presented as proving them universally.
- The local momentum/energy/entropy reductions are conditional deductions with their differentiability, material-region, and divergence-theorem `AC_omega` hypotheses stated. The entropy flux uses local material temperature. The compressible Newtonian/Fourier dilation branch and local-equilibrium Gibbs identity are explicit assumptions.
- The density-Jacobian and incompressibility result is conditioned on the adopted mass balance and positive density. It distinguishes `div u = 0` from `grad rho = 0`; the constant-density specialization found in sources is recorded out of scope rather than substituted for the stated claim.
- The pathline/streamline and spin-sensitive-stress items are explicit analytic witnesses. Neither asserts a momentum solution, empirically realized material, or admissible universal constitutive law.
- No unresolved mathematical prerequisite or cycle remains in the assigned batch. The local open-C1/Jordan issue was closed with the two proved A-page prerequisites; cross-batch item and page interfaces are recorded as `verified` in the cross-batch dependency array.

## Validation and remaining gates

Final scoped results:

- `precheck.mts`: 8 proof-bearing items checked, 0 failing; the postulate passes nonproof structure validation.
- `proof-layout.mjs`: 9 items, 30 numbered proof steps, 0 defects.
- `proof-contract.mjs --strict`: 9/9 items, 0 errors, 0 warnings.
- `content-policy --manifest-only --authored`: 9 scoped items, 0 errors, 0 warnings.
- `rendercheck.mjs`: all 9 items and 2 pages pass YAML, math, and render checks.
- `depcheck.mjs --items-file /tmp/fluid-dynamics-all-47-batch-3-item-ids.json`: all 9 focused item checks and their selected page/prerequisite cycle checks pass; cycle context covered 930 items and 140 pages.
- Scoped dependency-level computation over `fd-mf01`, `fd-mf01-examples`, `fd-f01`, and `fd-f01-examples` gives the levels above with no cycle or label mismatch.
- `coverage-checklist.mjs`: 1 page, 30 harvested results, 0 errors, 0 warnings. `source-fetch-check.mjs`: 7/9 fetch-stamped, 9/9 resolved, with the two documented Manchester drops.
- Cross-batch dependency evidence is a valid JSON array with one row per direct external page/item edge; the supplier checks are verified, not independent approvals.

The full-run `item-dependency-levels.mjs check` is still blocked by empty inventories on other, unassigned fluid-dynamics pages and eight existing dependency-level mismatches on unassigned items (`post-fd-boundary-data`, `pthm-fd-cauchy-momentum-angular`, `pthm-fd-control-volume-balances`, `pthm-fd-energy-decomposition`, `post-fd-weak-balances`, `pthm-fd-conservation-jump-laws`, `ex-fd-conduction-energy-entropy`, and `cex-fd-vacuum-velocity-determination`). No unassigned page/item was edited. The next action is independent Step 3 review and the owner-controlled full-run reconciliation; this batch records authorship readiness only.

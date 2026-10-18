# Batch 33 authoring notes — Positivity, invariant domains and entropy-stable systems fluxes

Run `numerical-analysis-remaining-71-2026-10-17`, role Beta, batch 33; pair
`invariant-domain-and-entropy-stable-conservative-schemes` /
`invariant-domain-and-entropy-stable-conservative-schemes-examples`, orders
2620/2621 in `numerical-pdes-and-spatial-discretization`. The dispatch assigns
dependency level 3, lists batch 32 as prerequisite, and records scheduling input
`497ec54b6248808d75878f39a947e6c3814ffdf3e08dfdd2d83590b0174c1c65`.

## Controlling plan and prerequisite reconciliation

The current PE03 design in `research/plan-numerical-spatial-track.md` §PE03 and
the PE03 rows in `research/plan-spec.json` agree on the claim scope: first-order
HLL invariant-domain preservation under an explicit invariant fan-average
hypothesis and CFL convex weights; ideal-gas positivity only on the stated
symmetric wave-speed branch; Tadmor entropy stability only at the semidiscrete
level; and convex scaling that preserves the mean and positive states at the
specified quadrature nodes. Fully discrete entropy and pointwise-in-cell
positivity are not claimed.

The detailed design lists NA26, PE01 and PE02 as prerequisite interfaces; the
plan-spec direct `requires` edge is PE02 only. The current PE02 page declares
requirements `polynomial-interpolation-and-remainder`,
`monotone-finite-volume-entropy-convergence` and PE01; the monotone finite-volume
page declares NA26. Thus the design's NA26 and PE01 interfaces lie in PE02's
declared prerequisite closure. PE03 keeps the plan-spec direct page edge to PE02
and explicitly declares the PE01 item suppliers it uses. No extra direct page
edge was added. The PE03 manifest's page requirement is therefore plan-matched.

The dispatch names batch 32 as the prerequisite batch. The stored run dependency
artifact currently lists batch 33 at level 3 with `requires: [30, 32]`; batch 30
is the owner of the PE01 item suppliers used directly by PE03, while batch 32
owns PE02. The artifact's stored `input_sha256` is
`197b26583eb6760dc45128e450c32a5132605d90cbe79ae29ccfd1909b60b88b`, which
differs from the dispatch input above. A fresh whole-run batch-level check could
not complete because of the unrelated YAML error described under checks below,
so the stored graph row and hash are reported as on-disk evidence, not as a
freshly verified schedule. No shared scheduling artifact was changed.

## Inventory and dependency levels

The manifest contains 14 A-page items and 4 B-page examples, below the 100-item
page cap. Levels below were recomputed against the full current run dependency
graph, including suppliers owned by earlier batches. The labels match the
batch-33 manifest; a batch-only calculation would incorrectly omit in-run PE01
suppliers.

| Level | Item | Declared item dependencies |
|---:|---|---|
| 0 | `def-pe03-convex-invariant-domain` | — |
| 1 | `def-pe03-system-entropy-pair-and-potential` | `def-hyperbolic-system-and-characteristic-families` |
| 1 | `alg-pe03-convex-scaling-positivity-limiter` | `def-pe03-convex-invariant-domain` |
| 2 | `def-pe03-first-order-hll-finite-volume-update` | `def-hyperbolic-system-and-characteristic-families`, `def-hll-two-wave-flux` |
| 2 | `def-pe03-euler-positive-margin-domain` | `def-ideal-gas-euler-state-and-pressure` |
| 2 | `lem-pe03-euler-llf-split-state-positive` | `def-ideal-gas-euler-state-and-pressure` |
| 2 | `def-pe03-tadmor-entropy-conservative-flux` | `def-pe03-system-entropy-pair-and-potential` |
| 3 | `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed` | `def-ideal-gas-euler-state-and-pressure`, `def-pe03-euler-positive-margin-domain` |
| 3 | `def-pe03-entropy-stable-dissipative-flux` | `def-pe03-tadmor-entropy-conservative-flux` |
| 3 | `lem-pe03-hll-half-cell-riemann-averages` | `def-pe03-first-order-hll-finite-volume-update`, `def-hll-two-wave-flux` |
| 4 | `thm-pe03-hll-update-preserves-convex-invariant-domain` | `def-pe03-convex-invariant-domain`, `def-pe03-first-order-hll-finite-volume-update`, `lem-pe03-hll-half-cell-riemann-averages` |
| 4 | `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux` | `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `def-pe03-entropy-stable-dissipative-flux` |
| 4 | `thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity` | `alg-pe03-convex-scaling-positivity-limiter`, `def-pe03-euler-positive-margin-domain`, `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed` |
| 5 | `thm-pe03-ideal-gas-llf-branch-preserves-positivity` | `def-ideal-gas-euler-state-and-pressure`, `def-hll-two-wave-flux`, `def-pe03-first-order-hll-finite-volume-update`, `lem-pe03-euler-llf-split-state-positive`, `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed`, `lem-pe03-hll-half-cell-riemann-averages`, `thm-pe03-hll-update-preserves-convex-invariant-domain` |
| 4 | `ex-pe03-burgers-entropy-residual` | `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `def-pe03-entropy-stable-dissipative-flux` |
| 5 | `ex-pe03-conservative-positivity-rescaling` | `def-ideal-gas-euler-state-and-pressure`, `def-pe03-euler-positive-margin-domain`, `alg-pe03-convex-scaling-positivity-limiter`, `thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity` |
| 5 | `ex-pe03-entropy-stable-underresolved-shock` | `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `def-pe03-entropy-stable-dissipative-flux`, `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux` |
| 6 | `ex-pe03-near-vacuum-euler-hll-update` | `def-ideal-gas-euler-state-and-pressure`, `def-hll-two-wave-flux`, `def-pe03-first-order-hll-finite-volume-update`, `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed`, `lem-pe03-euler-llf-split-state-positive`, `lem-pe03-hll-half-cell-riemann-averages`, `thm-pe03-ideal-gas-llf-branch-preserves-positivity` |

The local additions close the design's implicit prerequisites before consumers:
the specified one-step invariant-domain map; the system entropy pair and
potential; positive-margin Euler states; the first-order shared-flux update;
Tadmor's exact two-point identity; and the HLL half-cell decomposition. Each
definition states its domain and conventions. No cycle was found. The positive-
margin definition refers to the separately proved convexity/closedness
proposition; it asserts no such property itself.

## Supplier inspection and mathematical scope

The complete current bodies of `def-hyperbolic-system-and-characteristic-families`,
`def-hll-two-wave-flux` and `def-ideal-gas-euler-state-and-pressure` were read,
including the HLL supplier's formula and supplied-speed caveat. The HLL formula,
system convention and ideal-gas definitions are used with their stated domains;
no characteristic-family theorem or unsupported exact-fan speed bound is
imported. The actual current PE02 A-page carrier and all eight item bodies were
read; its eight Step-1 records are currently `ready`. PE03 uses PE02 only as its
declared page prerequisite and imports no WENO, ENO, MUSCL, TVD or fully discrete
claim. The separate PE02 B-page material is not used. Supplier records and
current texts are drafting evidence, not independent approval.

The HLL proof uses the three-region approximate fan only to integrate explicit
half-cell averages. The adjacent TikZ diagram labels the HLL left, intermediate
and right states and wave speeds; its conventions are stated on the A page, and
the algebraic proofs do not rely on the diagram. The invariant-domain theorem
first assumes the two fan averages belong to the convex set; the intermediate-
state/CFL conditions are separately stated as a sufficient way to verify that
hypothesis. The Euler positivity result is restricted to `S_L=-a`, `S_R=a`,
`a >= max(|u|+c)` and `2 nu a <= 1`. Its local split-state proof derives the
internal-energy identity and proves positivity for both signs, including the
speed equality case.

The entropy result derives the numerical entropy flux from the average entropy
variables and entropy potential, proves the local cell inequality on a periodic
mesh, and sums by cancellation. It is semidiscrete only. The convex limiter
selects the maximum feasible parameter in a compact set and preserves the
positive-weight mean; its conclusion is nodewise. Accuracy inactivity requires
the stated strict positive margin. The four B examples check the Burgers
interface residual, a two-node Euler rescaling with exact maximum parameter,
an under-resolved shock's explicit forward-Euler values, and a near-vacuum
symmetric-HLL update. The shock example distinguishes the semidiscrete entropy
inequality from that particular fully discrete step.

## Full-text sources and harvested results

The six sources and ten item-level harvest records below are in
`research/numerical-analysis-remaining-71-2026-10-17-batch-33.coverage.json`.
All six full texts were inspected and stamped successfully; each has one
successful initial fetch record, so no retry or search recovery was needed. The
coverage file carries each exact reading locator and harvested-result
disposition.

| Source and locator | URL | Harvested item(s) and disposition |
|---|---|---|
| Ketcheson, LeVeque and del Razo, *Riemann Problems and Jupyter Solutions*, Part II, HLL solver, “Derivation and implementation,” lines 365–427; complete section inspected. | <https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html> | `lem-pe03-hll-half-cell-riemann-averages` — included. |
| Ketcheson, LeVeque and del Razo, same text, Part II, Euler HLLE section, lines 229–234; complete section inspected. | <https://www.clawpack.org/riemann_book/html/Euler_approximate.html> | `thm-pe03-ideal-gas-llf-branch-preserves-positivity` — inline; the source speed estimate is not imported. |
| Guermond and Popov, “Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems,” §2.2, Definition 2.4, PDF p. 3. | <https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf> | `def-pe03-convex-invariant-domain` — included. |
| Zhang and Shu, “On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes,” §2.1, Theorem 2.1 and limiter/accuracy-margin construction, PDF pp. 5–9. | <https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf> | `alg-pe03-convex-scaling-positivity-limiter` — included; `thm-pe03-ideal-gas-llf-branch-preserves-positivity` — inline, since PE03 proves its own first-order symmetric branch. |
| Tadmor, “Entropy Stable Schemes for Hyperbolic Conservation Laws,” §§4.1–4.3, PDF pp. 477–479. | <https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf> | `def-pe03-system-entropy-pair-and-potential`, `def-pe03-tadmor-entropy-conservative-flux`, `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux` — included. |
| Bürger, Méndez and Parés, “On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models,” §§2.2–2.3, PDF pp. 6–8. | <https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf> | `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux`, `def-pe03-entropy-stable-dissipative-flux` — included. |

`source-fetch-check --coverage ... --stamp` verified all 6 full-text sources;
the final check mode reports 6/6 fetch-verified/resolved. `coverage-checklist`
reports 10 harvested results, 0 errors and 0 warnings. No retrieval failed and
no result was dropped, so no `source_resolution` recovery/drop record applies.

## Contracts, readiness and checks

Proof contracts were generated from the final numbered arguments for 11
proof-bearing items, covering 30 steps. Every contract records exact source
excerpts, step claims and inputs, boundary cases, and applicable finite checks.
The seven definition/algorithm items have no proof contract because they assert
no theorem requiring proof.

Final scoped results:

- `manifest-deps` on the batch-33 manifest: 18 items, 0 normalized, 0 errors.
- `content-policy` on the batch-33 manifest: 18 items, 0 errors, 0 warnings.
- `precheck.mts` on the 18 assigned item carriers: 11 proof-bearing items
  checked, 0 failures; 7 are not applicable.
- `proof-layout.mjs` on the 18 changed item carriers: 18 items, 30 steps,
  0 defects.
- Strict proof-contract validation: 11/11 proof-bearing items, 0 errors,
  0 warnings.
- `rendercheck.mjs` on the 18 items and both assigned pages: 20 files, no
  KaTeX, YAML, link-in-math or delimiter defects.
- Source-fetch and coverage results: 6/6 verified/resolved; 10 harvested,
  0 checklist errors/warnings.
- The scoped full-run dependency calculation returned the listed exact levels
  for all 18 items with 0 batch-33 errors. The whole-run item-level CLI reports
  27 errors in other manifests/items (empty scaffold inventories and stale
  labels); none names a batch-33 item.
- The whole-run `batch-dependency-levels.mjs check` stops while loading
  `items/def-maxwell-edge-fem-semidiscretization.md`: YAML reports “Nested
  mappings are not allowed in compact mappings” at frontmatter line 21,
  column 14, at the unquoted Douglas N. Arnold source title. That carrier is
  outside this pair and was left unchanged; the shared scheduler artifact was
  not rewritten.
- All 13 expected batch-33 cross-batch edges (one PE02 page edge and twelve
  PE01 item edges) are present and `verified`. Direct PE01 supplier carriers
  and all eight PE02 A-page item carriers were checked; the PE01 and PE02
  suppliers have current `ready` records.

The 18 Step-1 records were written in dependency-level order as authored `ready`
dispositions with `owner: false` and direct examined item dependencies. A
current `step1Decision` hash check confirms all 18 are closed against the present
items and supplier inputs. Definitions and algorithms record that no proof
contract applies; proof-bearing items reference their complete final contracts.
These records establish authoring readiness only and do not constitute
independent mathematical acceptance. No published content, shared plan, run
scheduler state or verdict was changed.

# Batch 34 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `mixed-hdiv-fluxes-and-darcy-discretization` / `mixed-hdiv-fluxes-and-darcy-discretization-examples`  
Batch dependency level: 1; declared prerequisite batch: 31.  
Current scheduling input SHA-256: `302f6c44e836b0c4d53f25f474e89c1d248ea458723d8bd2f518c54fcb45e91d`.

## Authority and plan reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner-authoring direction, the batch task and generated dependency-order task, the batch dependency levels, the full assigned design section, and the current plan spec. The owner-authoring direction governs stale task/design text; the canonical plan spec controls design conflicts.

The assigned task and `plan-spec.json` agree on page IDs, titles, order 2622/2623, category, and `requires: [mixed-finite-elements-and-stokes-stability]`. The prose PE08 section in `research/plan-numerical-spatial-track.md` also lists NA-28 (`finite-element-meshes-and-interpolation`), which conflicts with the run plan spec and generated batch manifest. The plan-spec interface controls, so no NA-28 dependency was added. The pair reuses the published `def-matching-affine-simplicial-meshes`, `lem-shape-regular-affine-simplex-scaling`, and affine-simplex Gauss–Green suppliers, and locally defines its RT/BDM families and required H(div) interfaces.

The full PE08 scope and proof route are retained: H(div), weak normal traces, affine Piola identities, RT/BDM spaces, a canonical RT0 interpolant only on H1 inputs, stable RT0/P0 Darcy, continuous solvability/error bounds, exact local mass, and hybridization/static condensation modulo pressure gauge. The `H(div)`-wide commuting projection uses a proved discrete divergence lift and finite-dimensional kernel projection; no facet moments are applied to rough H(div)-only inputs.

## Inventory and dependency graph

The assigned manifest contains 27 A-page items and 4 B-page examples. The scoped item-dependency calculation over batches 31 and 34 checked 61 items, found no cycle or dependency-label mismatch, and gave maximum item level 12. Items are ordered by their computed levels; the full direct dependency inventory is in `research/numerical-analysis-remaining-71-2026-10-17-batch-34.pages.json`.

| Level | Batch 34 items |
|---:|---|
| 0 | `def-na-contravariant-piola-map`; `def-na-hdiv-space`; `lem-na-l2-zero-mean-hilbert`; `lem-na-smooth-neighborhood-dense-in-h1-simplex` |
| 1 | `lem-na-hdiv-weak-normal-trace`; `lem-na-piola-divergence-and-flux-identities` |
| 2 | `def-na-h0div-space` |
| 3 | `def-na-simplicial-mesh-rt-bdm-spaces`; `lem-na-h0div-div-zero-mean`; `lem-na-h1-zero-boundary-is-zero-normal-hdiv`; `lem-na-hdiv-is-hilbert-and-h0div-closed` |
| 4 | `def-na-neumann-darcy-mixed-problem`; `lem-na-cell-average-l2-projection`; `lem-na-piola-preserves-rt-bdm-spaces`; `lem-na-rt0-p0-kernel-is-divergencefree`; `lem-na-simplex-h1-facet-trace-bound`; `ex-na-primal-p1-flux-is-not-locally-conservative` |
| 5 | `def-na-hybridized-rt0-darcy-system`; `lem-na-h1-interior-facet-traces-agree` |
| 6 | `lem-na-rt0-unisolvence-and-global-conformity`; `thm-na-darcy-mixed-wellposedness` |
| 7 | `def-na-rt0-h1-interpolation`; `thm-na-rt0-p0-local-mass-conservation`; `ex-na-constant-flux-reference-triangle` |
| 8 | `lem-na-rt0-h1-interpolation-bounded-and-commuting` |
| 9 | `thm-na-rt0-p0-bounded-divergence-lift-and-infsup` |
| 10 | `thm-na-rt0-bounded-commuting-projection`; `thm-na-rt0-p0-darcy-error-estimate` |
| 11 | `thm-na-rt0-hybridization-equivalence-static-condensation`; `ex-na-checkerboard-permeability-contrast` |
| 12 | `ex-na-two-triangle-hybrid-static-condensation` |

The B-page levels are 4: `ex-na-primal-p1-flux-is-not-locally-conservative`; 7: `ex-na-constant-flux-reference-triangle`; 11: `ex-na-checkerboard-permeability-contrast`; and 12: `ex-na-two-triangle-hybrid-static-condensation`.

## Batch 31 supplier inspection and cross-batch inputs

Read the actual Statements, Facts & Assumptions, complete Proof sections and relevant contracts for the Batch 31 suppliers. Ran strict proof-contract checks for the four directly used item suppliers; each selected contract passed. The exact consumer-to-supplier records, hypotheses, and interface evidence are in `research/numerical-analysis-remaining-71-2026-10-17-batch-34.cross-batch-dependencies.json`.

- `thm-na-bounded-lipschitz-domain-divergence-right-inverse` states under Countable Choice that, on bounded connected Lipschitz D in d=2,3, a bounded linear $B_D:L^2_0(D)\to H^1_0(D;\mathbb R^d)$ satisfies `div B_D q=q` and a domain-dependent gradient bound. Batch 34 checks that H1-zero fields lie in H0(div), then uses this actual lift both continuously and after RT0 interpolation.
- `lem-na-homogeneous-dirichlet-poincare` gives `||w||2 <= L||grad w||2` for H1-zero fields when D lies in a coordinate slab of width L. This is the exact bound used to control the continuous lift graph norm.
- `thm-na-babuska-brezzi-kernel-coercivity` requires real Hilbert spaces, bounded forms, positive inf-sup, a closed kernel and kernel coercivity; its Q={0} Lax–Milgram branch is also handled in the local theorem.
- `thm-na-mixed-galerkin-quasioptimality` requires conforming finite-dimensional spaces, nonzero Qh, positive beta_h and discrete-kernel coercivity, and provides the explicit velocity/pressure formulas used by the Darcy error theorem. The one-cell case, where Qh=Vh=0, is proved separately.

The actual supplier bodies were present and read. At initial inspection, the four direct suppliers had no Step 1 record; the final scoped recheck now finds all 30 Batch 31 and 31 Batch 34 items `ready`, `owner=false`, with current hashes against the scoped 31+34 inputs. The records document scaffold readiness only, not independent proof approval or acceptance.

## Mathematical and axiom audit

The local proof adds two prerequisites before their consumers: H1-zero fields have zero weak H(div) trace, and cell averages form the L2 projection onto P0. It also proves H1 traces agree across interior facets, simplex facet trace bounds, and both directions of the RT0 conformity criterion. RT0 facet unisolvence is proved by the reference-simplex dimension/nullspace calculation and affine Piola transport. General BDM spaces are defined and their Piola polynomial invariance is proved; no general-order BDM unisolvence result is claimed.

The mixed Darcy theorem checks boundedness, the actual right inverse and Poincare constants, the real Hilbert spaces, the closed divergence-free kernel, and coercivity on that kernel. The stable discrete lift uses the proven H1-domain RT0 interpolant; its graph norm is `sqrt(1+C_R^2)` and its inf-sup lower bound is `(1+C_R^2)^(-1/2)`. The full H0(div) commuting projection is
`Pi_h v = S_h(P0 div v) + P_Zh(v - S_h(P0 div v))`,
with P_Zh the finite-dimensional L2 projection onto the exactly divergence-free RT0 kernel. Its proof verifies commutation, identity on Vh, and a mesh-uniform graph-norm bound without rough-field facet traces.

The error estimate keeps `M_a=kappa_min^(-1)`, `alpha_*=kappa_max^(-1)`, `M_b=1`, and the geometric `beta_h` lower bound visible; no contrast-independent claim is made. Hybridization is proved in both directions by the broken jump map and finite-dimensional factorization. Local flux-pressure blocks are invertible for a facet-connected mesh with at least two cells, and the condensed skeleton nullspace is exactly the common pressure/multiplier gauge. One-cell flux and pressure spaces are handled explicitly. All Countable Choice uses are declared; no full Axiom of Choice branch is introduced.

## Source retrieval and disposition

The independent A-page treatments are Guermond's complete MATH 661 Chapters 14 and 16 and the complete Boffi–Brezzi–Fortin textbook; Sayas's complete Lesson 9 is a third mixed Darcy/RT0 treatment. Hunter and Laugesen's complete lecture notes support the smooth-neighborhood H1 density argument. Exact locators, item-level dispositions, retrieval history, hashes and fetch stamps are in `research/numerical-analysis-remaining-71-2026-10-17-batch-34.source-coverage.json`. `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-34.source-coverage.json --stamp` passed 6/6; all six PDFs were already stamped and each succeeded on its initial retrieval. No source-resolution recovery retries or drops were needed, and no source is used as a substitute for a local proof.

## Scoped checks

| Check | Result |
|---|---|
| Scoped item dependency calculation on batches 31 and 34 | 61 items, maximum level 12, no cycles or label mismatches |
| `precheck` | 24 proof items passed; 7 definitions were not applicable |
| `proof-layout` | 31 changed items, 74 numbered steps, 0 defects |
| `proof-contract --strict` | 24/24 proof items, 0 errors, 0 warnings |
| `rendercheck` | 33 assigned item/page files, 0 errors, 0 warnings |
| `depcheck` | 31 focused items and 2 pages, 0 errors, 0 warnings |
| `content-policy` | 31 assigned items, 0 errors, 0 warnings |
| `manifest-deps` | 31 items, 0 normalized, 0 errors |
| `source-fetch-check --stamp` | 6/6 sources fetch-verified; 0 newly stamped |
| `coverage-checklist --require-destination` | 70 harvested results, 0 errors; one low-yield warning |
| Step 1 records | Scoped batch 31+34 check: 61/61 `ready`, `owner=false`, current hashes; all four direct Batch 31 suppliers are included. |

The source-coverage checklist warning says 16/70 harvested results were scaffolded. The dispositions are 16 `included`, 43 `inline`, and 11 `out-of-scope`; every result has an item destination or a specific scope reason. Inline results are absorbed into the listed local proofs, and the out-of-scope results are outside the assigned RT0/Darcy claims; no source result was dropped.

## Whole-run reconciliation limits

The full `item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` cannot certify the active run because it reports errors outside this pair, including empty exterior-wave page inventories and dependency-level mismatches in other PE06 and HP items. The scoped calculation over the current batch 31 and 34 manifests passes for all 61 listed items, with maximum level 12.

The full `step1-decisions.mjs check --run` stops while scanning unrelated legacy item frontmatter at `items/def-phase-field-discrete-realizations.md` (its unquoted source title contains a colon). This pair's 31 records were written with `node tools/step1-decisions.mjs record` in a temporary scoped input containing the actual batch 31 and 34 manifests, then checked against the live items and current scoped manifests. The final scoped recheck includes every extant Batch 31 and 34 record: all 61 items are `ready`, `owner=false`, with current hashes; every direct Batch 34 manifest dependency is recorded. This is scaffold readiness evidence, not supplier acceptance or independent proof approval. The malformed legacy item and other batches' manifests were left untouched.

The live autopilot status was recomputed from `.autopilot/numerical-analysis-remaining-71-2026-10-17`: the run remains at `1-scaffold`, with 43/71 batches covered; batch 34 is still listed as missing in the controller projection while artifact completion is deferred until authoring coverage is complete and writers drain. No writers are in flight, and the owner repair/recertification blocker remains in the run-level blocker file. No autopilot control or engine-state file was changed.

No test suite was run. Draft content, source evidence, mechanical checks, and readiness records do not constitute independent mathematical approval. Published content, shared plans, engine state, run-level verdicts, and files owned by other pairs were left unchanged.

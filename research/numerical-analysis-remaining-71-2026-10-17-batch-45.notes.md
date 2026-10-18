# Batch 45 authoring notes

Run: numerical-analysis-remaining-71-2026-10-17  
Role: beta, batch 45  
Dispatch scheduling input: efecba339a8b7856b5374a4ab904fab996a3823f3bf117c5d9b60619a6ac0167  
Intermediate on-disk batch dependency input observed during authoring: 497ec54b6248808d75878f39a947e6c3814ffdf3e08dfdd2d83590b0174c1c65  
Intermediate on-disk batch dependency input observed at the first handoff check: efba2b53eb5d3314ab67536c60a32900207f4c30fe7d1fb4993a0b7f1d9f34d3  
Latest on-disk batch dependency input checked at handoff: c8198c06fa23a09f54e8c3e93cd642e71bf2c684094e4f80467c4ca07d6eb9e5

## Inventory and item levels

Batch 45 contains the assigned A/B pair only: nine A-page items and five B-page examples/counterexample. The item inventory, exact logical dependency arrays, and dependency_level fields were written to the scaffold manifest before item carriers. Suppliers within the A page are authored in ascending item level.

| Dependency level | Items |
|---|---|
| 0 | lem-schwarz-p1-product-cutoff-interpolation-energy-estimate |
| 2 | def-overlapping-schwarz-subspace-correction-data |
| 3 | lem-schwarz-local-matrices-are-well-defined; thm-two-level-p1-poisson-stable-decomposition |
| 4 | lem-schwarz-local-corrections-are-energy-orthogonal-projections; lem-schwarz-additive-inverse-is-local-energy-minimum |
| 5 | thm-additive-schwarz-stable-decomposition-condition-number |
| 6 | thm-multiplicative-schwarz-exact-sweep-contraction |
| 7 | thm-two-level-p1-poisson-additive-and-multiplicative-bounds |
| 3 | ex-one-level-overlapping-schwarz-condition-number-growth; cex-schwarz-naive-coarse-space-misses-conductive-mode |
| 4 | ex-schwarz-overlap-shrinking-decomposition-bound |
| 6 | ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections; ex-schwarz-inexact-local-solves-spectral-equivalence-bound |

The latest on-disk batch artifact assigns batch 45 level 1 with prerequisites 20 and 31, both level 0. Its input_sha256 differs from the dispatch hash above; both on-disk snapshots observed during authoring record the batch-31 item edge. The page-level formal requires fields remain the two plan-spec entries, multigrid and CEAS. This author does not edit shared scheduling inputs.

## Plan and design reconciliation

The repaired PE25 section of research/plan-numerical-spatial-track.md (L915 onward) and the PE25 row in research/plan-spec.json (L779915 onward) agree on the core scope and proof route: C0*C1 for additive Schwarz, exact multiplicative projection updates, a two-level overlapping P1 Poisson result with H/delta dependence, no one-level uniform-in-subdomain-count claim, and no unproved contrast robustness.

The design names four prerequisite interfaces: NA-06, NA-07, NA-28, and NA-29. The controlling plan-spec.json requires field names only multigrid-methods-and-complexity (NA-07) and ceas-lemma-and-aubin-nitsche-error-estimates (NA-29); those exact formal page requirements are retained in the manifest. NA-06 is a published preconditioner page on ILU(0) and flexible GMRES; it contains no additive Schwarz theorem used here. The two-level proof does use the declared NA-28 lower-regularity interface lem-na-scott-zhang-boundary-preserving-p1-interpolant, whose actual body is in batch 31.

The actual batch-level dependency artifact includes the item-level supplier batch 31, so there is no missing prerequisite edge in the current file. The batch-31 item remains a draft; its complete current body and proof were inspected, and no independent acceptance is inferred. The current input hash differs from the hash carried by the dispatch, so the owner may reconcile that provenance drift. The affected item edge is from the two-level stable-decomposition theorem to lem-na-scott-zhang-boundary-preserving-p1-interpolant; its consumers are thm-two-level-p1-poisson-additive-and-multiplicative-bounds and ex-schwarz-overlap-shrinking-decomposition-bound.

## Supplier checks

- Batch 20: read the actual def-galerkin-coarse-grid-correction definition and full thm-galerkin-coarse-correction-is-energy-orthogonal-projector proof. The theorem assumes an SPD fine matrix and full-column-rank prolongation; it proves the Galerkin matrix is SPD and the exact error map is the energy-orthogonal projector. Those hypotheses match the coarse block in the Schwarz definition. Both carriers remain draft; this record does not claim their independent acceptance.
- Batch 31: read the actual full Statement and Proof of lem-na-scott-zhang-boundary-preserving-p1-interpolant. Its exact interface is Countable Choice, a bounded connected polyhedral domain, conforming shape-regular affine simplices in d=2 or 3, zero-boundary P1 mapping, H1-seminorm stability, and the local L2 estimate. These match the structured cube family. Its current carrier remains draft; its body was inspected and its proof inputs were checked, but no external approval is inferred.
- Published CEAS page: checked the page and the relevant Cea/Galerkin energy-best-approximation suppliers. They assume the Hilbert, bounded/coercive, conforming, and Countable Choice hypotheses stated in those items. The matrix Schwarz arguments are proved directly and choice-free; the formal CEAS page requirement is retained without attributing a stronger supplier claim to it.
- Published NA-06 page: checked its actual contents; it contributes no logical premise to this pair.

## Sources and axiom branches

Jinchao Xu’s complete 34-page SIAM Review paper was retrieved and the relevant reasoning in §§3.1–3.3 and §4.1–the opening of §4.2 was inspected. Peter Bastian’s complete 154-page Heidelberg lecture notes were retrieved; Chapter 3 §§3.1–3.4, Chapter 4 §§4.1–4.3, and Chapter 5 §§5.1–5.4 were read in full. Chapter 5 gives a quasi-interpolant, a distance-based partition of unity, localization estimates, and a stable splitting under its stated shape-regularity and quasi-uniformity assumptions. The local carriers prove their own constants under the current structured-mesh hypotheses and do not treat citations as proof substitutes.

The finite-dimensional matrix definitions, projections, inverse-energy minimization, additive bound, multiplicative contraction, and finite examples use no choice principle. The structured FE stable-decomposition theorem assumes Countable Choice through the actual Scott–Zhang and Sobolev trace/closure interfaces. It does not use full Axiom of Choice.

The prospective MathSim lecture-notes URL https://mathsim.eu/~gkanscha/notes/C.pdf returned HTTP 404 on the initial exploratory retrieval and five recorded Node retries; those retries redirected to https://www.mathsim.eu/404. A web search later returned an indexed result titled “Notes on Applied Mathematics” with Chapter 4 Schwarz text at the same URL. Because that conflicts with the direct retrieval failures, the candidate is recorded as owner-escalation rather than dropped; it is not cited or used in this batch. The Xu paper and full Heidelberg notes provide independent source coverage, and every assigned claim has a complete local proof.

## Owner reconciliation and readiness

The current scheduling artifact contains both prerequisite batch edges, 20 and 31. The three batch-31-dependent items retain that explicit item dependency in the cross-batch record. All 14 batch-45 items are recorded ready with their examined dependencies and completed local checks. These authoring records report body inspection, not supplier acceptance or independent approval. The unresolved MathSim candidate is not cited and supplies no premise to an item.

## Scoped checks

- The latest autopilot status remains running at 1-scaffold (40/71 covered) with an owner repair/recertification blocker recorded in research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json; this author did not change engine state or verdicts.
- Scoped precheck: 13 proof-bearing items passed; the definition is n/a.
- Proof layout: 14 items, 45 steps, 0 defects.
- Rendercheck: all 14 item files and both page files passed; KaTeX and frontmatter parsing passed.
- Strict proof contracts: 14/14 items passed with 0 errors and 0 warnings.
- Scoped depcheck, fwdcheck, and extcheck passed with no warnings or errors.
- Coverage checklist: 1 A page, 21 harvested results, 0 errors and 0 warnings.
- Source fetch: both cited PDFs were fetch-verified (Xu, 34 pages; Bastian, 154 pages). Source backing: 9 authored results remain backed by openable sources.
- Focused item graph: all 14 items match manifest/frontmatter dependencies and computed levels 0, 2, 3, 4, 5, 6, or 7 as listed above.
- Latest full-run item-dependency-levels check exits 1 with 47 errors outside batch 45: 26 empty inventories (hyperbolic-dg-and-summation-by-parts-discretizations, well-balanced-balance-laws-and-wet-dry-fronts, maxwell-eigenproblems-and-compatible-vector-waves, boundary-integral-equations-and-galerkin-bem, compressible-viscous-flow-and-entropy-stable-fluxes, least-squares-fem-and-practical-dpg, exterior-wave-problems-absorbing-boundaries-and-pml, phase-field-and-energy-dissipative-discretization, ale-interface-and-partitioned-multiphysics-discretization, hp-finite-elements-and-spectral-element-methods, isogeometric-galerkin-methods, semi-lagrangian-characteristic-transport, and monotone-hjb-schemes-and-policy-iteration, each with its companion examples page); and 21 stale dependency_level labels in batch 41: def-na-evolutionary-skew-convective-form, lem-na-evolutionary-skew-convective-form-bound, def-na-evolutionary-incompressible-ns-weak-solution, lem-na-evolutionary-ns-weak-form-is-well-defined, def-na-solenoidal-energy-weak-ns-velocity, def-na-mini-navier-stokes-backward-euler-scheme, lem-na-mini-be-scheme-is-well-defined, lem-na-mini-fortin-l2-approximation, thm-na-mini-be-step-existence-energy, lem-na-mini-weak-solenoidal-compactness, lem-na-continuous-pressure-recovery-from-solenoidal-residual, thm-na-mini-navier-stokes-be-subsequential-limit, thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d, thm-na-mini-solenoidal-stokes-projection-error, thm-na-mini-be-smooth-velocity-error, rem-na-pe06-pressure-recovery-escalation, ex-na-periodic-taylor-green-vortex, ex-na-mini-backward-euler-energy-budget, ex-na-zero-mean-pressure-gauge, ex-na-unit-square-mini-mesh-family, and ex-na-conditional-three-dimensional-flow-computation. No reported full-run error is in batch 45; its 14-item focused graph still matches every label and dependency.


## Post-drain owner disposition of unused prospective source

The MathSim candidate is now dropped from this batch source set by the owner as an unused redundant lead, with no harvested contents and no citation or premise in any14actual item. The six retrieval failures and conflicting indexed snippet remain preserved; no claim of permanent unavailability is made. The full original coverage is archived and the exact owner decision is in `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/schwarz-unused-source-disposition.json`. Xu and Bastian remain the actual independently retrieved/read source set. No result, proof obligation or prerequisite is dropped, and independent reviews and gates remain owed.

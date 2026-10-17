# Batch 6 authoring notes

Run: numerical-optimization-dynamics-2026-10-16  
Pair: inequality-kkt-duality-and-optimality-certificates (OPT5)  
Batch dependency level: 0; declared batch suppliers: none. The shared dependency-level input hash remains ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d.

## Controlling design and conflicts

The owner-authoring direction makes the repaired research/plan-numerical-optimization-track.md OPT5 section and its exact incorporated contract-opt5 in research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md controlling. The task's design references at plan lines 84 and 96 identify the same OPT5 pair and contract. The exact appendix controls mathematical hypotheses and routes because the owner direction names it as binding.

The current plan-spec.json OPT5 row has the same A/B IDs, page requirements, scope summary, and examples as the repaired track plan. It is a shorter summary and omits some exact contract hypotheses; this is not a substantive conflict. The native batch manifest's requires fields match the pair table.

The task's required pages are navigation prerequisites. The actual graph interface used is cor-regular-level-set-local-graph-theorem together with thm-differential-rank-is-lower-semicontinuous, after restricting to an open neighborhood on which the equality derivative stays full row rank. The locally-convex-spaces-and-continuous-separation page was inspected, but none of its Hahn–Banach separation theorems is used. OPT5's exact contract requires the finite Farkas alternative to be proved from a closed finitely generated Euclidean cone and nearest-point projection; the implementation follows that route.

The current contract distinguishes MFCQ multiplier existence from LICQ uniqueness. This authoring supplies MFCQ tangent-cone equality and KKT existence, proves LICQ implies MFCQ, and proves uniqueness under LICQ. It also keeps second-order necessity under LICQ separate from second-order sufficiency, which assumes a KKT tuple and strict positivity on nonzero critical directions but no constraint qualification.

## Inventory and item dependency levels

The A page has 17 items and the B page has four examples. There are no unproved supplier fallbacks and no open problems.

| Item group | IDs | dependency_level |
| --- | --- | ---: |
| Core smooth-program definition; convex-program definition; closed finite cone; regular-level second jet | def-inequality-constrained-program-and-kkt-geometry, def-convex-program-duality-and-slater-condition, lem-finitely-generated-euclidean-cones-are-closed, lem-second-order-jet-on-a-regular-level-set | 0 |
| Residual/normal definition; Farkas; MFCQ tangent identity; critical-cone equivalence; weak duality; relative-interior support | def-kkt-residual-and-normal-cone, thm-farkas-alternative-for-finite-linear-systems, thm-mfcq-linearized-cone-equals-bouligand-tangent-cone, thm-critical-cone-equivalence-under-kkt, thm-lagrangian-weak-duality, thm-convex-value-function-support-at-relative-interior-domain-points | 1 |
| MFCQ KKT necessity; convex KKT sufficiency; residual criterion; second-order sufficiency; Slater duality | thm-first-order-kkt-necessity-under-mfcq, thm-convex-kkt-sufficiency-and-normal-cone-certificate, thm-kkt-residual-vanishes-exactly-on-kkt-tuples, thm-second-order-sufficient-condition-on-the-critical-cone, thm-slater-strong-duality-and-dual-attainment | 2 |
| LICQ implication and multiplier uniqueness | prop-licq-implies-mfcq-and-unique-kkt-multipliers | 3 |
| Second-order necessity under LICQ | thm-second-order-necessary-condition-on-the-critical-cone | 4 |
| B examples: failed CQ, positive duality gap, active-set quadratic, stationary saddle | ex-failed-constraint-qualification-blocks-kkt, ex-closed-convex-program-with-positive-duality-gap, ex-active-set-quadratic-kkt-certificate, ex-kkt-stationary-saddle-point | 3, 3, 4, 5 |

The B examples are sorted by item dependency level. Their only in-run item suppliers are on the assigned A page. The full direct external supplier list, exact uses, and inspected content are recorded in research/numerical-optimization-dynamics-2026-10-16-batch-6.cross-batch-dependencies.json.

## Mathematical interfaces and assumptions checked

- The regular-level graph supplier states a local C2 graph with zero first derivative. Full equality rank is open by the rank-lower-semicontinuity supplier, so a pointwise full-rank equality derivative satisfies the graph theorem after restricting the domain.
- Euclidean nearest-point projection exists uniquely on a nonempty closed convex set; its variational inequality has the sign used in the cone projection proofs.
- The finite-cone closure proof reduces every conic representation to an independent finite support and writes each independent-support cone as a closed subspace intersected with a closed orthant. No locally convex or Hahn–Banach separation is imported.
- The smooth constraint convention is always g_i <= 0, lambda_i >= 0, and L=f+nu^T h+lambda^T g. Nocedal–Wright's displayed inequality convention is translated with the sign change stated in source locators; all local steps use the repository convention.
- The convex Slater theorem assumes proper closed convex extended-real functions, independent equality rows, a relative-interior strictly feasible point for every remaining nontrivial inequality, and an attained finite primal optimum. Trivial inequalities are removed from the domain-restricted problem.
- No Axiom of Choice is used in the authored proofs. The finite-dimensional sphere compactness supplier explicitly supplies the choice-free case; the Farkas, cone-closure, and value-support arguments use finite constructions and Euclidean projection.

## Source reading and retrieval

The full 651-page Nocedal–Wright PDF was fetched, text-extracted, and its Chapter 12 first-order, MFCQ, and complete second-order arguments inspected. The full 714-page author-hosted Boyd–Vandenberghe PDF was fetched, text-extracted, and the relative-interior Slater theorem/proof, Farkas section, projection discussion, and convex-gradient condition inspected. The complete 551-line Lecture 5 by Zhiyuan Li was read through its weak-duality proof, full Slater theorem proof, and positive-gap example. The source locator, supported items, and included/inline dispositions are in the coverage file.

The browser PDF text endpoint timed out once on the Stanford book. The author-hosted full PDF was retrieved directly, inspected locally, and then independently passed node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-6.coverage.json --stamp: 5/5 coverage source occurrences were fetch-verified (3,261,932-byte/651-page Nocedal–Wright PDF; 6,881,335-byte/714-page Boyd–Vandenberghe PDF; and the complete 1,594,303-byte Lecture 5 HTML, 88,435 extracted characters). The repeated A/B source occurrences each have their own current fetch stamp. No source was dropped or remains unresolved; no source_resolution fallback was needed.

## Readiness and checks

All 21 items have individual `ready`, `owner:false` records from `node tools/step1-decisions.mjs record`, with each item's direct dependencies listed and readiness evidence included. The focused hash check reports 21/21 current. These records state authorship readiness only and are not independent approval. There are no pending supplier IDs; later cross-pair consumers are not logical prerequisites of OPT5 and were not edited.

### Final checks and run-wide blockers

| Check | Result |
| --- | --- |
| Explicit `node tools/proof-layout.mjs` on all 21 assigned item carriers | Pass: 21 items, 57 numbered steps, 0 defects. |
| `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-6.proof-contracts.json --strict` | Pass: 0 errors, 0 warnings, 21/21. Nine supplier excerpts were refreshed to the exact current supplier section after an initial final-check run found quote mismatches; the repaired contract now passes. |
| Scoped `depcheck` and `rendercheck` over the 21 items and two pages | Pass: 0 dependency errors or warnings; 23/23 rendered with no errors or warnings. |
| Scoped content policy over the 21 assigned items | Pass: 21 items, 0 errors, 0 warnings. |
| Local dependency-level recomputation from the final batch manifest | Pass: 21 items, computed levels 0–5, no mismatch or cycle. The full-run `item-dependency-levels.mjs check` reports errors only for other batches' empty scaffold inventories; it reports no batch-6 item-level error. |
| `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-6.coverage.json` | Pass: 5/5 sources fetch-verified and resolved. The earlier `--stamp` run also passed 5/5 and remains recorded in coverage. |
| `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-6.coverage.json --json --require-destination` | Pass: 2 pages, 22 harvested entries, 0 errors; one advisory low-yield warning. Its 7/18 count treats only `included` entries as built; the other results are explicitly mapped `inline` to named local proofs with item IDs and result-specific reasons. Alpha should inspect those dispositions. |
| `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-6.pages.json` | Pass: 21 items, 0 normalized, 0 errors. |
| Focused Step 1 readiness hash check | Pass: 21/21 closed/current. |

The run-wide `batch-dependency-levels.mjs check` is blocked by a YAML parse error in the unassigned carrier `items/def-matching-affine-simplicial-meshes.md`, frontmatter locator line 17 (`§§8.1–8.2, printed pp. 83–88: reference maps, ...`); the colon followed by a space is parsed as a nested mapping. This is another pair's file and was left untouched. The run's autopilot status remains at `1-scaffold`, with no result coverage declared yet; engine state was not changed.

Process-order deviation: authoring began before the final batch manifest file was materialized. The assigned inventory, direct item dependencies, and levels were checked before finalizing the carrier manifest and evidence; the final local recomputation above has no discrepancy. Record this deviation for owner reconciliation rather than treating it as proof of compliance with the requested inventory-before-writing order.

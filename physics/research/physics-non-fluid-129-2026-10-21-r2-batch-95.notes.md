# Batch 95 authoring notes

## Plan and scope

The run-local owner authoring direction file was absent. The detailed design in research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md, section “Gibbs sampling, exact coupling and finite-error certificates,” and the current plan-spec.json agree on the A/B IDs, title, order, category, library, and four A-page requirements. There is no plan/design conflict.

The six reserved A results were authored: finite random-scan heat-bath update, its finite Dobrushin TV/bias bound, monotone Ising CFTP, CFTP exactness, finite Potts Swendsen–Wang update, and its invariance theorem. The planned B leaf ex-csm-frontier-metastable-diagnostic is also complete. The design additionally requires error budgets to keep truncation, mixing, statistical, and arithmetic terms separate; the A page therefore includes the local, fully proved lem-csm-frontier-error-budget-composition. The interval partition-function procedure and certificate are separately reserved for the later csm-frontier-rare-event-numerics pair; this batch does not duplicate or claim that algorithm, directed-rounding enclosure, or exponential-cost result.

Both pages remain empty-body draft pages, as required by the statement-first workflow. A has seven mathematical items and B has one example, well below the 100-item page cap.

## Dependency inventory and levels

The run dependency-level inventory gives batch 95 level 3, requiring batches 86 and 90. The current A page directly requires csm-frontier-quantitative-dlr (batch 86) and csm-frontier-fk-loop-algebra (batch 90), plus the published csm-gibbs-lattice page and the imported published metropolis-hastings-algorithm-and-invariance page. B directly requires A.

Current item levels were recomputed from each item’s actual direct in-run deps; external published/imported mathematics does not raise a level:

| Item | Level | In-run item suppliers |
|---|---:|---|
| alg-csm-frontier-heat-bath-update | 0 | none |
| thm-csm-frontier-heat-bath-tv-bound | 1 | alg-csm-frontier-heat-bath-update |
| lem-csm-frontier-error-budget-composition | 0 | none |
| alg-csm-frontier-monotone-cftp | 1 | alg-csm-frontier-heat-bath-update |
| thm-csm-frontier-monotone-cftp-exact | 2 | alg-csm-frontier-monotone-cftp, alg-csm-frontier-heat-bath-update |
| alg-csm-frontier-swendsen-wang | 1 | def-csm-frontier-finite-potts-fk |
| thm-csm-frontier-swendsen-wang-invariance | 2 | alg-csm-frontier-swendsen-wang, def-csm-frontier-finite-potts-fk, thm-csm-frontier-edwards-sokal |
| ex-csm-frontier-metastable-diagnostic | 0 | none |

The item graph is acyclic. Batch 95’s two direct in-run page edges and three direct in-run item edges are recorded individually in physics-non-fluid-129-2026-10-21-r2-batch-95.cross-batch-dependencies.json. The DLR page’s own requirements (csm-gibbs-lattice and csm-frontier-probability-interfaces) and the FK page’s requirements (csm-frontier-large-deviation-ensembles and temperley-lieb-diagram-algebra-and-catalan-basis) are transitive page context, not additional batch-95 consumer edges. No LDP or Temperley–Lieb claim is used in the local sampling proofs.

The finite heat-bath theorem defines its finite influence coefficients explicitly and proves its coupling bound locally; it does not invoke an infinite-volume Dobrushin uniqueness result. The heat-bath item defines its finite positive weights locally and does not import Countable Choice through the infinite-lattice Gibbs specification. The B example uses the exact finite specialization of the imported MH procedure and invariance theorem, and carries their explicit AC assumption.

## Current supplier checks and readiness

Before recording consumer readiness, loadStep1Record and step1Decision were rerun on the current run inventory. All four A items and the B Ising example in batch 86, and all five A items in batch 90, returned current ready records. The current FK definition and Edwards–Sokal statement/proof were reopened and matched to the consuming use: finite simple graph, integer Q>=2, edge-specific finite v_e>=0, the exact joint weight W, the finite Potts/FK marginals, and independent uniform coloring conditional on a positive-probability edge set. The edge-activation conditional is derived from W locally, including v_e=0. The readiness records establish current Step-1 authored prerequisites only; later review gates retain their independent acceptance role.

The published csm-gibbs-lattice page and its exact finite-volume Gibbs-specification interface were inspected. The imported MH algorithm and invariance theorem were inspected at their current Definition/Statement and complete local proof; their finite-state hypotheses, explicit AC use, and express nonclaims about uniqueness and mixing are preserved. Those suppliers are read-only.

## Source harvest

physics-non-fluid-129-2026-10-21-r2-batch-95.coverage.json and batch-95-sources/source-reading.md record four independent full-text treatments for A and two for B, including complete textbooks and full lecture notes, with per-item dispositions and limitations. source-fetch-check --stamp reports 6/6 page-source entries fetch-verified and 6/6 resolved, with zero drops. The source-resolution list is empty because no retrieval failed. Exact source stamps, read locators, supported items, and search history are preserved in the coverage ledger.

## Cross-batch scope

verified in the dependency file records only the scoped current-interface checks described in its evidence strings; it is not independent proof approval. Published pages/items and transitive batch observations remain contextual notes rather than unsupported dependency rows.

## Final validation and remaining run-wide checks

The eight batch-95 items have current hash-bound Step 1 records with decision `ready`; reloading them after recording reports all eight closed. Their direct dependencies match the manifest. Item levels are 0, 1, 0, 1, 2, 1, 2, and 0 in manifest order; the own-item graph is acyclic. The current run graph computes batch 95 at level 3 with requirements 86 and 90. Final convention review explicitly fixes the CFTP categorical order as $+1\prec-1$, defines the CFTP transition-matrix power index, and assigns reciprocal-energy/energy units to $\beta$ and $B$ in the finite barrier example; manifest statements, proof-contract interfaces, and affected readiness hashes were refreshed.

Final scoped checks: `proof-layout.mjs` passed for all 8 items (25 proof steps, 0 defects); normative `precheck.mts` passed for the 5 proof-bearing items (0 failures); strict proof-contract validation passed for 8/8 items (0 errors, 0 warnings); `rendercheck` passed for 10 item/page files; focused `depcheck` passed for 8 items and their prerequisite cycle checks; and `content-policy` passed for 8 scoped items (0 errors, 0 warnings). The cross-batch dependency JSON is a valid array of five scoped rows. The source-resolution structural check found no failed or unresolved retrievals; `source_resolution` is empty. `source-fetch-check --stamp` passed with 6/6 sources fetch-verified and resolved, with no new fetches required.

`coverage-checklist` reports 2 pages, 14 harvested results, 0 errors, and one `coverage-low-yield` warning: 2/12 A-page harvested results are counted as scaffolded, with a request to confirm declines with Alpha. The source ledger preserves each result's actual `inline` or `included` disposition and its item-level support and limitations; no dispositions were changed to silence the warning. Alpha confirmation remains a handoff for later source review and does not represent a missing mathematical prerequisite in these eight items.

Three run-wide checks remain blocked by unfinished inventories outside this batch. On the final check, `item-dependency-levels.mjs check --run` reports 16 empty pages: `qftx-chern-simons-bf-gravity`, `qftx-kz-chiral-interface`, `qftx-hall-bps-wall-crossing`, and `qftx-categorified-line-operators`, each with its examples page; `csm-frontier-inverse-gibbs`, `csm-frontier-planar-critical-point`, and `csm-frontier-rare-event-numerics`, each with its examples page; and `tgrx-research-boundaries` and its examples. The affected run inventory changed while work was in progress, so this is the latest observed set. `proof-contract-coverage.mjs` stops at the empty `tgrx-research-boundaries` inventory. `batch-dependency-levels.mjs check --run` reports the shared run-level file stale; the current graph was recomputed in memory and confirms this batch's level and requirements above. The shared level file and unrelated manifests are owner-controlled and were not changed.

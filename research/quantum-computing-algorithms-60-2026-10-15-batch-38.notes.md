# Batch 38 authoring and handoff notes

## Governing inputs and plan conflicts

- Read the repository instructions and run-local owner direction before editing. The owner direction, current QA design, and assigned Step 1 restrictions govern this batch; no published content, shared plan, engine state, or verdict was edited.
- The generated batch task says no pair-specific design was found. The current QA track design is present in `research/quantum-algorithms-planning/sections/qa_r3.md`, and its complete QA14 section governs this pair. This is a stale task-marker conflict; the current design controls. Its direct bit-oracle BBBV route, verification-query accounting, arbitrary-$N$ zero completion, and separation of gate cost were retained.
- The assigned pair metadata in `plan-spec.json` agrees on page IDs, order, category, companion, and all six A-page prerequisite pages. Its item arrays are empty, while the current QA14 audited export lists 11 planned A items and 2 planned B items. The page-level plan is compatible with the audited inventory; the 13 planned items were preserved and five local support items were added because the proof route needs them. No shared plan was changed.
- The QA14 design's planned upper-bound route cites `thm-qa-11-known-count-success-bound`. That route conflicts with the actual supplier body: the theorem claims marked-item success at least `max{t/N,1-t/N}` for exact count `t`, including `t=0`, where the asserted lower bound is 1 although no marked item exists. The counterexample is exact. This batch does not use that theorem or its direct consumer `thm-qa-11-known-count-query-cost`; it proves the upper bound using the independent integer-iteration regime, exact recurrence identity, fixed-one schedule, zero-completion simulation, and verification. The QA11 defect remains an owner escalation and was not repaired here.

## Inventory and dependency order

The final inventory is 16 A-page items and 2 B-page items, below the 100-item cap. The A-page includes the 11 planned QA14 items plus five local supports: coherent query normal form, reversible zero-completion query simulation and its correctness theorem, recurrence-to-success identity, and fixed-one verified search algorithm. These local items are declared with dependencies and complete arguments before their consumers. The B-page retains the two planned items.

The manifest and A/B page carriers are ordered by recomputed item dependency level. Every item level is zero if it has no supplier from this run and otherwise one plus the maximum level of its in-run suppliers. The assigned levels are:

| Level | Items |
|---:|---|
| 17 | `lem-qa-14-coherent-query-normal-form` |
| 19 | `def-qa-14-boolean-search-query-model` |
| 20 | `alg-qa-14-zero-completion-query-simulation`; `def-qa-14-query-mismatch-projectors`; `def-qa-14-search-promise`; `lem-qa-14-state-distance-from-acceptance-gap` |
| 21 | `lem-qa-14-one-query-hybrid-bound`; `thm-qa-14-zero-completion-query-simulation-correct` |
| 22 | `alg-qa-14-one-marked-search-with-verification`; `lem-qa-14-cumulative-hybrid-bound` |
| 23 | `lem-qa-14-aggregate-hybrid-squared-distance`; `lem-qa-14-chebyshev-recurrence-matches-grover-success`; `thm-qa-14-grover-search-upper-query-cost`; `ex-qa-14-hybrid-budget-for-n-small` |
| 24 | `thm-qa-14-bbbv-search-lower-bound`; `thm-qa-14-grover-search-upper-success` |
| 25 | `thm-qa-14-optimal-search-query-complexity`; `cex-qa-14-query-parallelism-does-not-give-exponential-search` |

The assigned 18 levels match the current nonempty-manifest graph. The cross-batch input lists six actual page prerequisites, 40 direct item prerequisites, and the complete 1,852-item transitive item closure, including inherited forward references; all referenced item bodies are present. Exact supplier sections and direct item excerpts are retained in the cross-batch JSON. The item dependency rows were reconciled with the final frontmatter after a spelling correction to the cosine-addition supplier.

## Mathematical route and limits

- The lower bound is proved directly for the standard XOR bit oracle. The one-step difference vanishes off address $i-1$ and is bounded by $2\|\Pi_{i-1}\psi\|$ on that block. Hybrids use the all-zero run for the state immediately before each replaced query. Orthogonal projectors sum to identity; Cauchy–Schwarz yields the aggregate $4T^2$ budget. A $1/3$ acceptance gap gives state distance at least $1/6$ and hence decision cost at least $\sqrt N/12$. A finder is converted to decision with one verification query; small $N$ is handled by the zero-query output-law contradiction, giving the uniform finder bound $\sqrt N/24$.
- The upper procedure hard-codes schedule parameter one but does not assume the input has a mark. It pads to $M=2^{\lceil\log_2N\rceil}$, simulates zero-completed queries with one raw query, measures and verifies each candidate, and therefore rejects the empty input exactly. Its chosen iteration count is at most $\lceil\sqrt M\rceil$ and total query count at most $3\sqrt{2N}$. Nonoracle comparison, recurrence, preparation, and reflection work is separate; no polynomial-time assertion is made.
- No source excerpt, supplier proof, acceptance, or owner decision is inferred from planned interfaces. Actual supplier statements and proof bodies were checked for the direct interfaces used here. The false QA11 count-success theorem is explicitly avoided and escalated.

## Source reading and disposition

The complete BBBV paper and full lecture-note texts were retrieved in prior QA source work; the cached PDFs' hashes were checked against their source records. This batch read the complete relevant reasoning in BBBV §3.1 (Theorem 3.3, Corollary 3.4, and the distinct Theorem 3.5), Childs Chapter 23 §§23.2–23.3, de Wolf §§7.2 and 11.1–11.3, and BHMT §2.1 including the exact integer-iteration theorem. BBBV Theorem 3.5 is recorded as a random-oracle result and is not used as the direct search theorem. Childs provides a separate adversary-method treatment. de Wolf and BHMT support the Grover rotation and integer schedule; every QA14 lower-bound step and the arbitrary-$N$ zero completion are proved locally.

The source coverage and evidence files record URLs, complete-text retrieval stamps, relevant locators, supported items, reading scope, and the disposition of harvested results. The existing successful retrieval attempts were reused; no retrieval failed, so there is no `source_resolution` entry and no source was dropped.

## Cross-batch defect escalation

Owner review is needed for the QA11 defect recorded above. Exact affected supplier: `thm-qa-11-known-count-success-bound`; exact direct consumer: `thm-qa-11-known-count-query-cost`. The QA11 theorem's zero-count case is false because `max{0,1}=1` cannot be a marked-output success probability when the marked set is empty. Proposed placement is repair of the QA11 theorem and then audit of its cost consumer on the QA11 A page. This batch uses none of those two results.

## Scoped validation and readiness

- `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` was run after the final manifest reconciliation. It reports no Batch 38 mismatch, but the run-wide check remains open: the unassigned page `quantum-sampling-expectation-and-monte-carlo-examples` has an empty scaffold inventory, and six unrelated QA34 item labels disagree with the current graph (`lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-tang-without-sampling-access`). No other batch files were edited.
- `node tools/precheck.mts` scoped to all 18 assigned item paths: 15 proof-bearing items checked, 0 failures; definitions and algorithm descriptions without proof sections were not applicable.
- `node tools/proof-layout.mjs` scoped to the 18 assigned items: 44 steps, 0 defects.
- Strict `tools/proof-contract.mjs` on the batch contract: 18/18 items, 0 errors and 0 warnings.
- `tools/content-policy.mjs` on the batch manifest: 18 items, 0 errors and 0 warnings.
- `tools/coverage-checklist.mjs --require-destination`: 1 A page, 16 harvested results, 0 errors and 0 warnings.
- `tools/source-fetch-check.mjs --coverage ...batch-38.source-coverage.json --stamp`: 4/4 sources fetch-verified and resolved, 0 newly stamped; the successful earlier attempts were reused and no retrieval failed.
- `tools/rendercheck.mjs` on the 18 item files and both library pages: 20 files, frontmatter and math render checks passed with 0 errors and 0 warnings.
- `node tools/step1-decisions.mjs record` was invoked for every assigned item, without `--owner`. The resulting records are all `ready`, and item-scoped `step1Decision` hash checks pass 18/18. The upper-bound records explicitly route around the false QA11 result described above.
- A full-run `node tools/step1-decisions.mjs check --run ...` is blocked by an unrelated malformed frontmatter line in `items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md:24` (`verification: {, judge: ...`). That item is outside Batch 38 ownership. All 18 Batch 38 records were checked individually against current hashes.

A `ready` record is a completion record only; it is not independent proof approval.

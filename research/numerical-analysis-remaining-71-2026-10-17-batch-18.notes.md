# Batch 18 authoring notes — LIN-CUR

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `interpolative-cur-and-nystrom-decompositions` / `interpolative-cur-and-nystrom-decompositions-examples`  
Role: beta, batch 18

## Scope and controlling text

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner direction, the LIN-CUR section at `research/plan-numerical-linear-track.md` L1764 onward, `research/plan-spec.json`, the task, batch evidence, and the live autopilot status. The controlling LIN-CUR scope and plan-spec agree on the mathematics authored here:

- strong-RRQR-selected column ID, identity interpolation columns, coefficient and trailing-block residual bounds, and explicit endpoint/status handling;
- separately defined skeleton and projected least-squares CUR cores, with exactness only under `rank(A)=rank(W)=k` and the Frobenius projection bound only for the projected core;
- PSD Nyström projector identity, Loewner order, range-capture exactness, and the deterministic spectral residual bound under a full-row-rank leading sketch;
- no arbitrary-column error guarantee, no uniform relative PSD rate, and no random rate without a separately proved sampling theorem and its hypotheses.

The task text's suggestion that `LIN-SVD` is a proposed same-frontier supplier is stale. The existing published page `computed-singular-values-and-rank-revealing-factorizations` contains the actual `alg-strong-rank-revealing-qr-with-finite-swaps` and `thm-strong-rrqr-singular-value-comparisons` suppliers. Their complete relevant definitions/statements and proofs were inspected and used; no new LIN-SVD carrier was invented.

## Dependency and scheduling reconciliation

The dispatch says batch 18 has `dependency_level: 0` and no prerequisite batches. The batch 18 A-page manifest and plan-spec both declare `requires: [sketched-least-squares-and-subspace-embeddings]`; that page is owned by batch 17. The batch-dependency input file currently records batch 17 at level 1 (requires batch 11) and batch 18 at level 2 (requires batch 17). These declarations conflict with the dispatch's level-0/no-prerequisite assignment. The A-page requirement was retained; no shared scheduling file was changed.

The run-wide `batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` cannot recompute the graph: it stops parsing another manifest at line 20, column 87 on the invalid JSON escape `\\p` in the text `printed p. 4: ... $2\\pi$ ...`. This is outside batch 18 and was not edited. The run-wide item checker likewise reports unrelated empty inventories and changed levels elsewhere. A scoped DAG calculation on the batch 18 manifest itself succeeds for all 13 items with no cycles or label errors and maximum level 3; this scoped result does not resolve the page/batch edge conflict.

The live status was recomputed from `.autopilot/`: the run is at `1-scaffold`, with other coverage missing and existing owner blockers. Batch 17's page and all 13 listed item files exist, and its current Step 1 records say `ready`; the item files remain `draft`, so they are not treated as published or independently approved. No random-selection theorem from that page is used by any current LIN-CUR claim. If a later randomized claim is added, inspect the actual supplier body and require, at minimum, the exact hypotheses of the selected theorem: `thm-gaussian-oblivious-l2-subspace-embedding` uses a fixed `d`-dimensional subspace, real standard or normalized-complex Gaussian entries, `0<epsilon,delta<1`, and `m >= 192 epsilon^-2 (d + log(1/delta))`; `thm-leverage-score-row-sampling-subspace-embedding` uses orthonormal `Q`, probabilities `pi_i >= beta ell_i/d`, with-replacement sampling, and `m >= 8d/(beta epsilon^2) log(2d/delta)` (or its stated simpler sufficient form for `delta <= 1/2`). Those are drafting interfaces only here, not proof inputs or acceptance evidence.

The same live status reports a separate native prerequisite blocker: missing `items/def-supg-one-dimensional-convection-diffusion-model.md`, plus the existing Step 1 owner-repair/recertification blocker. These are outside batch 18. The direct run-wide Step 1 decision writer also cannot load the current run snapshot because batch 56's in-progress page lists bare string item IDs and the snapshot loader reports `Duplicate item undefined`. No batch 18 records existed before this attempt. To create the required records without editing another pair's manifest, `node tools/step1-decisions.mjs record` was run in a temporary root containing the exact batch 18 manifest, plan-spec, and transitive item dependency closure; the 13 newly generated `escalated` records were copied into `research/` only after checking that no destination existed. Every record has `owner: false`; no escalation was overwritten.

Because the explicit page requirement and dispatch dependency metadata have not been reconciled, all 13 final Step 1 item records are `escalated`, with the direct item dependencies and the page-level requirement recorded. This records a placement/scheduling blocker, not a mathematical defect or proof approval. The exact current deterministic claims are proved without a LIN-SKETCH theorem; randomized/high-probability claims are omitted rather than inferred.

## Item inventory, direct dependencies, and levels

Levels are recomputed from in-batch item dependencies only: zero without an in-batch supplier, otherwise one plus the maximum supplier level.

| Item | Level | Direct item dependencies |
|---|---:|---|
| `alg-strong-rrqr-interpolative-decomposition` | 0 | `alg-strong-rank-revealing-qr-with-finite-swaps` |
| `lem-moore-penrose-products-are-orthogonal-projectors` | 0 | `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique` |
| `def-cur-reconstruction-cores` | 0 | `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique` |
| `def-psd-nystrom-approximation` | 0 | `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique` |
| `thm-strong-rrqr-interpolative-decomposition-error` | 1 | `alg-strong-rrqr-interpolative-decomposition`; `alg-strong-rank-revealing-qr-with-finite-swaps`; `thm-strong-rrqr-singular-value-comparisons`; `thm-operator-norm-is-the-largest-singular-value` |
| `thm-skeleton-cur-exactness` | 1 | `def-cur-reconstruction-cores`; `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique`; `def-rank-and-nullity`; `thm-rank-nullity` |
| `thm-cur-projection-residual-bound` | 1 | `def-cur-reconstruction-cores`; `lem-moore-penrose-products-are-orthogonal-projectors` |
| `lem-nystrom-square-root-projector-identity` | 1 | `def-psd-nystrom-approximation`; `lem-moore-penrose-products-are-orthogonal-projectors`; `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique`; `thm-non-negative-square-root-exists-and-is-unique` |
| `thm-psd-nystrom-order-and-exactness` | 2 | `def-psd-nystrom-approximation`; `lem-nystrom-square-root-projector-identity`; `thm-non-negative-operator-characterisations`; `thm-non-negative-square-root-exists-and-is-unique` |
| `thm-nystrom-deterministic-spectral-residual-bound` | 2 | `def-psd-nystrom-approximation`; `lem-nystrom-square-root-projector-identity`; `lem-moore-penrose-products-are-orthogonal-projectors`; `thm-non-negative-operator-characterisations`; `thm-non-negative-square-root-exists-and-is-unique`; `thm-operator-norm-is-the-largest-singular-value`; `thm-singular-value-decomposition` |
| `cex-arbitrary-selected-columns-miss-dominant-direction` | 0 | none |
| `ex-exact-rank-two-skeleton-cur` | 2 | `def-cur-reconstruction-cores`; `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique`; `thm-skeleton-cur-exactness` |
| `ex-psd-nystrom-residual-is-psd` | 3 | `def-psd-nystrom-approximation`; `def-moore-penrose-pseudoinverse`; `thm-moore-penrose-pseudoinverse-exists-and-is-unique`; `thm-psd-nystrom-order-and-exactness` |

All existing supplier statements and proofs used by the direct proof dependencies were inspected. New A-page intermediate results are authored before their consumers. No axiom of Choice is used: all selections are finite-dimensional matrix/eigenbasis constructions, and every algorithmic search has an explicit finite swap cap/status.

## Source reading and disposition

The four source records, their full-text fetch stamps, locators, item-by-item harvest dispositions, and recovery history are in `research/numerical-analysis-remaining-71-2026-10-17-batch-18.coverage.json`. Full relevant reasoning was inspected; retrieval succeeded on the initial fetch for each source, so no recovery retries or `source_resolution` escalation were needed.

| Source | Inspected locator and supported items | Harvest disposition |
|---|---|---|
| [Gu and Eisenstat, *Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization*](https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf) | Complete 22-page paper; §3.2 Lemma 3.1 and Theorem 3.2 (printed pp. 853–854), §4. Supports the exact strong-RRQR procedure and the coefficient/singular-value comparison used by the ID definition and error theorem. | Combined swap score and comparison included; Theorem 3.2 proof harvested inline. |
| [Martinsson and Tropp, *Randomized Numerical Linear Algebra: Foundations & Algorithms*](https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf) | Complete 116-page PDF; §§13.1–13.2 (printed pp. 57–59), §14.2 (pp. 62–63). Supports ID conventions, exact skeleton CUR, distinct projected CUR core, and the Nyström projector/residual identities. | Relevant claims included; maximum-volume existence bound and randomized Gaussian Nyström rates out of scope. |
| [Halko, Martinsson, and Tropp, *Finding Structure with Randomness*](https://arxiv.org/pdf/0909.4061) | Complete 74-page PDF; §3.2.3 (printed p. 20), §9.2 Theorem 9.1 and full proof (pp. 51–53). Supports ID conventions and the deterministic Nyström range-projection estimate. | ID and deterministic estimate included; random instantiations out of scope. |
| [Gittens and Mahoney, *Revisiting the Nyström Method*](https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf) | Complete 65-page paper; Lemma 1 and §4.1.1 Theorem 2 including its proof (printed pp. 42–44). Supports the square-root projector identity, PSD order, and deterministic residual bound with its full-row-rank premise. | Deterministic claims included; random sampling/projection rates out of scope. |

The proof-contract file has exact supplier excerpts, actual numbered derivations, input tags, and boundary records for all 13 items. `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-18.coverage.json --stamp` previously passed with 4/4 sources verified and stamped; the final verification pass again reported 4/4 fetch-verified and 4/4 resolved.

## Scoped checks and outcomes

- Final `precheck` over all 13 item files: 10 proof-bearing items checked and passed, 3 definition/algorithm items not applicable, 0 failed.
- Strict proof-contract check: 13/13 items, 0 errors, 0 warnings; 33 proof steps and 35 exact supplier citations.
- `proof-layout` on all 13 explicitly changed item files: 13 items, 33 steps, 0 defects.
- `rendercheck` on all 13 changed item files and both pages: 15 checked, 0 errors, 0 warnings.
- Scoped `dependencyLevels` calculation on this batch's manifest: 13 items, levels 0–3, no errors.
- Source fetch verification: 4/4 fetch-verified, 4/4 resolved.
- Run-wide `item-dependency-levels.mjs check` did not pass because other in-flight manifests contain empty inventories and changed levels; batch 18's scoped graph is clean.
- Run-wide `batch-dependency-levels.mjs check` did not pass because another manifest contains invalid JSON at line 20, column 87 (`\\p`); see the exact blocker above. No shared dependency file was rewritten.
- The run-wide Step 1 checker reports 961 items with only 581 ready and remains open due to other missing records/escalations and empty scaffold inventories. This batch's 13 records are all explicitly escalated for the graph reconciliation above.

The authored proofs prove only exact strong-RRQR-selected ID, projected-core CUR residual control, skeleton CUR exactness under the stated rank hypotheses, and deterministic PSD Nyström claims. They do not assert expected or high-probability rates, or universal relative accuracy.

## Owner current-graph reconciliation after native writer drain

At 2026-10-17T12:44:53.360819+00:00, root inspected the actual current native-generated batch dependency artifact. It records batch18 at level2 requiring17, batch17 at level1 requiring11. This agrees with the unchanged current plan-spec, A-page manifest and declared page requirement. The original dispatch input is historical and is not rewritten. No item-level proof in this pair depends on a sketch theorem, as recorded above; the approved deterministic scope matches the actual full LIN-CUR design and plan-spec, which make random-rate instantiations optional and conditional. The draft status of the internal sketch page is expected, not proof of an absent supplier. Exact evidence and current graph rows are in owner-planning-integration/cur-schwarz-native-graph-reconciliation.json.

The 13 metadata-only escalation records remain historical/current holds until root can bind fresh readiness through the strict full-run reader and consolidated dependency handoff. The unfinished peer string manifest still blocks strict record writes; the scheduling-only projection is not used to bypass that reader. No proof Statement, proof, dependency, original dispatch/result or independent acceptance stamp changed.

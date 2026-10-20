# Batch 93 — Bilevel learning, hypergradients, and implicit layers

Run: `machine-learning-all-101-2026-10-19`  
Pair: `bilevel-learning-hypergradients-and-implicit-layers`  
Dispatch scheduling input SHA-256: `67ea56f8684e8cfd9bfaf50bb8c6e9eb39eb5516870a9ae0f3401bb2d7400fc4`  
Owner direction: `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md`

## Plan reconciliation and scope

The assignment points to `research/plan-machine-learning-track.md` line 553. The current ML-85 design is at line 572. This line-pointer mismatch is the only conflict found: the current plan's item interfaces, page IDs, order 2980/2981, category, prerequisites, proof route, cautions, and examples agree with the ML-85 `plan-spec.json` description. The plan-spec description embeds SHA-256 `0f469eecbfeb051f1fac59a008f7be02df42ca5738617ac53b6b4644ce0aa017`, which matches the current whole-file hash of the plan. The owner direction controls the current supplier reconciliation; no stale task wording was used to replace it. No shared plan or plan-spec entry was changed.

The A page is `bilevel-learning-hypergradients-and-implicit-layers`; its B companion is `bilevel-learning-hypergradients-and-implicit-layers-examples`. The A page has five items and the B page has three examples, both under the 100-item cap. Both page files contain YAML frontmatter only, with empty Markdown bodies, no summary, and no authored `page_layout`. Every complete item statement/formulation is followed by a dedicated references section; supplier links in facts and proofs remain intact. The adjoint algorithm includes an explained TikZ data-flow graph; its proof statements do not rely on the diagram.

**Process deviation:** I derived the item inventory, direct dependencies, and levels before authoring, but wrote the item carriers before populating the batch scaffold manifest. The initial empty manifest is now populated and agrees with the carriers. This violated the required authoring sequence; owner reconciliation is needed. No carrier was deleted or moved to another pair.

## Inventory, claims, direct dependencies, and levels

Levels use the run rule: zero without an in-run item supplier; otherwise one plus the maximum level of in-run suppliers. The batch is assigned dependency level 2 and requires batch 38. Exact direct dependency arrays are mirrored in `research/machine-learning-all-101-2026-10-19-batch-93.pages.json`.

| Item | Level | Direct dependencies | Authored claim and conventions |
|---|---:|---|---|
| `def-smooth-bilevel-learning-problem` | 0 | `def-c-one-map-and-local-inverse`; `def-finite-straight-line-computational-program` | Defines the finite-dimensional open-domain bilevel problem, column-gradient and Euclidean operator-norm conventions, stationarity residual, Hessian and mixed derivative, local stationary branch, hypergradient, and the separate global strong-convexity convention. |
| `alg-adjoint-hypergradient-with-residual` | 1 | `alg-forward-over-reverse-hessian-vector-product`; `alg-reverse-mode-automatic-differentiation`; `cor-hessian-is-symmetric`; `def-finite-straight-line-computational-program`; `def-smooth-bilevel-learning-problem`; `thm-forward-over-reverse-computes-hessian-vector-product`; `thm-reverse-mode-computes-gradient` | Specifies finite exact-real graph evaluations on unique strict branches, an SPD certificate and finite solver contract, HVP block extraction, measured linear residual, and status behavior. It makes no floating-point accuracy claim. |
| `thm-smooth-bilevel-hypergradient-formula` | 1 | `def-smooth-bilevel-learning-problem`; `thm-chain-rule-for-total-derivatives`; `thm-euclidean-implicit-function-theorem` | Proves local branch existence and the implicit hypergradient by IFT and chain rule. The local branch is not asserted to be a global minimizer; a separate full-domain strong-convexity regime proves uniqueness of the global minimizer. |
| `thm-adjoint-hypergradient-linear-solve-error` | 2 | `alg-adjoint-hypergradient-with-residual`; `cor-hessian-is-symmetric`; `def-smooth-bilevel-learning-problem`; `lem-implicit-sensitivity-error-controlled-by-residual`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-chain-rule-for-total-derivatives`; `thm-mean-value-inequality-for-total-derivatives`; `thm-smooth-bilevel-hypergradient-formula` | Proves the exact-state error bound from an actual adjoint residual and SPD lower bound. A separate approximate-state result assumes one common inverse chart, uniform inverse and derivative bounds, and Lipschitz hypotheses; it keeps state error and solve error distinct. |
| `rem-truncated-training-and-exact-hypergradients` | 2 | `alg-adjoint-hypergradient-with-residual`; `def-smooth-bilevel-learning-problem`; `thm-finite-iteration-sensitivity-bound-and-residual-limitation`; `thm-shared-parameter-backpropagation-gradient-formula`; `thm-smooth-bilevel-hypergradient-formula` | Separates exact stationary/fixed-point sensitivity from finite-graph training derivatives and carries the contraction and finite-recurrence hypotheses of the supplied sensitivity results. |
| `ex-ridge-hyperparameter-hypergradient` | 2 | `def-smooth-bilevel-learning-problem`; `thm-smooth-bilevel-hypergradient-formula` | Computes the unique ridge minimizer and direct validation derivative, then verifies the implicit formula gives the same scalar derivative. |
| `ex-singular-hessian-nonisolated-inner-minimum` | 2 | `def-smooth-bilevel-learning-problem`; `thm-smooth-bilevel-hypergradient-formula` | Exhibits a full nonisolated minimizing set, singular Hessian, and two smooth minimizing selections with distinct outer derivatives. |
| `ex-exact-state-wrong-truncated-hypergradient` | 3 | `def-smooth-bilevel-learning-problem`; `rem-truncated-training-and-exact-hypergradients`; `thm-finite-iteration-sensitivity-bound-and-residual-limitation`; `thm-smooth-bilevel-hypergradient-formula` | Verifies a scalar contraction with exact state and zero primal residual at the evaluation point, while every finite unroll has derivative `1-q^K`, not the exact derivative 1. |

The local dependency-level recomputation on the authored two-page manifest found all eight labels correct and no cycle. Out-of-run dependencies do not increase these item levels.

## Supplier inspection and cross-batch status

Batch 38 is the only in-run prerequisite batch. The actual draft suppliers `alg-backpropagation-through-shared-parameter-recurrence` and `thm-shared-parameter-backpropagation-gradient-formula` were inspected, including the full theorem proof. Their current non-owner Step-1 records are ready, hash-matched (`4040d476a4ab0df68246096d2b19f67bbdc5463c531bdcea5f7dd74a03c17e7d` and `25f28112926eb551c19aab0f15a6fc583e1a28d6ff08a77ddf27948fe0f75be3`), and neither was in the final full-run readiness work list. The remark uses the theorem's finite shared-parameter recurrence scope.

The required draft page `automatic-differentiation-and-backpropagation` and published pages `automatic-differentiation-and-computational-graphs` and `inverse-and-implicit-function-theorems` were inspected at the actual carrier level. The used finite-graph definition, reverse-mode algorithm/theorem, HVP algorithm/theorem, Hessian-symmetry corollary, Euclidean IFT and its complete proof, chain rule, mean-value inequality, Cauchy–Schwarz theorem, finite-iteration sensitivity theorem, and full-chart implicit-sensitivity lemma were read with their hypotheses and conventions. There is no unresolved supplier body or invented source excerpt. The published `alg-forward-over-reverse-hessian-vector-product` carrier still has `verification.precheck: pending`; its actual algorithm body and the published HVP theorem proof were inspected and used as written. This note does not claim that supplier's pending precheck passed.

Cross-batch interfaces and their evidence are itemized in `research/machine-learning-all-101-2026-10-19-batch-93.dependency-inputs.json` and `research/machine-learning-all-101-2026-10-19-batch-93.cross-batch-dependencies.json`. No existing supplier Statement or Definition was modified, so downstream consumer-impact repair is not applicable. No axiom or choice principle is used by the authored arguments.

## Full-text sources and harvest dispositions

Each source has a recorded URL, search, inspected locator, per-result disposition, recovery attempt, and full-text fetch stamp in `research/machine-learning-all-101-2026-10-19-batch-93.coverage.json`.

| Source and locator read | Results and disposition |
|---|---|
| Stephen Gould, Basura Fernando, Anoop Cherian, Peter Anderson, Rodrigo Santa Cruz, and Edison Guo, [*On Differentiating Parameterized Argmin and Argmax Problems with Application to Bi-level Optimization*](https://arxiv.org/pdf/1607.05447), complete report, §3.1–3.2, PDF pp. 3–5. | Parameterized lower/upper objective setup and local-vs-global optimizer distinction: included in `def-smooth-bilevel-learning-problem`. Vector stationary-point derivative: included in `thm-smooth-bilevel-hypergradient-formula`. Multiple stationary points/selection caveat: included in `ex-singular-hessian-nonisolated-inner-minimum`. Lemma 3.2's displayed assumptions do not explicitly state Hessian nonsingularity or a differentiable branch; the authored theorem supplies and proves these via IFT rather than inheriting a broader claim. |
| MIT OCW 18.S096, *Matrix Calculus for Machine Learning and Beyond*, Lecture 4 Part 2, [complete 9-page note](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec06.pdf), §§6.3.1–6.3.2, PDF pp. 6–7 (printed pp. 43–44). | Implicit residual derivative and transposed adjoint solve: included in `alg-adjoint-hypergradient-with-residual`. Exact local residual derivative route: included in `thm-smooth-bilevel-hypergradient-formula`. Finite solver differentiation versus exact implicit derivative: included in `rem-truncated-training-and-exact-hypergradients`. |
| J. Lebl, *Basic Analysis II*, [§8.5.1, Theorem 8.5.6 and proof](https://www.jirka.org/ra/html/sec_svinvfuncthm.html). | The complete block-map proof of the C1 implicit-function theorem and derivative formula supports `thm-smooth-bilevel-hypergradient-formula`. |

The source-fetch stamp command passed: 3/3 fetch-verified, 3/3 resolved, zero new stamps. There were no retrieval failures or drops, so no `source_resolution` recovery entry was needed. Two independent primary treatments on the A page are provided by the lecture notes and textbook; the full-text paper is a third treatment. 

## Proof contracts, readiness, and validation

Proof contracts contain actual steps, exact supplier excerpts, explicit uses, derivations, and boundary dispositions. The five proof-bearing items pass precheck after adopting the canonical phase numbering; their carrier metadata records `verification.precheck: pass`. All eight items have hash-bound non-owner Step-1 `ready` records, and the final full-run check placed none of the eight in its outstanding work list. No escalation or owner record was overwritten.

One readiness-record wording issue must remain visible: the initial definition record `research/machine-learning-all-101-2026-10-19-step1-def-smooth-bilevel-learning-problem.json` has a hash-matched `ready` decision, but its reason mentions an earlier run-snapshot parse failure and says a readiness record could not be created. The record was in fact created successfully; that reason is stale/inaccurate. The ordinary recorder forbids replacing an unchanged current ready record without `--owner`, which this dispatch does not authorize. Preserve the record and have the owner reconcile the reason if the workflow permits; its decision/hash are current.

| Scoped check | Result after final edits |
|---|---|
| `source-fetch-check --coverage research/machine-learning-all-101-2026-10-19-batch-93.coverage.json --stamp` | 3/3 sources fetch-verified; 3/3 resolved; 0 newly stamped. |
| `coverage-checklist` on the batch coverage | 1 A page, 7 harvested results, 0 errors, 0 warnings. |
| `content-policy` on the batch manifest | 8 items, 0 errors, 0 warnings. |
| `depcheck --items-file /tmp/bilev-batch93-item-scope.json --json` | 8 items and both pages selected; 0 errors and 0 warnings. Dependency closure: 897 items and 174 pages. |
| `rendercheck` on the eight items and both pages | 10 files, 0 errors, 0 warnings. |
| Strict `proof-contract` on all eight IDs | 8/8 checked, 0 errors, 0 warnings. |
| `precheck` on the five proof-bearing items | 5 checked, 0 failed. |
| `proof-layout` on all eight items | 8 items, 24 numbered steps, 0 defects. |
| Local `dependencyLevels` recomputation on the batch-93 manifest | 8 items, no errors; levels 0, 1, 1, 2, 2, 2, 2, 3 as listed above. |

Run-wide scheduling checks remain owner/global blockers and were not rewritten. `item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports 30 empty scaffold inventories in other batches; the focused batch-93 recomputation passes. `batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports the shared batch dependency-level artifact stale; this batch's recorded input matches its dispatch input, and the shared artifact was left untouched. The final ordinary Step-1 check reported 1,107 items, 945 current-ready, `closed:false`, and 192 work entries; none is one of the eight batch-93 items. At the final autopilot status read the run was `running`, Step 1 scaffold coverage was 71/101 with no dispatch in flight, and the stage remained held for owner repair and recertification (`research/machine-learning-all-101-2026-10-19-step1-blockers.json`). No other pair, published content, shared plan, or engine state was changed by this dispatch.

## Next action

Owner reconciliation is required for the manifest-before-carriers sequencing deviation, the inaccurate reason text on the current definition readiness record, the stale shared batch-dependency-level artifact, and the run's existing Step-1 repair/recertification hold. The mathematical claims, local dependencies, carriers, contracts, and scoped checks for batch 93 are complete; no missing supplier or unresolved mathematical uncertainty remains in this pair.

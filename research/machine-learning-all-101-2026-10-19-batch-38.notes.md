# Batch 38 authoring notes

Run `machine-learning-all-101-2026-10-19`; pair `automatic-differentiation-and-backpropagation`.

## Plan reconciliation

The dispatch's design pointer to `research/plan-machine-learning-track.md` L338 is stale: that location is now in the ML-35 transformer section. The current ML-37 design is at L349–353. The matching plan-spec entry for the A page has the same controlling design description, so there is no substantive current-plan/plan-spec conflict.

Within that design, the 2026-10-18 interface repair at L351 says to reuse the published graph, forward/reverse-mode, gradient, and cost interfaces and locally specialize to neural backpropagation and unrolled shared parameters. The adjacent proposed IDs for a duplicate graph definition and generic JVP/VJP results are stale relative to that repair. Batch 38 therefore authored only a local shared-parameter recurrence algorithm and its gradient formula, plus the specified examples. The existing cost theorem remains in the prerequisite graph page; no new general cost bound, Banach-valued theorem, kink derivative, floating-point accuracy, optimizer convergence, or approximation claim is made.

## Item inventory, dependencies, and levels

In-run item levels are zero when all logical suppliers are published/outside the run, otherwise one plus the greatest in-run supplier level. The levels and direct `deps` below match the batch pages manifest and item frontmatter.

| Item | Claim or role | Direct dependencies | Level | Step 1 |
|---|---|---|---:|---|
| `alg-backpropagation-through-shared-parameter-recurrence` | Real-arithmetic reverse sweep for a finite C1 recurrence; repeated parameter-use pullbacks accumulate | `def-finite-straight-line-computational-program`; `def-c-one-map-and-local-inverse`; `def-total-derivative-in-euclidean-space`; `alg-reverse-mode-automatic-differentiation` | 0 | ready |
| `ex-checkpointed-reverse-sweep-recomputes-intermediate` | Uniform-block schedule with T=2,m=1 recomputes an intermediate and returns $2x\cos(x^2)$ | `def-finite-straight-line-computational-program`; `alg-checkpointed-reverse-schedules`; `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds`; `thm-chain-rule-for-total-derivatives` | 0 | ready |
| `thm-shared-parameter-backpropagation-gradient-formula` | Direct loss derivative plus every tied transition contribution and initial-state contribution | `alg-backpropagation-through-shared-parameter-recurrence`; `def-finite-straight-line-computational-program`; `thm-chain-rule-for-total-derivatives`; `thm-reverse-mode-computes-gradient` | 1 | ready |
| `ex-relu-kink-does-not-have-classical-ad-gradient` | Unequal one-sided derivatives at zero; forward/reverse procedures return NONDIFFERENTIABLE | `alg-backpropagation-through-shared-parameter-recurrence`; `def-finite-straight-line-computational-program`; `alg-forward-mode-automatic-differentiation`; `alg-reverse-mode-automatic-differentiation` | 1 | ready |
| `ex-shared-weight-neural-backpropagation` | Two-layer scalar network with both weights tied to $\theta$; gradient $2\theta^3x^2$ | `def-feedforward-neural-network`; `alg-backpropagation-through-shared-parameter-recurrence`; `thm-shared-parameter-backpropagation-gradient-formula` | 2 | ready |

Suppliers were authored/verified in ascending in-batch level. There are no cycles. The A page requires `automatic-differentiation-and-computational-graphs`, `banach-space-differential-calculus-and-banach-manifolds`, `feedforward-networks-and-universal-approximation`, and `the-total-derivative`; the B page requires the A page. A/B files contain YAML frontmatter only, with no summaries and no authored `page_layout` flag.

## Supplier and hypothesis audit

- `def-finite-straight-line-computational-program` is published and fixes finite topological evaluation, Euclidean transposes, repeated parent slots, deterministic replay, and strict-branch boundary behavior. `alg-forward-mode-automatic-differentiation` and `alg-reverse-mode-automatic-differentiation` use its real-arithmetic C1/strict-branch conventions. The reverse-mode theorem applies to a finite scalar-output C1 graph on a fixed strict branch and computes the input gradient.
- `thm-chain-rule-for-total-derivatives` is the finite-dimensional pointwise chain rule used at every stage. Its statement and proof were inspected. The transitive graph supplier `lem-finite-straight-line-program-defines-c1-map` verifies open admissible domains and C1 node maps; its local-continuity supplier was also inspected. The Banach derivative chain-rule supplier was read, but no batch-38 claim uses it: the result is explicitly finite-dimensional.
- The checkpoint example uses `alg-checkpointed-reverse-schedules` only for its documented uniform-block instructions and `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` only under deterministic replay in the declared domains. No optimality or numerical-accuracy conclusion is imported.
- The batch-31 A page `feedforward-networks-and-universal-approximation` remains draft. Its actual `def-feedforward-neural-network` body is present, its current Step-1 record is `ready`, and the live `itemHash` equals the record hash `333e7598d0a71b9c11221ce27d1949f9fe678ca9f399d687da2d7322431d3904`. The neural example uses only the finite graph/activation convention, explicitly ties the two edge weights, and does not depend on the approximation theorem. No claim is made that the prerequisite page or its other results are published/accepted.
- All arguments are choice-free and finite-dimensional. The ReLU example distinguishes failure of the classical derivative from the software branch convention; it asserts no generalized derivative.

The complete direct-edge audit is in `research/machine-learning-all-101-2026-10-19-batch-38.cross-batch-dependencies.json`; current supplier/page inputs and item levels are in `research/machine-learning-all-101-2026-10-19-batch-38.dependency-inputs.json`.

## Sources

Two independent full-text treatments were read for the A page:

1. Baydin, Pearlmutter, Radul, and Siskind, [*Automatic Differentiation in Machine Learning: a Survey*](https://jmlr.org/papers/volume18/17-468/17-468.pdf), JMLR 18 (2018), complete relevant reasoning in §§3.1–3.2 and §5: execution traces and forward accumulation, reverse adjoints and addition at shared downstream uses, scalar-output gradients, operation-count/storage comparison, and implementation limits.
2. MIT OCW 18.S096, [*Matrix Calculus for Machine Learning and Beyond*, Lecture 5 Part 3](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf), complete 16-page lecture note read, §§8.3–8.4: computational-graph path products, the reverse rule summing all child contributions, scalar objectives, and tape storage.

Per-result locators, item dispositions, search history, and fetch stamps are in `research/machine-learning-all-101-2026-10-19-batch-38.coverage.json`. `source-fetch-check --stamp` verified 2/2 full-text sources and documented no retrieval failures or drops; no `source_resolution` alternative-proof record was needed.

## Contracts, readiness, and validation

The proof contracts in `research/machine-learning-all-101-2026-10-19-batch-38.proof-contracts.json` cover all five items. The four proof-bearing contracts include exact supplier excerpts and actual step maps; all five include eight boundary dispositions. There are no finite-smoke obligations for these general calculus arguments and symbolic examples.

Scoped checks after the final item edits:

- `node tools/tsx-run.mjs tools/precheck.mts <five batch-38 item paths> --json`: four proof-bearing items passed; the algorithm definition was not applicable.
- `node tools/proof-layout.mjs <five batch-38 item paths>`: 5 items, 15 steps, 0 defects.
- `node tools/rendercheck.mjs <five item paths> <two page paths>`: 7 files; frontmatter parsed and all math rendered.
- Manifest/item/page consistency check: 2 pages, 5 items, 0 mismatched inventories, dependencies, levels, or kinds; both page bodies are empty.
- Focused `depcheck` on the five IDs and two pages: 0 errors, 0 warnings; dependency closure 349 items and 209 pages.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-38.pages.json --json`: 5 items, 0 errors, 0 warnings.
- Strict proof-contract check: 5/5 items, 0 errors, 0 warnings. Citation fidelity: 14 citations checked, 0 missing quotations, 0 widening candidates.
- Source-fetch check: 2/2 sources verified, 0 drops.
- `node tools/step1-decisions.mjs record` recorded all five items `ready` with `owner:false`; a current hash check confirms all five readiness records remain closed.

Whole-run dependency checks are not clean outside this pair. `item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports many other batches' empty scaffold inventories and existing ML-31 ReLU dependency labels off by one; it reported no error for the five batch-38 IDs. `batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports the shared artifact stale. The dispatch scheduling input is `c48c6a191a17d2399714bb81654627c02b5f54a45942ba74cc38be5591fff299`, while the current run-level dependency artifact records `0f51d82992717979b2440d603a702752236be21895618c13d16254270e62b035`. Both record batch 38 at level 1 requiring batch 31, but the hash discrepancy needs owner/engine reconciliation; the shared artifact was not edited.

At the final status read, autopilot remained `running` at `1-scaffold`, 29/101 covered, with no in-flight dispatches. Its existing blocker remains the owner repair/recertification hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. No engine state, verdict, shared plan, or published content was changed. The observed Git HEAD was `50139bdcb6`; no commit was made.

## Handoff

Batch 38's five draft items, two frontmatter-only pages, manifest inventory, source coverage, dependency inputs, cross-batch edge file, proof contracts, and readiness records are complete. No mathematical prerequisite remains unresolved for the authored claims. The owner/engine still needs to reconcile the run-level scheduling-hash mismatch and existing Step-1 blocker before the native frontier can advance. Completion records do not constitute independent approval.

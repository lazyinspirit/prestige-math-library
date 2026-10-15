# Batch 59 — Sequential likelihood-ratio tests

Run: `statistical-models-experiments-62`  
Pair: `sequential-likelihood-ratio-tests` / `sequential-likelihood-ratio-tests-examples`

## Controlling plan and reconciliation

The owner direction makes `research/plan-statistical-models-experiments-track.md` controlling. Its complete SME-59 section calls for a two-boundary procedure, both terminal-error bounds, a separate iid termination theorem, and a Bernoulli example. The older `research/statistics-scaffolds-2026-10-11/models/models-06/dossier.md` M06-P10 proposal is narrower: it proposes only a one-sided Type-I rule and explicitly withholds the Type-II and termination claims. I followed SME-59 and did not import the older restriction. `research/plan-spec.json` agrees with the track on the A/B page IDs, order 2034/2035, category, title, and `requires`; its empty `items` arrays are unbuilt planning placeholders, not a mathematical conflict. No shared plan was edited.

## Inventory, dependencies, and levels

The five-item inventory and exact logical dependency arrays are in `research/statistical-models-experiments-62-batch-59.pages.json`. The assigned page-level `requires` are the five published pages `dominated-experiments-likelihood-and-sufficiency`, `sequential-testing-and-anytime-valid-inference`, `stopping-times-and-optional-stopping`, `strong-laws-of-large-numbers`, and `conditional-expectation`; the B page requires the A page. Their relevant supplier statements and proofs were inspected before use.

| Item | Kind | Level | In-run suppliers |
|---|---|---:|---|
| `alg-sequential-likelihood-ratio-test` | algorithm | 0 | none |
| `lem-iid-sequential-likelihood-ratio-factorization` | lemma | 0 | none |
| `thm-sequential-likelihood-ratio-test-error-bounds` | theorem | 1 | algorithm |
| `thm-sequential-likelihood-ratio-test-terminates-under-drift` | theorem | 1 | algorithm, factorization lemma |
| `ex-bernoulli-sequential-likelihood-ratio-crossings` | example | 2 | algorithm, factorization lemma, both theorems |

The focused item-level recomputation returned those levels with no errors or cycles. All 31 unique direct dependencies outside this batch have item files with `status: published`; the scoped dependency check also traversed the 805-item transitive closure with no errors or warnings. The batch cross-run dependency input is `[]`; there are no unresolved supplier IDs or cross-batch edges for this pair. AC is stated on the algorithm and every proof-bearing item. It supports the declared Radon–Nikodym representative choices and the cited measure constructions; no weaker choice principle is silently substituted.

## Mathematical scope and proof route

The algorithm assumes mutual equivalence of the two laws on every finite-time sigma-algebra, chooses nonnegative finite-time likelihood-ratio representatives, and permits `tau = infinity`. It does not claim stopping by itself. The local factorization lemma proves that the iid finite-time likelihood ratio is the product of coordinate densities: it identifies the finite product law on measurable rectangles, proves the weighted product measure has the target rectangle probabilities using Tonelli, applies pi-system uniqueness, and transfers the density identity to the observation sigma-algebra.

The error theorem derives the density process and reciprocal density process as nonnegative mean-one martingales under their respective laws, verifies the first-crossing time is a stopping time, and applies Ville's inequality to the terminal error events. No almost-sure or finite-mean stopping assumption is used. The termination theorem makes the one-observation laws equivalent, assumes both absolute log moments are finite and the two log-likelihood drifts have strict opposite signs, then applies the iid L1 strong law under each law. It proves almost-sure termination only, with no expected-time or optimality claim. The example computes the Bernoulli likelihood ratio, crossings, geometric stopping probability, drift signs, and exact terminal errors (1/10) directly.

## Source coverage

`research/statistical-models-experiments-62-batch-59.coverage.json` records full-text retrievals, locators, item support, and disposition for every harvested result. `source-fetch-check --stamp` and the subsequent check report 3/3 sources fetch-verified and resolved, with no new stamps and no documented drops. There were no retrieval failures, so no `source_resolution` records were needed.

- Robert L. Wolpert, *Introduction to Martingales*, §1.2, PDF pp. 4–5: iid product likelihood ratio, two-boundary rule, likelihood-ratio martingales, and terminal error control; supports the algorithm and error theorem. Wald approximations, expected sample sizes, and optimality discussion are marked out of scope.
- Howard, Ramdas, McAuliffe, and Sekhon, *Time-uniform Chernoff bounds via nonnegative supermartingales*, Lemma 1, PDF p. 15, with complete proof in §6.1, PDF p. 45: time-uniform supermartingale crossing bound; supports the error theorem. Other concentration and continuous-time results are marked out of scope.
- Rick Durrett, *Probability: Theory and Examples*, 5th ed., Theorem 2.1.11, printed p. 48, and Theorem 2.4.1 with proof, printed pp. 76–77: finite independent product law and iid L1 strong law; supports the factorization lemma and termination theorem.

The Bernoulli B-page calculation is proved in full in its item; it has no external source claim and needs no registered finite-smoke check.

## Checks and readiness

- `precheck.mts`: 4/4 proof-bearing items passed.
- `proof-layout.mjs`: 5 items, 22 steps, 0 defects.
- `proof-contract.mjs --strict`: all five items checked, no errors or warnings; contract entries were regenerated from the final item proofs.
- Focused `depcheck`: 5 selected items and both pages checked, 805 dependency-closure items, 0 errors and 0 warnings.
- `rendercheck`: all 5 items and 2 pages passed.
- `content-policy`: five item scope, 0 errors and 0 warnings.
- Focused item dependency levels: passed at `0, 0, 1, 1, 2`. `batch-dependency-levels.mjs check` passed across all 62 batches; batch 59 is level 0 with no prerequisite batch.
- All five `step1-decisions` records are `ready`; a final hash audit found all five current, with exact direct dependency IDs and evidence in each record. These authoring records are not independent approval.

The dispatch's stored batch-level input hash (`be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`) was stale before authoring; the pre-authoring recomputation was `6209943127...` with unchanged batch rows. After adding this inventory, the dependency-level file was refreshed and rechecked; its current input hash is `faec1a3fc9d06abc104f346b25cd79e5dee37bcd620ce4e2783332aff896fd1d`.

## Run-wide blockers for owner reconciliation

Two whole-run checks cannot complete because other assigned pairs still have empty scaffold inventories. `proof-contract-coverage.mjs --run statistical-models-experiments-62` aborts in `frontierGateScope` at page `stratified-sampling-and-allocation`, before it reads any contract entries. `item-dependency-levels.mjs check --run statistical-models-experiments-62` reports empty inventories for pages including `stratified-sampling-and-allocation`, `stratified-sampling-and-allocation-examples`, and other unfilled pages outside batch 59. The batch-59 scoped level calculation, proof contracts, and local readiness records pass. These other-pair inventories were left untouched as required; the owner must reconcile them before run-wide coverage can pass.

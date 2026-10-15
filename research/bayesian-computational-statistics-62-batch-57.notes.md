# Batch 57 authoring notes

Run: `bayesian-computational-statistics-62` · pair: `statistical-and-computational-error-accounting`.

## Plan and inventory

The controlling design is BCS-54 at §225 of `research/plan-bayesian-computational-statistics-track.md`. The canonical `plan-spec.json` row has order 2154, the same A/B page IDs, title, category, and requirements. Its page requirements name BCS-25, BCS-47, BCS-51, and BCS-53 by page ID; the design uses those BCS labels. This is no conflict. The plan-spec row has `items: []`; the batch-57 scaffold manifest supplies the authored item inventory.

The five A-page items are `def-statistical-and-computational-error-ledger` (0), `thm-pathwise-error-ledger-decomposition` (1), `thm-error-ledger-mse-covariance-identity` (0), `thm-independent-replicate-variance-estimator` (0), and `cor-independent-replicate-mean-clt` (0). The six B-page examples have levels 4 (`ex-bootstrap-finite-b-versus-sampling-error`), 2 (`ex-permutation-pvalue-resolution`), 2 (`ex-euler-discretization-bias-and-path-variance`), 1 (`ex-rqmc-replicate-error-estimate`), 2 (`ex-dot-product-roundoff-and-conditioning`), and 1 (`ex-correlated-error-components`).

The current batch-level input recorded for dispatch was `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`: batch 57 at level 1, requiring batches 28, 50, 54, and 56, each at level 0. The five-batch item-level recomputation over 28, 50, 54, 56, and 57 passes for all 49 items; every batch-57 item label matches its computed level. No in-run item cycles or unscoped in-run suppliers were found in that closure.

## Supplier inspection

The current batch-28, -50, -54, and -56 manifests and A-page bodies were inspected. The relevant source items were read from their actual current carriers, not inferred from manifest previews. The exact page/item interfaces and evidence are in `research/bayesian-computational-statistics-62-batch-57.cross-batch-dependencies.json`.

- BCS-25's IID Monte Carlo page and five item bodies are present. Its published central-limit-theorems predecessor and the actual Lindeberg–Levy statement/proof were checked. Batch 57 makes no Monte Carlo consistency or rate claim.
- BCS-47's resampling page and current bootstrap suppliers are present. The size-n algorithm requires a fixed nonempty tuple, a declared unit space, a measurable statistic, and independent uniform index draws with replacement. The conditional-IID theorem proves the empirical product law by finite counting. The example uses two binary observation units and independently enumerates its four outcomes. The batch-50 proof-contract file had no entries yet for the algorithm and conditional-IID theorem when inspected; their actual source bodies and the theorem proof were read, and no upstream acceptance is claimed.
- BCS-51's published finite-group setup, orbit-rank definition, and validity theorem were read. The batch-54 page and current five-item body set were also inspected. The local finite-B calculation claims only a grid and one realized value; it does not import Monte Carlo validity.
- BCS-53's current page, risk-target definition, and fixed-fold covariance proof were inspected. The MSE/covariance result on batch 57 is proved generally and imports no cross-validation-specific claim.
- The batch-56 proof-contract file had no entry for `def-cross-validation-split-and-risk-target` when inspected. That actual definition body and the relevant covariance lemma were read; the batch-57 proofs use no CV-specific conclusion, and no upstream acceptance is claimed.
- The replicate CLT is the only batch-57 result requiring AC. Its statement, dependency, labelled assumption, and exact theorem use are explicit. The pathwise, covariance, finite-replicate, and finite-example arguments are choice-free.

## Source record

The A-page coverage record has two independent book treatments plus full lecture notes. Davison–Hinkley, *Bootstrap Methods and Their Application*, publisher preview (60 pages), Chapter 2 §2.5, printed pp. 31–36, supports the distinction between data/statistical error and conditional simulation error. Owen, *Monte Carlo Book: The Quasi-Monte Carlo Parts* (2019), author PDF (152 pages), Chapter 17 §17.1, §17.4, and end notes, supports independent randomized-rule replicates, the replicate-mean variance estimate, and its finite-replicate limitations. David Bindel's full Cornell CS 6210 lecture text, “Sums, Dots, and Error in Linear Systems,” was inspected through its dot-product and conditioning sections; no first-order approximation from that lecture is used as a theorem.

The live web viewer timed out opening Owen's PDF during this pass. The coverage file already held a successful full-text fetch stamp from 2026-10-15 (4,876,864 bytes; SHA-256 prefix `7d500e1cd6aaa8d0`), and the indexed §17.1 text was inspected. No new retry was made after the existing successful fetch. Coverage records every harvested section as included or out of scope.

The planned Efron–Tibshirani paper was inaccessible through the publisher and repository routes. Its existing `source_resolution` entry in the coverage file records the initial attempt plus five recovery attempts, three searches, the false-match rejection, and complete local alternatives. It remains `dropped` as a source only; the local proofs and numerical checks supply all mathematical coverage. The required `source-fetch-check --stamp` returned 3/4 sources fetch-verified, 4/4 resolved, with one justified documented drop and no new stamps.

## Repairs and scope

The MSE statement previously said the bias and covariance corrections had to vanish separately. That necessity was false: the exact equality condition is that their combined correction is zero. The statement and A-page summary now give that condition; the proof derives it by subtraction. The centered, perfectly correlated example still demonstrates why centering alone does not remove covariance terms.

The error-ledger definition now specifies its probability space, fixed target, finite index, real-random-variable meaning, and measurability of its stage errors. The bootstrap example states its finite measurable unit space, sample statistic, exact observation event, conditional enumeration, and positive probability of the displayed four-replicate outcome. The Euler example defines its one-step method and proves the exact ODE endpoint with the cited derivative and mean-value results. The binary64 example derives the tie-to-even case, checks exact and rounded intermediate values are normal, and evaluates the exact gamma bound. Proof contracts now quote the current supplier bodies and include the finite calculations for these examples.

No published content, other pair's files, shared plan, controller state, or verdict was edited. The A/B pages contain 5 and 6 items respectively, below the 100-item page cap.

## Scoped checks

- `source-fetch-check --stamp` — pass: 3 fetched, 1 justified drop, 4 resolved.
- Five-batch item-level recomputation (batches 28, 50, 54, 56, 57) — pass: 49 items; all batch-57 labels correct.
- Batch-57 manifest/carrier dependency, level, and proof-contract inventory mirror — pass: 11 items and 11 contracts, no mismatches.
- Scoped `depcheck` — pass: 11 selected items, their dependency closures and two selected pages; zero errors or warnings.
- Scoped `content-policy` — pass: 11 items; zero errors or warnings.
- Scoped `rendercheck` — pass: 13 selected item/page files; zero errors or warnings.
- Scoped `precheck` — pass: 10 proof-bearing items, zero failures.
- `proof-layout` on the 11 explicit batch-57 item paths — pass: 42 steps, zero defects.
- `citation-fidelity` — pass: 40 quotes, none missing; no widening candidates.
- `coverage-checklist` — pass: one A page, 11 harvested items, zero errors or warnings.
- Run-wide `item-dependency-levels` remains blocked by empty scaffold inventories in other active batches, not by batch 57. The five-batch closure above is the scoped result.
- Run-wide `batch-dependency-levels check` reports the derived file stale after this manifest edit. The batch-57 graph remains level 1 with suppliers 28, 50, 54, and 56; the run-wide derived input hash must be refreshed by the engine/owner after active manifest writers drain. It was not rewritten here.

An unsupported `--help` invocation on `depcheck` and `rendercheck` triggered read-only repository-wide scans while checking CLI usage. Those unscoped outputs were not used as scoped evidence, and no files were changed by them.

## Readiness

All 11 item-level Step-1 decisions are recorded as `ready` with the exact examined dependency IDs; `step1-decisions check` confirms all 11 batch-57 records are current and closed. The run-wide check remains open with 290 other items missing or stale across the other active batches. These records are authoring readiness only, not independent approval or acceptance.

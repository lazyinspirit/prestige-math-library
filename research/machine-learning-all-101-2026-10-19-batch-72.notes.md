# Batch 72 authoring notes

Run machine-learning-all-101-2026-10-19, pair predictive-calibration-and-uncertainty-under-shift, page order 2831, batch dependency level 4, prerequisite batches 8 and 10. The dispatch scheduling input and current batch-dependency-level artifact input are both 98be114434e93c4ca10d22c7528b3413353279a3d334f08a6e0be5e0e382545e.

## Controlling plan and reconciliation

Read the current owner authoring direction, assigned task, plan section, and plan-spec entries for both pages. The task's line locator L459 is stale: the current ML-64 header is at L477 in research/plan-machine-learning-track.md. The current plan section and plan-spec description agree on the A/B IDs, title, three page prerequisites, five proposed items, empirical scope, conformal caveats, and proof route. There is no mathematical scope conflict to resolve. The controlling 2026-10-18 interface repair is followed: use the published alg-split-conformal-prediction-set and thm-split-conformal-marginal-coverage with the training-sigma-field regular-conditional-exchangeability hypotheses; make no subgroup, feature-conditional, or shifted-law coverage claim.

The supplied batch-72 page scaffold had empty item inventories. It now records the five proposed interfaces plus thm-positive-temperature-scaling-preserves-argmax. This helper is needed because SCHEMA requires algorithmic properties to be separate proved results, and the algorithm uses the theorem through justified_by to discharge softmax and finite-grid well-definedness. The A/B carriers are frontmatter-only with empty bodies; no page summary or page_layout flag was authored.

The live .autopilot status was checked: run running, 1-scaffold at 79/101, no in-flight workers, and a recorded owner-repair/recertification blocker. The observed HEAD from git log -5 is 50139bdcb6 (“Defer compact construction artifact scans until author drain”). No shared plan, engine state, verdict, or other pair file was edited.

## Inventory, dependencies, and levels

The A-page item inventory is authored in ascending item level:

| Item | Level | Direct in-run suppliers |
|---|---:|---|
| alg-split-conformal-set-for-classification | 0 | none |
| def-top-label-calibration | 2 | def-probability-calibration (batch 8, level 1) |
| alg-validation-temperature-scaling | 2 | def-proper-scoring-rule (batch 8, level 0); thm-log-and-brier-strict-propriety (batch 8, level 1) |
| def-binned-expected-calibration-error | 3 | def-top-label-calibration (level 2); def-proper-scoring-rule (batch 8, level 0); thm-log-and-brier-strict-propriety (batch 8, level 1) |
| thm-positive-temperature-scaling-preserves-argmax | 3 | alg-validation-temperature-scaling (level 2) |
| ex-calibration-degradation-under-shift | 4 | def-binned-expected-calibration-error (level 3); thm-positive-temperature-scaling-preserves-argmax (level 3); def-source-target-distributions-and-shift (batch 10, level 2); remaining suppliers are external or lower-level in-run items |

The item levels follow the current in-run graph rule: zero without in-run suppliers, otherwise one plus the maximum supplier level. The full direct dependency arrays and external page context are in research/machine-learning-all-101-2026-10-19-batch-72.pages.json and research/machine-learning-all-101-2026-10-19-batch-72.dependency-inputs.json.

### Supplier inspection and exact interfaces

- def-probability-calibration (batch 8, draft, declared level 1): its complete Definition uses the event identity for top-confidence correctness and fixes smallest-index ties. def-top-label-calibration uses that exact identity. def-proper-scoring-rule (batch 8, draft, level 0) defines finite-label log loss, and the complete proof of thm-log-and-brier-strict-propriety (batch 8, draft, level 1) covers simplex-boundary cases. The temperature algorithm uses validation log loss; the finite example uses strict propriety only to identify which of two candidate forecasts has smaller validation NLL.
- def-source-target-distributions-and-shift (batch 10, draft, declared level 2): its complete Definition supplies source and target joint laws. Covariate shift is a narrower case requiring supplied conditional-label kernels to agree almost everywhere and target-input absolute continuity. The finite clean/corrupted example uses distinct general source/target laws and does not call this covariate shift.
- The actual published conformal page and supplier items were inspected: def-conformal-nonconformity-score-and-rank-pvalue, alg-split-conformal-prediction-set, and thm-split-conformal-marginal-coverage. The theorem requires a regular conditional distribution of the calibration/test tuple given training whose sections are exchangeable, and a fixed jointly measurable score. Its proof derives the upper-rank event and the +infinity sentinel case. The local algorithm is the finite-label specialization; the example checks the trivial-training finite RCD and exchangeability directly. No AC is used.
- Exact editorial defect for owner attention: published items def-conformal-nonconformity-score-and-rank-pvalue and alg-split-conformal-prediction-set contain wikilinks inside their complete Definition sections (including links to statistic, rank, measurability, and randomized-procedure suppliers). Statement-first requires moving those links to immediately following Definition references sections. These published suppliers are outside batch 72's write scope and were left unchanged. Their mathematical score, order-statistic, tie, and coverage interfaces were independently inspected.
- The split theorem's proof suppliers were also inspected: thm-conformal-rank-superuniformity-under-exchangeability, lem-permutation-equivariant-score-map-preserves-exchangeability, lem-regular-conditional-kernels-push-forward-under-measurable-random-maps, def-regular-conditional-distribution, def-exchangeable-random-elements, def-independent-sigma-algebras-and-events, and lem-finite-order-statistic-and-rank-maps-are-measurable. The finite subgroup witness uses only the nonrandomized clause. Its score is measurable on a finite space, its constant kernel satisfies the RCD identity on the trivial sigma-field, and its product mass is invariant under swapping. The randomized algorithm branch uses one independent uniform shared over candidate labels, as in the supplier definitions.
- The positive-temperature theorem uses the actual published exponential positivity and strict-monotonicity results and the natural-log definition. The exact example also uses the exponential addition formula. These proofs are choice-free.

The final ordinary Step-1 scan loaded the current run and listed all seven cross-batch supplier items as closed/current-ready: def-probability-calibration, def-proper-scoring-rule, thm-log-and-brier-strict-propriety, def-source-target-distributions-and-shift, alg-split-conformal-prediction-set, thm-split-conformal-marginal-coverage, and def-conformal-nonconformity-score-and-rank-pvalue. Their bodies and relevant hypotheses were inspected directly. After recording this batch, all six owned items also appear closed. The run-wide scan remains open because 115 other items still need work; its nonzero exit is the global open-gate result, not a manifest-loader failure. No temporary scope, manifest projection, or edits to another pair were used.

## Source decisions

All four source bodies were fetched and inspected; the actual source-fetch check stamped 4/4 sources with no drops or unresolved source objects. Complete locators, search/retrieval history, supported items, and each harvested result's disposition are in research/machine-learning-all-101-2026-10-19-batch-72.coverage.json and research/machine-learning-all-101-2026-10-19-batch-72.source-evidence.json.

- Guo et al., “On Calibration of Modern Neural Networks,” complete 10-page main paper, Sections 1–5, especially Section 2 definitions and ECE/MCE, Section 4.2 multiclass temperature scaling, and Section 5 conclusion. Supports def-top-label-calibration, def-binned-expected-calibration-error, alg-validation-temperature-scaling, and the argmax theorem. The local theorem supplies the complete normalization and ordering proof.
- Ovadia et al., “Can You Trust Your Model's Uncertainty?,” complete 12-page paper, Sections 1–5 and Takeaways. Supports only the reported shift benchmark summary in the example: MNIST rotations/translations; 80 corruption/intensity combinations on CIFAR-10 and ImageNet; the stated 20 Newsgroups class shift; Criteo categorical-token randomization; and prediction-only diagnostics for fully OOD examples. No universal method order or guarantee is imported.
- Lei et al., “Distribution-Free Predictive Inference for Regression,” Section 2.2, Algorithm 2, Theorem 2.2 and Appendix A.1 proof. This is an iid regression treatment; it is recorded as corroborating context, not as a substitute for MSF-37's current conditional theorem.
- Tibshirani, “Conformal Prediction,” complete relevant sections 1.2, 2, and 2.3 of the full 16-page lecture PDF. It supplies an independent lecture-note treatment of exchangeable adjusted ranks, sentinel, split score, randomized ties, and the marginal versus feature-conditional distinction. The first browser PDF parse returned a cache miss; alternatives were searched, then direct full-body retrieval and the required stamp succeeded.

## Mathematical decisions and unresolved obligations

- Top-label calibration is stated through an event-integral identity, avoiding conditioning on confidence values with zero probability.
- Binned ECE/MCE are defined as finite-sample quantities with a fixed Borel partition, explicit occupied-bin handling, and dependence on bins/sample size. They are distinguished from the log and Brier proper scores.
- Temperature scaling is an explicit finite-candidate NLL selection procedure. The finite nonempty candidate set and deterministic smallest-minimizer tie rule make it well-defined even when continuous optimization over all positive temperatures would not attain an infimum. The theorem proves its softmax normalization, finite loss, minimizer existence, and argmax invariance. No calibration guarantee is claimed.
- The conformal subgroup example has exact marginal coverage 91/100 and subgroup coverage 1/10 at nominal 1/2. The shifted clean/corrupted witness has target coverage zero because calibration and test laws are not exchangeable.
- The owner-provided plan's empirical benchmark and unknown-label OOD caveats are retained in the example's Remarks. No TikZ diagram is appropriate for these finite scalar and probability-table computations.
- The six assigned items are complete for authoring and have current non-owner `ready` records with their exact direct dependency IDs. The published conformal suppliers are mathematically and readiness-verified, with their separate statement-first link-placement defects retained for owner repair; no published file was changed.

## Scoped checks

- `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19`: pass, 1247 items across 202 pages, maximum level 15.
- `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19`: owner-level blocker; reports “Stale batch dependency levels … recompute before authoring.” The shared scheduling artifact was left untouched.
- Focused `node tools/depcheck.mjs --items-file /tmp/machine-learning-all-101-2026-10-19-batch-72-items.json --json`: pass, six items and both pages, zero errors and warnings, cycle and dependency-closure checks complete.
- Strict proof-contract check on all six item IDs: pass, zero errors and warnings. `node tools/proof-layout.mjs` on all six authored item files: pass, six items, eight proof steps, zero defects.
- Wrapped precheck (`node tools/tsx-run.mjs tools/precheck.mts`) on the theorem and worked example: pass, two checked, zero failures.
- Focused `rendercheck` on all six items and both pages: pass, eight checked, zero errors and warnings. `content-policy` on the batch manifest: pass, six items in scope, zero errors and warnings.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-72.coverage.json`: pass, four of four sources fetch-verified and resolved, zero documented drops. The earlier `--stamp` run also stamped all four sources.
- Final ordinary `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19`: loads 1247 items; 1132 ready, 115 global work items, overall gate open. All six batch items and all seven cross-batch supplier items are closed/current-ready. Each owned item was recorded `ready` without `--owner` and with its examined direct dependencies.
- The only remaining blockers evidenced here are the shared stale batch-level scheduling artifact and the 115 unrelated global work items. Published supplier statement-first defects are recorded above for owner attention; no out-of-scope content or shared run state was changed.

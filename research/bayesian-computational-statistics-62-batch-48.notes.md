# Bayesian and Computational Statistics — batch 48 notes

Run: `bayesian-computational-statistics-62`  
Role: beta; pair: `data-assimilation-variational-and-ensemble-methods` / `data-assimilation-variational-and-ensemble-methods-examples`  
Assigned batch dependency level: 5; prerequisite batches: 23 and 43  
Scheduling input: `e2c692b59bf73c48030daff126b4e56a33193754ff237750dc936c2a651c5e91`  
Manifest: `research/bayesian-computational-statistics-62-batch-48.pages.json`

## Controlling plan and conflict record

Read the current owner authoring direction, the complete BCS-45 design section in `research/plan-bayesian-computational-statistics-track.md`, `research/plan-spec.json`, the generated batch assignment, and the current dependency-level input before authoring. The controlling BCS-45 design lists five core A-page results: the data-assimilation problem definition; the 3DVAR, 4DVAR, and EnKF algorithms; and the 3DVAR contraction-tracking theorem. The companion design calls for scalar linear-Gaussian 3DVAR, finite-ensemble covariance fluctuation, nonlinear EnKF approximation, and multiple 4DVAR local minima. All five core results and all four examples are retained.

The plan-spec row for this page has `items: []`, while the track design names the five results above. The empty plan-spec array is a scaffold placeholder, not a mathematical scope restriction. Following the controlling track design, the assigned manifest also adds the complete local lemmas and intermediate theorems needed to justify the convergence and Gaussian-update claims. The A page has 13 items and the B page has 4, both below the 100-item cap.

The task and plan-spec give direct page requirements BCS-20 (`numerical-optimization-for-statistical-computation`) and BCS-40 (`kalman-smoothing-and-rts-recursion`). The track design also names BCS-38 state-space laws and BCS-39 Kalman filtering. These are present transitively through BCS-40; the assigned data-assimilation definition also declares its exact BCS-38 supplier items. This preserves all stated prerequisites.

A separate BCS-40 design-index discrepancy remains recorded: the earlier design formula writes the RTS transition as `F_k`, whereas the BCS-39 model convention and current BCS-40 item bodies use `F_{k+1}` for the transition from time `k` to `k+1`. Batch 43 records this as an owner plan correction. Batch 48 does not use or restate the backward-gain formula; it retains only the covariance-inversion domain condition, which the current BCS-40 algorithm states explicitly. No shared plan was edited.

## Inventory, dependencies, and levels

The manifest inventory, direct `deps`, and labels were computed before carrier authoring. Local suppliers were authored before consumers. The item level is zero without an in-run supplier and otherwise one plus the largest in-run supplier level. A focused closure over the 26 actual ancestors of batch 48 (7 pages across batches 6, 23, 41, 42, 43, and 48) has no dependency cycles or level errors; every batch-48 label matches.

| Item | Home | In-run suppliers | Level |
|---|---|---|---:|
| `lem-near-iid-exchangeable-arrays-have-convergent-means` | A | — | 0 |
| `lem-probability-convergence-plus-higher-moments-gives-lp-convergence` | A | — | 0 |
| `lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances` | A | `lem-near-iid-exchangeable-arrays-have-convergent-means` | 1 |
| `def-data-assimilation-problem` | A | BCS-38 filtering-law definition/existence; BCS-40 smoothing-law definition | 2 |
| `alg-ensemble-kalman-filter` | A | `def-data-assimilation-problem` | 3 |
| `alg-four-dimensional-variational-assimilation` | A | `def-data-assimilation-problem` | 3 |
| `alg-three-dimensional-variational-assimilation` | A | `def-data-assimilation-problem` | 3 |
| `lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter` | A | BCS-39 `alg-kalman-filter` and `thm-kalman-filter-is-exact-posterior` | 3 |
| `ex-finite-ensemble-covariance-fluctuation` | B | `alg-ensemble-kalman-filter` | 4 |
| `ex-four-dimensional-variational-objective-has-two-local-minima` | B | `def-data-assimilation-problem`, `alg-four-dimensional-variational-assimilation` | 4 |
| `ex-nonlinear-observation-ensemble-kalman-does-not-recover-posterior` | B | `alg-ensemble-kalman-filter` | 4 |
| `lem-ensemble-kalman-update-preserves-joint-exchangeability` | A | `alg-ensemble-kalman-filter` | 4 |
| `lem-perturbed-observation-ensemble-kalman-moment-bounds` | A | `alg-ensemble-kalman-filter` | 4 |
| `thm-three-dimensional-variational-analysis-is-gaussian-map-update` | A | `alg-three-dimensional-variational-assimilation` | 4 |
| `thm-three-dimensional-variational-assimilation-tracking-under-contraction` | A | `alg-three-dimensional-variational-assimilation` | 4 |
| `ex-linear-gaussian-three-dimensional-variational-analysis` | B | 3DVAR map theorem, `alg-three-dimensional-variational-assimilation` | 5 |
| `thm-perturbed-observation-ensemble-kalman-large-ensemble-limit` | A | local EnKF lemmas and the deterministic-gain reference ensemble | 5 |

## Current supplier-body review

- **BCS-20:** inspected the current numerical-optimization page and actual gradient-descent algorithm. It defines finite iterations and makes no general convergence claim. The local 4DVAR item invokes only that finite procedure and explicitly claims no minimizer guarantee.
- **BCS-40:** the A page and all four actual item bodies are now present: `def-fixed-interval-gaussian-smoothing-law`, `lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data`, `alg-rauch-tung-striebel-smoother`, and `thm-rauch-tung-striebel-fixed-interval-recursion`. The local definition gives the data-indexed RCD target without asserting existence; the full theorem proof supplies existence and identifies the exact RTS moments. Every forecast covariance inverted by the algorithm is required SPD; no pseudoinverse extension is imported. Batch-43 notes and its current Step-1 records report the items ready. This is body/interface inspection, not independent approval.
- **BCS-38:** inspected the actual filtering-law definition and existence theorem. Their standard-Borel and AC hypotheses match the finite-dimensional Borel maps and conditional-kernel wording used here. Null-history version freedom is retained.
- **BCS-39 / BCS-03:** inspected the current Kalman algorithm and full exact-filter theorem. The Kalman statement permits singular PSD state/noise covariances and requires only SPD innovation matrices. The transitive BCS-03 conditional-normal theorem requires the observed block SPD and allows singular state and conditional covariance. Its Step-4.1 product-law/Tonelli labels were corrected in the actual body; the owner citation-resolution record documents the correction and batch-42 notes record the final supplier review. No source excerpt or acceptance is inferred from earlier versions.
- **Cholesky and numerical optimization:** the actual Cholesky theorem's SPD condition is exactly the 3DVAR innovation condition; the local 3DVAR proof separately verifies positive definiteness before its two triangular solves.

Cross-page and transitive evidence is in `research/bayesian-computational-statistics-62-batch-48.cross-batch-dependencies.json`. All supplier pages and items remain drafts unless their actual status says otherwise. Readiness is not independent approval.

## Source reading and dispositions

Two independent complete full-text treatments were read for the A-page scope: Law, Stuart, and Zygalakis, *Data Assimilation: A Mathematical Introduction*, complete 158-page author manuscript, and Evensen, Vossepoel, and van Leeuwen, *Data Assimilation Fundamentals*, complete open-access chapter text in the publisher browser view. Mandel, Cobb, and Beezley, *On the Convergence of the Ensemble Kalman Filter*, complete 8-page paper, supplies a third independent treatment for the EnKF limit route. The exact locators, item mappings, and each harvested-result disposition are in `research/bayesian-computational-statistics-62-batch-48.coverage.json`.

`source-fetch-check --stamp` verified the Law PDF (158 pages) and Mandel PDF (8 pages). The Springer PDF endpoint failed all six allowed automated attempts with a cookie-consent interstitial. After searching, six attempts each on publisher chapter HTML routes 2, 3, 4, 5, 6, and 8 were also blocked or returned only the 303-character consent page; the government-hosted full-book copy failed TLS verification on six attempts; and a SpringerLink mirror book page returned only 540 characters on six attempts. The source-resolution record preserves all 54 route attempts and searches. The publisher chapter text itself was inspected in the browser. The Springer record is dropped only as machine-fetchable evidence; its claims remain covered by the complete local arguments/proofs, the stamped Law and Mandel full texts, and the inspected publisher chapter text. The source-resolution entry records an alternative argument and exact dependency list for each affected item. No mathematical item or claim was dropped.

The final coverage shape has three sources on each page; duplicated Law and Mandel stamps are reused for the B page. Final `source-fetch-check --stamp` reports 4/6 entries fetch-verified and 6/6 resolved, with the two BCS-48 page entries for the inaccessible Springer endpoint resolved by the recorded drops.

## Mathematical scope, axioms, and finite examples

The EnKF item is specifically the perturbed-observation variant with divisor-`N` sample covariance, independent per-member Gaussian observation perturbations, and SPD observation covariance. Its exact large-ensemble conclusion is restricted to linear-Gaussian dynamics/observations and fixed finite horizon. The nonlinear example proves a finite-ensemble counterexample directly; no nonlinear posterior-exactness claim is made. The 4DVAR algorithm defines separate strong- and weak-constraint objectives, runs at most a finite number of gradient steps, and promises no optimization convergence. The 3DVAR objective is a point-estimation objective; its fixed background covariance is not described as analysis uncertainty.

The Axiom of Choice is declared wherever Gaussian laws or conditional Gaussian versions require it. The finite-dimensional matrix algebra, covariance expansions, induction, finite ensemble sums, and geometric error bound add no stronger choice principle. Each Gaussian covariance may be PSD and singular where the relevant item allows it; each inverse is used only under its exact SPD hypothesis.

The examples verify: (i) for two iid `N(0,1)` members, `C_2=(X_1-X_2)^2/4` exceeds `2.1025` on a positive-probability rectangle, while the population variance is `1`; (ii) the scalar strong-constraint 4DVAR objective has two global minimizers at `±1/sqrt(2)`; (iii) the nonlinear `G(x)=x^2`, `y=0` example leaves the finite ensemble `(-1,+1)` at variance `1` while the posterior variance is strictly smaller; and (iv) scalar `B=Gamma=H=1`, `y=2` gives 3DVAR mean `1`, objective `(u-1)^2+1`, and exact Kalman posterior `N(1,1/2)`.

## Scoped checks and handoff

Final scoped checks after the last carrier and contract edits:

- Focused item-dependency closure: 26 items across 7 pages, no cycles or label errors; all 17 batch-48 levels match the manifest (0–5).
- `manifest-deps`: 17 items, every `deps` field explicit, 0 errors.
- Focused `depcheck`: 17 items and both pages; 1,632-item / 292-page prerequisite closure, 0 errors and warnings.
- `content-policy`: 17 items, 0 errors and warnings.
- Phase precheck: 17 files, 13 proof-bearing items checked, 0 failures; the four definitions/algorithms are not applicable.
- Strict proof contracts: 17/17 items, 0 errors and warnings. The contracts have exact supplier excerpts, current phase-step IDs and inputs, all eight boundary dispositions, and the applicable example checks.
- `proof-layout` on all 17 explicitly changed item files: 17 items, 42 steps, 0 defects.
- `rendercheck`: 17 items and both pages (19 files), 0 errors and warnings.
- `coverage-checklist`: 2 pages, 28 harvested results, 0 errors and warnings.
- `source-fetch-check --stamp`: 4/6 coverage entries fetch-verified and 6/6 resolved; the two repeated Springer entries use the validated fetch-drop record. A final check-mode invocation reports the same resolution.
- Step-1 records: all 17 assigned items recorded `ready` with `owner:false` and their declared dependencies. A fresh Step-1 snapshot check reports all 17 batch-48 records hash-current and closed. Across the full run, Step 1 remains open: 766 items, 120 currently ready and 646 items with missing or stale records; none of that other work was changed.

No tests were run. The shared plan, shared batch-dependency input, published content, other pairs, owner verdicts, and `.autopilot` engine state were not edited.

The latest recomputed `.autopilot/bayesian-computational-statistics-62` status remains `running`, with no worker in flight. Its scaffold stage reports 53/62 covered and still lists batch 48 as missing because these draft artifacts have not been materialized by the engine. The stage is held by an unrelated item handoff YAML parse error at line 3 (`title: Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy`) and the owner's repair/recertification blocker in `research/bayesian-computational-statistics-62-step1-blockers.json`. These engine blockers and state were left untouched; this handoff does not advance the engine or constitute independent approval. The latest `git log` has no batch-48 commit; the assigned carriers remain draft workspace changes.

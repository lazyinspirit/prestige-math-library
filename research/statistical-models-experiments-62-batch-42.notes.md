# Batch 42 notes — ARMA roots, spectra and inference

Run `statistical-models-experiments-62`, role `beta`, batch `42`. This file records authoring evidence for the assigned A/B pair only. All authored items and pages remain draft.

## Inventory and dependency order

A page `arma-causality-invertibility-and-spectra` contains seven items; its B page contains three examples. Item levels recomputed from the current run-wide item DAG are:

| Level | Items |
|---:|---|
| 0 | `thm-fixed-order-autoregressive-ols-martingale-limit` |
| 1 | `def-linear-process-and-arma-model` |
| 2 | `lem-absolutely-summable-linear-filters-preserve-weak-stationarity`, `ex-dependent-white-noise-is-not-iid` |
| 3 | `thm-arma-causality-and-invertibility-root-criteria`, `thm-stationary-arma-spectral-density` |
| 4 | `thm-stable-linear-process-sample-mean-clt`, `ex-arma-common-factor-cancellation-and-root-classification`, `ex-unit-root-precludes-nonzero-variance-stationary-ar1` |
| 5 | `cor-stable-ar-long-run-variance-plug-in-consistency` |

The A/B page identities, titles, categories, ordering and twelve page-level `requires` entries match the controlling plan section and `plan-spec.json`. The pair remains within the 100-item A-page limit. The scaffold manifest, carriers, pages, proof contracts and dependency labels are synchronized.

## Plan and historical conflicts

The controlling design section is plan-track lines 260–269. It calls for the B examples common-factor cancellation, unit-root AR(1), and dependent white noise. The older SME-42 dossier's B proposal instead included an MA boundary/root example; the controlling design and owner direction prevail, so the planned three examples were authored.

The owner direction also adds two local inference obligations beyond the dossier's earlier three A claims: the stable linear-process sample-mean CLT with conditional studentization and fixed-order AR OLS/martingale inference, followed by the stable AR long-run variance plug-in corollary. These are authored with the iid, ergodic, filtration, Gram, positive-variance and AC hypotheses stated explicitly. No generic weak-white-noise CLT, data-selected-order guarantee, HAC claim or empirical-adequacy claim is made.

The historical audit described MSF-12 vector Slutsky and vector stochastic-order suppliers as planned. The current published supplier bodies exist and were read; the carriers cite those current items. This records present source availability only and makes no approval claim about the historical audit row or any current supplier.

## Source reading and dispositions

The coverage file contains the complete harvest, locators, URLs and result dispositions. Two independent full lecture-note treatments were used:

- Wang, STAT 720 Time Series Analysis notes: Sections 2.2–2.4, 3.1–3.2, Theorems 3.1–3.2 and 4.4, and Section 6.1, at the PDF page ranges recorded in coverage.
- Meinshausen, ETH Time Series Analysis HS 2022 notes: Sections 2.1–2.6, 2.8.1–2.8.2 and 3.1, at the PDF page ranges recorded in coverage.

`source-fetch-check --stamp` and its later check both passed: both full-text PDFs were fetched and stamped (2/2), with no documented drops or unresolved retrievals. The ETH browser open initially returned an internal error; the official ETH-host search located the PDF, its full text was inspected locally, and the later fetch stamp succeeded. No `source_resolution` drop or owner-escalation record was warranted.

Wang Theorem 2.6 (PDF p. 38) prints MA(q) noninvertibility as equivalent to all roots lying in the closed unit disk. That condition is false when roots are mixed inside and outside; no argument relies on it. The local invertibility proof establishes the correct criterion by comparing absolutely summable white-noise filter coefficients. Wang Theorem 3.2 has the correct invertibility statement, but its converse proof compares coefficients through `q` although the autoregressive polynomial has degree `p`; the local proof compares all coefficients of `phi - Pi theta`. These findings are recorded in the coverage harvest.

Wang Theorem 6.1 is a Yule–Walker asymptotic theorem and is expressly marked out of scope for the OLS result. ETH's least-squares procedure description is recorded as estimator context; it is not used as an asymptotic OLS proof. ETH order-selection and residual-diagnostic claims are out of scope because the OLS theorem is fixed order. The local filter, spectral and inference arguments supply complete proofs for the included claims.

## Supplier interfaces

The batch-42 cross-batch input records the two required page edges and all eight current batch-40/41 item edges. The current batch-40 stationarity and autocovariance definitions were checked for finite-moment, lag, shift and sign conventions. The current batch-41 spectral-measure definition was checked for the circle, angular-Lebesgue normalization and Fourier sign convention. The batch-42 spectral proof constructs its density directly and does not use the Herglotz theorem as an unproved shortcut. Current batch-40/41 bodies are interface-verified draft inputs; this is not acceptance of those suppliers.

The twelve page-level prerequisite IDs and their page summaries were inspected. Direct item dependencies name only the mathematical inputs used in these proofs: moment/covariance and summability bounds; AC, iid CLTs and SLLNs; conditional expectation and past independence; the martingale-difference array CLT and Cramér–Wold; convergence, Slutsky and Portmanteau; Fourier/radon conventions; and finite polynomial factorization. Matrix differentiation and characteristic-function inversion are not used as hidden premises in these claims.

## Scoped checks

- `author-check.mts statistical-models-experiments-62 42`: passed. Precheck passed all nine proof-bearing items; rendercheck passed all 12 changed item/page files; content-policy passed all 10 items with zero errors/warnings; strict proof-contract check covered all 10 items.
- `proof-layout.mjs` on the ten explicit changed item files: 10 items, 48 numbered steps, zero defects.
- `item-dependency-levels.mjs check --run statistical-models-experiments-62`: passed, 511 run items over 124 pages, maximum level 9. The batch-42 labels above match the run-wide DAG.
- A batch-42-local edge reconciliation found 10 declared cross-batch page/item edges and 10 reviewed rows, with no missing or extra rows.
- Scoped `depcheck`: passed for all ten assigned items and their page/prerequisite cycles.
- `coverage-checklist --require-destination`: one A page, 29 harvested results, zero errors and zero warnings.
- `source-fetch-check`: 2/2 sources fetch-verified and resolved.

Two owner-managed/global checks remain blocked and were not repaired here. `batch-dependency-levels.mjs check` reports a stale schedule artifact after manifest edits; its recorded input hash is `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`, while this dispatch named scheduling input `386e4ae06977e377b90dd7236b8bc21e4477e0cf0b4791e5511c16d11a581f99`. The schedule artifact and its recomputation are left to the owner. `frontier-dependency-ledger.mjs refresh` could not build the run-wide aggregate because the existing batch-13 input fails with `invalid review or consumer ownership`; the batch-42 input itself is complete and retained.

## Native run status

The native status command was read from disk after author-check and before local Step 1 records (18:48 UTC). The run was at `1-scaffold`, with no work in flight, held on the owner repair/recertification blocker in `research/statistical-models-experiments-62-step1-blockers.json`; that blocker file names unit 18 as covered but artifact-incomplete and no longer running. Batch 42 was then listed as artifact-missing despite the passing author-check. This batch does not edit engine state or the owner's blocker.

All ten batch-42 Step 1 decision records were written as `ready` with their direct `deps`, `justified_by`, and any `forward_refs` listed. The run-wide `step1-decisions check` reports 498/511 ready and 13 outstanding elsewhere; none of the ten batch-42 items is outstanding. These are author records, not independent approval.

A final native status read after those records still reports `1-scaffold` at 60/62, with units 42 and 46 not covered and artifact missing for 46. Nothing is in flight. The existing owner repair/recertification blocker remains in force, so this local batch handoff does not advance or close the run.

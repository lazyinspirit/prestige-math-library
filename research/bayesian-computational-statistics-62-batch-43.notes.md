# Batch 43 authoring notes — Fixed-interval Gaussian smoothing and RTS recursion

## Controlling direction and plan reconciliation

- The run-local owner direction and current BCS track plan control the pair. The BCS-40 scope is preserved: fixed-interval marginal smoothing laws, the RTS backward recursion, exact Gaussian conditional-law proof, a two-time scalar calculation, and the singular-forecast boundary. Initial, process, measurement, filtered, and smoothed covariances may be PSD and singular. Each forward innovation covariance solved and each one-step forecast covariance inverted must be SPD. No pseudoinverse extension, approximation, numerical-stability, or complexity claim is added.
- The task/plan-spec page row lists kalman-filtering as its direct page prerequisite, while the BCS-40 design explicitly lists both BCS-38 state-space smoothing laws and BCS-39 Kalman filtering, as well as the BCS-03 Gaussian conditioner and the Cholesky theorem. The A-page manifest records both BCS-38 and BCS-39 page prerequisites because the local smoothing-kernel definition directly uses the BCS-38 interface. The BCS-39 page already depends transitively on BCS-38; the BCS-03 conditioner is recorded as a direct item dependency in the backward-kernel lemma. plan-spec.json and the shared plan were left unchanged.
- There is an indexing conflict between the designs. BCS-39 defines X_k = F_k X_{k-1} + q_k, but the BCS-40 formula prints F_k in the gain for the transition from time k to k+1. The actual forward interface makes that transition F_{k+1}; this pair therefore uses C_k = P_{k|k} F_{k+1}^T P_{k+1|k}^{-1} throughout. This is the exact conditional covariance calculation for the declared model, with no claim narrowed. The owner should correct the shared BCS-40 formula.
- The scaffold and plan-spec pair inventories were empty. The assigned inventory is four A-page items and two B-page examples. They are recorded in the batch manifest before item carriers; the A page has four items, below the 100-item cap.

## Item inventory and item dependency levels

| Item | Level | In-run suppliers |
|---|---:|---|
| def-fixed-interval-gaussian-smoothing-law | 1 | def-state-space-filtering-laws (batch 41, level 0) |
| lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data | 3 | BCS-38 smoothing definition (41, 0); BCS-39 filter algorithm (42, 1), independent-noise kernel lemma (42, 0), exact-filter theorem (42, 2); BCS-03 Gaussian conditioner (6, 0) |
| alg-rauch-tung-striebel-smoother | 2 | alg-kalman-filter (42, level 1) |
| thm-rauch-tung-striebel-fixed-interval-recursion | 4 | local definition (1), backward-kernel lemma (3), RTS algorithm (2), and BCS-39 filter algorithm/theorem (1/2) |
| ex-two-time-scalar-rauch-tung-striebel-smoother | 5 | local RTS theorem (4), algorithm (2), and BCS-39 filter algorithm (1) |
| ex-singular-forecast-covariance-outside-rts-domain | 3 | RTS algorithm (2) and BCS-39 filter algorithm (1) |

There are no dependency cycles. The new direct logical edges also make the actual batch-43 prerequisite set include batches 6, 41, and 42; its maximum batch level remains 4. The shared bayesian-computational-statistics-62-batch-dependency-levels.json is owner/engine state and was not edited; its dispatched batch-43 row still reflects the earlier empty item inventories and requires owner recomputation.

## Supplier review and exact interfaces

- def-state-space-filtering-laws (batch 41) was read in full. It defines the full-path smoother as a data-indexed RCD kernel and records null-data version freedom. Its current Step-1 record is hash-current ready; the local definition makes no unsupported existence claim.
- The current alg-kalman-filter, lem-independent-noise-extends-a-conditional-law, lem-one-step-kalman-gaussian-conditioning, and thm-kalman-filter-is-exact-posterior bodies were read in full. The Kalman model permits PSD/singular state and noise covariance blocks; only each innovation matrix solved must be SPD. The independent-noise lemma has a current ready record. The owner’s final focused Kalman resolution refreshed the other supplier records to hash-current ready after confirming actual BCS-38, BCS-39, and BCS-03 bodies and page homes.
- thm-multivariate-normal-conditional-law (batch 6) was read in full. Its observed-block condition is exactly SPD and it allows singular state and conditional covariances. The owner’s citation-only correction at items/thm-multivariate-normal-conditional-law.md:81 now aligns the inline product-law citation with F5 and the Tonelli citation with F6; the statement, proof argument, and dependencies remain unchanged. Its current Step-1 record is hash-current ready.
- The published SME-44 path-law theorem and model definition were read in full, including their finite kernel-product factorization and allowance for singular covariance. The published multivariate-normal, finite independent-Gaussian-stack, measurability-of-kernel-integration, product-measure, pi-lambda, monotone-convergence, independence, and Cholesky supplier statements and proofs were inspected. The Cholesky theorem's SPD hypothesis matches the forecast solve exactly.
- These are author-readiness checks, not independent mathematical approval. No other pair's item or page was edited.

## Source reading and dispositions

- Särkkä, Bayesian Filtering and Smoothing (2013), author-hosted full PDF: Chapter 8 §8.1, Theorem 8.1, equations (8.2)–(8.4), and §8.2, Theorem 8.2, equations (8.5)–(8.15), including the backward Gaussian-conditioning derivation. Its density-based proof supplies the standard RTS formulas; the local proof supplies the kernel/RCD factorization and the PSD conditional-covariance argument.
- Law, Stuart & Zygalakis, Data Assimilation: A Mathematical Introduction (2015), complete author manuscript: Chapter 3 §3.1, Theorem 3.1 and its complete quadratic-form proof. It independently confirms the full-path Gaussian smoothing law in its positive-definite covariance regime. It is not used to justify singular PSD covariances or the RTS backward formula.
- research/bayesian-computational-statistics-62-batch-43.coverage.json records both URLs, locators, each harvested result and disposition, per-item arguments/dependencies, searches, and the source-fetch stamp. Both cited full texts passed source-fetch-check --stamp on the first attempt. The newer 2023 Särkkä PDF was an unselected candidate whose browser open exceeded the platform content-size limit; the plan-specified 2013 full PDF and the independent Law–Stuart–Zygalakis manuscript were retrieved and inspected successfully. No cited source failed, no source was dropped, no recovery retry was needed, and no mathematical coverage was waived.

## Scoped checks and handoff

Final scoped checks after the last item edit:

- Strict proof-contract validation passed for all 6 items, with 0 errors or warnings. Proof precheck passed for all 4 proof-bearing items. Focused rendercheck passed for 8 files; focused dependency check passed for 6 items and 2 pages (closure 1,595 items / 287 pages); content-policy check passed for 6 items. Each reported 0 errors or warnings.
- `node tools/proof-layout.mjs` on the six explicitly assigned item files passed: 6 items, 13 steps, 0 defects.
- Coverage checklist passed with destination required: 1 page, 9 harvested results, 0 errors or warnings. Final `source-fetch-check --stamp` passed 2/2 sources, 0 newly stamped.
- Scoped item dependency graph over actual prerequisite manifests 4, 5, 6, 41, 42, and 43 passed for 58 items and 12 pages with no errors; all six local `dependency_level` labels match their supplier levels. A read-only recomputation of the batch graph gives batch 43 level 4, direct prerequisites 6, 41, and 42, with no cycles. The repository's `batch-dependency-levels.mjs check` reports the shared `bayesian-computational-statistics-62-batch-dependency-levels.json` stale because it predates these item inventories. That shared owner/engine input was not edited; it needs owner recomputation before downstream scheduling.
- All six item Step-1 records were recorded `ready` with `owner:false`. A fresh `loadStep3`/`step1Decision` check reports `closed:true` for each, confirms current hashes, and confirms recorded dependencies exactly match the manifest. This is authoring readiness, not independent review or approval.
- No tests were run; only the required scoped authoring checks were run.

Handoff items for the owner: reconcile the BCS-40 transition-index formula (`F_k` in the design versus `F_{k+1}` required by the BCS-39 model convention), and recompute the shared batch dependency levels after the new inventory. The plan-spec/design prerequisite discrepancy is documented above. The explicit proof-layout scope was the six assigned item files. No files outside this assigned pair and its batch-43 evidence/records were edited.


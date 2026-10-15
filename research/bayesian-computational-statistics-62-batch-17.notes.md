# Batch 17 authoring notes — Bayesian computational statistics

Run: bayesian-computational-statistics-62  
Role: beta, batch 17  
Assigned pair: dirichlet-process-priors-and-finite-partition-updates  
Dispatch-pinned scheduling input: 4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d

## Plan and scope comparison

The controlling BCS-14 design requires a countably additive measurable random probability measure built by a normalized-Gamma Poisson construction; finite-partition posterior disintegration; the predictive formula; explicit null-fiber/version caveats; and no unsupported topology-dependent support or contraction claim. The A page and two B examples retain those claims and limits.

The BCS-14 plan-spec row and the assignment both give the direct page prerequisite conjugate-families-and-posterior-prediction. The design prose also names BCS-01; the current BCS-03 page manifest names the BCS-01 page, so this is transitive rather than a conflicting BCS-14 page edge. Empty item arrays in plan-spec are unauthored inventory placeholders. Two local supplier items were added before their consumers: def-poisson-random-measure supplies the general standard-Borel PRM interface, and lem-dirichlet-aggregation-under-coarsening proves the finite-coordinate coarsening step.

There is an upstream page-metadata discrepancy to reconcile. The current batch-6 manifest lists Bayesian models/priors and posterior propriety as BCS-03 page requirements. The BCS-03 plan-spec row also lists complete sufficiency/exponential families and the central limit page. This is outside batch 17 ownership and is recorded for the owner; no upstream manifest or plan was edited.

## Inventory and dependency order

The A page has seven items and the B page has two examples. Item levels use one plus the maximum level of current-run suppliers, with level zero when there are none:

| Level | Items |
|---:|---|
| 1 | def-poisson-random-measure |
| 3 | def-dirichlet-process |
| 4 | thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure |
| 5 | lem-dirichlet-aggregation-under-coarsening |
| 6 | thm-dirichlet-process-posterior-update |
| 7 | thm-dirichlet-process-polya-urn-predictive-law; rem-dirichlet-process-support-does-not-imply-density-contraction |
| 8 | ex-dirichlet-process-finite-partition-posterior-and-polya-urn; ex-dirichlet-process-alpha-null-observation-fiber |

The direct item dependencies in the manifest and item frontmatter match. The normalized-Gamma theorem explicitly supplies the standard-Borel structure of both coordinate spaces, the Lebesgue density measure for the mark intensity, zero-parameter Gamma cases, and all choice assumptions. Its Gamma-to-Dirichlet step computes the Jacobian and integrates the Gamma total out of the joint density. The posterior proof handles null blocks before invoking the positive-evidence Dirichlet-multinomial update, then extends on both product and evaluation sigma-algebras.

The assignment describes batch 17 as level 3 with batch 6 as its page prerequisite. The shared scheduling file stores the batch-17 row as level 3 with requires [4, 6, 22]; the additional item edges are to batch-4 Bayesian model/posterior interfaces and the batch-22 countable-discrete standard-Borel lemma. The task pins hash 4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d; the shared file stores d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610, while a fresh read-only recomputation from current manifests gives b725d5f046b3c74a61174c3200cb494cd9d22639e3162ed8a11472498b9f2015. The computed batch-17 row remains level 3 with requires [4, 6, 22], but the batch-dependency-levels check reports the shared artifact stale. It is owner/engine-managed and was not changed.

## Cross-batch supplier evidence and Step 1 decisions

The current batch-6 manifest is populated, with source coverage and proof-contract records. The current batch-22 manifest is also populated. Their actual supplier bodies were inspected. At the first Step 1 readiness read, the relevant batch-6 items (def-poisson-law, def-gamma-distribution-shape-rate, lem-gamma-density-normalization, def-dirichlet-density-kernel, def-dirichlet-distribution, thm-dirichlet-density-normalization, thm-dirichlet-multinomial-conjugate-update) and batch-22 item lem-countable-discrete-space-is-standard-borel lacked Step 1 records, so all nine batch-17 records were recorded as escalated with exact hypotheses and dependency IDs.

A later current-disk check found closed Step 1 ready records for all 20 batch-6 A-page items and all six batch-22 A-page items, including every supplier listed above. The batch-4 suppliers def-bayesian-model-as-prior-and-sampling-kernel and def-bayesian-posterior-as-regular-conditional-law also have current closed Step 1 ready records. The cross-batch dependency file now reflects the current verified interfaces and readiness records. None of these records is publication or independent proof acceptance.

The nine batch-17 records remain escalated. Their reason strings were written before the supplier readiness records appeared, and the instructions forbid overwriting an escalation or using --owner. One proof-clarity sentence in the normalized-Gamma derivation was added after recording; its saved Step 1 content hash is therefore stale, while the other eight item bodies were unchanged. The contracts and scoped checks were refreshed afterward. These records require owner resolution against current supplier state. The latest run-wide Step 1 check reports 694 items, 398 ready, 306 work items, and closed false.

## Source reading and retrieval

The source coverage file records complete-text reading, locators, supported items, and a disposition for every harvested result. It uses Last and Penrose’s full book as the primary textbook treatment; Ferguson as an independent primary treatment; and Ghosal–van der Vaart only for the separate finite-dimensional prior-mass discussion.

- Last and Penrose: full 305-page PDF; Chapter 1 Gamma transform and Chapter 3 PRM construction, including the cited named results and proofs. The local proof fixes the Gamma convention at rate 1 even where the source calls its second parameter a scale.
- Ferguson: full 23-page paper; Sections 3–4 and the design-listed Lemma 1, Definition 1, Proposition 2, and Theorem 1 were read in full. Proposition 3’s pointwise topology is out of scope. Section 4’s alternative construction relies on a cited Gamma-process jump theorem, so it is not imported; the local stripwise PRM proof supplies the full construction.
- Ghosal–van der Vaart: full 28-page arXiv paper; Section 7 Lemma 10 and its complete proof. This finite-dimensional prior-mass bound is not used as an existence, posterior, weak-support, or contraction theorem for this pair.

The Project Euclid Ferguson route returned HTML, the UNAM mirror failed TLS verification, and the VU Ghosal–van der Vaart route returned 403; the full WPI Ferguson and arXiv texts were recovered and read. The failed alternate routes and searches remain in coverage history; no selected source was dropped. source-fetch-check --stamp verified all 7 source entries (3 unique URLs), with 7 newly stamped on the first pass and 7/7 still resolved with zero new stamps on the final recheck; there were zero documented drops.

No named finite-smoke registry check applies to this Dirichlet-process pair. The examples’ exact arithmetic is written and checked in their verification steps and proof contracts.

## Scoped checks and remaining blockers

| Check | Result |
|---|---|
| manifest-deps | 9 items; 0 normalized; 0 errors |
| coverage-checklist | 2 pages; 24 harvested results; 0 errors; 0 warnings |
| proof-contract | 9/9 items; 120 exact citations; 33 step derivations; 0 errors; 0 warnings |
| scoped precheck | 6 proof-bearing items; 0 failures; definitions/remark not applicable |
| scoped proof-layout | 9 items; 33 steps; 0 defects |
| scoped rendercheck | 11 files; KaTeX, YAML, delimiter and link checks pass |
| batch-dependency-levels check | stale shared input hash; owner/engine reconciliation required |
| run-wide item-dependency-levels check | no batch-17 item-level mismatch; 8 empty inventories and 11 stale item levels remain in other pages |
| run-wide step1-decisions check | open; batch 17 retains 9 escalated records awaiting owner resolution |

No shared plan, engine state, verdict, published item, or other pair’s files were edited.

## Owner final DP supplier-readiness reconciliation

Native6/22/17 authors completed successfully. Final focused cycle2 research/bayesian-computational-statistics-62-owner-dp-final-resolution.json confirms all17 supplier/consumer body excerpts unchanged, exact9 held consumer contracts/placements present and exact8 supplier readiness records currently closed by root. The earlier missing-readiness premise is resolved. Actual rate/shape, AC/CC, zero/one-cell, standard-Borel and null-data-version hypotheses remain intact. Exact historical notes/cross-rows/readiness archived at research/bayesian-computational-statistics-62-owner-dp-readiness-before/. Owner readiness is current authoring completeness only; upstream canonical/manifest metadata reconciliation and every native review/full gate remain required.

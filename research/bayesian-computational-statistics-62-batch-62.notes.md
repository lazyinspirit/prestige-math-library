# Batch 62 authoring notes — bayesian-computational-statistics-62

## Scope and controlling plan

This batch owns the A/B pair `identifiability-and-approximation-bias-in-computational-inference` / `identifiability-and-approximation-bias-in-computational-inference-examples`, orders 2164–2165 in category `bayesian-computational-statistics`. The run dispatch places batch 62 at dependency level 5 with prerequisite batches 24, 25, 26, 27, 57, and 61. The supplied scheduling-input SHA-256 is
`d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`.

I read the complete BCS-59 design section, the relevant `plan-spec.json` rows, the batch task and owner authoring direction. The assigned task and scaffold `requires` lists agree with the current plan-spec: BCS-21 EM, BCS-22 variational inference, BCS-23 Laplace, BCS-24 ABC, BCS-54 error accounting, and BCS-58 synthetic likelihood. The design additionally lists BCS-20 numerical optimization. The controlling plan-spec and scaffold list BCS-21 only; BCS-21 itself requires BCS-20, so BCS-20 is transitively present. I did not edit the shared plan.

The design names MSF-05 exponential-family sufficiency only for that family-specific scope. The assigned examples do not use an exponential-family claim or depend on MSF-05. The existing BCS-27 B-page item `cex-identifiable-model-with-insufficient-abc-summary` was not reused or referenced: this batch's distinct witness has a nonconstant statistic `S(z,w)=w` whose law is parameter-independent.

## Inventory and dependency levels

The A page has three items and the B page has five examples, below the 100-item page cap.

| Level | Item |
|---|---|
| 0 | `thm-total-variation-bounds-for-expectations` |
| 1 | `def-exact-inferential-target-and-approximation-chain` |
| 2 | `thm-metric-approximation-error-decomposition` |
| 2 | `cex-local-hessian-does-not-capture-multiple-modes` |
| 2 | `cex-mean-field-variational-posterior-misses-correlation` |
| 2 | `cex-synthetic-likelihood-changes-inferential-target` |
| 2 | `cex-identifiable-nonconstant-summary-loses-parameter` |
| 4 | `cex-positive-abc-tolerance-changes-posterior-target` |

The final scoped dependency closure contains 19 current-run items on the relevant BCS-04, 25, 26, 27, 57, 61, and 62 pages. `dependencyLevels` computed every authored level above with zero closure errors and no missing current-run supplier bodies. The positive-tolerance item reaches level 4 through BCS-27's level-3 rejection-target theorem. The batch's level 5 remains the supplied page-level scheduler level; no batch state was edited.

A broader diagnostic that included every item on prerequisite pages (rather than the actual logical dependency closure) exposed 12 existing dependency-level label mismatches. They are outside this batch's item closure and were not edited:

- BCS-24: `alg-expectation-maximization` 2/0, `thm-em-observed-log-likelihood-is-nondecreasing` 3/1, `thm-generalized-em-is-nondecreasing-under-q-ascent` 4/2, `rem-em-ascent-does-not-imply-global-optimality-or-convergence` 5/3, `ex-em-finite-mixture-responsibilities` 3/1, `ex-generalized-em-increases-q-without-maximizing` 3/1, `ex-em-likelihood-has-two-local-maxima` 6/4, `ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse` 6/4, and `ex-em-support-losing-candidate-violates-finite-kl-condition` 3/1.
- BCS-27: `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity` 3/2 and `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope` 4/3.
- BCS-57: `ex-bootstrap-finite-b-versus-sampling-error` 4/2.

Each pair is declared as declared-level/computed-level. These are upstream inventory facts for owner reconciliation, not errors in batch-62's scoped closure.

## Supplier inspection and current interfaces

I inspected the actual item bodies and proofs used as direct or necessary transitive supplier interfaces, including the EM likelihood-ascent proof; the variational ELBO/admissibility definition; the full Laplace unique-interior-maximum theorem; the ABC prior-simulator definition and full IID rejection proof; the scalar error-ledger definition, signed telescope, and MSE/covariance identity; and the ideal synthetic-likelihood definition. Relevant premises are carried locally:

- The exact target supplies a fixed measurable likelihood version and requires finite positive evidence; it infers no common parameter-indexed version.
- The mean-field Gaussian example proves normalization, moments, ELBO admissibility, and the optimizer directly; its exact target is the displayed Gaussian prior with one-point likelihood 1.
- The Laplace witness uses Countable Choice through the Gaussian integral, Lebesgue box/measurability, and change-of-variables suppliers. It does not use full AC.
- The synthetic-likelihood witness explicitly carries AC because the ideal Gaussian synthetic-likelihood definition does.
- Both finite ABC models state their prior, simulator kernel, statistic, observed value, and event. The positive-tolerance rejection interpretation is claimed only for IID proposal-simulator pairs and positive acceptance.

The BCS-24 A page was absent on an earlier disk check during drafting. On the final prerequisite recheck it is present at `library/bayesian-computational-statistics/approximate-bayesian-computation-and-simulation-based-inference.md` and lists the current five A-page items. I read its complete current summary and the actual ABC definition, rejection algorithm, IID rejection theorem, zero-tolerance density-limit theorem, and sufficient-summary theorem/proofs. The formerly absent page is therefore not an open dependency in the final cross-batch record.

Several upstream Step-1 records for current direct item suppliers still contain `decision: ready` but now fail their hash check as stale. I did not treat those JSON labels as current readiness or approval. I inspected the actual current bodies and mathematical inputs directly and recorded that limitation in the item-edge evidence. This batch's readiness records certify only its own current carriers and authoring checks; they do not certify or independently accept upstream items. The stale upstream records include `def-variational-family-and-elbo` (its stored row has owner=true), the relevant BCS-26 Gaussian/Laplace items, the BCS-27 ABC definition/rejection theorem, BCS-57 ledger items, and BCS-61 synthetic likelihood. The BCS-04 Bayesian-kernel definition is also in the transitive closure and its current body was inspected.

## Source reconciliation and dispositions

The coverage file records 16 full-text sources, the exact URLs and locators, 38 harvested results, per-result dispositions, and current retrieval stamps. `source-fetch-check --stamp` returned 16/16 fetch-verified and 16/16 resolved, with no failures, retries, drops, or `source_resolution` entries. The A page has two independent primary treatments for the total-variation expectation bound, including the textbook `Markov Chains and Mixing Times` and the full Gibbs–Su paper. The B-page examples have independent source context; their numerical claims are proved from the finite models in the carriers.

The bibliography reconciles Frazier et al. as the 2019 arXiv preprint `1902.04827` used for definition/context, later published in JASA in 2023. BCS-58's current item metadata cites the later 2023 copy while the controlling BCS-59 design names the earlier preprint. This batch's carrier and coverage cite the 2019 preprint and explicitly exclude asymptotic proofs, adjustment/calibration, and coverage claims. Blum's supplemental Lemma 2 was not read or used and is recorded out-of-scope. No source was dropped; source limitations do not waive mathematical coverage.

## Scoped checks and readiness

The proof-contract file has one contract for each authored item, exact excerpts for every linked fact, the final step claims and inputs, all eight boundary dispositions, and 12 applicable exact finite rational/symbolic checks. The repository has no named finite-smoke case matching these examples; `finite_smoke` is empty and the scoped run returned zero registered outcomes.

The final check results are:

| Check | Result |
|---|---|
| Scoped item dependency closure | 19 current-run items, zero errors, no missing bodies; owned levels 0, 1, 2, 2, 2, 2, 2, 4. |
| `precheck.mts` | 7 proof-bearing items, 7 passes, 0 failures. The checker proposed canonical phase numbering during drafting; those edits were adopted before this final pass. |
| `proof-layout.mjs` | 7 items, 29 steps, 0 defects. |
| `rendercheck.mjs` | 9 changed items/pages, 0 errors and 0 warnings. An initial run identified multiline probability tables; both are now single-line display formulas. |
| `proof-contract.mjs --strict` | 8/8 item contracts checked, 0 errors and 0 warnings. |
| `citation-fidelity.mjs --fail-on-missing-quote` | 81 citations, 0 missing quotes, 0 widening candidates. |
| `coverage-checklist.mjs --require-destination` | 1 A page, 38 harvested results, 0 errors and 0 warnings. |
| `source-fetch-check.mjs` | 16/16 full-text sources fetch-verified, 0 documented drops. |
| Focused `content-policy.mjs` | 8 authored items, 0 errors and 0 warnings. |
| Focused `depcheck.mjs` | 8 authored items and both pages, 0 errors and 0 warnings; the focused dependency closure contains 1,601 repository items and 290 pages. |
| Step-1 current-hash check on assigned items | 8/8 current and closed. |

All eight Step-1 records are `ready` because the assigned carriers, placements, proofs/contracts (where proof-bearing), actual supplier interfaces, and scoped checks are complete. Some upstream supplier Step-1 rows still have stale hashes, as described above; this batch inspected the actual current bodies and proofs and claims no upstream approval. These records are author-completeness only; they are not independent approval or publication evidence.

The batch-62 cross-batch input has 17 page/item rows; a focused comparison against current manifest homes found zero malformed, missing, or wrong-owner rows. The read-only whole-run `frontier-dependency-ledger.collect` could not complete because `bayesian-computational-statistics-62-batch-16.cross-batch-dependencies.json` contains page review rows for `gaussian-process-support-and-concentration`, whose current manifest home is batch 15, not batch 16. The affected rows name suppliers `gaussian-process-priors-and-posterior-laws` and `banach-valued-integration-and-the-radon-nikodym-property`. I did not edit batch 16 or refresh the shared aggregate ledger.


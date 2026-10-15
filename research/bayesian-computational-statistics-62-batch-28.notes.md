# Batch 28 authoring notes — IID Monte Carlo integration and error

## Inventory, dependencies, and levels

The assigned manifest contains seven items. The A page has `def-iid-monte-carlo-estimators` at level 0 and `thm-iid-monte-carlo-mean-moments`, `thm-iid-monte-carlo-mean-consistency`, `thm-iid-monte-carlo-sample-variance-consistency`, and `thm-iid-monte-carlo-central-limit` at level 1. The B page has `ex-gaussian-monte-carlo-integrand` and `ex-finite-mean-infinite-variance-monte-carlo-integrand` at level 2. The levels use only in-batch edges; all other item suppliers are external.

Batch dependency level is 0 with no in-run prerequisite batches, matching `research/bayesian-computational-statistics-62-batch-dependency-levels.json` and input hash `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`. The required published page `central-limit-theorems` and item `thm-lindeberg-levy-iid-central-limit-theorem` were inspected. The actual theorem assumes AC and real IID variables with positive finite variance and proves the standardized-sum limit to $N(0,1)$; the local CLT retains AC and the same moment boundary, then applies continuous mapping to obtain $N(0,\sigma^2)$. This is recorded in `research/bayesian-computational-statistics-62-batch-28.cross-batch-dependencies.json`; no supplier is unresolved.

The sample-variance item cites `thm-change-of-variables-for-expectation` when transferring the finite second moment to the squared outputs. That direct dependency was present in the item carrier and proof contract but missing from the scaffold manifest; the manifest now includes it. The item level remains 1 because this is an external supplier.

## Plan comparison and owner reconciliation

The complete BCS-25 design at `research/plan-bayesian-computational-statistics-track.md` line 138 agrees with the authored mathematical scope: exact mean moments, weak and strong consistency under a finite first absolute moment, sample-variance consistency under a finite second moment, and the Lindeberg–Lévy limit only under positive finite variance. `research/plan-spec.json` agrees on page IDs, companion, order, category, and the `central-limit-theorems` page requirement; its `items` fields are empty scaffold placeholders.

The track's BCS-25 inventory table at line 305 lists three different A-item IDs—`alg-iid-monte-carlo-integration`, `thm-monte-carlo-estimator-obeys-strong-law`, and `thm-monte-carlo-clt-and-standard-error-under-finite-positive-variance`—while the current batch manifest has five more granular A-item IDs listed above. The first planned ID is an `algorithm`, while the current carrier is a `definition`; the remaining current A items are split across four theorems. This is an item-identity, kind, and inventory conflict, not a difference in the approved mathematical claims. Five A items already have ready records, so their completed arguments and records are preserved. No cross-batch manifest has a direct item dependency on these five IDs; current downstream dependencies are page-level: BCS-26 `variance-reduction-and-randomized-integration`, BCS-27 `rejection-sampling`, BCS-28 `importance-sampling-and-weight-diagnostics`, BCS-54 `statistical-and-computational-error-accounting`, and BCS-58 `synthetic-likelihood-and-indirect-inference`. The owner should decide whether to reconcile the plan table or migrate the current inventory, including the `definition`/`algorithm` kind. No shared plan, other pair, or engine state was edited.

## Sources and proof scope

`research/bayesian-computational-statistics-62-batch-28.coverage.json` records two retrieved and inspected independent full-text treatments: Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2 §§2.1–2.3, printed PDF pp. 15–22; and Durrett, *Probability: Theory and Examples*, 5th ed., §§2.2.1–2.2.3, Theorem 2.2.14, Theorem 2.4.1, and Theorem 3.4.1. It maps each harvested result to its item and records included, already-published, and out-of-scope dispositions. Owen cites an external CLT proof; the local CLT uses the complete published Lindeberg–Lévy proof instead. No confidence-interval coverage, floating-point stability, or one-pass update claim is introduced.

The infinite-variance example uses Countable Choice only for the stated CDF-to-law and real-analysis suppliers. It assumes an IID sequence with the constructed law, separately from constructing the one-variable law. The proof and page summary now state the $n\ge2$ domain for the empirical sample standard deviation.

## Scoped changes and handoff

The direct dependency mismatch was corrected in the batch manifest. The example's **Given** now includes the IID sequence, its final verification step cites that hypothesis, and the B-page summary restricts the empirical standard deviation statement to samples of size at least two. Proof-contract step inputs were kept aligned with the revised proof. Preserve the existing five ready item decisions; this note records the remaining item-inventory conflict for owner reconciliation.

## Final scoped checks

- `node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-28.coverage.json --stamp`: pass, 2/2 sources fetch-verified; the existing valid stamps were reused, with no new retrieval attempt.
- `node tools/manifest-deps.mjs research/bayesian-computational-statistics-62-batch-28.pages.json`: pass, 7 items and no missing dependency arrays.
- Scoped `dependencyLevels` computation on the batch-28 manifest: pass, all 7 labels match computed levels 0/1/2; no cycle.
- `node tools/depcheck.mjs --items-file /tmp/bcs62-b28-item-scope.json --quiet`: pass, selected item/page and prerequisite-cycle checks.
- `node tools/tsx-run.mjs tools/author-check.mts bayesian-computational-statistics-62 28`: pass. Current fingerprint `ee5ef6049ed8a222b2168abdcfc2fe80ae329a6bc29cd4426052cd536fbc0ce6`; precheck 6/6 proof-bearing items, renderer 9 files, content policy 7 items, and proof contracts 7/7, all with zero errors or warnings.
- `node tools/proof-layout.mjs items/ex-finite-mean-infinite-variance-monte-carlo-integrand.md`: pass, 1 changed item, 4 steps, 0 defects.

The earlier `research/bayesian-computational-statistics-62-author-check-28.json` was preserved byte-for-byte as `research/bayesian-computational-statistics-62-author-check-28.pre-reconciliation.json` before the updated scoped author check replaced its current pointer. The two example items now have non-owner `ready` records; the five existing A-item ready records were not overwritten. These records report authoring readiness only and do not resolve the plan-table inventory mismatch or constitute independent approval.

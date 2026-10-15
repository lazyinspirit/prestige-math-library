# Batch 29 authoring notes — variance reduction and randomized integration

## Plan comparison

The BCS-26 design in research/plan-bayesian-computational-statistics-track.md, lines 141–142, controls the mathematical scope. The matching plan-spec.json rows at orders 2098 and 2099 agree on the A/B identities, category, companion, order, and the A-page requirement for iid-monte-carlo-integration-and-error. Those plan-spec rows have empty item arrays and do not restate formulas, proof routes, or examples, so they create no mathematical conflict; the track design supplies those details. The run’s MSF/SME supplier-interface register contains no external item used by batch 29.

The preserved scope includes fixed scalar and vector controls, antithetic pair covariance, finite-stratum variance, the proportional-allocation comparison with an ordinary IID mean of the same total size, the same-sample remainder under fixed dimension and finite fourth moments, and conditional unbiasedness for an independent pilot coefficient. No general optimal allocation, same-sample unbiasedness, or dependent-pair CLT is asserted.

## Inventory and dependency levels

The A page has nine items: three definitions, the local opposite-monotonicity covariance lemma, and five results. Four A items have item level 0; the five results have item level 1. The B page has six worked examples at item level 2. The local dependency recomputation compares the source deps arrays with the batch manifest, finds no local cycle, and confirms all 15 source/manifest dependency arrays match. External published suppliers do not raise the item level.

The pair remains batch level 1 with prerequisite batch 28. The current shared batch-dependency-levels.json row still records that relation, but its input hash is stale after batch 29 manifest edits. The owner must refresh the shared run-level record after active authors drain; this batch did not rewrite it.

## Cross-batch prerequisite hold

The exact required page is iid-monte-carlo-integration-and-error. The earlier absence observation was true at initial dispatch but is now stale: the current batch-28 manifest contains five A items, and the actual draft page and item bodies are present. I inspected the current page and these five A items:

- def-iid-monte-carlo-estimators
- thm-iid-monte-carlo-mean-moments
- thm-iid-monte-carlo-mean-consistency
- thm-iid-monte-carlo-sample-variance-consistency
- thm-iid-monte-carlo-central-limit

The page uses the partial-sum sample-mean convention. The current proofs give unbiasedness under a finite first absolute moment, exact variance under a finite second moment, strong and weak consistency under the first-moment hypothesis, sample-variance consistency under the second-moment hypothesis, and the Lindeberg–Lévy limit only for positive finite variance under AC. Batch 29 does not use the BCS-25 CLT conclusion or inherit its AC branch. Batch 29’s claims retain their own first-, second-, and fourth-moment hypotheses and local proofs, so no BCS-25 item-level edge is added; the controlling page-level Requires edge remains. This beta pass did not independently audit the BCS-25 proof suppliers def-partial-sums-and-sample-means, cor-variance-adds-for-pairwise-independent-random-variables, thm-khinchin-weak-law-for-iid-integrable-variables, def-axiom-of-choice, def-standard-normal-and-normal-laws, thm-lindeberg-levy-iid-central-limit-theorem, thm-continuous-mapping-theorem, or their transitive closure. Their roles are the sample-mean convention, the finite-variance mean proof, the first-moment weak law, and the AC/normal-law/IID-CLT/CMT branch. Batch 29 does not logically consume these results; they remain part of the page-level supplier handoff.

The native status snapshot inspected during this turn listed batch 28 as an in-flight author dispatch. This is a current interface inspection, not independent acceptance or a stable post-writer hash. The cross-batch dependency input remains unresolved until the owner rechecks the exact page and item bodies after writers drain. This page-level hold covers all nine A items and all six B examples through their A results. The prior absent-page history and the current observation are both recorded here and in the cross-batch dependency input.

## Mathematical review and repairs

- The control-variate definition states measurable integrable target and controls, a known control mean, and a production-sample-independent fixed coefficient. The theorem proves expectation and variance identities and minimizes the scalar/vector covariance quadratic; for vector controls it assumes positive-definite covariance and states that redundant directions must be removed.
- The antithetic definition has IID product-uniform inputs, a measurable sampler with the target law, and the exact two-evaluation-per-pair estimator. The theorem proves equal pair marginals, independent pairs, exact pair variance, and the necessary-and-sufficient covariance comparison. The local opposite-monotonicity lemma supplies the monotone sufficient condition. The ordered-subset special case now states the coordinate order explicitly.
- The stratified definition now explicitly declares a real measurable integrand and at least one stratum. The theorem derives conditional integrability from the finite second moment, proves independence of stratum averages using the grouped-sigma-algebra supplier, and compares only integer proportional allocation against the ordinary IID mean of the same total size.
- The same-sample result makes the measurable transformations and their IID status explicit, declares the arithmetic-measurability and independence suppliers, states the singular-matrix fallback, proves the two root-n bounds, and gives the finite-dimensional probability bound for their product.
- The independent-pilot result states independence of the pilot sigma-algebra and the production-sample sigma-algebra, proves product integrability from E||beta-hat|| < infinity, and checks the conditional-expectation characterization on every pilot event.
- The six B examples retain their exact finite calculations and counterexample. No registered finite-smoke check applies to this estimator family; the finite arithmetic is worked in the example verifications and remains separately covered by the strict proof contracts.
- The local arguments are choice-free. The only AC premise seen in the required BCS-25 page belongs to its CLT and is not imported into these carriers. The final precheck’s canonical phase repair was applied to the stratification proof, and its proof contract now uses the resulting exact step labels.

## Sources and retrieval

The A-page coverage record retains the source list, locators, every harvested result and disposition, and the original fetch history. I inspected the relevant full-text ranges:

- Art B. Owen, Monte Carlo Theory, Methods and Examples, complete 48-page Chapter 8 PDF, https://artowen.su.domains/mc/Ch-var-basic.pdf. Inspected §§8.2, 8.4, and 8.9, including equations (8.3)–(8.4), (8.8)–(8.9), (8.12)–(8.14), (8.26)–(8.34), and Algorithm 8.3. The local proofs supply the complete arguments and keep the design’s restrictions.
- Paul Glasserman, Monte Carlo Methods in Financial Engineering, complete 614-page book PDF, https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf. Inspected printed pp. 185–186 for fixed-coefficient controls, p. 200 for small-sample dependence/bias and independent-pilot motivation, pp. 205–207 for antithetic pairs and the negative-covariance condition, and pp. 217–219 for proportional stratification and the within/between variance decomposition.
- Jonathan Goodman, Lecture Notes on Monte Carlo Methods, complete 12-page Chapter 3 note, https://math.nyu.edu/faculty/goodman/teaching/MonteCarlo07/notes/VarianceReduction.pdf. Inspected the complete control-variate section, pp. 1–3, including the vector normal equations.

source-fetch-check --stamp passed 3/3 with zero new stamps; the subsequent check also passed 3/3. The current PDF hashes inspected for Owen and Glasserman match the first 16 characters of their bound fetch stamps. No URL failed; no recovery retries, source drops, or source-resolution entries were needed. The coverage checklist reports one A page, 33 harvested results, zero errors and zero warnings.

## Readiness and immutable decisions

All 15 existing Step-1 records are escalated. Their reason records the earlier absent BCS-25 page and their hashes bind the prior carriers. Those escalations were not overwritten. The following current item carriers have since changed and need owner reconciliation before any readiness disposition: def-antithetic-randomized-sampling, thm-antithetic-variance-and-monotone-sufficiency, def-stratified-monte-carlo-estimator, thm-stratified-unbiasedness-variance-and-proportional-allocation, thm-same-sample-control-coefficient-remainder-is-op-one-over-n, and thm-independent-pilot-control-variate-is-conditionally-unbiased. This handoff records no independent acceptance.

## Scoped checks and remaining run-level blockers

- Precheck: all 15 scoped items, 12 proof-bearing, zero failures.
- proof-layout on the six explicitly changed items: 17 numbered steps, zero defects.
- Strict proof-contract check: all 15 items, zero errors and zero warnings.
- Focused depcheck: all 15 items, dependency closure of 657 items and 133 pages, zero errors and zero warnings.
- Rendercheck: 15 items plus two pages, zero errors and zero warnings.
- Content-policy: 15 scoped items, zero errors and zero warnings.
- Manifest-deps: 15 items, zero missing dependency arrays and zero errors.
- Source-fetch-check: 3/3 sources fetch-verified and resolved; zero documented drops.
- Coverage checklist: one A page and 33 harvested results; zero errors and zero warnings.
- Local item-level recomputation: 15 items, exact source/manifest deps, no local cycles, levels 0 for four A items, 1 for five A results, and 2 for six B examples.
- The required run-wide item-dependency-levels check is blocked by 63 empty scaffold inventories in other pairs. The batch-29 local recomputation passes; no other pair files were edited.
- The run-wide batch-dependency-levels check reports its shared input hash stale after the batch-29 manifest changes. Batch 29’s stored row still says level 1 and requires batch 28. The owner must recompute the shared artifact after all current writers drain.
- The 15 Step-1 decisions remain escalated and hash-bound to earlier source. The owner must reconcile them against the current carriers and the stable batch-28 supplier; no decision was overwritten and no --owner option was used.

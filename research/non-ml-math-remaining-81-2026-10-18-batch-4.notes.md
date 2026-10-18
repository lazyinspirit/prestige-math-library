# Batch 4 authoring notes — finite-alphabet entropy and divergence

## Controlling scope and design reconciliation

- The assigned pair has no separate design section: the generated planning record marks batch 4 “none found,” and the task also says no design was found. The current `research/plan-spec.json` IT01 row is controlling. Its summary requires finite probability conventions, nats/bits, finite MI/CMI, log-sum, finite KL equality, entropy chain rules, Fano, and Markov data processing.
- The current plan and batch assignment give the A page exactly one page prerequisite: `probability-spaces-random-variables-and-expectation`. The older draft `research/information-theory-planning/pages.json` also lists `finite-probability-spaces-and-random-variables`. That extra page requirement is stale relative to the current plan and was not added. The finite definitions used in the proof DAG are declared as item dependencies instead.
- The older research proposal `research/information-theory-planning/proposed-items.json` contains the same core scope, including a finite-sum/measurable-KL bridge and the erasure-safe Fano variant. The current plan leaves `items: []`; I retained those sound claims and added local prerequisites omitted from that proposal: `lem-it-finite-marginals-and-conditionals-are-pmfs`, `def-it-finite-conditional-entropy`, `thm-it-finite-conditional-mutual-information-identities-and-equality`, and `thm-it-information-unit-conversion`. The unit conversion is separated from the units definition so its finite-sum proof is explicit. The binary entropy maximum is proved by finite KL comparison to the uniform law, rather than the older derivative suggestion.

## Inventory and dependency order

The assigned A/B pages contain 17 items: 14 on A and 3 worked items on B. The scaffold manifest records each item's direct `deps` and recomputed `dependency_level`. Levels run from 0 through 7; there are no cycles. Batch-level scheduling input records batch 4 at level 0 with no in-run prerequisites.

Level 0 suppliers are the units convention, the finite marginal/conditional-pmf lemma, and the finite-to-measurable KL bridge. Level 1 defines finite conditional entropy, MI and CMI and proves log-sum. Level 2 proves finite KL equality and base conversion. CMI properties, the entropy/MI chain rules, DPI, and the two Fano results then follow at item levels 3–7. B-page items are not used as A-page suppliers.

The page-level dependency registry lists batches 5, 8, 9, and 21 as consumers of batch 4. One current batch-21 draft, `lem-it-finite-classical-kl-nonnegative-equality`, proves a similar finite KL result and is used by that batch's quantum KL theorem. It is outside this pair's write scope and was not used as a supplier; doing so would reverse the declared batch-4-to-batch-21 priority. The owner may reconcile whether batch 21 retains its internal helper or consumes batch 4's finite KL theorem. Batch 5's `def-finite-alphabet-conditional-entropy-given-observation` has a broader standard-Borel observation interface and its own AC/RCD prerequisites; it is not used to prove the finite/finite conditional entropy definition here.

## Prerequisite audit

- The required probability page exists and is published. Its random-element and law definitions, finite-law result, and finite expectation convention were inspected. The published `def-qa-35-finite-probability-entropy-and-stochastic-matrices` supplies finite pmfs, natural-unit entropy, support-aware finite KL, and the zero convention; its finite-probability supplier was also read.
- The log-sum proof uses the published finite Jensen theorem, natural-log order and derivative laws, product differentiation, continuity of products, and the mean value theorem. The equality condition is proved from strict convexity and finite Jensen; it is not inferred from a nonnegativity theorem.
- The finite KL theorem depends on the new log-sum lemma. It does not use the general published KL nonnegativity theorem. The CMI equality theorem applies this finite KL result separately at each positive-mass conditioning value; the Markov DPI uses the same conditioning law throughout.
- The finite-to-measurable KL bridge is the only item carrying an AC assumption. AC is required only by the repository's current RN-based `def-kullback-leibler-divergence` interface. The finite density is explicitly constructed coordinatewise, and the finite support calculation itself is choice-free. All other new finite results declare no choice use.
- No prerequisite supplier is missing from the assigned pair. The conditional-pmf lemma makes the positive-mass conditional laws well-defined before the entropy and CMI definitions use them.

## Sources and retrieval

The A-page source coverage records Gray's complete book and Polyanskiy–Wu's complete author-prepublication book as independent treatments. Their relevant sections were read in full: Gray, Chapter 2 §§2.2–2.5, Chapter 4 §4.2, and Chapter 5 §5.2; Polyanskiy–Wu, Chapter 1 §1.1, Chapter 2 §§2.1 and 2.5, and Chapter 3 §§3.1, 3.4–3.6. Each source coverage row maps its harvested support to item IDs and marks each disposition `included`.

`node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-4.source-coverage.json --stamp` succeeded: 2/2 full-text sources fetch-verified, 0 drops. The source stamps record Gray (1,419,631 bytes, 324 pages, SHA-256 prefix `77f5f22748a080c1`, fetched 2026-10-17T15:15:11.788Z) and Polyanskiy–Wu (5,523,972 bytes, 730 pages, SHA-256 prefix `c76c5cd867818ef6`, fetched 2026-10-17T15:15:17.695Z). No retrieval failure or retry occurred, so no `source_resolution` record was needed.

## Finite checks

The repository's finite-smoke registry has no entropy/KL/Fano check family. The B items therefore carry explicit hand calculations for the binary entropy, independence/deterministic map, asymmetric support, and disjoint-support cases. These calculations check boundary conventions but are not used as proofs of the general theorems.

## Scoped validation and readiness

The final batch-local dependency recomputation checked all 17 items, found no cycles, confirmed that manifest dependencies match item carriers, and found levels 0–7. The full-run `node tools/item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` is currently blocked by unrelated run-wide scaffold state: 105 empty page inventories, three duplicate item placements (`lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound`), and seven stale labels outside batch 4 (`cex-a-c1-map-whose-critical-values-have-positive-measure`, `lem-relative-surface-collars-and-elementary-decomposition`, `def-relative-open-closed-surface-normal-form`, `lem-boundary-relative-two-dimensional-surface-normal-form`, `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras`, `thm-knowledgeable-frobenius-data-classify-open-closed-sewing`, and `ex-group-algebra-is-symmetric-but-not-closed-sector`). These other batches were not edited.

Final scoped checks:

- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-4.proof-contracts.json --strict`: pass, 17/17 items, no errors or warnings.
- `node tools/proof-layout.mjs` on the 17 explicit batch item paths: pass, 40 steps, zero defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 17 explicit item paths: pass, 13 proof-bearing items checked, zero failures; the four definitions have no proof body.
- `node tools/rendercheck.mjs` on the 17 explicit item paths and both A/B pages: pass, 19 files.
- Focused `node tools/depcheck.mjs --items-file /tmp/non-ml-math-batch-4-item-scope.json`: pass for all 17 items and their prerequisite closures.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-4.pages.json`: pass, 17 items, no errors or warnings.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-4.coverage.json --require-destination`: pass, one A page and 34 harvested source results, no errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-4.source-coverage.json`: pass, 2/2 sources fetch-verified, zero drops.

The run-wide proof-contract-coverage command cannot close against the current unfinished frontier; it reports `Empty or invalid frontier page inventory rate-distortion-and-lossy-source-coding`. The strict contract pass above is scoped to this batch. The repository's finite-smoke registry has no entropy/KL/Fano family, so no registered finite smoke check applies; the B-page hand calculations are recorded as manual boundary checks and are not proofs of the general results.

All 17 batch-local items have their required page placement, inspected suppliers, explicit dependency levels, source-backed statements, and completed proof contracts. The batch has 14 A-page items and 3 B-page examples, below the 100-item cap. The required `step1-decisions.mjs record` command was attempted for the first item and failed before any record was written because its run-wide loader reports `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. The same out-of-scope duplicate inventory prevents readiness recording for this batch; no `--owner` override was used. Batch-local items pass their checks, but their individual Step 1 readiness records remain pending owner reconciliation of the duplicate. No review or acceptance is claimed. The owner handoff also includes the possible batch-21 classical-KL duplicate noted above; batch 4 does not rely on or edit either item.

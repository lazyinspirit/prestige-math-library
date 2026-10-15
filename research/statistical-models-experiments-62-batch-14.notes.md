# Batch 14 — Full factorials

Run: statistical-models-experiments-62  
Pair: full-factorial-contrasts-and-interactions / full-factorial-contrasts-and-interactions-examples

## Controlling plan and reconciliation

The controlling contract is SME-14 in research/plan-statistical-models-experiments-track.md at L176, under the run-local direction in research/statistical-models-experiments-62-owner-authoring-direction.md. The pair metadata in research/plan-spec.json agrees with the track and assignment: A/B IDs, order 1944/1945, category, title, and the three page prerequisites all match. Its empty item arrays are unbuilt placeholders.

The older models-02 dossier E04 proposes thm-full-two-level-factorial-contrast-orthogonality and ex-two-factor-interaction-and-scale-dependence, but its scope is narrower: it does not state the equal-replication variance formula or the B-page unbalanced-loss obligation. The pair-audit row’s future proof obligation records the full scope now in SME-14 and agrees with the controlling plan. I kept the planned orthogonality theorem ID, added the needed design definition and variance theorem, and authored both example obligations. No shared plan or audit record was edited.

## Inventory and dependency levels

The complete inventory, exact deps, and levels are in research/statistical-models-experiments-62-batch-14.pages.json. The focused dependency-level recomputation found no cycles or label mismatches.

| Item | Page | Level | In-batch suppliers |
|---|---|---:|---|
| def-two-level-full-factorial-design | A | 0 | none |
| thm-full-two-level-factorial-contrast-orthogonality | A | 1 | design definition |
| thm-full-factorial-estimator-and-effect-variances | A | 2 | design definition; orthogonality theorem |
| ex-unbalanced-full-factorial-loses-orthogonality | B | 2 | design definition; orthogonality theorem |
| ex-two-factor-interaction-and-scale-dependence | B | 3 | design definition; variance theorem |

The supplied batch graph places batch 14 at level 2 because the A page requires SME-12. The task’s scheduling-input hash was a405f7fe8adabe73858aeb407bd96a699d8d9b90b9d67b1856bceef420eb8065; the run-level dependency artifact and engine state were left to the owner. The focused item levels above are computed from the actual item deps, with outside-run suppliers at level 0.

The cross-batch item ledger has eight unique direct external suppliers, all published and verified against their current bodies. Their exact excerpts, homes, uses, and hypothesis checks are in research/statistical-models-experiments-62-batch-14.cross-batch-dependencies.json.

## Supplier and mathematical review

The required batch-12 assignment page and its actual draft bodies were inspected: the finite assignment model, sharp-null definition, finite weighted-tail lemma, weak-null definition, and sharp-null randomization theorem. They distinguish fixed potential outcomes and assignment randomness from any response-error model; sharp-null validity is not weak-null validity and supplies no Gaussian error law. The page remains a declared page prerequisite. No batch-12 result is a logical item supplier of the fixed design-matrix proofs here, so I did not add an artificial item-level edge or claim independent acceptance.

For the linear-algebra prerequisites, I read the real coordinate inner-product proposition and the orthogonality definition and checked their uses against the current published bodies. For the variance proof, I read the real-random-variable and independence definitions, expectation and moment definitions, covariance-bilinearity lemma, and pairwise-independent variance-addition corollary and proof. The direct dependencies are all listed in the A theorem carrier and the cross-batch ledger. Multiplying an error by a design sign preserves its generated sigma-algebra; the variance-addition result is therefore applied to a finite pairwise-independent, square-integrable family.

The local orthogonality proof pairs sign vectors by flipping a coordinate in A△B; it uses no choice axiom. The variance theorem assumes equal replication r≥1, independent errors on one probability space, finite second moments, and common variance. It does not assume Gaussian errors or zero interactions. Error centering is stated only as an additional condition if coefficients are interpreted as mean-response coefficients. Unequal replication is handled separately: the worked five-row design has intercept/first-factor inner product −1, while its coefficient map still sends only the zero vector to zero. The interaction example has raw-scale AB effect 1 and log-scale AB effect 0, with all four responses positive. Neither example asserts a physical mechanism.

Planned downstream consumers SME-15 and SME-16 are recorded by the SME-14 audit evidence. Their files were not edited.

## Source coverage and retrieval history

research/statistical-models-experiments-62-batch-14.coverage.json records locators, supported items, dispositions, retrieval attempts, and stamps for the two independent A-page treatments:

- Oehlert, A First Course in Design and Analysis of Experiments, Chapter 8 §§8.2, 8.5, and 8.6. I inspected the complete relevant sections in the author-hosted 679-page PDF. Sections 8.2 and 8.5–8.6 support factorial contrasts, interactions, fixed-effect coding, balance, and replication. Oehlert’s normal-theory ANOVA assumptions are not imported into the local variance proof.
- NIST/SEMATECH e-Handbook §§5.3.3.3.1 and 5.3.3.3.2. I inspected each complete focused online section. The first states the coded design-matrix orthogonality property, which is proved locally; the second illustrates all combinations, replication, and the separate need to randomize run order.

source-fetch-check --stamp fetched and stamped all 3 selected full-text URLs: Oehlert PDF (679 pages), NIST §5.3.3.3.1 (3,533 extracted text characters), and NIST §5.3.3.3.2 (6,936 extracted text characters). The subsequent check passed 3/3 with no drops or retrieval failures among selected sources. An optional Penn State STAT 503 Lesson 06 candidate at https://online.stat.psu.edu/stat503/Lesson06 returned a browser 502. After that failure I searched alternatives; the official PSU course index and an NPTEL design-of-experiments course archive were found but not fetched or used. No retry was needed for this unused candidate because the two selected sources were available in full. No source was marked dropped, and no source_resolution record was needed for the selected sources.

## Checks and readiness

- Focused item dependency levels: 0, 1, 2, 2, 3; no cycles or label errors.
- precheck.mts: 4 proof-bearing items passed; the definition is not applicable.
- proof-layout.mjs: 5 items, 13 steps, 0 defects.
- proof-contract.mjs --strict: all 5 items checked, 0 errors, 0 warnings.
- Focused depcheck: 5 items and both pages, 428 dependency-closure items, 118 prerequisite pages, 0 errors, 0 warnings.
- rendercheck: 5 items and 2 pages checked, 0 errors, 0 warnings.
- content-policy: 5 scoped items, 0 errors, 0 warnings.
- source-fetch-check: 3/3 sources fetch-verified and resolved.
- step1-decisions: all 5 items are current and ready; records use no owner override. These are authoring-readiness records, not independent approval.

The latest recomputed autopilot status remains running, with 27/62 batches covered, no workers in flight, and stage 1-scaffold held. The owner-repair/recertification blocker in research/statistical-models-experiments-62-step1-blockers.json remains. Status also reports an unrelated invalid prerequisite scan for def-inclusion-covariance-difference because of incomplete source frontmatter. Neither run-level blocker is in batch 14’s ownership, and no engine state or unrelated supplier was edited.

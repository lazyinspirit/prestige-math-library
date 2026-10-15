# Batch 25 authoring notes — Missingness and nonidentification

## Plan and dossier reconciliation

- The controlling design is SME-25 at research/plan-statistical-models-experiments-track.md L209. Its page IDs, order 1966/1967, category, titles, and three page-level prerequisites match the selected plan-spec.json rows. The plan-spec item arrays are empty by design, so there is no pair-specific item-claim conflict to record there.
- The old models-03/dossier.md item outline proposes def-full-observed-and-missing-data, def-mcar-mar-and-mnar, thm-binary-outcome-mnar-nonidentification, and one example. Those first three IDs are retained; two necessary A-page suppliers were added for the likelihood-density argument and MAR likelihood factorization, and the B page has separate mechanism/nonidentification and death examples to cover the controlling design.
- The dossier uses a=P(R=1,Y=1), b=P(R=1,Y=0), interval [a,1-b], and MAR value a/(a+b). The controlling design instead fixes a=P(R=1), b=P(R=1,Y=1), interval [b,b+1-a], and MAR value b/a for a>0. These are equivalent after relabeling the dossier's masses, but the authored carriers use only the controlling plan's convention. The controlling design's general pattern variable R and pattern-specific W_obs(r) also supersede the dossier's one-indicator shorthand.
- Batch 25 has no in-run prerequisite batch: the dependency input records level 0 and requires []. All logical item edges are either to inspected published suppliers or within this A/B pair. The per-item labels are in the page manifest and are independently checked after authoring.

## Supplier inspection and assumptions

- The three required page homes are published: statistical-experiments-models-and-identifiability, dominated-experiments-likelihood-and-sufficiency, and conditional-distributions-and-regular-conditional-probability.
- Inspected the actual experiment/model and estimand definitions, observational equivalence and identifiability definitions; dominated-experiment and likelihood-density definitions; the likelihood change-of-measure theorem; and the kernel, RCD, standard-Borel existence, factor-through, disintegration, and conditional-density interfaces. Their actual hypotheses and proof directions are retained in the item dependencies and proof contracts. In particular, the RCD existence/factor-through theorem uses AC; this batch defines a response mechanism as a supplied conditional kernel, so it does not claim general RCD existence. The likelihood-density supplier uses AC to select pointwise density representatives; the observed-likelihood lemma and its MAR consumer state and use that assumption.
- The likelihood lemma assumes the dominating measure factors over each finite pattern's observed/missing coordinate split. Tonelli supplies measurability, marginalization, and normalization. The MAR result also requires a Cartesian Θ×Ψ parameter space and states the positive-support condition for likelihood-ratio cancellation. No inference about targets depending on ψ is claimed.
- The binary bound treats all joint laws compatible with the fixed observed law. Its four-cell construction includes both endpoints and the cases a=0 and a=1; no division by a zero response rate occurs. The finite-cell proof is choice-free. The death example treats the score as undefined outside the survivor domain and does not encode death as ordinary nonresponse.

## Source reading

Three independent full-text treatments were inspected: Mao's complete Chapter 1 §§1.1–1.7, the National Academies Chapter 4 passages on target definition, mechanism assumptions and MAR likelihood factorization, and Hernán–Robins Chapter 8 §§8.1–8.6 plus §12.6. The source locators, harvested results and dispositions are in statistical-models-experiments-62-batch-25.coverage.json; the direct-text retrieval stamps are added by source-fetch-check --stamp.

The National Academies Chapter 5 sensitivity-analysis material named in the older dossier was not used: SME-25 contains no sensitivity parameter or selection/pattern-mixture model. The related model-specific claims remain outside this pair; no reading or proof evidence for Chapter 5 is claimed.

## Current item inventory and levels

| Item | Level | In-run suppliers |
|---|---:|---|
| def-full-observed-and-missing-data | 0 | none |
| def-mcar-mar-and-mnar | 1 | def-full-observed-and-missing-data |
| lem-observed-data-likelihood-under-response-model | 2 | def-full-observed-and-missing-data, def-mcar-mar-and-mnar |
| thm-binary-outcome-mnar-nonidentification | 2 | def-full-observed-and-missing-data, def-mcar-mar-and-mnar |
| thm-mar-ignorable-likelihood-factorization | 3 | def-mcar-mar-and-mnar, lem-observed-data-likelihood-under-response-model |
| ex-death-is-not-missingness | 1 | def-full-observed-and-missing-data |
| ex-missingness-mechanisms-and-nonidentification | 3 | definitions and binary theorem above |

No supplier body is missing, and no unresolved cross-pair supplier or cycle was found. The declared page prerequisites are published context, not in-run item edges. No significant prerequisite escalation is outstanding.

## Scoped checks and readiness

- The seven-item dependency-level calculation passed with levels 0, 1, 2, 2, 3, 1, and 3 as shown above.
- Scoped normative precheck passed for all five proof-bearing items: 5 checked, 0 failing.
- Explicit changed-item proof-layout passed: 7 items, 13 numbered steps, 0 defects.
- Scoped rendercheck passed for the seven items and two pages: 9 checked, 0 errors, 0 warnings.
- Strict proof-contract validation passed for all seven items; coverage validation passed with 21 harvested results and no errors or warnings.
- Authored-carrier content-policy passed for 7 items; manifest-deps reported 7 items, 0 normalized, 0 errors; focused depcheck passed for the 7 items and 2 pages with 0 errors and 0 warnings.
- source-fetch-check passed for all three full-text sources: 3/3 verified, 0 documented drops.
- Each of the seven Step-1 decisions is recorded as ready and rechecked closed against its current item/dependency hash. The records include the examined dependency arrays; readiness records are authoring evidence, not independent approval.
- The first run-wide batch-dependency write attempt encountered a YAML parse error in an out-of-scope batch-60 item, items/def-gaussian-mixture-confidence-sequence-boundary.md line 19, whose source title contained an unquoted colon. No batch-60 file was edited here. On retry, that title was quoted in the shared source; the run-wide write and subsequent check both passed. The refreshed input hash is 6293640b3a1a04f6d640510a3084af00cb397418c0fb356063d58a2c26b67a64; batch 25 remains dependency level 0 with requires []. No dependency-refresh blocker remains.

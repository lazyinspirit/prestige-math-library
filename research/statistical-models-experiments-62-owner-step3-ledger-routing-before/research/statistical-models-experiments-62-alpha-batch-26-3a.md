# Batch 26 Step 3a adjudication

Run: `statistical-models-experiments-62`; group: `batch-26`; covers: 26.

## Scope and disposition

The scope owes exactly `reader:26:1`, concerning `ex-ipw-instability-and-mnar-sensitivity-curve`. There are no touched, page or refuter obligations. Frozen pre/post fingerprints coincide for all five items, contracts, manifests and both pages: no reader repair was made. Current raw item hashes match the frozen post item hashes. The reader's original reported observation digest remains in the unchanged scope artifact; it is not substituted for the frozen carrier fingerprint.

Verdict: **confirmed_nonfatal**. The example's contract cited nonexistent steps 3.2/3.3 and attributed epsilon endpoints to step 1.2. Its mathematical content is sound. Corrected the zero, one, degenerate and endpoints evidence to the actual steps: epsilon positivity/variance in 1.1 and 2.1; theta laws in 1.2 and 2.2; sensitivity means in 1.3 and 2.3; MAR/MNAR classification in 3.1. Repair confidence: 1. Decision references the closed row `statistical-models-experiments-62-3a-batch-26-reader-1`.

During the required theorem risk review, also confirmed a nonfatal stale endpoints citation to nonexistent step 1.2 in `thm-missing-at-random-weighting-identity`. Rebound it to 1.1 and 2.1; repair confidence: 1. Closed row: `statistical-models-experiments-62-3a-batch-26-weighting-endpoints`. This risk-review finding adds no routed obligation under the frozen scope.

## Independent mathematical review

Reviews and complete contract risk records were finished in the generated order, level 0, level 2, then level 3. All current carrier text, numbered arguments and declared supplier Definition/Statement interfaces were inspected. Reader and refuter reports were treated as evidence.

- `lem-missing-at-random-integrable-factorization`: bounded conditional independence applies to the clipped Borel transform and the binary response. Integrable tails vanish by MCT; |R|<=1, CE contraction and 0<=E[R|G]<=1 make both sides converge in L1. Equality of L1 limits proves the asserted per-transform a.s. identity. Zero transforms and constant responses are covered. AC is declared for CE existence/classes. All ten supplier interfaces were checked.
- `def-pattern-mixture-sensitivity-parameter`: positive response-group masses permit conditioning, standard-Borel X and real Y satisfy AC disintegration in the correct Y-given-X direction, and Q0 absolutely continuous with respect to Q1 transfers kernel-version exceptions. Translation preserves probability sections; finite-kernel integration applies to the product-measurable indicator. Empty events, zero/constant shifts and point masses are valid. The full-distribution shift is stipulated, and finite means separately require integrability. No equal-means characterization of MAR is asserted. All eleven supplier interfaces were checked.
- `thm-missing-at-random-weighting-identity`: measurable null-set version normalizations are legitimate. Bounded dyadic simple approximations give the pullout identity from event integrals. MCT in n and then m applies to nonnegative products; the chosen representatives vanish on the null zero-probability set. The |Y| case establishes absolute integrability before subtracting the finite positive/negative identities. No lower bound on pi or fitted-weight inference is claimed. pi=1, Y=0 and null pi=0 cases are covered; AC is explicit. All fourteen supplier interfaces, including the preceding factorization lemma, were checked.
- `ex-ipw-instability-and-mnar-sensitivity-curve`: all seven steps are sound. The finite atom weights sum to one. Direct summation gives EV=1/2 and variance 1/(2 epsilon)-1/4; epsilon=1 gives 1/4 and epsilon=0 violates positivity on a half-mass stratum. Both theta laws have identical masked observed atoms and different means. The shift family has response-group masses 1/2, constant X satisfies overlap, and its mean is 0.4+0.5 Delta. For 0<Delta<=1/2 the two outcome supports are disjoint, giving nonresponse probabilities 0 and 1 at Y=0 and Y=Delta. At Delta=0 independence gives MAR. Observational equivalence uses equality of sampling laws in both directions; the sensitivity range carries no coverage claim. All eleven supplier interfaces were checked.

The ordinary-risk algorithm was opened as a theorem prerequisite: its mask/placeholder convention, positive supplied probabilities, response branches and unnormalized n-average are well-defined, including no respondents. It owes no decision. No item text, Statement/Definition, manifest, provenance or judge record was changed. No consumer interface repair is needed.

## Sources and dependency maintenance

Sources independently consulted:

- [Chewi Probability Notes](https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf), §9.2 Definition 9.1, printed p.35 (PDF page index 35): bounded conditional-independence premise. The local lemma supplies its integrable extension.
- [NRC Chapter 5](https://www.nationalacademies.org/read/12955/chapter/7), pp.86-89, especially the single-outcome pattern-mixture discussion: model-indexed mean shifts; the stronger distribution translation is expressly a local stipulation. Equal means alone do not characterize distributional MAR.
- [NRC Chapter 4](https://www.nationalacademies.org/read/12955/chapter/6), pp.56-57, univariate IPW: positivity and possible high variance from large weights. Its extra modeling discussion is not needed as a premise of the local theorem.
- [Mao Chapter 1](https://lmaowisc.github.io/missing_data/chapter-1.html), §1.12 lines 304-325: weighting through conditional expectation with positive correctly specified selection probabilities. The local proof additionally establishes absolute integrability.
- [Hernán–Robins author PDF](https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf), §8.5 pp.117-120 and §12.6 pp.172-173 (PDF indices 125-128 and 180-181), downloaded and extracted with PyMuPDF: selection-probability weighting and positivity, and the separate joint assumptions for combined treatment/censoring weighting. The local claims remain single-response population identities.

Updated the owned item-consumer rows in `research/statistical-models-experiments-62-batch-26.cross-batch-dependencies.json` after independently checking the current batch-25 partition/taxonomy Definitions. Required supplier uses match; statuses remain verified. Preserved the unrouted page and algorithm rows and refreshed the unified ledger through its tool. No defective published supplier was identified; published content and its ledger were left untouched. No proposed withdrawal or outside repair is required.

## Local checks and handoff

- Initial risk report: 0 errors, five items routed; one ORDINARY, one HIGH and three CRITICAL.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-26.proof-contracts.json --strict`: 0 errors, 0 warnings, 5/5 checked.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-26.proof-contracts.json --require-reviewed`: 0 errors; all four required risk reviews complete.
- `node tools/frontier-dependency-ledger.mjs refresh --run statistical-models-experiments-62`: refreshed and deduplicated.
- Defect-ledger append: two valid closed nonfatal rows appended and generated view refreshed. The first attempted append rejected a string evidence field before any write; corrected to path-bearing evidence objects and reran successfully. No mechanical-failure defect row was created.
- Current item raw hashes equal the frozen post snapshot. No item edits, so item reflow, precheck and final proof-layout are not applicable.

The task-named report and decisions file are complete, with exactly one decision. No mathematical blocker or escalation remains. No judging, stamping, certification, agent dispatch or gate battery was initiated; those operations remain with the engine.

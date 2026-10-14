# Batch 5 authoring notes — MSF-05

## Design control and conflicts

The owner direction selects `research/plan-mathematical-statistics-track.md` as the controlling design. Its MSF-05 row is the complete A/B design. The MSF-05 row in `research/plan-statistical-models-experiments-track.md` is a downstream interface summary: it exports the exponential-family definition and full-rank sufficiency result, but does not replace the controlling inventory. `research/plan-spec.json` agrees on the pair IDs, titles, category, orders 1852–1853, and the nine A-page prerequisites. Its empty item arrays are pre-authoring placeholders, not an item-scope conflict.

The controlling plan's common-reference criterion says that a reference probability `P0` dominates every model law but does not state that `P0` is a member of the model. The equivalence with sufficiency is false for an arbitrary external dominator. The A item therefore states the in-model reference hypothesis explicitly. The B counterexample uses `X={(0,0),(0,1),(1,0),(1,1)}`, `T(t,u)=t`, model laws supported on `u=0`, and uniform external `R`; `T` is sufficient, while `dPθ/dR` differs at points in the same T-fiber. The corrected statement is fully proved and its finite boundary example is included. The controlling design's intended meaning of “reference” should be reconciled by the owner; this batch does not claim approval of that interpretation.

The competing exposition on likelihood-ratio factorization sometimes writes a general reference without requiring it to share the model's conditional law. That version is not used. The countable-mixture theorem instead augments the family by its mixture `Q`, so `Q` is an in-model reference and inherits the common kernel when sufficiency holds.

## Inventory, dependencies, and levels

The batch manifests contain 17 A items and six B examples/counterexamples. The additional B counterexample is justified by the reference-law ambiguity above. The pair is batch dependency level 2 with prerequisite batches 2 and 4. The dispatch supplied scheduling input hash `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`; the on-disk shared batch-level artifact currently records input hash `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80` and still lists batch 5 at level 2 with prerequisites 2 and 4. The shared scheduling artifact was not edited.

Item levels were recomputed from the logical dependency graph across the current run manifests, including actual batch-2 and batch-4 suppliers. The assigned levels are:

| Level | Items |
|---:|---|
| 0 | `lem-uniqueness-of-a-multivariate-exponential-transform`, `ex-countable-mixture-dominates-bernoulli-scale-family` |
| 3 | `def-likelihood-ratio-equivalence-on-common-discrete-support`, `thm-countable-mixture-dominates-sigmafinite-dominated-family` |
| 4 | `def-sufficient-statistic`, `def-complete-statistic`, `def-ancillary-statistic`, `def-exponential-family` |
| 5 | `def-minimal-sufficient-sigma-field`, `thm-countable-factorization-criterion-for-sufficiency`, `thm-common-reference-factorization-criterion`, `thm-completeness-of-full-exponential-family`, `thm-basu-independence` |
| 6 | `def-minimal-sufficient-statistic`, `thm-full-rank-exponential-family-sufficiency`, `thm-standard-borel-dominated-factorization-criterion`, `cex-curved-normal-family-statistic-incomplete` |
| 7 | `thm-discrete-likelihood-ratio-classes-are-minimal-sufficient`, `thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient`, `ex-normal-sample-mean-residual-independent-by-basu` |
| 8 | `ex-bernoulli-count-is-minimal-sufficient`, `ex-countable-likelihood-ratio-vector-on-point-mass-model` |

The A page has 17 items and the B page has six, both below the 100-item cap. `dependency_level` and direct `deps` are mirrored between carriers and the batch manifest. Suppliers are listed before their consumers in level order.

## Cross-batch suppliers checked

The two current run page edges are from the A page to `estimators-and-randomized-procedures` (batch 2) and `dominated-experiments-likelihood-and-sufficiency` (batch 4). The 16 direct item edges into batches 2 and 4 are recorded in `research/mathematical-statistics-foundations-37-batch-5.cross-batch-dependencies.json`.

I read the actual `def-statistic-and-estimator` body. It defines statistics as measurable maps from the experiment data space and does not add parameter measurability. I also read the current batch-4 bodies for `def-dominated-statistical-experiment`, `def-likelihood-density`, and `thm-likelihood-ratio-change-of-measure`. Their hypotheses and almost-everywhere scope match the uses here. The cross-batch records document body/interface checks only; they do not certify supplier approval.

## Mathematical scope, definitions, and axiom uses

- Sufficiency is defined by one shared conditional law of the data given a standard-Borel statistic. This avoids choosing unrelated RCD versions and does not equip the parameter set with a sigma-algebra.
- The minimal-sufficiency sigma-field is defined modulo the family-null ideal. A statistic is minimal when its generated sigma-field is minimal. The countable-mixture vector theorem proves the stronger factor map through any other standard-Borel sufficient statistic, almost surely under the positive mixture.
- The countable factorization theorem is stated pointwise on a countable sample space. Its forward proof defines the zero-fiber convention using the supremum of fiber masses; its reverse proof normalizes each active fiber and supplies deterministic enumerated fillers on inactive/off-image fibers.
- Discrete likelihood-ratio classes are defined only on a common support on which every point has positive probability. The proof verifies sufficiency by a parameter-free conditional law on each class and minimality by the common-kernel ratios on any sufficient statistic's positive-mass fibers.
- The common-reference criterion explicitly fixes `P0=Pθ0`. The B counterexample records why an arbitrary external reference is insufficient.
- The countable-mixture domination proof constructs a finite measure equivalent to the sigma-finite dominator, maximizes the measure of finite unions of density supports, and forms a positive countable mixture. The general factorization theorem uses that mixture and the in-model reference criterion; it makes no product-density claim for singular graph laws and allows parameter-specific exceptional null sets.
- Exponential-family normalization is `A(η)=log ∫h exp(η·T)dμ`. Here “full-rank” requires an open subset of the model's natural parameter set and no nontrivial affine constraint on `T` on `{h>0}`. Some sources use “regular” for the open-set condition; the local definition controls. The completeness proof uses only the open-set condition.
- The multivariate transform lemma establishes separate holomorphy on a product strip, iterates the one-variable identity theorem, and applies Fourier uniqueness after the explicit Fourier-variable rescaling. Completeness then uses a finite signed pushforward measure and the open parameter cube to check its exponential moment.
- Basu's proof conditions ancillary events through the shared kernel, subtracts their parameter-free probability, applies completeness, and factors joint probabilities.

Axiom use is stated at the items that need it. AC supplies RN versions and the countable support-maximization selections in the countable-mixture argument, the common-reference criterion, the likelihood-ratio vector, and the transform/Fourier uniqueness branch. The normal-law examples inherit the library's AC-qualified normal-law definition. The countable discrete factorization proof uses fixed enumerations and deterministic fillers; it introduces no AC branch. The finite endpoint-mixture example is proved directly and is choice-free.

## Source reading and retrieval history

Seven independent full-text treatments support the A page, including full lecture notes; the B page has four source treatments. Locators, all harvested section results, and dispositions are itemized in `research/mathematical-statistics-foundations-37-batch-5.coverage.json`. `source-fetch-check --stamp` later verified 11/11 coverage source entries; each fetch stamp and recovery attempt is retained in that coverage file.

The local proofs do not rely on citations as substitutes for missing arguments. In particular, Martin's uniform-support typo was not copied; Tebbs's density formula for general lower-dimensional statistics was not used; Fithian's general-sample-space heading does not provide a proof; and Fithian's MGF proof sketch is replaced by the complete multivariate transform argument here. Geyer's “regular/full” terminology differs from the local convention and is recorded above.

An optional original Halmos–Savage paper candidate was not needed for the final harvest. Its SciSpace copy returned HTTP 403, and a Project Euclid PDF URL returned a short Incapsula bot-wall HTML response. A search for an accessible full proof found Jiahao Tian's full chapter; I inspected its countable-domination lemma and complete §10 proof, and also supplied the independent support-maximization proof locally. The inaccessible candidate was not retained as a source or used to waive mathematical coverage; no drop or source waiver is claimed.

## Scoped validation and readiness

The final scoped gates passed:

| Check | Result |
|---|---|
| Scoped item dependency closure (`depcheck --items-file`) | 23 assigned items; selected prerequisite checks cover 1,370 items and 168 pages; 0 errors and 0 warnings |
| Focused item dependency levels | 33-item in-run dependency closure; all 23 assigned labels match; acyclic; maximum assigned level 8 |
| `proof-layout` on the 23 explicitly changed items | 50 proof steps, 0 defects |
| Strict proof contracts | 23/23 items checked, 0 errors, 0 warnings |
| Scoped content policy | 23 items, 0 errors, 0 warnings |
| Coverage checklist | 2 pages, 34 harvested results, 0 errors, 0 warnings |
| `source-fetch-check` | 11/11 full-text source entries fetch-verified; 0 drops |
| Batch-5 cross-batch input | 18/18 current page/item edges represented and marked verified |

The latest run-wide `item-dependency-levels.mjs check` exits 1 on 18 stale labels in other batches; no batch-5 item appears in the error list. The exact current mismatches are: `thm-z-estimator-consistency` 6→5; `def-dqm-submodel-through-a-law` 0→3; `thm-dqm-score-mean-zero` 1→4; `def-tangent-set` 2→5; `def-tangent-space` 3→6; `thm-tangent-space-is-closed-linear-subspace` 4→7; `def-nuisance-tangent-space` 5→8; `def-nuisance-tangent-orthogonal-complement` 6→9; `ex-bounded-scores-generate-unrestricted-tangent-space` 4→7; `ex-regular-bernoulli-submodel-dqm-score` 2→5; `ex-boundary-score-cone-and-linear-tangent-space` 4→7; `def-huber-covariance-model` 1→2; `lem-huber-covariance-mixture-is-a-probability-measure` 2→3; `lem-gaussian-kullback-leibler-covariance-formula` 0→4; `lem-clean-dense-gaussian-covariance-minimax-lower-bound` 2→6; `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound` 3→6; `lem-huber-covariance-contamination-modulus-lower-bound` 3→5; and `ex-dense-huber-covariance-model` 2→3. The focused 33-item dependency closure check passes: all 23 batch-5 labels match actual in-run supplier levels, it is acyclic, and the maximum assigned level is 8.

A read-only whole-run batch-level recomputation could not finish because its loader encountered a YAML parse error in unrelated batch-23 supplier metadata at the citation title “Jan van Neerven, γ-Radonifying operators: A Survey, §8, p. 32.” The dispatch input hash is `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`; the on-disk shared scheduling artifact currently records `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`, while its batch-5 row still says level 2 with prerequisites 2 and 4. The discrepancy is reported for owner reconciliation; neither shared scheduling file was edited.

Step-1 records are hash-valid for all 23 assigned items: 22 are `ready`; `thm-common-reference-factorization-criterion` is `escalated` for the owner’s interpretation of whether the plan intended an in-model reference law. Its current carrier and contract fully prove the in-model version. The finite B counterexample proves the arbitrary-external-reference extension false. After the carrier’s final in-model-reference clarification, the four dependent ready records were refreshed with `step1-decisions.mjs record`; their supplier body and current contract excerpts were re-read, and the affected five contracts, the changed proof layout, and scoped content policy were rerun successfully. The focused current-hash audit reports 22 ready, one escalated, and zero stale records. No `--owner` flag was used and no previous escalation was overwritten.

The full-run `step1-decisions.mjs check` remains open at 228/468 ready, with 240 unresolved item records: one is this batch’s explicit owner escalation and 239 are in other batches. Those records are outside this pair and were not changed.

Completion records document authoring readiness; they do not constitute independent mathematical approval. The earlier exploratory `--help` invocation on depcheck/content-policy/coverage unexpectedly triggered a whole-corpus depcheck; that output was discarded and is not part of the scoped results above.

# Batch 8 authoring notes — MSF-08

## Design control and conflicts

The run-local direction at
research/mathematical-statistics-foundations-37-owner-authoring-direction.md
names research/plan-mathematical-statistics-track.md as the controlling
design. Its complete MSF-08 row in “Pair inventory and dependency-ordered
designs” controls the reusable A inventory, simple-hypothesis scope, common
dominator, randomized boundary, singular-alternative treatment, and B targets.

research/plan-statistical-models-experiments-track.md is a downstream
Category-2 interface plan. Its “Planned Category-1 interfaces” section lists
def-test-size-and-power, thm-p-value-superuniformity, and
thm-neyman-pearson-lemma; that interface summary is not a replacement for
the controlling row's likelihood-ratio-test definition or its full proof
obligations. The plan row also does not name the local prerequisites added
below. The owner direction and controlling plan therefore resolve this
difference in favor of the complete MSF-08 row.

research/plan-spec.json agrees with the pair IDs, titles, category, orders
1858–1859, and A/B page requirements in the batch manifest. Its empty
items arrays are the pre-authoring projection and do not conflict with the
design inventory. No shared plan, canonical plan, published item, run state,
or owner verdict was edited. The required Step 1 scaffold-readiness records
were recorded separately; they are not owner approvals.

## Inventory, dependencies, and item levels

The pair-level scheduling input supplied to this dispatch assigns batch 8 dependency level 3 with prerequisite batches 2, 3, and 4. The batch manifest contains eleven A items and three B items, below the 100-item page cap. Local A suppliers prove the threshold existence, binary-kernel construction, zero-one risk identity, common-support ratio measurability, signed density-integration formula, and measurable exact-size test construction. The distinct def-p-value definition records that a measurable [0,1]-valued statistic is not automatically valid.

| Item | Level | In-run suppliers |
|---|---:|---|
| lem-integrable-signed-function-integration-against-density | 0 | none |
| lem-likelihood-ratio-threshold-exists | 0 | none |
| lem-common-support-likelihood-ratio-is-measurable | 3 | def-likelihood-density (batch 4, level 2) |
| def-p-value | 4 | def-statistical-experiment (batch 1, level 0), def-statistic-and-estimator (batch 2, level 3) |
| lem-measurable-rejection-function-defines-randomized-test | 4 | def-statistical-experiment (batch 1, level 0), def-randomized-procedure-as-a-markov-kernel (batch 2, level 1), def-randomized-test (batch 2, level 3) |
| lem-test-zero-one-loss-risk-identities | 4 | def-statistical-experiment (batch 1, level 0), def-randomized-test (batch 2, level 3), def-loss-function-and-risk (batch 3, level 3) |
| def-test-size-and-power | 5 | lem-test-zero-one-loss-risk-identities (4), def-randomized-test (batch 2, level 3) |
| def-likelihood-ratio-test-with-boundary-randomization | 6 | def-test-size-and-power (5), lem-common-support-likelihood-ratio-is-measurable (3) |
| thm-p-value-superuniformity | 6 | def-test-size-and-power (5), def-p-value (4), lem-measurable-rejection-function-defines-randomized-test (4) |
| cex-uniform-null-p-value-is-anti-conservative | 6 | def-p-value (4), def-test-size-and-power (5), def-statistical-experiment (batch 1, level 0) |
| lem-likelihood-ratio-test-is-measurable-and-exact-size | 7 | def-likelihood-ratio-test-with-boundary-randomization (6) |
| thm-neyman-pearson-lemma | 8 | lem-likelihood-ratio-test-is-measurable-and-exact-size (7), def-test-size-and-power (5), def-likelihood-ratio-test-with-boundary-randomization (6) |
| ex-discrete-neyman-pearson-randomized-boundary | 9 | thm-neyman-pearson-lemma (8), likelihood-ratio and test-size items (6/5) |
| ex-continuous-neyman-pearson-likelihood-ratio-test | 9 | thm-neyman-pearson-lemma (8), likelihood-ratio and test-size items (6/5), def-statistical-experiment (batch 1, level 0) |

The actual MSF-03 manifest supplies def-loss-function-and-risk at level 3. Its body was inspected, and the local zero-one risk lemma proves the binary testing specialization from the stated kernel-risk formula. The page-level graph remains acyclic with prerequisite batches 2, 3, and 4. Because the manifest changed the prior scheduling input, the owner should refresh the shared run-level dependency artifact before another dispatch.

## Cross-pair supplier inspection

The actual MSF-01 def-statistical-experiment body was read. It defines one data measurable space and the pointwise family of probability laws; it adds no parameter sigma-algebra or parameter-measurability assumption.

The actual MSF-02 bodies for def-statistic-and-estimator, def-randomized-procedure-as-a-markov-kernel, def-randomized-test, and lem-procedure-action-law-is-measurable were read, including the action-law proof. A randomized test has a measurable rejection probability φ(x)=K(x,{1}) with action 1 meaning reject. The supplied definition does not state the converse construction from an arbitrary measurable φ:X→[0,1]; the local binary-kernel lemma proves it by assigning masses φ(x) and 1−φ(x) to the two actions. The statistic definition uses a measurable target and does not make the target estimand measurable in the parameter.

The actual MSF-03 def-loss-function-and-risk body was read. Its exact hypotheses are a nonnegative loss with a measurable action section for each fixed parameter, a probability kernel decision rule, and risk Rθ(δ)=∫Pθ(dx)∫L(θ,a)δ(x,da). The local zero-one risk lemma verifies the binary action sections and evaluates their finite kernel integrals; it does not add measurability on Θ.

The actual MSF-04 bodies for def-dominated-statistical-experiment, def-likelihood-density, and def-likelihood-ratio-as-rn-derivative were read. The domination item uses one supplied sigma-finite measure on the data space. The density item selects finite nonnegative representatives under AC. The nonnegative RN representative lemma and its RN theorem supplier were also inspected. The RN-derivative item defines only dP1,ac/dP0 and says it is a full likelihood ratio only when P1≪P0; MSF-08 therefore does not use that item for the general Neyman–Pearson result. It instead compares the two common-dominator densities and handles {p0=0<p1} separately.

The batch-8 cross-batch dependency input records 28 verified page/item edges after checking the actual supplier bodies and hypotheses. “Verified” records this dependency-content check only; it is not owner acceptance. No cross-pair supplier body remains unavailable at handoff.

## Source reading and dispositions

The A-page ledger now records seven source treatments. The four primary MSF-08 treatments are Oxford and MIT full lecture notes plus the USC Lecture 10 and Lecture 11 materials. Martin, Hoff, and Folland provide the additional decision-risk and integral facts used by local suppliers. The Oxford and MIT full lecture units satisfy the full-notes requirement; the complete relevant text was also inspected for the other sources.

- George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §§13.1.1–13.1.2, PDF pp. 76–77, https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf. The full pages supply simple/composite and test-size conventions and state Theorem 13.2 for a simple pair at exact size; they do not give the randomized-boundary or singular-alternative proof. Adjacent UMP/MLR definitions are out of scope.
- Anna Mikusheva, MIT 14.381 Lecture 9, Theorem 1 and proof, physical PDF pp. 3–4 / printed pp. 2–3, https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/0427ff2a36e01927fa4b692a6d60a81a_MIT14_381F18_lec9.pdf. The density sign-product proof supports the NP comparison but does not cover randomized boundary or singular alternative mass. The adjacent lower-tail MLR Theorem 3 has a sign defect and is not imported.
- Karl B. Gregory, USC STAT 713 Lecture 10, physical PDF pp. 3–8 and 18–20, https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_10_slides_annotated.pdf. The slides define tests, power, size, and level and give the superuniform-to-level implication; its proof is assigned as an exercise, supplied locally here. The exact-Uniform claim for continuous statistics is out of scope.
- Karl B. Gregory, USC STAT 713 Lecture 11, physical PDF pp. 7–9, https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf. The theorem and handwritten sign-comparison proof agree with the local ratio direction; this treatment does not include the common-dominator singular-mass extension.
- Ryan Martin, Lecture Notes on Advanced Statistical Theory, Chapter 5 §5.1, printed PDF pp. 100–102, https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf. Example 5.1 gives binary testing zero-one loss; Definition 5.1 defines randomized decisions and risk. The local finite-action evaluation is supplied in full.
- Peter Hoff, Statistical Decision Problems, §§4.1–4.2, physical PDF pp. 7–8, https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf. The testing loss table and expected-risk formula support the zero-one risk context; the local kernel integral calculation is supplied in full.
- Gerald B. Folland, Real Analysis, 2nd ed., Chapter 2 §§2.2–2.3, printed pp. 49–54, https://djvu.online/file/NPF4BEtSuqdFA. The full relevant text covers nonnegative integration, order/additivity, integrable real functions, and linearity; the signed density formula is derived locally from the nonnegative density supplier and positive/negative parts.

The USC browser screenshot service returned a cache miss; the complete PDFs were retrieved directly, the relevant pages extracted with mutool, and the handwritten proof pages visually inspected. This was not a full-text retrieval failure; no source was dropped or sent to owner escalation. The coverage ledger records each harvested result and disposition. Fetch stamps are recorded by source-fetch-check --stamp.

## Mathematical checks

lem-likelihood-ratio-threshold-exists sets q(t)=Q(T>t) and c=inf{t:q(t)≤α}. Continuity from above makes the threshold set nonempty for α>0; continuity from below gives Q(T>c)≤α≤Q(T≥c). The explicit boundary probability fills the difference, with γ=0 when the boundary mass is zero. The proof handles α=1, excludes α=0 by hypothesis, and uses no choice.

lem-test-zero-one-loss-risk-identities defines the loss on the full binary action space, checks each fixed-parameter section, evaluates its simple integral under K(x,·), then integrates under Pθ. Boundedness and probability normalization make φ and 1−φ integrable; L1 linearity gives the alternative risk 1−Eθφ.

lem-common-support-likelihood-ratio-is-measurable defines a truncated reciprocal h=1/p0 on {p0>0} and zero elsewhere. Its strict superlevel sets are X, {p0>0}, or {0<p0<1/t}; the arithmetic-measurability theorem then makes R=p1h measurable and finite.

lem-integrable-signed-function-integration-against-density applies the nonnegative density-integration identity to f+ and f−. A finite bound and ∫p=1 make all four terms integrable; subtraction with L1 linearity proves the signed identity used in the NP proof.

lem-likelihood-ratio-test-is-measurable-and-exact-size writes the candidate as a finite sum of disjoint measurable indicators. The binary-kernel lemma makes it a test. The RN density identity gives P0(p0=0)=0; for c=0 this handles the extra zero-ratio part of {R=c}, while for c>0 that part is empty. The threshold equation then gives exact size for α>0; the α=0 singular-set rule has zero size.

thm-p-value-superuniformity proves measurability of the sublevel event and identifies each null rejection expectation with its probability, which validity bounds by α. Its indicator rejection function is a deterministic test via the local binary-kernel lemma.

For α>0, thm-neyman-pearson-lemma integrates (φ*−φ)(p1−cp0)≥0. On {p0>0} the factors have the same sign on either side of the cutoff; on {p0=0<p1} the candidate rejects with zero null cost. The signed density lemma justifies the integral identity. At α=0, the countable family B_nm={φ≥1/n}∩{p0≥1/m} shows any level-zero competitor vanishes P1-almost everywhere on {p0>0}; the candidate rejects the remaining alternative mass. The proof does not assume P1≪P0.

The discrete B example verifies R(0)=1/2, R(1)=3/2, γ=1/2, size 1/4, and power 3/8. The continuous B example proves ∫_[a,b]2x dλ=b²−a² from lower and upper Darboux sums, then obtains size 1/4 and power 7/16. The p-value counterexample has null mass 1/2 at p=0, so its threshold-1/4 rule has size 1/2.

## Scoped checks and blockers

- `content-policy.mjs` on the batch-8 manifest: 14 items, 0 errors, 0 warnings.
- Focused `depcheck.mjs`: all 14 items and both pages checked; 0 errors and 0 warnings, with 629 prerequisite-closure items and 135 prerequisite pages checked.
- `precheck.mts`: all 11 proof-bearing items passed; the three definitions were not applicable.
- `proof-layout.mjs`: 14 items, 41 numbered steps, 0 defects.
- `rendercheck.mjs`: 14 items and both page carriers, 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: 14/14 items checked, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 28 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 9/9 sources fetch-verified and resolved, with 0 documented drops; three sources received new stamps during this batch.
- The batch-8 item graph recomputes to levels 0, 3, 4, 5, 6, 7, 8, and 9 as shown above, with no batch-8 cycle. The repository-wide `item-dependency-levels.mjs check` is blocked by another pair's duplicate `lem-finite-dimensional-functional-convolution-bound` row in batch 30 and 18 stale item levels outside batch 8: `thm-z-estimator-consistency`, `def-dqm-submodel-through-a-law`, `thm-dqm-score-mean-zero`, `def-tangent-set`, `def-tangent-space`, `thm-tangent-space-is-closed-linear-subspace`, `def-nuisance-tangent-space`, `def-nuisance-tangent-orthogonal-complement`, `ex-bounded-scores-generate-unrestricted-tangent-space`, `ex-regular-bernoulli-submodel-dqm-score`, `ex-boundary-score-cone-and-linear-tangent-space`, `def-huber-covariance-model`, `lem-huber-covariance-mixture-is-a-probability-measure`, `lem-gaussian-kullback-leibler-covariance-formula`, `lem-clean-dense-gaussian-covariance-minimax-lower-bound`, `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound`, `lem-huber-covariance-contamination-modulus-lower-bound`, and `ex-dense-huber-covariance-model`.
- The cross-batch input contains all 28 expected page/item edges; each is marked `verified` from actual supplier-body inspection. That status records dependency-content checking only.
- Step 1 readiness was recorded `ready` for all 14 batch-8 items after proof, placement, prerequisite, and contract checks. A check before the external duplicate appeared showed all 14 records closed; the overall run then had 464 items, 218 ready, and was not closed. The latest `step1-decisions.mjs check` and `batch-dependency-levels.mjs check` stop on the duplicate item row in `research/mathematical-statistics-foundations-37-batch-30.pages.json` (the row appears twice on `semiparametric-efficiency-and-regular-estimation`). Before that duplicate appeared, the batch-level check reported a stale input hash after this manifest edit. The owner needs to resolve the duplicate and refresh the shared batch-level artifact. I did not edit batch 30 or shared run state.

No MSF-03 supplier remains unavailable. The actual risk definition is present and its binary testing specialization is proved locally. No source was dropped or escalated.

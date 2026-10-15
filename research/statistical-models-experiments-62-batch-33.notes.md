# Statistical Models and Experimental Methods — Batch 33 notes

Run: `statistical-models-experiments-62`  
Pair: `logrank-and-weighted-logrank` / `logrank-and-weighted-logrank-examples`  
Batch dependency level: 2; prerequisite batches: 12, 28, 30, 31.  
Dispatch scheduling input: `3ecd0117a9d101092012a6ef52951d7ae10a9e6b0e59d63ff25d96b672984ebc`.

## Plan and design reconciliation

The binding authoring direction is `research/statistical-models-experiments-62-owner-authoring-direction.md`; SME-33 at L233 of `research/plan-statistical-models-experiments-track.md` controls the mathematical scope. The task page identity, order 1982/1983, category, titles, companion, and eight direct page prerequisites agree with the current `research/plan-spec.json`. No plan/design conflict required a scope change.

The A page defines the finite right-censored risk-set score, the conditional hypergeometric moments under their explicit uniform-subset model, weighted scores, and the separate exact Fisher ordering. It proves uniform risk-fraction convergence, a centered terminal score expansion, plug-in variance consistency, and a fixed terminal Gaussian limit under the common-hazard model. The B page contains the crossing-hazards cancellation example and the unequal-weight exact randomization enumeration. The terminal result is finite-dimensional only; it supplies no process CLT. The martingale contract is an explicit model assumption and is never inferred from the hazard display or independent censoring.

## Inventory, logical dependencies, and item levels

The item dependency DAG was recomputed from the current run manifests. Direct suppliers below include all in-run item suppliers; published/out-of-run dependencies remain in each carrier's `deps` array.

| Item | Home | Level | Highest in-run supplier(s) |
|---|---|---:|---|
| `def-logrank-risk-set-score-and-test` | A | 0 | none |
| `lem-logrank-risk-set-empirical-fractions-converge` | A | 0 | none |
| `thm-logrank-conditional-risk-set-moments` | A | 1 | `def-logrank-risk-set-score-and-test` |
| `lem-logrank-risk-fraction-converges` | A | 1 | `def-logrank-risk-set-score-and-test`; `lem-logrank-risk-set-empirical-fractions-converge` |
| `cor-logrank-fisher-randomization-pvalue-valid` | A | 5 | batch-12 Fisher sharp-null theorem, definitions, plus local score definition |
| `lem-logrank-score-martingale-expansion` | A | 6 | batch-30 counting-process contract, L² integral, bracket theorem and isometry; local risk-fraction lemma |
| `lem-logrank-variance-estimator-consistency` | A | 6 | batch-30 contract, L² integral, bracket theorem and isometry; local risk-fraction lemma |
| `thm-weighted-logrank-terminal-normal-limit` | A | 7 | local score expansion and variance-consistency lemma; batch-31 independent-groups terminal theorem; batch-30 contract/integral/isometry |
| `ex-logrank-crossing-hazards-zero-score` | B | 1 | local score definition |
| `ex-logrank-fisher-randomization-with-unequal-weights` | B | 6 | local score definition and exact-randomization corollary; batch-12 assignment-model definition |

The local risk-set definition and empirical lemma have no in-run item suppliers (level 0). The Fisher corollary is level 5 because its highest in-run dependency is the batch-12 Fisher theorem at level 4. Both asymptotic lemmas are level 6 because their highest batch-30 integral supplier is level 5. The terminal theorem is level 7, one above its level-6 group theorem and local asymptotic lemmas. The B crossing example is level 1 after its only in-run supplier was narrowed to the local definition. All ten manifest labels match the recomputed levels. The A page has eight items and the B page two; neither approaches the 100-item cap.

The hypergeometric result is deliberately not a premise of the asymptotic plug-in variance-consistency lemma. That lemma proves consistency of the conventional risk-set variance statistic from the explicitly assumed counting-process model; it does not assert a finite-sample uniform-subset law under arbitrary alternatives such as the crossing-hazards example. The separate finite risk-set theorem states the uniform-subset hypothesis where it is needed.

## Mathematical checks and caveats

- Right-censored records use $U=\min(T,C)$, $\delta=1\{T\le C\}$, and the pre-event risk convention $U\ge t$. The score is a finite measurable statistic; the definition distinguishes tied event causes and leaves a zero-variance standardized statistic undefined.
- The finite risk-set expectation and variance are proved by failure-subset indicators and covariances, including $Y=0$, $Y=1$, $d=0$, $d=Y$, and one-group risk sets. Sequential weighted increments are orthogonal only under the stated conditional uniform-subset model and predictable weights.
- The empirical-risk proof establishes pointwise measurability, unit envelope, and finite $L^1$ bracketing entropy for the threshold class. It uses only the supplier's convergence-in-probability Glivenko–Cantelli branch; Countable Choice and the almost-sure branch are not used.
- The Fisher corollary fixes the full record under every allowed assignment, injectively encodes $(U,\delta)$ as $R=U+(\tau+1)\delta$, and applies the proved finite weighted-tail result to the predeclared absolute logrank ordering and actual assignment probabilities. It makes no weak-average-effect or equal-hazard validity claim.
- The score expansion uses a common predictable filtration, no simultaneous event jumps, finite integrated hazard, and the explicit square-integrable martingale contract. It proves the risk-fraction and deterministic-weight replacements by the L² isometry; no martingale process CLT is invoked.
- The terminal theorem assumes IID nonnegative event/censor pairs within groups, independent groups, conditional independent censoring, a common continuous event hazard, positive pooled risk support, interior deterministic allocation, bounded predictable $w_n$ with a deterministic uniform-in-probability limit, and the separate counting-process martingale contracts. It constructs a measurable subject-record influence, checks centering, finite variance, the no-large-jump condition and the group-scale expansion before applying the finite-group theorem. It handles $\sigma_w^2=0$ without standardizing and allows any fixed finite extension when the finite-sample variance estimate is zero but the limiting variance is positive.
- AC is explicit in the score expansion, variance-consistency lemma, and terminal theorem because their counting-process/integral and terminal-limit suppliers require it. The finite hypergeometric proof, empirical convergence-in-probability proof, and Fisher finite-rank proof introduce no additional choice axiom.
- The crossing-hazards example integrates both hazards, verifies survival crossing at $t=2$, constructs a positive-probability independently censored sample pattern, and computes contributions $+1/3$ and $-1/3$ with total plug-in variance $4/9$. The unequal-weight example enumerates scores $2/3$, $1/6$, and $-5/6$, then checks the complete p-value CDF at $0$, $1/6$, $2/3$, and $1$.

## Cross-batch supplier review

The batch-33 cross-batch input contains all 20 direct page/item edges declared by the manifest: four page edges and sixteen item edges. A direct manifest comparison found no missing or extra edge. All page and item edges to batches 12, 28, 30, and 31 are verified against current supplier bodies/proofs and current ready Step 1 records. The exact Fisher theorem in batch 12 handles actual unequal assignment weights; the event-observation definition in batch 28 matches the local restatement; the batch-30 contract, bracket, L² domain, and isometry hypotheses match every cited use.

The batch-31 theorem `thm-independent-groups-terminal-influence-limit` was read with its full proof. Its current Step 1 record is `ready`, has `owner: true`, and closes against the current item/dependency hash. Accordingly, no batch-33 cross-batch edge remains open. The focused owner resolution at `research/statistical-models-experiments-62-owner-terminal-influence-resolution.json` records review of the previously missing batch-30 page edge and all 17 current batch-30 supplier bodies. The required finite-group hypotheses match this consumer. Batch 33 does not change or overwrite that owner record. This authoring check does not constitute independent approval.

The read-only global `frontier-dependency-ledger.collect` currently fails on an invalid review row in `statistical-models-experiments-62-batch-13.cross-batch-dependencies.json`; no shared ledger was refreshed. The batch-33 direct-edge comparison succeeded independently (20 declared/20 expected, no missing or extra edge, all verified). A malformed batch-42 JSON manifest was repaired by its owner while this batch was in progress; it is now parseable and is outside this dependency closure.

## Source reading, history, and coverage

The coverage file records 13 harvested results, their item mapping/disposition, exact locators, one successful fetch attempt per source, and fetch stamps for all four sources. Ten results are included in batch-33 items and three are explicitly out of scope. No source failed retrieval, was dropped, or needed a recovery retry; `tools/source-resolution.mjs` therefore has no source-resolution entry for this batch.

| Source | Full-text locator inspected | Harvest disposition |
|---|---|---|
| Lu Tian, STAT331 Unit 6, `https://web.stanford.edu/~lutian/coursepdf/unit6.pdf` | PDF pp. 1–13 of the 18-page PDF: risk sets, event/expected counts, hypergeometric moments, weighted score and examples. | Three included results for the finite definition and conditional-moments proof. |
| Lu Tian, STAT331 Unit 13, `https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf` | PDF pp. 1–12 of the 14-page PDF: censoring setup, uniform risk fractions, common-hazard score route, weights and terminal asymptotics. | Three included results for empirical convergence, score expansion and plug-in variance; process CLT out of scope. |
| Michal Kulich, *NMST531 Censored Data Analysis*, `https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf` | Complete 99-page notes retrieved; §5.3–5.4, PDF pp. 59–62 / printed pp. 595–625. | Three included results for weighted score, martingale representation and terminal variance; process limit out of scope. |
| Siva Balakrishnan, CMU 36-705 Lecture 28, `https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf` | Complete 10-page lecture retrieved; §§28.2–28.5, PDF pp. 1–6. | Sharp-null randomization result included; the equal-probability permutation shortcut is out of scope for the unequal-weight example. |

The A page has independent full-text treatments from the Stanford course notes and Kulich's full lecture notes/book-length treatment. The source titles and exact harvest dispositions are also in each item and `research/statistical-models-experiments-62-batch-33.coverage.json`. No finite-check registry entry applies; the finite arithmetic is fully shown in the two B proofs and no registry ID was invented.

## Scoped checks and external blockers

| Check | Result |
|---|---|
| `manifest-deps` | 10 items; 0 normalized; 0 errors |
| `content-policy` | 10 scoped items; 0 errors; 0 warnings |
| focused `depcheck` | 10 items; dependency closure 1,705 items / 299 pages; 0 errors; 0 warnings |
| focused `fwdcheck` | 0 errors; 0 warnings; five items inherit later-material markings through approved dependencies |
| focused `extcheck` | 10 items; 0 recorded-unproved items; 0 errors; 0 warnings |
| `precheck` | 9 proof-bearing items passed; the definition is not applicable; 0 failed |
| explicit `proof-layout` | 10 items; 30 steps; 0 defects |
| `rendercheck` | 12 changed item/page files; all math parsed and all frontmatter parsed; 0 errors |
| strict proof contracts | 10/10 items; 58 exact supplier excerpts; 0 errors; 0 warnings |
| coverage checklist | 1 A page; 13 harvested results; 0 errors; 0 warnings |
| source-fetch check | 4/4 full-text fetch stamps verified; 0 drops; 0 source-resolution failures |
| Step 1 item records | 10/10 `ready`, all `owner: false`; each closes against its dependency hash in the current full-run snapshot |
| batch-33 item dependency calculation | All 62 manifests parse; the whole-run DAG gives the ten assigned levels shown above; no batch-33 mismatch |
| full-run item dependency check | 11 errors outside batch 33: `lem-bounded-predictable-counting-integral-pathwise-identity` has no level; four Cox items are each one level low (`lem-cox-partial-likelihood-hessian-convergence` 6→7, `lem-cox-score-martingale-replacement` 6→7, `thm-cox-score-limit-and-estimator-linearization` 7→8, `cor-cox-partial-likelihood-asymptotic-normality` 8→9); six batch-45 spatial-field items are one level low (`def-random-field-stationarity-covariance-and-variogram` 0→1, `lem-random-field-covariance-kernel-is-positive-semidefinite` 1→2, `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel` 1→2, `thm-order-two-field-variogram-is-conditionally-negative-definite` 1→2, `thm-continuous-stationary-field-covariance-has-bochner-measure` 2→3, `ex-covariance-kernel-and-intrinsic-variogram-checks` 2→3). No batch-33 label is in error. |
| batch-dependency-level check | Stale shared artifact: pure recomputation gives batch 33 level 2 with prerequisites `[12, 28, 30, 31]`; current input hash `4dbbf3cefe25f50076714a158d8d81c9cef43ecb666ead9aae658b2726983e98` differs from recorded `7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`. No shared artifact was written. |
| full-run Step 1 decision check | 510 items; 380 ready; run remains open on unrelated missing/escalated records. The ten batch-33 records each close when checked against the current full run. |

The build driver status was read at 2026-10-14T18:24:30.984Z: the run is `running`, stage `1-scaffold` is owner-held with 43/62 dispatches covered, no worker is running, and `research/statistical-models-experiments-62-step1-blockers.json` requires owner repair/recertification. Batch 33 did not edit `.autopilot/`, shared plans, dependency-level artifacts, published content, other pairs, or verdicts.

The full-run `step1-decisions record` loader initially could not parse the concurrently edited batch-42 manifest. The same CLI `record` command was run in a temporary mirror with only the missing comma repaired in that temporary copy; no manifest meaning changed. The ten generated records were copied unchanged into this batch's assigned evidence. Batch 42 was subsequently repaired, and the current full-run targeted check confirms all ten records close. None of their dependency-input closures includes batch 42. These records are authoring readiness, not independent approval, and do not close the owner's run-level blocker.

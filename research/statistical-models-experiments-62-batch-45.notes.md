# Batch 45 — authoring and evidence notes

## Inventory and dependency levels

The assigned pair is random-fields-covariance-and-variograms /
random-fields-covariance-and-variograms-examples. The A page has five items;
the B page has one example.

| Level | Items |
|---:|---|
| 1 | def-random-field-stationarity-covariance-and-variogram |
| 2 | lem-random-field-covariance-kernel-is-positive-semidefinite; thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel; thm-order-two-field-variogram-is-conditionally-negative-definite |
| 3 | thm-continuous-stationary-field-covariance-has-bochner-measure; ex-covariance-kernel-and-intrinsic-variogram-checks |

The item graph is acyclic. Levels were recomputed over all current run batch
manifests: the field definition depends on the batch-40 time-series stationarity
definition at level 0, so its run-wide level is 1. The covariance lemma,
Gaussian construction, and variogram theorem are level 2; the Bochner result
depends on the local covariance-positivity lemma, while the example depends on
the choice-free covariance and variogram results, making both level 3. The B
item does not depend on the AC Gaussian construction or AC+DC Bochner result.
All items fit the 100-item cap.

The scheduling input is
8f8649847ccd00f250ca83e4fa6d4c73ed6717c68fc1be0ea3202eed86eb5356. Batch 45
is level 3 with prerequisite batches 40 and 41. All six page requirements
from the task are retained.

## Design comparison and recorded resolutions

The current track plan and plan-spec agree on both page IDs, orders 2006/2007,
category, titles, companion, and all six required pages. The plan-spec item
lists remain empty as pre-authoring shared-plan state; only this pair's run
manifest and pages were populated.

The three proposed A results are split to preserve their axiom branches:
covariance-kernel positivity and variogram CND are choice-free; Gaussian
finite-dimensional construction and Kolmogorov extension require AC; Bochner
representation requires AC+DC. No planned claim was removed. Schoenberg's
converse, sample-path continuity, and joint measurability are not claimed.

Spodarev 2024 defines order-two intrinsic stationarity by displacement-only
increment first and second moments. The 2009 draft additionally requires zero
mean increments. The controlling plan does not impose that restriction, so
the local definition uses the broader 2024 convention. The 2009 CND display
uses complex weights without conjugation; the local theorem and example use
real coefficients. The 2024 covariance-positivity proposition is an exercise,
so the local lemma proves it from variance. The 2009 general-dimensional
Bochner proof is referred to an external source; the local theorem instead
uses the published full LCA Bochner supplier.

The pair-audit record's SME-40/41 “proposed, not published” labels are
historical navigation evidence. Current batch-40/41 A bodies are present and
were read directly; they remain draft context, not independent acceptance.
Batch 41's discrete-integer/circle and periodogram conventions are not
reused for the spatial LCA dual. The declared central-limit-theorems page
requirement is retained as a page edge, but no CLT or asymptotic inference
claim is made.

## Supplier and axiom review

The current batch-40 strict/wide definition states full finite-dimensional
shift invariance and the finite-moment, constant-mean, lag-covariance
hypotheses. Batch 41's spectral definition and Herglotz proof were read; the
latter carries AC+DC. Their current A bodies are draft, and no approval is
claimed.

The Gaussian-field proof verifies singular multivariate-normal projection
consistency and that the usual real line is second-countable and locally
compact Hausdorff (by a rational-interval base and compact interval
neighbourhoods). The published LCH standard-Borel theorem then supplies the
Kolmogorov coordinate hypothesis, and extension is only to the cylinder
sigma-algebra. AC is declared and used by the finite Gaussian-law and
Kolmogorov suppliers. The spectral proof checks real covariance
positivity, converts it to the complex convention, and invokes Bochner only
after stating continuity and the LCA group structure. Its AC+DC branch is
separate from the choice-free covariance and CND items.

## Source reading and retrieval

The A page uses three treatments:

- Spodarev, Spatial Statistics: Lecture Notes (2024), complete focused
  Sections 1.1–1.2, PDF pp. 3–8:
  https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf.
  The covariance-positivity proof is an exercise.
- Spodarev, Random Fields I: Lecture Notes (Draft, 2009), complete focused
  §§1.3–1.4, PDF pp. 14–20, and §§2.1–2.2, PDF pp. 32–46:
  https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf.
  The CND variance argument was read; the Schoenberg converse is only cited.
- Biermé, Introduction to random fields and scale invariance: Lecture I
  (2016), full 29-page lecture PDF, with the relevant units on PDF pp. 4–6
  and 12–19:
  https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf.
  This is the independent treatment; its supporting propositions receive
  complete local proofs where needed.

The B-page matrix, finite random line, and zero-sum quadratic form are
computed locally. Full locators, item dispositions, and retrieval stamps are
in the batch coverage file.

## Scoped checks and readiness

The final scoped checks report:

- Strict proof contracts: 6/6 items, zero errors or warnings.
- Precheck: all 5 proof-bearing items pass.
- Proof layout: 6 items, 18 steps, zero defects.
- Item dependency levels: 510 items across 124 run pages, maximum level 9;
  the six batch-45 labels agree with the full run graph.
- Manifest dependencies: all 6 items have explicit dependency arrays.
- Focused depcheck: all 6 items and the selected page/prerequisite cycle checks
  pass.
- Content policy: 6 scoped items, zero errors or warnings.
- Rendercheck: all 6 carriers and 2 A/B pages pass.
- Source fetch check: 6/6 sources are stamped and verified; there are no
  documented drops.
- Coverage checklist: 2 pages and 20 harvested results, zero errors. It emits
  one low-yield warning because 5/14 harvested A-page results are scaffolded;
  Alpha should confirm the recorded dispositions for the remaining results.

All six items have hash-current Step-1 `ready` records with their exact direct
dependencies. The records establish authoring completeness only; they do not
constitute proof approval or supplier acceptance.

## Run handoff status

The disk-recomputed status (2026-10-14T18:36:26.607Z) reports the run still at
`1-scaffold` with 54/62 covered. It lists 7, 41, 42, 45, 46, 47, 50, and 55 as missing, and separately
lists artifact gaps for 7, 18, 41, 42, 46, 47, 51, and 55. The active owner
blocker remains: repair rejected items, refresh certifications invalidated by
those repairs, and retry the gate; see
`research/statistical-models-experiments-62-step1-blockers.json`. Batch 45 is
listed among the uncovered IDs. This pair did not alter shared plans, verdicts,
the blocker file, or engine state.

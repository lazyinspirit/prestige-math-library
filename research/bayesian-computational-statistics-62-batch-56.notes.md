# Batch 56 authoring notes — Cross-validation risk and model comparison

## Plan reconciliation

The dispatch, `plan-spec.json`, and track plan agree on the A/B page IDs,
category, titles, orders 2152/2153, and the page-level prerequisite
`delta-method-and-asymptotic-normality`. The track design identifies
`def-statistic-and-estimator` and `def-loss-function-and-risk` as the external
risk/statistic interfaces, and says the delta-method theorem is needed only by
a separately proved asymptotic selection result. The approved item inventory
contains no such result. I retained the plan's page-level delta-method
requirement and did not create an unused item dependency or add an asymptotic
claim. The current published delta-method page and its actual theorem proof
were inspected; no claim from that theorem is used by these items.

The track inventory contains five planned A items. I added
`lem-kfold-cv-variance-covariance-decomposition` on the A page as the missing
intermediate result required to justify the covariance terms used by the
variance theorem and paired-comparison example. The four B-page examples match
the approved examples: holdout training-size bias, paired comparison,
dependent-group leakage, and risk minimization versus model identification.

The risk-bias theorem proves the plan's fixed-partition formula and extends it
to every finite weighted split schedule already defined by the algorithm,
including a single holdout and a finite independent randomization law. The
fixed K-fold formula is recovered by the stated weights. This supplies the
approved holdout and randomized-split interfaces without adding an
asymptotic-selection claim.

## Inventory, dependencies, and levels

The dispatch input names batch 56 as dependency level 0 with no prerequisite
batches. Item levels count only in-run logical suppliers; published suppliers
remain external context.

| Item | Page | Level | In-run suppliers |
| --- | --- | ---: | --- |
| `def-cross-validation-split-and-risk-target` | A | 0 | none |
| `def-risk-estimation-versus-model-identification` | A | 1 | `def-cross-validation-split-and-risk-target` |
| `alg-holdout-loo-lpo-v-fold-and-repeated-cv` | A | 1 | `def-cross-validation-split-and-risk-target` |
| `thm-cross-validation-risk-bias-at-training-size` | A | 2 | A-page risk definition; CV procedure |
| `lem-kfold-cv-variance-covariance-decomposition` | A | 2 | A-page risk definition; CV procedure |
| `thm-no-universal-unbiased-k-fold-cv-variance-estimator` | A | 3 | covariance lemma; A-page risk definition; CV procedure |
| `ex-holdout-cv-training-size-bias` | B | 3 | bias theorem; A-page risk definition; CV procedure |
| `ex-paired-kfold-model-comparison-uncertainty` | B | 3 | covariance lemma; A-page risk definition; CV procedure |
| `ex-random-row-split-leaks-group-information` | B | 2 | CV procedure |
| `ex-cross-validation-risk-minimization-does-not-identify-model` | B | 2 | A-page risk definition; risk/identification definition |

All item-level dependency arrays are present in the scaffold manifest and
mirror the carriers. The local covariance lemma precedes both its theorem and
the B example. No in-run batch supplier is used, so the owned cross-batch input
is `[]`. Batch 57 declares the A page as a prerequisite; that outgoing edge
belongs to batch 57's consumer-owned input.

The current shared run artifact
`research/bayesian-computational-statistics-62-batch-dependency-levels.json`
records batch 56 at level 0 with no prerequisite batches and input hash
`4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`,
matching this dispatch's scheduling input. The run-wide check could not
initially parse because batch 33's manifest was malformed; a later check
parsed the manifests and reported that the shared artifact is stale after
authoring changed manifest bytes. The owner/engine should refresh it after
author slots drain. I did not rewrite this shared scheduling artifact.

## Supplier inspection

The following current external carriers were read at their actual homes and
checked against the authored uses:

- `def-statistic-and-estimator` defines a statistic as a measurable map and an
  estimator as a statistic with the estimand's target space.
- `def-loss-function-and-risk` defines risk as expected loss for a measurable
  rule. Its loss is nonnegative; the local CV definition explicitly states the
  integrable real-valued extension used by the design's general loss notation.
- `def-identically-distributed-and-iid-random-variables` requires mutual
  independence, not merely pairwise independence, and states identical laws.
- `def-bernoulli-and-binomial-random-variables` defines the Bernoulli support
  and point probabilities used in the finite witnesses and examples.
- `thm-independent-random-elements-have-product-joint-law` and its full proof
  supply the finite product law used for risk and exchangeability arguments.
- `thm-factorization-of-expectations-for-independent-variables` and its full
  proof supply the Bernoulli product expectations in the worked examples.
- `def-moments-variance-and-covariance` supplies the square-integrability
  conventions and formulas. Product-law symmetry in the covariance lemma is
  obtained by applying `thm-independent-random-elements-have-product-joint-law`
  to the original and index-permuted IID tuples; no separate measure-uniqueness
  result is needed by the final proof.
- The published first- and second-order delta-method theorem was read with its
  complete proof and exact hypotheses. It is a page-level prerequisite only;
  no asymptotic selection statement uses it here.

All of these external item/page suppliers are published. There are no
unresolved mathematical supplier interfaces. The run-wide dependency-check
blocker is an unrelated malformed batch-33 manifest, as recorded above.

## Source harvest and proof choices

The source coverage file records 19 harvested results, their dispositions,
and three independent full-text treatments: Arlot–Celisse's survey,
James–Witten–Hastie–Tibshirani's textbook Chapter 5, and Bengio–Grandvalet's
JMLR paper. The survey's §§4.2–4.3 and §5.1.1 support the split procedures and
training-size risk target; Chapter 5 §§5.1.1–5.1.4 (printed pp. 176–184) was
read from the author-hosted PDF and supports holdout, LOO, K-fold, and their
training-size/bias–variance distinctions. The JMLR paper's §§2.5–3 and full
Theorem 6 proof supply the balanced-fold covariance context; the local
finite-support impossibility proof does not use its analytic-estimator
restriction.

The publisher-hosted Project Euclid PDF returned a 1,159-byte Incapsula HTML
page. A Yale course mirror was found but its TLS certificate named
`euler.wss.yale.edu`, not `www.stat.yale.edu`. After searching by title and DOI,
the full author-version ArXiv PDF of the same Arlot–Celisse work was retrieved,
checked as a 40-page PDF, and inspected at the exact ranges in the coverage
record. This recovery succeeded, so no source was dropped and no
`source_resolution` drop record applies. `source-fetch-check --stamp` verified
the ArXiv survey, the complete textbook PDF, and the JMLR paper (3/3).

Bengio–Grandvalet's proof uses an analytic-estimator expansion to reduce its
candidate class. The local theorem does not rely on that reduction: for a
fixed symmetric product learner and Bernoulli$(p)$ data, every estimator based
on the observed finite sample has expectation polynomial degree at most $n$,
whereas the target variance has degree $2(n-m+1)>n$. This proves the stated
universal impossibility claim without assuming the candidate estimator is
analytic. The paired example enumerates all 16 binary samples; its exact
outcome groups and moments are recorded in the proof contract's finite_checks.
No registered finite_smoke check applies.

## Scoped checks and evidence limits

source-fetch-check --stamp returned 3/3 source(s) fetch-verified (0 newly
stamped) and 3/3 source(s) resolved (0 documented drops). The downloaded ISLR
PDF matched the existing stamp's 11,237,547-byte body and SHA-256 prefix
dd6997f961a13229; MuPDF opened and exposed the cited Chapter 5 text. Its page
tree reports 441 pages while the existing fetch stamp records 464 from the
checker. The mismatch is retained as an evidence note; the source body and
printed pp. 176–184 were inspected, and the stamp was not edited.

Final scoped checks passed: precheck covered all 7 proof-bearing items; the
strict proof-contract check covered all 7; proof-layout rendered 7 items and
26 steps with 0 defects; rendercheck passed for all 10 items and both pages;
focused depcheck covered the 10 owned items and their prerequisite closure
(391 items, 260 pages) with 0 errors or warnings; content-policy covered all
10 items with 0 errors or warnings. All 10 Step 1 readiness records are
current and closed.

The batch-56 manifest-local dependency calculation checks the ten owned items
in levels 0–3 with no cycle or label mismatch. The run-wide item-level check
reports 63 empty page inventories on other authoring batches (9, 12–18,
20–21, 24–27, 35–49, 58, and 60–62). Those pages are outside this pair and
remain with their assigned authors. The run-wide batch-level check reports a
stale shared artifact after authoring changed manifest bytes; no shared
artifact or other pair's manifest was modified.


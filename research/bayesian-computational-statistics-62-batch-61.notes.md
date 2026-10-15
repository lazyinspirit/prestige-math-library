# Batch 61 authoring notes — bayesian-computational-statistics-62

## Scope and plan reconciliation

This batch owns the A/B pair `synthetic-likelihood-and-indirect-inference` /
`synthetic-likelihood-and-indirect-inference-examples`, pages 2162–2163 in
`bayesian-computational-statistics`. The complete BCS-58 design section and the
controlling `research/plan-spec.json` row agree on page IDs, order, titles,
category, companion, and page requirements: batches 23 and 28. The assigned
dependency input has batch level 3 and SHA-256
`44c42dcfbf838913d324468437a7d214ccd5cd979b607a8e98a5bdaa22f1dc6a`.
The two `plan-spec` item arrays are empty scaffold placeholders, so the
detailed design section supplies the carrier inventory; this is not a
design-versus-plan claim conflict.

The design specifies four A-page carriers and three B-page examples. The A
page retains the four planned carriers and adds two local prerequisites:
`lem-two-simulation-summary-covariance-is-singular-in-two-dimensions`, needed
to justify the finite-simulation failure boundary, and
`thm-indirect-inference-target-exists-with-lexicographic-tie-break`, needed to
establish that the stated compact-domain selector exists. The B page contains
the three planned examples. No shared plan or other pair was changed.

The design's Frazier reference gives “2019, JASA 114(527), 2821–2827.” The
full-text article inspected here is the final 2023 JASA 118(544), 2821–2832
publication (online 2022); batch coverage and item bibliography use the final
journal metadata. Ong et al. is cited as the 2018 journal article while its
full text was retrieved from the 2016 arXiv PDF. These are bibliographic
corrections, not changes to the planned mathematical scope.

## Inventory, dependencies, and levels

All nine manifest items have explicit dependency arrays. Their arrays were
compared against the item frontmatter; the scoped dependency calculation found
no cycles or level mismatches. Levels count only in-batch suppliers, so the
external dependencies of level-zero items do not raise their local levels.

| Local level | Items |
|---|---|
| 0 | `def-synthetic-likelihood`; `def-binding-function-and-indirect-inference-target`; `lem-two-simulation-summary-covariance-is-singular-in-two-dimensions` |
| 1 | `thm-indirect-inference-target-exists-with-lexicographic-tie-break`; `alg-synthetic-likelihood-monte-carlo-estimation`; `ex-gaussian-synthetic-likelihood-for-bernoulli-summary-law` |
| 2 | `rem-finite-simulation-synthetic-likelihood-is-a-random-approximation`; `ex-nonunique-binding-function-target`; `ex-two-simulation-covariance-is-random-and-singular` |

The run-wide `node tools/batch-dependency-levels.mjs check --run
bayesian-computational-statistics-62` reports that the shared batch-level
artifact is stale and must be recomputed. The assigned graph still places this
batch at level 3 with prerequisites 23 and 28; the local item-level calculation
above passes. Recomputing that run-wide artifact is owner/engine scope and was
not done here.

## Cross-batch supplier inspection

The cross-batch dependency input records the two required page-level edges.
For BCS-23, I inspected the current A-page summary and the actual
`alg-gradient-descent` and `alg-damped-newton` bodies. They define procedures
without asserting global optimizer convergence. This pair defines an exact
minimum-distance target and imports no convergence claim from those algorithms.

For BCS-25, I inspected the current page, the actual
`def-iid-monte-carlo-estimators` statement and its mean-moments proof, and its
Step-1 authoring record. The design's BCS-25 inventory table names
`alg-iid-monte-carlo-integration`,
`thm-monte-carlo-estimator-obeys-strong-law`, and
`thm-monte-carlo-clt-and-standard-error-under-finite-positive-variance`.
The current batch-28 manifest instead has `def-iid-monte-carlo-estimators`
(a definition) and four more granular theorem IDs:
`thm-iid-monte-carlo-mean-moments`,
`thm-iid-monte-carlo-mean-consistency`,
`thm-iid-monte-carlo-sample-variance-consistency`, and
`thm-iid-monte-carlo-central-limit`. This is an upstream item-ID, kind, and
inventory mismatch recorded in batch 28's notes; it remains for owner
reconciliation. No BCS-25 item theorem is imported here: the algorithm states
the vector sample mean and covariance formulas locally and uses the published
general IID definition. The page requirement remains as declared by both the
design and plan. The inspected draft interface and Step-1 record are authoring
evidence, not independent acceptance.

## Mathematical scope and axiom use

The ideal synthetic likelihood is the Gaussian density built from the exact
summary mean and covariance, when the covariance is positive definite. It is
kept distinct from the exact experiment likelihood and the true summary law.
The finite plug-in uses simulated summaries, is random, and returns
**unavailable** for a non-positive-definite covariance; no ridge repair,
unbiasedness, convergence, posterior-calibration, consistency, BvM, or coverage
claim is made.

The indirect-inference definition fixes the moment binding map, a nonempty
compact Euclidean parameter set, a continuous squared-distance objective, and
a coordinatewise lexicographic tie-break. The local theorem proves the argmin
set is nonempty compact and constructs the least element by finitely many
attained coordinate minima. It does not turn injectivity into a conclusion.
The examples separate full-law and moment-binding identification, show a
Gaussian synthetic density can differ from a Bernoulli summary law, and show
that two simulated vectors in dimension two always give a singular Bessel
covariance. The square-summary example also exhibits two distinct covariance
outcomes with positive probability while the population covariance is `I_2`.

AC is declared only where required by the multivariate-normal density and the
pointwise likelihood-density interface. The compact lexicographic existence
proof, explicit null-vector construction, and finite probability calculations
use no choice principle. No theorem about identification or estimator
convergence is inferred from the examples.

## Source record

The coverage record contains five full-text treatments: Ong et al. (2018),
Drovandi et al. (2020), Frazier et al. (2023), Gouriéroux–Monfort–Renault
(1993), and Sargent–Stachurski, Chapter 38. Coverage records exact locators,
per-item support, dispositions, and retrieval stamps. Relevant sections and
their complete local reasoning were inspected; asymptotic, posterior, and
optimization results outside this scope are marked out-of-scope. The source
fetch check reports 5/5 stamped and resolved, with no failures or documented
drops, so no `source_resolution` entry was needed.

## Scoped checks and readiness

The assigned `author-check` evidence is `ok: true`: content policy checked 9
items with no errors or warnings; strict proof contracts checked 9/9 with no
errors or warnings; all five proof-bearing items passed precheck; and the
renderer checked both pages and all nine items. Scoped `depcheck`, `fwdcheck`,
`extcheck`, manifest dependency validation, source-fetch validation, and
`proof-layout` passed. Proof layout checked 9 items and 18 numbered steps with
zero defects. The five proof-bearing items are the covariance lemma, target
existence theorem, and three examples; the other four carriers are
definitions, an algorithm, or a remark and have no proof phase.

Item-level Step-1 decisions are recorded from the actual dependency bodies,
page placement, and passing contracts/checks. The BCS-25 inventory mismatch
and stale shared batch-level artifact remain explicit owner reconciliation
items; neither supplied a missing item premise for these nine proofs. These
authoring records are not independent mathematical approval.

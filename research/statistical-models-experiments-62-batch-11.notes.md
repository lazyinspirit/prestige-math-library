# Statistical Models and Experimental Methods — batch 11 notes

Run: `statistical-models-experiments-62`  
Pair: `cluster-and-two-stage-sampling` / `cluster-and-two-stage-sampling-examples`  
Role: beta  
Assigned batch dependency level: 3; prerequisite batch: 8  
Scheduling-input hash: `f44a63775dd68759c41c2fbc1304c8cc5f627d9d0d84ffaf1aa0227b5b330879`

## Plan, design, and conflicts

I read the binding owner-authoring direction and the complete SME-11 design at
`research/plan-statistical-models-experiments-track.md:167`, then compared it
with the current SME-11 entries in `research/plan-spec.json`. The design and
plan-spec agree on page IDs, order, title, category, A/B placement and all
three A-page prerequisites: `finite-populations-and-sampling-designs`,
`probability-spaces-random-variables-and-expectation`, and
`conditional-expectation`. No conflict between the controlling design and
plan-spec was found.

The older SME-02 dossier proposes separate S08/S09-style cluster and
two-stage pages. Those IDs and split are stale relative to the assigned
SME-11 pair; the current plan controls. I retained the planned scope:

- define PSU/SSU roles, fixed cluster totals and exact one- and two-stage
  design laws;
- prove the one-stage SRSWOR cluster-total estimator's unbiasedness and exact
  finite-population variance;
- state the two-stage expansion estimator and prove its unbiasedness and
  between-PSU plus expected within-PSU variance decomposition;
- derive the equal-size ICC design effect only under the stated equal-marginal,
  common-covariance, independent-PSU, no-FPC superpopulation model;
- correct the source's claim that `rho = 0` means no sampling error; and
- use the B page for direct two-stage enumeration and an unequal-size
  counterexample to arithmetic-mean-size substitution.

No general unequal-size estimator, PPS estimator, variance estimator,
allocation result, or two-stage efficiency comparison is claimed. The theorem
for the general two-stage variance carries AC because its declared proof route
uses the supplied conditional-expectation and conditional-variance branch,
including the published conditional-variance decomposition. The one-stage
theorem, equal-size design-effect proof, and direct B-page enumeration remain
choice-free. AC is not attributed to the finite sampling calculations.

## Inventory, dependencies, and item levels

Levels were computed from the run's batch dependency DAG and the item graph;
external published suppliers contribute level zero. The assigned inventory
and direct dependencies are:

| Item | Page | Direct item dependencies | Level |
|---|---|---|---:|
| `def-cluster-sampling-design-and-cluster-totals` | A | `def-finite-population-and-sampling-design` | 3 |
| `def-two-stage-cluster-sampling-and-expansion-estimator` | A | `def-cluster-sampling-design-and-cluster-totals`; `def-finite-population-and-sampling-design`; `def-moments-variance-and-covariance` | 4 |
| `thm-srswor-cluster-total-estimator-unbiased-and-variance` | A | local cluster definition; moments; covariance bilinearity; finite-sum variance | 4 |
| `thm-equal-cluster-size-design-effect` | A | local cluster definition; moments; covariance bilinearity; finite-sum variance | 4 |
| `thm-two-stage-expansion-total-unbiasedness-and-variance` | A | local two-stage definition; sigma-algebra definition; conditional-expectation-version definition; AC; conditional-expectation AE-class definition; conditional-variance definition; conditional-variance decomposition; moments; covariance bilinearity; finite-sum variance | 5 |
| `ex-two-stage-village-field-subsampling` | B | local two-stage definition; moments | 5 |
| `cex-average-cluster-size-does-not-determine-unequal-size-design-effect` | B | local cluster definition; moments; covariance bilinearity; finite-sum variance; local SRSWOR theorem | 5 |

The actual batch-8 manifest places `def-finite-population-and-sampling-design`
at level 2 (and its induced-law support lemma at level 3). Its current draft
definition and proof were inspected. The definition fixes population values,
uses a finite normalized design law, and defines design expectation and
inclusion probabilities. The current Step-1 record for that supplier remains
`escalated`, however. Its reason says `def-fixed-design-linear-regression-model`
is escalated due an empty supplier inventory, while the current decision file
for that item is owner-ready (`2026-10-14T17:38:23.852Z`). The batch-8
cross-batch input still records that discrepancy as open. This pair therefore
uses the actual body as drafting context and records the exact unresolved
dependency in `batch-11.cross-batch-dependencies.json`; it does not claim
readiness or upstream acceptance. All seven items are affected directly or
transitively through the required A-page prerequisite.

Other interfaces used in the proofs were read at their current bodies:

- `def-moments-variance-and-covariance` defines variance and covariance by
  centered moments. The finite designs and finite model example have finite
  support, so their variables are square-integrable.
- `thm-covariance-bilinearity-and-symmetry` applies to finite families of
  square-integrable real variables on a common probability space. Its proof
  uses finite expectation linearity and the variance/covariance identities.
- `thm-variance-of-a-finite-sum` supplies the finite covariance expansion.
- `def-sigma-algebra` supplies the conditioning-field definition;
  `def-conditional-expectation-given-a-sigma-algebra` defines a version by
  measurability, integrability and event-integral equality;
  `def-conditional-expectation-as-an-ae-class` states the AC-dependent unique
  class; and `def-conditional-variance` carries AC and requires an L2 input.
- `cor-conditional-variance-decomposition` assumes AC, real `X in L2(P)` and
  a sub-sigma-algebra, and states total variance as expected conditional
  variance plus variance of the conditional mean. Its full proof derives the
  identity from the conditional second-moment formula and expectation
  preservation. The local proof constructs the relevant conditional
  expectation versions by finite fiber sums before invoking it.
- `def-axiom-of-choice` states the choice-function axiom. Its only use here is
  through the supplied conditional-expectation/variance branch in the general
  two-stage theorem. No AC use is claimed for the finite designs or examples.

## Mathematical checks and scope limits

The one-stage theorem counts first- and second-order inclusion probabilities,
centers the PSU totals, and expands the variance using the fixed-size identity
`sum_{i != r} x_i x_r = -sum_i x_i^2`. It covers `m=1` and `m=M`, including
zero pair inclusion when `m=1`, and does not divide by pair probabilities.

The equal-size design-effect result is explicitly a superpopulation
comparison with the finite-population correction omitted. Its denominator is
the positive element-reference variance. At
`rho=0`, DEFF is 1 but both variances remain `sigma^2/(k m_c) > 0`; at the
lower PSD endpoint the cluster-mean variance can be zero, so the proof divides
only by the positive reference variance. Unequal sizes, unequal weights,
nonexchangeable covariance, dependent PSUs and non-negligible FPC are outside
the theorem.

For the general two-stage theorem, the product law makes the conditional
second-stage samples independent. Positive first-order inclusion probabilities
are the only denominators; zero pair-inclusion probabilities are allowed. The
proof explicitly constructs the first-stage sigma-algebra and conditional
expectation versions, verifies the conditional-variance version by finite
fiber integration, and then applies the supplied decomposition under its AC
hypothesis.

The B example enumerates all twelve outcomes: expansion estimates
`(24,32,40,40,48,56)` and `(16,24,32,32,40,48)`, total `432`, mean `36`, and
squared centered sum `1472`, hence variance `368/3`. The B counterexample has
half size-1 and half size-3 PSUs, `N=2M`, `sum n_i^2=5M`, common marginal
variance `sigma^2`, and correlation 1 for every within-cluster pair that
exists. For separate cluster and element SRSWOR designs with matched expected
sample size, the exact model-averaged variance ratio is
`(5/2)(2M-1)/(2M-5/2)`, which equals `199/79` at `M=100` and tends to `5/2`
with fixed `k`, not the naive `2` from substituting average size.

## Sources, retrieval, and disposition

`research/statistical-models-experiments-62-batch-11.coverage.json` records
four retrieved treatments, exact locators, item support and the disposition
of all 23 harvested results. The A page uses two independent full-text
treatments, including the textbook below; Holmes–Huber is supplementary
conceptual support only.

| Source | Full-text locator and use | Fetch stamp |
|---|---|---|
| [Shalabh, Chapter 9: Cluster Sampling](https://home.iitk.ac.in/~shalab/sampling/chapter9-sampling-cluster-sampling.pdf) | Complete 21-page PDF; pp. 1–5 for units and one-stage estimator/variance, pp. 6–10 for intraclass correlation and design effect, pp. 11–21 read for unequal-size and PPS limits. | 21 pages; 536,551 bytes; `27aaed4ed3a46c38` |
| [Shalabh, Chapter 10: Two Stage Sampling](https://home.iitk.ac.in/~shalab/sampling/chapter10-sampling-two-stage-sampling.pdf) | Complete 21-page PDF; pp. 1–7 for the PSU/SSU law and conditional-variance route; pp. 8–21 read for allocation and unequal-unit limits. | 21 pages; 548,955 bytes; `84eabcbf6f507476` |
| [Lohr, *Sampling: Design and Analysis*, 2nd ed.](https://drive.uqu.edu.sa/_/maatia/files/Sampling.pdf) | Complete 503-page PDF; Ch. 5 §§5.1, 5.2.1–5.2.2, 5.3, printed pp. 134–150; Ch. 6 §6.6, pp. 204–210, including Thms. 6.1–6.3. Bibliographic edition checked against [Lohr's author page](https://www.sharonlohr.com/sampling-design-and-analysis-2e). | 503 pages; 6,064,398 bytes; `a28b60eac8f1ecaf` |
| [Holmes–Huber, *Modern Statistics for Modern Biology*, Ch. 13](https://www.huber.embl.de/msmb/13-chap.html) | Complete Chapter 13; §§13.2, 13.3.2 and 13.4.5. Supports study-unit/dependence cautions only; it is not cited as proof of the design-based formulas. | HTML; 82,235 text characters; `91ad565b05c3a695` |

Coverage dispositions include the assigned cluster and two-stage claims as
`included` or `inline`; Shalabh's printed `rho=0`/“no error” assertion is
corrected inline. General unequal-size estimators, PPSWR, variance-estimator
construction, cost allocation and unrelated efficiency comparisons are
recorded `out-of-scope`; Holmes–Huber's replication discussion is deferred to
its separate pair. A Penn State PDF candidate returned a 502/timeout during
source search; Lohr's full textbook was found and successfully retrieved as
the second treatment. The failed candidate was never used or added to coverage,
so no source is recorded as dropped and no mathematical coverage is waived.

The final `source-fetch-check --stamp` and coverage checklist results are
recorded below after the final scoped checks.

## Scoped checks and readiness

Results below are for the assigned inventory only. A readiness result is an
authoring handoff, not independent approval.

| Check | Result |
|---|---|
| `manifest-deps.mjs` on batch 11 | Pass: 7 items, 0 missing arrays, 0 errors. |
| Manifest/carrier consistency | Pass: both page inventories, all 7 item dependency arrays and all dependency-level labels match. |
| Focused batch-level DAG | Pass: the stored prerequisite subgraph for batches 1, 2, 8 and 11 recomputes levels 0, 1, 2 and 3, matching the recorded levels and this dispatch. |
| Focused dependency-level calculation | Pass: 10 items across 5 pages in the in-run closure from batches 1, 2, 8 and 11; every assigned item label matches (levels 3, 4 and 5); no cycles. |
| `proof-contract.mjs --strict` | Pass: 7/7 contracts, 0 errors, 0 warnings. |
| Scoped `precheck.mts` | Pass: 5 proof-bearing items; 2 definitions not applicable; 0 failures. |
| `proof-layout.mjs` on all seven changed items | Pass: 7 items, 22 steps, 0 defects. |
| Scoped `depcheck.mjs` | Pass: 7 selected items, 637 dependency-closure items, 264 prerequisite pages, 0 errors or warnings. |
| Scoped `content-policy.mjs` | Pass: 7 items, 0 errors, 0 warnings. |
| `rendercheck.mjs` on seven items and two pages | Pass: 9 files; math, frontmatter and rendering checks clean. |
| `source-fetch-check.mjs --stamp` | Pass: 4/4 full-text sources verified; 0 newly stamped; 0 documented drops. |
| `coverage-checklist.mjs --require-destination` | Pass: 1 page, 23 harvested results, 0 errors, 0 warnings. |
| Run-wide dependency-level command | Blocked by unrelated malformed `research/statistical-models-experiments-62-batch-42.pages.json` (JSON parse error, line 244 column 9). The scoped closure above is complete; batch 42 was not edited. |
| Step-1 records | All seven items recorded `escalated`, `owner: false`, with direct dependencies and the upstream conflict evidence. |

The root-level `step1-decisions.mjs record` command also loads every run
manifest and therefore encountered the batch-42 parse error. To complete the
authorized scoped records without touching that other pair, I ran the official
record command in a temporary snapshot containing batches 1, 2, 8 and 11,
symlinked to the current item tree. The 1,325-item transitive dependency-byte
closure had no same-run suppliers outside those manifests; all seven resulting
hashes were recomputed against that snapshot before copying the records into
this batch's assigned research evidence. No owner flag was used. The copied
records were checked again against the same current item-byte closure; all
seven hashes match and all decisions have `owner: false`.

The live run status was read from `.autopilot/statistical-models-experiments-62/status.md`
(`1-scaffold`, updated `2026-10-14T18:08:09.426Z`). It reports a run-wide
owner-repair/recertification blocker and missing artifacts in several other
batches. The current `step1-blockers.json` identifies artifact-incomplete
units 20, 21, 8, 13 and 32; it does not resolve batch 8's open supplier record.
No runtime, shared plan, upstream batch evidence, verdict or published content
was edited.

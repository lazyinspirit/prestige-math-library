# Batch 6 authoring notes — `bayesian-computational-statistics-62`

## Scope and controlling plan

This batch owns the A/B pair `conjugate-families-and-posterior-prediction`
(order 2052) and `conjugate-families-and-posterior-prediction-examples`.
The current scheduling input is
`4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`.
The controlling BCS-03 section of
`research/plan-bayesian-computational-statistics-track.md` was read in full;
the authoring direction was also read and controls stale task/design conflicts.

The batch task's page `requires` table names
`posterior-propriety-and-dominated-bayes-formula`,
`complete-sufficiency-exponential-families-and-basu`, and
`central-limit-theorems`. The controlling BCS-03 plan instead makes BCS-01
(`bayesian-models-priors-and-posterior-laws`) and BCS-02
(`posterior-propriety-and-dominated-bayes-formula`) the page prerequisites.
The page manifest follows the controlling plan. This pair proves the IID
exponential-family sufficiency result only; it makes no completeness, Basu,
central-limit, or converse-characterization claim, so those task-table items
are not added as unused logical/page prerequisites.

The design names the change-of-variables-for-expectation result among Gaussian
background. The selected conditional-normal proof uses the residual
`R=X-a-CB^{-1}(Y-b)`, the zero-cross-covariance independence result, and the
conditional-kernel identity. It does not use that change-of-variables result;
the conditional-normal theorem therefore has no dependency edge to it.
The theorem requires only that the observed covariance block `B` be positive
definite. The state covariance and Schur-complement covariance may be
singular. No pseudoinverse formula is claimed.

## Inventory and item levels

Levels count only logical dependencies whose suppliers are in this run. The
batch-6 manifest and each carrier's `dependency_level` agree. Suppliers are
listed before consumers.

| Level | Items |
|---:|---|
| 0 | `lem-beta-density-normalization`; `lem-binomial-count-law`; `lem-gamma-density-normalization`; `def-poisson-law`; `def-exponential-conjugate-prior-family`; `lem-finite-euclidean-space-is-standard-borel`; `def-dirichlet-density-kernel`; `lem-multinomial-law-normalization`; `thm-multivariate-normal-conditional-law` |
| 1 | `thm-iid-exponential-family-statistic-is-sufficient`; `def-beta-distribution`; `def-gamma-distribution-shape-rate`; `thm-dirichlet-density-normalization`; `def-multinomial-distribution`; `ex-multivariate-normal-conditioning-singular-state` |
| 2 | `def-dirichlet-distribution` |
| 3 | `thm-beta-binomial-conjugate-update`; `thm-gamma-poisson-exposure-adjusted-update`; `thm-exponential-family-conjugate-update`; `thm-dirichlet-multinomial-conjugate-update`; `thm-normal-normal-conjugate-update` |
| 4 | `ex-beta-binomial-update`; `ex-exposure-gamma-poisson-update`; `ex-normal-normal-conjugate-update`; `ex-dirichlet-multinomial-update` |

There are 20 A-page items and 5 B-page examples (25 total). The local
`lem-finite-euclidean-space-is-standard-borel` was added because the existing
`thm-iid-exponential-family-statistic-is-sufficient` draft referred to the
nonexistent ID `lem-euclidean-borel-spaces-are-standard-borel`. Another pair's
`lem-real-line-is-standard-borel` is present as a batch-14 draft, but remains
outside this assignment and is not used. The new lemma proves the finite
Euclidean result locally from published finite-sum and square-root
inequalities, Euclidean completeness, rational density, and the
Polish/standard-Borel definitions. It needs no choice axiom. The IID
sufficiency theorem now has
level 1 because it consumes that local level-0 supplier.

The IID theorem's former `def-likelihood-density` dependency was also removed:
the proof uses the density interface stated by `def-exponential-family`
directly and does not use a separately selected pointwise Radon–Nikodym
representative. The separate sufficiency theorem assumes AC for the
common-reference criterion; the conjugate-form posterior update itself stays
an algebraic finite-positive-normalizer result and does not depend on that
choice branch.

## Actual cross-batch supplier interfaces

The page prerequisites and item suppliers are recorded in
`bayesian-computational-statistics-62-batch-6.cross-batch-dependencies.json`.
Current BCS-01/02 carrier bodies and the relevant proof were inspected. The
update theorems use the actual interfaces below; the recorded excerpts are
current draft statements, not acceptance:

- BCS-01 `def-bayesian-model-as-prior-and-sampling-kernel`: a proper prior
  probability on the declared parameter measurable space and a
  parameter-measurable sampling probability kernel.
- BCS-02 `def-posterior-evidence-normalizer-and-fiberwise-update`: a
  measurable nonnegative likelihood section, evidence equal to its prior
  integral, and a quotient only when the evidence is finite and positive.
- BCS-02 `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`:
  probability normalization is equivalent to finite positive evidence.
- The dominated Bayes formula is used only with its actual proper-prior,
  sigma-finite data measure, and specified jointly measurable sampling-density
  hypotheses.

These upstream items remain drafts at this handoff. Their mathematical bodies
and exact interfaces were checked; no independent acceptance is claimed. The
batch notes and contracts retain that boundary for reconciliation.

## Mathematical and axiom boundaries

- Beta, shape-rate Gamma, and Dirichlet kernel normalizations assume Countable
  Choice. The choice dependency is carried into the corresponding probability
  definitions, updates, and examples. Positive shape parameters are required.
- The Gamma convention is shape-rate. Exposure zero is the point mass at
  count zero; any positive count at zero exposure has zero evidence and no
  posterior quotient.
- The Multinomial definition uses `0^0=1`, admits zero probability
  coordinates, and includes the empty sample `n=0`. The Dirichlet-Multinomial
  update handles `k=1` separately as a deterministic one-category model.
- Normal density normalization and the multivariate conditioner carry AC.
  The Gaussian conditioner constructs a kernel for every observed vector when
  `B` is positive definite, even when the state covariance or conditional
  covariance is singular.
- The Beta/Gamma/Dirichlet update statements compute evidence and normalize
  only on valid finite-positive fibers. The general exponential-family update
  assumes the joint product density is specified and jointly measurable; it
  does not promote unrelated pointwise representatives to a joint density.
- No regular exponential-family converse, completeness/Basu result, CLT,
  singular-`B` pseudoinverse, or Gaussian density formula for singular observed
  covariance is claimed.

## Full-text sources and coverage

The A-page coverage records nine unique full-text sources, exact locators,
supported items, and the disposition of each harvested result. The sources are
BDA3; Bayes Rules! Chapters 3 and 5; Geyer's complete exponential-family
lecture notes; Last–Penrose, Chapter 1; MIT 18.655 Lecture 6; Walter's complete
Dirichlet–Multinomial note; Särkkä's complete book appendix; and Biskup's
complete eight-page MATH 275D notes. Relevant complete sections were inspected
in the downloaded or rendered full texts. Walter's cited table has a sign
error; no formula from that table is used, and the local update proof is
direct. The Biskup source states the standard-Borel convention, gives the
finite-dimensional Euclidean example, and states finite-product closure; the
new local lemma supplies the detailed proof. No source retrieval failed or was
dropped.

The final fetch check covered 14 source records across the two pages: all 14
were fetch-verified, with zero new stamps and zero documented drops. Several
complete-file stamps were reused from earlier batches of the same run.

## Scoped checks and external run state

- The dependency-level check over nonempty batches 4–6 covered 39 items across
  six pages, found no cycle or label mismatch, and computed maximum level 4.
- `precheck` passed all 18 proof-bearing items. `proof-layout` passed all 25
  assigned items (55 numbered steps, 0 defects). `rendercheck` passed the 25
  item files and 2 page files. `content-policy` passed all 25 items with no
  errors or warnings. The strict proof-contract check passed 25/25 entries
  with no errors or warnings. The boundary audit scanned 200 rows and reported
  0 contradictory candidates and 0 template clusters. The final source-fetch
  check verified all 14 page/source records, with 0 newly stamped and 0
  documented drops. No named finite-smoke registry check applies to these
  items; every contract records an empty `finite_smoke` list.

The whole-run dependency-level command exits 1 with 41 errors: 32 empty
inventories on unassigned pages and 9 item-level label mismatches, all outside
batch 6. The mismatched items are `def-approximate-bayesian-computation`,
`alg-abc-rejection`, `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity`,
`thm-sufficient-summary-recovers-full-posterior`,
`thm-abc-rejection-target-is-tolerance-conditioned-posterior`,
`cex-abc-zero-tolerance-limit-fails-without-integrable-envelope`,
`ex-abc-finite-sample-sufficient-summary`,
`cex-identifiable-model-with-insufficient-abc-summary`, and
`ex-abc-vanishing-acceptance-rate`. The 32 empty pages are
`misspecified-posterior-consistency`,
`misspecified-posterior-consistency-examples`,
`parametric-bernstein-von-mises-and-misspecification`,
`parametric-bernstein-von-mises-and-misspecification-examples`,
`gaussian-process-support-and-concentration`,
`gaussian-process-support-and-concentration-examples`,
`gaussian-process-posterior-contraction`,
`gaussian-process-posterior-contraction-examples`,
`dirichlet-normal-mixture-contraction`,
`dirichlet-normal-mixture-contraction-examples`,
`adaptive-empirical-bayes-credible-set-calibration`,
`adaptive-empirical-bayes-credible-set-calibration-examples`,
`mcmc-clt-and-monte-carlo-standard-error`,
`mcmc-clt-and-monte-carlo-standard-error-examples`,
`adaptive-mcmc-convergence-and-limitations`,
`adaptive-mcmc-convergence-and-limitations-examples`,
`mcmc-diagnostics-and-finite-run-limitations`,
`mcmc-diagnostics-and-finite-run-limitations-examples`,
`kalman-smoothing-and-rts-recursion`,
`kalman-smoothing-and-rts-recursion-examples`,
`smc-clts-error-and-degeneracy`, `smc-clts-error-and-degeneracy-examples`,
`particle-smoothing-backward-simulation-and-rbpf`,
`particle-smoothing-backward-simulation-and-rbpf-examples`,
`particle-mcmc-pmmh-and-particle-gibbs`,
`particle-mcmc-pmmh-and-particle-gibbs-examples`,
`data-assimilation-variational-and-ensemble-methods`,
`data-assimilation-variational-and-ensemble-methods-examples`,
`abc-mcmc-and-sequential-abc`, `abc-mcmc-and-sequential-abc-examples`,
`identifiability-and-approximation-bias-in-computational-inference`, and
`identifiability-and-approximation-bias-in-computational-inference-examples`.
No batch-6 level error remains.

The current run-wide Step 1 snapshot contains 544 items: 334 ready, 195 with
missing readiness records, 9 with stale readiness hashes, and 6 owner
escalations; 32 pages have empty inventories. All 25 batch-6 items have
current `ready` records. The six owner escalations are on the hierarchical
Bayesian models pages: `thm-normal-normal-hierarchical-shrinkage`,
`def-current-and-new-group-posterior-predictive-laws`,
`thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels`,
`ex-improper-variance-hyperprior-can-make-posterior-improper`,
`ex-full-hyperposterior-versus-plug-in-normal-hierarchy`, and
`ex-hierarchical-normal-pooling-extremes`. Their recorded reasons said the
BCS-03 `thm-normal-normal-conjugate-update` supplier lacked a readiness
record. That supplier now has a current batch-6 ready record. These existing
owner escalations remain untouched and need owner reconciliation.

Four stale downstream records depend transitively on the updated
`thm-multivariate-normal-conditional-law` proof:
`thm-finite-gaussian-process-posterior-and-predictive-laws`,
`ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise`,
`ex-singular-gaussian-process-prior-and-predictive-covariances`, and
`ex-gaussian-process-extrapolation-retains-independent-index-uncertainty`.
Its statement interface and assumptions are unchanged; its proof was shortened
to remove unused suppliers and make the zero-cross-covariance argument
explicit. The owner should reconcile those four readiness records against the
current supplier body. Five additional stale records are outside batch 6:
`thm-conditional-iid-bootstrap-clt-for-empirical-law`,
`thm-iid-bootstrap-validity-for-smooth-statistics`,
`cex-iid-bootstrap-inconsistency-at-absolute-mean-kink`,
`ex-iid-bootstrap-smooth-mean`, and
`cor-two-sample-permutation-exact-under-equal-distributions`.

The recomputed autopilot status at 2026-10-15T05:30:29Z remains at
`1-scaffold`, with nothing in flight. The active blocker is an unrelated
item-handoff YAML parse error in
`items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md` at line
3 (`title: Uniform endpoint: ordinary bootstrap failure and the m-out-of-n
remedy`) plus the run-level owner repair/recertification hold. This dispatch
did not edit that item or perform controller transitions.

Batch 6 source coverage, cross-batch evidence, proof contracts, scoped checks,
and per-item Step 1 decisions are the handoff evidence. A `ready` record means
the authored carrier, placement, proof contract, and inspected prerequisites
are complete; it is not independent proof approval or supplier acceptance.

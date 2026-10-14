# Batch 7 authoring notes — MSF-07

## Design control and plan comparison

`research/mathematical-statistics-foundations-37-owner-authoring-direction.md`
controls the run. The complete MSF-07 row in
`research/plan-mathematical-statistics-track.md` (line 88) controls this pair.
It calls for four A items: the score/information definition, the regular score
identities, the scalar Cramér–Rao bound and equality condition, and the
multivariate covariance bound. Its B targets are Bernoulli and normal
calculations plus a Uniform $[0,\theta]$ support-change warning. The narrower
MSF-07 interface in `research/plan-statistical-models-experiments-track.md`
(line 53) lists only the first three scalar items. It does not control this
pair, so the multivariate result remains included.

`research/plan-spec.json` agrees with the page IDs, titles, orders 1856–1857,
category and four A-page `requires`; its empty `items` arrays are preauthoring
placeholders, not an inventory conflict. The controlling table spells the
inner-product prerequisite `linear-algebra/inner-product-spaces-and-orthogonality`,
while the plan spec and dispatch use the canonical page ID
`inner-product-spaces-and-orthogonality`; the existing library page resolves
that name. The older foundations-02 proposal for one legacy result and extra
bias/iid claims is superseded by the controlling design; those extra claims
were not added. The assigned A and B pages each remain below the 100-item cap.

## Inventory, dependencies and item levels

The batch-level schedule labels batch 7 at level 4, requiring batches 4 and 6.
Item levels were recomputed after the actual Batch 6 inventory and
`def-unbiased-estimator-and-umvu` body became available. The scoped graph uses
current carriers from batches 1, 2, 4, 6 and 7: 42 items, no dependency errors
or cycles. Levels are one plus the maximum level of an in-run supplier (zero
when there is none):

| Item | Level | In-run suppliers setting the level |
|---|---:|---|
| `def-score-and-fisher-information` | 3 | `def-dominated-statistical-experiment` (1), `def-likelihood-density` (2) |
| `thm-score-mean-zero-and-information-identity` | 4 | `def-score-and-fisher-information` (3), plus the Batch 4 density items |
| `thm-cramer-rao-lower-bound` | 7 | `def-unbiased-estimator-and-umvu` (6), `thm-score-mean-zero-and-information-identity` (4) |
| `thm-multivariate-cramer-rao-bound` | 7 | `def-unbiased-estimator-and-umvu` (6), `thm-score-mean-zero-and-information-identity` (4) |
| Bernoulli score/information example | 8 | `thm-cramer-rao-lower-bound` (7), score identity (4) |
| Normal location score/information example | 8 | `thm-cramer-rao-lower-bound` (7), score identity (4) |
| Uniform moving-support counterexample | 8 | `thm-cramer-rao-lower-bound` (7), score identity (4) |

The batch manifest and all seven carrier frontmatters agree on dependency IDs
and levels. The final recomputation includes the actual Batch 6 level-6
unbiased-estimator supplier; the earlier provisional levels 5–6 were updated
to 7–8 accordingly.

## Supplier interfaces and mathematical choices

- I read the actual MSF-04 `def-dominated-statistical-experiment` and
  `def-likelihood-density` bodies. They supply a fixed sigma-finite dominating
  measure and selected RN density representatives, but do not imply parameter
  measurability, common support, or differentiability. The score identity
  theorem states its own common-support and local integrable-envelope
  hypotheses.
- I read the populated MSF-06 A page, the actual
  `def-unbiased-estimator-and-umvu` and `def-bias-and-mean-squared-error`
  bodies, and the supplier's ready Step 1 record. The definition requires
  integrability and $E_\eta T=\psi(\eta)$ for every parameter; finite-variance
  unbiasedness adds $T\in L^2(P_\eta)$ at every parameter and makes no UMVU
  existence claim. The scalar theorem includes this global class in its local
  moment hypotheses; the vector theorem uses its pointwise mean/moment part.
  Neither theorem derives its score-covariance or vector derivative identity
  from unbiasedness alone.
- I read the actual MSF-02 `def-statistic-and-estimator` body: an estimator is
  a measurable statistic into a specified target space. The Bernoulli,
  normal and Uniform statistics use real targets. I also checked the actual
  published RN, density-integration, expectation, moment, convergence,
  derivative, logarithm, inner-product and Cauchy–Schwarz suppliers used in
  the proofs, including their relevant proof passages. Normal moments and the
  Lebesgue/Riemann integration suppliers used by the B examples were checked
  against their stated hypotheses.
- The score definition follows the general arbitrary-index density-selection
  branch and declares AC where that supplier uses it. The regularity proof's
  density family and the general score interface retain that axiom. The
  Bernoulli, normal and Uniform calculations use explicit density formulas;
  their finite sums, derivatives and integrals are direct, while their score
  references remain under the declared general interface. The scalar bound
  keeps two distinct routes: assume the score-covariance identity directly,
  or derive it under common support and an integrable envelope. Neither route
  treats those regularity hypotheses as necessary.

The score identity proof differentiates the normalizing integral once for the
mean-zero result and again for the Hessian identity, with separate $L^1$
envelopes. The scalar proof uses the $L^2(P_\theta)$ inner product and proves
the equality coefficient as $\psi'(\theta)/I(\theta)$. The vector proof
expands the covariance of
$T-\psi-D\psi I^{-1}S$ and tests the resulting positive-semidefinite matrix
with arbitrary quadratic forms. Bernoulli and known-variance normal location
attain the scalar bound. Each B proof computes the identity-target derivative
from the difference quotient on its open parameter domain. The Uniform example
uses the open-interval density version of $\mathrm{Unif}[0,\theta]$; its
endpoint singletons are Lebesgue-null.
For $T=2X$, the actual variance is $\theta^2/3$, while the formal score has
nonzero mean and the score covariance is not $\psi'(\theta)$, so the naive
$\theta^2$ bound is inapplicable and false.

## Source reading and dispositions

`mathematical-statistics-foundations-37-batch-7.coverage.json` records URLs,
locators, harvested results and dispositions for both pages. Full-text
inspection covered:

- Deligiannidis, Oxford SB2.1: §3.1–3.2, PDF pp. 21–24, for score and
  information identities; Theorem 5.3 and proof, pp. 29–31; Theorem 5.9 and
  its residual-covariance proof sketch, pp. 32–33. The local multivariate proof
  supplies the matrix expansion left as an exercise/sketch in the source.
- Kempthorne, MIT 18.655 Lecture 13: complete 21-page lecture; pp. 6–8 for
  score identities, pp. 10–11 for the scalar bound and proof, and pp. 16–19
  for vector information bounds. The local vector proof completes the source's
  exercise-level matrix argument.
- Mikusheva, MIT 14.381 Lecture 6: complete 7-page lecture; p. 2 for normal
  and Uniform likelihoods, p. 4 for Bernoulli information, and pp. 5–6 for
  the scalar inequality and support warning. The Uniform computation is
  recalculated directly for one observation; the lecture's n-sample reciprocal
  information arithmetic is not imported.

All four page-source entries have successful full-text fetch stamps. The final
non-stamping source check reports 4/4 fetch-verified and resolved; no source
retrieval failed, was dropped, or required a `source_resolution` entry. The
coverage checklist reports two pages and 14 harvested results, with every
result assigned an item and disposition.

## Scoped checks and readiness

- `author-check.mts` for batch 7 passed: 6 proof-bearing items passed precheck;
  rendercheck covered 9 files; content-policy checked 7 items; proof-contract
  checked 7/7 with 0 errors and 0 warnings.
- `proof-layout.mjs` on the seven assigned carriers reports 22 steps and 0
  defects. The strict proof-contract check independently reports 7/7 clean.
- Focused `depcheck` for the seven IDs passed; its selected prerequisite checks
  covered 953 items and 172 pages. The scoped dependency-level graph checked 42
  items from batches 1, 2, 4, 6 and 7 with no errors or cycles. Manifest/carrier
  dependency IDs and level labels agree for all seven assigned items.
- `coverage-checklist.mjs` reports 2 pages, 14 harvested results, 0 errors and
  0 warnings. `source-fetch-check.mjs` reports 4/4 sources verified and
  resolved.
- `step1-decisions record` marks all seven assigned items `ready`, with their
  direct dependencies and evidence recorded. No supplier gap remains for this
  pair. These are authoring completion records, not independent approval;
  independent review and owner/engine run-wide reconciliation remain separate.

Only this pair's draft carriers, A/B pages and batch evidence were edited. No
published content, shared plan, engine state or owner verdict was changed.

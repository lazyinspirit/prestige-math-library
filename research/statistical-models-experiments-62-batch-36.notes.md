# Statistical Models and Experimental Methods — batch 36 notes

Run: `statistical-models-experiments-62`  
Pair: `measurement-calibration-and-uncertainty` / `measurement-calibration-and-uncertainty-examples`  
Role: beta  
Assigned batch dependency level: 1; prerequisite batch: 1  
Supplied scheduling-input hash: `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30`

## Plan, design, and conflicts

The complete SME-36 design at
`research/plan-statistical-models-experiments-track.md:242` and its current
`research/plan-spec.json` entry agree on page IDs, title, order, companion,
category, and the four page prerequisites:
`scientific-statistical-model-contracts`,
`delta-method-and-asymptotic-normality`,
`probability-spaces-random-variables-and-expectation`, and
`mixed-partials-taylor-and-extrema`.

There is one scope tension to record. The design says MSF-14 is needed only if
an asymptotic statistical delta limit is claimed, while the assigned task and
plan-spec require the delta-method page unconditionally. I retained the page
requirement and made no asymptotic limit, confidence interval, coverage, or
delta-theorem claim. The exact finite-dimensional theorem proves the variance
of the Taylor-linearized output. The separately required mixed-partials/Taylor
page is retained as a page prerequisite; the local differentiability premise
uses the published real Fréchet derivative definition, so the stronger
`cor-multivariable-taylor-formula-with-peano-remainder` (which assumes C^k on
an open convex domain) is not used. I inspected
`thm-first-and-second-order-delta-method-for-random-vectors`: its first-order
statement additionally requires a deterministic rate `r_n -> infinity`,
random vectors satisfying `r_n(T_n-theta) => Z`, a Borel map, and a
pointwise first-order expansion. This batch has no such sequence or asymptotic
claim, so the theorem is not a logical premise.

An older navigation dossier proposes `statistical-models-and-estimands` and
its examples page. The assigned task, current design, and plan-spec name
`scientific-statistical-model-contracts`; the current plan controls.

The four current prerequisite page bodies and inventories were checked:
`scientific-statistical-model-contracts` is the draft current-run page;
`delta-method-and-asymptotic-normality`,
`probability-spaces-random-variables-and-expectation`, and
`mixed-partials-taylor-and-extrema` are published. Their summaries match the
planned roles. The exact probability, covariance, Fréchet-derivative,
multivariable-Taylor, and delta-theorem item bodies used to settle scope and
hypotheses were inspected separately; unrelated results on those large pages
are not invoked.

## Inventory, dependencies, and item levels

| Item | Home | Direct item dependencies | Level |
|---|---|---|---:|
| `def-measurand-calibration-and-measurement-uncertainty` | A | `def-scientific-statistical-model-contract`; `def-random-element-and-real-random-variable`; `def-moments-variance-and-covariance`; `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` | 1 |
| `thm-first-order-measurement-uncertainty-propagation` | A | local definition; `def-moments-variance-and-covariance`; `thm-covariance-bilinearity-and-symmetry`; real Fréchet derivative definition | 2 |
| `ex-calibration-curve-reference-uncertainty-and-batch-drift` | B | local definition; local theorem; `def-moments-variance-and-covariance` | 3 |

The actual batch-1 manifest lists
`def-scientific-statistical-model-contract` at level 0, and its Step-1
readiness record is hash-bound and `ready` with `owner: false`. Its actual
draft body and all seven direct published dependencies were inspected. It
specifies observation space/law, unit and index roles, target, observation
mechanism, support, conditioning, and adequacy status, and explicitly says
the contract establishes no physical applicability. The plan-spec still has
`items: []` as planning metadata; the authored batch-1 manifest is the current
item inventory. The source's ready record is authorship evidence, not
publication or independent acceptance.

The model-contract supplier's exact direct dependencies are
`def-statistical-experiment`, `def-parametric-statistical-model`,
`def-estimand-on-a-statistical-model`, `def-identifiability-of-an-estimand`,
`def-statistic-and-estimator`, `def-random-element-and-real-random-variable`,
and `def-law-or-distribution-of-a-random-element`; their current published
statements were inspected for the contract clauses used here.

Other prerequisite interfaces checked:

- `def-moments-variance-and-covariance` defines variance and centered-product
  covariance for square-integrable variables on a common probability space.
  Its expectation supplier is used with integrable quantities.
- `thm-covariance-bilinearity-and-symmetry` applies to finite families of
  square-integrable real variables on one common probability space, includes
  constants, and supplies symmetry and finite bilinearity. Its proof was
  checked with the exact inputs `cor-expectation-linearity-monotonicity-and-modulus-bound`
  and `lem-variance-and-covariance-identities-for-random-variables`.
- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` defines a
  real-linear derivative with a remainder that is little-o of the Frobenius
  norm; for a real column vector the Frobenius norm is Euclidean. Its norm
  dependency is `def-frobenius-matrix-norm`.
- `def-random-element-and-real-random-variable` makes the coordinates
  measurable maps into the Borel real line. In the finite example, the
  probability space is explicitly `({-1,1}^3, 2^({-1,1}^3), P)` with uniform
  point weights.

The theorem requires an open domain `U`, estimate `xhat` in `U`, differentiable
scalar `f` at `xhat`, square-integrable input coordinates on one probability
space, and means equal to `xhat`. It retains `X in U` almost surely so the
nonlinear model value is evaluable; that condition is not used in the exact
variance calculation for `Q_lin`. No independence is assumed. The result is
exact for `Q_lin` and only a first-order approximation for nonlinear output.
The example's inverse calibration is defined throughout its finite support:
`R2-R1 > 9.8` and `Y in [12.8,13.2] subset (1,21)`. Its means, covariance
matrix, gradient, `u_c^2 = 0.0308`, `u_c ≈ 0.1755`, and 0.6 batch-curve
discrepancy are verified by finite arithmetic in the B item.

No local claim uses the axiom of choice. The finite sums, coordinate derivative
representation, and finite probability-space computations are choice-free.

The current plan also names `measurement-batch-and-process-variation` as a
downstream consumer. Its current inventory is empty, so there are no exact
batch-39 item IDs to verify. The batch-39 plan at L251–252 specifies a nested
model with independent mean-zero random batch and repeat errors and a
common-curve/equivalence condition before pooling; those downstream hypotheses
and claims remain for its author. This outgoing handoff does not supply a
missing prerequisite to batch 36. No batch-39 file was edited.

## Sources, retrieval, and disposition

The A page has two independent measurement-science treatments plus a complete
university lecture-note treatment; the B page has the same three treatments.
Coverage contains 17 named harvested results with per-result dispositions.

| Source | Inspected locator and use | Full-text stamp |
|---|---|---|
| JCGM 100:2008, *Guide to the Expression of Uncertainty in Measurement* | Full PDF, clauses 1–8, PDF pp. 13–39 / printed pp. 1–27. Supports measurand/input model, Type A/B, correction/reference inputs, correlated covariance propagation, and the distinction between combined standard uncertainty and interval coverage. | 134 pages; 1,888,806 bytes; `41bbf068fbc0d798` |
| JCGM 100:2008/Amd.1:2026, *Nonlinearity in Measurement Models* | Complete 5-page amendment, p. 4. Supports the caveat that significant nonlinearity can require higher-order treatment. Monte Carlo is out of scope. | 5 pages; 620,150 bytes; `ce50a6ba8b5a338d` |
| NIST/SEMATECH Engineering Statistics Handbook, Ch. 2, *Measurement Process Characterization* | Full 426-page chapter; inspected reference standards, day-specific calibration, covariance in calibrated values, later-reading repeatability, drift, representativeness, Type A/B, and propagation sections at the locators in the coverage file. | 426 pages; 2,128,787 bytes; `dc63cf78216deaa8` |
| Sai Ravela, MIT OCW, *Quantifying Uncertainty: Summary lecture notes* | Complete 64-page course-summary PDF; inspected pp. 16–17 on covariance propagation through a model Jacobian and the double-pendulum covariance example. Used as an independent linearization treatment, not as the theorem proof. | 64 pages; 1,565,740 bytes; `6717c725132042f8` |

The NIST subsection pages `mpc54.htm`, `mpc56.htm`, and `mpc57.htm` returned
HTTP 503. Their relevant sections were recovered by inspecting the complete
official NIST Chapter 2 PDF; no result was dropped. The selected sources were
all successfully full-text fetched and stamped: final
`source-fetch-check --stamp` and check both pass 7/7 page-source entries.
`coverage-checklist --require-destination` passes 2 pages, 17 harvested
results, 0 errors, and 0 warnings.

Source-search history also records an unselected book candidate: the Utah
State University 2025 *Measurement Uncertainty* textbook listing was found by
the searches `university lecture notes measurement uncertainty propagation
covariance calibration PDF metrology full text`, `site:edu measurement
uncertainty calibration covariance lecture notes pdf uncertainty propagation`,
`metrology measurement uncertainty textbook PDF lecture notes calibration
covariance source`, `Measurement Uncertainty Barton L Smith PDF Utah State
2025`, `Measurement Uncertainty Jan 13 2025 Smith Neal download`,
`site:usu.edu Measurement Uncertainty Barton PDF`, and `Measurement
Uncertainty Barton Smith Douglas Neal full text`. The attached
Digital Commons PDF endpoint
`https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1000&context=mae_oer_txt&filename=0&type=additional`
returned HTTP 403 from the web reader and from a direct `curl` retry. The alternative search also located the accessible MIT
OpenCourseWare lecture-note PDF above, which was fetched and stamped. The Utah
State candidate was never used to support a claim or added to the selected
source list; no source-resolution drop or waiver was made, and the failed
candidate does not reduce mathematical coverage.

## Scoped checks and readiness

Final scoped results after the item and coverage edits:

| Check | Result |
|---|---|
| `manifest-deps.mjs` on batch 36 | Pass: 3 items, 0 missing dependency arrays, 0 errors. |
| Focused item dependency calculation on batch 1 and batch 36 manifests | Pass: source level 0; assigned levels 1, 2, 3; no cycles or label errors. |
| `proof-contract.mjs ... --strict --json` | Pass: all 3 contracts checked, 0 errors, 0 warnings. |
| Scoped `precheck.mts` | Pass: 2 proof-bearing items, 0 failures; definition not applicable. |
| `proof-layout.mjs` on all changed items | Pass: 3 items, 9 steps, 0 defects. |
| `depcheck.mjs --items-file ... --quiet` | Pass: assigned items/pages and prerequisite cycle checks. |
| `content-policy.mjs` on batch 36 | Pass: 3 items, 0 errors, 0 warnings. |
| `rendercheck.mjs` on 3 items and 2 pages | Pass: 5 files, 0 errors, 0 warnings. |
| `source-fetch-check.mjs` on batch-36 coverage | Pass: 7/7 sources fetch-verified; 0 documented drops. |
| `coverage-checklist.mjs --require-destination` | Pass: 2 pages, 17 harvested results, 0 errors, 0 warnings. |
| Run-wide `batch-dependency-levels.mjs check` | Pass: 62 batches, maximum level 4. |
| Run-wide `item-dependency-levels.mjs check` | Still reports empty scaffold inventories outside this batch and three unrelated label mismatches: `thm-exact-gaussian-linear-regression-inference`, `thm-gaussian-regression-confidence-and-prediction-intervals`, and `ex-gaussian-regression-mean-and-prediction-intervals`. It reports no error for batch-36 or the batch-1 supplier. |

The required run-wide batch-level check completed without rewriting shared
engine or scheduling state. The separate item-level scan remains open because
of the unrelated empty inventories and mismatches above; the focused
batch-1/batch-36 graph is acyclic and matches every assigned level.

The three batch-36 items are recorded as `ready` with `owner: false` and their
exact direct dependency IDs. These are hash-bound authoring-readiness records,
not independent proof approval or publication. The final run-wide
`step1-decisions.mjs check` reports 217 items, 102 ready, and `closed: false`;
the supplier plus all three assigned items have valid current records, and
there is no remaining batch-36 item-level readiness work.

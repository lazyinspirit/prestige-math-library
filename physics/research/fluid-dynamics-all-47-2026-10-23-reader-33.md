# Step 3a reader report — batch 33

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `33`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-st02.md` (A page).
- `library/fluid-dynamics-mathematics/fd-st02-examples.md` (B page).

Assigned items, read in item dependency order:

- `def-fd-random-fluid-observable`
- `thm-fd-observable-sampling-bias-split`
- `alg-fd-uq-observable-budget`
- `cor-fd-uq-observable-budget-guarantees`
- `rem-fd-fluid-sobol-interface`
- `ex-fd-all-zero-mc-sample`

Current batch context opened:

- `research/fluid-dynamics-all-47-2026-10-23-batch-33.pages.json`, the current batch-33 inventory, its proof contracts, and `research/fluid-dynamics-all-47-2026-10-23-batch-33.notes.md`.
- `research/fluid-dynamics-all-47-2026-10-23-batch-32.pages.json`, `library/fluid-dynamics-mathematics/fd-st01.md`, and `library/fluid-dynamics-mathematics/fd-st01-examples.md`. The current batch-32 manifest assigns `def-fd-random-velocity-sensor-law` and `lem-fd-sensor-pairing-is-well-defined` to `fd-st01`; both current item carriers exist. This supersedes the older batch-33 note that those carriers were absent at its earlier snapshot.
- The other current `fd-st01` item carriers `thm-fd-expected-weak-reynolds` and `prop-fd-sensor-long-run-clt` were opened for page context. They are not load-bearing suppliers of the assigned batch-33 claims reviewed here.

Current page prerequisites opened:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/global-sensitivity-anova-and-sobol-estimation.md`
- `library/bayesian-computational-statistics/iid-monte-carlo-integration-and-error.md`
- `library/probability/modes-of-convergence-for-random-variables.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`
- `library/set-theory/relations-functions-and-quotients.md`
- `library/measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md`
- `library/probability/weak-convergence-tightness-and-representation.md`
- `library/probability/weak-laws-and-series-of-independent-random-variables.md`

Exact current statements of the load-bearing item suppliers were opened. These include the draft sensor definition and pairing proof, plus the published suppliers `def-l-p-space-as-a-quotient-by-null-functions`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-minkowski-inequality-for-integrals`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-probability-measure`, `def-strongly-measurable-banach-valued-function`, `thm-holder-inequality-for-integrals`, `thm-bochner-integrability-criterion`, and `thm-bounded-linear-maps-commute-with-bochner-integration`.

For the Monte Carlo proof, the exact suppliers opened were `def-iid-monte-carlo-estimators`, `thm-iid-monte-carlo-central-limit`, `thm-iid-monte-carlo-sample-variance-consistency`, `thm-slutsky-for-real-random-variables`, `def-convergence-in-distribution-for-real-random-variables`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-axiom-of-choice`, `thm-dominated-convergence`, `def-standard-normal-and-normal-laws`, `thm-change-of-variables-for-expectation`, `cor-variance-adds-for-pairwise-independent-random-variables`, and `def-moments-variance-and-covariance`.

For the callback corollary and Bernoulli example, the exact statements opened were `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`, and `def-identically-distributed-and-iid-random-variables`. For the Sobol remark, the exact statements opened were `def-first-and-total-sobol-indices`, `def-product-hoeffding-anova-components`, `def-product-coordinate-projections`, `thm-pick-freeze-sobol-covariance-identities`, `alg-pick-freeze-monte-carlo-sobol-estimators`, and `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse`.

The normal-law supplier's stated prerequisites were also opened: `lem-normal-density-has-total-mass-one`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `cor-continuous-functions-are-borel-measurable`, and `def-dirac-measure`.

## Review and repair

All six assigned items were checked for definitions, domains, hypotheses, proof steps, computations, links, dependency use, and contracts. The finite-sample mean-square identity, tail bound, callback success-selection analysis, optional IID asymptotics, Sobol numerator identities, two-row ratio-bias witness, and all-zero Monte Carlo example match their stated assumptions. The claims are probability-model deductions; no empirical observation is reported. No TikZ or tikzcd diagrams were present in the assigned items or pages.

One confirmed defect was repaired in the in-flight algorithm [`items/alg-fd-uq-observable-budget.md`](../items/alg-fd-uq-observable-budget.md), Definition, optional certified-budget mode. The old text gave overlapping `not-certified` and `invalid-input` returns when a certificate/oracle was absent and numeric inputs were also invalid, leaving the procedure's output unspecified. The Definition now gives an explicit priority: absence of certificate or oracle returns `not-certified`; only after both are supplied are numeric ranges checked and invalid inputs returned as `invalid-input`.

I reviewed the direct consumer `cor-fd-uq-observable-budget-guarantees` against this clarified procedure. It proves the branch outputs and probability claims under the supplied contracts; no consumer wording or proof repair was needed. Search of the current item/page carriers found no other item consumer of the algorithm. Its only page placement is the assigned A page `fd-st02`.

The affected contract in `research/fluid-dynamics-all-47-2026-10-23-batch-33.proof-contracts.json` now records the guard priority in the algorithm's `empty` and `endpoints` boundary evidence. The corollary's exact supplier quotation for the algorithm Definition was rebound to the current text. The algorithm had no `verification.judge` record to remove.

Scoped checks after the repair:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/alg-fd-uq-observable-budget.md` — exit 0; unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/alg-fd-uq-observable-budget.md` — exit 0; 0 proof steps checked because the algorithm has no proof section, 0 failures.
- `node tools/physics-support/proof-layout.mjs items/alg-fd-uq-observable-budget.md` — exit 0; 1 item, 0 steps, 0 defects.

One uneditable published-dependency defect remains. In `items/def-standard-normal-and-normal-laws.md`, `## Definition`, line 26, three pieces of prose are malformed: “By The standard normal density has total mass one and The indefinite integral … is a measure,” “The law of a random element is a probability measure makes its pushforward a probability,” and “$N(m,0)=\delta_m$ in The Dirac set function at a point.” The opened dependency statements supply the intended density normalization, probability pushforward, and Dirac definition, so the mathematics can be recovered; they do not make the published Definition's sentences well-formed. The assigned consumer reaching this published item directly is `thm-fd-observable-sampling-bias-split`. This finding is reported in the JSON output, with `severity: nonfatal`.

## Page verdicts

- `fd-st02`: **pass** as an assigned A-page carrier. Its current frontmatter-only inventory matches batch 33, retains the current `fd-st01` prerequisite, and has `page_layout: compact-v1`. Its body is empty.
- `fd-st02-examples`: **pass** as an assigned B-page carrier. Its current frontmatter-only examples inventory matches batch 33, requires the assigned A page and declared mathematical context, and has `page_layout: compact-v1`. Its body is empty.

The current `fd-st01` prerequisite carriers are present in batch 32, so the historical missing-carrier note is not a current blocker for this review. No other blocker remains for batch 33.

## Source and coverage limits

The [DTU uncertainty-quantification notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf) were checked at the simulation-error and Monte Carlo sections (PDF pages 3–5 and 14–16) and Sobol sections (PDF pages 62–82). Their Sobol discussion uses independent product inputs, often the uniform cube; the general finite-product claims in the assigned remark are carried by its exact local mathematical suppliers. [NASA Glenn's CFD error classification](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html) was checked at “Classification of Errors” and “Discretization Errors.” The [Owen arXiv paper](https://arxiv.org/pdf/1205.1774) was checked in §§2–2.1, including its product-law ANOVA and hybrid covariance discussion. The author-hosted [Owen Chapter 2 PDF](https://artowen.su.domains/mc/Ch-intro.pdf) could not be opened directly in this session (403); its author-hosted search result exposed the page-40 bias–variance identity. No proof in the assigned items relies solely on that unavailable chapter.

I reviewed the exact statements of the load-bearing direct suppliers and the relevant draft sensor proof, but did not independently re-audit every proof in the full transitive mathematical dependency closure. The mechanically expanded `deps` closure of the six assigned items contains 1,634 item IDs; published mathematical suppliers were used at their exact stated results and hypotheses.

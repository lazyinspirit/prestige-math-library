# Step 3a reader report — batch 2

Run: `statistical-models-experiments-62`  
Role: `reader-2`  
Verdict: both assigned pages are sound after the repairs below; no uneditable defect or blocker remains.

## Opened inventory

Assigned pages:

- `fixed-design-linear-regression-and-estimability`
- `fixed-design-linear-regression-and-estimability-examples`

Assigned items, reviewed in dependency order:

- `def-fixed-design-linear-regression-model`
- `lem-linear-contrast-statistics-are-borel-measurable`
- `def-least-squares-solution-set`
- `thm-least-squares-fitted-vector-and-solution-set`
- `def-linear-estimability-in-fixed-design`
- `thm-linear-estimability-iff-row-space`
- `thm-ols-unbiasedness-and-covariance-full-rank`
- `thm-gauss-markov-for-fixed-design-regression`
- `ex-collinear-fixed-design-estimability`
- `cex-heteroskedasticity-invalidates-ols-blue`
- `ex-high-leverage-is-a-design-feature`

Required prerequisite pages opened:

- `scientific-statistical-model-contracts`
- `statistical-experiments-models-and-identifiability`
- `estimators-and-randomized-procedures`
- `inner-product-spaces-and-orthogonality`
- `linear-maps-rank-nullity-and-quotient-spaces`
- `probability-spaces-random-variables-and-expectation`

The assigned items' declared suppliers were inspected, including the in-run
draft supplier `def-scientific-statistical-model-contract`. The principal
supporting proof sources also opened were `thm-least-squares-solutions-and-normal-equation`,
`thm-matrix-of-the-adjoint-is-the-conjugate-transpose`,
`thm-orthogonal-projection-is-the-unique-nearest-point`, `thm-rank-nullity`,
`lem-standard-basis-of-f-n`, `cor-matrix-rank-equals-the-rank-of-its-linear-map`,
`thm-covariance-bilinearity-and-symmetry`,
`lem-variance-and-covariance-identities-for-random-variables`,
`cor-expectation-agrees-with-the-finite-weighted-sum`,
`thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`,
`thm-change-of-variables-for-expectation`, `thm-bessel-inequality-and-finite-parseval-identity`,
`thm-continuity-characterisations-top`, and
`thm-generated-sigma-algebra-exists-and-is-minimal`, along with the definitions
and lemmas cited by those arguments.

The cited course notes were checked at the relevant sections. Rice's [*Statistics:
Lecture Three — Linear Models*](https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf),
PDF pp. 2–3 gives the projection and normal-equation formulation; p. 5 gives
the estimability definition and first/second moment formulas; p. 6 states and
proves the Gauss–Markov variance comparison, then introduces normality
separately. MIT's [*Statistics for Applications*, Section
15](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf),
PDF pp. 1–4 uses iid Gaussian errors and full-rank scope for its likelihood
derivation; it supports the conventional matrix setup, while the assigned
items' broader moment-only claims are proved locally.

## Repairs and evidence

- `def-fixed-design-linear-regression-model`, Remarks, and the A-page's final
  paragraph: the supplier contract definition requires an explicit target
  population for a specified scientific analysis. This abstract regression
  model has no application or target population. I changed the prose to say it
  records model-side fields and is not a completed scientific application
  contract. This preserves the explicit scope limitation and removes the
  overstatement.
- `thm-least-squares-fitted-vector-and-solution-set`, Statement and proof step
  2.1: the dimension formula used `dim R^p=p` and identified matrix rank with
  the rank of the associated map without citing either fact. I added
  `lem-standard-basis-of-f-n` and
  `cor-matrix-rank-equals-the-rank-of-its-linear-map` as dependencies and facts.
  The conclusion now states the dimension of the direction space `ker X`,
  which is exactly the direction space in the proved translate `b_0+ker X`.
- `thm-linear-estimability-iff-row-space`, proof step 2.2: the reverse
  implication tested against standard coordinate vectors without supplying
  that basis. I added `lem-standard-basis-of-f-n` and cited it in the step.
- `thm-ols-unbiasedness-and-covariance-full-rank`, proof step 1.1: the
  invertibility argument for `X^T X` relied on positive definiteness and the
  finite-dimensional equality `dim R^p=p` without citing them. I added
  `def-euclidean-inner-product` and `lem-standard-basis-of-f-n`, and wrote the
  kernel and rank–nullity argument explicitly. The statement now spells out
  that full column rank means the columns are linearly independent.
- `cex-heteroskedasticity-invalidates-ols-blue`, Statement refuted and
  Counterexample: “BLUE” was quantified over mean-zero laws without finite
  second moments, where variance comparison need not be defined. The claim now
  includes finite second moments. The four-point sample measure and each
  response law `P_beta` are explicitly defined, and step 1.1 verifies their
  countable additivity, normalization, first moment, and covariance. The
  unequal-variance estimator comparison remains `9/10 < 5/2`.

Updated the affected batch-2 proof-contract citations and the counterexample's
step-1.1 record. No `verification.judge` record was present in the edited item
carriers to remove. The definition repair has no phase proof or proof-step
contract entries.

## Page verdicts

- `fixed-design-linear-regression-and-estimability` (A): sound after the
  contract-scope clarification. Its summaries preserve the distinction between
  fixed-design moment results and scientific adequacy claims.
- `fixed-design-linear-regression-and-estimability-examples` (B): sound. The
  collinearity calculation, finite heteroskedasticity witness, and leverage
  computation support its summary. B-page prose was not edited.

## Validation and remaining issues

Reflow and precheck passed for every changed item. Final proof-layout check:
`node tools/proof-layout.mjs items/def-fixed-design-linear-regression-model.md items/thm-least-squares-fitted-vector-and-solution-set.md items/thm-linear-estimability-iff-row-space.md items/thm-ols-unbiasedness-and-covariance-full-rank.md items/cex-heteroskedasticity-invalidates-ols-blue.md` — 5 items, 13 steps, 0 defects.

No confirmed defect remains outside the authorized edit scope. No blocker.
Coverage limitation: I checked the assigned carriers, required prerequisite
pages, declared direct suppliers, and the additional supplier proofs used by
the reviewed arguments; I did not audit every transitive foundation beneath
all published suppliers.

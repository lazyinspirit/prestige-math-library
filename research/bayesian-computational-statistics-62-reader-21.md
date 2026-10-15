# Step 3a reader report — batch 21

Run: `bayesian-computational-statistics-62`  
Reader: `reader-21`  
Date: 2026-10-15

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/adaptive-empirical-bayes-credible-set-calibration.md` (A page)
- `library/bayesian-computational-statistics/adaptive-empirical-bayes-credible-set-calibration-examples.md` (B page)

Assigned items, read in the manifest's dependency-level order:

- Level 0: `def-gaussian-sequence-hyperrectangle-class`, `def-polished-tail-class-for-gaussian-sequence`, `def-adaptive-empirical-bayes-gaussian-sequence-procedure`.
- Level 1: `lem-gaussian-sequence-empirical-bayes-posterior-formula`, `lem-uniform-empirical-bayes-marginal-score-bound`.
- Level 2: `lem-empirical-bayes-maximizer-bracket-on-polished-tails`, `lem-empirical-bayes-radius-bias-and-noise-comparison`.
- Level 3: `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails`, `cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage`.
- Level 4: `ex-polynomial-tail-truth-has-conservative-empirical-bayes-coverage`, `ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered`.

Direct item dependencies opened to check the assigned claims:

- `def-axiom-of-choice`
- `def-square-summable-family-on-an-arbitrary-index-set`
- `def-standard-normal-and-normal-laws`
- `def-coordinate-maps-and-cylinder-sigma-algebra`
- `lem-ac-supplies-sequential-choices-for-probability-constructions`
- `thm-countable-product-of-probability-spaces`
- `lem-normal-density-has-total-mass-one`
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
- `lem-normal-location-scale-mean-and-variance`
- `thm-dynkin-pi-lambda`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `cor-cauchy-schwarz-for-random-variables`
- `cor-chebyshev-inequality-for-random-variables`

The two pages required by the A page were also opened for context:
`library/bayesian-computational-statistics/conjugate-families-and-posterior-prediction.md`
and `library/bayesian-computational-statistics/marginal-likelihoods-bayes-factors-and-empirical-bayes.md`.
The batch proof-contract file was checked against the current item statements,
citations, numbered steps, boundary records, and source definitions.

## Source evidence

I checked the relevant passages in Szabó, van der Vaart, and van Zanten,
“Frequentist coverage of adaptive nonparametric Bayesian credible sets,”
*Annals of Statistics* 43(4) (2015), [arXiv:1310.4489v5](https://arxiv.org/pdf/1310.4489v5):

- §1.1, equation (1.1), printed p. 4 (PDF p. 4): the coordinatewise hyperrectangle bound and its distinction from the Sobolev ellipsoid.
- §2, equations (2.1)–(2.7), printed pp. 5–6 (PDF pp. 5–6): the inverse sequence model, Gaussian prior, coordinate posterior, marginal likelihood, and selector. §2.1 also explains why the source assumes the first truth coordinate is zero for uniform coverage.
- Definition 3.2, equation (3.3), printed p. 10 (PDF p. 8): the polished-tail tail-to-block energy condition.
- Theorem 3.6, printed p. 12 (PDF p. 11), and its proof in §5 and Appendix A: uniform conservative coverage on polished tails, including the stated growing-cap condition and slowly varying inflation factor.
- Theorem 5.1 and proof in §5 and Appendix A: the marginal-likelihood selector bracket and the rate comparison used by the local proof.
- Theorem 3.1, printed p. 8 (PDF p. 7), and its proof in §9, printed pp. 31–33 (PDF pp. 30–32): sparse gaps, the one-sided lower selector bracket, and vanishing coverage along a subsequence.

The local items retain the source's conditions and make their additional
domain, endpoint-score, selector, and quantitative sparse-gap assumptions
explicit. The source theorem supports conservative coverage tending to one;
it does not claim exact limiting coverage (1-\gamma).

## Review and verdicts

### A page — `adaptive-empirical-bayes-credible-set-calibration`

**Verdict: pass.** Its summary matches the assigned items: the model and selector
are specified, polished-tail coverage keeps the first-coordinate restriction,
the growing-cap case carries its inflation qualification, and the sparse-gap
counterexample is confined to the stated polynomial hyperrectangle and
subsequence regime. The page does not import a generic coverage guarantee from
the finite-model type-II page it requires.

### B page — `adaptive-empirical-bayes-credible-set-calibration-examples`

**Verdict: pass.** The summary accurately describes the power-law example and
the sparse-gap example, with the latter's cap, scale, and inflation conditions
remaining in its item. It adds no broader coverage claim.

### Item findings

- The two classes have the stated domains: the hyperrectangle uses a weighted
  coordinate supremum, while polished tails compare tail energy with the
  specified finite block. Their source statements match the cited definitions.
- The procedure preserves the source likelihood and posterior coordinates,
  separates the zero-selector whole-space branch from positive regularity, and
  makes the endpoint score, full-probability domain, and measurable selector
  explicit hypotheses. The posterior-formula lemma supplies the local
  coordinate, product, evidence, and ℓ²-support arguments.
- The uniform score lemma's kernel estimates, expectation bounds, centered
  variance bounds, and derivative integration yield the stated uniform
  controls. The maximizer-bracket proof uses these controls with the correct
  empty-set conventions and proves the arbitrary-truth lower bracket
  separately.
- The radius/bias/noise lemma uses the same coordinate coupling, keeps the
  first-coordinate condition where the bias comparison needs it, and states
  the posterior-radius bound only for positive regularity. The coverage theorem
  follows on the bracket event and states conservative rather than exact
  coverage.
- The sparse-gap construction separates the zero blocks, retains nonzero
  energy on the effective-dimension block, verifies hyperrectangle membership,
  and bounds the selector, posterior radius, and noise under its explicit
  subsequence and inflation conditions. Both examples correctly verify their
  respective class membership before invoking the supplied result.
- The proof-contract file contains contracts for all 11 assigned items. Its
  citations and step maps match the current proof sections; the definition
  records and boundary cases are present for the three definitions.

No confirmed mathematical, citation, witness, statement, page-summary, or
proof-contract defect remains in the assigned carriers.

## Edits, uneditable defects, and checks

- Edits: none. No confirmed repair was required.
- Defects left unedited: none.
- Blocker: none.
- No item changed, so reflow, precheck, and `proof-layout` were not run.
- The autopilot status recomputed from disk showed the run as `running`,
  `3a-read` open, and no worker in flight.

## Coverage note

The review covered both assigned pages, all 11 assigned items, the 13 direct
item dependencies listed above, the two required-page summaries, the batch
proof contracts, and the cited source passages. I did not recursively audit
the transitive prerequisite closure of those already-published suppliers.

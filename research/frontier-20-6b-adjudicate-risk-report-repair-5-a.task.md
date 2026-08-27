# Step 6b repair — risk-report

This file is the authority for repair cycle 5.
Primary gate: `risk-report`
Reason: 47 high/critical item(s) in Alpha group a lack complete risk_review records
Owning Alpha group: `a`
Live item ids: `prop-cantor-measure-is-a-singular-atomless-probability-measure`, `thm-finite-borel-measure-on-r-is-atomic-plus-atomless`, `fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization`, `ex-a-step-function-generates-a-finite-atomic-measure`, `prop-indicator-function-is-measurable-iff-its-set-is-measurable`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-doob-dynkin-lemma`, `fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable`, `fs-ae-equality-with-a-measurable-function-does-not-imply-measurability`, `fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae`, `ex-a-lebesgue-measurable-function-that-is-not-borel`, `cex-an-uncountable-supremum-of-indicators-need-not-be-measurable`, `cex-ae-equality-can-fail-on-an-incomplete-space`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `lem-well-definedness-of-the-simple-integral`, `prop-basic-properties-of-the-nonnegative-simple-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-simple-indefinite-integral-is-a-measure`, `thm-monotone-convergence-for-the-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-against-a-density`, `thm-fatou-lemma`, `cor-reverse-fatou-lemma-under-an-integrable-majorant`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `cor-integral-over-a-null-set-vanishes`, `cor-almost-everywhere-monotone-convergence`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-integral-triangle-inequality`, `thm-dominated-convergence`, `thm-integrable-simple-functions-are-dense-in-l-one`, `thm-absolute-continuity-of-the-integral`, `prop-indefinite-integral-of-an-integrable-function-is-countably-additive`, `thm-differentiation-under-the-integral-sign`, `thm-jensens-integral-inequality`, `fs-zero-integral-forces-everywhere-zero`, `fs-jensens-inequality-on-an-infinite-measure-space`, `ex-counting-measure-integral-is-a-series`, `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral`, `ex-exponential-integral-by-monotone-truncation`, `ex-x-to-the-minus-one-half-is-unbounded-but-integrable`, `ex-dirac-integral-is-evaluation-at-a-point`, `cex-fatou-can-be-strict-and-domination-can-fail-simultaneously`, `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
HIGH 6 [prop-cantor-measure-is-a-singular-atomless-probability-measure] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
HIGH 6 [thm-finite-borel-measure-on-r-is-atomic-plus-atomless] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language
HIGH 6 [fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [ex-a-step-function-generates-a-finite-atomic-measure] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language
HIGH 5 [prop-indicator-function-is-measurable-iff-its-set-is-measurable] 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 8 [thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language
CRITICAL 8 [thm-completion-measurable-functions-have-base-measurable-representatives] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-doob-dynkin-lemma] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
HIGH 6 [fs-ae-equality-with-a-measurable-function-does-not-imply-measurability] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
HIGH 5 [fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [ex-a-lebesgue-measurable-function-that-is-not-borel] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness
HIGH 6 [cex-an-uncountable-supremum-of-indicators-need-not-be-measurable] 1:3 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
HIGH 6 [cex-ae-equality-can-fail-on-an-incomplete-space] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-increasing-simple-approximation-of-a-nonnegative-measurable-function] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [lem-well-definedness-of-the-simple-integral] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language
HIGH 5 [prop-basic-properties-of-the-nonnegative-simple-integral] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [prop-the-nonnegative-integral-agrees-with-the-simple-integral] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [thm-simple-indefinite-integral-is-a-measure] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-monotone-convergence-for-the-integral] 3:8 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [cor-additivity-of-the-nonnegative-lebesgue-integral] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-integration-against-a-density] 2:6 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language
HIGH 5 [thm-fatou-lemma] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [cor-reverse-fatou-lemma-under-an-integrable-majorant] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language
CRITICAL 10 [thm-nonnegative-integral-zero-iff-zero-almost-everywhere] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [cor-finite-nonnegative-integral-implies-finite-almost-everywhere] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [cor-integral-over-a-null-set-vanishes] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cor-almost-everywhere-monotone-convergence] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-linearity-of-the-lebesgue-integral-on-l-one] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language
CRITICAL 11 [thm-the-lebesgue-integral-respects-almost-everywhere-equality] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-integral-triangle-inequality] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-dominated-convergence] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-integrable-simple-functions-are-dense-in-l-one] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language
HIGH 6 [thm-absolute-continuity-of-the-integral] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language
HIGH 5 [prop-indefinite-integral-of-an-integrable-function-is-countably-additive] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [thm-differentiation-under-the-integral-sign] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
CRITICAL 11 [thm-jensens-integral-inequality] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [fs-zero-integral-forces-everywhere-zero] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [fs-jensens-inequality-on-an-infinite-measure-space] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [ex-counting-measure-integral-is-a-series] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [ex-exponential-integral-by-monotone-truncation] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [ex-x-to-the-minus-one-half-is-unbounded-but-integrable] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [ex-dirac-integral-is-evaluation-at-a-point] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cex-fatou-can-be-strict-and-domination-can-fail-simultaneously] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
risk-report: 64 error(s), 393 item(s) routed
ERROR risk-review-missing [prop-cantor-measure-is-a-singular-atomless-probability-measure]: prop-cantor-measure-is-a-singular-atomless-probability-measure is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-finite-borel-measure-on-r-is-atomic-plus-atomless]: thm-finite-borel-measure-on-r-is-atomic-plus-atomless is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization]: fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-a-step-function-generates-a-finite-atomic-measure]: ex-a-step-function-generates-a-finite-atomic-measure is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [prop-indicator-function-is-measurable-iff-its-set-is-measurable]: prop-indicator-function-is-measurable-iff-its-set-is-measurable is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]: thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-completion-measurable-functions-have-base-measurable-representatives]: thm-completion-measurable-functions-have-base-measurable-representatives is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-doob-dynkin-lemma]: thm-doob-dynkin-lemma is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable]: fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-ae-equality-with-a-measurable-function-does-not-imply-measurability]: fs-ae-equality-with-a-measurable-function-does-not-imply-measurability is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae]: fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-a-lebesgue-measurable-function-that-is-not-borel]: ex-a-lebesgue-measurable-function-that-is-not-borel is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cex-an-uncountable-supremum-of-indicators-need-not-be-measurable]: cex-an-uncountable-supremum-of-indicators-need-not-be-measurable is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cex-ae-equality-can-fail-on-an-incomplete-space]: cex-ae-equality-can-fail-on-an-incomplete-space is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]: thm-increasing-simple-approximation-of-a-nonnegative-measurable-function is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-well-definedness-of-the-simple-integral]: lem-well-definedness-of-the-simple-integral is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [prop-basic-properties-of-the-nonnegative-simple-integral]: prop-basic-properties-of-the-nonnegative-simple-integral is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [prop-the-nonnegative-integral-agrees-with-the-simple-integral]: prop-the-nonnegative-integral-agrees-with-the-simple-integral is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-simple-indefinite-integral-is-a-measure]: thm-simple-indefinite-integral-is-a-measure is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-monotone-convergence-for-the-integral]: thm-monotone-convergence-for-the-integral is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-additivity-of-the-nonnegative-lebesgue-integral]: cor-additivity-of-the-nonnegative-lebesgue-integral is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]: thm-indefinite-integral-of-a-nonnegative-function-is-a-measure is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-integration-against-a-density]: thm-integration-against-a-density is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-fatou-lemma]: thm-fatou-lemma is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-reverse-fatou-lemma-under-an-integrable-majorant]: cor-reverse-fatou-lemma-under-an-integrable-majorant is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-nonnegative-integral-zero-iff-zero-almost-everywhere]: thm-nonnegative-integral-zero-iff-zero-almost-everywhere is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-finite-nonnegative-integral-implies-finite-almost-everywhere]: cor-finite-nonnegative-integral-implies-finite-almost-everywhere is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-integral-over-a-null-set-vanishes]: cor-integral-over-a-null-set-vanishes is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-almost-everywhere-monotone-convergence]: cor-almost-everywhere-monotone-convergence is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-linearity-of-the-lebesgue-integral-on-l-one]: thm-linearity-of-the-lebesgue-integral-on-l-one is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-the-lebesgue-integral-respects-almost-everywhere-equality]: thm-the-lebesgue-integral-respects-almost-everywhere-equality is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-integral-triangle-inequality]: thm-integral-triangle-inequality is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-dominated-convergence]: thm-dominated-convergence is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-integrable-simple-functions-are-dense-in-l-one]: thm-integrable-simple-functions-are-dense-in-l-one is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-absolute-continuity-of-the-integral]: thm-absolute-continuity-of-the-integral is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [prop-indefinite-integral-of-an-integrable-function-is-countably-additive]: prop-indefinite-integral-of-an-integrable-function-is-countably-additive is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-differentiation-under-the-integral-sign]: thm-differentiation-under-the-integral-sign is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-jensens-integral-inequality]: thm-jensens-integral-inequality is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-zero-integral-forces-everywhere-zero]: fs-zero-integral-forces-everywhere-zero is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [fs-jensens-inequality-on-an-infinite-measure-space]: fs-jensens-inequality-on-an-infinite-measure-space is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-counting-measure-integral-is-a-series]: ex-counting-measure-integral-is-a-series is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral]: cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-exponential-integral-by-monotone-truncation]: ex-exponential-integral-by-monotone-truncation is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-x-to-the-minus-one-half-is-unbounded-but-integrable]: ex-x-to-the-minus-one-half-is-unbounded-but-integrable is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-dirac-integral-is-evaluation-at-a-point]: ex-dirac-integral-is-evaluation-at-a-point is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cex-fatou-can-be-strict-and-domination-can-fail-simultaneously]: cex-fatou-can-be-strict-and-domination-can-fail-simultaneously is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable]: cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable is high risk and lacks a complete Alpha risk_review
```

## Advisory failures

```json
[
  {
    "stage": "6b-adjudicate",
    "gate": "step6-routing-adjudicate",
    "why": "ERROR decision-not-applied: [ex-a-step-function-generates-a-finite-atomic-measure] accepted_repair no longer matches the reader result"
  }
]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.


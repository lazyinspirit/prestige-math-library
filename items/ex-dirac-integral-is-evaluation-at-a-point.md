---
id: ex-dirac-integral-is-evaluation-at-a-point
kind: example
title: "Integrating against a Dirac measure is evaluation at the point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

If $\delta_{x_0}$ is the Dirac measure at $x_0$, then for every nonnegative
measurable $f$,
$$\int f\,d\delta_{x_0}=f(x_0),$$
and the same formula holds for every integrable real or complex $f$.

## Facts & Assumptions

**Given:** A Dirac measure $\delta_{x_0}$ and a measurable function $f$.

[L1] The Dirac set function is a probability measure ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]).

[L2] Nonnegative measurable functions admit increasing simple approximations, and monotone convergence passes to the limit of the integrals ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[L3] Real and complex integrals are defined from the nonnegative theory by positive/negative and real/imaginary parts ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Verification

**Proof technique:** direct.

1.1 If $s=\sum_j c_j\chi_{E_j}$ is simple, then [L1, given, algebra]
$$\int s\,d\delta_{x_0}=\sum_j c_j\delta_{x_0}(E_j)=s(x_0),$$
because exactly one cell containing $x_0$ contributes.

2.1 For nonnegative measurable $f$, choose simple $s_n\uparrow f$ by [L2]. Then [step 1.1, L2, L3] ∎
$$\int f\,d\delta_{x_0}=\lim_n\int s_n\,d\delta_{x_0} =\lim_ns_n(x_0)=f(x_0).$$
Apply this to the positive/negative parts and to the real/imaginary parts to
obtain the same formula for real and complex integrable $f$ by [L3].

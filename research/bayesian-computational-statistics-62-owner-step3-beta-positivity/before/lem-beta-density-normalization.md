---
id: lem-beta-density-normalization
kind: lemma
title: "The Beta density has finite positive Lebesgue integral"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-countable-choice
  - def-real-beta-integral
  - thm-real-beta-integral-convergence
  - thm-real-beta-gamma-identity
  - thm-real-gamma-euler-integral-convergence
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-monotone-convergence-for-the-integral
  - thm-real-power-continuity-and-derivatives
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used by the bounded-Riemann-to-Lebesgue integral supplier. No stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 3, §3.1"
      url: "https://www.bayesrulesbook.com/chapter-3"
---

## Statement

Assume Countable Choice. For every $\alpha,\beta>0$, the nonnegative function
$p\mapsto p^{\alpha-1}(1-p)^{\beta-1}$ is Lebesgue measurable on $(0,1)$ and
$$\int_{(0,1)}p^{\alpha-1}(1-p)^{\beta-1}\,d\lambda_1(p) =B(\alpha,\beta)=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)} \in(0,\infty).$$

## Facts & Assumptions

**Given:** Countable Choice and positive real numbers $\alpha,\beta$.

[A1] Countable Choice is the axiom assumed by the bounded-Riemann-to-Lebesgue integral theorem. [[def-countable-choice]].

[F1] The real Beta function is the improper integral of $p^{\alpha-1}(1-p)^{\beta-1}$ on $(0,1)$. [[def-real-beta-integral]].

[F2] For positive $\alpha,\beta$, $B(\alpha,\beta)=\Gamma(\alpha)\Gamma(\beta)/\Gamma(\alpha+\beta)$. [[thm-real-beta-gamma-identity]].

[F3] The Euler Gamma integral is finite and strictly positive for every positive argument. [[thm-real-gamma-euler-integral-convergence]].

[F4] A bounded Riemann-integrable function on a closed bounded interval is Lebesgue measurable and has the same Lebesgue and Riemann integrals under Countable Choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F5] Continuous functions on a closed bounded interval are bounded and Riemann integrable. [[thm-continuous-implies-integrable]].

[F6] Increasing limits of nonnegative measurable functions have integrals equal to the increasing limit of their integrals. [[thm-monotone-convergence-for-the-integral]].

[F7] The improper Beta integral converges for positive parameters. [[thm-real-beta-integral-convergence]].

[F8] Positive real powers are continuous on $(0,\infty)$. [[thm-real-power-continuity-and-derivatives]].

[F9] The integral is with respect to the stated Lebesgue measure. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

## Proof

**Given:** Countable Choice and $\alpha,\beta>0$.

1.1 By [F8], $f(p)=p^{\alpha-1}(1-p)^{\beta-1}$ is continuous and hence Borel and Lebesgue measurable on $(0,1)$ with the measure in [F9]. For each integer $m\ge3$, one has $1/m<1-1/m$, so its restriction to $[1/m,1-1/m]$ is continuous, hence bounded and Riemann integrable by [F5], and [F4] identifies its Lebesgue integral with its Riemann integral. The indicators of these intervals increase pointwise to one, so the truncated functions increase to $f$. [A1, F4, F5, F8, F9, construct]

2.1 By [F6], the Lebesgue integral of $f$ is the limit of the truncated integrals from step 1.1. The same truncations define the improper integral in [F1], which converges by [F7]; therefore the limit is $B(\alpha,\beta)$. [step 1.1, F1, F6, F7]

3.1 The identity in [F2] and positivity and finiteness in [F3] show that $B(\alpha,\beta)$ is finite and strictly positive. This proves the displayed Lebesgue integral identity and its endpoint bounds. [step 2.1, F2, F3] ∎
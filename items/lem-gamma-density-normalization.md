---
id: lem-gamma-density-normalization
kind: lemma
title: "The shape-rate Gamma density is normalized"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-countable-choice
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-monotone-convergence-for-the-integral
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-real-power-continuity-and-derivatives
  - thm-derivative-of-exponential
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used by the Lebesgue change-of-variables and bounded-Riemann integral suppliers; no stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §§5.2.1–5.2.2"
      url: "https://www.bayesrulesbook.com/chapter-5"
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §§2.1, 2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Statement

Assume Countable Choice. For $a,b>0$,
$$\int_{(0,\infty)}\frac{b^a}{\Gamma(a)}x^{a-1}e^{-bx}\,d\lambda_1(x)=1.$$

## Facts & Assumptions

**Given:** Countable Choice and positive real parameters $a,b$.

[A1] Countable Choice is the axiom required by the bounded-Riemann-to-Lebesgue integral and Lebesgue change-of-variables suppliers. [[def-countable-choice]].

[F1] $\Gamma(a)=\int_0^\infty t^{a-1}e^{-t}\,dt$ as a mixed improper integral. [[def-real-gamma-function-by-the-euler-integral]].

[F2] This Euler integral is finite for $a>0$ by convergence and strictly positive by the positive-integrand observation in the Gamma definition. [[thm-real-gamma-euler-integral-convergence]] [[def-real-gamma-function-by-the-euler-integral]].

[F3] Bounded Riemann-integrable functions on compact intervals have the same Lebesgue integral. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F4] A continuous function on a compact interval is bounded and Riemann integrable. [[thm-continuous-implies-integrable]].

[F5] Monotone convergence holds for nonnegative measurable functions. [[thm-monotone-convergence-for-the-integral]].

[F6] For a $C^1$ diffeomorphism between open sets, Lebesgue change of variables holds for nonnegative measurable functions under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F7] Positive real powers and the real exponential are continuous on their domains. [[thm-real-power-continuity-and-derivatives]] [[thm-derivative-of-exponential]].

[F8] Under Countable Choice, one-dimensional Lebesgue measure is a complete measure on the Lebesgue sigma-algebra, which contains all Borel sets. We use its restriction to $(0,\infty)$. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-borel-sets-are-lebesgue-measurable]].

## Proof

**Given:** Countable Choice and $a,b>0$.

1.1 By [F7], $g(t)=t^{a-1}e^{-t}$ is continuous and hence Borel and Lebesgue measurable on $(0,\infty)$ with the measure in [F8]. For each integer $m\ge2$, its restriction to $[1/m,m]$ is continuous, hence bounded Riemann integrable by [F4], and [F3] identifies its Riemann integral with its Lebesgue integral. The truncated functions $g\,\mathbf1_{[1/m,m]}$ increase to $g$. [A1, F3, F4, F7, F8, construct]

2.1 Monotone convergence [F5] identifies $\int g\,d\lambda_1$ with the limit of those truncated integrals. By the mixed-improper-integral definition [F1] and convergence [F2], this limit is $\Gamma(a)$, so $g$ has finite positive Lebesgue integral. [step 1.1, F1, F2, F5]

3.1 Apply [F6] to the diffeomorphism $t=bx$ of $(0,\infty)$. Since $dt=b\,dx$ and $x=t/b$, it gives $\int_0^\infty x^{a-1}e^{-bx}\,dx=b^{-a}\int_0^\infty t^{a-1}e^{-t}\,dt=b^{-a}\Gamma(a).$ Multiplication by $b^a/\Gamma(a)$ is valid by [F2] and yields one. [A1, F2, F6, step 2.1, algebra] ∎
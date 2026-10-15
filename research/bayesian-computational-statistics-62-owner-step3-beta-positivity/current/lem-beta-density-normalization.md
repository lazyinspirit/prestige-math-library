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
  - def-real-gamma-function-by-the-euler-integral
  - def-real-power
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - thm-monotonicity-of-the-integral
  - lem-improper-integral-splitting-and-tail-invariance
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

[F3] The Euler Gamma integral converges to a finite real value for every positive argument. [[thm-real-gamma-euler-integral-convergence]].

[F4] A bounded Riemann-integrable function on a closed bounded interval is Lebesgue measurable and has the same Lebesgue and Riemann integrals under Countable Choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F5] Continuous functions on a closed bounded interval are bounded and Riemann integrable. [[thm-continuous-implies-integrable]].

[F6] Increasing limits of nonnegative measurable functions have integrals equal to the increasing limit of their integrals. [[thm-monotone-convergence-for-the-integral]].

[F7] The improper Beta integral converges for positive parameters. [[thm-real-beta-integral-convergence]].

[F8] Positive real powers are continuous on $(0,\infty)$. [[thm-real-power-continuity-and-derivatives]].

[F9] The integral is with respect to the stated Lebesgue measure. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

[F10] For $s>0$, $\Gamma(s)$ is the improper integral $\int_0^\infty t^{s-1}e^{-t}\,dt$, with separate improper ends at zero and infinity. [[def-real-gamma-function-by-the-euler-integral]].

[F11] For $t>0$, $t^r=\exp(r\log t)$. [[def-real-power]].

[F12] The logarithm is strictly increasing on $(0,\infty)$ and $\log 1=0$. [[thm-natural-logarithm-laws]].

[F13] The exponential is continuous and strictly increasing on $\mathbb R$, and $\exp(x)>0$ for every real $x$. [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]].

[F14] Proper Riemann integration preserves nonnegativity and pointwise order; if an integrable function is bounded below by $c$ on $[a,b]$, its integral is at least $c(b-a)$. [[thm-monotonicity-of-the-integral]].

[F15] Splitting a convergent improper integral at a nonsingular finite point changes its value by the corresponding proper integral and preserves convergence of the remaining tail. [[lem-improper-integral-splitting-and-tail-invariance]].

## Proof

**Given:** Countable Choice and $\alpha,\beta>0$.

1.1 By [F8], $f(p)=p^{\alpha-1}(1-p)^{\beta-1}$ is continuous and hence Borel and Lebesgue measurable on $(0,1)$ with the measure in [F9]. For each integer $m\ge3$, one has $1/m<1-1/m$, so its restriction to $[1/m,1-1/m]$ is continuous, hence bounded and Riemann integrable by [F5], and [F4] identifies its Lebesgue integral with its Riemann integral. The indicators of these intervals increase pointwise to one, so the truncated functions increase to $f$. [A1, F4, F5, F8, F9, construct]

2.1 By [F6], the Lebesgue integral of $f$ is the limit of the truncated integrals from step 1.1. The same truncations define the improper integral in [F1], which converges by [F7]; therefore the limit is $B(\alpha,\beta)$. [step 1.1, F1, F6, F7]

3.1 Fix $s>0$ and put $h_s(t)=t^{s-1}e^{-t}$ for $t>0$. For $1\le t\le2$, [F12] gives $0\le\log t\le\log2$, so $(s-1)\log t\ge\min\{0,(s-1)\log2\}$. By [F11] and [F13], $h_s(t)\ge c_s:=\exp(\min\{0,(s-1)\log2\})\exp(-2)>0$. The function $h_s$ is continuous on $[1,2]$ by [F8] and [F13], hence bounded and Riemann integrable by [F5]. The lower integral bound [F14] therefore gives $\int_1^2 h_s(t)\,dt\ge c_s(2-1)=c_s>0$. [given, F5, F8, F11, F12, F13, F14, algebra]

3.2 By [F3] and [F10], $\Gamma(s)$ is finite. The integrand $h_s$ is positive on $(0,\infty)$ by [F11] and [F13]. Every compact truncation integral on either side of $[1,2]$ is nonnegative by [F14], and its finite improper limit is nonnegative as well. Splitting at $1$ and $2$ by [F15] gives $\Gamma(s)=\int_0^1h_s+\int_1^2h_s+\int_2^\infty h_s\ge\int_1^2h_s\ge c_s>0$. Thus $0<\Gamma(s)<\infty$ for every $s>0$, with strict positivity proved here rather than inferred from convergence alone. [F3, F10, F11, F13, F14, F15, step 3.1]

3.3 Apply step 3.2 with $s=\alpha,\beta,\alpha+\beta$. The identity in [F2] expresses $B(\alpha,\beta)$ as a quotient of finite positive numbers, hence $0<B(\alpha,\beta)<\infty$. Together with step 2.1 this proves the displayed Lebesgue integral identity and its endpoint bounds. [step 2.1, step 3.2, F2, algebra] ∎

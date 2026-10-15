---
id: thm-exponential-and-weibull-survival-laws
kind: theorem
title: Exponential and Weibull survival specifications define probability laws
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-countable-choice
  - def-cumulative-distribution-function-of-a-random-variable
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - def-measure-with-density
  - def-parametric-survival-and-reliability
  - def-borel-sigma-algebra
  - def-real-power
  - thm-probability-law-and-distribution-function-correspondence
  - thm-real-power-continuity-and-derivatives
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - thm-logarithm-derivative-and-integral
  - thm-integral-logarithm-is-unbounded
  - thm-exponential-limits-and-range
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-monotone-convergence-for-the-integral
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §§8.1.2.1, 8.1.6.1–8.1.6.2, PDF pp. 12–19"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §2.2, PDF pp. 5–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §2.2.1–2.2.2, PDF pp. 10–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Assume Countable Choice. For $\lambda>0$, the density
$$f_\lambda(t)=\begin{cases}\lambda e^{-\lambda t},&t>0,\\0,&t\le0\end{cases}$$
defines a probability law on $\mathbb R$ with survival
$S(t)=e^{-\lambda t}$ for $t\ge0$. For $k,\eta>0$, the density
$$f_{k,\eta}(t)=\begin{cases}\dfrac{k}{\eta}(t/\eta)^{k-1}e^{-(t/\eta)^k},&t>0,\\0,&t\le0\end{cases}$$
defines a probability law with survival $S(t)=e^{-(t/\eta)^k}$ for $t\ge0$.
Each law is unique among probability laws on $[0,\infty)$ with that survival.
The density hazards are respectively $\lambda$ and
$\dfrac{k}{\eta}(t/\eta)^{k-1}$ for $t>0$.

## Facts & Assumptions

**Given:** Positive parameters $\lambda$, $k$, $\eta$ and Lebesgue measure $dt$ on $\mathbb R$.

[F1] A nonnegative measurable function $f$ defines the measure $A\mapsto\int_A f(t)\,dt$. [[def-measure-with-density]]

[F2] For $t>0$, $(t/\eta)^k$ is differentiable with derivative $\dfrac{k}{\eta}(t/\eta)^{k-1}$; $\exp'=\exp$ and the chain rule holds. [[thm-real-power-continuity-and-derivatives]], [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]

[F3] A positive derivative implies increase by the mean value theorem. [[cor-mean-value-theorem]]

[F4] The positive-base power satisfies $x^k=e^{k\log x}$, and $\log$ is increasing and unbounded in both directions. [[def-real-power]], [[thm-logarithm-derivative-and-integral]], [[thm-integral-logarithm-is-unbounded]]

[F5] $e^x\to+\infty$ as $x\to+\infty$ and $e^x\to0$ as $x\to-\infty$. [[thm-exponential-limits-and-range]]

[F6] If $G'=f$ on a compact interval and $f$ is Riemann integrable, then $\int_a^b f=G(b)-G(a)$. [[thm-ftc-second-part]]

[F7] Continuous functions on a compact interval are Riemann integrable, and a bounded Riemann integrable function has the same Riemann and Lebesgue integrals under Countable Choice. [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F8] Increasing limits of nonnegative measurable functions pass through their Lebesgue integrals. [[thm-monotone-convergence-for-the-integral]]

[F9] Under Countable Choice, a CDF determines a unique probability law. [[def-cumulative-distribution-function-of-a-random-variable]], [[thm-probability-law-and-distribution-function-correspondence]]

[F10] On the real line, Lebesgue measure is the restriction of Lebesgue outer measure to the Lebesgue-measurable sets, and under Countable Choice it is a measure on that sigma-algebra. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]]

[F11] Open sets generate the Borel sigma-algebra, whose members are the Borel sets. [[def-borel-sigma-algebra]]

[F12] Under Countable Choice, every Borel subset of the real line is Lebesgue measurable. [[thm-borel-sets-are-lebesgue-measurable]]

[A1] Countable Choice is used in [F7] to identify Riemann and Lebesgue integrals, in [F9] to construct and identify the probability law, and in [F10] and [F12] for the measure and Borel-measurability properties of Lebesgue measure. [[def-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 Define $F_\lambda(t)=0$ for $t<0$ and $F_\lambda(t)=1-e^{-\lambda t}$ for $t\ge0$; define $F_{k,\eta}(t)=0$ for $t<0$ and $F_{k,\eta}(t)=1-e^{-(t/\eta)^k}$ for $t\ge0$. Both are continuous at $0$ by [F2], [F4], and [F5]. On $t>0$ their derivatives are the displayed densities and are positive by [F2]. The piecewise densities are Borel measurable: on $(0,\infty)$ they are products of continuous functions, and on $(-\infty,0]$ they vanish; both domains are Borel by [F11]. The mean value theorem in [F3] makes each increasing on $(0,\infty)$. For $t>0$, both $a=\lambda t$ and $a=(t/\eta)^k$ are positive, so strict increase of the exponential gives $e^{-a}<e^0=1$; hence both candidate CDFs are positive there; thus their value $0$ at $0$ is consistent with monotonicity. Their limits are $0$ at $-\infty$ and $1$ at $+\infty$, so each is a CDF on $\mathbb R$. [F2, F3, F4, F5, F11, given]

2.1 Fix $0<a<b$. Each CDF is differentiable on $[a,b]$ with the continuous derivative $f$ from the Statement. By [F6] its Riemann integral is $F(b)-F(a)$; by [F7] this equals its Lebesgue integral with respect to the measure in [F10]. Letting $a=1/n\downarrow0$ for integers $n$ large enough that $1/n<b$, [F8] and continuity at $0$ give $$\int_{(0,b]}f(u)\,du=F(b).$$ This applies separately to the exponential and Weibull formulas. [A1, F6, F7, F8, F10, step 1.1]

3.1 For either displayed nonnegative density $f$, [F1] defines the measure $\nu_f=f\,dt$ on Lebesgue-measurable sets. By [F12], its restriction to Borel sets is a measure. Step 2.1 gives $\nu_f((0,t])=F(t)$ for every $t>0$. Since $f=0$ on $(-\infty,0]$, this part has $\nu_f$-measure zero, so $\nu_f((-\infty,t])=F(t)$; for $t\le0$ both sides are $0$. Also $$\nu_f(\mathbb R)=\lim_{n\to\infty}\nu_f((-\infty,n])=\lim_{n\to\infty}F(n)=1$$ by [F8] and step 1.1. Thus $\nu_f$ is a probability law with CDF $F$, and [F9] identifies it with the unique law specified by the survival formula. Consequently $f$ is the stated density. [A1, F1, F8, F9, F10, F12, step 1.1, step 2.1]

4.1 Dividing the exponential density by its positive survival gives hazard $\lambda$. Dividing the Weibull density by its positive survival gives $\dfrac{k}{\eta}(t/\eta)^{k-1}$ for $t>0$. [given, step 3.1, algebra]

5.1 Steps 1.1, 2.1, 3.1, and 4.1 establish CDF validity, density-law existence, survival formulas, uniqueness, and the density hazards for both parameter families. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

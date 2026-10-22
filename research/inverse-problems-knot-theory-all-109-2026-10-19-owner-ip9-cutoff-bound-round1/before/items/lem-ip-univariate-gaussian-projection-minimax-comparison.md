---
id: lem-ip-univariate-gaussian-projection-minimax-comparison
kind: lemma
title: A one-coordinate projection risk bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-statistical-experiment
  - def-measurable-space
  - def-borel-sigma-algebra
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-randomized-procedure-as-a-markov-kernel
  - thm-gaussian-integral
  - thm-substitution
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the Gaussian sequence model; the scalar density and prior calculation use no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §2.3, equations (2.26)–(2.30), and §4.6, Theorem 4.17 proof, printed pp. 29–30 and 111–113"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §2, equations (12)–(13), PDF pp. 3–4"
      url: https://arxiv.org/pdf/1707.01706v2
---

## Statement

Let $r\ge0$ and $\tau>0$. In the one-dimensional Gaussian location experiment with parameter $\theta\in[-r,r]$, action space $\mathbb R$, observation density
$$p_{\theta,\tau}(y)=\frac{1}{\tau\sqrt{2\pi}}\exp\!\left(-\frac{(y-\theta)^2}{2\tau^2}\right)$$
with respect to Lebesgue measure, and squared-error loss, let $M(r,\tau)$ be the minimax expected risk over all measurable deterministic or randomized estimators. Put $b=\min\{r,\tau\}$ and take the prior assigning mass $1/2$ to each of $-b$ and $b$. The better of the estimators $y\mapsto0$ and $y\mapsto y$ has worst-case risk $T(r,\tau)=\min\{r^2,\tau^2\}$, and this prior has Bayes risk at least $T(r,\tau)/\sqrt{2e}$, so $M(r,\tau)\ge T(r,\tau)/\sqrt{2e}$.

## Statement references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model and its standard-normal coordinates]]

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §2.3 and §4.6](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §2](https://arxiv.org/pdf/1707.01706v2)

## Facts & Assumptions

[F1] [[def-ip-gaussian-sequence-inverse-model]]: A scalar coordinate in the positive-noise sequence experiment is a Gaussian location observation with positive variance; the coordinates are independent.

[F2] [[def-statistical-experiment]] and [[def-measurable-space]]: An experiment consists of a measurable sample space, a parameter set, and parameter-indexed sampling probabilities.

[F3] [[def-borel-sigma-algebra]] and [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]: The scalar sample space uses the Borel sigma-algebra on $\mathbb R$ and its density is integrated against Lebesgue measure.

[F4] [[def-loss-function-and-risk]], [[def-randomized-procedure-as-a-markov-kernel]], and [[def-bayes-and-minimax-risk]]: Squared-error risk is the expected nonnegative loss; a randomized rule is a parameter-independent probability kernel from data to actions; minimax risk is the infimum of worst-case risks, and every supported prior has Bayes risk no larger than the minimax value.

[F5] [[def-hyperbolic-functions]]: $\cosh x=(\exp x+\exp(-x))/2$, $\tanh x=\sinh x/\cosh x$, and $\operatorname{sech}x=1/\cosh x$.

[F6] [[thm-hyperbolic-identities-and-derivatives]]: $\cosh$ is even, $\cosh x\ge1$, it is increasing on $[0,\infty)$, $(\tanh x)'=\operatorname{sech}^2x$, $(\cosh x)'=\sinh x$, and $(\operatorname{sech}x)'=-\operatorname{sech}x\tanh x$.

[F7] [[def-real-exponential-function-and-e]]: $e=\exp(1)$.

[F8] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt{\pi}$.

[F9] [[thm-substitution]]: On compact intervals, a differentiable affine change of variable transforms the corresponding continuous-function integrals by its constant derivative.

[F10] [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], and [[cor-mean-value-theorem]]: The exponential, product and composition rules differentiate the displayed smooth functions, and a differentiable function's increment on an interval equals its derivative at an intermediate point times the interval length.

**Given:** $r\ge0$, $\tau>0$, the Gaussian location experiment, squared-error loss, and the endpoint prior specified in the Statement.

## Proof

1.1 The density in the Statement is positive and continuous. The substitution $y=\theta+\sqrt{2}\tau x$ on symmetric finite intervals and [F8] show that its integral is $(\tau\sqrt{2\pi})^{-1}\sqrt{2}\tau\sqrt{\pi}=1$, so by [F2]–[F3] it defines the scalar sampling probability on the stated Borel sample space. [given, F2, F3, F8, F9, algebra]

1.2 Write $b=\min\{r,\tau\}$ and $u=b/\tau\in[0,1]$. This location family is the scalar Gaussian coordinate experiment described in [F1]. Under the two-point prior, the likelihood ratio at observation $y$ is $p_{b,\tau}(y)/p_{-b,\tau}(y)=\exp(2by/\tau^2)$. Hence the posterior mean is $b\tanh(by/\tau^2)$ and the posterior variance is $b^2\operatorname{sech}^2(by/\tau^2)$; for any action $a$, its conditional squared loss is the square of its distance from this posterior mean plus that posterior variance. Averaging this identity over any action kernel from [F4] leaves the posterior variance as a lower bound, including the degenerate case $b=0$. [given, F1, F4, F5, algebra]

1.3 Define $I(u):=\int_{\mathbb R}\phi(x)\operatorname{sech}(ux)\,dx$. Since $\cosh t\ge1$, the integrand lies between $0$ and $\phi(x)$, whose integral is $1$ by [F8] and the affine substitution [F9]; hence $I(u)$ is finite. Since $\cosh$ is even and increasing on $[0,\infty)$ by [F6], $\operatorname{sech}(ux)\ge\operatorname{sech}(x)$ for every real $x$ and $0\le u\le1$. Therefore $I(u)\ge I(1)$, while $e^{-u^2/2}\ge e^{-1/2}$. [given, F5, F6, F8, F9, algebra]

1.4 For $x\ge0$, [F6] gives $0\le\tanh x$ and $(\tanh x)'\le1$ because $\cosh x\ge1$; with $\tanh0=0$, [F10] yields $\tanh x\le x$. Set $g(x)=e^{-x^2/2}\cosh x$. Differentiation using [F6] and [F10] gives $g'(x)=g(x)(\tanh x-x)\le0$, so [F10] implies $g(x)\le g(0)=1$. Evenness extends $\cosh x\le e^{x^2/2}$ to all real $x$. Consequently $\phi(x)\operatorname{sech}x\ge(2\pi)^{-1/2}e^{-x^2}$, and [F8] gives $I(1)\ge1/\sqrt2$. [F5, F6, F8, F10, algebra]

2.1 The prior predictive density, after $x=y/\tau$, is $\tau^{-1}\phi(x)e^{-u^2/2}\cosh(ux)$, where $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Multiplying by the posterior variance from step 1.2 and changing variables gives Bayes risk $B(r,\tau)=b^2e^{-u^2/2}I(u)$, with $I$ defined in step 1.3. [step 1.2, step 1.3, F5, F9, algebra]

3.1 Steps 2.1, 1.3 and 1.4 give $B(r,\tau)\ge b^2e^{-1/2}/\sqrt2=b^2/\sqrt{2e}=T(r,\tau)/\sqrt{2e}$, where $e=\exp(1)$ by [F7]. Since the prior is supported in $[-r,r]$, the supremum risk of every rule is at least its prior-averaged risk; taking the infimum over rules and using [F4] yields $M(r,\tau)\ge B(r,\tau)$. [given, F4, F7, step 2.1, step 1.3, step 1.4, algebra]

4.1 The constant estimator $0$ has maximum risk $r^2$, while the identity estimator $y\mapsto y$ has risk $\tau^2$ at every parameter; hence their better maximum risk is $T(r,\tau)=b^2$. This proves the projection-risk claim together with step 3.1. [given, F3, step 3.1, algebra] ∎

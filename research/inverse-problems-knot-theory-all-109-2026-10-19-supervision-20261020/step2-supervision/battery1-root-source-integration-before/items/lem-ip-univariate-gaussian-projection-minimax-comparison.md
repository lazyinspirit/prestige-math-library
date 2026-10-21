---
id: lem-ip-univariate-gaussian-projection-minimax-comparison
kind: lemma
title: A one-coordinate projection risk bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-isonormal-white-noise-experiment
  - def-statistical-experiment
  - def-measurable-space
  - def-borel-sigma-algebra
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-borel-sets-are-lebesgue-measurable
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-randomized-procedure-as-a-markov-kernel
  - thm-gaussian-integral
  - def-mixed-improper-integral
  - thm-substitution-for-improper-integrals
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-integral-over-a-null-set-vanishes
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is assumed for Lebesgue affine change of variables and the improper-Riemann-to-Lebesgue bridge, and is also inherited through the Gaussian sequence model; the scalar prior calculation uses no additional choice.
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

Assume Countable Choice. Let $r\ge0$ and $\tau>0$. In the one-dimensional Gaussian location experiment with parameter $\theta\in[-r,r]$, action space $\mathbb R$, observation density
$$p_{\theta,\tau}(y)=\frac{1}{\tau\sqrt{2\pi}}\exp\!\left(-\frac{(y-\theta)^2}{2\tau^2}\right)$$
with respect to Lebesgue measure, and squared-error loss, let $M(r,\tau)$ be the minimax expected risk over all measurable deterministic or randomized estimators. Put $b=\min\{r,\tau\}$ and take the prior assigning mass $1/2$ to each of $-b$ and $b$. The better of the estimators $y\mapsto0$ and $y\mapsto y$ has worst-case risk $T(r,\tau)=\min\{r^2,\tau^2\}$, and this prior has Bayes risk at least $T(r,\tau)/\sqrt{2e}$, so $M(r,\tau)\ge T(r,\tau)/\sqrt{2e}$.

## Statement references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model and its standard-normal coordinates]]

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §2.3 and §4.6](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §2](https://arxiv.org/pdf/1707.01706v2)

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is assumed for the Lebesgue change-of-variables and improper-integral results used below.

[F1] [[def-ip-gaussian-sequence-inverse-model]] and [[def-ip-isonormal-white-noise-experiment]]: A scalar coordinate has the stated Gaussian location density and can be written $Y=\theta+\tau\xi$, where $\mathbb E\xi=0$ and $\mathbb E\xi^2=1$; the latter follows from the isonormal covariance at a unit basis vector.

[F2] [[def-statistical-experiment]] and [[def-measurable-space]]: An experiment consists of a measurable sample space, a parameter set, and parameter-indexed sampling probabilities.

[F3] [[def-borel-sigma-algebra]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-borel-sets-are-lebesgue-measurable]], and [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: The displayed continuous densities and integrands are Borel and, under Countable Choice, Lebesgue measurable; products with indicators of Borel intervals remain measurable.

[F4] [[def-loss-function-and-risk]], [[def-randomized-procedure-as-a-markov-kernel]], and [[def-bayes-and-minimax-risk]]: Squared-error risk is the expected nonnegative loss; a randomized rule is a parameter-independent probability kernel from data to actions; minimax risk is the infimum of worst-case risks, and every supported prior has Bayes risk no larger than the minimax value.

[F5] [[def-hyperbolic-functions]]: $\cosh x=(\exp x+\exp(-x))/2$, $\tanh x=\sinh x/\cosh x$, and $\operatorname{sech}x=1/\cosh x$; the definitions give $\tanh 0=0$.

[F6] [[thm-hyperbolic-identities-and-derivatives]]: $\cosh$ is even, $\cosh x\ge1$, it is increasing on $[0,\infty)$, $\tanh$ is strictly increasing, $\cosh^2x-\sinh^2x=1$, $(\tanh x)'=\operatorname{sech}^2x$, $(\cosh x)'=\sinh x$, and $(\operatorname{sech}x)'=-\operatorname{sech}x\tanh x$.

[F7] [[def-real-exponential-function-and-e]]: $e=\exp(1)$.

[F8] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], and [[cor-exponential-reciprocal-and-positivity]]: $\exp(0)=1$, $\exp(x+y)=\exp x\exp y$, $\exp(-x)=1/\exp x$, and $\exp x>0$.

[F9] [[thm-exponential-is-strictly-increasing]]: $\exp$ is continuous and strictly increasing on $\mathbb R$.

[F10] [[thm-gaussian-integral]] and [[def-mixed-improper-integral]]: The mixed improper Riemann integral of $x\mapsto e^{-x^2}$ is $\sqrt\pi$, with the negative and positive tails treated separately.

[F11] [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]: Under Countable Choice, a nonnegative locally Riemann-integrable function with a finite improper integral on $[0,\infty)$ has the same Lebesgue integral there.

[F12] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: Under Countable Choice, a $C^1$ diffeomorphism between open subsets of $\mathbb R$ transforms a nonnegative Lebesgue integral with its absolute derivative factor; in particular this applies to affine bijections of $\mathbb R$.

[F13] [[thm-lebesgue-measure-of-a-box-of-every-kind]] and [[cor-integral-over-a-null-set-vanishes]]: Under Countable Choice, the singleton $\{0\}$ is Lebesgue null and the integral of a nonnegative measurable function over it is zero.

[F14] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: The nonnegative Lebesgue integral is additive.

[F15] [[thm-substitution-for-improper-integrals]]: The substitution $x\mapsto -x$ identifies the two one-sided improper integrals of the even function $e^{-x^2}$.

[F16] [[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], and [[cor-mean-value-theorem]]: The exponential, product and composition rules differentiate the displayed smooth functions, and a differentiable function's increment on an interval equals its derivative at an intermediate point times the interval length.

[F17] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: The nonnegative Lebesgue integral is monotone and respects multiplication by positive constants.

**Given:** Countable Choice, $r\ge0$, $\tau>0$, the Gaussian location experiment, squared-error loss, and the endpoint prior specified in the Statement.

## Proof

1.1 Put $g(x)=e^{-x^2}$. By [F10] its mixed improper Riemann integral is $\sqrt\pi$, and [F15] identifies its two one-sided improper integrals, so each equals $\sqrt\pi/2$. The half-line bridge [F11] gives $\int_{[0,\infty)}g\,d\lambda_1=\sqrt\pi/2$. The map $T(x)=-x$ is a $C^1$ diffeomorphism from $(0,\infty)$ to $(-\infty,0)$, so [F12] applied to $g$ gives $\int_{(-\infty,0)}g\,d\lambda_1=\int_{(0,\infty)}g\,d\lambda_1$. By [F13] the point $0$ contributes zero, and [F14] on the disjoint decompositions $(0,\infty)\sqcup\{0\}=[0,\infty)$ and $(-\infty,0)\sqcup[0,\infty)=\mathbb R$ therefore gives $\int_{\mathbb R}e^{-x^2}\,d\lambda_1=\sqrt\pi$. Applying [F12] with $T(x)=\sqrt2x$ and $f(y)=e^{-y^2/2}$ now gives $\int_{\mathbb R}e^{-x^2/2}\,d\lambda_1=\sqrt2\sqrt\pi$, hence $\int_{\mathbb R}\phi(x)\,d\lambda_1=1$. [given, F3, F8, F9, F10, F11, F12, F13, F14, F15, algebra]

1.2 The density in the Statement is positive by [F8], continuous by [F9], and measurable by [F3]. Applying [F12] to $T(x)=\theta+\sqrt2\tau x$ gives its Lebesgue integral as $(\tau\sqrt{2\pi})^{-1}\sqrt2\tau\int_{\mathbb R}e^{-x^2}\,d\lambda_1=1$ by step 1.1, so by [F2]–[F3] it defines the scalar sampling probability on the stated Borel sample space. [given, F2, F3, F8, F9, F12, step 1.1, algebra]

1.3 Write $b=\min\{r,\tau\}$ and $u=b/\tau\in[0,1]$. This location family is the scalar Gaussian coordinate experiment described in [F1]. Under the two-point prior, the likelihood ratio at observation $y$ is $p_{b,\tau}(y)/p_{-b,\tau}(y)=\exp(2by/\tau^2)$ by [F8]. Hence the posterior mean is $b\tanh(by/\tau^2)$ and the posterior variance is $b^2\operatorname{sech}^2(by/\tau^2)$ by [F5]–[F6]; for any action $a$, its conditional squared loss is the square of its distance from this posterior mean plus that posterior variance. Averaging this identity over any action kernel from [F4] leaves the posterior variance as a lower bound, including the degenerate case $b=0$. [given, F1, F4, F5, F6, F8, F9, algebra]

1.4 Define $I(u):=\int_{\mathbb R}\phi(x)\operatorname{sech}(ux)\,d\lambda_1(x)$. Since $\cosh t\ge1$, the integrand lies between $0$ and $\phi(x)$, whose integral is $1$ by step 1.1; monotonicity [F17] makes $I(u)$ finite. Since $\cosh$ is even and increasing on $[0,\infty)$ by [F6], $\operatorname{sech}(ux)\ge\operatorname{sech}(x)$ for every real $x$ and $0\le u\le1$. Therefore $I(u)\ge I(1)$ by [F17], while $e^{-u^2/2}\ge e^{-1/2}$ by [F9]. [given, F3, F5, F6, F9, F17, step 1.1, algebra]

1.5 For $x\ge0$, [F6] gives $0\le\tanh x$ and $(\tanh x)'\le1$ because $\cosh x\ge1$; with $\tanh0=0$, [F16] yields $\tanh x\le x$. Set $g(x)=e^{-x^2/2}\cosh x$. Differentiation using [F6] and [F16] gives $g'(x)=g(x)(\tanh x-x)\le0$, so [F16] implies $g(x)\le g(0)=1$. Evenness extends $\cosh x\le e^{x^2/2}$ to all real $x$. Consequently $\phi(x)\operatorname{sech}x\ge(2\pi)^{-1/2}e^{-x^2}$, and step 1.1 plus [F17] gives $I(1)\ge1/\sqrt2$. [F5, F6, F8, F9, F16, F17, step 1.1, algebra]

2.1 The prior predictive density, after $x=y/\tau$, is $\tau^{-1}\phi(x)e^{-u^2/2}\cosh(ux)$, where $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, by [F8]. Multiplying by the posterior variance from step 1.3 and applying the full-line Lebesgue affine substitution [F12] to this nonnegative measurable integrand gives Bayes risk $B(r,\tau)=b^2e^{-u^2/2}I(u)$, with $I$ defined in step 1.4. [step 1.3, step 1.4, F3, F5, F8, F12, algebra]

3.1 Steps 2.1, 1.4 and 1.5 give $B(r,\tau)\ge b^2e^{-1/2}/\sqrt2=b^2/\sqrt{2e}=T(r,\tau)/\sqrt{2e}$, where $e=\exp(1)$ by [F7] and the exponential laws [F8]–[F9]. Since the prior is supported in $[-r,r]$, the supremum risk of every rule is at least its prior-averaged risk; taking the infimum over rules and using [F4] yields $M(r,\tau)\ge B(r,\tau)$. [given, F4, F7, F8, F9, step 2.1, step 1.4, step 1.5, algebra]

4.1 The constant estimator $0$ has maximum risk $r^2$. For the identity estimator, [F1] gives $Y-\theta=\tau\xi$ with $\mathbb E\xi^2=1$, so its risk is $\tau^2$ at every parameter; hence their better maximum risk is $T(r,\tau)=b^2$. This proves the projection-risk claim together with step 3.1. [given, F1, F3, step 3.1, algebra] ∎

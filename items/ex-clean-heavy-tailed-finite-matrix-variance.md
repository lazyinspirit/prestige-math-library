---
id: ex-clean-heavy-tailed-finite-matrix-variance
kind: example
title: A polynomial-tail law with finite matrix variance
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-matrix-variance-of-a-random-vector
  - thm-p-series-rational
  - def-nonnegative-weighted-sum-of-measures
  - thm-nonnegative-weighted-sums-of-measures
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-monotone-convergence-for-the-integral
  - cor-cauchy-schwarz-for-random-variables
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §2"
      url: "https://arxiv.org/pdf/1708.00502"
proof_strategy: direct
dependency_level: 2
---

## Example

For $r>1$ let $\zeta(r)=\sum_{k=1}^{\infty}k^{-r}$. On
$\Omega=\mathbb Z\setminus\{0\}$ with its power-set sigma-algebra,
let
$$P=\sum_{k=1}^{\infty}\frac{1}{2\zeta(6)k^6}(\delta_k+\delta_{-k}).$$
Set $X(\omega)=\omega$. Thus the two atoms $k,-k$ each have mass
$1/(2\zeta(6)k^6)$.

## Facts & Assumptions

**Given:** The countable atomic construction in the Example and the
covariance and matrix-variance conventions.

[F1] [[def-nonnegative-weighted-sum-of-measures]],
[[thm-nonnegative-weighted-sums-of-measures]], [[def-dirac-measure]], and
[[prop-dirac-measure-is-a-probability-measure]]: the displayed countable
weighted sum of finite sums of Dirac probability measures is a measure.

[F2] [[def-probability-measure]]: a measure whose total mass is one is a
probability measure.

[F3] [[def-random-element-and-real-random-variable]],
[[def-measurable-function-between-measurable-spaces]], and
[[def-borel-sigma-algebra]]: the identity map from the full power-set
sigma-algebra is a measurable real random variable.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and
[[thm-monotone-convergence-for-the-integral]]: expectation of a
nonnegative random variable is its integral, finite-valued truncations are
simple, and increasing limits pass through the integral.

[F5] [[thm-p-series-rational]]: $\zeta(2)$, $\zeta(4)$, and
$\zeta(6)$ are finite positive real numbers.

[F6] [[def-covariance-matrix-of-a-random-vector]] and
[[def-matrix-variance-of-a-random-vector]]: for $p=1$ and mean zero,
$\Sigma=\mathbb E X^2$ and $\sigma_0^2=\mathbb E X^4$.

[F7] [[cor-cauchy-schwarz-for-random-variables]]: on a probability space,
$\mathbb E|X|\le(\mathbb E X^2)^{1/2}$ when $X$ is square-integrable.

## Verification

1.1 By [F1], $P$ is a measure, and its total mass is $\zeta(6)^{-1}\sum_{k=1}^{\infty}k^{-6}=1$ by [F5]. Thus [F2] makes $P$ a probability measure. The identity map is the real random variable specified by [F3], and $P(X=\pm k)=1/(2\zeta(6)k^6)$ for each $k\ge1$. [F1, F2, F3, F5, algebra]

1.2 For $q=2$ and $q=4$, the truncations $Y_N=|X|^q\mathbf1_{\{|X|\le N\}}$ are nonnegative simple functions increasing to $|X|^q$. By [F4] and the finite atom masses, $$\mathbb E|X|^q=\lim_{N\to\infty}\mathbb E Y_N =\frac{1}{\zeta(6)}\sum_{k=1}^{\infty}k^{q-6} =\frac{\zeta(6-q)}{\zeta(6)}<\infty,$$ where convergence is [F5]. In particular $X$ is integrable by [F7], and its symmetric atom masses give $\mathbb E X=0$. [F1, F4, F5, F7, algebra]

2.1 By [F6], the covariance is $\Sigma=\zeta(4)/\zeta(6)>0$, while the scalar matrix variance is $\sigma_0^2=\zeta(2)/\zeta(6)<\infty$. Therefore $$d=\frac{\sigma_0^2}{\Sigma^2} =\frac{\zeta(2)\zeta(6)}{\zeta(4)^2}$$ is finite and positive. [F5, F6, step 1.2, algebra]

3.1 Fix $t>0$. The simple truncations $W_N=e^{t|X|}\mathbf1_{\{|X|\le N\}}$ increase to $e^{t|X|}$, so [F4] gives $$\mathbb E e^{t|X|} =\frac{1}{\zeta(6)}\sum_{k=1}^{\infty}e^{tk}k^{-6}=+\infty.$$ Indeed the ratio of successive summands is $e^t(k/(k+1))^6\to e^t>1$, so the summands do not tend to zero and the series diverges. The law has polynomially decaying atom masses, finite matrix variance, and no finite positive exponential moment. [F1, F4, step 1.1, algebra] ∎
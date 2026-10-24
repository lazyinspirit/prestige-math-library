---
id: thm-nested-batch-repeatability-covariance-and-mean-variance
kind: theorem
title: "Within-batch covariance and replicate-mean variance"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-batch-and-measurement-process-variation
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-factorization-of-expectations-for-independent-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-probability-measure
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"
    - title: "Fan Li, STA610 Lecture 5 Notes: Estimation of Group Effects"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec5-GroupEffects.pdf"
    - title: "Fan Li, STA610 Lecture 6 Notes: Linear Mixed-Effects Models"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
---

## Statement

Let $I$ and each $J_i$ be nonempty finite sets, and let $m_{ij}\ge1$ be an
integer for each $i\in I$ and $j\in J_i$. On one probability space, suppose
the real random variables $B_{ij}$ and $\epsilon_{ijk}$, for
$1\le k\le m_{ij}$, are jointly independent and square-integrable, with
$$\mathbb E[B_{ij}]=0,\quad \operatorname{Var}(B_{ij})=\sigma_B^2<\infty,\quad \mathbb E[\epsilon_{ijk}]=0,\quad \operatorname{Var}(\epsilon_{ijk})=\sigma_\epsilon^2<\infty,$$
where these two variances are common over their indices. For fixed real
constants $\mu$ and $\tau_i$, set
$$Y_{ijk}=\mu+\tau_i+B_{ij}+\epsilon_{ijk},\qquad \bar Y_{ij\cdot}=\frac{1}{m_{ij}}\sum_{k=1}^{m_{ij}}Y_{ijk}.$$
Then for every $i,j$ and distinct $k,\ell\in\{1,\ldots,m_{ij}\}$,
$$\operatorname{Cov}(Y_{ijk},Y_{ij\ell})=\sigma_B^2,$$
and for every $i,j$,
$$\operatorname{Var}(\bar Y_{ij\cdot})=\sigma_B^2+\frac{\sigma_\epsilon^2}{m_{ij}}.$$
No Gaussian assumption is needed.

## Facts & Assumptions

**Given:** The finite nested model and all moment and independence hypotheses in
the Statement.

[F1] [[def-batch-and-measurement-process-variation]]: all $B_{ij}$ and
$\epsilon_{ijk}$ are square-integrable and jointly independent, have mean zero
and common finite variances $\sigma_B^2$ and $\sigma_\epsilon^2$, and
$Y_{ijk}=\mu+\tau_i+B_{ij}+\epsilon_{ijk}$.

[F2] [[def-moments-variance-and-covariance]]: for square-integrable real
variables, variance is the expectation of the centered square and covariance
is the expectation of the centered product.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear on finite linear combinations of integrable real variables.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: for a
finite independent family and integrable coordinate functions, the product is
integrable and its expectation is the product of the expectations.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]:
expectation of an integrable real random variable is its Lebesgue integral.

[F6] [[def-probability-measure]]: the probability measure of the whole sample
space is one, so the expectation of a constant $c$ is $c$.

## Proof

1.1 Each variable in [F1] is integrable because it is square-integrable on a probability space and $2|X|\le1+X^2$; finite sums are square-integrable by $(x_1+\cdots+x_n)^2\le n\sum_{r=1}^n x_r^2$. Every product used below is integrable by $2|XZ|\le X^2+Z^2$. Thus all expectations are finite and the moment definitions and expectation linearity apply. [given, F1, F2, F3, F5, F6, algebra]

2.1 Fix distinct $k,\ell$ in one batch. By [F1], [F3], [F5], and [F6], $\mathbb E[Y_{ijk}]=\mathbb E[Y_{ij\ell}]=\mu+\tau_i$. Thus [F2] gives $\operatorname{Cov}(Y_{ijk},Y_{ij\ell})=\mathbb E[(B_{ij}+\epsilon_{ijk})(B_{ij}+\epsilon_{ij\ell})]$. Expand the product and apply [F3] to get $\mathbb E[B_{ij}^2]+\mathbb E[B_{ij}\epsilon_{ij\ell}]+\mathbb E[\epsilon_{ijk}B_{ij}]+\mathbb E[\epsilon_{ijk}\epsilon_{ij\ell}]$. By [F1] and [F4] each cross-product expectation factors into the product of two zero means; the remaining term is $\mathbb E[B_{ij}^2]=\operatorname{Var}(B_{ij})=\sigma_B^2$ by [F1] and [F2]. [F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 For fixed $i,j$, [F1], [F3], [F5], and [F6] give $\mathbb E[\bar Y_{ij\cdot}]=\mu+\tau_i$, so its centered form is $B_{ij}+m_{ij}^{-1}\sum_k\epsilon_{ijk}$. By [F2], its variance is the expectation of the square of this centered form; expanding that square and repeatedly applying [F3] gives $\mathbb E[B_{ij}^2]+(2/m_{ij})\sum_k\mathbb E[B_{ij}\epsilon_{ijk}]+(1/m_{ij}^2)\sum_{k,\ell}\mathbb E[\epsilon_{ijk}\epsilon_{ij\ell}]$. By [F1] and [F4], all cross-product expectations vanish and each diagonal term equals $\mathbb E[\epsilon_{ijk}^2]=\sigma_\epsilon^2$. Also $\mathbb E[B_{ij}^2]=\sigma_B^2$. Therefore the result is $\sigma_B^2+\sigma_\epsilon^2/m_{ij}$, including $m_{ij}=1$ and zero variance components. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎

## Remarks

The result is a model identity, not an estimate or an empirical claim about a
particular instrument. Its proof uses finite sums and no choice axiom.

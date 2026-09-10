---
id: ex-weak-convergence-of-gaussian-laws-by-parameters
kind: example
title: Weak convergence of gaussian laws by parameters
deps: ["def-weak-convergence-of-borel-probability-measures", "thm-dominated-convergence", "thm-change-of-variables-for-expectation", "def-standard-normal-and-normal-laws", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §3.2, bounded continuous test criterion
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. If $m_n\to m$ and $\sigma_n\ge0$ with $\sigma_n\to\sigma\ge0$, then $N(m_n,\sigma_n^2)\Rightarrow N(m,\sigma^2)$, including $N(m,0)=\delta_m$.

## Facts & Assumptions

[F1] [[def-standard-normal-and-normal-laws]]: Assume AC. Define $\gamma(E)=\int_E e^{-x^2/2}/\sqrt{2\pi}\,dx$ for Borel E in $\mathbb R$. By lem-normal-density-has-total-mass-one and thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, gamma is a probability measure; denote it $N(0,1)$. For $m\in\mathbb R$ and $\sigma\ge0$, define $N(m,\sigma^2)$ as the law of $x\mapsto m+\sigma x$ on $(\mathbb R,\mathcal B,\gamma)$. This affine map is continuous: for $\sigma$>0 choose $\delta$=$\varepsilon$/$\sigma$, and for $\sigma$=0 it is constant. Its inverse images of opens are open, so it is Borel measurable. lem-law-of-a-random-element-is-a-probability-measure makes its pushforward a probability. When $\sigma$=0, the preimage of E is all of R if m belongs to E and empty otherwise, so $N(m,0)=\delta_m$ in def-dirac-measure.

[F2] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

[F3] [[thm-change-of-variables-for-expectation]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, let
$\mathbb P_X$ be its law, and let $g:(S,\Sigma)\to\mathbb R$ or
$g:(S,\Sigma)\to\mathbb C$ be measurable.

1. If $g\ge0$, then
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$
2. If $g(X)$ is integrable, then $g$ is integrable with respect to
   $\mathbb P_X$ and the same formula holds:
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$

[F4] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 On the standard-normal probability space gamma of F1, put Z(x)=x, $Y_n=m_n+\sigma_nZ$ and $Y=m+\sigma Z$. For every finite x, $|Y_n(x)-Y(x)|\le|m_n-m|+|\sigma_n-\sigma||x|\to0$. Their laws are the stated affine normal laws by that definition. [F1]

2.1 For bounded continuous f, f($Y_n$)->f(Y) pointwise and $|f(Y_n)|\le\|f\|_\infty$, an integrable constant since gamma has mass one. F2 gives convergence of their expectations, and F3 translates this into convergence of the normal-law integrals. Thus F4 applies. When $\sigma$=0 the limit Y is the constant m, with law $\delta_m$. [F2, F3, F4] ∎

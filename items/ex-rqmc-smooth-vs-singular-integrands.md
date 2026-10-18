---
id: ex-rqmc-smooth-vs-singular-integrands
kind: example
title: "A smooth integrand satisfies the bound while an integrable singularity does not"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - def-rqmc-point-set-and-estimator
  - lem-nested-scramble-marginals-and-net-preservation
  - thm-rqmc-nested-scramble-smooth-net-variance-rate
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-countable-choice
  - thm-monotone-convergence-for-the-integral
  - thm-change-of-variables-for-expectation
  - def-moments-variance-and-covariance
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the smooth scrambled-net variance theorem; the integral and divergence calculations are choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1"
      url: "https://artowen.su.domains/reports/localanti.pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Example

Assume Countable Choice. In one dimension compare $f_1(x)=x$ with the
integrable singular function $f_2(x)=x^{-3/4}$ for $x>0$ and $f_2(0)=0$.
The first satisfies the smooth scrambled-net
variance hypotheses; the second does not even have a finite second moment.

## Facts & Assumptions

**Given:** Countable Choice, a nested uniform scramble of a $(0,m,1)$-net in base $2$, and the two integrands.

[F1] [[thm-rqmc-nested-scramble-smooth-net-variance-rate]]: A continuously differentiable one-dimensional integrand has scrambled-net variance $O(n^{-3})$ for fixed base and net quality.

[F2] [[def-rqmc-point-set-and-estimator]]: Each scrambled point is marginally uniform when the RQMC marginal condition holds.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Integrability and second moments are Lebesgue integrals against the uniform law.

[F4] [[lem-nested-scramble-marginals-and-net-preservation]]: Each scrambled point has uniform law and the net property is preserved almost surely.

[F5] [[thm-monotone-convergence-for-the-integral]]: Increasing nonnegative measurable truncations have integrals increasing to the integral of their pointwise limit.

[F6] [[thm-change-of-variables-for-expectation]]: For a nonnegative Borel function $g$ and random element $X$, $\mathbb E[g(X)]=\int g\,d\mathbb P_X$.

[F7] [[def-moments-variance-and-covariance]]: Variance is defined for square-integrable variables and is finite only when their second moment is finite.

[A1] [[def-countable-choice]]: Countable Choice is inherited from [F1].

## Verification

1.1 The function $f_1(x)=x$ has continuous derivative $1$ on $[0,1]$. With $n=2^m$, the hypotheses of [F1] hold, so its randomized-rule variance is $O(n^{-3})$. [A1, F1, given]

1.2 For $N\ge1$, the nonnegative Borel truncations $g_N=f_2\mathbf1_{[1/N,1]}$ increase pointwise to $f_2$ and satisfy $\int_0^1g_N(x)\,dx=4(1-N^{-1/4})$. Likewise, $h_N=f_2^2\mathbf1_{[1/N,1]}$ increase pointwise to $f_2^2$ and satisfy $\int_0^1h_N(x)\,dx=2(\sqrt N-1)$. By [F5], $\int_0^1f_2=4$ while $\int_0^1f_2^2=+\infty$; $f_2$ is not continuously differentiable at $0$. [F3, F5, given, algebra]

2.1 By [F2], $\widehat I_n(f_2)=n^{-1}\sum_i f_2(X_i)$; [F4] gives every point uniform law. Since $f_2\ge0$, [F6] and step 1.2 give $\mathbb E[f_2(X_1)^2]=+\infty$. The squared estimate obeys $\widehat I_n(f_2)^2\ge n^{-2}f_2(X_1)^2$, so its second moment is infinite. By [F7] it has no finite variance, and the smooth variance theorem does not apply to this integrable singularity. [F2, F4, F6, F7, step 1.2, algebra] ∎

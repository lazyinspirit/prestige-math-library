---
id: thm-rqmc-nested-scramble-zero-net-variance-bound
kind: theorem
title: "Variance bound for a nested scramble of a $(0,m,d)$-net"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - lem-rqmc-scrambled-net-variance-identity
  - lem-rqmc-zero-net-sharp-gain-bound
  - lem-b-adic-anova-parseval
  - def-moments-variance-and-covariance
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice through the L2 ANOVA/Parseval suppliers; the finite digit-count calculation is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, Theorem 3 and proof, pp. 1902–1904"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5, Theorem 17.3"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Assume Countable Choice. Let $a_1,\ldots,a_n$ be a $(0,m,d)$-net in base
$b\ge\max(d,2)$, where $n=b^m$, and let $X_1,\ldots,X_n$ be its nested
uniform scramble. For real Borel $f\in L^2([0,1)^d)$, with
$\sigma^2=\operatorname{Var}(f(U))$ for $U\sim\operatorname{Unif}([0,1)^d)$,
$$\operatorname{Var}\left(\frac1n\sum_{i=1}^nf(X_i)\right) \le\left(\frac b{b-1}\right)^{\min(m,d-1)}\frac{\sigma^2}{n} \le e\,\frac{\sigma^2}{n}.$$

## Facts & Assumptions

**Given:** Countable Choice, the stated net and scramble, and a real Borel square-integrable $f$.

[F1] [[lem-rqmc-scrambled-net-variance-identity]]: The scrambled-rule variance is $n^{-1}\sum_{u,\kappa}\Gamma_{u,\kappa}\sigma^2_{u,\kappa}(f)$.

[F2] [[lem-rqmc-zero-net-sharp-gain-bound]]: For this net, every gain is at most $(b/(b-1))^{\min(m,d-1)}$.

[F3] [[lem-b-adic-anova-parseval]]: The component variances sum to $\operatorname{Var}(f(U))$.

[F4] [[def-moments-variance-and-covariance]]: $\sigma^2$ is finite and equals the centered second moment.

[A1] [[def-countable-choice]]: Countable Choice is inherited through [F1] and [F3].

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation in the Statement.

1.1 By [F1], the variance is $n^{-1}\sum_{u,\kappa}\Gamma_{u,\kappa}\sigma^2_{u,\kappa}(f)$. Each component variance is nonnegative, and [F2] bounds each gain above by $(b/(b-1))^{\min(m,d-1)}$. Therefore the sum is at most $n^{-1}(b/(b-1))^{\min(m,d-1)}\sum_{u,\kappa}\sigma^2_{u,\kappa}(f)$. [A1, F1, F2]

2.1 By [F3] the component sum in step 1.1 is $\sigma^2$. Also $\log((b/(b-1))^{\min(m,d-1)}) =\min(m,d-1)\log(1+1/(b-1)) \le(d-1)/(b-1)\le1$, because $\log(1+x)\le x$ for $x\ge0$ and $b\ge d$. Exponentiating gives the second inequality with $e$. [A1, F3, F4, step 1.1, algebra] ∎

---
id: thm-rqmc-nested-scramble-smooth-net-variance-rate
kind: theorem
title: "Smooth-integrand variance rate for nestedly scrambled $(\\lambda,t,m,d)$-nets"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - lem-rqmc-scrambled-net-variance-identity
  - lem-rqmc-general-net-gain-bound
  - lem-rqmc-smooth-anova-component-bound
  - def-moments-variance-and-covariance
  - def-countable-choice
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice through the L2 ANOVA/Parseval variance identity."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5, Theorem 17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1, Lemmas 2–3 and Theorem 3"
      url: "https://artowen.su.domains/reports/localanti.pdf"
---

## Statement

Assume Countable Choice. Fix $b\ge2$, $d\ge1$, $t\ge0$, and
$1\le\lambda<b$. For each sufficiently large $m\ge t$, let
$a_1,\ldots,a_n$ be a $(\lambda,t,m,d)$-net in base $b$, where $n=\lambda b^m$,
and let $X_1,\ldots,X_n$ be its nested uniform scramble. Suppose $f$ is real,
continuous on $[0,1]^d$, and every nonempty mixed coordinate derivative
$\partial_u f$ exists and is continuous on the cube. Then
$$\operatorname{Var}\left(\frac1n\sum_{i=1}^nf(X_i)\right) =O\left(n^{-3}(\log n)^{d-1}\right)\qquad(m\to\infty).$$
The implicit constant may depend on $b,d,t,\lambda$ and the suprema of the
mixed derivatives; the limit is along $n=\lambda b^m$.

## Facts & Assumptions

**Given:** Countable Choice, fixed $b,d,t,\lambda$, the nets and their nested scrambles, and the smooth integrand.

[F1] [[lem-rqmc-scrambled-net-variance-identity]]: The variance is the sum $n^{-1}\sum_{u,\kappa}\Gamma_{u,\kappa}\sigma^2_{u,\kappa}(f)$.

[F2] [[lem-rqmc-general-net-gain-bound]]: For fixed $b,t,d,\lambda$, gains vanish if $|\kappa|+|u|\le m-t$ and otherwise $|\Gamma_{u,\kappa}|\le\lambda b^{t+d-1}$.

[F3] [[lem-rqmc-smooth-anova-component-bound]]: For each $u\ne\varnothing$, $\sigma^2_{u,\kappa}(f)\le C_u b^{-2|\kappa|}$ with finite $C_u$ independent of $m$.

[F4] [[def-moments-variance-and-covariance]]: The target variance is the centered second moment, finite under the stated continuity.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: A continuous real function on the compact cube is bounded.

[A1] [[def-countable-choice]]: Countable Choice is inherited through [F1].

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses of the Statement.

1.1 By [F5], $f$ is bounded on the compact cube and is square-integrable; [F4] identifies its variance as the finite centered second moment. Put $G=\lambda b^{t+d-1}$. By [F1]–[F3] and nonnegativity of the component variances, $\operatorname{Var}(\widehat I_n) \le \dfrac{G}{n}\sum_{u\ne\varnothing}C_u \sum_{\substack{\kappa\in\mathbb N^{|u|}\\|\kappa|>m-t-|u|}}b^{-2|\kappa|}$, where each $C_u$ is fixed independently of $m$. [A1, F1, F2, F3, F4, F5]

2.1 Fix $u$ and write $p=|u|$. The number of nonnegative $p$-tuples with coordinate sum $r$ is $\binom{r+p-1}{p-1}$. For $m>t+d$, reindexing with $s=r-(m-t-p)\ge1$ gives $\sum_{|\kappa|>m-t-p}b^{-2|\kappa|} =b^{-2(m-t-p)}\sum_{s\ge1}\binom{m-t+s-1}{p-1}b^{-2s}.$ For fixed $p,b,t$, $\binom{m-t+s-1}{p-1}\le (m+s)^{p-1}/(p-1)!$; for $m\ge1$, $(m+s)^{p-1}\le m^{p-1}(1+s)^{p-1}$. The series $\sum_{s\ge1}(1+s)^{p-1}b^{-2s}$ converges, so the display is $O(b^{-2m}m^{p-1})=O(n^{-2}(\log n)^{p-1})$, since $b^{-2m}=\lambda^2n^{-2}$ and $m=\log_b(n/\lambda)$. [step 1.1, algebra]

3.1 There are finitely many nonempty subsets $u$, with $p\le d$. Substituting the bounds from step 2.1 into step 1.1 gives $\operatorname{Var}(\widehat I_n)=O(n^{-3}(\log n)^{d-1})$. The constants depend only on the fixed parameters and the derivative bounds in [F3]. [F3, step 1.1, step 2.1, algebra] ∎

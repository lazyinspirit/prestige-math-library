---
id: thm-truncated-perron-formula
kind: theorem
title: "A truncated Perron formula"
status: published
origin: pipeline
deps: [def-starred-summatory-function, lem-truncated-perron-kernel]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.2"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

If $F(s)=\sum a_nn^{-s}$ converges absolutely on $\Re s=c>0$, then
$$\left|\frac1{2\pi i}\int_{c-iT}^{c+iT}F(s)\frac{x^s}{s}\,ds-A^*(x)\right|\leq\sum_{n\ne x}|a_n|(x/n)^c\min\{1,(T|\log(x/n)|)^{-1}\}+\frac{c|a_x|}{T},$$
where the final term is present only if $x\in\mathbb Z_{>0}$.

## Facts & Assumptions

**Given:** $c,T,x>0$, absolute convergence $\sum_{n\ge1}|a_n|n^{-c}<\infty$, and the starred sum $A^*(x)=\sum_{n<x}a_n+\tfrac12a_x$ ([[def-starred-summatory-function]]).

[F1] The truncated kernel satisfies both bounds, including its separate value at $y=1$ ([[lem-truncated-perron-kernel]]).

## Proof

**Proof technique:** uniformly convergent series on a finite contour.

1.1 On the segment $s=c+it$, $|t|\le T$, one has $|a_nn^{-s}x^s/s|\le x^c|a_n|n^{-c}/c$. The summable majorant is independent of $t$, so the series converges uniformly and its finite contour integral is the sum of its integrals: the integral of every tail is bounded by $2Tx^c/c$ times the corresponding absolute-series tail, which tends to zero. Thus the integral in the Statement equals $\sum_na_nI(x/n,T)$. [given, algebra]

2.1 Only finitely many terms of $\sum_na_n\delta(x/n)$ are nonzero; by the prescribed endpoint convention it is $A^*(x)$. Subtract this finite sum from step 1.1 and apply [F1] termwise and the triangle inequality. The error series is absolutely bounded by the displayed majorant since its nonendpoint terms are at most $|a_n|(x/n)^c$. If $x$ is an integer the single term $n=x$ is bounded by $c|a_x|/T$. These are exactly the asserted terms. [F1, step 1.1, algebra] ∎

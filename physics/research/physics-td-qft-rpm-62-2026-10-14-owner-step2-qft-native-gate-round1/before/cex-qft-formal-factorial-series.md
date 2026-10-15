---
id: cex-qft-formal-factorial-series
kind: counterexample
domain: mathematics
title: Every formal coefficient exists while convergence radius vanishes
status: draft
origin: pipeline
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "OpenStax, Calculus Volume 2, §6.1 Power Series and Functions"
      url: "https://openstax.org/books/calculus-volume-2/pages/6-1-power-series-and-functions"
    - title: "R. W. Howell, Complex Analysis (free online textbook; formerly Complex Analysis for Mathematics and Engineering), §4.4"
      url: "https://complexanalysis.org/web/sec_power-series.html"
---

## Statement refuted

Define $\mathbb C\llbracket g\rrbracket$ to be the set of coefficient sequences $(a_n)_{n\ge0}$, written $\sum_{n\ge0}a_ng^n$, with coefficientwise equality and addition and Cauchy multiplication: the coefficient of $g^n$ in a product is $\sum_{k=0}^na_kb_{n-k}$, a finite sum. Formal membership makes no numerical convergence assertion. For numerical evaluation use $g^0:=1$ for every $g$, including $g=0$; numerical convergence means convergence of the partial sums in $\mathbb C$. In the extended nonnegative reals $[0,+\infty]$, the numerical radius of a coefficient sequence is

$$R:=\sup\{r\in[0,+\infty): \sum_{n\ge0}a_ng^n\text{ converges for every }g\in\mathbb C\text{ with }|g|<r\},$$

where the supremum is taken in the extended order, so $R=+\infty$ when the set is unbounded. The claim to refute is that every element of $\mathbb C\llbracket g\rrbracket$ has $R>0$.

For $n\in\mathbb N_0$, define $n!:=\prod_{k=1}^{n}k$, with the empty product $0!:=1$; thus $(n+1)!=(n+1)n!$. View these integer products as coefficients in $\mathbb C$ through the canonical embedding $\mathbb Z\hookrightarrow\mathbb C$.

## Facts & Assumptions

**Given:** A formal variable $g$ and the coefficient sequence $a_n=n!$ for all $n\ge0$.

[A1] The formal operations and coefficientwise equality are as defined in the Statement; the coefficient sequence itself does not assert convergence after numerical evaluation.

[F1] Each $n!$ is a positive integer, hence a nonzero coefficient in $\mathbb C$; positivity follows by induction from $0!=1$ and $(n+1)!=(n+1)n!$ with $n+1>0$.

## Counterexample

1.1 Each $n!$ is a finite complex number by [F1], so the sequence $(n!)_{n\ge0}$ defines an element $S(g)=\sum_{n\ge0}n!g^n$ of $\mathbb C\llbracket g\rrbracket$ by [A1], irrespective of numerical convergence. [given, A1, F1, algebra]

1.2 Fix any $g\ne0$ and put $t_n=n!g^n$. By [F1], $n!\ne0$, so $t_n\ne0$ for every $n$; the factorial recurrence in the Statement therefore gives $|t_{n+1}|/|t_n|=(n+1)|g|$, which is greater than $2$ for all sufficiently large $n$. Hence $|t_n|$ eventually grows by a factor greater than $2$ at every step, so $t_n$ does not tend to zero. [given, F1, algebra]

2.1 If the numerical series $\sum_nt_n$ converged, its partial sums $s_N:=\sum_{n=0}^Nt_n$ would converge, so $t_n=s_n-s_{n-1}\to0$ as $n\to\infty$; step 1.2 rules this out for every nonzero $g$. At $g=0$, [F1] and the convention $g^0=1$ leave only the constant term, so the series equals $0!=1$. Thus the series converges at no nonzero $g$. For every real $r>0$, the point $g=r/2$ lies in $|g|<r$ and gives divergence, so no positive $r$ satisfies the defining property of the radius; $r=0$ satisfies it vacuously. Therefore the defining set is exactly $\{0\}$, its supremum in $[0,+\infty]$ is $R=0$, and the claimed positive radius fails. [A1, F1, step 1.2, algebra] ∎

## Remarks

This example separates coefficientwise formal algebra from numerical convergence. It proves no convergence, summability, or divergence claim for any particular QFT perturbation series. A truncation error requires a separate estimate for a specified analytic model; formal coefficient identities alone do not provide one.

---
id: lem-local-composition-of-real-power-series
kind: lemma
title: "A composition of convergent real power series has a convergent power-series expansion wherever the inner series maps a neighbourhood into the outer disk of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cauchy-product-absolute, thm-double-series-fubini, cor-power-series-convergence-dichotomy]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $F(y)=\sum_{m\ge0}b_m(y-e)^m$ have positive radius $S$, and let $G(x)-e=\sum_{n\ge1}c_n(x-d)^n$ converge near $d$. If some $r>0$ satisfies

$$B_r:=\sum_{n\ge1}|c_n|r^n<S,$$

then $F\circ G$ is represented for $|x-d|<r$ by a convergent power series about $d$, obtained by expanding and regrouping $\sum_m b_m(G(x)-e)^m$.

## Facts & Assumptions

**Given:** The outer and inner series and $r$ from the statement.

[L1] The Cauchy product of two absolutely convergent series converges absolutely, and its absolute sum is at most the product of the two absolute sums ([[cor-cauchy-product-absolute]]).

[L2] The outer series converges absolutely at every distance below $S$ ([[cor-power-series-convergence-dichotomy]]).

[L3] An absolutely convergent multiple series may be regrouped ([[thm-double-series-fubini]]).

## Proof

**Proof technique:** constructive.

1.1 For each $m$, repeatedly use [L1] to expand $(G(x)-e)^m$ in powers of $x-d$; take the zeroth power to be $1$. For $|x-d|\le r$, the inner numerical series is absolutely convergent with absolute sum at most $B_r$, so the expanded $m$th power has absolute term sum at most $B_r^m$. [given, construct, L1]

2.1 Consequently, for $|x-d|\le r$, the sum of absolute values of all expanded terms with outer degree $m$ is at most $|b_m|B_r^m$. The series of these bounds converges because $B_r<S$ and [L2] applies. [step 1.1, L2, algebra]

3.1 By [L3], regroup the absolutely convergent expansion by total powers of $x-d$. The resulting power series converges on $|x-d|<r$ and sums to $\sum_m b_m(G(x)-e)^m=F(G(x))$. [step 1.1, step 2.1, L3, discharge-construct] ∎

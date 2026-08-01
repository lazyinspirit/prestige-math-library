---
id: thm-first-nonzero-derivative-test
kind: theorem
title: "The first nonzero higher derivative classifies a stationary point"
status: published
origin: session
deps: [thm-taylor-peano-remainder, def-taylor-polynomial-and-remainder, def-neighbourhood-r, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive, lem-power-monotone, lem-sign-preservation-near-a-limit, def-integer-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Statement

Let $n\ge2$, and suppose there is a real $\delta>0$ such that $f$ is
$n$-times differentiable on the open interval
$N_\delta(c)=(c-\delta,c+\delta)$. Suppose
$f^{(j)}(c)=0$ for $1\le j<n$, while $f^{(n)}(c)\ne0$. If $n$ is
even, $c$ is a strict local minimum when $f^{(n)}(c)>0$ and a strict local
maximum when it is negative. If $n$ is odd, $c$ is not a local extremum
and $f(x)-f(c)$ changes sign at $c$.

## Facts & Assumptions

**Given:** The derivative hypotheses on the open neighbourhood $N_\delta(c)$ of [[def-neighbourhood-r]].

[L1] Peano's formula is [[thm-taylor-peano-remainder]], with polynomial from [[def-taylor-polynomial-and-remainder]].

[L2] A function tending to a nonzero real keeps its sign nearby ([[lem-sign-preservation-near-a-limit]]); parity controls the sign of integer powers ([[def-integer-power]], [[lem-power-monotone]]).

[L3] The factorial $n!$ is a nonzero natural, so its canonical real is positive ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** cases.

1.1 Peano's formula gives $f(x)-f(c)=(x-c)^n(f^{(n)}(c)/\iota(n!)+\varepsilon(x))$, where $\varepsilon(x)\to0$. The parenthesized factor has the sign of $f^{(n)}(c)$ near $c$.  [L1, L2, L3]

2.1 If $n$ is even, $(x-c)^n>0$ for $x\ne c$, so the difference has one strict sign on both sides, giving the asserted minimum or maximum.  [assume-case even, step 1.1, L2]

2.2 If $n$ is odd, $(x-c)^n$ has opposite signs on the two sides, so the difference changes sign and no local extremum occurs.  [assume-case odd, step 1.1, L2]

3.1 Every natural $n\ge1$ is even or odd, so the cases are exhaustive.  [step 2.1, step 2.2, cases-exhaustive] ∎

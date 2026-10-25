---
id: lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical
kind: lemma
title: "At a zero of a real-analytic function, either some first nonzero coefficient makes the zero isolated or every local coefficient vanishes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, cor-power-series-convergence-dichotomy, cor-power-series-sums-are-smooth-with-coefficient-formula, cor-power-series-sums-are-continuous, lem-sign-preservation-near-a-limit, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds:

1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood of $c$;
2. there is a least $m\ge1$ with $f^{(m)}(c)\ne0$, and $c$ is an isolated zero of $f$.

## Facts & Assumptions

**Given:** A real-analytic $f$ ([[def-real-analytic-function]]) with $f(c)=0$ and a local expansion $f(x)=\sum_{n\ge0}a_n(x-c)^n$.

[L1] The coefficients are $a_n=f^{(n)}(c)/\iota(n!)$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L2] Every nonempty subset of $\mathbb N$ has a least member ([[thm-well-ordering-principle]]).

[L3] Power-series sums are continuous inside their radius. If a function has a nonzero limit at a limit point, it is nonzero on a sufficiently small punctured neighbourhood of that point ([[cor-power-series-sums-are-continuous]], [[lem-sign-preservation-near-a-limit]]).

[L4] A power series converges absolutely at every point strictly inside its radius ([[cor-power-series-convergence-dichotomy]]).

## Proof

**Proof technique:** cases.

1.1 If every $a_n=0$, the local expansion gives $f=0$ throughout its neighbourhood. [assume-case allzero, given]

1.2 Otherwise, [L2] gives a least $m$ with $a_m\ne0$. Since $a_0=f(c)=0$, one has $m\ge1$. [assume-case nonzero, given, L2, choose]

2.1 In the second case, write $f(x)=(x-c)^m g(x)$, where $g(x):=\sum_{j\ge0}a_{m+j}(x-c)^j$. At every nonzero point strictly inside the original local radius, the absolute series for $g$ is the corresponding absolute tail for $f$ multiplied by $|x-c|^{-m}$; it also converges at $c$. Thus $g$ has positive local radius and $g(c)=a_m\ne0$. [step 1.2, L4, algebra]

3.1 The alternatives in steps 1.1 and 1.2 are exhaustive. In the second, $g$ is continuous at $c$ and therefore has limit $g(c)=a_m\ne0$ there; [L3] makes $g$ nonzero on a smaller punctured neighbourhood, while it is already nonzero at $c$. Hence $f(x)=0$ there only when $x=c$, and the coefficient formula [L1] translates the least nonzero coefficient into the stated least nonzero derivative. [step 1.1, step 1.2, step 2.1, L1, L3, cases-exhaustive] ∎

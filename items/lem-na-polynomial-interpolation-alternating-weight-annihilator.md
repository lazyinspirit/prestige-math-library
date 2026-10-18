---
id: lem-na-polynomial-interpolation-alternating-weight-annihilator
kind: lemma
title: "Alternating interpolation weights annihilate lower-degree polynomials"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §6.5"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 45–46, Lagrange interpolation weights used to prove uniqueness."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 205–207, uniqueness argument for rational best approximants."
---

## Statement

Let $N\ge0$ and let $x_0<\cdots<x_{N+1}$ be real nodes. Set
$\omega(t)=\prod_{j=0}^{N+1}(t-x_j)$ and
$w_i=\prod_{j\ne i}(x_i-x_j)$. If $g$ is a real polynomial of degree at most
$N$, then
$$\sum_{i=0}^{N+1}\frac{g(x_i)}{w_i}=0.$$
If, for one fixed $\varepsilon\in\{-1,1\}$, the values
$\varepsilon(-1)^i g(x_i)$ are all nonnegative, then $g$ is the zero
polynomial.

## Facts & Assumptions

**Given:** $N\ge0$, strictly increasing real nodes $x_0,\ldots,x_{N+1}$, and
$g\in\mathcal P_N(\mathbb R)$.

[F1] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero polynomial of degree at most $N+1$ cannot vanish at $N+2$ distinct nodes; a nonzero polynomial of degree at most $N$ cannot vanish at $N+1$ distinct nodes.

## Proof

1.1 Each $w_i\ne0$. The Lagrange polynomial $L_i(t):=\omega(t)/((t-x_i)w_i)$ has degree $N+1$ and values $L_i(x_j)=1$ for $j=i$ and $0$ otherwise. Thus $H(t):=\sum_i g(x_i)L_i(t)$ has degree at most $N+1$ and agrees with $g$ at all $N+2$ nodes. By [F1], $H-g=0$, so $H=g$. [given, F1, construct, algebra]

2.1 The coefficient of $t^{N+1}$ in $L_i$ is $1/w_i$, while that coefficient in $g$ is $0$. Comparing the $t^{N+1}$ coefficients in $H=g$ from step 1.1 proves the displayed sum identity. [given, step 1.1, algebra]

3.1 The sign of $w_i$ is $(-1)^{N+1-i}$, since exactly the $N+1-i$ factors with $j>i$ are negative. Hence all terms $g(x_i)/w_i$ have one common weak sign when $\varepsilon(-1)^i g(x_i)\ge0$. Their sum is $0$ by step 2.1, so every term is $0$, and all $N+2$ values $g(x_i)$ vanish. [given, step 2.1, algebra]

4.1 Since $g$ has degree at most $N$, its $N+2$ distinct roots in step 3.1 force $g=0$ by [F1]. [given, F1, step 3.1, algebra] ∎
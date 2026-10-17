---
id: lem-prox-indicator-is-euclidean-projection
kind: lemma
title: "The proximal map of an indicator is Euclidean projection"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-proper-closed-convex-function-on-rn
  - def-convex-subset-of-euclidean-space
  - def-proximal-mapping
  - def-indicator-function-of-closed-convex-set
  - def-euclidean-inner-product
  - thm-nearest-point-in-a-nonempty-closed-convex-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §2.4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §8.1.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

Let $C\subseteq\mathbb R^n$ be nonempty, closed and convex. Its indicator $\iota_C$ is proper, closed and convex in the convention of [[def-proper-closed-convex-function-on-rn]]. For every $t>0$ and $v\in\mathbb R^n$, $\operatorname{prox}_{t\iota_C}(v)$ is the singleton consisting of the unique nearest point in $C$ to $v$.

## Facts & Assumptions

**Given:** The set $C$, scalar $t>0$, and point $v$ in the Statement.

[F1] [[def-indicator-function-of-closed-convex-set]]: $\iota_C$ is $0$ on $C$ and $+\infty$ off $C$.

[F2] [[def-convex-subset-of-euclidean-space]]: every convex combination of two points of $C$ belongs to $C$.

[F3] [[def-proper-closed-convex-function-on-rn]]: properness means nonempty effective domain; closedness means a closed epigraph.

[F4] [[thm-nearest-point-in-a-nonempty-closed-convex-set]]: for $n\ge1$, every point has a unique Euclidean nearest point in a nonempty closed convex set.

[F5] [[def-proximal-mapping]]: $\operatorname{prox}_{t\iota_C}(v)$ is the set of global minimizers of $\iota_C(u)+\|u-v\|_2^2/(2t)$.

[F6] [[def-euclidean-inner-product]]: $\mathbb R^0$ is the singleton zero vector space, and its norm and inner product are zero.

## Proof

1.1 Since $C$ is nonempty, some $x\in C$ has $\iota_C(x)=0<+\infty$, so the indicator is proper. If $x,y\in C$, convexity of $C$ puts every convex combination in $C$, where the indicator is zero; if either endpoint is outside $C$, the convexity inequality is automatic for an interior coefficient, and at endpoints it is equality. Thus $\iota_C$ is convex. [F1, F2, F3, given, choose]

1.2 Its epigraph is exactly $C\times[0,+\infty)$: for $x\in C$ the inequality $0\le s$ is required, and for $x\notin C$ no real $s$ satisfies $+\infty\le s$. This product is closed because both factors are closed, so $\iota_C$ is closed. [F1, F3, given, algebra]

1.3 If $n=0$, then $\mathbb R^0=\{0\}$ by [F6], and nonempty $C\subseteq\mathbb R^0$ is $\{0\}$. The proximal objective has this sole point as its unique minimizer, and it is also the unique nearest point in $C$ to $v=0$. Hence the claim holds for $n=0$. [F5, F6, given, algebra]

2.1 Now assume $n\ge1$. The proximal objective is finite exactly on $C$, where it equals $\|u-v\|_2^2/(2t)$. Since $2t>0$, minimizing it over all $\mathbb R^n$ is equivalent to minimizing distance from $v$ over $C$. By [F4] the latter has a unique minimizer, which is therefore exactly the singleton in [F5]. [F4, F5, given, algebra] ∎


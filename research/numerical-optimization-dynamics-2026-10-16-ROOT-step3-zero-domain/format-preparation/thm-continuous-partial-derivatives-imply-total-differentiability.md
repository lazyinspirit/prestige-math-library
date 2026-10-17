---
id: thm-continuous-partial-derivatives-imply-total-differentiability
kind: theorem
title: "If all partial derivatives exist on a neighbourhood and are continuous at a point, then the map is totally differentiable there with Jacobian derivative"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-coordinate-telescoping-on-a-euclidean-ball, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, thm-mean-value-inequality, thm-componentwise-limits-and-continuity, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-linear-map, def-euclidean-inner-product, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^m$ be open and let $f:U\to\mathbb R^n$. Suppose every partial derivative $\partial_jf$ exists on a neighbourhood of $a\in U$ and is continuous at $a$. Then $f$ is totally differentiable at $a$, and $Df(a)$ is the linear map with matrix $Jf(a)$.

## Facts & Assumptions

**Given:** The stated neighbourhood existence and continuity hypotheses for all vector partial derivatives.

[L1] Coordinate-by-coordinate increments stay inside a Euclidean ball and telescope the total increment ([[lem-coordinate-telescoping-on-a-euclidean-ball]]).

[L2] The vector mean-value inequality says $\lVert f(b)-f(a)\rVert_2\le M(b-a)$ on a real interval when the derivative norm is bounded by $M$ ([[thm-mean-value-inequality]]).

[L3] Cauchy--Schwarz gives $\sum_{j<m}|h_j|\le\sqrt m\,\|h\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L4] The space $\mathbb R^0$ is the zero space, its standard basis is empty, and its Euclidean norm is zero ([[lem-standard-basis-of-f-n]] clause 5, [[def-euclidean-inner-product]]). Coordinate matrices represent linear maps by their finite coordinate sums, including empty rows or columns.

[L5] A Euclidean linear map preserves real linear combinations in all finite dimensions ([[def-euclidean-linear-map]]). Total differentiability is the normwise epsilon-delta remainder estimate, including its explicit zero-dimensional cases ([[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 If $m=0$, then $a=0$, $U=\{0\}$, and the only increment is $h=0$. The unique linear map $L:\mathbb R^0\to\mathbb R^n$ has $L0=0$, so $f(a+h)-f(a)-Lh=0$ for every admissible increment. It satisfies the normwise remainder estimate with any $\delta>0$. There are no coordinate directions; $Jf(a)$ is the empty-column $n\times0$ matrix of $L$. Thus the conclusion holds without dividing by $m$ or invoking a punctured limit at an isolated point. [given, L4, L5, algebra]

1.2 If $m\ge1$ and $n=0$, every value of $f$ is the unique zero vector. The unique linear map $L:\mathbb R^m\to\mathbb R^0$ therefore leaves zero remainder for every increment, and its matrix, like $Jf(a)$, has zero rows. This proves the conclusion directly, without applying the positive-codomain vector mean-value inequality. For the rest of the proof assume $m,n\ge1$. [given, L4, L5, algebra]

1.3 Choose a ball around $a$ on which the partial derivatives exist. Given $\varepsilon>0$, continuity at $a$ gives a smaller ball on which every $\|\partial_jf(z)-\partial_jf(a)\|_2<\varepsilon/m$. [given, L1, L2]

2.1 For $h$ in that smaller ball, [L1] writes the increment as coordinate segments. On each segment apply [L2] to the one-variable map obtained after subtracting the fixed linear term $Jf(a)$; its derivative norm is at most $\varepsilon/m$. [step 1.3, L2, algebra]

3.1 Summing the segment bounds gives $\|f(a+h)-f(a)-Jf(a)h\|_2\le(\varepsilon/m)\sum_j|h_j|\le\varepsilon\|h\|_2/\sqrt m\le\varepsilon\|h\|_2$. Since $\varepsilon$ is arbitrary, this verifies the normwise remainder condition and $Jf(a)$ is $Df(a)$. Together with the two zero-dimensional cases this proves the full Statement. [step 1.1, step 1.2, step 1.3, step 2.1, L3, L5] ∎

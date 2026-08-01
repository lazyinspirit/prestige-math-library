---
id: thm-continuous-partial-derivatives-imply-total-differentiability
kind: theorem
title: "If all partial derivatives exist on a neighbourhood and are continuous at a point, then the map is totally differentiable there with Jacobian derivative"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-coordinate-telescoping-on-a-euclidean-ball, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, thm-mean-value-inequality, thm-componentwise-limits-and-continuity, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

## Proof

**Proof technique:** direct.

1.1 Choose a ball around $a$ on which the partial derivatives exist. Given $\varepsilon>0$, continuity at $a$ gives a smaller ball on which every $\|\partial_jf(z)-\partial_jf(a)\|_2<\varepsilon/m$. [L1, L2]

2.1 For $h$ in that smaller ball, [L1] writes the increment as coordinate segments. On each segment apply [L2] to the one-variable map obtained after subtracting the fixed linear term $Jf(a)$; its derivative norm is at most $\varepsilon/m$. [step 1.1, L2, algebra]

3.1 Summing the segment bounds gives $\|f(a+h)-f(a)-Jf(a)h\|_2\le(\varepsilon/m)\sum_j|h_j|\le\varepsilon\|h\|_2/\sqrt m\le\varepsilon\|h\|_2$. Since $\varepsilon$ is arbitrary, the normalized remainder tends to zero and $Jf(a)$ is $Df(a)$. [step 1.1, step 2.1, L3] ∎

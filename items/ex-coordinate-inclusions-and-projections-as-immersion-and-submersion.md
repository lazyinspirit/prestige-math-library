---
id: ex-coordinate-inclusions-and-projections-as-immersion-and-submersion
kind: example
title: "Coordinate inclusions are immersions and coordinate projections are submersions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-immersion-submersion-and-constant-rank-map, thm-total-derivative-computes-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersions and Submersions"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Example

For $m\le n$, the coordinate inclusion

$$j:\mathbb R^m\to\mathbb R^n,\qquad j(u)=(u,0)$$

is an immersion. For $n\le m$, the coordinate projection

$$\pi:\mathbb R^m\to\mathbb R^n,\qquad \pi(u,v)=u$$

is a submersion.

## Facts & Assumptions

**Given:** The two displayed coordinate maps.

[F1] A smooth map is an immersion exactly when its differential is injective
at every point, and is a submersion exactly when its differential is surjective
at every point ([[def-immersion-submersion-and-constant-rank-map]]).

[L1] For a totally differentiable Euclidean map, the differential is computed
by the Jacobian matrix
([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Verification
**Proof technique:** direct.

1.1 The coordinate inclusion $j$ is linear, so directly from the definition of the total derivative its differential at every point is $j$ itself. Its Jacobian is the injective block matrix $\begin{bmatrix}I_m\\0\end{bmatrix}$, in agreement with [L1]. Hence $j$ is an immersion by [F1]. [F1, L1, given, algebra]

1.2 The projection $\pi$ is linear, so its differential at every point is $\pi$ itself. Its Jacobian is the surjective block matrix $\begin{bmatrix}I_n&0\end{bmatrix}$, in agreement with [L1]. Hence $\pi$ is a submersion by [F1]. [F1, L1, given, algebra]

2.1 This verifies the example. [step 1.1, step 1.2] ∎

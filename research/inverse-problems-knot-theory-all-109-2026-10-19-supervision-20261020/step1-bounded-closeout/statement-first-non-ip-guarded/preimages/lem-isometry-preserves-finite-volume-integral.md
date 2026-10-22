---
id: lem-isometry-preserves-finite-volume-integral
kind: lemma
title: "An isometry preserves the finite hyperbolic volume integral"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-pared-hyperbolic-structures-and-volume
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-riemannian-volume-density
  - def-countable-choice
  - thm-monotone-convergence-for-the-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "ACω is assumed for the cited change-of-variables and monotone-convergence branches; the second-countable coordinate cover itself has a countable subcover."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
      locator: "Proposition 16.6(d), pp.407–408, change of variables for oriented manifolds"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Propositions 15.29–15.33 and Corollary 15.34, Riemannian volume density"
---

## Statement

Assume countable choice. Let $M$ and $N$ be second-countable oriented hyperbolic three-manifolds, and let $f:M\to N$ be an isometry. Then
$$
\int_M d\operatorname{vol}_M=\int_N d\operatorname{vol}_N.
$$
In particular, if either volume is finite, then both are finite and the values agree.

## Statement references

[John M. Lee, *Introduction to Smooth Manifolds*, Proposition 16.6(d)](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf)

[John M. Lee, *Introduction to Smooth Manifolds*, Propositions 15.29–15.33 and Corollary 15.34](https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html)

## Facts & Assumptions

**Given:** Countable choice, second-countable oriented hyperbolic three-manifolds $M,N$, and an isometry $f:M\to N$.

[A1] Countable choice, written AC$_\omega$, is [[def-countable-choice]].

[F1] [[def-riemannian-volume-density]] defines the density in coordinates as $\sqrt{\det G}\,|dx^1dx^2dx^3|$.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] states that for a $C^1$ diffeomorphism $T:U\to V$ between open subsets of $\mathbb R^3$ and every nonnegative Lebesgue-measurable $h$ on $V$, $\int_V h=\int_U(h\circ T)|\det DT|$ under AC$_\omega$.

[F3] [[thm-monotone-convergence-for-the-integral]] identifies the integral over a countable increasing union with the limit of the integrals over its finite partial unions.

[F4] [[def-pared-hyperbolic-structures-and-volume]] defines volume as the nonnegative integral of the Riemannian volume density.

## Proof

1.1 Since $f$ is an isometry, $f^*g_N=g_M$. In any coordinate charts, if $J=Df$ is the coordinate derivative, then the metric matrices satisfy $G_M=J^{\mathsf T}(G_N\circ f)J$. Taking determinants gives $\sqrt{\det G_M}=|\det J|\sqrt{\det(G_N\circ f)}$. Thus $f$ pulls the Riemannian volume density of $N$ back to that of $M$, regardless of whether it preserves orientation. [given, F1, algebra]

2.1 Consider the set of ALL coordinate-neighborhood pairs $(U,V)$ with $f(U)\subset V$. It covers $M$. Fix a countable basis of $M$; for each basis member contained in some such $U$, use [A1] to select one containing pair. Their selected $U$ neighborhoods form a countable cover $(U_j)_{j\ge1}$, with corresponding $V_j$. Thus no point-indexed choice of charts is required. Make it disjoint by setting $A_1=U_1$ and $A_j=U_j\setminus\bigcup_{i<j}U_i$; these are Borel, disjoint and cover $M$. In coordinates on $U_j,V_j$, apply [F2] to the nonnegative measurable function equal to the target density times the indicator of $f(A_j)$. The Jacobian identity in step 1.1 yields $\operatorname{Vol}_M(A_j)=\operatorname{Vol}_N(f(A_j))$. The sets $f(A_j)$ are disjoint and cover $N$. [given, A1, F2, step 1.1, construct]

3.1 The indicators of the finite unions $\bigcup_{j\le n}A_j$ increase to $1_M$. By [F3] and [F4], the volume of $M$ is the limit of the sums $\sum_{j\le n}\operatorname{Vol}_M(A_j)$, and the same holds for $N$ and the sets $f(A_j)$. These finite sums agree term by term by step 2.1; their limits therefore agree in $[0,\infty]$. If one volume is finite, their common value is finite. [F3, F4, step 2.1, algebra] ∎

## Proof references

[John M. Lee, *Introduction to Smooth Manifolds*, Proposition 16.6(d)](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf)

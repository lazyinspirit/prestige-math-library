---
id: lem-tdmath-relative-interior-segment
kind: lemma
title: Relative interiors of finite-dimensional convex sets
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-convex-subset-of-euclidean-space]
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III.B–III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: pass
---

## Statement

For a nonempty set $C$, define $\operatorname{aff}C=\{\sum_{j=1}^N a_jc_j:N\ge1,\ c_j\in C,\ a_j\in\mathbb R,\ \sum_j a_j=1\}$. With a fixed $c_0\in C$, this is $c_0+\operatorname{span}\{c-c_0:c\in C\}$, where span consists of finite linear combinations. An affine Euclidean space is such a translate of a finite-dimensional linear subspace with its induced Euclidean distance. Relative balls use this distance; interior means containing a relative ball, and closure means every relative ball meets the set. Let $C$ be a nonempty convex subset of a finite-dimensional affine Euclidean space $H$. Its relative interior $\operatorname{ri}_H C$ is the interior in $H=\operatorname{aff}C$. Then $\operatorname{ri}_H C$ is nonempty. If $w\in\operatorname{ri}_H C$, $y\in\overline{C}^{\,H}$, and $0\le t<1$, then $(1-t)w+ty\in\operatorname{ri}_H C$.

## Facts & Assumptions

**Given:** A nonempty convex $C\subseteq H$ in finite dimension. Affine dimension is the dimension of its translation space.

[F1] [[def-convex-subset-of-euclidean-space]]: every finite convex combination of points of $C$ belongs to $C$.

## Proof

1.1 Let $k=\dim(\operatorname{aff}C)$. If $k=0$, then $C$ is a singleton and is open in its affine hull. If $k>0$, the definition of affine hull supplies $k+1$ affinely independent points of $C$ spanning it. Their simplex lies in $C$ by [F1]. Its barycenter has all $k+1$ barycentric coordinates positive; sufficiently small coordinate perturbations preserve positivity and their sum one. Thus a relative neighborhood of that barycenter lies in the simplex, proving $\operatorname{ri}_H C\ne\varnothing$. [given, F1, construct]

2.1 Fix $w,y,t$ as in the Statement. The case $t=0$ is $w\in\operatorname{ri}_H C$. Suppose $0<t<1$ and put $q=(1-t)w+ty$. Choose $r>0$ so the relative ball $B_H(w,r)$ lies in $C$. Since $y\in\overline{C}^{\,H}$, choose one $y_*\in C$ with $\|y_*-y\|<(1-t)r/(4t)$. For every $q'\in B_H(q,(1-t)r/4)$, put $w_*=(q'-ty_*)/(1-t)$. Then $\|w_*-w\|<r/2$, so $w_*\in C$ and $q'=(1-t)w_*+ty_*\in C$ by [F1]. A relative neighborhood of $q$ lies in $C$, so $q\in\operatorname{ri}_H C$. [given, F1, choose, algebra] ∎

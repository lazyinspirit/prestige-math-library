---
id: lem-compact-euclidean-arc-isotopies-have-canonical-controlled-extensions
kind: lemma
title: Compact Euclidean arc isotopies have canonical controlled extensions
status: draft
origin: session
deps:
  - thm-euclidean-inverse-function-theorem
  - thm-fundamental-theorem-for-nonautonomous-smooth-odes
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $f:[0,1]\times[0,1]\to\mathbb R^n$ be a smooth isotopy of interval embeddings, supplied with a smooth extension to an open neighborhood of its source rectangle. Suppose $|\partial_tf|\le m$. Let $K$ be the compact closure of its spatial positions with nonzero time velocity, and let $W\subseteq\mathbb R^n$ be open with $K\subseteq W$. For every $e>0$ there is a compactly supported smooth time-dependent field $G(x,t)$, supported spatially in $W$, such that $G(f(s,t),t)=\partial_tf(s,t)$ and $|G|<m+e$. Its flow is an ambient isotopy extending $f$, fixed outside $W$, and moving any point through length at most $m+e$ over the unit time interval. Given the supplied extension, $W$, and $e$, the construction can be specified using least indices in fixed countable enumerations; no choice principle is required.

## Facts & Assumptions

**Given:** The supplied smooth family and extension, the open support set $W$, and $e>0$.

[F1] A Euclidean map with invertible derivative has a unique smooth local inverse. [[thm-euclidean-inverse-function-theorem]]

[F2] A smooth nonautonomous Euclidean field has unique local solutions, smoothly dependent on initial time and state. [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]

## Proof

**Given:** The data in the Statement.

1.1 Its track $T=\{(f(s,t),t):0\le s,t\le1\}$ is compact and embedded: the track map is injective, and its differential is injective because $\partial_sf\ne0$ and the last coordinate is $t$. Near each track point choose an index $j$ with $\partial_sf_j\ne0$. On a small source rectangle the map $(s,t)\mapsto(f_j(s,t),t)$ has a smooth inverse by [F1]. Write its source coordinate as $s_j(x_j,t)$. The vector function $V_j(x,t)=\partial_tf(s_j(x_j,t),t)$ is a smooth extension of the prescribed track velocity near that track point. Shrink the ambient neighborhood so it meets no other part of the track and $|V_j|<m+e$ there. Boundary points use the supplied extension across the source boundary. [F1, given, construct]

2.1 These choices can be made without a sequence of arbitrary selections. Enumerate all finite coordinate indices $j$, all rational source rectangles with closures in the supplied extension domain on which the map $(s,t)\mapsto(f_j(s,t),t)$ is injective with nonzero Jacobian, and all pairs of concentric rational ambient balls whose closures lie in the inverse domain, meet only the corresponding local track, and satisfy the norm bound from step 1.1. Every local inverse in this list is uniquely determined by the input family and its source rectangle. The smaller balls cover $T$, by step 1.1. Take the first finite subcollection covering $T$. For each selected pair use the standard explicit radial smooth bump $b_i$, positive on the smaller ball and zero outside the larger ball; put $b=\sum_i b_i$. On $\{b>0\}$ define $V=\sum_i b_iV_i/b$. It equals the prescribed velocity along $T$, and has norm less than $m+e$ by convexity. Take the first positive reciprocal integer $a<\min_Tb$, and a fixed smooth scalar cutoff $q$ zero for $b\le a/2$ and one for $b\ge a$. Then $qV$, extended by zero where $b=0$, is smooth, matches the velocity, and has compact spacetime support. [step 1.1, construct]

3.1 Construct likewise a spatial cutoff $\eta$ equal to one on $K$ and with compact support in $W$: take the first finite family of rational inner/outer ball pairs with outer closures in $W$ and inner balls covering $K$, sum their explicit radial bumps, and apply a fixed threshold cutoff below the positive minimum on $K$. Put $G=\eta qV$. On a track point with nonzero velocity its spatial position belongs to $K$, so $\eta=1$; at every other track point the velocity is zero. Thus $G$ still matches the prescribed velocity everywhere. It has the required support and norm bounds. If $K$ is empty use $G=0$. All enumerations and least-index conditions depend only on the supplied data. Finite subcovers exist by compactness, and selecting their least codes makes the construction a specified function rather than an invocation of countable choice. [step 2.1, construct]

4.1 By [F2], $G$ has a unique local evolution. Since $|G|<m+e$, any solution approaching a finite time endpoint is a Cauchy curve, with $|x(t)-x(u)|\le(m+e)|t-u|$. Completeness of $\mathbb R^n$ gives a limit. The local theorem at that endpoint and limit extends the solution by uniqueness; hence the evolution exists for all times in $[0,1]$. Its local smooth dependence gives global smooth dependence by finite composition along a solution over the compact time interval. Uniqueness gives the cocycle law and the inverse evolution obtained by reversing the initial and final times, so each evolution map is a diffeomorphism. The curves $t\mapsto f(s,t)$ solve the same initial-value problems, hence are carried by this flow. Outside $W$ the constant curve is a solution and is fixed by uniqueness. Integration of the norm bound gives the asserted length estimate. This completes the construction without an additional choice assumption. [F2, step 3.1, construct] ∎

## Remarks

The specified extension germ is useful when this lemma is called repeatedly. In the application, the countable dense arc families consist of fixed extended base curves plus cutoff times rational polynomials, so each member and each interpolating family comes with its extension. No countable selection of unspecified smooth extensions is required.

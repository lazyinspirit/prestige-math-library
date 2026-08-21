---
id: lem-antipodal-sphere-cover
kind: lemma
title: 'Antipodal complements cover $S^n$ by simply connected sets with path-connected overlap for $n\ge2$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-euclidean-spheres-and-closed-balls, def-homeomorphism-and-open-maps,
       thm-componentwise-limits-and-continuity,
       lem-algebra-of-continuous-real-maps-on-a-space,
       thm-continuity-characterisations-top, thm-product-universal-property,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-simply-connected, thm-induced-fundamental-group-map-functoriality,
       lem-punctured-rn-is-polygonally-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.14"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $n\ge2$ and write $S^n\subseteq\mathbb R^{n+1}$ for the unit sphere ([[def-euclidean-spheres-and-closed-balls]]). For any coordinate unit vector $e_j$, put

$$U_j=S^n\setminus\{e_j\},\qquad V_j=S^n\setminus\{-e_j\}.$$

Then $U_j$ and $V_j$ are open, simply connected subsets of $S^n$, they cover $S^n$, and their intersection is path-connected. More precisely, stereographic projection gives homeomorphisms $U_j\cong\mathbb R^n$, $V_j\cong\mathbb R^n$, and $U_j\cap V_j\cong\mathbb R^n\setminus\{0\}$.

## Facts & Assumptions

**Given:** A natural $n\ge2$, a coordinate index $j<n+1$, the unit vector $e_j$, and the unit sphere $S^n\subseteq\mathbb R^{n+1}$.

[F1] The unit sphere $S^n$ is the set of $z\in\mathbb R^{n+1}$ with $\lVert z\rVert_2=1$ ([[def-euclidean-spheres-and-closed-balls]]).

[F2] Sums and products of continuous real maps are continuous, and a quotient is continuous wherever its denominator is nonzero ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F3] Continuity of maps into a finite-dimensional Euclidean space is equivalent to continuity of every coordinate map ([[thm-componentwise-limits-and-continuity]]).

[F4] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

[F5] Every nonempty convex subset of $\mathbb R^n$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F6] For $n\ge2$, $\mathbb R^n\setminus\{0\}$ is polygonally connected, hence path-connected ([[lem-punctured-rn-is-polygonally-connected]]).

[F7] Pointed homeomorphisms induce mutually inverse fundamental-group homomorphisms ([[thm-induced-fundamental-group-map-functoriality]]).

[F8] A space is simply connected when it is nonempty and path-connected and its fundamental group has one element at every basepoint ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 Delete the $j$-th coordinate to identify $e_j^\perp$ with $\mathbb R^n$, and write $z=u+t e_j$. Projection from $e_j$ is $\sigma_+(z)=u/(1-t)$ on $U_j$, with inverse $$\tau_+(y)=\frac{2y}{\lVert y\rVert_2^2+1}+\frac{\lVert y\rVert_2^2-1}{\lVert y\rVert_2^2+1}e_j.$$ Projection from $-e_j$ is $\sigma_-(z)=u/(1+t)$ on $V_j$, with inverse $$\tau_-(y)=\frac{2y}{\lVert y\rVert_2^2+1}+\frac{1-\lVert y\rVert_2^2}{\lVert y\rVert_2^2+1}e_j.$$ Since $\lVert y\rVert_2^2\ge0$, the inverse denominator $\lVert y\rVert_2^2+1$ is positive. The sphere equation $\lVert u\rVert_2^2+t^2=1$ and deletion of the relevant pole give $1-t\ne0$ on $U_j$ and $1+t\ne0$ on $V_j$. The same equation shows that both inverse formulas land on $S^n$, and direct substitution gives $\sigma_\pm\tau_\pm=\operatorname{id}$ and $\tau_\pm\sigma_\pm=\operatorname{id}$. [F1, algebra]

2.1 The coordinate $t$ is continuous, so $U_j=\{z\in S^n:t<1\}$ and $V_j=\{z\in S^n:t>-1\}$ are open by [F4]. They cover the sphere because no point has both $t=1$ and $t=-1$. The formulas in step 1.1 are continuous by [F2] and [F3], so they are the asserted homeomorphisms. Moreover $\sigma_+$ sends the deleted point $-e_j$ to $0$, hence restricts to a homeomorphism $U_j\cap V_j\cong\mathbb R^n\setminus\{0\}$. [step 1.1, F2, F3, F4]

3.1 The space $\mathbb R^n$ is nonempty and convex, so [F5] makes it simply connected. Each homeomorphism in step 2.1 transports paths, and [F7] applied to it and its inverse transports the one-element fundamental group at every basepoint. Thus [F8] makes both $U_j$ and $V_j$ simply connected. [step 2.1, F5, F7, F8]

4.1 By [F6] and the last homeomorphism in step 2.1, $U_j\cap V_j$ is path-connected. This proves every assertion. [step 2.1, F6] ∎

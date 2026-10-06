---
id: lem-local-fixed-point-index-splits-under-perturbation
kind: lemma
title: An isolated fixed point splits under perturbation, preserving its index
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-local-fixed-point-index
  - thm-index-of-a-nondegenerate-fixed-point
  - lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent
  - def-nondegenerate-fixed-point
  - def-isolated-zero-and-local-index-of-a-vector-field
  - def-nondegenerate-zero-of-a-vector-field
  - lem-local-index-is-additive-under-a-transverse-perturbation
  - thm-morse-sard-for-smooth-manifolds
  - cor-regular-values-have-null-complement-and-are-dense
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-manifold-chart-coordinate-domain-and-coordinate-functions
  - def-linear-isomorphism-and-invertible-linear-map
  - lem-a-closed-discrete-subset-of-a-compact-space-is-finite
  - def-countable-choice
  - lem-index-sum-of-an-outward-field-is-the-gauss-degree
  - thm-compactness-under-continuous-maps
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall
        1974; complete 236-page PDF)
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §4, printed pp. 126-127 (Splitting Proposition: a small generic
        perturbation splits a fixed point into Lefschetz fixed points, supported
        near it)"
    - title: Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro
        Brasileiro de Topologia, Rio Claro 2006 (complete notes)
      url: https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf
      locator: Lecture II §6, printed pp. 13-15 (the index is unchanged under a
        compactly fixed perturbation and additive over disjoint pieces)
dependency_level: 5
---

## Statement

Assume countable choice. Let $M$ be a closed smooth $n$-manifold, $n\ge1$, and $f:M\to M$ smooth with all fixed points isolated. For every open neighbourhood $V$ of a fixed point $x$, there is a smooth $g$, arbitrarily close to $f$, homotopic to it through a homotopy supported in a compact subset of $V$, such that every fixed point of $g$ in $V$ is nondegenerate. Choose disjoint small closed chart balls $B_z\Subset V$ around the finitely many points $z\in\operatorname{Fix}(f)\cap V$. The construction keeps $g=f$ outside their interiors, and each local replacement satisfies $$\sum_{y\in\operatorname{Fix}(g)\cap B_z}\operatorname{ind}_y(g)=\operatorname{ind}_z(f).$$ In particular if $V\cap\operatorname{Fix}(f)=\{x\}$, its new fixed-point index sum is $\operatorname{ind}_x(f)$; for general $V$ the global index sum is unchanged. All sums are finite. Thus one isolated point can be split in an isolating neighbourhood, or all isolated points in a prescribed neighbourhood can be split simultaneously.

## Facts & Assumptions

**Given:** Countable choice and a closed smooth $n$-manifold $M$, $n\ge1$, a smooth $f:M\to M$ with all fixed points isolated, a fixed point $x$ of $f$ and a neighbourhood $V$ of $x$.

[F1] The index $\operatorname{ind}_x(f)$ is the degree of the normalized displacement $v\mapsto d(\varepsilon v)/|d(\varepsilon v)|$ in an admissible chart, where $d(u)=u-\widehat f(u)$; it is independent of the chart and radius ([[def-local-fixed-point-index]], [[lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]]).

[F2] For a smooth field on a closed Euclidean ball, nonzero on its boundary, its finite isolated-zero index sum equals the boundary degree (reduced degree for $n=1$), by [[lem-index-sum-of-an-outward-field-is-the-gauss-degree]]. Use only the chart-induced trivialization here; the corresponding restricted case is also [[lem-local-index-is-additive-under-a-transverse-perturbation]]. Two fields agreeing on the boundary therefore have the same index sum.


[F3] For a smooth map $G$ with isolated fixed point $y$, nondegeneracy of $y$ is the invertibility of $I-DG_y$ ([[def-nondegenerate-fixed-point]]), and then $\operatorname{ind}_y(G)=\operatorname{sign}\det(I-DG_y)$ ([[thm-index-of-a-nondegenerate-fixed-point]]); the chart displacement $u\mapsto u-\widehat G(u)$ is a smooth vector field whose zeros are the fixed points of $\widehat G$, with nondegenerate zeros corresponding to nondegenerate fixed points and with the same index ([[def-isolated-zero-and-local-index-of-a-vector-field]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F4] Regular values of a smooth map are dense and their complement is null ([[thm-morse-sard-for-smooth-manifolds]], [[cor-regular-values-have-null-complement-and-are-dense]]); for a compact set $K$ inside an open set $U$ there is a smooth bump equal to $1$ near $K$ and supported in $U$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F5] A closed discrete subset of a compact space is finite ([[lem-a-closed-discrete-subset-of-a-compact-space-is-finite]]). Continuous images of compact sets are compact, and a continuous real-valued function on a nonempty compact set attains its minimum ([[thm-compactness-under-continuous-maps]], clauses 1–2).

## Proof

1.1 Choose a target chart $(\varphi,U)$ at $x$ with $\varphi(x)=0$ and restrict the representative to $W=\varphi(U\cap f^{-1}(U)\cap V)$. It contains $0$. Choose $R>0$ with $\overline B_R\subset W$ and $d(u):=u-\widehat f(u)\ne0$ on $0<|u|\le R$. Fix $0<r<R$ and use [F4] to choose $\rho:\mathbb R^n\to[0,1]$ equal to one near $\overline B_r$ and supported in $B_R$. The compact annulus $K=\{r\le|u|\le R\}$ is nonempty, and [F5] gives $m=\min_K|d|>0$. The compact image $\widehat f(\overline B_R)$ lies in the open target chart image; a finite cover by balls with doubled radii inside that image supplies $\eta>0$ such that adding a vector of norm less than $\eta$ stays in it. [given, F1, F4, F5]

2.1 By [F4] choose a regular value $a$ of $d$ with $|a|<\min(m/2,\eta)$. Define $g_t(p)=\varphi^{-1}(\widehat f(u)+t\rho(u)a)$ for $u=\varphi(p)\in\overline B_R$, and $g_t=f$ elsewhere, for $0\le t\le1$. These definitions agree on an open collar of the boundary because $\operatorname{supp}\rho\Subset B_R$. They give a smooth homotopy, supported in the compact set $\varphi^{-1}(\operatorname{supp}\rho)\subset V$, with $g_0=f$; put $g=g_1$. The vector $a$ can be arbitrarily small. [step 1.1, F4, construct]

3.1 On $K$, the displacement $d-\rho a$ has norm at least $m-|a|>0$. Inside $B_r$ one has $\rho=1$ on a neighbourhood, so the fixed points of $g$ are exactly the preimages of the regular value $a$ under $d$. Their displacement derivative is $Dd$, which is invertible there. Hence they are nondegenerate by [F3]. The zero set is closed in $\overline B_R$ and discrete, so it is finite by [F5]. [step 1.1, step 2.1, F3, F5]

4.1 The fields $d$ and $d-\rho a$ have identical nonzero boundary values on $\partial B_R$. By [F2] their index sums agree. The first field has only the zero $0$, of index $\operatorname{ind}_x(f)$ by [F1]; each zero of the second has the corresponding fixed-point index by [F3]. This proves the local sum identity. Outside the support, $g=f$ on a neighbourhood of each old fixed point, so the germ clause of [[lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]] preserves its index. Countable choice is inherited from Sard. [step 1.1, step 3.1, F1, F2, F3]


5.1 For an arbitrary $V$, the fixed points of $f$ lying in it form a finite set. Choose mutually disjoint balls $B_z\Subset V$ around all of them, each isolating its centre and satisfying step 1.1. Perform steps 1.1–4.1 in each ball. The supports are disjoint and the formulas equal $f$ near every ball boundary, so they glue to one smooth map and one smooth supported homotopy. No new fixed point occurs outside the balls, and every old fixed point inside $V$ was included; hence every new fixed point in $V$ is nondegenerate. Summing the local identities gives global index preservation. Since there are finitely many bumps and all perturbation vectors may be chosen arbitrarily small, any prescribed smooth-neighbourhood bound is met by taking their finitely many vectors small enough. [step 1.1, step 2.1, step 3.1, step 4.1, F5] ∎

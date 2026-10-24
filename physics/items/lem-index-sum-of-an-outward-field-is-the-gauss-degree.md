---
id: lem-index-sum-of-an-outward-field-is-the-gauss-degree
kind: lemma
title: "The index sum of an outward field is the Gauss degree"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-reduced-degree-into-the-zero-sphere, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, def-degree-of-a-map-between-oriented-closed-manifolds, thm-degree-is-invariant-under-proper-smooth-homotopy, thm-regular-value-formula-for-degree, lem-degree-is-well-defined-and-independent-of-the-normalized-top-form, def-inward-outward-and-boundary-tangent-vectors, def-embedded-smooth-submanifold-with-boundary, def-induced-boundary-orientation, def-volume-form-on-an-oriented-manifold, def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, thm-general-stokes-theorem, def-countable-choice, thm-morse-sard-for-smooth-manifolds, cor-regular-values-have-null-complement-and-are-dense]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Lemma 3 (Hopf) with its proof, printed pp. 35-36"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Lemma 2.3.2 (Hopf) with proof, printed pp. 33-34"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $N\subset\mathbb R^m$ be a compact smooth $m$-dimensional submanifold with
boundary, $m\ge1$ ([[def-embedded-smooth-submanifold-with-boundary]]), and let
$Y$ be a smooth vector field on $N$ with only isolated zeros and $Y\ne0$ on
$\partial N$. Then, summing the componentwise degrees over the components of
$\partial N$ with the boundary orientation ([[def-induced-boundary-orientation]]),
$$\sum_{x\in N,\ Y(x)=0}\operatorname{ind}_xY=\deg\Bigl(\partial N\to S^{m-1},\ x\mapsto\frac{Y(x)}{|Y(x)|}\Bigr).$$
For $m=1$ the right-hand side is read as the reduced degree of the map
$\partial N\to S^0$: the oriented boundary of a compact oriented $1$-manifold is
balanced ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]),
so the reduced degree of [[def-reduced-degree-into-the-zero-sphere]] applies.
If in addition $Y$ points strictly outward along $\partial N$
([[def-inward-outward-and-boundary-tangent-vectors]]), the right-hand side
equals $\deg(g)$ for the Gauss map $g:\partial N\to S^{m-1}$ sending $x$ to the
outward unit normal. In particular the index sum is independent of $Y$.

## Facts & Assumptions

**Given:** A compact smooth $m$-manifold with boundary $N\subset\mathbb R^m$, oriented by the ambient orientation of $\mathbb R^m$, and a smooth field $Y$ on $N$ with $Y\ne0$ on $\partial N$ and only isolated zeros.

[F1] The zeros of $Y$ are finitely many: the zero set is closed, and an infinite closed discrete subset of the compact space $N$ would have an accumulation point $x\in N$ at which continuity gives $Y(x)=0$ while every neighbourhood of $x$ contains other zeros, contradicting isolatedness. ([[def-isolated-zero-and-local-index-of-a-vector-field]])

[F2] The index of an isolated zero is the degree of $x\mapsto Y(x)/|Y(x)|$ on a small sphere around the zero, with the standard orientations, and for $m=1$ the reduced degree of that map $S^0\to S^0$ ([[def-isolated-zero-and-local-index-of-a-vector-field]], [[def-reduced-degree-into-the-zero-sphere]]).

[F3] For $m\ge2$, a regular value exists by [[thm-morse-sard-for-smooth-manifolds]] and [[cor-regular-values-have-null-complement-and-are-dense]]. For a proper smooth map $F:C\to S^{m-1}$ from a nonempty connected closed
oriented $(m-1)$-manifold $C$ and a top form $\omega$ on $S^{m-1}$,
$$\int_CF^*\omega=\deg(F)\int_{S^{m-1}}\omega,$$
where the degree is the closed-manifold degree of
[[def-degree-of-a-map-between-oriented-closed-manifolds]], equal to the
compact-support cohomological degree of
[[thm-regular-value-formula-for-degree]], and where a normalized volume form
with integral one exists
([[def-volume-form-on-an-oriented-manifold]],
[[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]],
[[lem-degree-is-well-defined-and-independent-of-the-normalized-top-form]]).

[F4] Under $\mathrm{AC}_\omega$, manifold Stokes holds for a compact oriented manifold with boundary and a smooth $(m-1)$-form $\alpha$: $\int_{\partial N'}\alpha=\int_{N'}d\alpha$, the boundary carrying the induced boundary orientation ([[thm-general-stokes-theorem]], [[def-induced-boundary-orientation]]).

[F5] For $m=1$: $\partial N$ consists of finitely many points with signs $\varepsilon(x)$, and $\sum_{x\in\partial N}\varepsilon(x)=0$; the reduced degree of a map $h:\partial N\to S^0$ is $\frac12\sum_{x\in\partial N}\varepsilon(x)h(x)$ ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]], [[def-reduced-degree-into-the-zero-sphere]]).

[F6] If $Y$ is strictly outward on $\partial N$, with outward unit normal $g$ ([[def-inward-outward-and-boundary-tangent-vectors]]), then $\langle Y/|Y|,g\rangle>0$ pointwise, so $t\mapsto(tY/|Y|+(1-t)g)/|\cdots|$ is a homotopy from $Y/|Y|$ to $g$; homotopic maps have equal degree, and for $m=1$ a homotopy $S^0\times[0,1]\to S^0$ is constant in the time variable, so the reduced degrees agree ([[thm-degree-is-invariant-under-proper-smooth-homotopy]], [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

## Proof

1.1 By [F1] the zeros $p_1,\dots,p_k$ of $Y$ are finite; choose pairwise disjoint closed coordinate balls $D_1,\dots,D_k\subseteq N$ around them, so small that $Y\ne0$ on $\overline{D_i}\setminus\{p_i\}$ and $\partial D_i\cap\partial N=\varnothing$, and let $N':=N\setminus\bigcup_i\operatorname{int}D_i$, a compact oriented $m$-manifold with boundary on which the normalized field $f:=Y/|Y|:N'\to S^{m-1}$ is smooth. Its boundary is $\partial N'=\partial N\sqcup\bigsqcup_i\partial D_i$, where each $\partial D_i$ carries, as a piece of $\partial N'$, the orientation opposite to the boundary orientation of the removed ball $D_i$, since the outward normals of $N'$ and of $D_i$ are opposite along $\partial D_i$. [F1, F2, algebra]

2.1 For $m\ge2$ choose a volume form $\omega$ on $S^{m-1}$ with $\int_{S^{m-1}}\omega=1$ and apply [F4] to $\alpha=f^*\omega$: since $d\omega=0$, $\int_{\partial N'}f^*\omega=\int_{N'}f^*d\omega=0$. Evaluating the boundary integral componentwise with [F3] gives $0=\deg(\partial N\to S^{m-1})-\sum_i\operatorname{ind}_{p_i}Y$, because each small sphere $\partial D_i$ is mapped by $f$ with degree $\operatorname{ind}_{p_i}Y$ in its own boundary orientation by [F2] and therefore contributes $-\operatorname{ind}_{p_i}Y$ to $\partial N'$. [F2, F3, F4, step 1.1, algebra]

3.1 For $m=1$ use instead the $0$-form $\omega$ on $S^0$ with $\omega(\pm1)=\pm1$, so that $\int_{S^0}\omega=2$ and $\int_{\partial N'}f^*\omega=\sum_{x\in\partial N'}\varepsilon(x)f(x)$; Stokes gives $\sum_{x\in\partial N'}\varepsilon(x)f(x)=0$, and each removed pair contributes $f(p_i-\delta_i)-f(p_i+\delta_i)=-2\operatorname{ind}_{p_i}Y$ with the orientation of step 1.1 by [F2], so $\sum_i\operatorname{ind}_{p_i}Y=\frac12\sum_{x\in\partial N}\varepsilon(x)f(x)=\deg(\partial N\to S^0)$ by [F5], the claimed formula; this and step 2.1 prove the first assertion in both dimensions, and with it the index sum depends only on the boundary values of the normalized field. [F2, F4, F5, step 1.1, algebra]

4.1 If $Y$ is strictly outward, [F6] gives a homotopy from $x\mapsto Y(x)/|Y(x)|$ to the Gauss map $g$, so their degrees agree and the right-hand side equals $\deg(g)$; since $\deg(g)$ does not involve $Y$, the index sum is independent of the choice of the outward field. [F3, F6, step 3.1, algebra] ∎

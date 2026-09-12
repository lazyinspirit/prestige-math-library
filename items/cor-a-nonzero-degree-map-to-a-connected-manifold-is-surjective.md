---
id: "cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective"
kind: "corollary"
title: "A nonzero-degree map to a connected manifold is surjective"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-proper-smooth-map-by-compact-support-cohomology","prop-topological-manifolds-are-locally-compact-and-locally-path-connected","thm-compactness-under-continuous-maps","thm-compact-subset-of-a-hausdorff-space-is-closed","lem-chart-bump-at-a-point-with-prescribed-support","def-integral-of-an-oriented-chart-supported-top-form","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","thm-multidimensional-integral-properties"]
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, Theorem 5.4.1 and the consequence following it
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "contradiction"
---

## Statement

Let $F:M^n\to N^n$ be a proper smooth map between nonempty connected oriented smooth manifolds without boundary. If $\deg(F)\ne0$, then $F$ is surjective. This implication is choice-free.

## Facts & Assumptions

**Given:** The map and manifolds in the statement.

[F1] [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] gives $\int_MF^*\omega=\deg(F)\int_N\omega$ for every compactly supported top form $\omega$.

[F2] [[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]] supplies, inside any neighbourhood of a point, an open coordinate ball whose closure is compact.

[F3] [[thm-compactness-under-continuous-maps]] sends compact sets to compact sets under continuous maps, and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes compact subsets of a manifold closed.

[F4] [[lem-chart-bump-at-a-point-with-prescribed-support]] gives, at a specified point of an open coordinate domain $W$, a nonnegative smooth bump equal to one there whose support lies in $W$.

[F5] [[def-integral-of-an-oriented-chart-supported-top-form]] computes a compactly supported top form in a positive chart by integrating its coordinate coefficient; the chart-comparison calculation in [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] identifies this chart integral with the manifold integral.

[F6] [[thm-multidimensional-integral-properties]] gives monotonicity and linearity of the Riemann integral on rectangles.

## Proof

**Proof technique:** contradiction by a normalized form supported off the image.

1.1 First $F[M]$ is closed. If $y\notin F[M]$, [F2] gives an open neighbourhood $V$ of $y$ whose closure $K$ is compact. Properness makes $C=F^{-1}(K)$ compact, so [F3] makes $F[C]$ compact and closed in $N$. Since $F[M]\cap V=F[C]\cap V$, the open set $V\setminus F[C]$ contains $y$ and misses $F[M]$. Thus every point of the complement has an open neighbourhood in the complement. [F2, F3, given]

2.1 Suppose $n\ge1$ and $F$ is not surjective. Fix $y\in N\setminus F[M]$. By [F2] inside the open complement from step 1.1, choose an oriented coordinate ball $U$ containing $y$ whose closure is compact. By [F4] there is a smooth $\rho:N\to[0,1]$ with $\rho(y)=1$ and support contained in $U$. The support is closed by definition and lies in the compact set $\overline U$, hence is compact. In the positive chart $\phi:U\to\mathbb R^n$, define the global top form $\omega$ by $\omega=\rho\,\phi^*(dx^1\wedge\cdots\wedge dx^n)$ on $U$ and by zero off $U$; containment of the support in $U$ makes the two formulas agree smoothly near the edge of $U$. [F2, F4, step 1.1, construct]

3.1 Continuity and $\rho(y)=1$ give a nondegenerate closed coordinate rectangle $Q$ about $\phi(y)$ on which $\rho\circ\phi^{-1}\ge1/2$. On a larger bounding rectangle for the compact coordinate support, [F6] and the defining rectangular sum for the constant function give $$I_\phi(\omega)\ge \frac12\operatorname{vol}(Q)>0.$$ By [F5], $a:=\int_N\omega=I_\phi(\omega)>0$. Hence $\nu=a^{-1}\omega$ is compactly supported and has integral one. [F5, F6, step 2.1]

4.1 The support of $\nu$ lies in $U\subseteq N\setminus F[M]$, so $F^*\nu=0$. Applying [F1] gives $0=\int_MF^*\nu=\deg(F)\int_N\nu=\deg(F)$, contrary to the hypothesis. Thus $F$ is surjective for $n\ge1$. If $n=0$, connected nonempty $M$ and $N$ are singletons, and their unique map is already surjective. Empty manifolds are excluded; the zero-degree case makes no assertion. Only one missed point, one chart and one bump are selected, so no choice axiom is used. [F1, step 2.1, step 3.1] ∎

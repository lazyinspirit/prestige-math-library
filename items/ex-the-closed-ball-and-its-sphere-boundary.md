---
id: ex-the-closed-ball-and-its-sphere-boundary
kind: example
title: "The closed ball and its sphere boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euclidean-inverse-function-theorem, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-boundary-defining-function]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

For $n\ge1$, the closed ball $B^n$ is a manifold with boundary $S^{n-1}$, and $\rho(x)=1-|x|^2$ is a boundary-defining function.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the closed unit ball $B^n=\{x\in\mathbb R^n:|x|\le1\}$, its sphere $S^{n-1}=\{x:|x|=1\}$, and $\rho:B^n\to[0,\infty)$ defined by $\rho(x)=1-|x|^2$.

[L1] A smooth Euclidean map with invertible derivative is a diffeomorphism between suitable open neighbourhoods ([[thm-euclidean-inverse-function-theorem]]).

[L2] A compatible covering atlas by relatively open half-space charts defines a smooth manifold with boundary ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[L3] A boundary-defining function is smooth and nonnegative, has the boundary as its zero set, and has nonzero differential there ([[def-boundary-defining-function]]).

## Verification

**Proof technique:** direct.

1.1 Let $p\in S^{n-1}$ and choose $k$ with $p_k\ne0$. The map $$H(x)=\bigl(x_1,\ldots,\widehat{x_k},\ldots,x_n,\rho(x)\bigr)$$ has invertible derivative at $p$, since $\partial\rho/\partial x_k(p)=-2p_k\ne0$. By [L1], $H$ is a diffeomorphism near $p$. Because $B^n=\{\rho\ge0\}$, its restriction is a half-space chart near $p$; ordinary Euclidean charts cover $\{|x|<1\}$. Every transition between these charts is the restriction of a composition of the corresponding Euclidean diffeomorphisms and their inverses, so the covering atlas is compatible. Thus [L2] makes $B^n$ a smooth manifold with boundary, and the chart calculation identifies its boundary with $S^{n-1}$. [given, L1, L2, algebra]

2.1 By construction, $\rho\ge0$ on $B^n$, $\rho^{-1}(0)=S^{n-1}=\partial B^n$, and $d\rho_x(v)=-2\langle x,v\rangle$ is nonzero when $|x|=1$. Hence $\rho$ satisfies [L3]. [given, L3, step 1.1, algebra] ∎

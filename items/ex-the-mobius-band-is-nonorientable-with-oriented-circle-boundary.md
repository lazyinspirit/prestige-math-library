---
id: ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary
kind: example
title: "The Mobius band is nonorientable although its boundary circle is orientable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, def-oriented-smooth-manifold-and-oriented-chart]
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

The Möbius band is nonorientable, while its boundary circle is orientable independently.

## Facts & Assumptions

**Given:** The standard smooth Möbius band $B=[0,1]\times[-1,1]/(0,s)\sim(1,-s)$, equivalently the quotient of $\mathbb R\times[-1,1]$ by the deck transformation $g(t,s)=(t+1,-s)$, with quotient map $q$.

[L1] An orientation is a smooth choice of a ray in each determinant line ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[L2] A manifold is orientable exactly when it admits such an orientation ([[def-orientable-manifold]]).

## Verification

**Proof technique:** direct.

1.1 Suppose $B$ had an orientation. Pulling its determinant rays back by the local diffeomorphism $q$ would orient the connected strip $\mathbb R\times[-1,1]$. Relative to the standard ray of $(\partial_t,\partial_s)$, this continuous choice has one constant sign on the strip. [given, L1, L2, algebra]

2.1 Since $q\circ g=q$, the pulled-back orientation would have to be invariant under $g$. But $Dg=\operatorname{diag}(1,-1)$ has determinant $-1$ and reverses every determinant ray, contradicting step 1.1. Hence $B$ is nonorientable by [L2]. [given, L1, L2, step 1.1, algebra]

3.1 The two boundary lines of the strip are exchanged by $g$, so their quotient is one component. The map $t\bmod 2\mapsto q(t,1)$ is a smooth bijection $\mathbb R/2\mathbb Z\to\partial B$ with smooth inverse in the quotient charts. It identifies $\partial B$ with a circle, whose positive $t$-direction supplies an orientation under [L1]. This orientation is chosen on the boundary itself and is not induced from the nonorientable band. [given, L1, step 2.1, construct, algebra] ∎

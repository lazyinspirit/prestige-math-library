---
id: prop-boundary-orientation-is-independent-of-the-outward-vector-field
kind: proposition
title: "Boundary orientation is independent of the outward vector field"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-boundary-orientation, def-inward-outward-and-boundary-tangent-vectors, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]
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

## Statement

The outward-normal-first boundary orientation is independent of the chosen outward vector field. On the interval $[a,b]$ with its standard orientation, it gives $\partial[a,b]=\{b\}-\{a\}$.

## Facts & Assumptions

**Given:** An oriented smooth manifold $M$ with boundary and two outward vectors $n_0,n_1\in T_pM$ at a boundary point $p$; for the final assertion, the standard orientation on $[a,b]$.

[L1] Boundary orientation is defined by the outward-normal-first rule ([[def-induced-boundary-orientation]]).

[L2] The boundary-tangent vectors form a hyperplane in $T_pM$, and outward vectors lie in the same negative normal half-space ([[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]; [[def-inward-outward-and-boundary-tangent-vectors]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the images of $n_0$ and $n_1$ in the one-dimensional quotient $T_pM/T_p\partial M$ lie on the same ray. Hence $n_1=a n_0+w$ for some $a>0$ and $w\in T_p\partial M$. [given, L2, algebra]

2.1 If $\tau$ is a nonzero boundary determinant, alternation gives $n_1\wedge\tau=a(n_0\wedge\tau)$ because $w\wedge\tau=0$. Thus [L1] is independent of the outward vector. At $b$ the outward vector is $+\partial_x$, while at $a$ it is $-\partial_x$, so [L1] gives $\partial[a,b]=\{b\}-\{a\}$. [given, L1, step 1.1, algebra] ∎

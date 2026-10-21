---
id: lem-knot-admits-morse-height-representative
kind: lemma
title: Every smooth knot has a Morse representative for the fixed height
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
      locator: "The generic-height theorem for compact embedded manifolds"
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.1, printed pp. 13–19, smooth knot and height conventions"
---

## Statement

Identify the oriented standard $S^3$ with the unit sphere in $\mathbb R^4$ and fix $h(x_1,x_2,x_3,x_4)=x_4$. For every smooth oriented knot $K\subset S^3$, there is an orientation-preserving ambient isotopy carrying $K$ to a smooth knot $K'$ for which $h|_{K'}$ has only nondegenerate critical points.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|The fixed coordinate height and Morse representative convention]]

## Facts & Assumptions

**Given:** A smooth oriented knot $K\subset S^3$ and the fixed height $h(x)=x_4$ under the standard identification $S^3\subset\mathbb R^4$.

[F1] For a compact embedded smooth manifold $M\subset\mathbb R^N$, a generic direction $u\in S^{N-1}$ makes $x\mapsto u\cdot x$ a Morse function on $M$. [[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]

## Proof

**Given:** The smooth oriented knot $K$ and the fixed height in the statement.


1.1 Regard $K$ as a compact embedded smooth 1-manifold in $S^3\subset\mathbb R^4$. By [F1], the exceptional set $E$ of non-Morse directions is null in every smooth atlas of $S^3$. It cannot contain all of $S^3$, since a nonempty coordinate ball has positive Euclidean measure; choose $u\in S^3\setminus E$. Then $x\mapsto u\cdot x$ is Morse on $K$. [given, F1, choose]

2.1 Choose $R\in SO(4)$ with $R^Te_4=u$. Such a rotation is obtained in the plane spanned by $u$ and $e_4$; if $u=-e_4$, use a half-turn in a plane containing $e_4$. A rotation path $R_t$ from the identity to $R$ is an ambient isotopy of the oriented sphere. On $R(K)$, the fixed height equals $e_4\cdot R x=u\cdot x$, which is Morse by step 1.1. Thus $K'=R(K)$ is the required representative. [given, step 1.1, construct] ∎

## Sources

[[def-oriented-link-in-s-three-and-ambient-isotopy]]

[[thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse]]

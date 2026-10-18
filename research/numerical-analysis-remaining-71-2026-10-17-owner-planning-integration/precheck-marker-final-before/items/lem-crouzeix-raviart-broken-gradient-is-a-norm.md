---
id: lem-crouzeix-raviart-broken-gradient-is-a-norm
kind: lemma
title: The broken gradient is a norm on the homogeneous Crouzeix–Raviart space
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-crouzeix-raviart-global-space
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.4, PDF p. 4: the broken-gradient seminorm is a norm under the face-average boundary conditions."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 282–290: the homogeneous nonconforming P1 space and broken-gradient norm."
---

## Statement

For a finite matching mesh of a bounded connected polyhedral domain,
$v_h\mapsto\|\nabla_hv_h\|_{L^2(\Omega)}$ is a norm on
$V_h^{CR,0}$ of [[def-crouzeix-raviart-global-space]].

## Facts & Assumptions

**Given:** A finite matching affine simplicial mesh of a bounded connected domain and $v_h\in V_h^{CR,0}$.

[F1] A connected open subset of Euclidean space is polygonally connected. ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]])

[F2] Interior face averages of $v_h$ agree, and boundary face averages vanish. ([[def-crouzeix-raviart-global-space]])

## Proof
1.1 Suppose $\|\nabla_hv_h\|_{L^2}=0$. Then the affine restriction $v_K$ has zero gradient on every cell and is constant $c_K$. If two cells share an interior facet, [F2] gives $|F|c_K=|F|c_{K'}$, hence $c_K=c_{K'}$. [given, F2, algebra]

2.1 The cell-adjacency graph is connected. Join interior points of any two cells by a polygonal path in $\Omega$ using [F1]. Its compact image has positive distance from $\partial\Omega$. Subdivide the path if necessary to have intermediate vertices and perturb them in small open balls so every segment remains in $\Omega$. For a fixed endpoint $a$ and a mesh face $S$ of codimension at least two, every endpoint $b$ for which $[a,b]$ meets $S$ lies in the proper affine subspace $\operatorname{aff}(\{a\}\cup S)$, of dimension at most $d-1$. Also avoid each facet hyperplane so no perturbed segment lies in one. A finite union of proper affine subspaces cannot cover an open ball: each has empty interior, so successively choose a smaller nonempty open ball disjoint from each one. Choose intermediate vertices successively outside the finitely many forbidden subspaces from the previous vertex; for the last vertex also avoid those from the fixed endpoint at the end of the path. Thus no segment meets the codimension-at-least-two skeleton or lies in a facet hyperplane, so every cell transition is through a relative interior of a whole facet. When $d=1$ mesh faces are endpoints and each crossing is itself a whole facet. This gives an adjacency chain, so all cell constants in step 1.1 agree. Since the bounded mesh has a boundary facet and its face mean is zero by [F2], the common constant is zero. [F1, F2, given, step 1.1]

3.1 The broken gradient is linear, its $L^2$ norm is nonnegative and absolutely homogeneous, and the triangle inequality follows from the $L^2$ triangle inequality. Step 2.1 proves that its kernel is $\{0\}$; hence it is a norm. [step 2.1, algebra] ∎

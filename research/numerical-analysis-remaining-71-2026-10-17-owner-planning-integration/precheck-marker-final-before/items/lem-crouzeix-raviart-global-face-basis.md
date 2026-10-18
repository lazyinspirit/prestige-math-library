---
id: lem-crouzeix-raviart-global-face-basis
kind: lemma
title: Interior face means form the global Crouzeix–Raviart degrees of freedom
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-crouzeix-raviart-global-space
  - def-crouzeix-raviart-local-p1-element
  - lem-crouzeix-raviart-local-face-unisolvence
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
      locator: "Proposition 36.2 and its proof, PDF p. 3; the homogeneous restriction is described on PDF p. 4."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–290: one face degree of freedom is shared by the adjacent cells."
---

## Statement

For every interior facet $F$, define $\phi_F$ to equal $\phi_{K,F}$ on each
cell $K$ incident to $F$ and zero on all other cells, where
$\phi_{K,F}$ is the local shape polynomial of
[[def-crouzeix-raviart-local-p1-element]]. Then
$\{\phi_F:F\in\mathcal F^\circ\}$ is a basis of the space in
[[def-crouzeix-raviart-global-space]]. The face mean $\bar v_F:=|F|^{-1}\int_F
v_K\,dS$ is single-valued for $v\in V_h^{CR,0}$ and
$\dim V_h^{CR,0}=|\mathcal F^\circ|$.

## Facts & Assumptions

**Given:** A finite matching affine simplicial mesh, the homogeneous global space of [[def-crouzeix-raviart-global-space]], and local unisolvence from [[lem-crouzeix-raviart-local-face-unisolvence]].

[F1] On each cell the face-average functionals are a basis of the dual of $\mathbb P_1(K)$, and $\phi_{K,F}$ has face means $\delta_{FG}$. ([[lem-crouzeix-raviart-local-face-unisolvence]])

## Proof
1.1 The two traces of $v\in V_h^{CR,0}$ on an interior facet have equal integrals by definition, so $\bar v_F$ is single-valued. For an interior facet $F$, the function $\phi_F$ has mean one on $F$, mean zero on every other facet of each incident cell by [F1], and is zero on cells not incident to $F$. Thus $\phi_F\in V_h^{CR,0}$ and $\bar\phi_{F,G}=\delta_{FG}$ for all interior facets $G$. [F1, given, algebra]

2.1 Let $v\in V_h^{CR,0}$ and set $w:=\sum_{F\in\mathcal F^\circ}\bar v_F\phi_F$. On each cell, $v_K$ and $w_K$ have the same mean on every interior facet and both have mean zero on every boundary facet. Local unisolvence [F1] therefore gives $v_K=w_K$ for every cell. Hence the global functions span. Their linear independence follows by applying each single-valued face mean to a linear combination and using step 1.1. The number of basis functions is the number of interior facets, which proves the dimension formula. [F1, step 1.1, algebra] ∎
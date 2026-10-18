---
id: lem-na-cell-average-l2-projection
kind: lemma
title: Cell averaging is the $L^2$ projection onto P0
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-na-simplicial-mesh-rt-bdm-spaces,
    cor-cauchy-schwarz-inequality-for-l-two,
    thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.1: piecewise-constant cell projections used with
        RT divergence."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2: finite-dimensional $L^2$ projections and
        piecewise-constant spaces."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For a finite conforming simplicial mesh of bounded $D$, define $P_0:L^2(D)\to\mathbb P_0(\mathcal T_h)$ cellwise by
$$ (P_0g)|_K=|K|^{-1}\int_Kg. $$
Then $P_0$ is linear, equals the identity on piecewise constants, is the $L^2$-orthogonal projection onto that space, satisfies $\|P_0g\|_2\le\|g\|_2$, and preserves the integral $\int_DP_0g=\int_Dg$.

## Facts & Assumptions

**Given:** A finite conforming mesh of bounded $D$ and $g\in L^2(D)$.

[F1] The mesh cells have positive finite measure, disjoint interiors, and cover $D$ up to their measure-zero affine faces. ([[def-matching-affine-simplicial-meshes]], [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]])

[F2] Cauchy–Schwarz gives $|\int_Kg|\le |K|^{1/2}\|g\|_{L^2(K)}$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 The cell integral is linear, so the formula defines a linear piecewise-constant map. If $g$ is constant on each cell, its cell average is the same constant, so $P_0g=g$. For any piecewise constant $q_h$, $\int_D(g-P_0g)q_h=\sum_Kq_K\left(\int_Kg-|K|\,|K|^{-1}\int_Kg\right)=0.$ Thus the range is orthogonal to the residual and $P_0$ is the orthogonal projection onto $\mathbb P_0(\mathcal T_h)$. [F1, given, algebra]

2.1 By [F2], $|K|\,|(P_0g)|_K|^2=|K|^{-1}|\int_Kg|^2\le\int_K|g|^2$. Summing over cells gives $\|P_0g\|_2^2\le\|g\|_2^2$. Summing the defining averages multiplied by cell measures gives $\int_DP_0g=\sum_K\int_Kg=\int_Dg$. [F1, F2, algebra] ∎

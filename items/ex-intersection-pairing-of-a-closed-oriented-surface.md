---
id: "ex-intersection-pairing-of-a-closed-oriented-surface"
kind: "example"
title: "Intersection pairing of a closed oriented surface"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-integral-surface-cup-pairing-from-the-oriented-polygon","def-fundamental-class-of-a-compact-oriented-manifold","thm-top-homology-characterizes-compact-orientable-manifolds","def-axiom-of-choice"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 3.7
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. For the closed oriented genus-$g$ surface $\Sigma_g$, define the integral cup intersection pairing
$$I(\alpha,\beta)=\langle\alpha\smile\beta,[\Sigma_g]\rangle\qquad(\alpha,\beta\in H^1(\Sigma_g;\mathbb Z)).$$
In the ordered edge-dual basis $a_1,b_1,\ldots,a_g,b_g$ its matrix consists of $g$ diagonal blocks
$$J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.$$
It is alternating and unimodular. Here the pairing is defined by cup evaluation; no transversality assertion for chosen curves is needed. AC is inherited only from the UCT used to construct the edge-dual classes.

## Facts & Assumptions

[F1] [[lem-integral-surface-cup-pairing-from-the-oriented-polygon]] supplies the full integral groups, the edge-dual basis, the positively oriented singular surface cycle $Z$, and the calculation $\langle\alpha\smile\beta,[Z]\rangle=\sum_i(r_is'_i-s_ir'_i)$ when $\alpha=\sum_i(r_ia_i+s_ib_i)$ and $\beta=\sum_i(r'_ia_i+s'_ib_i)$.

[F2] [[def-fundamental-class-of-a-compact-oriented-manifold]] specifies the unique class with the prescribed orientation at every local stalk.

[F3] [[thm-top-homology-characterizes-compact-orientable-manifolds]] says restriction from top homology to any one local stalk is injective for a nonempty connected compact oriented manifold, with image the full copy of the coefficient ring after the chosen stalk identification. It uses no AC.

[F4] [[def-axiom-of-choice]] supplies the integral cycle projections and sections of the UCT invoked by [F1].

## Verification

**Given:** The standard oriented closed surface and the ordered basis from [F1]. A bilinear form on a finite free integral module is called unimodular when its map to the integral dual is an isomorphism.

1.1 The cycle $Z$ of [F1] represents $[\Sigma_g]$. For $g\ge1$, its signed fan is the positive characteristic-disk cycle, and at a point in the interior of one fan triangle its local coefficient is $+1$ in the given orientation: the affine triangle has the polygon orientation when its coefficient is $+1$, and the opposite vertex order and coefficient $-1$ compensate on the other triangles. Restriction to that point discards the other triangles, whose images omit it. Thus $[Z]$ and the class of [F2] have the same local restriction. By [F3] they are equal. For $g=0$, the positive characteristic two-cell used in [F1] has the same normalization at an interior point, giving the same conclusion. The hypotheses of [F3] hold since $\Sigma_g$ is the given nonempty connected closed oriented surface. [F1, F2, F3, given]

2.1 Substituting step 1.1 into [F1]'s calculation gives $$I(\alpha,\beta)=\sum_{i=1}^g(r_is'_i-s_ir'_i).$$ Consequently $I(a_i,a_j)=I(b_i,b_j)=0$, $I(a_i,b_j)=\delta_{ij}$ and $I(b_i,a_j)=-\delta_{ij}$. These are exactly the entries of the stated block matrix $M=\operatorname{diag}(J,\ldots,J)$. Setting $\beta=\alpha$ gives $I(\alpha,\alpha)=\sum_i(r_is_i-s_ir_i)=0$ for every integral vector, proving alternation directly, including vectors with negative or zero coordinates. [F1, step 1.1]

3.1 Direct multiplication gives $J^2=-I_2$, so $M^{-1}=-M$ is an integral matrix. In particular the map from the basis module to its dual defined by either slot of the pairing has an integral inverse (the other slot uses the transpose matrix). Also $\det J=0\cdot0-1\cdot(-1)=1$, hence $\det M=1$. This proves unimodularity over $\mathbb Z$, not only nonsingularity over a field. [step 2.1]

4.1 At $g=0$ the module $H^1$ is zero and $M$ is the empty matrix. Its determinant is the empty product $1$, and the unique map $0\to0$ is an isomorphism, so both conclusions still hold. At $g=1$ there is one block $J$, already checked in step 3.1. Orientation reversal sends the fundamental class to its negative by [F2], so for a fixed basis the pairing and matrix change sign. No assertion concerns an empty surface or a zero coefficient ring, since the example fixes a connected surface and integral coefficients. Representatives and degenerate singular simplices are handled by the actual cocycle and cycle calculation in [F1]; the matrix computation does not replace that argument. AC is used only in [F1]'s UCT construction via [F4]; the fundamental-class identification and finite matrix inversion need no additional choice. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎

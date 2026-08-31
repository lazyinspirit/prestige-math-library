---
id: prop-exterior-power-duality-pairing
kind: proposition
title: "Exterior-power duality pairing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-dimensional-exterior-power-of-vectors,
       def-wedge-product-of-alternating-covectors,
       lem-wedge-monomials-in-a-dual-basis-form-a-basis,
       def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

The canonical pairing

$$ \langle\omega,v_1\wedge\cdots\wedge v_k\rangle:=\omega(v_1,\ldots,v_k) $$

extends to a nondegenerate bilinear pairing

$$ \bigwedge^kV^*\times\bigwedge^kV\to\mathbb R, $$

and for decomposable elements one has

$$ \langle\alpha_1\wedge\cdots\wedge\alpha_k,\ v_1\wedge\cdots\wedge v_k\rangle =\det(\alpha_i(v_j)). $$

## Facts & Assumptions

**Given:** Covectors $\alpha_1,\ldots,\alpha_k$ and vectors $v_1,\ldots,v_k$ in a finite-dimensional real vector space $V$.

[F1] A decomposable $k$-vector is the functional $\omega\mapsto\omega(v_1,\ldots,v_k)$ on alternating $k$-covectors ([[def-finite-dimensional-exterior-power-of-vectors]]).

[F2] The wedge product is the signed shuffle sum on alternating covectors ([[def-wedge-product-of-alternating-covectors]]).

[L1] Wedges of a basis and of its dual basis give dual coordinate systems on exterior powers ([[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

## Proof
**Proof technique:** direct.

1.1 By [F2], $(\alpha_1\wedge\cdots\wedge\alpha_k)(v_1,\ldots,v_k)$ is the alternating sum over permutations of $\prod_i \alpha_i(v_{\sigma(i)})$, which is exactly the determinant of the matrix $(\alpha_i(v_j))$. By [F1], this is the value of the pairing on the displayed decomposable elements. [F1, F2, given, algebra]

2.1 Choose a basis $e_1,\ldots,e_n$ of $V$ with dual basis $e^1,\ldots,e^n$. By [L1], the wedges $e^I$ form a basis of $\bigwedge^kV^*$ and the wedges $e_I$ form a basis of $\bigwedge^kV$, and step 1.1 shows $\langle e^I,e_J\rangle=\delta_{IJ}$. Therefore the pairing matrix in these bases is the identity, so the pairing is nondegenerate. [L1, step 1.1, choose, algebra]

3.1 Thus the canonical exterior-power pairing is bilinear, has the determinant formula on decomposables, and is nondegenerate. [step 1.1, step 2.1] ∎

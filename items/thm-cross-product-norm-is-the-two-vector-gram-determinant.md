---
id: thm-cross-product-norm-is-the-two-vector-gram-determinant
kind: theorem
title: 'The squared cross-product norm is the Gram determinant of two vectors'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-gram-matrix-and-gram-determinant, thm-gram-determinant-detects-linear-independence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, formulas 3.2.18-3.2.20'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'R. Sjamaar, Manifolds and Differential Forms, Theorem 8.4'
      url: 'https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf'
pipeline_run: null
---

## Statement

For $u,v\in\mathbb R^3$, $\|u\times v\|_2^2=\det G(u,v)$, and this value is positive exactly when $u$ and $v$ are linearly independent.

Equivalently,
$$\|u\times v\|_2^2=\|u\|_2^2\|v\|_2^2-\langle u,v\rangle^2.$$

## Facts & Assumptions

**Given:** Vectors $u,v\in\mathbb R^3$.

[L1] The cross product has the displayed coordinate formula, and it is bilinear, alternating, and orthogonal to its factors ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[L2] The two-vector Gram matrix has entries $\langle u_i,u_j\rangle$, and its determinant is positive exactly for a linearly independent pair and zero exactly for a dependent pair ([[def-gram-matrix-and-gram-determinant]], [[thm-gram-determinant-detects-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the three squared coordinates of $u\times v$ and collecting terms gives $\|u\times v\|_2^2=(u_x^2+u_y^2+u_z^2)(v_x^2+v_y^2+v_z^2)-(u_xv_x+u_yv_y+u_zv_z)^2$. [given, L1, algebra]

2.1 The right side of step 1.1 is $\|u\|_2^2\|v\|_2^2-\langle u,v\rangle^2=\det\begin{pmatrix}\langle u,u\rangle&\langle u,v\rangle\\\langle v,u\rangle&\langle v,v\rangle\end{pmatrix}$, which is $\det G(u,v)$ by [L2]. [step 1.1, L2, algebra]

3.1 The positivity and vanishing assertions follow from [L2], including the cases in which either vector is zero. [step 2.1, L2] ∎

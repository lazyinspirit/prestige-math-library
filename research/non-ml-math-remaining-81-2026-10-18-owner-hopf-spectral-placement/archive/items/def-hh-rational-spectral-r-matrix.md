---
id: def-hh-rational-spectral-r-matrix
kind: definition
title: "The rational spin-1/2 spectral R-matrix"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-hh-scalar-and-tensor-conventions, thm-tensor-product-basis-from-bases]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, equations (33)–(39): the permutation on C^2 tensor C^2 and R(u)=uI+iP"
verification:
  precheck: n/a
---

## Definition

Let $V=\mathbb C^2$ with ordered basis $e_1,e_2$. Tensor products are over $\mathbb C$ and tensor powers are left-associated, as in [[def-hh-scalar-and-tensor-conventions]]. The elementary tensors $e_a\otimes e_b$ form a basis of $V\otimes V$, and the elementary tensors $e_a\otimes e_b\otimes e_c$ form a basis of $V^{\otimes3}$, by [[thm-tensor-product-basis-from-bases]].

Define the flip $P$ on $V\otimes V$ by $P(e_a\otimes e_b)=e_b\otimes e_a$ and extend $\mathbb C$-linearly. For $u\in\mathbb C$ set $R(u)=uI+iP$ and $\check R(u)=PR(u)=uP+iI$, where $I$ denotes the identity on $V\otimes V$.

On $V^{\otimes3}$ define $P_{12}$, $P_{13}$, and $P_{23}$ on the displayed basis by swapping the indicated tensor positions and leaving the third position fixed. Put $R_{ij}(u)=uI+iP_{ij}$. Put $\check R_1(u)=P_{12}R_{12}(u)$ and $\check R_2(u)=P_{23}R_{23}(u)$. Products of endomorphisms mean composition, with the rightmost factor applied first.

This is a family of finite-dimensional linear maps. The definition asserts neither invertibility for every u nor a Hopf-algebra or categorical braiding structure.

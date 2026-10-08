---
id: def-cg-reflection-length-absolute-order-and-moved-space
kind: definition
title: "Reflection length, the absolute order on a finite Coxeter group, and the moved and fixed spaces of an orthogonal operator"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, def-kernel-and-image-of-a-linear-map, def-linear-isometry-and-orthogonal-or-unitary-operator, def-linear-map, def-real-and-complex-inner-product-space, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-finite-type-positive-definite-criterion, thm-well-ordering-principle]
justified_by: [thm-cg-carter-reflection-length-and-absolute-order]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), author/class-hosted complete PDF"
      url: https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf
      locator: "Chapter 2, Exercise 2.35 on printed p. 61 (the absolute length a-l(w)=min{k: w=t_1...t_k, t_i in T}; relevant passage read on pp. 61-62); Chapter 7, Exercise 2 on printed pp. 234-235 (absolute length and a-l(w)=1 iff w in T)"
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
    - title: "T. Brady and C. Watt, Lattices in finite real reflection groups (arXiv:math/0501502)"
      url: https://arxiv.org/pdf/math/0501502
      locator: "Introduction and section 2 (printed pp. 1-3: reflection length, absolute order, moved and fixed spaces M(A), F(A), M(A)=F(A)^perp, the main result of [7], and notes (1)-(7)); the opening of section 3 through Note 3.5 (printed pp. 3-6); and the opening paragraphs of section 4 (printed pp. 8-9) with the A_3 intersection example"
dependency_level: 14
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite and length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]]), with canonical reflection representation $\rho:W\to\mathrm{GL}(V)$ on $V=\mathbb R^S$, Coxeter form $B$, root system $\Phi$ and reflection set $T=\{wsw^{-1}:w\in W,\ s\in S\}$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Since $W$ is finite, $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]]), so $(V,B)$ is a real inner product space ([[def-real-and-complex-inner-product-space]]), and $\rho(w)$ preserves $B$ for every $w\in W$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (2)). Write $\mathrm O(V)$ for the group of $B$-preserving invertible linear maps $V\to V$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

**(1) Reflection length.** For $w\in W$ put

$$\ell_T(w):=\min\{k\in\mathbb N:\ \text{there are }t_1,\dots,t_k\in T\text{ with }w=t_1t_2\cdots t_k\},$$

where the empty product ($k=0$) is the identity. The minimum exists because $S\subseteq T$ and $S$ generates $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]), so the admitted $k$ form a nonempty subset of $\mathbb N$, which has a least element ([[thm-well-ordering-principle]]).

**(2) Absolute order.** For $u,v\in W$ define $u\le_T v$ if and only if

$$\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v).$$

**(3) Moved and fixed spaces.** For a linear map $A:V\to V$ ([[def-linear-map]]) define the **moved space** and the **fixed space**

$$M(A):=\operatorname{im}(A-\mathrm{id}_V),\qquad F(A):=\ker(A-\mathrm{id}_V)$$

([[def-kernel-and-image-of-a-linear-map]]). For $A,B\in\mathrm O(V)$ define the relation $B\le_{\mathrm O}A$ if and only if

$$\dim M(A)=\dim M(B)+\dim M(B^{-1}A).$$

**(4) Conventions and abstentions.** For $u\in W$ write $M(u):=M(\rho(u))$ and $F(u):=F(\rho(u))$. This definition asserts no property of $\le_T$ and $\le_{\mathrm O}$ beyond the displayed formulas: it asserts neither that either relation is a partial order, nor that $\ell_T(w)=\dim M(w)$, nor that $B\le_{\mathrm O}A$ means that a shortest reflection factorization of $B$ is a prefix of one of $A$. Those properties are proved in [[thm-cg-carter-reflection-length-and-absolute-order]], the recorded justifier of this definition, and by the restriction and factorization lemmas of this page. No Choice is used: $S$, $W$, $\Phi$ and $T$ are finite and every object is finite-dimensional or set-theoretic.

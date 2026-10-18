---
id: lem-fock-creation-annihilation-satisfy-car
kind: lemma
title: Fock Creation and Annihilation Operators Satisfy the CAR
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 1
deps:
  - def-fermionic-fock-space-over-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-countable-choice
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Let $H$ be a complex Hilbert space with inner product linear in the first variable, and let $\mathcal F_-(H)$ be its fermionic Fock space. The creation rule $C(f)\xi=f\wedge\xi$ extends to a bounded operator on $\mathcal F_-(H)$ with $\|C(f)\|=\|f\|$. Writing $A(f)=C(f)^*$ for its adjoint, one has, for all $f,g\in H$,

$$ \{C(f),C(g)\}=0,\qquad \{A(f),A(g)\}=0,\qquad \{A(f),C(g)\}=\langle g,f\rangle I. $$

Thus $f\mapsto C(f)$ is a bounded complex-linear CAR family in the convention of [[def-finite-dimensional-car-algebra]].

## Facts & Assumptions
**Given:** Countable Choice, a complex Hilbert space $H$, its fermionic Fock space, and vectors $f,g\in H$.

[F1] The Fock space is the Hilbert completion of the orthogonal direct sum of the Hilbert exterior powers; the vacuum is $1\in\Lambda^0H$ ([[def-fermionic-fock-space-over-hilbert-space]]).

[F2] Wedges of decomposable vectors have inner product $\langle x_1\wedge\cdots\wedge x_k,y_1\wedge\cdots\wedge y_k\rangle=\det[\langle x_i,y_j\rangle]$ ([[def-hilbert-exterior-power-and-induced-operator]]).

[F3] The inner product on $H$ is linear in its first variable and conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[A1] Countable Choice is assumed in the Hilbert-space adjoint construction ([[def-countable-choice]], [[def-hilbert-space-adjoint]]).

[F4] Under [A1], every bounded operator on a Hilbert space has a bounded adjoint, and $\|T^*\|=\|T\|$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

## Proof

1.1 First take $f\ne0$ and put $u=f/\|f\|$. The orthogonal decomposition $H=\mathbb Cu\oplus u^\perp$ gives, in each degree, the orthogonal decomposition $\Lambda^kH=\Lambda^k(u^\perp)\oplus u\wedge\Lambda^{k-1}(u^\perp)$, where the second summand is absent for $k=0$. Orthogonality and the norm identity $\|u\wedge\xi\|=\|\xi\|$ on decomposable vectors from [F2] extend by density to the exterior-power completions. Thus $C(f)$ acts as $\|f\|$ times an isometry on the first summand and as zero on the second. It extends boundedly with norm at most $\|f\|$; applying it to the unit vacuum gives $\|C(f)\Omega\|=\|f\|$, so its norm is exactly $\|f\|$. The case $f=0$ is the zero operator. By [A1, F4], this bounded operator has a bounded adjoint $A(f)$. [given, A1, F1, F2, F4, algebra]

2.1 On a decomposable $k$-wedge the adjoint has formula $A(f)(g_1\wedge\cdots\wedge g_k)=\sum_{r=1}^k(-1)^{r-1}\langle g_r,f\rangle g_1\wedge\cdots\wedge\widehat{g_r}\wedge\cdots\wedge g_k$. Indeed, for decomposable $\xi$ of degree $k-1$ and $\eta=g_1\wedge\cdots\wedge g_k$, the determinant in [F2] for $\langle C(f)\xi,\eta\rangle$ expands along the row containing $f$. The term indexed by $r$ has sign $(-1)^{r-1}$ and coefficient $\langle f,g_r\rangle$; in $\langle\xi,A(f)\eta\rangle$, conjugate-linearity in the second variable turns $\langle g_r,f\rangle$ into $\langle f,g_r\rangle$. These expressions agree. Decomposable wedges span a dense subspace, so the formula determines the adjoint. [F1, F2, F3, step 1.1, algebra]

3.1 For a decomposable wedge $\xi=g_1\wedge\cdots\wedge g_k$, applying the formula of step 2.1 to $C(g)\xi$ gives the first term $\langle g,f\rangle\xi$ and, for each $r$, a term with coefficient $(-1)^r\langle g_r,f\rangle$ and leading wedge $g\wedge g_1\wedge\cdots\widehat{g_r}\cdots\wedge g_k$. Applying $C(g)$ after $A(f)$ gives the same latter wedges with coefficients $(-1)^{r-1}\langle g_r,f\rangle$. These terms cancel pairwise, leaving $\{A(f),C(g)\}\xi=\langle g,f\rangle\xi$. Density and boundedness extend the identity to all Fock vectors. [step 2.1, algebra]

4.1 Wedge antisymmetry gives $C(f)C(g)\xi=f\wedge g\wedge\xi=-g\wedge f\wedge\xi=-C(g)C(f)\xi$ on the dense decomposable subspace, hence everywhere. Taking adjoints of this identity, using the adjoint product law in [F4], gives $\{A(f),A(g)\}=0$. The creation map is linear by its defining wedge rule; the three displayed relations are exactly those required for the CAR family. [given, A1, F1, F4, step 1.1, step 3.1, algebra] ∎

## Remarks

The annihilation map $f\mapsto A(f)$ is conjugate-linear under the stated first-variable-linear inner-product convention. The creation map $f\mapsto C(f)$ is complex-linear.

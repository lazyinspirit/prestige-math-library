---
id: lem-qsm-finite-matrix-cstar-and-state-duality
kind: lemma
title: Finite matrix C-star algebra and density-state duality
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
- lem-qsm-matrix-state-calculus
- def-c-star-algebra
- def-state-on-a-c-star-algebra
- def-qc-density-operator
- cor-operator-norm-submultiplicative-and-t-star-t-identity
- def-operator-norm-on-a-finite-dimensional-inner-product-space
- cor-finite-dimensional-normed-spaces-are-banach
- def-matrix-units
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-c-star-algebra: mathematical-premise
  def-state-on-a-c-star-algebra: mathematical-premise
  def-qc-density-operator: mathematical-premise
  cor-operator-norm-submultiplicative-and-t-star-t-identity: mathematical-premise
  def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  def-matrix-units: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
  - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§2.3–2.4
    url: https://arxiv.org/pdf/1311.2717
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, $D=\dim H\ge1$, with inner product linear in its first argument. With composition, Hilbert adjoint, identity and the induced operator norm, $\mathcal B(H)$ is a nonzero unital complex C*-algebra in the sense of [[def-c-star-algebra]]. In particular it is complete, $\|AB\|\le\|A\|\|B\|$, $\|A^*A\|=\|A\|^2$, $\|A^*\|=\|A\|$ and $\|I\|=1$. The matrix $\|A\|^2I-A^*A$ is positive semidefinite and has a positive square root in $\mathcal B(H)$.

Every complex-linear functional $\omega:\mathcal B(H)\to\mathbb C$ that is positive, meaning $\omega(B^*B)\ge0$ for all $B$, has a unique positive semidefinite matrix $\rho$ such that $\omega(A)=\operatorname{Tr}(\rho A)$ for all $A$. It is bounded and satisfies

$$|\omega(A)|\le\operatorname{Tr}(\rho)\|A\|\quad(A\in\mathcal B(H)),\qquad \|\omega\|=\operatorname{Tr}(\rho)=\omega(I).$$

Consequently the canonical states of [[def-state-on-a-c-star-algebra]] are exactly the trace pairings of density operators of [[def-qc-density-operator]]; for a positive functional, normalization $\omega(I)=1$ is equivalent to norm one. The result includes zero positive functionals, nonfaithful densities and $D=1$; it makes no infinite-dimensional density representation assertion.

## Facts & Assumptions

**Given:** Nonzero finite $H$ with the linear-first convention and the ordinary operator norm and finite trace.

[F1] [[lem-qsm-matrix-state-calculus]] supplies finite Hermitian spectral calculus, positive square roots, and cyclic basis-independent trace.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] give the induced norm, submultiplicativity and C*-identity. [[cor-finite-dimensional-normed-spaces-are-banach]] gives completeness for a normed space with an ordered finite basis.

[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[def-matrix-units]] and [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] supply an orthonormal coordinate basis, its matrix units, and vector Cauchy–Schwarz.

[F4] [[def-c-star-algebra]] specifies all C*-algebra axioms. [[def-state-on-a-c-star-algebra]] defines a state by positivity and bounded-functional norm one; only these defining clauses are used, not its general approximate-unit norm theorem. [[def-qc-density-operator]] defines a finite density by positivity and trace one.

## Proof

1.1 Choose an ordered orthonormal basis $e_1,\ldots,e_D$. Its matrix units form an ordered basis of the complex endomorphism space, since $A=\sum_{i,j}A_{ij}E_{ij}$ uniquely. The operator norm is a norm: its triangle inequality and homogeneity follow by applying the vector norm to $Av$ for unit $v$, and norm zero implies $Ae_j=0$ for all $j$. Matrix composition is associative and complex bilinear, and conjugate transpose is conjugate-linear, involutive and reverses products. By [F2] the norm is submultiplicative, complete, and satisfies $\|A^*A\|=\|A\|^2$. Thus all axioms of [F4] hold. The identity is nonzero and has norm one because $D\ge1$. The C*-identity and submultiplicativity give $\|A\|^2\le\|A^*\|\|A\|$, and applying this also to $A^*$ gives $\|A^*\|=\|A\|$, including $A=0$. [given, F2, F3, F4, algebra]

2.1 For every vector $v$, $\langle(\|A\|^2I-A^*A)v,v\rangle=\|A\|^2\|v\|^2-\|Av\|^2\ge0$. This Hermitian matrix is positive semidefinite, so [F1] gives its positive square root. The same spectral calculus shows that matrix positivity is equivalent to being $B^*B$, agreeing with the algebraic positivity used in [F4]. [F1, F4, step 1.1, algebra]

3.1 Let $\omega$ be complex linear and positive, and define $\rho_{ij}:=\omega(E_{ji})$. Finite expansion gives $\omega(A)=\sum_{i,j}A_{ij}\omega(E_{ij})=\operatorname{Tr}(\rho A)$. For a column vector $z$, take $B=e_1z^*$; then $B^*B=zz^*$, so $z^*\rho z=\operatorname{Tr}(\rho zz^*)=\omega(B^*B)\ge0$ is real. Substitution of $z=e_i$, $e_i+e_j$, and $e_i+i e_j$ shows that the diagonal is real and $\rho_{ji}=\overline{\rho_{ij}}$; hence $\rho$ is Hermitian and its nonnegative quadratic forms make it positive semidefinite. Taking $A=I$ gives $\operatorname{Tr}\rho=\omega(I)$. The formula on the matrix units forces every entry of any representing matrix, proving uniqueness. [given, F3, step 2.1, construct]

4.1 Conversely let $\rho\ge0$ and diagonalize it by [F1] as $\rho=\sum_j p_j|u_j\rangle\langle u_j|$, $p_j\ge0$. Then $\omega_\rho(A)=\sum_jp_j\langle Au_j,u_j\rangle$ is complex linear and $\omega_\rho(B^*B)=\sum_jp_j\|Bu_j\|^2\ge0$. For every complex $A$, vector Cauchy–Schwarz gives $|\omega_\rho(A)|\le\sum_jp_j\|Au_j\|\le(\sum_jp_j)\|A\|$. Thus its functional norm is at most $\operatorname{Tr}\rho$, and evaluating at the norm-one identity gives the reverse inequality. This proves the norm formula, including $\rho=0$. The preceding reconstruction and this converse give the full bijection; imposing norm one is exactly imposing trace one by [F4], with no faithfulness requirement. [F1, F3, F4, step 1.1, step 3.1, algebra] ∎
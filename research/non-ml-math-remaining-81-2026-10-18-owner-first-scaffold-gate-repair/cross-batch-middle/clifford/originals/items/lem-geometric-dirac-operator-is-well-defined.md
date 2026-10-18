---
id: lem-geometric-dirac-operator-is-well-defined
kind: lemma
title: "The geometric Dirac operator is globally well defined and formally symmetric"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 2
deps:
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-clifford-algebra-of-a-quadratic-space
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-riemannian-divergence-theorem
  - def-countable-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + AC_omega (countable choice), inherited through the Riemannian divergence theorem"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

For a supplied graded Hermitian Clifford module and compatible connection as in [[def-graded-hermitian-clifford-module-and-geometric-dirac]], the local expression $D_V=\sum_i c(e^i)\nabla^V_{e_i}$ is independent of oriented orthonormal frame, is a smooth globally defined first-order differential operator, and is formally symmetric on a closed $M$.

## Facts & Assumptions

**Given:** A smooth oriented Riemannian manifold, a graded Hermitian Clifford module $V$, and a supplied graded Hermitian Clifford connection $\nabla^V$.

[F1] The Clifford relation, odd action and skew-Hermitian condition are exactly those in [[def-graded-hermitian-clifford-module-and-geometric-dirac]].

[F2] A Clifford connection obeys $\nabla^V_X(c(\xi)v)=c(\nabla^{LC}_X\xi)v+c(\xi)\nabla^V_Xv$ ([[def-graded-hermitian-clifford-module-and-geometric-dirac]], [[def-complex-linear-and-compatible-bundle-connections]]).

[F3] On a closed Riemannian manifold, the integral of the divergence of a smooth vector field is zero under countable choice ([[thm-riemannian-divergence-theorem]]).

[A1] This proof uses only $\mathrm{AC}_\omega$ through [F3]; it is declared in [[def-countable-choice]].

## Proof

**Given:** The stated module, connection and closed manifold.

1.1 On an overlap let $e'_i=\sum_j a_{ij}e_j$ be a change of oriented orthonormal frame, so $A=(a_{ij})$ is orthogonal. The dual coframe changes by the same orthogonal coefficient matrix with the corresponding inverse convention, while $\nabla_{e'_i}=\sum_k a_{ik}\nabla_{e_k}$. Therefore $\sum_i c(e'^i)\nabla_{e'_i}=\sum_{i,j,k}a_{ij}a_{ik}c(e^j)\nabla_{e_k}=\sum_jc(e^j)\nabla_{e_j}$ by $\sum_i a_{ij}a_{ik}=\delta_{jk}$. Each chart expression has smooth coefficients, and these overlap equalities glue them to one global first-order operator. [F1, F2, given, algebra]

2.1 Define the complex vector field $Y=\sum_i\langle c(e^i)u,v\rangle e_i$ for smooth sections $u,v$. At any chosen point take a local orthonormal frame with $\nabla^{LC}e_i=0$ there. Using [F2], metric compatibility and $\nabla e_i=0$ at that point gives $\operatorname{div}Y=\langle D_Vu,v\rangle-\langle u,D_Vv\rangle$: the second term has this sign because $c(e^i)^*=-c(e^i)$ and the Hermitian pairing is linear in its first variable. Since this is a pointwise identity independent of the chosen normal frame, it holds globally. Apply [F3] to real and imaginary parts of $Y$ and integrate to get $\int_M\langle D_Vu,v\rangle=\int_M\langle u,D_Vv\rangle$. Thus $D_V$ is formally symmetric. Oddness follows termwise because each $c(e^i)$ is odd and $\nabla$ preserves grading. [A1, F1, F2, F3, step 1.1] ∎

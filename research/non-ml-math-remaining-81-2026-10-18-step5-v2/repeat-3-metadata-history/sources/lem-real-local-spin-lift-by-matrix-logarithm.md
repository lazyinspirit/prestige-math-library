---
id: lem-real-local-spin-lift-by-matrix-logarithm
kind: lemma
title: Local Spin lift from the matrix logarithm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 6
deps:
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-polarized-relations
  - thm-clifford-pbw-basis-and-associated-graded
  - lem-real-orthogonal-space-preliminaries
  - lem-real-clifford-involutions-and-norm
  - def-real-clifford-group-and-normalized-pin-spin
  - lem-twisted-clifford-adjoint-reflection-and-scalar-kernel
  - lem-normalized-pin-spin-product-and-norm-laws
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §§1.5 and 1.8"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

Let $(V,B)$ be a finite-dimensional nondegenerate real quadratic space, let $J=\operatorname{diag}(\epsilon_1,\ldots,\epsilon_n)$ be its matrix in an orthogonal anisotropic basis with $\epsilon_i=Q(e_i)\in\{1,-1\}$, and let $SO(V,B)$ have the subspace topology from matrices. There is a neighborhood $U$ of the identity in $SO(V,B)$ and a continuous map $s:U\to\operatorname{Spin}_{N=1}(V,Q)$ with $s(I)=1$ and $\rho(s(A))=A$.

## Facts & Assumptions

**Given:** The Clifford relation, group conventions, and PBW theorem cited below.

[F1] $e_ie_j+e_je_i=2B(e_i,e_j)1$ and $e_i^2=Q(e_i)1$ ([[def-clifford-algebra-of-a-quadratic-space]], [[lem-clifford-polarized-relations]]).

[F2] The orthogonal square-free monomials form a basis; in particular the bivectors $e_ie_j$ are linearly independent ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F3] $\alpha$, reversion, Clifford conjugation and $N(x)=x\bar x$ have the conventions used here ([[lem-real-clifford-involutions-and-norm]]).

[F4] $\Gamma$, $\rho$, and $\operatorname{Spin}_{N=1}$ are defined as in [[def-real-clifford-group-and-normalized-pin-spin]], and the norm-one product characterization is in [[lem-normalized-pin-spin-product-and-norm-laws]].

## Proof


**Proof technique:** direct.

1.1 If $n=0$, set $U=\{I_0\}$, $L=0$, and $s(I_0)=1$; this is a continuous section with norm one. For $n>0$, choose a submultiplicative matrix norm and shrink a neighborhood $U$ of $I$ in $SO(V,B)$ until $\|A-I\|$, $\|A^T-I\|$, and $\|A^{-1}-I\|$ are all less than $1$. Then the series $L=\log A=\sum_{m\ge1}(-1)^{m+1}(A-I)^m/m$ and the corresponding series for $A^T$ and $A^{-1}$ converge absolutely and continuously. The scalar power-series identities, by absolute Cauchy products, give $\exp L=A$, $\log(A^T)=L^T$, and $\log(A^{-1})=-L$. From $A^TJA=J$ one gets $JAJ=A^{-T}$, so conjugating the logarithm series gives $JLJ=-L^T$, equivalently $L^TJ+JL=0$. [given, construct, algebra]

2.1 For $i<j$, direct use of [F1] gives $[e_ie_j,e_k]=2(B(e_j,e_k)e_i-B(e_i,e_k)e_j)$. The $n(n-1)/2$ bivectors therefore map under $b\mapsto\operatorname{ad}_b|_V$ to a basis of the matrices $L$ satisfying $L^TJ+JL=0$: each coefficient $c_{ij}$ independently gives entries $L_{ij}=2c_{ij}\epsilon_j$ and $L_{ji}=-2c_{ij}\epsilon_i$. Thus there is a unique bivector $b(L)=\sum_{i<j}c_{ij}e_ie_j$ with $[b(L),v]=Lv$ for every $v\in V$, and it depends linearly and continuously on $L$. [F1, F2, step 1.1, algebra]

3.1 Set $s(A)=\exp(b(L))$ in the finite-dimensional Clifford algebra. Since $b(L)$ is even, $\alpha(s(A))=s(A)$. The convergent commutator series gives $s(A)v s(A)^{-1}=\exp(\operatorname{ad}_{b(L)})(v)=\exp(L)v=Av$, so $s(A)\in\Gamma$ and $\rho(s(A))=A$. [F3, F4, step 2.1, construct]

4.1 Reversion negates each bivector, hence Clifford conjugation sends $b(L)$ to $-b(L)$ and $\overline{\exp(b(L))}=\exp(-b(L))$. Therefore $N(s(A))=\exp(b(L))\exp(-b(L))=1$. By [F4], $s(A)\in\operatorname{Spin}_{N=1}$. Continuity of matrix logarithm on $U$, of $b(L)$, and of the finite-dimensional algebra exponential proves continuity of $s$, with $s(I)=1$. [F3, F4, step 3.1, algebra] ∎

## Remarks

This explicit local section proves the infinitesimal-to-local group lift needed for a topological covering; the abstract exact sequence alone would not do so.

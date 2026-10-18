---
id: def-overlapping-schwarz-subspace-correction-data
kind: definition
title: "Finite-dimensional Schwarz subspace-correction data"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-galerkin-coarse-grid-correction
  - thm-galerkin-coarse-correction-is-energy-orthogonal-projector
  - def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix
  - def-matrix-product-and-identity-matrix
  - prop-transpose-laws
justified_by:
  - lem-schwarz-local-matrices-are-well-defined
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1–4.2, pp. 585–594: subspaces, local solves, additive and successive correction operators."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §§4.1–4.3, printed pp. 57–66: local projections and abstract additive/multiplicative Schwarz theory."
---

## Definition

Work in exact real arithmetic. Let $n\ge1$ and $V=\mathbb R^n$, and let
$A=A^{\mathsf T}$ satisfy $x^{\mathsf T}Ax>0$ for every nonzero $x$.
Give $V$ the energy inner product $a(x,y)=x^{\mathsf T}Ay$ and norm
$\|x\|_A^2=a(x,x)$ of
[[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]].
An operator $S$ is $A$-self-adjoint when $a(Sx,y)=a(x,Sy)$ for all $x,y$;
it is positive when $a(Sx,x)>0$ for every nonzero $x$. An $A$-orthogonal
projection is an idempotent $A$-self-adjoint operator.
Let $\mathcal I$ be a finite ordered nonempty set and, for each
$i\in\mathcal I$, choose a full-column-rank prolongation
$R_i\in\mathbb R^{n\times n_i}$ with $1\le n_i\le n$, and put
$V_i=\operatorname{Ran}(R_i)$.
A one-level method has $\mathcal I=\{1,\ldots,m\}$. A two-level method has
$\mathcal I=\{0,1,\ldots,m\}$, where $R_0=P$ and $V_0$ is the designated
coarse space. Restriction of a global residual is $R_i^{\mathsf T}$ and
prolongation of a local coefficient vector is $R_i$. Define the local energy
matrix
$$A_i=R_i^{\mathsf T}AR_i.$$
When the coarse index $0$ is present, $A_0=P^{\mathsf T}AP$ is the Galerkin
coarse matrix of [[def-galerkin-coarse-grid-correction]]. By
[[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]], it is SPD
and the exact coarse solve is well-defined.

For each $i\in\mathcal I$, the exact local correction and additive
preconditioner are
$$ \Pi_i=R_iA_i^{-1}R_i^{\mathsf T}A, \qquad B=\sum_{i\in\mathcal I}R_iA_i^{-1}R_i^{\mathsf T}. $$
When the spaces span $V$, the exact additive Schwarz preconditioned operator
is $BA=\sum_{i\in\mathcal I}\Pi_i$. For a fixed ordering of $\mathcal I$, a
multiplicative sweep applies its corrections in that order; if $0$ is present,
it is first. For an inexact additive method, replace each exact $A_i^{-1}$ by
the inverse of an SPD matrix $\widetilde A_i$ satisfying, for fixed
$0<\alpha\le\beta$,
$$ \alpha A_i\preceq \widetilde A_i\preceq\beta A_i, \qquad \widetilde B=\sum_{i\in\mathcal I}R_i\widetilde A_i^{-1}R_i^{\mathsf T}. $$
For symmetric matrices, $X\preceq Y$ means
$z^{\mathsf T}Xz\le z^{\mathsf T}Yz$ for every vector $z$. The order
inequalities define uniform local spectral equivalence in this pair. The
lemma [[lem-schwarz-local-matrices-are-well-defined]] proves the remaining
local inverse and well-definedness claims.

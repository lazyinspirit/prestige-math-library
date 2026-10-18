---
id: alg-aggregation-based-algebraic-multigrid-hierarchy
kind: algorithm
title: "Finite strength-graph aggregation and Galerkin hierarchy with explicit statuses"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-galerkin-coarse-grid-correction,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-matrix-product-and-identity-matrix,
       def-cholesky-factorisation-with-positive-diagonal]
justified_by: [thm-aggregation-amg-hierarchy-preserves-spd-and-terminates]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
  - title: "Chen-Song Zhang, Multilevel Iterative Methods, version 0.5, Chapter 6"
    url: "https://lsec.cc.ac.cn/~zhangcs/pub/course2016/mgnote.pdf"
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
---

## Definition

This is a finite aggregation-based algebraic multigrid **setup** procedure; it
constructs a hierarchy and does not claim that any cycle converges. All
arithmetic and comparisons below are exact. An admissible input consists of an
integer $n_0\ge1$, a real symmetric positive-definite matrix
$A_0=(a_{ij})\in\mathbb R^{n_0\times n_0}$ whose off-diagonal
entries satisfy $a_{ij}\le0$, a real threshold $0<\theta<1$, a coarse-size
threshold $n_{\min}\ge1$, and a real level cap $L\in\mathbb R_{\ge0}$. A
matrix with these sign and definiteness conditions is the matrix class used
here. The terms
**strength graph**, **aggregate**, **prolongation**, and **Galerkin hierarchy**
are defined by the steps below.

Initialize $\ell=0$ once and retain $A_0$ in the output. Then execute the
following level steps.

1. Set $n_\ell=\dim A_\ell$. If
   $n_\ell\le n_{\min}$, return status `coarse-reached`.
2. If $\ell+1>L$ before the next aggregation attempt, return status
   `level-cap`.
3. On vertices $1,\ldots,n_\ell$, place an undirected edge $\{i,j\}$ for
   $i\ne j$ exactly when $a_{ij}^{(\ell)}<0$ and at least one of
   $$-a_{ij}^{(\ell)}\ge\theta\max_{k\ne i}(-a_{ik}^{(\ell)}),\qquad -a_{ij}^{(\ell)}\ge\theta\max_{k\ne j}(-a_{jk}^{(\ell)})$$
   holds. This finite graph is the strength graph at level $\ell$.
4. Let $U=\{1,\ldots,n_\ell\}$ and start with no aggregates. While $U\ne\varnothing$, let $i$ be the smallest element of $U$, create one aggregate
   $$C_r=\{i\}\cup\bigl(N(i)\cap U\bigr),$$
   where $N(i)$ is its strength-graph neighbour set, then remove every element of $C_r$ from $U$. This produces an ordered family of aggregates.
5. Let $n_{\ell+1}$ be the number of aggregates. If $n_{\ell+1}\ge n_\ell$, return status `coarsening-stalled` with the hierarchy through level $\ell$. Otherwise form the indicator prolongation
   $$(P_\ell)_{ir}=1\text{ if }i\in C_r,\qquad (P_\ell)_{ir}=0\text{ otherwise},$$
   form the Galerkin coarse matrix $A_{\ell+1}=P_\ell^{\mathsf T}A_\ell P_\ell$, append $P_\ell,A_{\ell+1}$, replace $\ell$ by $\ell+1$, and return to step 1.

The result contains all completed matrices and prolongations and exactly one
status: `coarse-reached`, `level-cap`, or `coarsening-stalled`. Reaching any
status is not a convergence or quality certificate.

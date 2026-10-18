---
id: thm-aggregation-amg-hierarchy-preserves-spd-and-terminates
kind: theorem
title: "Finite aggregation AMG preserves the SPD matrix class and returns a status"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-aggregation-based-algebraic-multigrid-hierarchy,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-cholesky-factorisation-with-positive-diagonal,
       def-matrix-product-and-identity-matrix]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
  - title: "Chen-Song Zhang, Multilevel Iterative Methods, version 0.5, Chapter 6"
    url: "https://lsec.cc.ac.cn/~zhangcs/pub/course2016/mgnote.pdf"
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
---

## Statement

For every admissible input to
[[alg-aggregation-based-algebraic-multigrid-hierarchy]], each successful
aggregation partitions the current indices into nonempty disjoint sets. Its
indicator prolongation has full column rank. Every successful Galerkin product
$A_{\ell+1}=P_\ell^{\mathsf T}A_\ell P_\ell$ is symmetric positive definite
with nonpositive off-diagonal entries. The setup procedure terminates after at
most $\lfloor L\rfloor$ coarsening attempts and returns exactly one of `coarse-reached`,
`level-cap`, or `coarsening-stalled`. These structural properties do not imply
multigrid convergence.

## Facts & Assumptions

**Given:** The admissible real symmetric positive-definite matrix $A_0$ with nonpositive off-diagonal entries, $0<\theta<1$, $n_{\min}\ge1$, and real finite cap $L\in\mathbb R_{\ge0}$.

[F1] [[alg-aggregation-based-algebraic-multigrid-hierarchy]]: each aggregate begins with the smallest unassigned vertex and removes that vertex together with some of its still-unassigned neighbours; the output uses $P_{ir}=1$ exactly on aggregate membership and the Galerkin product. Before each attempt, the procedure returns `level-cap` if $\ell+1>L$.

[F2] [[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]: if a real SPD matrix is compressed by a full-column-rank prolongation, the Galerkin coarse matrix is SPD.

[F3] [[def-cholesky-factorisation-with-positive-diagonal]]: positive definite in the real case means symmetric and strictly positive quadratic form on every nonzero vector.

## Proof
1.1 At any aggregation pass the unassigned set $U$ is finite and nonempty. The selected smallest vertex $i$ belongs to the new aggregate, so at least one vertex is removed. No previously removed vertex can reappear because every neighbour is intersected with $U$. Thus the aggregates are pairwise disjoint and, when the finite loop ends at $U=\varnothing$, cover all current indices. Each aggregate is nonempty. If $Pz=0$, choose any row index in aggregate $r$; its row has a single $1$ in column $r$, so that component of $Pz$ is $z_r=0$. This holds for every $r$, hence $P$ has full column rank. [F1, choose, construct]

2.1 By [F2] and step 1.1, $A_{\ell+1}=P_\ell^{\mathsf T}A_\ell P_\ell$ is SPD. For distinct aggregate columns $r\ne s$, disjointness gives $$(A_{\ell+1})_{rs}=\sum_{i\in C_r}\sum_{j\in C_s}a_{ij}^{(\ell)}\le0,$$ since $i\ne j$ in every summand and the fine matrix has nonpositive off-diagonal entries. Symmetry follows from symmetry of $A_\ell$. Induction over successful levels proves the same matrix class at each returned level. [F1, F2, F3, step 1.1, algebra]

2.2 Each aggregation pass is finite by step 1.1. A pass is attempted only when $\ell+1\le L$, so the number of attempts is an integer at most $\lfloor L\rfloor$. At each outer iteration, step 1 returns `coarse-reached` when $n_\ell\le n_{\min}$; otherwise the cap test in [F1] returns `level-cap` when $\ell+1>L$. If neither branch applies, a pass is performed and either $n_{\ell+1}\ge n_\ell$ returns `coarsening-stalled`, or the procedure advances to the next level. These ordered branches exhaust the procedure, so it terminates with exactly one listed status. [F1, step 1.1, choose, algebra]

3.1 The preceding steps establish the partition, rank, matrix-class and status claims. No step asserts a contraction factor. [step 1.1, step 2.1, step 2.2] ∎

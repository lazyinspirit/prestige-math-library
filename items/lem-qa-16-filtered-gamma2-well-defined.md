---
id: lem-qa-16-filtered-gamma2-well-defined
kind: lemma
title: Finite-dimensional well-definedness of the filtered γ₂ program
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - def-qa-16-filtered-gamma2
  - def-qa-16-input-mismatch-matrices
  - def-qa-16-boolean-query-domain
  - def-inner-product-space
  - def-qc-dirac-notation-conversion
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-heine-borel-rn
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For the Boolean mismatch masks, $\gamma_2(A\mid\Delta)<\infty$ if and only if $A_{xx}=0$ for every x. Whenever finite, the infimum is attained by finite vector families. A minimizing family can be taken in dimension at most $2|D|$ for each coordinate i.

## Facts & Assumptions

**Given:** A finite matrix A indexed by D×D and the masks Δ_i on the same finite Boolean input set.



[F1] [[def-qa-16-filtered-gamma2]]: γ₂(A|Δ) is the infimum of the maximum row/column sum of squared vector norms over finite factorizations.

[F2] [[def-inner-product-space]]: the inner product is positive definite and induces the vector norm.

[F3] [[def-qc-dirac-notation-conversion]]: the Dirac pairing represents the cross-Gram entries used in the factorization.

[F4] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional real or complex inner-product space has an orthonormal basis.

[F5] [[thm-heine-borel-rn]]: closed bounded subsets of positive finite-dimensional real Euclidean spaces are compact.

[F6] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum and maximum.

[F7] [[def-qa-16-boolean-query-domain]]: $N\ge1$ and the finite query domain $D$ is nonempty.

## Proof

1.1 If A_{xx}≠0, the factorization equation at (x,x) has right side zero because every Δ_i(x,x)=0, so A is infeasible. If A has zero diagonal, assign each off-diagonal entry A_{xy} to the least i with x_i≠y_i, forming matrices A^{(i)} supported on Δ_i and satisfying A=Σ_i A^{(i)}. For d=|D|, put u_{x,i}=(\overline{A^{(i)}_{x1}},…,\overline{A^{(i)}_{xd}}) and v_{y,i}=e_y in C^d; then ⟨u_{x,i}|v_{y,i}⟩_D=A^{(i)}_{xy}. This is a finite feasible factorization. [given, F1, F2, F3, F7, construct]

2.1 For any feasible factorization in finite dimension, take, for each i, the span of the d vectors $u_{x,i}$ and d vectors $v_{y,i}$. It has dimension at most $2d$; by [F4] choose an orthonormal basis and map its vectors to their coordinates, padding with zero coordinates in $\mathbb C^{2d}$. This preserves every inner product and norm. Thus every feasible candidate has a representation in one fixed finite product of coordinate spaces $\mathbb C^{2d}$. [given, F1, F4, step 1.1, construct]

3.1 By step 1.1 choose one feasible family and let $K$ be its finite cost. Use step 2.1 to represent feasible families in a fixed finite product of copies of $\mathbb C^{2d}$, viewed as a positive-dimensional real Euclidean space; $d\ge1$ by [F7]. The set of coordinate families satisfying the factorization equations and having cost at most $K$ is nonempty, closed, and bounded: the equations and cost are continuous, and each vector norm is at most $\sqrt K$. By [F5] this set is compact. Its continuous cost function attains a minimum by [F6]. Any feasible family with lower cost would also belong to this set, so the minimum equals the global infimum and is attained. Thus every feasible $A$ has an attained finite value, while nonzero diagonal is exactly the infeasible case. [given, F1, F2, F5, F6, F7, step 1.1, step 2.1, construct] ∎

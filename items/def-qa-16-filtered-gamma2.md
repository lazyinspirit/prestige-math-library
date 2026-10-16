---
id: def-qa-16-filtered-gamma2
kind: definition
title: Filtered γ₂ factorization norm for query mismatch masks
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - def-qa-16-input-mismatch-matrices
  - def-inner-product-space
  - def-qc-dirac-notation-conversion
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

## Definition


Let $D\subseteq\{0,1\}^N$ be a nonempty finite domain with $N\ge1$, and let $\Delta=\{\Delta_i\}_{i=1}^N$ be its input-mismatch masks from [[def-qa-16-input-mismatch-matrices]]. For any complex matrix $A$ indexed by $D\times D$, define
$$
\gamma_2(A\mid\Delta):=\inf \max\!\left\{\max_{x\in D}\sum_i\|u_{x,i}\|^2,\ \max_{y\in D}\sum_i\|v_{y,i}\|^2\right\},
$$
where the infimum is over finite-dimensional complex inner-product spaces and vector families satisfying
$$A_{xy}=\sum_i(\Delta_i)_{xy}\langle u_{x,i}|v_{y,i}\rangle_D\quad(x,y\in D).$$
Set the value to $+\infty$ if no such families exist. Every feasible family may be taken in dimension at most $2|D|$ for each i.

## Facts & Assumptions

**Given:** A finite matrix A and the mismatch masks Δ on the same nonempty finite Boolean input set D.



[F1] [[def-qa-16-input-mismatch-matrices]]: Δ_i(x,y)=1 exactly when x_i≠y_i; J−F vanishes on the diagonal and on equal-output pairs.

[F2] [[def-inner-product-space]]: finite real or complex vector spaces have a positive-definite inner product.

[F3] [[def-qc-dirac-notation-conversion]]: the Dirac pairing is linear in the ket (second argument) and conjugate-linear in the bra (first argument).

## Proof

1.1 For each i, encode two finite vector families u_{x,i},v_{y,i} in a common finite-dimensional complex inner-product space. Their filtered factorization represents A exactly when A_{xy}=Σ_i(Δ_i)_{xy}⟨u_{x,i}|v_{y,i}⟩_D for every ordered pair (x,y). The Dirac convention [F3] makes this expression conjugate-linear in each u factor and linear in each v factor. [given, F1, F2, F3, construct]

2.1 The cost of a representation is max{max_xΣ_i||u_{x,i}||²,max_yΣ_i||v_{y,i}||²}; take the infimum over all finite-dimensional representations. If A_{xx}≠0 for some x, all Δ_i(x,x)=0 and no representation exists. If A has zero diagonal, each off-diagonal pair differs in some coordinate; assigning its entry to the first differing mask and writing $A^{(i)}$ for each resulting matrix, take $u_{x,i}=(\overline{A^{(i)}_{xy}})_{y\in D}$ and $v_{y,i}=e_y$ in $\mathbb C^{|D|}$. Then $\langle u_{x,i}|v_{y,i}\rangle_D=A^{(i)}_{xy}$, so this is a feasible representation. [given, F1, F2, F3, step 1.1, construct]

3.1 Thus the value is +∞ exactly when the diagonal support obstruction occurs, and otherwise the infimum ranges over a nonempty finite-dimensional class with a finite nonnegative cost. For any feasible family, restricting the ambient space for each i to the span of its 2|D| vectors preserves all inner products and norms and gives dimension at most 2|D|. Nonemptiness of D ensures that both maxima in the cost are defined. [given, F2, step 1.1, step 2.1] ∎

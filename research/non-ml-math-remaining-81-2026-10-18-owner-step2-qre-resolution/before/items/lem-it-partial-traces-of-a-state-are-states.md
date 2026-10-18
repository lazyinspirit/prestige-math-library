---
id: lem-it-partial-traces-of-a-state-are-states
kind: lemma
title: Partial traces of a finite bipartite state are states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qc-density-operator, def-non-negative-and-positive-operator, def-qc-partial-trace, def-qc-first-factor-partial-trace, def-qc-tensor-register-and-permutation, thm-qc-partial-trace-positive-and-trace-preserving, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-trace-of-an-endomorphism]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §§2.1.3 and 5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.1 and 11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For nonzero finite-dimensional complex inner-product spaces $H_A,H_B$ and a density operator $\rho_{AB}$ on $H_A\otimes H_B$, both marginals $\rho_A:=\operatorname{Tr}_B\rho_{AB}$ and $\rho_B:=\operatorname{Tr}_A\rho_{AB}$ are density operators.

## Facts & Assumptions

**Given:** The spaces $H_A,H_B$ and the state $\rho_{AB}$ in the Statement.

[F1] [[def-qc-density-operator]]: a density operator is non-negative and has trace one.

[F2] [[def-qc-partial-trace]]: in ordered orthonormal bases, $(\operatorname{Tr}_B R)_{ii'}=\sum_jR_{(i,j),(i',j)}$.

[F3] [[def-qc-first-factor-partial-trace]]: in ordered orthonormal bases, $(\operatorname{Tr}_A R)_{jj'}=\sum_iR_{(i,j),(i,j')}$.

[F4] [[thm-qc-partial-trace-positive-and-trace-preserving]]: the partial trace over a finite second tensor factor preserves non-negativity and total trace.

[F5] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form.


[F6] [[def-qc-tensor-register-and-permutation]]: the product inner product and product basis respect the displayed tensor-factor order.

[F7] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F8] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in an ordered basis.

## Proof

1.1 By the second-factor formula [F2] and the positivity/trace theorem [F4], $\rho_A=\operatorname{Tr}_B\rho_{AB}$ is non-negative and has trace $\operatorname{tr}(\rho_{AB})=1$. It is therefore a density operator by [F1]. [given, F1, F2, F4]

1.2 Choose ordered orthonormal bases $(a_i)$ and $(b_j)$ of $H_A,H_B$ by [F7]. Formula [F3] and the product inner product in [F6] give $\langle\rho_B y,y\rangle=\sum_i\langle\rho_{AB}(a_i\otimes y),a_i\otimes y\rangle$ for every $y\in H_B$; every summand is nonnegative by [F1] and [F5]. The matrix formula [F3] also shows $\rho_B$ is self-adjoint because $\rho_{AB}$ is self-adjoint. Hence $\rho_B$ is non-negative. [given, F1, F3, F5, F6, F7, choose, algebra]

2.1 Summing the diagonal entries in [F3] gives $\operatorname{tr}(\rho_B)=\sum_{i,j}(\rho_{AB})_{(i,j),(i,j)}=\operatorname{tr}(\rho_{AB})=1$ by [F8] and [F1]. Therefore $\rho_B$ is a density operator by [F1]. [given, F1, F3, F8, step 1.2, algebra] ∎


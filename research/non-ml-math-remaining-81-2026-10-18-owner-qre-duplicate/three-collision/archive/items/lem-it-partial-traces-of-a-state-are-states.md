---
id: lem-it-partial-traces-of-a-state-are-states
kind: lemma
title: Partial traces of a finite bipartite state are states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qc-density-operator, def-qc-partial-trace, def-qc-first-factor-partial-trace, thm-qc-partial-trace-positive-and-trace-preserving, thm-non-negative-operator-characterisations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
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

[F5] [[thm-non-negative-operator-characterisations]]: non-negativity is equivalent to self-adjointness with nonnegative eigenvalues, and in particular implies a nonnegative quadratic form.

## Proof

1.1 By [F4], $\rho_A=\operatorname{Tr}_B\rho_{AB}$ is non-negative and has trace $\operatorname{tr}(\rho_{AB})=1$. It is therefore a density operator by [F1]. [given, F1, F4]

2.1 Choose ordered orthonormal bases $(a_i)$ and $(b_j)$ of $H_A,H_B$. Formula [F3] gives $\langle\rho_B y,y\rangle=\sum_i\langle\rho_{AB}(a_i\otimes y),a_i\otimes y\rangle$ for every $y\in H_B$ by expansion in the product basis; every summand is nonnegative by [F1] and [F5]. The matrix formula [F3] also shows $\rho_B$ is self-adjoint because $\rho_{AB}$ is self-adjoint. Hence $\rho_B$ is non-negative. [given, F1, F3, F5, choose, algebra]

3.1 Summing the diagonal entries in [F3] gives $\operatorname{tr}(\rho_B)=\sum_{i,j}(\rho_{AB})_{(i,j),(i,j)}=\operatorname{tr}(\rho_{AB})=1$. Therefore $\rho_B$ is a density operator by [F1]. [given, F1, F3, step 2.1, algebra] ∎


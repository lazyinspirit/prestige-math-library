---
id: ex-qa-14-hybrid-budget-for-n-small
kind: example
title: Finite hybrid budget for a four-address search space
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - lem-qa-14-cumulative-hybrid-bound
  - def-qa-14-query-mismatch-projectors
  - thm-qc-computational-basis-orthonormal
  - def-qc-dirac-notation-conversion
  - thm-qc-unit-vector-projector-is-density
proof_strategy: direct
axiom_use: None; the example uses a finite four-dimensional register and an explicit unitary reflection.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): address query magnitudes and cumulative hybrid distance."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–112 (PDF pp.119–121): query-address probabilities in hybrid lower bounds."
---

## Example

Take $N=4$ and $T=2$. There is a two-query all-zero-oracle circuit whose first pre-query address state is uniform on four addresses and whose second pre-query address state is the fourth basis vector. It has $\sum_iq_{t,i}=1$ at each query time. Its cumulative hybrid estimates give squared-distance sum at most $12$, hence average at most $3$, while the general aggregate theorem permits at most $4T^2=16$, hence average at most $4$.

## Facts & Assumptions

**Given:** The four-dimensional address register, its query projectors, and the cumulative hybrid estimate.

[F1] [[thm-qc-computational-basis-orthonormal]]: the four computational address vectors are an orthonormal basis.

[F2] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|z=\langle z,v\rangle_{\rm root}u$ in the root inner-product convention.

[F3] [[def-qa-14-query-mismatch-projectors]]: the address projectors are orthogonal and their squared norms sum to the squared norm of the full state.

[F4] [[lem-qa-14-cumulative-hybrid-bound]]: each final-state distance is at most $2(\sqrt{q_{0,i}}+\sqrt{q_{1,i}})$ when $T=2$.

[F5] [[thm-qc-unit-vector-projector-is-density]]: for a unit vector $u$, $P_u=|u\rangle\langle u|$ is self-adjoint and idempotent.

## Proof

1.1 Let $|s\rangle=\frac12(|0\rangle+|1\rangle+|2\rangle+|3\rangle)$ be the first query's address state, with any fixed unit response and work state. By [F1], $\|s\|=1$ and each address probability is $q_{0,i}=1/4$. Hence $\sum_iq_{0,i}=1$. [given, F1, algebra]

1.2 Put $e_3=|3\rangle$ and $u=s-e_3$. By [F1], $\langle s,e_3\rangle_{\rm root}=1/2$, so $\|u\|^2=1+1-2(1/2)=1$. The map $P_u=|u\rangle\langle u|$ is an orthogonal projection by [F5], and $R=I-2P_u$ satisfies $R^*R=R^2=I$. By [F2], $P_us=\langle s,u\rangle_{\rm root}u=(1/2)u$, so $Rs=s-u=e_3$. Use this input-independent reflection between the first and second queries. The all-zero oracle is identity, so the second pre-query address state is $|3\rangle$; thus $q_{1,4}=1$, $q_{1,1}=q_{1,2}=q_{1,3}=0$, and $\sum_iq_{1,i}=1$. [F1, F2, F5, algebra]

2.1 Apply [F4]. For $i=1,2,3$, $\|\psi_2^i-\psi_2^0\|\le2(1/2+0)=1$; for $i=4$, $\|\psi_2^4-\psi_2^0\|\le2(1/2+1)=3$. Therefore the sum of squared bounds is at most $3\cdot1^2+3^2=12$, and the average squared distance is at most $12/4=3$. The general bound $4T^2$ gives total at most $16$ and average at most $4$, so the explicit address allocation is consistent with that budget. [F3, F4, step 1.1, step 1.2, algebra] ∎

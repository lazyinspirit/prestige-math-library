---
id: thm-nrqmx-sharp-joint-measurability
kind: theorem
title: "Sharp finite joint measurability forces commutation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - lem-nrqm-composites-finite-effects-and-instruments
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Teiko Heinosaari, Daniel Reitzner, and Peter Stano, Notes on Joint Measurability of Quantum Observables, §2 and Appendix, Proposition 8"
      url: "https://arxiv.org/pdf/0811.0783"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Statement

Let $H$ be a finite-dimensional complex Hilbert space, let $I,J$ be finite nonempty sets, and let $(P_i)_{i\in I}$ and $(Q_j)_{j\in J}$ be projection-valued measures: $P_i=P_i^*=P_i^2$, $Q_j=Q_j^*=Q_j^2$, distinct projections in each family are orthogonal, and $\sum_iP_i=\sum_jQ_j=I_H$. A joint POVM is a family of effects $(G_{ij})_{(i,j)\in I\times J}$ with $\sum_{i,j}G_{ij}=I_H$, $\sum_jG_{ij}=P_i$, and $\sum_iG_{ij}=Q_j$. Such a joint POVM exists exactly when $P_iQ_j=Q_jP_i$ for every $i,j$. When it exists it is unique and equals $G_{ij}=P_iQ_j$.

## Statement references

[[lem-nrqm-composites-finite-effects-and-instruments]]

## Facts & Assumptions

**Given:** The finite-dimensional Hilbert space, finite projection-valued measures, and joint POVM defined in the Statement.

[A1] The families $(P_i)_{i\in I}$ and $(Q_j)_{j\in J}$ each consist of pairwise orthogonal projections summing to $I_H$.

[F1] [[lem-nrqm-composites-finite-effects-and-instruments]]: a finite POVM is a family of effects $0\le F_a\le I$ summing to $I$.

[F2] [[lem-qsm-matrix-state-calculus]]: a finite positive semidefinite matrix has a positive square root defined by its spectral resolution.

## Proof


1.1 Suppose all $P_i$ commute with all $Q_j$. Then $G_{ij}=P_iQ_j$ is self-adjoint, since $(P_iQ_j)^*=Q_jP_i=P_iQ_j$, and is idempotent, since $(P_iQ_j)^2=P_i^2Q_j^2=P_iQ_j$. For any $x$, $\langle G_{ij}x,x\rangle=\langle G_{ij}x,G_{ij}x\rangle\ge0$, so each is positive; the sum identity makes each bounded above by $I_H$. Finite summation gives $\sum_{i,j}G_{ij}=(\sum_iP_i)(\sum_jQ_j)=I_H$, and the two marginal sums are $P_i$ and $Q_j$. So this family is a joint POVM. [A1, algebra]

1.2 Conversely, suppose a joint POVM $(G_{ij})$ exists. For each pair, $0\le G_{ij}\le P_i$ because $P_i-G_{ij}=\sum_{k\ne j}G_{ik}\ge0$, and similarly $0\le G_{ij}\le Q_j$. If $x\in\ker P_i$, then $0\le\langle G_{ij}x,x\rangle\le\langle P_ix,x\rangle=0$. By [F2], $\langle G_{ij}x,x\rangle=\|G_{ij}^{1/2}x\|^2$, hence $G_{ij}x=0$ and $G_{ij}(I-P_i)=0$. Taking adjoints gives $(I-P_i)G_{ij}=0$, so $G_{ij}=P_iG_{ij}P_i$. The same argument yields $G_{ij}=Q_jG_{ij}Q_j$. [given, A1, F1, F2, algebra]

2.1 Using $P_i=\sum_kG_{ik}$ and $Q_j=\sum_\ell G_{\ell j}$, we obtain $P_iQ_j=\sum_kG_{ik}Q_j$. The support relation $G_{ik}=Q_kG_{ik}Q_k$ from step 1.2 makes every term with $k\ne j$ zero, and the $k=j$ term is $G_{ij}$. Therefore $P_iQ_j=G_{ij}$. Since $G_{ij}$ is self-adjoint, taking adjoints gives $Q_jP_i=G_{ij}=P_iQ_j$. This proves commutation and uniqueness. [A1, step 1.2, algebra] ∎

## Remarks

The sharp projection hypothesis is essential. General POVMs can be jointly measurable even when their effects do not commute; no commutation criterion for arbitrary POVMs is asserted here.

---
id: thm-qa-34-channel-hybrid-bound
kind: theorem
title: Hybrid bound for a composed channel circuit
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-34-end-to-end-error-contract
  - thm-qc-channel-composition-hybrid-bound
  - thm-qc-diamond-norm-ancilla-dimension-bound
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-qc-channels-compose-and-tensor
  - thm-qc-trace-norm-duality-and-norm-properties
  - def-qc-density-operator
  - def-qc-trace-norm
  - def-trace-of-an-endomorphism
  - thm-non-negative-operator-characterisations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Let $L\ge1$, let $H_0,\ldots,H_L$ be nonzero finite-dimensional complex Hilbert spaces, and let $\Phi_j,\widetilde\Phi_j:\mathcal L(H_{j-1})\to\mathcal L(H_j)$ be channels for $j=1,\ldots,L$. Then
$$d_\diamond(\widetilde\Phi_L\cdots\widetilde\Phi_1,\Phi_L\cdots\Phi_1)\le\sum_{j=1}^L d_\diamond(\widetilde\Phi_j,\Phi_j),$$
where $d_\diamond$ is the normalized distance in [[def-qa-34-end-to-end-error-contract]]. For any finite reference space $R$, input density operator $\rho$ on $H_0\otimes R$, and finite final POVM on $H_L\otimes R$, the total variation distance between the two final outcome laws is at most the same sum. The claim is uniform over the reference dimension; no product-input assumption is made.

## Facts & Assumptions

**Given:** The finite channel sequence and the finite input/reference/measurement specified in the Statement.

[F1] [[def-qa-34-end-to-end-error-contract]]: $d_\diamond(\Psi,\Phi)=\tfrac12\|\Psi-\Phi\|_\diamond$, where the diamond norm takes the supremum over every finite reference space.

[F2] [[thm-qc-channel-composition-hybrid-bound]]: for two matching pairs of finite-dimensional channels, replacing both stages changes the raw diamond norm by at most the sum of the two local raw diamond errors.

[F3] [[thm-qc-channels-compose-and-tensor]]: the composition of finite-dimensional channels is a channel.

[F4] [[thm-qc-measurement-variation-at-most-trace-distance]]: the output total variation of a finite POVM is at most the trace distance between its input density operators.

[F5] [[thm-qc-trace-norm-duality-and-norm-properties]]: the trace norm satisfies the triangle inequality.

[F6] [[def-qc-density-operator]]: a density operator is positive semidefinite and has trace one.

[F7] [[def-qc-trace-norm]]: the trace norm is the sum of singular values.

[F8] [[thm-non-negative-operator-characterisations]]: positive semidefinite operators have orthonormal eigenbases with nonnegative eigenvalues; those eigenvalues are their singular values.

[F9] [[def-trace-of-an-endomorphism]]: the trace is the sum of diagonal entries in any orthonormal basis.

## Proof



1.1 For any two maps $A,B$ with matching domains, the triangle inequality for the induced trace norm holds at each finite reference space by [F5]. Taking the supremum over reference spaces in [F1] gives $\|A+B\|_\diamond\le\|A\|_\diamond+\|B\|_\diamond$. [F1, F5, algebra]

1.2 For $j=1,\ldots,L$, let $P_j=\Phi_{j-1}\cdots\Phi_1$ and $Q_j=\widetilde\Phi_L\cdots\widetilde\Phi_{j+1}$, using identity channels when a product is empty. By [F3], both are channels. Apply [F2] first to the identical pair $P_j,P_j$ followed by $\widetilde\Phi_j,\Phi_j$, and then to the pair $\widetilde\Phi_j\circ P_j,\Phi_j\circ P_j$ followed by the identical pair $Q_j,Q_j$. After dividing by $2$, the two applications give $d_\diamond(Q_j\widetilde\Phi_jP_j,Q_j\Phi_jP_j)\le d_\diamond(\widetilde\Phi_j,\Phi_j).$ The finite telescoping identity $\widetilde\Phi_L\cdots\widetilde\Phi_1-\Phi_L\cdots\Phi_1=\sum_{j=1}^L(Q_j\widetilde\Phi_jP_j-Q_j\Phi_jP_j)$ follows by changing stages one at a time. [given, F1, F2, F3, algebra]

2.1 Apply the diamond-norm triangle inequality from step 1.1 to the finite sum in step 1.2. Each summand has normalized distance at most its local value, so the final normalized diamond distance is at most $\sum_jd_\diamond(\widetilde\Phi_j,\Phi_j)$. [step 1.1, step 1.2, algebra]

3.1 Extend each channel by $\operatorname{id}_R$. By the supremum in [F1], applying the two final channels to the density operator $\rho$ gives output density operators $\widetilde\rho_L,\rho_L$ with $D(\widetilde\rho_L,\rho_L)\le d_\diamond(\widetilde\Phi_L\cdots\widetilde\Phi_1,\Phi_L\cdots\Phi_1)$, because [F6]–[F9] give $\|\rho\|_1=1$. [given, F1, F6, F7, F8, F9, step 2.1, algebra]

4.1 Apply [F4] to $\widetilde\rho_L,\rho_L$ and the declared final POVM. Its outcome-law total variation is at most $D(\widetilde\rho_L,\rho_L)$, hence at most the sum from step 2.1. [step 2.1, step 3.1, F4, algebra] ∎

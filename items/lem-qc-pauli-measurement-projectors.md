---
id: lem-qc-pauli-measurement-projectors
kind: lemma
title: Pauli measurement projectors and total probability
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - thm-trace-of-ab-equals-trace-of-ba
  - thm-non-negative-operator-characterisations
justified_by: []
dependency_level: 9
proof_strategy: direct
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let
$\rho$ be a density operator on $H$, and let $M$ be a Hermitian Pauli
observable on $H$ with $M^2=I_H$. For $b\in\{0,1\}$ set

$$P_b:=\frac{I_H+(-1)^bM}{2},\qquad p_b:=\operatorname{Tr}(\rho P_b).$$

Then $P_0,P_1$ are complementary orthogonal projections and
$p_0,p_1\ge0$, with $p_0+p_1=1$.

## Facts & Assumptions

**Given:** A Hermitian Pauli observable $M$ with $M^2=I$ and a density operator
$\rho$ on the same finite-dimensional register.

[F1] The setup defines $P_b=(I_H+(-1)^bM)/2$ and
$p_b=\operatorname{Tr}(\rho P_b)$.

[A1] [[def-qc-density-operator]]: $\rho$ is positive semidefinite and
$\operatorname{Tr}(\rho)=1$.

[F2] [[def-matrix-product-and-identity-matrix]]: matrix products have entries
$(AB)_{ij}=\sum_k a_{ik}b_{kj}$, and $I$ has entries $\delta_{ij}$.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible finite matrices,
$\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$, including square matrices of
the same size.

[F4] [[thm-non-negative-operator-characterisations]]: a nonnegative
endomorphism has an orthonormal eigenbasis with nonnegative real eigenvalues.

[F5] [[def-trace-of-an-endomorphism]]: trace is basis-independent and equals
the matrix trace in any ordered basis.

## Proof

**Given:** The data in the Statement.

1.1 For $s=(-1)^b$, $P_b^\dagger=P_b$ because $s$ is real and $M^\dagger=M$. In any ordered basis write $M=(m_{ij})$. By [F2], $(P_b^2)_{ij}=\frac14\sum_k(\delta_{ik}+sm_{ik})(\delta_{kj}+sm_{kj})=\frac14(\delta_{ij}+2sm_{ij}+(M^2)_{ij})$. Since $M^2=I_H$, this equals $(P_b)_{ij}$. Thus both $P_b$ are self-adjoint idempotents. [given, F1, F2, algebra]

2.1 Direct multiplication gives $P_0+P_1=I$ and $P_0P_1=(I-M^2)/4=0=P_1P_0$. Hence their ranges are orthogonal and sum to the full register. [F1, step 1.1, algebra]

2.2 Put $Q_b=P_b\rho P_b$. Self-adjointness of $P_b$ and $\rho$ gives $\langle Q_bu,v\rangle=\langle\rho P_bu,P_bv\rangle=\langle u,Q_bv\rangle$, so $Q_b$ is self-adjoint. For every vector $v$, $\langle Q_bv,v\rangle=\langle \rho P_bv,P_bv\rangle\ge0$, using the root-linear-first inner-product convention. Therefore $Q_b$ is positive semidefinite. [A1, step 1.1, algebra]

3.1 By cyclicity [F3] and $P_b^2=P_b$, $p_b=\operatorname{Tr}(\rho P_b)=\operatorname{Tr}(P_b\rho P_b) =\operatorname{Tr}(Q_b)$. In the orthonormal eigenbasis supplied by [F4], the diagonal entries of $Q_b$ are nonnegative; [F3] and [F5] therefore give $p_b=\operatorname{Tr}(Q_b)\ge0$. Linearity of the finite diagonal sum and $P_0+P_1=I$ give $p_0+p_1=\operatorname{Tr}(\rho)=1$. [A1, F1, F3, F4, F5, step 2.1, step 2.2] ∎

## Sources

The two projectors and the two-outcome probabilities are treated in de Wolf,
§20.2, PDF pp. 186–188, and Watrous, Lesson 14 §14.1, printed pp. 405–407
(PDF pp. 411–413). The
finite-dimensional trace manipulations above are proved locally from the cited
matrix trace suppliers.

---
id: ex-self-consistent-projector-two-cycle-with-gap
kind: example
title: A finite-basis occupied projector map can two-cycle despite a uniform gap
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, def-finite-basis-projector-energy-model, alg-undamped-scf-with-gap-and-residual-status]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.2 and Example 9
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: pending
---

## Example

Take $n=2$, $r=1$, overlap $S=I_2$, Cholesky factor $L=I_2$, $h=0$, and
$E_{xc}=0$ in [[def-finite-basis-projector-energy-model]]. Define
$G:\mathbb H_2\to\mathbb H_2$ by $G(X)=\operatorname{diag}(X_{11},X_{22})$.
The associated response map is $F(P)=G(P)$. Let
$$P_0=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad P_1=\begin{pmatrix}0&0\\0&1\end{pmatrix}.$$
For the undamped occupied-projector iteration, $P_0$ and $P_1$ form a strict
two-cycle even though the occupied/unoccupied eigenvalue gap equals $1$ at both
iterates.

## Facts & Assumptions

**Given:** The finite-basis model data above, the rank-one projectors $P_0,P_1$, and $\Phi(P)$ equal to the projector onto the lowest eigenvalue of $F(P)$ whenever the gap is positive.

[F1] The finite-basis model permits Hermitian $h$, real-linear self-adjoint $G$, and real $C^2$ $E_{xc}$, with $F(P)=h+G(P)+\nabla E_{xc}(P)$ ([[def-finite-basis-projector-energy-model]]).

[F2] The occupied projector is selected from the $r$ lowest eigenvalues when a strict gap is present ([[def-self-consistent-projector-response-map]]).

[F3] The undamped update is $P_{k+1}=\Phi(P_k)$ and checks the gap before updating ([[alg-undamped-scf-with-gap-and-residual-status]]).

[F4] A strict gap makes the selected occupied projector unique ([[lem-gapped-projector-map-well-defined]]).

## Verification

1.1 For Hermitian $X,Y$, the diagonal entries are real and $\langle G(X),Y\rangle_F=X_{11}Y_{11}+X_{22}Y_{22}=\langle X,G(Y)\rangle_F.$ Thus $G$ is real-linear, Hermitian-valued, and self-adjoint for the Frobenius inner product, so the stated data satisfy [F1]. Each $P_i$ is Hermitian, idempotent, and has trace $1$, hence lies in $\mathcal P_1$. [given, F1, algebra]

1.2 Direct substitution gives $F(P_0)=\operatorname{diag}(1,0)$ and $F(P_1)=\operatorname{diag}(0,1)$. Each matrix has eigenvalues $0<1$, so the strict occupied gap is $1$. By [F2], the lowest eigenspace of $F(P_0)$ is $\operatorname{span}\{(0,1)^T\}$ and that of $F(P_1)$ is $\operatorname{span}\{(1,0)^T\}$; [F4] guarantees these give the unique projectors $\Phi(P_0)=P_1$ and $\Phi(P_1)=P_0$. [given, F2, F4, algebra]

2.1 By [F3], starting at $P_0$ yields $P_0,P_1,P_0,P_1,\ldots$. Since $\|P_0-P_1\|_F=\sqrt2>0$, this sequence does not converge. Thus a positive uniform gap at the iterates alone does not imply convergence. [step 1.2, F3, algebra] ∎

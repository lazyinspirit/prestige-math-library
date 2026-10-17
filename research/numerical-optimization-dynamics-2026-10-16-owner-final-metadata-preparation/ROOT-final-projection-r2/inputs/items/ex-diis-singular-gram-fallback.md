---
id: ex-diis-singular-gram-fallback
kind: example
title: A reported singular DIIS Gram system triggers the baseline fallback
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-finite-basis-projector-energy-model, lem-capped-diis-coefficient-minimizer-exists, alg-capped-diis-projector-proposal]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Thorsten Rohwedder, An analysis for some methods and algorithms of quantum chemistry, Chapter 4 §4.1
      url: https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download
    - title: Homer F. Walker and Peng Ni, Anderson Acceleration for Fixed-Point Iterations, §1
      url: https://users.wpi.edu/~walker/Papers/Walker-Ni%2CSINUM%2CV49%2C1715-1735.pdf
verification:
  precheck: pending
---

## Example

Let $P_0=\operatorname{diag}(1,0)$, $P_1=\operatorname{diag}(0,1)$, and
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. In the finite-basis model choose
$S=L=I_2$, $h=0$, $E_{xc}=0$, and the real-linear map
$$G(P)=\bigl(\langle P,P_0\rangle_F-\langle P,P_1\rangle_F\bigr)X+\langle P,X\rangle_F(P_0-P_1).$$
At $P_0$ and $P_1$ the commutator residuals are equal and nonzero, making the
two-vector Gram matrix singular. A solver that reports this singular system
uses the specified baseline fallback, even though the exact capped minimizer
exists.

## Facts & Assumptions
**Given:** The finite-basis model and DIIS proposal algorithm, with memory cap $m=2$, history $P_0,P_1$, coefficient cap $C=2$, and a configured bordered-Gram solver.

[F1] A finite-basis model accepts a real-linear self-adjoint $G$ and defines $F(P)=h+G(P)+\nabla E_{xc}(P)$ ([[def-finite-basis-projector-energy-model]]).

[F2] The capped least-squares problem has a unique minimum-norm minimizer even when its Gram matrix is singular ([[lem-capped-diis-coefficient-minimizer-exists]]).

[F3] A singular/uncertified configured least-squares solve requests the baseline SCF update ([[alg-capped-diis-projector-proposal]]).

## Verification


1.1 The matrices $P_0,P_1,X$ are mutually Frobenius-orthogonal and $\|P_0\|_F^2=\|P_1\|_F^2=1$. The displayed $G$ is a sum of symmetric rank-one real-linear maps, so $\langle G(A),B\rangle_F=\langle A,G(B)\rangle_F$ for all Hermitian $A,B$; it is Hermitian-valued. Thus the model data satisfy [F1]. [given, F1, algebra]

2.1 Substitution gives $G(P_0)=X$ and $G(P_1)=-X$. The matrices $X$ and $-X$ have eigenvalues $-1,1$, so both iterates have gap $2$. Direct multiplication gives $[G(P_0),P_0]=\begin{pmatrix}0&-1\\1&0\end{pmatrix}=[G(P_1),P_1]\ne0.$ [step 1.1, algebra]

3.1 Writing the common residual as $J$, the Gram matrix is $B_{ij}=\langle J,J\rangle_F=2,\qquad B=\begin{pmatrix}2&2\\2&2\end{pmatrix},$ which is singular. The equality-constrained bordered system has matrix $\begin{pmatrix}2&2&1\\2&2&1\\1&1&0\end{pmatrix}$, whose first two rows coincide, so a solver that reports singularity takes the prescribed fallback. With $C=2$, $c=(1/2,1/2)$ is feasible and minimizes the objective; the objective is constant on $c_1+c_2=1$, so [F2] selects this unique minimum-norm minimizer. If a rank-revealing solver returns it instead of reporting singularity, then $F_{mix}=\tfrac12X-\tfrac12X=0$ has no strict gap, and the proposal algorithm again falls back by its candidate-gap branch. Thus either outcome of this configured solve uses the baseline. [step 2.1, F2, F3, algebra] ∎

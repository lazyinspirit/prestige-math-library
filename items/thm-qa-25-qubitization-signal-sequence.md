---
id: thm-qa-25-qubitization-signal-sequence
kind: theorem
title: Qubitization lifts scalar QSP
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-25-qubitization-access-model
  - lem-qa-25-hermitian-block-encoding-signal-subspaces
  - def-qa-23-qsp-signal-sequence
  - thm-qa-23-qsp-phase-factorization
  - thm-qa-24-qsvt-singular-space-action
  - thm-qc-reflection-unitary-involution
  - lem-qa-23-hermitian-signal-convention-conversion
proof_strategy: direct
axiom_use: "None; all signal spaces are finite-dimensional and the argument is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Guang Hao Low and Isaac L. Chuang, Hamiltonian Simulation by Qubitization"
      url: "https://arxiv.org/pdf/1610.06546"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Statement

Let $(U,J,\alpha)$ be an exact Hermitian block encoding of $K$, with $K=K^*$ and $\|K\|_{\rm op}\le\alpha$. The qubiterate $W_{\rm q}$ of [[def-qa-25-qubitization-access-model]] has, on each eigenvalue $x=\lambda/\alpha$, a two-dimensional invariant signal space on which it is a rotation with eigenvalues $e^{\pm i\arccos x}$; at $x=\pm1$ the space collapses to the corresponding eigenline.

For a phase list $\Phi=(\phi_0,\ldots,\phi_d)$, alternating $U,U^*$ calls and projector phases $e^{i\phi(2\Pi-I)}$ acts on each paired signal space as the scalar Hermitian-reflection QSP sequence $U_\Phi(x)$ of [[def-qa-23-qsp-signal-sequence]]. If $P_\Phi$ is its upper-left polynomial, the clean compressed block is $P_\Phi(K/\alpha)$ on all eigenspaces simultaneously, with the endpoint and null directions handled by the same polynomial evaluation. Admissible phases are supplied by [[thm-qa-23-qsp-phase-factorization]]; translating to the SU(2) convention carries the scalar $i^d$, which remains a relative phase under control.

## Facts & Assumptions

**Given:** An exact Hermitian block encoding, its declared controlled/inverse access, and a scalar QSP phase list.

[F1] [[def-qa-25-qubitization-access-model]]: $J^*UJ=K/\alpha$, and $W_{\rm q}=R_{J'}S\widetilde U$ uses $\widetilde U=|0\rangle\langle0|\otimes U+|1\rangle\langle1|\otimes U^*$, $S=X\otimes I$, and $R_{J'}=2J'J'^*-I$.

[F2] [[lem-qa-25-hermitian-block-encoding-signal-subspaces]]: on eigenvalue $x$, the paired $U,U^*$ signal spaces have matrix $\begin{pmatrix}x&\sqrt{1-x^2}\\\sqrt{1-x^2}&-x\end{pmatrix}$, with endpoint and residual cases specified.

[F3] [[def-qa-23-qsp-signal-sequence]]: $U_\Phi(x)=Z(\phi_0)\prod_{j=1}^d(W_R(x)Z(\phi_j))$, where $W_R(x)=\begin{pmatrix}x&\sqrt{1-x^2}\\\sqrt{1-x^2}&-x\end{pmatrix}$.

[F4] [[thm-qa-24-qsvt-singular-space-action]]: the alternating $U,U^*$ sequence with the left/right projector phases acts on each signal plane by its scalar QSP matrix; its compressed block is the corresponding singular-space polynomial, including null and endpoint spaces.

[F5] [[thm-qa-23-qsp-phase-factorization]]: every admissible polynomial pair has an exact real phase list for the fixed Hermitian-reflection signal convention.

[F6] [[thm-qc-reflection-unitary-involution]]: $R_\Pi=2\Pi-I$ is $+I$ on $\operatorname{ran}\Pi$ and $-I$ on $\ker\Pi$.

[F7] [[lem-qa-23-hermitian-signal-convention-conversion]]: the SU(2) phase list conversion contributes the explicit scalar $i^d$; under a control this is a branch-relative phase.

## Proof

**Given:** As in Facts & Assumptions.

1.1 In control-first order, $F:=S\widetilde U=\begin{pmatrix}0&U^*\\U&0\end{pmatrix},$ so $F^*=F$ and $F^2=I$. Also $J'^*FJ'=\tfrac12(J^*U^*J+J^*UJ)=K/\alpha$ because $J^*UJ=K/\alpha$ is self-adjoint. For a unit eigenvector $K\psi_\lambda=\lambda\psi_\lambda$, put $g_\lambda=J'\psi_\lambda$, $x=\lambda/\alpha$, and $s=\sqrt{1-x^2}$. The compression identity gives $Fg_\lambda=xg_\lambda+s h_\lambda$ for a unit $h_\lambda\perp\operatorname{ran}J'$ when $|x|<1$. Applying $F^2=I$ then gives $Fh_\lambda=sg_\lambda-xh_\lambda$. The reflection $R_{J'}$ has matrix $\operatorname{diag}(1,-1)$ in this basis, so $W_{\rm q}=R_{J'}F$ has matrix $\begin{pmatrix}x&s\\-s&x\end{pmatrix}$. Its characteristic polynomial is $z^2-2xz+1$, whose roots are $x\pm i\sqrt{1-x^2}=e^{\pm i\arccos x}$. If $|x|=1$, the orthogonal component has norm zero and the clean eigenline has eigenvalue $x$. [F1, F6, algebra]

1.2 On a paired signal plane from [F2], $2\Pi-I$ is diagonal with entries $+1,-1$, so $e^{i\phi(2\Pi-I)}$ is $Z(\phi)$. The signal calls switch between the input and output bases of [F2]; therefore their chronological product, written in matrix order, is $Z(\phi_0)W_R(x)Z(\phi_1)\cdots W_R(x)Z(\phi_d)=U_\Phi(x)$ by [F3]. The determinant and polynomial-entry conventions are those proved by the scalar QSP supplier in [F5]. [F2, F3, F5, F6, algebra]

2.1 Every clean system vector is a finite linear combination of eigenvectors of $K$. Step 1.2 acts on each eigenvector by the same scalar polynomial $P_\Phi(\lambda/\alpha)$, so linearity gives the compressed operator $P_\Phi(K/\alpha)$. Repeated eigenvalues cause no ambiguity because the same scalar is applied to every vector in that eigenspace; zero signal and endpoint spaces have the actions specified in [F2] and [F4]. [F2, F4, F5, step 1.2, algebra]

3.1 The reflected convention in step 1.2 is the one used by [F3], [F4], and [F5]. If the implementation instead uses the SU(2) signal, [F7] supplies the scalar $i^d$; applying it to only the active control branch changes a relative phase, so it must be implemented as stated rather than discarded as an uncontrolled global scalar. [F3, F4, F5, F7, step 1.2, algebra] ∎

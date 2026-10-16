---
id: lem-qa-23-hermitian-signal-convention-conversion
kind: lemma
title: Hermitian-reflection and SU(2) QSP convention conversion
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-23-qsp-signal-sequence
  - thm-eulers-formula
  - thm-quarter-turn-values-and-shift-formulas
  - thm-complex-exponential-addition-and-real-extension
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-qc-controlled-unitary-access
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 3 and Eq. (16), PDF pp. 7–12; the printed reflection conversion in Eq. (16) is not used here because at x=1 its sides are I and i diag(1,-1), respectively. The conversion used here is derived in Proof steps 1.1–3.1."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, Lemma 29.1 and Eq. (29.21), PDF pp. 144–146; the printed reflection conversion in Eq. (29.21) is not used here because at x=1 its sides are I and i diag(1,-1), respectively. The conversion used here is derived in Proof steps 1.1–3.1."
---

## Statement

Put $s=\sqrt{1-x^2}$, $W_R=\begin{pmatrix}x&s\\s&-x\end{pmatrix}$, $W_S=\begin{pmatrix}x&is\\is&x\end{pmatrix}$, and $C=Z(\pi/4)$. Then
$$CW_RC=iW_S^\dagger,\qquad W_S^\dagger=Z(\pi/2)W_SZ(-\pi/2).$$
For $d\ge1$, define $U_S(\Psi)=Z(\psi_0)\prod_{j=1}^d(W_SZ(\psi_j))$. If $\Psi$ is the SU(2)-convention phase list with $\psi_0=\phi_0+\pi/4$, $\psi_j=\phi_j-\pi/2$ for $1\le j<d$, and $\psi_d=\phi_d-3\pi/4$, then
$$U_R(\Phi)=i^dU_S(\Psi).$$
The affine phase-list map is invertible. The scalar $i^d$ is part of the identity: in a control-first block $\operatorname{diag}(I,U)$ it acts on the active control branch and cannot be discarded as a global phase.

## Facts & Assumptions

**Given:** $x\in[-1,1]$, real phases, and the definitions of $W_R$ and $Z$ in [[def-qa-23-qsp-signal-sequence]].

[F1] [[def-qa-23-qsp-signal-sequence]] fixes $W_R$, $Z(\phi)$, the ordered product, and the control-relevant phase convention.

[F2] [[thm-eulers-formula]] gives $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$.

[F3] [[thm-complex-exponential-addition-and-real-extension]] gives $e^{z+w}=e^ze^w$ and hence $Z(a)Z(b)=Z(a+b)$.

[F4] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: conjugation fixes real numbers and sends $i$ to $-i$.

[F5] [[def-qc-controlled-unitary-access]]: control-first access to a two-dimensional target has block matrix $\operatorname{diag}(I_2,U)$ when that controlled call is explicitly supplied.

[F6] [[thm-quarter-turn-values-and-shift-formulas]] gives $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$; together with [F2], these give $e^{i\pi/2}=i$ and $e^{-i\pi/2}=-i$.

## Proof

1.1 By [F2, F6], $e^{i\pi/2}=i$, and [F3] gives $e^{i\pi/4}e^{-i\pi/4}=1$. Multiplying the three matrices entry by entry therefore gives $CW_RC=\begin{pmatrix}ix&s\\s&ix\end{pmatrix}=iW_S^\dagger$, since [F4] gives $W_S^\dagger=\begin{pmatrix}x&-is\\-is&x\end{pmatrix}$. [F1, F2, F3, F4, F6, algebra]

1.2 By [F2, F6], the diagonal entries of $Z(\pi/2)$ and $Z(-\pi/2)$ are $i,-i$ and $-i,i$, respectively. Multiplication gives $Z(\pi/2)W_SZ(-\pi/2)=\begin{pmatrix}x&-is\\-is&x\end{pmatrix}=W_S^\dagger$. [F1, F2, F3, F4, F6, algebra]

2.1 Rearranging step 1.1 yields $W_R=iZ(-\pi/4)W_S^\dagger Z(-\pi/4)$. Substitution in each signal factor and combination of adjacent diagonal phases by [F3] gives $U_R(\Phi)=i^dZ(\phi_0-\pi/4)\prod_{j=1}^{d-1}\bigl(W_S^\dagger Z(\phi_j-\pi/2)\bigr)W_S^\dagger Z(\phi_d-\pi/4)$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Replacing each $W_S^\dagger$ by the right side of step 1.2 adds $\pi/2$ to the initial phase, leaves each intermediate phase unchanged after its two adjacent shifts cancel, and subtracts $\pi/2$ from the final phase. The resulting SU(2) list is exactly the stated $\Psi$, and the scalar remains $i^d$. Each phase shift is affine with coefficient $1$, so the map and its inverse are bijections on $\mathbb R^{d+1}$. [step 1.2, step 2.1, algebra]

4.1 When the operation model explicitly supplies the controlled call on a control-first qubit and two-dimensional target, [F5] gives $C(U_S)=\operatorname{diag}(I_2,U_S)$. Substituting $i^dU_S$ on the active branch gives $\operatorname{diag}(I_2,i^dU_S)$, which differs from $i^d\operatorname{diag}(I_2,U_S)$ unless $i^d=1$, because the inactive block remains $I_2$. Thus $i^d$ is a relative phase under control and must be retained. [F1, F5, step 3.1, algebra] ∎




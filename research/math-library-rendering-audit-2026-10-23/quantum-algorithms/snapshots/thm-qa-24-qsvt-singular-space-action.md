---
id: thm-qa-24-qsvt-singular-space-action
kind: theorem
title: QSVT action on singular subspaces
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-24-pue-svd-data
  - alg-qa-24-qsvt
  - lem-qa-24-pue-svd-invariant-subspaces
  - def-qa-24-singular-value-transform
  - lem-qa-24-singular-transform-basis-independence
  - def-qa-23-qsp-signal-sequence
  - lem-qa-23-phase-sequence-unitarity
  - def-qc-dirac-notation-conversion
  - thm-qc-reflection-unitary-involution
  - lem-qa-23-hermitian-signal-convention-conversion
  - thm-qa-23-real-polynomial-completion
  - thm-qa-23-qsp-phase-factorization
  - thm-qa-24-projector-phase-implementation
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the proof is a finite orthogonal decomposition and matrix multiplication."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Theorem 17 and Corollary 18"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 18–20."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 144–147; PDF pp. 152–155, scalar sequence and Hermitian special case."
---

## Statement

Let $A:H_R\to H_L$ be the PUE map of [[def-qa-24-pue-svd-data]], with positive singular pairs $(\sigma_j,v_j,u_j)$, and let $\Phi=(\phi_0,\ldots,\phi_d)$ be the exact phase list in [[alg-qa-24-qsvt]]. Let $P_\Phi$ be the upper-left scalar polynomial of its QSP signal sequence. On every positive two-dimensional singular plane from [[lem-qa-24-pue-svd-invariant-subspaces]], the QSVT sequence is exactly $U_\Phi(\sigma_j)$. Consequently, if $d$ is odd,

$$\Pi_LU_\Phi\Pi_R\big|_{H_R}=\sum_{j=1}^{r}P_\Phi(\sigma_j)|u_j\rangle\langle v_j|=\bigl(P_\Phi\bigr)^{\mathrm{SV}}_{\mathrm{odd}}(A),$$

and if $d$ is even,

$$\Pi_RU_\Phi\Pi_R\big|_{H_R}=\sum_{j=1}^{r}P_\Phi(\sigma_j)|v_j\rangle\langle v_j|+P_\Phi(0)\Pi_{\ker A}=\bigl(P_\Phi\bigr)^{\mathrm{SV}}_R(A).$$

The formulas include singular values $0$ and $1$, repeated singular values, unmatched left and right kernels, and zero-dimensional singular spaces. If $p\in\mathbb R[x]$ is zero or has degree at most $d$, has parity $d\bmod2$, and satisfies $|p(x)|\le1$ on $[-1,1]$, the exact completion and phase-factorization suppliers give a phase list with $\operatorname{Re}P_\Phi=p$. The coherent $\Phi$/$-\Phi$ branch then has compressed block $p^{\mathrm{SV}}(A)$; for a supplied uniform scalar error $\eta$, its block differs from $p^{\mathrm{SV}}(A)$ by at most $\eta$.

## Facts & Assumptions

**Given:** A PUE, a finite phase list, and the definitions of the singular-value and QSP transforms.

[F1] [[def-qa-24-pue-svd-data]]: $A=\Pi_LU|_{H_R}$ is a contraction with an SVD $A=\sum_{j=1}^{r}\sigma_j|u_j\rangle\langle v_j|$.

[F2] [[lem-qa-24-pue-svd-invariant-subspaces]]: for $0<\sigma_j<1$, the basis change is $\begin{pmatrix}\sigma_j&\sqrt{1-\sigma_j^2}\\\sqrt{1-\sigma_j^2}&-\sigma_j\end{pmatrix}$; the $\sigma_j=1$ plane collapses and the zero and residual subspaces are specified separately.

[F3] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)=\begin{pmatrix}x&\sqrt{1-x^2}\\\sqrt{1-x^2}&-x\end{pmatrix}$, $Z(\phi)=\operatorname{diag}(e^{i\phi},e^{-i\phi})$, and $U_\Phi(x)=Z(\phi_0)\prod_{j=1}^{d}(W_R(x)Z(\phi_j))$.

[F4] [[lem-qa-23-phase-sequence-unitarity]]: the upper-left entry of $U_\Phi(x)$ is a polynomial $P_\Phi$ of parity $d\bmod2$ and degree at most $d$.

[F5] [[def-qa-24-singular-value-transform]]: odd transforms act between left and right singular spaces; even transforms act on a singular space and use $p(0)$ on its kernel.

[F6] [[lem-qa-24-singular-transform-basis-independence]]: these transforms are independent of the chosen singular-vector bases.

[F7] [[thm-qa-23-real-polynomial-completion]]: every real polynomial of degree at most $d$, parity $d\bmod2$, and bound $|p|\le1$ on $[-1,1]$ has an admissible complex completion with real part exactly $p$.

[F8] [[thm-qa-23-qsp-phase-factorization]]: every admissible pair has an exact real phase list for the fixed Hermitian-reflection QSP sequence.

[F9] [[thm-qc-reflection-unitary-involution]]: $R_\Pi=2\Pi-I$ is unitary, with eigenvalues $+1$ on $\operatorname{ran}\Pi$ and $-1$ on $\ker\Pi$.

[F10] [[lem-qa-23-hermitian-signal-convention-conversion]]: conversion to the SU(2) convention carries an explicit scalar $i^d$, which is retained under control.

[F11] [[thm-qa-24-projector-phase-implementation]]: its clean-ancilla toggle flips on $\operatorname{ran}\Pi$ and each toggle uses one controlled-reflection call plus a fixed ancilla gate.

## Proof

1.1 Fix $0<\sigma_j<1$. In the input basis $(v_j,w_j)$ and output basis $(u_j,\widetilde w_j)$, [F2] says that $U$ is $W_R(\sigma_j)$, and $U^*$ has the same matrix because it is real symmetric. The right-projector phase is $Z(\phi)$ on the input basis since $2\Pi_R-I$ has eigenvalues $+1,-1$ there; the left-projector phase is the same $Z(\phi)$ on the output basis. Thus the alternating sequence multiplies in the fixed order $Z(\phi_0)W_R(\sigma_j)Z(\phi_1)\cdots W_R(\sigma_j)Z(\phi_d)=U_\Phi(\sigma_j)$, whose upper-left entry is $P_\Phi(\sigma_j)$ by [F3]–[F4]. [F2, F3, F4, F9, algebra]

1.2 If $\sigma_j=1$, [F2] gives $Uv_j=u_j$ and the complementary component is zero; the surviving one-dimensional action is the first-coordinate action of $U_\Phi(1)$, namely $P_\Phi(1)$. For $\sigma_j=0$, $Uv_j$ lies in $\ker\Pi_L$ and $U^*(Uv_j)=v_j$. The alternating calls therefore swap this right-kernel vector and its left-complement image exactly as $W_R(0)=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ does. If $d$ is odd the final vector lies in $\ker\Pi_L$ and the left compression is zero, equal to $P_\Phi(0)$ because [F4] makes $P_\Phi$ odd. If $d$ is even it returns to $v_j$ with coefficient $P_\Phi(0)$, the prescribed even-kernel term in [F5]. Left-kernel inputs and the residual complement contribute nothing to the stated compression by [F2]. [F2, F4, F5, algebra]

2.1 The positive singular planes, the $\sigma=1$ lines, the right zero-kernel lines, and the residual blocks are orthogonal and exhaust the relevant projected spaces by [F2]. Summing the scalar coefficients from steps 1.1–1.2 therefore gives the displayed odd and even compressed-block formulas. [F1, F2, F5, F6, step 1.1, step 1.2, algebra]

3.1 For real $p$ under the stated degree, parity, and interval bounds, [F7] gives an admissible pair $P,Q$ with $\operatorname{Re}P=p$, and [F8] supplies its exact phase list $\Phi$. At each slot with phase $\phi_j$ about $\Pi$, use the clean-ancilla toggle $X_\Pi$ from [F11], then apply unconditional $R_z(2\phi_j)$, then a control-one-controlled $R_z(-4\phi_j)$, and then $X_\Pi$ again. In control branch $0$ the middle rotation is $R_z(2\phi_j)$; in branch $1$ it is $R_z(-2\phi_j)$. Since $X_\Pi$ places the ancilla in $|1\rangle$ on $\operatorname{ran}\Pi$ and in $|0\rangle$ on $\ker\Pi$, the induced system phases are respectively $e^{i\phi_j(2\Pi-I)}$ and $e^{-i\phi_j(2\Pi-I)}$, and the ancilla returns to $|0\rangle$. The same unconditioned signal calls therefore give full branch operators $U_\Phi$ and $U_{-\Phi}$. Because $W_R(x)$ is real and $Z(-\phi)=\overline{Z(\phi)}$, entrywise conjugation gives $U_{-\Phi}(x)=\overline{U_\Phi(x)}$, and projection of the control from $|+\rangle$ to $|+\rangle$ has block $\frac12(U_\Phi+U_{-\Phi})$. By step 2.1, its coefficient on each positive singular pair is $\frac12(P_\Phi(\sigma_j)+\overline{P_\Phi(\sigma_j)})=\operatorname{Re}P_\Phi(\sigma_j)=p(\sigma_j)$; for an even transform the same identity gives $p(0)$ on $\ker A$. Thus the compressed block is $p^{\mathrm{SV}}(A)$. If the supplied scalar approximation satisfies $\sup_{x\in[-1,1]}|\operatorname{Re}P_\Phi(x)-p(x)|\le\eta$, each singular coefficient changes by at most $\eta$, so orthonormality gives operator-norm error at most $\eta$. The proof stays in the reflected convention; [F10]'s scalar is not discarded if a circuit is translated to the SU(2) convention. [F3, F5, F6, F7, F8, F10, F11, step 2.1, algebra] ∎

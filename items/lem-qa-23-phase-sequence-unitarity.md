---
id: lem-qa-23-phase-sequence-unitarity
kind: lemma
title: Unitarity, determinant, and polynomial form of a QSP sequence
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-23-qsp-signal-sequence
  - thm-complex-exponential-addition-and-real-extension
  - thm-eulers-formula
  - def-complex-conjugate-real-imaginary-part-and-modulus
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

For every $x\in[-1,1]$ and phase list $\Phi$ of length $d+1$, $U_\Phi(x)$ is unitary with determinant $(-1)^d$. There are polynomials $P,Q\in\mathbb C[x]$ such that
$$U_\Phi(x)=\begin{pmatrix}P(x)&s(x)Q(x)\\(-1)^{d+1}s(x)Q^*(x)&(-1)^dP^*(x)\end{pmatrix},$$
where $P=0$ or $\deg P\le d$ with parity $d$, $Q=0$ or $\deg Q\le d-1$ with parity $d-1$, and $PP^*+(1-x^2)QQ^*=1$ as a formal polynomial identity.

## Facts & Assumptions

**Given:** $x\in[-1,1]$, $s=\sqrt{1-x^2}\ge0$, and real phases $\phi_0,\ldots,\phi_d$.

[F1] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)=\begin{pmatrix}x&s\\s&-x\end{pmatrix}$, $Z(\phi)=\operatorname{diag}(e^{i\phi},e^{-i\phi})$, and $U_\Phi=Z(\phi_0)\prod_{j=1}^d(W_RZ(\phi_j))$.

[F2] [[thm-eulers-formula]]: $e^{i\phi}=\cos\phi+i\sin\phi$ for real $\phi$.

[F3] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$ for complex $z,w$.

[F4] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: conjugation fixes real numbers, sends $i$ to $-i$, and $z\overline z=|z|^2$.

[F5] For the displayed $2\times2$ complex matrices, $M^\dagger:=\overline M^{\mathsf T}$; “unitary” means $M^\dagger M=MM^\dagger=I$.

## Proof

1.1 Since $s^2=1-x^2$, direct multiplication gives $W_R^\dagger=W_R$, $W_R^2=I$, and $\det W_R=-1$. Thus $W_R^\dagger W_R=W_RW_R^\dagger=I$, so $W_R$ is unitary in the matrix convention [F5]. [F1, F5, algebra]

1.2 We prove the polynomial form by induction on $d$. For $d=0$, $U_\Phi=Z(\phi_0)$, so $P=e^{i\phi_0}$ and $Q=0$ satisfy the degree and parity bounds and $PP^*=1$. [F1, F2, F3, base]

2.1 By [F2] and [F4], $\overline{e^{i\phi}}=\cos\phi-i\sin\phi=e^{-i\phi}$; by [F3], $e^{i\phi}e^{-i\phi}=1$. Thus $Z(\phi)^\dagger Z(\phi)=Z(\phi)Z(\phi)^\dagger=I$ and $\det Z(\phi)=1$. Each factor $W_RZ(\phi)$ is unitary with determinant $-1$, so the $d$ signal factors give $U_\Phi^\dagger U_\Phi=I$ and $\det U_\Phi=(-1)^d$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Write a $2\times2$ unitary matrix as $M=\begin{pmatrix}a&b\\c&e\end{pmatrix}$ with determinant $\epsilon\in\{1,-1\}$. The cofactor formula gives $M^{-1}=\epsilon\begin{pmatrix}e&-b\\-c&a\end{pmatrix}$; by [F5], $M^{-1}=M^\dagger=\begin{pmatrix}\overline a&\overline c\\\overline b&\overline e\end{pmatrix}$. Equating entries yields $e=\epsilon\overline a$ and $c=-\epsilon\overline b$. Applying this with $\epsilon=(-1)^d$ shows the displayed lower row is forced by the first row. [F5, step 2.1, algebra]

4.1 Suppose the representation holds at degree $d$. Multiplying on the right by $W_R(x)Z(\phi_{d+1})$ gives $P_{d+1}=e^{i\phi_{d+1}}(xP_d+(1-x^2)Q_d)$ and $Q_{d+1}=e^{-i\phi_{d+1}}(P_d-xQ_d)$. These are polynomials with degree bounds $d+1$ and $d$ and parities $d+1$ and $d$. The lower row then has the required form by step 3.1. [F1, step 3.1, step 1.2, IH, induction, algebra]

5.1 Put $s^2=1-x^2$. The scalar phase in each recurrence factor cancels with its coefficient conjugate. Expanding the first norm gives $P_{d+1}P_{d+1}^*=x^2P_dP_d^*+xs^2(P_dQ_d^*+Q_dP_d^*)+s^4Q_dQ_d^*.$ Expanding the second gives $s^2Q_{d+1}Q_{d+1}^*=s^2P_dP_d^*-xs^2(P_dQ_d^*+Q_dP_d^*)+x^2s^2Q_dQ_d^*.$ The mixed terms cancel and the unmixed terms sum to $(x^2+s^2)P_dP_d^*+s^2(x^2+s^2)Q_dQ_d^*=P_dP_d^*+s^2Q_dQ_d^*$. Thus the identity is preserved as a formal polynomial identity, and induction from step 1.2 proves it for every $d$. [step 1.2, step 4.1, induction, discharge-induction: step 4.1, algebra] ∎





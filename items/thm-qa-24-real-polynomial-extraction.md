---
id: thm-qa-24-real-polynomial-extraction
kind: theorem
title: Real bounded polynomial extraction in QSVT
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qa-24-qsvt
  - thm-qa-24-qsvt-singular-space-action
  - thm-qa-23-real-polynomial-completion
  - thm-qa-23-qsp-phase-factorization
  - def-qa-23-qsp-signal-sequence
  - def-qa-23-qsp-admissible-polynomial-pair
  - def-qc-controlled-unitary-access
  - def-qc-circuit-denotational-semantics
  - thm-qa-24-projector-phase-implementation
  - thm-qa-24-qsvt-query-count
  - thm-singular-value-decomposition
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the argument uses exact finite-dimensional polynomial identities and a controlled finite circuit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Corollary 18"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 18–20."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 144–147; PDF pp. 152–155, Hermitian-reflection and controlled-phase cases."
---

## Statement

Let $A:H_R\to H_L$ be a finite PUE map and let $p\in\mathbb R[x]$ have degree at most $d$, parity $d\bmod 2$, and $|p(x)|\le1$ on $[-1,1]$. The exact real-polynomial completion and phase-factorization results give a phase list $\Phi$ whose scalar QSP polynomial satisfies $\operatorname{Re}P_\Phi=p$. Run the degree-$d$ QSVT sequence with a control qubit prepared in $|+\rangle$, using the phase lists $\Phi$ and $-\Phi$ in its two branches, and project the control back onto $|+\rangle$. The resulting compressed block is exactly $p^{\mathrm{SV}}_{\mathrm{odd}}(A)$ for odd $d$, and exactly $p^{\mathrm{SV}}_R(A)$ for even $d$, including the even value $p(0)$ on $\ker A$. The result includes $d=0$, zero and unit singular values, repeated values, and unmatched kernels.

The two branches share the same $d$ unconditioned alternating calls to $U$ and $U^*$. Each of the $d+1$ projector-phase slots uses two controlled-reflection calls for its phase gadget and one branch-controlled one-qubit rotation; the controlled-rotation and reflection-access costs are charged separately. No controlled signal call is needed for the $\Phi/-\Phi$ selector. Phase-list generation and any finite-gate compilation remain separately charged.

## Facts & Assumptions

**Given:** A finite PUE map $A$, an integer $d\ge0$, and a real polynomial $p$ with the stated degree, parity, and interval bound.

[F1] [[thm-qa-23-real-polynomial-completion]]: such a $p$ has a QSP-admissible pair $P,Q$ with $\operatorname{Re}P=p$ exactly.

[F2] [[thm-qa-23-qsp-phase-factorization]]: every QSP-admissible pair has a real phase list whose ordered signal product has the pair's upper-left polynomial.

[F3] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)$ is real and $Z(\phi)=\operatorname{diag}(e^{i\phi},e^{-i\phi})$, with $U_\Phi=Z(\phi_0)\prod_{j=1}^d(W_RZ(\phi_j))$.

[F4] [[thm-qa-24-qsvt-singular-space-action]]: an exact phase list acts on each positive singular pair by its scalar polynomial; odd compression annihilates the right kernel, while even right compression acts on it by the scalar value at zero.

[F5] [[thm-qa-24-projector-phase-implementation]]: the clean-ancilla toggle $X_\Pi=H C(S_\Pi)H$ flips exactly on $\operatorname{ran}\Pi$ and is implemented with one controlled-reflection call plus a fixed ancilla gate.

[F6] [[alg-qa-24-qsvt]]: the chronological procedure alternates the supplied $U$ and $U^*$ calls, switching the projected side after each call, and interleaves the declared projector phases.

[F7] [[thm-qa-24-qsvt-query-count]]: a degree-$d$ sequence has $d$ signal calls and $d+1$ projector-phase slots; the $\Phi/-\Phi$ selector shares the signal list and uses one unconditional and one branch-controlled rotation per slot.

[F8] [[thm-singular-value-decomposition]]: the positive singular pairs are orthonormal, and the right singular vectors together with a basis of $\ker A$ form an orthonormal basis of $H_R$.

[F9] [[def-qc-controlled-unitary-access]]: a controlled operation is explicitly supplied and separately costed.

[F10] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers compose in reverse order in the denoted operator product.

## Proof

1.1 By [F1], choose a QSP-admissible pair $P,Q$ with $\operatorname{Re}P=p$. By [F2], choose a phase list $\Phi$ whose ordered signal product has upper-left entry $P_\Phi=P$. The real part identity is therefore exact for every real $x$. [F1, F2, given, choose]

1.2 Let control value $0$ select $\Phi$ and value $1$ select $-\Phi$. In each slot with phase $\phi$ about $\Pi$, apply the toggle $X_\Pi$ from [F5], then unconditional $R_z(2\phi)$, then a control-one-controlled $R_z(-4\phi)$, and then $X_\Pi$ again. In branch $0$ the middle rotation is $R_z(2\phi)$; in branch $1$ it is $R_z(-2\phi)$. The toggle places the clean ancilla in $|1\rangle$ on $\operatorname{ran}\Pi$ and in $|0\rangle$ on $\ker\Pi$, so the two system phases are $e^{i\phi(2\Pi-I)}$ and $e^{-i\phi(2\Pi-I)}$, respectively, with the ancilla returned to $|0\rangle$. Thus each slot realizes the required $\Phi/-\Phi$ phase pair. By [F6] and [F10], the signal calls between slots are shared unconditioned calls, and the full controlled unitary has branch operators $U_\Phi$ and $U_{-\Phi}$. Projecting $|+\rangle$ to $|+\rangle$ gives their arithmetic mean, since $\langle+|b\rangle\langle b|+\rangle=1/2$ for each $b\in\{0,1\}$. [F5, F6, F7, F10, given, algebra]

2.1 Since each entry of $W_R(x)$ is real and $\overline{Z(\phi)}=Z(-\phi)$, entrywise conjugation of the ordered product in [F3] gives $U_{-\Phi}(x)=\overline{U_\Phi(x)}$. Thus its upper-left polynomial is $P_{-\Phi}(x)=\overline{P_\Phi(x)}$ for every $x\in[-1,1]$. [F3, step 1.1, algebra]

3.1 Fix a positive singular pair $(\sigma_j,v_j,u_j)$. By [F4], the two branch compressions contribute coefficients $P_\Phi(\sigma_j)$ and $P_{-\Phi}(\sigma_j)$. Their mean is $\operatorname{Re}P_\Phi(\sigma_j)=p(\sigma_j)$ by steps 1.1–2.1. For even $d$, [F4] gives the same mean $p(0)$ on each vector in $\ker A$; for odd $d$, $p(0)=0$ and the output block annihilates that kernel. Thus the averaged compression has exactly the stated singular-value transform on all of $H_R$. [F1, F4, F8, step 1.1, step 1.2, step 2.1, algebra]

4.1 There are $d$ alternating signal positions and $d+1$ phase slots by [F7]. The signal list is unconditioned and shared. At each slot, the two toggles use two controlled-reflection calls, and the middle uses one unconditional $R_z(2\phi)$ plus one branch-controlled $R_z(-4\phi)$. By [F9], the controlled rotations and reflection calls are supplied and costed separately. For $d=0$, there is one paired phase slot and no signal call, so the same count applies. [F5, F6, F7, F9, step 1.2, algebra] ∎

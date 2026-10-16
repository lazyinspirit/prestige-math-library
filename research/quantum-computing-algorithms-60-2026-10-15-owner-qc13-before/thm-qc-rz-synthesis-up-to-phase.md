---
id: thm-qc-rz-synthesis-up-to-phase
kind: theorem
title: Two-phase reduction for Clifford+T Rz synthesis up to phase
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-global-phase-under-control
  - def-qc-clifford-t-gate-library
  - def-qc-ancilla-free-rz-approximation-problem
  - def-qc-global-phase-equivalence
  - def-qc-controlled-unitary-access
  - lem-qc-clifford-t-determinant-phase
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-determinant-multiplicative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
---

## Statement

For $R=R_z(\theta)$ and a one-qubit Clifford+T operator $U$, if
$\|R-\lambda U\|_{\mathrm{op}}\le\varepsilon$ for some unit scalar $\lambda$,
then the same projective T-count has a representative whose phase parameter
is one of $1$ or $e^{i\pi/8}$. The exact representative in the operator-norm
constraint remains explicit in the pair $(\lambda,U)$. Thus the up-to-phase
search need only compare the two scaled candidate problems. If such a
phase-equivalent operator is placed
under a control, its phase must be restored as a relative phase:

$$C(\lambda U)=\bigl(\operatorname{diag}(1,\lambda)\otimes I\bigr)C(U).$$

## Facts & Assumptions

**Given:** $R_z(\theta)$ and each Clifford+T word are unitary, $\det R_z(\theta)=1$, and $\lambda$ is a complex scalar with $|\lambda|=1$.

[F1] [[lem-qc-clifford-t-determinant-phase]]: every exact one-qubit Clifford+T word has determinant $\omega^k$ for some integer $k$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal complex operator has an orthonormal eigenbasis.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|A\|_{\mathrm{op}}=\max_{\|v\|=1}\|Av\|$ for a finite-dimensional nonzero domain.

[F4] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$ for square matrices over a commutative ring.

[F5] [[def-qc-global-phase-equivalence]]: $A$ and $B$ are phase-equivalent when $A=\lambda B$ for a unit scalar $\lambda$.

[F6] [[def-qc-ancilla-free-rz-approximation-problem]]: $R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$ and scalar Clifford phases do not contribute to T-count.

[F7] [[lem-qc-global-phase-under-control]]: in control-first order, $C(\lambda U)=(\operatorname{diag}(1,\lambda)\otimes I)C(U)$.

[F8] [[def-qc-controlled-unitary-access]]: $C(U)=\operatorname{diag}(I,U)$ on the control-first register.

## Proof

1.1 Write $\det U=\omega^k$ by [F1], and set $V=e^{-ik\pi/8}R^*U$. Since $\det R=1$, [F4] gives $\det V=e^{-ik\pi/4}\omega^k=1$. The unitary $V$ is normal, so [F2] diagonalizes it. Its two eigenvalues have product $1$ and modulus $1$, hence are $e^{i\phi},e^{-i\phi}$ for some $\phi$; consequently $\operatorname{tr}V=2\cos\phi$ is real. Choose $\sigma\in\{1,-1\}$ such that $W=\sigma V$ has nonnegative trace. Since $-1=e^{i8\pi/8}$, $W=e^{in\pi/8}R^*U$ for an integer $n$, and $W$ is unitary with determinant $1$. [F1, F2, F4, F6, given, choose]

1.2 Since $\operatorname{tr}W\ge0$, its eigenvalues may be written $e^{i\alpha},e^{-i\alpha}$ with $0\le\alpha\le\pi/2$. For any unit scalar $\mu=e^{i\psi}$, choose $\psi\in[-\pi,\pi]$. By [F2] and [F3],
$\|I-W\|_{\mathrm{op}}=|1-e^{i\alpha}|$ and
$\|I-\mu W\|_{\mathrm{op}}=\max\{|1-e^{i(\psi+\alpha)}|,|1-e^{i(\psi-\alpha)}|\}$. If $\psi\ge0$, put $t=\psi+\alpha\in[\alpha,3\pi/2]$. For $t\le\pi$, $\sin(t/2)\ge\sin(\alpha/2)$ by monotonicity on $[0,\pi/2]$; for $t\ge\pi$, $\sin(t/2)\ge\sin(3\pi/4)=1/\sqrt2\ge\sin(\alpha/2)$. If $\psi\le0$, apply the same bound to $t=|\psi|+\alpha$ from the second eigenvalue. Therefore $\|I-W\|_{\mathrm{op}}\le\|I-\mu W\|_{\mathrm{op}}$. [F2, F3, step 1.1, algebra]

1.3 Left multiplication by $R$ preserves operator norm, since it preserves the norm of every vector in the maximum [F3]. As $W=e^{in\pi/8}R^*U$, step 1.2 implies
$\|R-e^{in\pi/8}U\|_{\mathrm{op}}=\|I-W\|_{\mathrm{op}}\le\|R-\lambda U\|_{\mathrm{op}}$.
Write $n=2q+r$ with $r\in\{0,1\}$. Then $e^{in\pi/8}=\omega^q e^{ir\pi/8}$. Since $\omega^q$ is a free scalar Clifford phase in [F6], moving it between the explicit scalar and the representative leaves the projective T-count unchanged. Thus the two phase representatives are $e^{ir\pi/8}\in\{1,e^{i\pi/8}\}$, proving the reduction. [F3, F6, step 1.2, algebra]

1.4 In the control-first basis [F8], direct block multiplication gives $C(\lambda U)=\operatorname{diag}(I,\lambda U)=(\operatorname{diag}(1,\lambda)\otimes I)C(U)$, in agreement with the supplier identity [F7]. The first factor is generally not a global scalar on the joint control-target system, so replacing $U$ by $\lambda U$ under control requires this relative phase correction. [F5, F7, F8, given, algebra] ∎

## Unresolved supplier checks

The actual QC07 gate, QC08 controlled-unitary, QC09 resource, and QC11
global-phase bodies were inspected and their interfaces agree with the matrix
and scalar-phase conventions here. The separate Ross–Selinger T-count claim
remains open; this phase-reduction proof does not use it.

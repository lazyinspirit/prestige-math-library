---
id: lem-qc-rz-determinant-one-reduction
kind: lemma
title: Determinant-one reduction for optimal Rz approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-clifford-t-determinant-phase
  - lem-qc-clifford-t-determinant-one-approximants
  - def-qc-clifford-t-gate-library
  - def-qc-ancilla-free-rz-approximation-problem
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-determinant-multiplicative
  - lem-integer-part
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-derivatives
  - cor-mean-value-theorem
  - cor-differentiable-implies-continuous
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Lemma 7.2"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 12
---

## Statement

Set $c=|1-e^{i\pi/8}|$. If $0<\varepsilon<c$, every exact one-qubit
Clifford+T matrix $V$ with $\|R_z(\theta)-V\|_{\mathrm{op}}\le\varepsilon$
has determinant one. If $\varepsilon\ge c$, there is a determinant-one
Clifford matrix of T-count zero meeting this error bound. Consequently,
for every positive precision the minimum T-count over all feasible matrices
is attained among determinant-one matrices.

## Facts & Assumptions

**Given:** A real angle $\theta$, positive precision $\varepsilon$, and the
on-the-nose error and T-count conventions of the approximation problem.

[F1] [[lem-qc-clifford-t-determinant-phase]]: every exact one-qubit
Clifford+T matrix has determinant $\omega^j$, where $\omega=e^{i\pi/4}$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal
complex matrix admits a unitary diagonalization.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
$\|A\|_{\mathrm{op}}=\max_{\|x\|=1}\|Ax\|$.

[F4] [[def-qc-clifford-t-gate-library]]: $S=\operatorname{diag}(1,i)$ and
$\omega^j I$ are Clifford matrices, and scalar Clifford phases cost no T gates.

[F5] [[def-qc-ancilla-free-rz-approximation-problem]]:
$R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$; the
T-count is a nonnegative integer.

[F6] [[thm-determinant-multiplicative]]: determinants multiply.

[F7] [[lem-qc-clifford-t-determinant-one-approximants]]: every SU(2)
target has an exact determinant-one Clifford+T word within any positive error.

[F8] [[lem-integer-part]]: for every real $x$, $\lfloor x\rfloor$ is the
unique integer $m$ with $m\le x<m+1$.

[F9] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly
increasing on $[0,\pi/2]$ and cosine is strictly decreasing on $[0,\pi]$.

[F10] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
$|e^{ix}|=1$ and $|1-e^{ix}|=2|\sin(x/2)|$ for real $x$.

[F11] [[thm-sine-and-cosine-parametrize-the-unit-circle]] and [F10]: every
unit complex number can be written as $e^{i\phi}$ for a real $\phi$.

[F12] [[cor-trigonometric-parity-and-pythagorean-identity]]:
$\sin(-x)=-\sin x$ and $\sin^2x+\cos^2x=1$; in particular, $\sin0=0$.

[F13] [[def-pi-via-first-positive-cosine-zero]] and
[[thm-cosine-has-a-smallest-positive-zero]]: $\pi=2\gamma$ with
$0<\gamma<2$, so $0<\pi<4$.

[F14] [[thm-sine-and-cosine-derivatives]] and
[[cor-differentiable-implies-continuous]] and [[cor-mean-value-theorem]]:
$\sin'=\cos$ and differentiability makes sine continuous; for each $x>0$,
the mean value theorem on $[0,x]$ gives $\sin x=x\cos y$ for some
$y\in(0,x)$. By [F12], $\cos y\le1$.

## Proof


1.1 Suppose $\varepsilon<c$ and put $A=V R_z(\theta)^*$. The matrix $A$ is unitary. By [F2] it has an orthonormal eigenbasis. For a nonzero eigenvector $v$ with eigenvalue $\lambda$, norm preservation gives $|\lambda|\,\|v\|=\|Av\|=\|v\|$, so $|\lambda|=1$; by [F11] write the two eigenvalues as $e^{i\phi_1},e^{i\phi_2}$ with $\phi_j\in[-\pi,\pi]$. Unitary multiplication preserves [F3], and the norm of a diagonal matrix is the largest modulus of its entries, so $|1-e^{i\phi_j}|\le\varepsilon<c$. Since $|1-e^{ix}|=2|\sin(x/2)|$ by [F10]. Since $|\phi_j|/2\in[0,\pi/2]$, [F12] gives $|\sin(\phi_j/2)|=\sin(|\phi_j|/2)$ and $\sin0=0$; [F9] makes this strictly increasing in $|\phi_j|$. Thus $|1-e^{i\phi_j}|<c$ implies $|\phi_j|<\pi/8$. Hence $|\phi_1+\phi_2|<\pi/4$. By [F1,F6] and $\det R_z(\theta)=1$, $e^{i(\phi_1+\phi_2)}=\det A=\det V=\omega^j$. The only eighth root with an argument strictly between $-\pi/4$ and $\pi/4$ is $1$; thus $\det V=1$. [F1, F2, F3, F5, F6, F9, F10, F12, given, algebra]

1.2 Suppose $\varepsilon\ge c$. Set $q=\lfloor2\theta/\pi+1/2\rfloor$ by [F8]. Then $q-1/2\le2\theta/\pi<q+1/2$, so $|q\pi/4-\theta/2|\le\pi/8$. Set $C=\omega^{-q}S^q=\operatorname{diag}(\omega^{-q},\omega^q)$. It is a Clifford matrix with determinant one and T-count zero by [F4]. The two diagonal entries of $R_z(\theta)-C$ have the same modulus $|1-e^{i(q\pi/4-\theta/2)}|\le 2\sin(\pi/16)=c$ by [F9, F10], and $c\le\varepsilon$ by the case hypothesis. To check the domain used here, [F13] gives $0<\pi/16<\pi/2$; [F9, F12] give $0\le\sin(\pi/16)$, and [F14] gives $\sin(\pi/16)\le\pi/16$. Thus $c=2\sin(\pi/16)\le\pi/8<1/2$. [F3] therefore gives the required error bound. At equality $\varepsilon=c$ the weak inequality still holds. [F3, F4, F5, F8, F9, F10, F12, F13, F14, algebra]

2.1 For $\varepsilon<c$, step 1.1 says every feasible matrix already has determinant one. For $\varepsilon\ge c$, step 1.2 attains T-count zero, which is minimal by nonnegativity [F5]. The feasible set is nonempty by [F7], applied with error smaller than $\varepsilon$. Its T-counts form a nonempty subset of the nonnegative integers, hence have a least element attained by a feasible word. Thus restricting to determinant-one matrices never changes this attained minimum. [F5, F7, step 1.1, step 1.2, algebra] ∎


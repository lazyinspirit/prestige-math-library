---
id: lem-it-finite-gentle-measurement
kind: lemma
title: Gentle measurement bound in finite dimensions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-qc-purification-existence-and-unitary-equivalence
  - lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
  - def-qc-trace-norm
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-square-root-exists-and-is-unique
  - def-qc-density-operator
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Lemma 9.4.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §3.1.2 and §3.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $\rho$ be a density operator on a nonzero finite-dimensional complex inner-product space $H$, let $0\preceq\Lambda\preceq I_H$, and suppose $\operatorname{tr}(\Lambda\rho)\ge1-u$ for some $u\in[0,1]$. Then

$$\left\|\rho-\sqrt{\Lambda}\rho\sqrt{\Lambda}\right\|_1\le2\sqrt{u}.$$

Here $\sqrt{\Lambda}$ is the unique nonnegative square root, and $\|\cdot\|_1$ is the finite-dimensional trace norm. No normalization is applied after the operation $\rho\mapsto\sqrt{\Lambda}\rho\sqrt{\Lambda}$.

## Facts & Assumptions

**Given:** A finite-dimensional density operator $\rho$, an operator $0\preceq\Lambda\preceq I_H$, and $u\in[0,1]$ with $\operatorname{tr}(\Lambda\rho)\ge1-u$.

[F1] [[def-qc-density-operator]]: $\rho$ is nonnegative with trace one.

[F2] [[thm-qc-purification-existence-and-unitary-equivalence]]: every finite-dimensional density operator has a unit-vector purification whose partial trace is the state.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a nonnegative endomorphism has an orthonormal eigenbasis with nonnegative real eigenvalues.

[F4] [[thm-non-negative-square-root-exists-and-is-unique]]: a nonnegative endomorphism has a unique nonnegative square root.

[F5] [[def-qc-trace-norm]]: the trace norm is the sum of singular values.

[F6] [[lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians]]: partial trace does not increase trace norm on Hermitian operators.

[F7] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle v,w\rangle|^2\le\|v\|^2\|w\|^2$.

## Proof



1.1 Choose a purification $|\psi\rangle\in H\otimes R$ of $\rho$ using [F2]. Let $v=(\sqrt{\Lambda}\otimes I_R)|\psi\rangle$, $q=\langle v,v\rangle=\operatorname{tr}(\Lambda\rho)$, and $s=\langle\psi,v\rangle=\operatorname{tr}(\rho\sqrt{\Lambda})$. By [F3]–[F4], the eigenvalues $\lambda$ of $\Lambda$ lie in $[0,1]$ and $\sqrt{\lambda}\ge\lambda$, so $\sqrt{\Lambda}-\Lambda$ is nonnegative. Diagonalizing $\rho$ by [F3], $s-q=\operatorname{tr}(\rho(\sqrt{\Lambda}-\Lambda))$ is a sum of nonnegative eigenvalues of $\rho$ times nonnegative quadratic forms; hence $s\ge q$. Also $0\le q\le1$ because $\Lambda\preceq I$ and $\operatorname{tr}\rho=1$. [given, F1, F2, F3, F4, algebra, choose]

2.1 The Hermitian operator $|\psi\rangle\langle\psi|-|v\rangle\langle v|$ is zero off the span of $\psi,v$. If $v$ is not a scalar multiple of $\psi$, write $v=\bar s\,\psi+w$ with $w\perp\psi$; in the orthonormal basis $\psi,w/\|w\|$, its $2\times2$ matrix has trace $1-q$ and determinant $-(q-|s|^2)$. By [F7], $q-|s|^2\ge0$, so the eigenvalues have opposite signs or one is zero. Its trace norm is the square root of the characteristic discriminant, $\sqrt{(1+q)^2-4|s|^2}$. If $v$ is a scalar multiple of $\psi$, the same formula reduces to the one-dimensional trace norm $|1-q|$. [F3, F5, F7, step 1.1, algebra, cases]

3.1 Since $s\ge q$ and $0\le q\le1$, step 2.1 gives $$\left\||\psi\rangle\langle\psi|-|v\rangle\langle v|\right\|_1^2\le(1+q)^2-4q^2=(1-q)(1+3q)\le4(1-q)\le4u.$$ Taking the partial trace over $R$ gives the claimed bound by [F6], because the partial trace of the first rank-one state is $\rho$ and that of the second is $\sqrt{\Lambda}\rho\sqrt{\Lambda}$. [F2, F6, step 1.1, step 2.1, algebra] ∎


---
id: lem-qa-30-normalized-hermitian-observable-effects
kind: lemma
title: "Normalized Hermitian observable defines a two-outcome POVM"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
  - def-trace-of-an-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-non-negative-and-positive-operator
  - def-qc-finite-positive-effect-family
  - def-qc-povm-and-outcome-law
  - def-qc-density-operator
  - def-qc-dirac-notation-conversion
  - prop-trace-is-linear
  - thm-trace-of-ab-equals-trace-of-ba
  - lem-qa-30-positive-product-trace-nonnegative
  - lem-qa-30-hermitian-product-trace-real
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $M=M^*$ act on a finite-dimensional nonzero complex inner-product space and suppose $\|M\|\le1$. Then $E_+=(I+M)/2$ and $E_-=(I-M)/2$ are effects summing to $I$. For a density operator $\rho$, the two outcomes assigned values $+1$ and $-1$ have mean $\operatorname{tr}(M\rho)$.

## Facts & Assumptions

**Given:** A finite-dimensional nonzero complex inner-product space $H$, a self-adjoint operator $M$ with $\|M\|\le1$, and a density operator $\rho$ on $H$.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal operator has an orthonormal eigenbasis.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Mx,y\rangle=\langle x,M^*y\rangle$.

[F3] [[def-real-and-complex-inner-product-space]]: $\langle\cdot,\cdot\rangle$ is conjugate-symmetric, and the convention is linear in its first argument.

[F4] [[def-non-negative-and-positive-operator]]: nonnegative means self-adjoint with nonnegative quadratic form.

[F5] [[def-qc-finite-positive-effect-family]]: an effect has both $E$ and $I-E$ nonnegative, and a finite complete positive family is a nonempty finite family of nonnegative operators summing to $I$.

[F6] [[def-qc-povm-and-outcome-law]]: a finite POVM is a finite family of nonnegative operators summing to $I$, with outcome weights $p_\rho(a)=\operatorname{tr}(\rho E_a)$ for a density operator $\rho$.

[F7] [[def-qc-density-operator]]: $\rho$ is nonnegative and $\operatorname{tr}(\rho)=1$.

[F8] [[prop-trace-is-linear]]: matrix trace is linear.

[F9] [[lem-qa-30-positive-product-trace-nonnegative]]: the trace of a product of positive semidefinite matrices is nonnegative real.

[F10] [[lem-qa-30-hermitian-product-trace-real]]: the trace of two Hermitian matrices' product is real.

[F11] [[def-trace-of-an-endomorphism]]: endomorphism trace is the matrix trace in any chosen basis.

[F12] [[thm-trace-of-ab-equals-trace-of-ba]]: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for compatible finite square products.

[F13] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm bounds $\|Tv\|$ for each unit vector $v$.

## Proof

**Proof technique:** direct.

1.1 Since $M=M^*$, $MM^*=M^2=M^*M$, so [F1] gives an orthonormal eigenbasis $Me_k=\lambda_ke_k$. For each unit $e_k$, [F2] and [F3] give $\lambda_k=\langle Me_k,e_k\rangle=\langle e_k,Me_k\rangle=\overline{\lambda_k}$, so $\lambda_k$ is real; [F13] gives $|\lambda_k|=\|Me_k\|\le\|M\|\le1$. Thus the eigenvalues $(1\pm\lambda_k)/2$ of $E_\pm$ and those of $I-E_\pm$ are nonnegative, so both operators are nonnegative and each $E_\pm$ is an effect by [F4] and [F5]. Direct addition gives $E_++E_-=I$, hence the pair is a two-outcome POVM by [F6]. [given, F1, F2, F3, F4, F5, F6, F13, algebra]

2.1 By [F6], the outcome weights are $p_\pm=\operatorname{tr}(\rho E_\pm)$; representing endomorphisms in the orthonormal basis from step 1.1, [F9] makes them nonnegative. By [F8], [F11], [F7], and $E_++E_-=I$, their sum is $p_++p_-=\operatorname{tr}(\rho(E_++E_-))=\operatorname{tr}(\rho)=1$. Their signed mean is $p_+-p_-=\operatorname{tr}(\rho(E_+-E_-))=\operatorname{tr}(\rho M)=\operatorname{tr}(M\rho)$ by [F8] and [F12], and it is real by [F10]. Thus the outcome law has mean $\operatorname{tr}(M\rho)$. [given, F6, F7, F8, F9, F10, F11, F12, step 1.1, algebra] ∎

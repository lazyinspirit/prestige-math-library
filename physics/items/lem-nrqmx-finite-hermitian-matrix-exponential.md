---
id: lem-nrqmx-finite-hermitian-matrix-exponential
kind: lemma
domain: mathematics
library: mathematics
title: Unitarity and differentiation of the finite Hermitian matrix exponential
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-finite-hermitian-matrix-exponential
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-chain-rule-for-total-derivatives
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
dependency_roles:
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (15)-(19), finite-dimensional Floquet Hamiltonian and unitary propagator exponentials.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.2, equations (8)-(13), Floquet Hamiltonian and finite-dimensional exponentials.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $d\ge1$, let $A=A^*$ be an endomorphism of $\mathbb C^d$ with its standard complex inner product, and let $\hbar>0$. For real $t$, define $E_A(t):=e^{-itA/\hbar}$ by the finite-dimensional matrix exponential defined on this page. Then $E_A(t)$ is unitary, $E_A(t+s)=E_A(t)E_A(s)$ for all real $s,t$, and its operator-norm derivative is
$$\frac{d}{dt}E_A(t)=-\frac{i}{\hbar}AE_A(t)= -\frac{i}{\hbar}E_A(t)A.$$

## Statement references

[[def-nrqmx-finite-hermitian-matrix-exponential]]

## Facts & Assumptions

**Given:** $d\ge1$, $A=A^*$ on $\mathbb C^d$, $\hbar>0$, and real $s,t$.

[F1] [[def-self-adjoint-and-normal-endomorphism]] makes $A$ normal; [[thm-complex-spectral-theorem-for-normal-endomorphisms]] supplies an orthonormal eigenbasis. If $Av=\lambda v$ with $v\ne0$, self-adjointness gives $\lambda\|v\|^2=\langle Av,v\rangle=\langle v,Av\rangle=\overline\lambda\|v\|^2$, so each eigenvalue $\lambda$ is real.

[F2] [[def-nrqmx-finite-hermitian-matrix-exponential]] defines $E_A(t)$ by an absolutely convergent matrix series. The scalar exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ ([[thm-complex-exponential-addition-and-real-extension]]), $\exp'(z)=\exp(z)$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), the real-variable chain rule applies ([[thm-chain-rule-for-total-derivatives]]), and $|\exp(iy)|=1$ for real $y$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Given:** [F1], [F2], and the data in the Statement.

1.1 Choose an orthonormal eigenbasis $v_1,\ldots,v_d$ of $A$ from [F1], with real eigenvalues $\lambda_1,\ldots,\lambda_d$. Applying the defining power series term-by-term to $v_j$ gives $E_A(t)v_j=\exp(-it\lambda_j/\hbar)v_j$. Since each scalar has modulus one by [F2], $E_A(t)$ maps an orthonormal basis to an orthonormal basis and is therefore unitary. [F1, F2, given]

2.1 On each $v_j$, [F2] gives $E_A(t)E_A(s)v_j=\exp(-i(t+s)\lambda_j/\hbar)v_j=E_A(t+s)v_j$. Equality on the basis proves $E_A(t)E_A(s)=E_A(t+s)$. [F1, F2, step 1.1]

3.1 The same finite eigenbasis expression is a finite sum of scalar exponential functions. Differentiating each summand by [F2] and the chain rule gives $E_A'(t)v_j=(-i\lambda_j/\hbar)E_A(t)v_j$. Because the basis is finite, these scalar derivatives give the operator-norm derivative, and the equality on every $v_j$ yields $E_A'(t)=(-i/\hbar)AE_A(t)=(-i/\hbar)E_A(t)A$. [F1, F2, algebra] ∎


---
id: lem-qsmx-potts-finite-gibbs-density
kind: lemma
domain: mathematics
library: physics
title: "The finite Potts Gibbs matrix is well-defined at every finite inverse temperature"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-qsmx-quantum-potts-hamiltonian
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-exponential-reciprocal-and-positivity
  - def-trace-of-an-endomorphism
dependency_roles:
  def-qsmx-quantum-potts-hamiltonian: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "D. Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
      locator: "§7.4, The variational principle, lines 1352–1379: positive finite-level Boltzmann weights and the normalized partition function; the local spectral proof handles the noncommuting finite matrix."
    - title: "A. Nichols, The Temperley-Lieb algebra and its generalizations in the Potts and XXZ models, §2"
      url: https://arxiv.org/pdf/hep-th/0509069
      locator: "§2, PDF pp. 3–6: finite open Potts chains and their local Temperley–Lieb operators; no Gibbs existence proof is imported."
---

## Statement

For $Q\in\{2,3,4\}$, $L\geq1$, real coefficients $J_i$, and finite real $\beta$, the matrix $H_{Q,L}(\mathbf J)$ defined on the Potts-clock chain is self-adjoint. With the spectral definitions $B_\beta$, $Z_\beta$, and $\rho_\beta$ from that definition, $Z_\beta>0$ and $\rho_\beta$ is a positive semidefinite matrix of trace one. This is a finite-dimensional mathematical fact; it makes no thermodynamic-limit or empirical claim.

## Statement references

[[def-qsmx-quantum-potts-hamiltonian]]

## Facts & Assumptions

**Given:** $Q\in\{2,3,4\}$, integer $L\geq1$, real $J_i$, and $\beta\in\mathbb R$.

[A1] These finite-dimensional parameters and coefficients have the ranges just stated.

[F1] [[def-qsmx-quantum-potts-hamiltonian]]: $P_j=|+\rangle\langle+|$, $D_{j,j+1}=\sum_a|aa\rangle\langle aa|$, $e_{2j-1}=\sqrt Q\,P_j$, $e_{2j}=\sqrt Q\,D_{j,j+1}$, and $H_{Q,L}=-\sum_iJ_i e_i$; the inner product is linear in its first argument; $\Pi_\lambda$ is the self-adjoint idempotent projection onto the $\lambda$-eigenspace, the projections sum to the identity, and $B_\beta$ is the spectral sum with weights $e^{-\beta\lambda}$. A self-adjoint $A$ is positive definite if $\langle Av,v\rangle>0$ for every nonzero $v$, and positive semidefinite if $\langle Av,v\rangle\geq0$ for every $v$.

[F2] [[def-self-adjoint-and-normal-endomorphism]]: an endomorphism is self-adjoint when it equals its adjoint; a self-adjoint endomorphism is normal.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F4] [[cor-exponential-reciprocal-and-positivity]]: $e^x>0$ and $e^{-x}=1/e^x$ for every real $x$.

[F5] [[def-trace-of-an-endomorphism]]: the trace is the basis-independent sum of diagonal entries.

## Proof

1.1 Each $P_j$ is an orthogonal projection because $\langle+|+\rangle=1$. Each $D_{j,j+1}$ is a sum of mutually orthogonal rank-one projections onto the computational vectors $|aa\rangle$. Hence these operators are self-adjoint; since $\sqrt Q$ and each $J_i$ are real, every $e_i$ and then $H_{Q,L}=-\sum_iJ_i e_i$ are self-adjoint. [A1, F1, F2, algebra]

2.1 By [F2] and [F3], $H_{Q,L}$ has an orthonormal eigenbasis. For a unit eigenvector $v$ with $H_{Q,L}v=\lambda v$, self-adjointness and the linear-first inner-product convention give $\lambda=\langle H_{Q,L}v,v\rangle=\langle v,H_{Q,L}v\rangle=\overline\lambda$, so every eigenvalue $\lambda$ is real. The distinct-eigenvalue projections $\Pi_\lambda$ are self-adjoint and sum to the identity by [F1]. Each weight $w_\lambda=e^{-\beta\lambda}$ is finite, real, and strictly positive by [F4]. Therefore $B_\beta=\sum_\lambda w_\lambda\Pi_\lambda$ is self-adjoint, and for every nonzero $v$, $\langle B_\beta v,v\rangle=\sum_\lambda w_\lambda\|\Pi_\lambda v\|^2>0$: at least one projected component is nonzero since $\sum_\lambda\Pi_\lambda=I$. Thus $B_\beta$ is positive definite. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 In an orthonormal eigenbasis, [F5] gives $Z_\beta=\operatorname{tr}B_\beta=\sum_\lambda w_\lambda\dim(\operatorname{ran}\Pi_\lambda)$. The space has finite positive dimension $Q^L$, so this is a finite sum with at least one positive term; hence $Z_\beta$ is finite and strictly positive. It is a real scalar. Dividing the self-adjoint positive definite $B_\beta$ by $Z_\beta$ gives a self-adjoint positive semidefinite $\rho_\beta$, and $\operatorname{tr}\rho_\beta=Z_\beta^{-1}Z_\beta=1$. [A1, F1, F5, step 2.1, algebra]

4.1 If all $J_i=0$, then $H_{Q,L}=0$; if $\beta=0$, all spectral weights also equal $e^0$. By [F4] at $x=0$, $a:=e^0>0$ and $a=1/a$, so $a=1$. In either boundary case $B=I$, $Z=Q^L$ by [F5], and $\rho=I/Q^L$. [A1, F1, F4, F5, algebra] ∎

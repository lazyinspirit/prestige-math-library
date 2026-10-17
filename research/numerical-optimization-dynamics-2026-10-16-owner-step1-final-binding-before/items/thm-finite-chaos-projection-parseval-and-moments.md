---
id: thm-finite-chaos-projection-parseval-and-moments
kind: theorem
title: Finite chaos projection, Parseval identity, mean, and variance
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-chaos-orthogonal-projection
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; only finite sums and the L2 inner product are involved.
verification: {}
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §§3.3–3.4
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.4.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Let $\Lambda$ be finite, contain $0$, and let the real basis
$(\psi_\alpha)_{\alpha\in\Lambda}$ be as in
[[def-chaos-orthonormal-tensor-basis]]. For real $u\in L^2(\rho)$ set
$c_\alpha=\langle u,\psi_\alpha\rangle$ and
$P_\Lambda u=\sum_{\alpha\in\Lambda}c_\alpha\psi_\alpha$ as in
[[def-finite-chaos-orthogonal-projection]]. Then
$$\|u\|_{L^2(\rho)}^2=\sum_{\alpha\in\Lambda}c_\alpha^2+
\|u-P_\Lambda u\|_{L^2(\rho)}^2.$$
The residual is orthogonal to $\mathcal P_\Lambda$,
$\mathbb E[u]=c_0$, and
$$\operatorname{Var}(u)=\sum_{\alpha\in\Lambda\setminus\{0\}}c_\alpha^2+
\|u-P_\Lambda u\|_{L^2(\rho)}^2.$$
Here $\operatorname{Var}(u)=\mathbb E[(u-\mathbb E u)^2]$; no completeness of
the polynomial family is assumed.

## Facts & Assumptions

**Given:** A finite real orthonormal polynomial family containing $\psi_0=1$ and $u\in L^2(\rho)$.

[F1] [[def-finite-chaos-orthogonal-projection]] defines $c_\alpha$ and $P_\Lambda u$ by the displayed finite sum.

[F2] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives $\langle\psi_\alpha,\psi_\beta\rangle=\delta_{\alpha\beta}$ and $\psi_0=1$.

[F3] The L2 integral pairing is an inner product and obeys Pythagoras for orthogonal vectors ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

## Proof

1.1 For each $\beta\in\Lambda$, bilinearity and [F2] give $\langle u-P_\Lambda u,\psi_\beta\rangle =c_\beta-\sum_{\alpha\in\Lambda}c_\alpha\delta_{\alpha\beta}=0$. Thus the residual is orthogonal to every basis vector and hence to their finite span. [F1, F2, algebra]

2.1 The vectors $P_\Lambda u$ and $u-P_\Lambda u$ are orthogonal by step 1.1. Apply Pythagoras [F3] and expand $\|P_\Lambda u\|^2=\sum_{\alpha,\beta}c_\alpha c_\beta\delta_{\alpha\beta}=\sum_\alpha c_\alpha^2$ using [F2]. This proves the norm identity. [F2, F3, step 1.1, algebra]

3.1 Since $\psi_0=1$, the coefficient $c_0=\langle u,1\rangle=\mathbb E[u]$. The centered variable has the orthogonal decomposition $u-\mathbb E[u]=\sum_{\alpha\ne0}c_\alpha\psi_\alpha+(u-P_\Lambda u)$; the sum is orthogonal to the residual by step 1.1. Pythagoras and [F2] give the displayed variance identity. [F1, F2, step 1.1, algebra] ∎
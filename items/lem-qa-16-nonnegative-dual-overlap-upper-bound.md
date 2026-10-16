---
id: lem-qa-16-nonnegative-dual-overlap-upper-bound
kind: lemma
title: Input-distribution certificates upper-bound the nonnegative adversary value
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-nonnegative-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For a nonconstant finite Boolean query problem (N,D,f), let each p_x be a probability distribution on [N]. If
$$\eta:=\min_{f(x)\ne f(y)}\sum_{i:x_i\ne y_i}\sqrt{p_x(i)p_y(i)}>0,$$
then the nonnegative adversary value satisfies $\operatorname{Adv}(f)\le1/\eta$.

## Facts & Assumptions

**Given:** A finite nonconstant Boolean function and a family of probability distributions p_x on its N input coordinates.



[F1] [[def-qa-16-nonnegative-adversary-bound]]: Adv maximizes ||Γ||/max_i||Γ∘Δ_i|| over nonnegative symmetric admissible matrices.

[F2] [[def-qa-16-input-mismatch-matrices]]: opposite-output pairs differ on at least one coordinate and Γ is supported on those pairs.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is induced by the Euclidean norm.

[F4] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite real symmetric matrix has an orthonormal real eigenbasis.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ in finite-dimensional inner-product spaces.

## Proof

1.1 Fix distributions $p_x(i)\ge0$ with $\sum_i p_x(i)=1$ for each x, and let $\eta=\min_{f(x)\ne f(y)}\sum_{i:x_i\ne y_i}\sqrt{p_x(i)p_y(i)}>0$. Let $\Gamma\ge0$ be an admissible nonzero matrix. By [F4], choose a real orthonormal eigenbasis of the symmetric matrix $\Gamma$; thus $\|\Gamma\|=\max_j|\lambda_j|=\max_{\|z\|=1}|z^{\mathsf T}\Gamma z|$ and $\lambda_{\max}(\Gamma)=\max_{\|z\|=1}z^{\mathsf T}\Gamma z$. For every real unit z, entrywise nonnegativity gives $|z^{\mathsf T}\Gamma z|\le |z|^{\mathsf T}\Gamma|z|\le\lambda_{\max}(\Gamma)$. Since $\Gamma$ is nonzero admissible, it has a positive off-diagonal entry, so a vector supported equally on that pair has positive Rayleigh quotient and $\lambda_{\max}(\Gamma)>0$. Hence $\|\Gamma\|=\lambda_{\max}(\Gamma)$. If v is a unit top eigenvector, then $|v|$ is a nonnegative unit vector with $|v|^{\mathsf T}\Gamma|v|\ge v^{\mathsf T}\Gamma v=\lambda_{\max}(\Gamma)$, so equality holds and $\delta:=|v|$ is also a top eigenvector. [given, F1, F2, F3, F4, algebra]

2.1 For every cross-output pair the mismatch overlap is at least η; all coefficients Γ_xy δ_xδ_y are nonnegative. Therefore η||Γ||≤Σ_{x,y}Γ_xyδ_xδ_yΣ_iΔ_i(x,y)√(p_x(i)p_y(i)) =Σ_i s_i^T(Γ∘Δ_i)s_i, where (s_i)_x=δ_x√p_x(i). [given, step 1.1, algebra]

3.1 By Cauchy–Schwarz [F5] and the induced norm definition [F3], each summand is at most ||Γ∘Δ_i||·||s_i||². Summing gives at most max_i||Γ∘Δ_i||·Σ_iΣ_xδ_x²p_x(i)=max_i||Γ∘Δ_i||, because every p_x is a probability distribution and ||δ||=1. Divide by η and the positive denominator to obtain the claimed upper certificate for Γ; maximizing over Γ proves Adv(f)≤1/η. [given, F1, F3, F5, step 2.1, algebra] ∎

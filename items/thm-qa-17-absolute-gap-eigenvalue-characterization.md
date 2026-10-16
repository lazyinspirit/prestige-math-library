---
id: thm-qa-17-absolute-gap-eigenvalue-characterization
kind: theorem
title: "Absolute gap equals one minus the largest nonconstant eigenvalue modulus"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-17-absolute-spectral-gap
  - lem-qa-17-reversible-transition-self-adjoint-on-l2-pi
  - lem-qa-17-stochastic-l2-contraction
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-inner-product-space
  - def-qa-17-finite-reversible-chain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.1"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $(X,P,\pi)$ be a finite reversible chain and let $H_0=\{f:\sum_x\pi_xf_x=0\}$. If $H_0=\{0\}$, then $\delta_{\mathrm{abs}}(P)=1$. Otherwise,

$$\delta_{\mathrm{abs}}(P)=1-\max\{|\lambda|:\lambda\in\sigma(P|_{H_0})\},$$

and $0\le\delta_{\mathrm{abs}}(P)\le1$. If there is a fixed function $f\notin\operatorname{span}\{\mathbf1\}$, then its nonzero mean-zero component is fixed by $P$, so the gap is $0$.

## Facts & Assumptions

**Given:** A finite reversible chain $(X,P,\pi)$ with its weighted inner product and mean-zero subspace $H_0$.

[F1] [[def-qa-17-absolute-spectral-gap]]: $\delta_{\mathrm{abs}}(P)=1-\|P|_{H_0}\|_{2,\pi}$, with norm $0$ when $H_0=0$.

[F2] [[lem-qa-17-reversible-transition-self-adjoint-on-l2-pi]]: $H_0$ is invariant and $P|_{H_0}$ is a finite-dimensional self-adjoint endomorphism.

[F3] [[lem-qa-17-stochastic-l2-contraction]]: $\|Pf\|_{2,\pi}\le\|f\|_{2,\pi}$ for every $f$.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional complex normal endomorphism has an orthonormal eigenbasis.

[F5] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: an eigenvalue is a scalar with a nonzero eigenvector, and the spectrum is the set of eigenvalues.

[F6] [[def-qa-17-finite-reversible-chain]]: $P\mathbf1=\mathbf1$, $\sum_x\pi_x=1$, and $\pi P=\pi$.

[F7] [[def-inner-product-space]]: scalar multiplication is linear in the first argument and conjugate-linear in the second.

## Proof

1.1 If $H_0=\{0\}$, the restriction has zero domain, so its operator norm is $0$ by [F1] and the gap is $1$. Otherwise, [F2] and [F4] give an orthonormal eigenbasis $e_1,\ldots,e_m$ of $H_0$. Each eigenvalue is real: if $Pe_j=\lambda_je_j$, self-adjointness and [F7] give $\lambda_j\|e_j\|^2=\langle Pe_j,e_j\rangle_\pi=\langle e_j,Pe_j\rangle_\pi=\overline{\lambda_j}\|e_j\|^2$. [F5] identifies these eigenvalues as the spectrum of the restriction. [F1, F2, F4, F5, F7]

1.2 Write $f=\sum_j c_je_j$. Orthonormality gives $\|f\|_{2,\pi}^2=\sum_j|c_j|^2$ and $\|Pf\|_{2,\pi}^2=\sum_j|\lambda_j|^2|c_j|^2\le (\max_j|\lambda_j|)^2\|f\|_{2,\pi}^2$, with equality at an eigenvector whose eigenvalue has largest modulus. Therefore $\|P|_{H_0}\|_{2,\pi}=\max_j|\lambda_j|$. [F2, F4, F5, algebra]

2.1 By [F3] the restriction norm is at most $1$, and it is nonnegative by definition; substituting step 1.2 into [F1] proves both the eigenvalue formula and $0\le\delta_{\mathrm{abs}}(P)\le1$. [F1, F3, step 1.2, algebra]

3.1 If $Pf=f$ and $f\notin\operatorname{span}\{\mathbf1\}$, put $c=\sum_x\pi_xf_x$ and $h=f-c\mathbf1$. The normalization $\sum_x\pi_x=1$ gives $h\in H_0$, while $h\ne0$ because $f$ is not constant. Since $P\mathbf1=\mathbf1$, $Ph=Pf-cP\mathbf1=h$. Thus $1$ is an eigenvalue of $P|_{H_0}$ and step 1.2 gives $\|P|_{H_0}\|=1$, so [F1] gives $\delta_{\mathrm{abs}}(P)=0$. [F1, F2, F5, F6, step 1.2, algebra] ∎

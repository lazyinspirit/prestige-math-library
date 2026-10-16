---
id: thm-qc-hermitian-trace-norm-positive-negative-parts
kind: theorem
title: Hermitian Trace Norm Positive Negative Parts
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-map
  - def-non-negative-and-positive-operator
  - def-qc-trace-norm
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-and-normal-endomorphism
  - def-trace-of-an-endomorphism
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-trace-norm-spectral-formula
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses a finite complex eigenbasis and finite sums only.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, Jordan–Hahn decomposition, and Chapter 3, §3.1.1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.5 and A.7"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $\mathcal H$ be a finite-dimensional complex inner-product space and let
$X:\mathcal H\to\mathcal H$ be self-adjoint. There are non-negative
endomorphisms $X_+,X_-$ such that

$$X=X_+-X_-,\qquad \langle X_+u,X_-v\rangle=0\quad(u,v\in\mathcal H),$$

and

$$\|X\|_1=\operatorname{tr}(X_+)+\operatorname{tr}(X_-).$$

If $\operatorname{tr}(X)=0$, then
$\|X\|_1=2\operatorname{tr}(X_+)=2\operatorname{tr}(X_-)$. 

The trace norm is the finite singular-value norm from
[[def-qc-trace-norm]].

## Facts & Assumptions
**Given:** A finite-dimensional complex inner-product space $\mathcal H$ and a
self-adjoint endomorphism $X:\mathcal H\to\mathcal H$.

[F1] A self-adjoint endomorphism of a finite-dimensional complex
inner-product space is normal and has an orthonormal eigenbasis
([[def-self-adjoint-and-normal-endomorphism]],
[[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The inner product is linear in its first argument, conjugate-symmetric,
and its induced length satisfies $\langle v,v\rangle=\|v\|^2$
([[def-real-and-complex-inner-product-space]]).

[F3] A diagonal self-adjoint endomorphism with nonnegative real eigenvalues is
non-negative ([[def-non-negative-and-positive-operator]],
[[thm-non-negative-operator-characterisations]]).

[F4] For self-adjoint $H$, the trace norm is the trace of
$\sqrt{H^*H}$ ([[thm-qc-trace-norm-spectral-formula]]).

[F5] Trace is the sum of diagonal entries in any basis
([[def-trace-of-an-endomorphism]]).

[F6] Every vector expands in a finite orthonormal basis, including the empty
basis ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F7] A non-negative endomorphism has a unique non-negative square root
([[thm-non-negative-square-root-exists-and-is-unique]]).

[F8] The adjoint identity is $\langle Tv,w\rangle=\langle v,T^*w\rangle$
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F9] A linear map preserves linear combinations
([[def-linear-map]]).

## Proof

1.1 By [F1], choose an orthonormal eigenbasis $(e_j)_{j<n}$ with $Xe_j=\lambda_je_j$. Self-adjointness and conjugate symmetry give $\lambda_j=\langle Xe_j,e_j\rangle=\langle e_j,X^*e_j\rangle =\langle e_j,Xe_j\rangle=\overline{\langle Xe_j,e_j\rangle}$, so every $\lambda_j$ is real. [given, F1, F2, F8, choose]

2.1 For $v\in\mathcal H$, define $X_+v=\sum_{j<n}\max(\lambda_j,0)\langle v,e_j\rangle e_j$ and $X_-v=\sum_{j<n}\max(-\lambda_j,0)\langle v,e_j\rangle e_j$. These are linear by the first-slot rule [F2] and the finite-sum definition [F9]. Their diagonal entries are real and nonnegative. If $v=\sum_j c_je_j$, then [F2] gives $\langle X_+v,v\rangle=\sum_j\max(\lambda_j,0)|c_j|^2\ge0$, and the same calculation applies to $X_-$. Thus [F3] makes both operators non-negative. Every $X_+u$ is a linear combination of basis vectors with $\lambda_j>0$, while every $X_-v$ is a linear combination of basis vectors with $\lambda_j<0$; these subsets of the orthonormal basis are orthogonal. Thus $\langle X_+u,X_-v\rangle=0$ for all $u,v$. On every $e_j$, $(X_+-X_-)e_j=\lambda_je_j=Xe_j$, hence $X=X_+-X_-$. [F2, F3, F6, F9, step 1.1, algebra, construct]

3.1 In this basis $X^*X=X^2$ has eigenvalues $\lambda_j^2$. Define $R$ by $Re_j=|\lambda_j|e_j$. Its diagonal entries are nonnegative, so [F3] makes it non-negative, and $R^2=X^*X$; uniqueness [F7] therefore gives $R=\sqrt{X^*X}$. Thus [F4]–[F5] give $\|X\|_1=\sum_j|\lambda_j|$, $\operatorname{tr}(X_+)=\sum_{\lambda_j>0}\lambda_j$, and $\operatorname{tr}(X_-)=\sum_{\lambda_j<0}(-\lambda_j)$. Their latter two sums add to $\sum_j|\lambda_j|$, proving the trace-norm identity. [F3, F4, F5, F7, step 1.1, step 2.1, algebra]

4.1 If $\operatorname{tr}(X)=0$, [F5] gives $\sum_j\lambda_j=0$. Hence the sum of positive eigenvalues equals the sum of absolute values of negative eigenvalues. Step 3.1 then yields $\|X\|_1=2\operatorname{tr}(X_+)=2\operatorname{tr}(X_-)$. If $n=0$, all sums are empty and the identities still hold. [F5, step 3.1, algebra] ∎

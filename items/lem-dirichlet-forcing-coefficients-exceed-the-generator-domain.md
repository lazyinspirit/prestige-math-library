---
id: lem-dirichlet-forcing-coefficients-exceed-the-generator-domain
kind: lemma
title: "Constant Dirichlet forcing is square summable but outside the heat-generator domain"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-dirichlet-sine-mode-heat-splitting-model
  - lem-diagonal-heat-semigroup-generator-domain
  - def-pi-via-first-positive-cosine-zero
  - thm-p-series-real-exponents
  - thm-ftc-second-part
  - thm-sine-and-cosine-derivatives
  - thm-quarter-turn-values-and-shift-formulas
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, complete 120-page graduate lecture notes"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 2, §One dimension, interval Dirichlet case, printed p. 15."
---

## Statement

For the constant forcing $f(x):=\pi/4$ on $(0,\pi)$, define its Fourier sine coefficient by
$$\widehat f_k:=\frac2\pi\int_0^\pi f(x)\sin(kx)\,dx.$$
Then $\widehat f_k=g_k$ from [[def-dirichlet-sine-mode-heat-splitting-model]]. Thus $g\in\mathcal H$ but $g$ is outside the generator domain of $A$. The constant forcing has nonzero endpoint value, while every Dirichlet sine mode vanishes at both endpoints.

## Facts & Assumptions

**Given:** The modal space, generator domain, forcing coefficients, and Dirichlet sine modes in the statement.

[F1] [[def-dirichlet-sine-mode-heat-splitting-model]] and [[lem-diagonal-heat-semigroup-generator-domain]]: $\mathcal H=\ell^2(\{k\in\mathbb N:k\ge1\},\mathbb R)$, and the generator of $E_t$ has domain $D(A)=\{u:\sum_{k\ge1} k^4|u_k|^2<\infty\}$; $g_k=1/k$ for odd $k$ and $0$ for even $k$.

[F2] [[thm-p-series-real-exponents]]: $\sum_{k\ge1}k^{-p}$ converges exactly when $p>1$.

[F3] [[thm-ftc-second-part]]: if $G'=q$ and $q$ is integrable, then $\int_a^bq=G(b)-G(a)$.

[F4] [[thm-sine-and-cosine-derivatives]]: $\frac{d}{dx}\cos(kx)=-k\sin(kx)$.

[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(k\pi)=0$ and $\cos(k\pi)=(-1)^k$ for each integer $k$.

[F6] [[def-pi-via-first-positive-cosine-zero]]: $\pi$ is strictly positive.

## Proof

1.1 By [F4], an antiderivative of $\sin(kx)$ is $-\cos(kx)/k$; applying [F3] and [F5] gives $\widehat f_k=\frac2\pi\cdot\frac\pi4\cdot\frac{1-(-1)^k}{k}=\frac{1-(-1)^k}{2k}.$ This is $1/k$ for odd $k$ and $0$ for even $k$, exactly the sequence in [F1]. [given, F1, F3, F4, F5, algebra]

2.1 The squared coefficients sum to $\sum_{j\ge0}(2j+1)^{-2}\le\sum_{k\ge1}k^{-2}<\infty$ by [F2], so $g\in\mathcal H$. [F1, F2, step 1.1, algebra]

2.2 The generator-domain sum is $\sum_{k\ge1}k^4|g_k|^2=\sum_{j\ge0}(2j+1)^2$, whose partial sums are at least the number of terms and hence unbounded. Therefore $g\notin D(A)$ by [F1]. [F1, step 1.1, algebra]

3.1 By [F6], the constant forcing $f=\pi/4$ is nonzero. By [F5], every sine mode $\sin(kx)$ vanishes at both $x=0$ and $x=\pi$. Hence the forcing is incompatible with the homogeneous Dirichlet endpoint values. This modal observation supplies no general PDE error theorem. [given, F5, F6, algebra] ∎


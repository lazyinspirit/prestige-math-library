---
id: lem-it-negative-log-integral-resolvent-jensen
kind: lemma
title: The resolvent proof of the compression inequality for minus the logarithm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - lem-it-quantum-inverse-compression-variational
  - def-non-negative-and-positive-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-qc-linear-isometry-adjoint-identities
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $T$ be a positive-definite endomorphism of a nonzero finite-dimensional complex inner-product space $K$, and let $V:H\to K$ be an isometry from a nonzero finite-dimensional complex inner-product space. Define $\log T$ by the natural logarithm of the positive eigenvalues in the finite spectral decomposition. Then
$$-\log(V^\dagger TV)\preceq V^\dagger(-\log T)V.$$

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K$, a positive-definite $T$ on $K$, and an isometry $V:H\to K$.

[F1] [[lem-it-quantum-inverse-compression-variational]]: for every $s\ge0$, $V^\dagger(T+sI_K)^{-1}V\succeq(V^\dagger TV+sI_H)^{-1}$.

[F2] [[def-non-negative-and-positive-operator]]: positive-definite means self-adjoint with strictly positive quadratic form on nonzero vectors.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal endomorphism on a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F4] [[lem-qc-linear-isometry-adjoint-identities]]: a linear isometry between finite-dimensional inner-product spaces satisfies $V^\dagger V=I_H$.

[F5] [[thm-logarithm-derivative-and-integral]]: the natural logarithm, denoted here by $\ln$, is differentiable on $(0,\infty)$ with derivative $1/x$; this is the inverse-exponential logarithm used in the Statement.

[F6] [[thm-natural-logarithm-laws]]: the natural logarithm is continuous on $(0,\infty)$, satisfies $\ln(u/v)=\ln u-\ln v$ for $u,v>0$, and has $\ln1=0$.

[F7] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

[F8] [[thm-ftc-second-part]]: if a real primitive is differentiable on the closed interval, including its one-sided endpoint derivatives, and its derivative is Riemann integrable, then the integral of the derivative is the primitive's endpoint increment.

## Proof

1.1 Fix $x>0$ and $0<a<b$, and set $F_x(s)=\ln(x+s)-\ln(1+s)$ on the open interval $s>-\min(x,1)$, which contains $[a,b]$. The translated difference quotients in [F5] give $F_x'(s)=(x+s)^{-1}-(1+s)^{-1}$ throughout this open interval, so the restriction has the required one-sided derivatives at $a,b$ as well. Its derivative is continuous on $[a,b]$: for $s,t\in[a,b]$, $|(x+s)^{-1}-(x+t)^{-1}|\le|s-t|/(x+a)^2$ and $|(1+s)^{-1}-(1+t)^{-1}|\le|s-t|/(1+a)^2$. Thus [F7] makes that derivative integrable, and [F8] gives $\int_a^b((x+s)^{-1}-(1+s)^{-1})\,ds=F_x(b)-F_x(a)=\ln(x+b)-\ln(1+b)-\ln(x+a)+\ln(1+a)$. By [F6], $F_x(b)=\ln((x+b)/(1+b))\to\ln1=0$ as $b\to\infty$, while $F_x(a)\to\ln x$ as $a\downarrow0$. Hence the cutoff integral tends to $-\ln x$ for every positive $x$, including $x=1$, when the integrand is identically zero. Also $V^\dagger TV$ is positive definite: for $u\ne0$, [F4] gives $Vu\ne0$ and $\langle u,V^\dagger TVu\rangle=\langle Vu,TVu\rangle>0$ by [F2]. The finite spectral decompositions from [F3] therefore have only positive eigenvalues. Applying the scalar formula to each of their finitely many eigenvalues proves the claimed operator-norm integral formula for $T$ and $V^\dagger TV$; convergence is in norm because the maximum of finitely many scalar eigenvalue errors tends to zero. [given, F2, F3, F4, F5, F6, F7, F8, algebra]

2.1 For $0<a<b$, apply [F1] for each $s\in[a,b]$ and integrate the nonnegative operator difference. The scalar term $(1+s)^{-1}I$ cancels under compression because [F4] gives $V^\dagger V=I_H$. Thus $$V^\dagger\!\int_a^b\!((T+sI_K)^{-1}-(1+s)^{-1}I_K)\,ds\,V-\int_a^b\!((V^\dagger TV+sI_H)^{-1}-(1+s)^{-1}I_H)\,ds\succeq0.$$ [F1, F4, step 1.1, algebra]

3.1 The operator integrands are bounded near $s=0$ because both compressed and uncompressed operators have strictly positive smallest eigenvalue. For $s\ge1$, $(T+sI)^{-1}=s^{-1}I+O(s^{-2})$ and $(V^\dagger TV+sI)^{-1}=s^{-1}I+O(s^{-2})$ in operator norm by the finite spectral theorem; the $s^{-1}I$ terms cancel using [F4], leaving an integrable $O(s^{-2})$ difference. Hence the two truncated operators in step 2.1 converge in norm to $-\log T$ and $-\log(V^\dagger TV)$ as the cutoffs tend to $0$ and $+\infty$. Norm limits preserve nonnegative operator order because each quadratic form converges, proving the Statement. [F2, F3, F4, step 2.1, algebra] ∎

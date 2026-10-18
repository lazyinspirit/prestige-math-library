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

## Proof

1.1 For $x>0$ and $0<a<b$, direct integration gives $\int_a^b((x+s)^{-1}-(1+s)^{-1})\,ds=\ln(x+b)-\ln(1+b)-\ln(x+a)+\ln(1+a)$. Taking $a\downarrow0$ and $b\to\infty$ gives $-\ln x$. The spectra of $T$ and $V^\dagger TV$ lie in compact subintervals of $(0,\infty)$ by [F2] and positive definiteness, so applying this scalar identity to their finite spectral decompositions gives the corresponding operator-norm integral formula for each. [given, F2, algebra]

2.1 For $0<a<b$, apply [F1] for each $s\in[a,b]$ and integrate the nonnegative operator difference. The scalar term $(1+s)^{-1}I$ cancels under compression because [F4] gives $V^\dagger V=I_H$. Thus $$V^\dagger\!\int_a^b\!((T+sI_K)^{-1}-(1+s)^{-1}I_K)\,ds\,V-\int_a^b\!((V^\dagger TV+sI_H)^{-1}-(1+s)^{-1}I_H)\,ds\succeq0.$$ [F1, F4, step 1.1, algebra]

3.1 The operator integrands are bounded near $s=0$ because both compressed and uncompressed operators have strictly positive smallest eigenvalue. For $s\ge1$, $(T+sI)^{-1}=s^{-1}I+O(s^{-2})$ and $(V^\dagger TV+sI)^{-1}=s^{-1}I+O(s^{-2})$ in operator norm by the finite spectral theorem; the $s^{-1}I$ terms cancel using [F4], leaving an integrable $O(s^{-2})$ difference. Hence the two truncated operators in step 2.1 converge in norm to $-\log T$ and $-\log(V^\dagger TV)$ as the cutoffs tend to $0$ and $+\infty$. Norm limits preserve nonnegative operator order because each quadratic form converges, proving the Statement. [F2, F3, F4, step 2.1, algebra] ∎

---
id: lem-it-operator-jensen-negative-log
kind: lemma
title: The compression Jensen inequality for the negative logarithm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [lem-it-inverse-compression-resolvent, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-real-and-complex-inner-product-space, def-non-negative-and-positive-operator]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, let $T:K\to K$ be positive definite, and let $V:H\to K$ satisfy $V^*V=I_H$. Then, in the non-negative operator order,

$$-\ln(V^*TV)\preceq V^*(-\ln T)V,$$

where $R\preceq S$ means $S-R$ is non-negative and logarithms of positive-definite operators are defined by finite spectral calculus.

## Facts & Assumptions

**Given:** $H,K,T,V$ as in the Statement.

[F1] [[lem-it-inverse-compression-resolvent]]: $V^*(T+sI_K)^{-1}V\succeq(V^*TV+sI_H)^{-1}$ for every $s\ge0$.

[F2] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: the natural logarithm is defined on positive reals and has derivative $1/t$.

[F3] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint with nonnegative quadratic form.

## Proof

1.1 For every scalar $t>0$ and $R>0$, direct integration gives $\int_0^R((t+s)^{-1}-(1+s)^{-1})\,ds=\ln((t+R)/(1+R))-\ln t$. Letting $R\to\infty$ yields $-\ln t=\int_0^\infty((t+s)^{-1}-(1+s)^{-1})\,ds$. Diagonalizing a positive-definite operator applies this identity to each of its finitely many eigenvalues, with convergence in operator norm. [given, F2, algebra]

2.1 Since $V^*V=I_H$ and $T$ is positive definite, $V^*TV$ is positive definite on nonzero $H$: for $x\ne0$, $Vx\ne0$ and $\langle V^*TVx,x\rangle=\langle TVx,Vx\rangle>0$. Apply [F1] at each $s\ge0$. Subtracting $(1+s)^{-1}I_H$ preserves the order inequality. For every $x$, integrating the resulting quadratic-form inequality over $[0,R]$ gives a non-negative quadratic form; the operator norm limits as $R\to\infty$ exist by step 1.1, and the limit remains non-negative because quadratic forms are continuous. The limit is $-\ln(V^*TV)\preceq V^*(-\ln T)V$, as required. [given, F1, F3, step 1.1, algebra] ∎


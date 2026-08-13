---
id: cor-jacobian-determinant-of-a-holomorphic-map
kind: corollary
title: "The Jacobian determinant of a holomorphic map is $|f'|^2$ and is positive exactly where $f'\\ne0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       def-jacobian-matrix-and-gradient,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be holomorphic on an open set $U\subseteq\mathbb C$. At every $z\in U$,

$$ \det Jf(z)=|f'(z)|^2\ge0. $$

The determinant is positive exactly where $f'(z)\ne0$, and it is zero exactly where $f'(z)=0$; it is never negative.

## Facts & Assumptions

**Given:** A holomorphic map $f=u+iv$ and a point $z$ in its open domain.

[L1] If $f'(z)=a+ib$, then the real derivative matrix is $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F1] The Jacobian matrix is the matrix of the first partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[L2] Complex modulus satisfies $|a+ib|^2=a^2+b^2$, and $|w|=0$ if and only if $w=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [F1], $\det Jf(z)=a^2+b^2=|f'(z)|^2$. [given, L1, F1, L2, algebra]

2.1 The sum $a^2+b^2$ is nonnegative and, by [L2], is zero exactly when $f'(z)=0$; otherwise it is positive. [step 1.1, L2, algebra] ∎

---
id: def-rayleigh-quotient-iteration
kind: definition
title: "Rayleigh-quotient iteration for Hermitian matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inverse-and-shifted-inverse-iteration,
       def-self-adjoint-and-normal-endomorphism,
       def-inner-product-norm]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $A\in M_n(\mathbb F)$ be
self-adjoint (Hermitian in the complex case), and let $x_0\in\mathbb F^n$ have
unit length in the standard inner-product norm. The **Rayleigh-quotient
iteration** is the adaptive shifted inverse
iteration defined by

$$\mu_k:=\langle Ax_k,x_k\rangle,\qquad y_{k+1}:=(A-\mu_k I)^{-1}x_k,\qquad x_{k+1}:=\frac{y_{k+1}}{\|y_{k+1}\|_2}.$$

whenever $A-\mu_k I$ is invertible. Because $A$ is Hermitian and $x_k$ is unit
length, $\mu_k$ is the Rayleigh quotient $\langle Ax_k,x_k\rangle /
\langle x_k,x_k\rangle$. Thus each step uses the current Rayleigh quotient as
the shift.

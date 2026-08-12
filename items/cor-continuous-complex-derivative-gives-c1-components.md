---
id: cor-continuous-complex-derivative-gives-c1-components
kind: corollary
title: "A holomorphic function with continuous complex derivative has $C^1$ real and imaginary components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       def-complex-conjugate-real-imaginary-part-and-modulus]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.2.12(a)"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be holomorphic on an open set $U\subseteq\mathbb C$. If $f':U\to\mathbb C$ is continuous, then $u$ and $v$ are of class $C^1$ on $U$.

## Facts & Assumptions

**Given:** A holomorphic $f=u+iv$ on $U$ whose complex derivative $f'$ is continuous.

[L1] For a complex-differentiable map, $f'=u_x+iv_x=v_y-iu_y$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F1] If $w=a+bi$, then $\operatorname{Re}w=a$, $\operatorname{Im}w=b$, and $|w|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $u_x=\operatorname{Re}f'$, $v_x=\operatorname{Im}f'$, $u_y=-\operatorname{Im}f'$, and $v_y=\operatorname{Re}f'$ throughout $U$. [given, L1]

1.2 From [F1], $|\operatorname{Re}(w_1-w_2)|\le|w_1-w_2|$ and $|\operatorname{Im}(w_1-w_2)|\le|w_1-w_2|$, so the real and imaginary part maps are continuous. [F1, algebra]

2.1 Since $f'$ is continuous, steps 1.1–1.2 show that all four first partial derivatives of $u$ and $v$ are continuous. Hence both components are $C^1$. [step 1.1, step 1.2, given] ∎

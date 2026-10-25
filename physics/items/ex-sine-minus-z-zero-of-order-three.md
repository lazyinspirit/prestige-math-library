---
id: ex-sine-minus-z-zero-of-order-three
kind: example
title: "$\\sin z-z$ has a zero of order three at the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-order-of-zero-holomorphic-function, thm-zero-order-factorization-holomorphic-function, thm-complex-trigonometric-and-hyperbolic-power-series, cor-complex-power-series-coefficient-formula, cor-complex-trigonometric-and-hyperbolic-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Example 2.32"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Example

The entire function $h(z)=\sin z-z$ has a zero of order $3$ at $0$.

## Facts & Assumptions

**Given:** The function $h(z)=\sin z-z$.

[L1] The entire sine series is $\sin z=\sum_{n\ge0}(-1)^nz^{2n+1}/(2n+1)!$ and has infinite radius of convergence ([[thm-complex-trigonometric-and-hyperbolic-power-series]]).

[L2] The order $\operatorname{ord}_0(h)$ is the least natural index of a nonzero Taylor coefficient, and is $+\infty$ only when every coefficient is zero ([[def-order-of-zero-holomorphic-function]]).

[L3] Finite order $m$ is equivalent to a local factorization $h(z)=z^mg(z)$ with $g$ holomorphic and $g(0)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L4] Complex sine and cosine are entire and satisfy $\sin'=\cos$ and $\cos'=-\sin$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[L5] The coefficients of a convergent complex power-series representation are uniquely the Taylor coefficients at its centre ([[cor-complex-power-series-coefficient-formula]]).

## Verification

**Proof technique:** direct.

1.1 Subtracting $z$ from [L1] gives $h(z)=-z^3/3!+z^5/5!-z^7/7!+\cdots$. [L1, algebra]

2.1 By [L5], the convergent representation in step 1.1 is the Taylor series of $h$ at zero. Its coefficients in degrees $0$, $1$, and $2$ vanish, while the coefficient in degree $3$ is $-1/3!\ne0$, so [L2] gives $\operatorname{ord}_0(h)=3$. [step 1.1, L2, L5]

3.1 The factorization in [L3] therefore has $h(z)=z^3g(z)$ with $g(0)=-1/3!\ne0$; independently, [L4] and [L1] give $h'(0)=h''(0)=0$ and $h'''(0)=-\cos0=-1$, confirming the same order and sign. [step 2.1, L1, L3, L4] ∎

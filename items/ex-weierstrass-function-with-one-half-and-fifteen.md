---
id: ex-weierstrass-function-with-one-half-and-fifteen
kind: example
title: "The Weierstrass function with $a=1/2$ and $b=15$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-classical-weierstrass-function,
       thm-classical-weierstrass-series-converges-uniformly,
       thm-classical-weierstrass-function-nowhere-differentiable,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero, def-integer-power]
justified_by: []
aliases: []
landmark: true
short: "$W_{1/2,15}$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Example

The explicit series

$$W(x):=\sum_{n=0}^{\infty}2^{-n}\cos(15^n\pi x)$$

converges uniformly on $\mathbb R$, is continuous at every real point, and is
differentiable at no real point.

## Facts & Assumptions

**Given:** The parameters $a=1/2$ and $b=15$.

[L1] The unique smallest positive zero $\gamma$ of cosine lies in $(0,2)$ ([[thm-cosine-has-a-smallest-positive-zero]]).

[L2] The number $\pi$ is defined by $\pi=2\gamma$ ([[def-pi-via-first-positive-cosine-zero]]).

[L3] The classical Weierstrass function is $W_{a,b}(x)=\sum_{n=0}^{\infty}a^n\cos(b^n\pi x)$ ([[def-classical-weierstrass-function]]).

[L4] If $0<a<1$, $b>1$ is an odd integer, and $ab>1+3\pi/2$, then $W_{a,b}$ is continuous everywhere and differentiable nowhere ([[thm-classical-weierstrass-function-nowhere-differentiable]]).

[L5] For $0<a<1$ and odd integer $b>1$, the defining Weierstrass series converges uniformly on $\mathbb R$ ([[thm-classical-weierstrass-series-converges-uniformly]]).

## Verification

**Proof technique:** direct.

1.1 The integer $15$ is odd, $0<1/2<1$, and $15>1$. By [L1] and [L2], $\pi=2\gamma<4$, so $$1+\frac{3\pi}{2}<7<\frac{15}{2}=ab.$$ [L1, L2, algebra]

1.2 Substituting $a=1/2$ and $b=15$ in [L3] gives exactly the displayed series, including its $n=0$ term. [L3, construct]

2.1 Step 1.1 verifies every hypothesis of [L4]. The series in step 1.2 converges uniformly by [L5], and [L4] makes its sum continuous everywhere and differentiable nowhere. [step 1.1, step 1.2, L4, L5] ∎

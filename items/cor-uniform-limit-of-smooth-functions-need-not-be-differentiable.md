---
id: cor-uniform-limit-of-smooth-functions-need-not-be-differentiable
kind: corollary
title: "A uniform limit of smooth functions need not be differentiable anywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-classical-weierstrass-function,
       thm-classical-weierstrass-series-converges-uniformly,
       thm-classical-weierstrass-function-nowhere-differentiable,
       def-higher-derivatives-and-smoothness,
       thm-sine-and-cosine-derivatives, thm-chain-rule,
       thm-algebra-of-derivatives, cor-differentiable-implies-continuous,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: false
short: "smooth approximants, nowhere-differentiable limit"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Example 9.24"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

There is a sequence of smooth functions $S_N:\mathbb R\to\mathbb R$ that
converges uniformly on $\mathbb R$ to a continuous function which is
differentiable at no real point. Consequently, uniform convergence does not
preserve even first differentiability, despite every approximating function
being $C^\infty$.

## Facts & Assumptions

**Given:** The Weierstrass partial sums $S_N(x)=\sum_{n=0}^{N}a^n\cos(b^n\pi x)$.

[L1] A function is smooth, or $C^\infty$, when it is $C^k$ for every $k\in\mathbb N$ ([[def-higher-derivatives-and-smoothness]]).

[L2] The partial sums of the classical Weierstrass series converge uniformly to $W_{a,b}$ on $\mathbb R$ ([[thm-classical-weierstrass-series-converges-uniformly]]).

[L3] If $0<a<1$, $b>1$ is an odd integer, and $ab>1+3\pi/2$, then $W_{a,b}$ is continuous everywhere and differentiable nowhere ([[thm-classical-weierstrass-function-nowhere-differentiable]]).

[L4] Sine and cosine are differentiable on $\mathbb R$, and their derivatives are cosine and negative sine ([[thm-sine-and-cosine-derivatives]]).

[L5] The chain rule and the sum and scalar-multiple rules compute derivatives of finite sums and affine composites ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L6] Differentiable real functions are continuous ([[cor-differentiable-implies-continuous]]).

[L7] There is a unique $\gamma\in(0,2)$ with $\cos\gamma=0$, and $\pi=2\gamma$ ([[thm-cosine-has-a-smallest-positive-zero]], [[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** direct.

1.1 Choose $a=1/2$ and $b=15$. The integer $15$ is odd, and [L7] gives $\pi<4$, so $1+3\pi/2<7<15/2=ab$; all hypotheses of [L3] hold. [L3, L7, choose, algebra]

1.2 Repeated application of [L4] and [L5] shows that every derivative of every finite partial sum $S_N$ is a finite linear combination of sine and cosine functions. Those derivatives are continuous by [L6], so each $S_N$ is smooth in the sense of [L1]. [L1, L4, L5, L6, algebra]

2.1 By [L2], the smooth functions from step 1.2 converge uniformly on $\mathbb R$ to $W_{1/2,15}$. [step 1.2, L2]

2.2 The parameter check in step 1.1 lets [L3] identify this uniform limit as continuous everywhere and differentiable nowhere. [step 1.1, L3]

3.1 Thus the sequence in step 2.1 consists of smooth functions and converges uniformly to the nowhere-differentiable function in step 2.2. [step 2.1, step 2.2] ∎

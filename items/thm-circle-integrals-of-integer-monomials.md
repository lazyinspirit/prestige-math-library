---
id: thm-circle-integrals-of-integer-monomials
kind: theorem
title: "On a positively oriented circle about a, the integral of (z-a)^m is zero for every integer m except -1, and is 2 pi i for m=-1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-stieltjes-and-parametric-contour-integrals-agree, def-complex-integer-powers, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-ftc-second-part, def-vector-valued-derivative-and-integral]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Weber, Lecture Notes in Complex Analysis, Example 1.7.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $a\in\mathbb C$, $r>0$, and $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$. For every integer $m$,
$$\int_\gamma(z-a)^m\,dz=\begin{cases}2\pi i,&m=-1,\\0,&m\ne-1.\end{cases}$$

## Facts & Assumptions

**Given:** The positively oriented circle $\gamma$ and an integer $m$.

[L1] On a piecewise-$C^1$ contour, the Riemann–Stieltjes integral agrees with $\int f(\gamma(t))\gamma'(t)\,dt$ ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L2] Negative integer powers are defined exactly for nonzero complex bases ([[def-complex-integer-powers]]).

[L3] The complex exponential is entire with derivative itself and is additive under sums ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]]).

[L4] Euler's identity gives $\exp(2\pi i k)=1$ for every integer $k$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L5] If a real function $G$ is differentiable on $[a,b]$ and $G'$ is integrable, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] Derivatives and integrals of $\mathbb R^2$-valued functions are defined componentwise ([[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** cases.

1.1 Since $r>0$, $\gamma(t)-a\ne0$, so all integer powers in [L2] are defined. By [L1] and [L3], the integrand becomes $i r^{m+1}\exp(i(m+1)t)$. [L1, L2, L3, algebra]

2.1 If $m=-1$, the expression in step 1.1 is the constant $i$, whose integral from $0$ to $2\pi$ is $2\pi i$. [assume-case exceptional, step 1.1, algebra]

2.2 If $m\ne-1$, an antiderivative is $r^{m+1}\exp(i(m+1)t)/(m+1)$ by [L3]. Apply the real theorem [L5] to its two components using [L6]; the complex integral is the endpoint difference, which is $0$ by [L4]. [assume-case regular, step 1.1, L3, L4, L5, L6]

3.1 The integer cases $m=-1$ and $m\ne-1$ are exhaustive, proving the formula. [step 2.1, step 2.2, cases-exhaustive] ∎

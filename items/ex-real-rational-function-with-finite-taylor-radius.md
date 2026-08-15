---
id: ex-real-rational-function-with-finite-taylor-radius
kind: example
title: "The real function 1/(1+x^2) is smooth on the real line but its Maclaurin series has radius one"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, def-higher-derivatives-and-smoothness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For real $x$ with $|x|<1$,
$$\frac1{1+x^2}=\sum_{n=0}^{\infty}(-1)^nx^{2n}.$$
The function on the left is smooth on all of $\mathbb R$, but the displayed Maclaurin series has radius $1$.

## Facts & Assumptions

**Given:** The real rational function $f(x)=1/(1+x^2)$.

[L1] If $L=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}$, Cauchy–Hadamard gives radius $+\infty$ for $L=0$, radius $1/L$ for $0<L<+\infty$, and radius $0$ for $L=+\infty$ ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] Sums, products, and quotients with nonzero denominator obey the derivative algebra and quotient rule ([[thm-algebra-of-derivatives]]).

[L3] Sums, products, and quotients with nonzero denominator of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L4] Smooth means having continuous derivatives of every order ([[def-higher-derivatives-and-smoothness]]).

## Verification

**Proof technique:** direct.

1.1 The finite geometric identity with ratio $-x^2$ gives the displayed series for $|x|<1$; its coefficients at even indices have modulus $1$, so [L1] gives radius $1$. [L1, algebra]

1.2 Since $1+x^2>0$ for every real $x$, repeated use of [L2] expresses every derivative as a rational function whose denominator is a positive power of $1+x^2$; [L3] makes each such derivative continuous. [L2, L3, algebra]

2.1 Therefore $f$ is smooth by [L4] while its Maclaurin series has finite radius. [step 1.1, step 1.2, L4] ∎

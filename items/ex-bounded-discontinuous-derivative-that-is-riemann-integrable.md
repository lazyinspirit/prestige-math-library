---
id: ex-bounded-discontinuous-derivative-that-is-riemann-integrable
kind: example
title: "$G(x)=x^2\\sin(1/x)$ has a bounded derivative discontinuous at $0$ that is nevertheless Riemann integrable, and Newton–Leibniz evaluates its integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-newton-leibniz-with-interior-derivative, cor-countably-many-discontinuities-integrable, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Example 12.2"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf"
pipeline_run: null
---

## Example

Define $G:[0,1]\to\mathbb R$ by

$$G(0)=0,\qquad G(x)=x^2\sin(1/x)\quad(0<x\le1).$$

Then $G$ is differentiable on $[0,1]$, with

$$G'(0)=0,\qquad G'(x)=2x\sin(1/x)-\cos(1/x)\quad(0<x\le1).$$

The derivative is bounded and is continuous except at $0$, but it is not continuous at $0$. Consequently $G'$ is Riemann integrable and

$$\int_0^1G'(x)\,dx=G(1)-G(0)=\sin1.$$

Moreover, arbitrarily near $0$ the derivative takes the values $-1$ and $1$ up to terms tending to $0$: at $x_k=1/(2\pi k)$ and $y_k=1/((2k+1)\pi)$, $G'(x_k)=-1$ and $G'(y_k)=1$ for every integer $k\ge1$.

## Facts & Assumptions

**Given:** The function $G$ above.

[L1] Sine and cosine are differentiable with derivatives cosine and negative sine; the chain and product rules apply ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L2] $|\sin t|\le1$ and $|\cos t|\le1$ for every real $t$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] The number $\pi$ is positive, and shifts by $\pi$ alternate the signs of sine and cosine ([[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L4] A bounded function with an at-most-countable discontinuity set is Riemann integrable ([[cor-countably-many-discontinuities-integrable]]).

[L5] Newton--Leibniz holds for a continuous function with an interior derivative having an integrable extension ([[thm-newton-leibniz-with-interior-derivative]]).

## Verification

**Proof technique:** direct.

1.1 Since $|G(x)|\le x^2$, the quotient $(G(x)-G(0))/x$ has absolute value at most $x$ and tends to $0$; hence $G'(0)=0$. [given, L2]

1.2 For $x>0$, [L1] gives $G'(x)=2x\sin(1/x)-\cos(1/x)$. [given, L1]

2.1 By [L2], $|G'(x)|\le2x+1\le3$ on $(0,1]$, so $G'$ is bounded. The displayed formula is continuous away from $0$. [step 1.2, L2]

2.2 By [L3], sine vanishes and cosine equals $1$ at $2\pi k$, while sine vanishes and cosine equals $-1$ at $(2k+1)\pi$; substituting gives $G'(x_k)=-1$ and $G'(y_k)=1$. Both sequences tend to $0$, so $G'$ is discontinuous there. [step 1.2, L3]

3.1 Thus the discontinuity set is exactly $\{0\}$, and [L4] makes $G'$ Riemann integrable. [step 2.1, step 2.2, L4]

4.1 Applying [L5] to $G$ and $G'$ yields $\int_0^1G'=G(1)-G(0)=\sin1$. [step 1.1, step 1.2, step 3.1, L5] ∎

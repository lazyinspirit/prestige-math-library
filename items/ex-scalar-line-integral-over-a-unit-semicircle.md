---
id: ex-scalar-line-integral-over-a-unit-semicircle
kind: example
title: "The scalar line integral of x over the right unit semicircle equals two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-oriented-reparametrization, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 9.2.16"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Example

Let $\gamma(t)=(\cos t,\sin t)$ for $-\pi/2\leq t\leq\pi/2$, oriented from the bottom to the top of the right unit semicircle. For the scalar field $f(x,y)=x$,

$$\int_\gamma x\,ds=2.$$

## Facts & Assumptions
**Given:** The path and scalar field in the Example.

[L1] A scalar line integral is $\int f(\gamma(t))\lVert\gamma'(t)\rVert_2dt$ on a $C^1$ piece ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] Sine and cosine have derivatives $\cos t$ and $-\sin t$, satisfy $\sin^2t+\cos^2t=1$, and have values $\sin(\pi/2)=1$ and $\sin(-\pi/2)=-1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L3] Newton-Leibniz integrates an interior derivative by its endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).

[L4] Scalar line integrals are unchanged by orientation reversal ([[thm-line-integrals-under-oriented-reparametrization]]).



## Verification

**Proof technique:** direct.

1.1 By [L2], $\gamma'(t)=(-\sin t,\cos t)$ and $\lVert\gamma'(t)\rVert_2=1$, while $f(\gamma(t))=\cos t$. [given, L2, algebra]

2.1 By [L1], [L2], and [L3], $$\int_\gamma x\,ds=\int_{-\pi/2}^{\pi/2}\cos t\,dt =\sin(\pi/2)-\sin(-\pi/2)=2.$$ [step 1.1, L1, L2, L3, algebra]

3.1 Reversing the path leaves the value $2$ unchanged by [L4], confirming that the scalar $ds$ integral does not depend on orientation. [step 2.1, L4] ∎

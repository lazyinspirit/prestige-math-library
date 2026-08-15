---
id: thm-complex-sine-and-cosine-are-unbounded
kind: theorem
title: "Complex sine and cosine are unbounded on the complex plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-trigonometric-hyperbolic-dictionary, def-complex-trigonometric-and-hyperbolic-functions, thm-complex-exponential-addition-and-real-extension, thm-exponential-limits-and-range]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Neither $\sin:\mathbb C\to\mathbb C$ nor $\cos:\mathbb C\to\mathbb C$ is bounded.

## Facts & Assumptions

**Given:** A positive real variable $y$.

[L1] For every complex $z$, $\sinh z=-i\sin(iz)$ and $\cosh z=\cos(iz)$ ([[thm-complex-trigonometric-hyperbolic-dictionary]]).

[L2] For real $y$, the complex exponential equals the real exponential, and $\exp(y)\to+\infty$ while $\exp(-y)\to0$ as $y\to+\infty$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-exponential-limits-and-range]]).

[L3] The definitions give $\sinh y=(\exp y-\exp(-y))/2$ and $\cosh y=(\exp y+\exp(-y))/2$ ([[def-complex-trigonometric-and-hyperbolic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Substituting the real $y$ into [L1] gives $\sin(iy)=i\sinh y$ and $\cos(iy)=\cosh y$. [L1, algebra]

1.2 By [L2] and [L3], both positive real quantities $\sinh y$ and $\cosh y$ tend to $+\infty$ as $y\to+\infty$. [L2, L3, algebra]

2.1 Hence $|\sin(iy)|=\sinh y$ and $|\cos(iy)|=\cosh y$ are unbounded along the imaginary axis, so both complex functions are unbounded. [step 1.1, step 1.2] ∎

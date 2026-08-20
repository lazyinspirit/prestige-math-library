---
id: fs-entire-bounded-on-real-axis-is-constant
kind: false-statement
title: "FALSE: an entire function bounded on the real axis is constant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-trigonometric-and-hyperbolic-power-series, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-complex-trigonometric-hyperbolic-dictionary, cor-trigonometric-parity-and-pythagorean-identity, thm-liouville-bounded-entire-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

**False claim:** If an entire function is bounded on the real axis, then it is constant.

## Facts & Assumptions

**Given:** The complex sine function.

[L1] The complex sine and cosine power series have infinite radius of convergence ([[thm-complex-trigonometric-and-hyperbolic-power-series]]).

[L2] Complex sine restricts to the published real sine function on the real axis ([[thm-complex-trigonometric-hyperbolic-dictionary]]).

[L3] For every real $x$, $|\sin x|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Complex sine and cosine are entire and satisfy $\sin'=\cos$ and $\cos'=-\sin$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1] and [L4], complex sine is entire; by [L2] and [L3], its restriction to the real axis satisfies $|\sin x|\le1$ for every real $x$. [L1, L2, L3, L4]

1.2 By [L4], the derivative of sine is cosine, and the series in [L1] gives $\cos0=1$, so sine has a nonzero derivative and is not constant. [L1, L4, algebra]

2.1 Steps 1.1 and 1.2 give an entire function bounded on the real axis but not constant, refuting the claim; this does not contradict [[thm-liouville-bounded-entire-function]], whose hypothesis is boundedness on the whole complex plane. [step 1.1, step 1.2] ∎

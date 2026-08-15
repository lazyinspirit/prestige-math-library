---
id: cor-complex-trigonometric-and-hyperbolic-derivatives
kind: corollary
title: "Complex sine, cosine, hyperbolic sine, and hyperbolic cosine are entire with their standard derivatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-trigonometric-and-hyperbolic-power-series, thm-termwise-differentiation-of-complex-power-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

The functions $\sin,\cos,\sinh,\cosh$ are entire and satisfy
$$\sin'=\cos,\qquad \cos'=-\sin,\qquad \sinh'=\cosh,\qquad \cosh'=\sinh.$$

## Facts & Assumptions

**Given:** The four entire power series of [[thm-complex-trigonometric-and-hyperbolic-power-series]].

[L1] A complex power series may be differentiated term by term inside its radius ([[thm-termwise-differentiation-of-complex-power-series]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to each of the four infinite-radius series and cancel the positive integer factor against the factorial. [L1, algebra]

2.1 Shifting the resulting indices gives respectively the series for $\cos,-\sin,\cosh,\sinh$. Infinite radius makes each function entire. [step 1.1] ∎

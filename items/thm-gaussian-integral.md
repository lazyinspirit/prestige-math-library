---
id: thm-gaussian-integral
kind: theorem
title: "The Gaussian integral $\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt{\\pi}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gaussian-integral-is-finite-and-positive, lem-gaussian-square-is-the-plane-gaussian-integral, lem-plane-gaussian-integral-in-polar-coordinates, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
short: "$\\int e^{-x^2}=\\sqrt\\pi$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "W. F. Trench, Functions Defined by Improper Integrals, Example 12"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Statement

$$\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi.$$

## Facts & Assumptions

**Given:** Write $I:=\int_{-\infty}^{\infty}e^{-x^2}\,dx$.

[L1] The integral $I$ exists as a finite positive real number ([[lem-gaussian-integral-is-finite-and-positive]]).

[L2] One has $I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}\,d(x,y)$ ([[lem-gaussian-square-is-the-plane-gaussian-integral]]).

[L3] The plane integral equals $\pi$ ([[lem-plane-gaussian-integral-in-polar-coordinates]]).

[L4] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $I>0$, and [L2] with [L3] gives $I^2=\pi$. [L1, L2, L3]

2.1 Since $I$ is nonnegative, uniqueness in [L4] identifies it with $\sqrt\pi$. [step 1.1, L4] ∎

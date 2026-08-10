---
id: ex-lhopital-rational-removable-quotient
kind: example
title: "L'Hôpital evaluates $\\lim_{x\\to1}(x^3-x)/(x^2-1)$ as $1$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-lhopital-zero-over-zero, thm-algebra-of-derivatives, lem-derivative-of-a-power, thm-algebra-of-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Example

At $x=1$,
$$\lim_{x\to1}\frac{x^3-x}{x^2-1}=1.$$

## Facts & Assumptions

**Given:** The displayed quotient on a punctured neighbourhood of $1$.

[L1] The zero-over-zero theorem is [[thm-lhopital-zero-over-zero]].

[L2] Power derivatives and limit algebra are [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], and [[thm-algebra-of-function-limits]].

## Verification

**Proof technique:** direct.

1.1 Numerator and denominator tend to $0$, the denominator derivative $2x$ is nonzero near $1$, and the derivative quotient $(3x^2-1)/(2x)$ tends to $1$.  [L2, algebra]

2.1 Applying [L1] gives the limit $1$. Direct factorization to $x$ away from $x=\pm1$ confirms the removable nature of the quotient at $1$.  [step 1.1, L1, algebra] ∎

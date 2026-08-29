---
id: ex-region-under-x-squared-has-measure-one-third
kind: example
title: "The region under x maps to x^2 on [0,1] has measure 1/3"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral, thm-ftc-second-part]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.7.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

The set
$$R:=\{(x,t)\in[0,1]\times\mathbb R: 0\le t<x^2\}$$
has planar Lebesgue measure $1/3$.

## Facts & Assumptions

**Given:** The function $f(x)=x^2$ on $[0,1]$.

[L1] The region under a nonnegative measurable function has product measure
equal to its integral.
([[thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral]])

[L2] The fundamental theorem of calculus evaluates $\int_0^1 x^2\,dx$.
([[thm-ftc-second-part]])

## Verification

**Proof technique:** direct.

1.1 Applying [L1] to $f(x)=x^2$ gives [L1]
$$\lambda_2(R)=\int_0^1 x^2\,dx.$$

2.1 Since $(x^3/3)'=x^2$, [L2] gives [L2, step 1.1]
$$\lambda_2(R)=\int_0^1 x^2\,dx=\frac13.$$
∎

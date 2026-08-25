---
id: ex-the-first-coefficients-of-the-catalan-generating-function
kind: example
title: "The first coefficients of the Catalan generating function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-catalan-generating-function-satisfies-a-quadratic-equation, thm-catalan-generating-function-closed-form, lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x, def-catalan-generating-function, prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Example

Up to degree $5$,

$$C(x)=1+x+2x^2+5x^3+14x^4+42x^5+O(x^6),$$

so

$$1-2xC(x)=1-2x-2x^2-4x^3-10x^4-28x^5+O(x^6).$$

## Facts & Assumptions

**Given:** the Catalan generating function $C(x)$.

[L1] $C(x)=1+xC(x)^2$ ([[thm-catalan-generating-function-satisfies-a-quadratic-equation]]).

[L2] $(1-2xC(x))^2=1-4x$ ([[thm-catalan-generating-function-closed-form]]).

[L3] $(1-4x)^{1/2}=1-2x-2x^2-4x^3-10x^4-28x^5+O(x^6)$ ([[lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x]]).

## Verification

**Proof technique:** direct.

1.1 Using the coefficients $1,1,2,5,14,42$, the Cauchy product gives $C(x)^2=1+2x+5x^2+14x^3+42x^4+132x^5+O(x^6)$, so $1+xC(x)^2$ agrees with $C(x)$ through degree $5$, as [L1] says it should. [L1]

1.2 The displayed coefficients of $1-2xC(x)$ are exactly those of [L3], so the closed form predicts $1-2xC(x)=(1-4x)^{1/2}$ modulo $x^6$. [L3]

2.1 Squaring $1-2x-2x^2-4x^3-10x^4-28x^5$ gives $1-4x$ modulo $x^6$, which matches [L2]. [L2, step 1.2] ∎

## Remarks

- This is the finite coefficient check behind the formal closed form. The theorem on the A page proves the identity in all degrees; the example shows the first place where the numbers become recognisably Catalan.

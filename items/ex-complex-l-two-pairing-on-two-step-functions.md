---
id: ex-complex-l-two-pairing-on-two-step-functions
kind: example
title: "Two-step functions expose the $L^2$ conjugation convention"
status: draft
origin: pipeline
landmark: false
deps: [thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-nonnegative-lebesgue-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, def-integral-of-a-nonnegative-simple-function]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: "Integrate the two disjoint constant pieces and compute both scalar placements."
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.2 p=2 discussion; original finite-step calculation."
---

## Example

Assume countable choice and use Lebesgue measure on $\mathbb R$. Set
$$f=\mathbf1_{[0,1)}+i\mathbf1_{[1,2)},\qquad g=i\mathbf1_{[0,1)}+\mathbf1_{[1,2)}.$$
Then $\|f\|_2=\|g\|_2=\sqrt2$, but $\langle f,g\rangle=0$ while $\int fg=2i$. Moreover $\langle if,f\rangle=2i$ and $\langle f,if\rangle=-2i$. Thus the bilinear integral is not the $L^2$ inner product.

## Facts & Assumptions

**Given:** Countable choice and the two disjoint unit intervals with the displayed complex coefficients.

[F1] The $L^2$ pairing conjugates the second function, is linear in the first, and equals the squared norm on the diagonal ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F2] Under countable choice each of the half-open intervals has Lebesgue measure its length, here one ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The nonnegative simple integral is the sum of values times measures ([[def-integral-of-a-nonnegative-simple-function]]).

[F4] Complex integrals are linear ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Verification

**Proof technique:** Integrate the two disjoint constant pieces and compute both scalar placements.

1.1 F2 gives measure one to both intervals; they are disjoint, and both functions vanish elsewhere. Their squared moduli are each $\mathbf1_{[0,1)}+\mathbf1_{[1,2)}$, so F3 gives $\|f\|_2^2=\|g\|_2^2=1+1=2$. Thus both are integrable $L^2$ representatives. [F2, F3, given]

2.1 On the first interval $f\overline g=1\cdot(-i)=-i$ and on the second it is $i\cdot1=i$. F1 and F4 therefore give $\langle f,g\rangle=(-i)\cdot1+i\cdot1=0$. The bilinear product instead has value $i$ on each interval, so $\int fg=i\cdot1+i\cdot1=2i$. [F1, F2, F4, step 1.1]

3.1 The coefficients of $if$ are $i,-1$ and those of $\overline f$ are $1,-i$, so $(if)\overline f$ has values $i,i$. Hence $\langle if,f\rangle=2i$. The coefficients of $\overline{if}$ are $-i,-1$, so $f\overline{if}$ has values $-i,-i$ and $\langle f,if\rangle=-2i$. These computations agree with first-variable linearity and second-variable conjugate-linearity and show concretely why the bilinear expression cannot replace the inner product. [F1, F2, F4, step 1.1, step 2.1] ∎

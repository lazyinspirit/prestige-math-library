---
id: ex-interpolation-of-an-integral-averaging-operator
kind: example
title: Interpolation of an averaging operator on a probability space
deps: [cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime, thm-integral-triangle-inequality, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Teschl Theorem 15.2; explicit averaging specialization
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
  scraped: []
status: draft
origin: pipeline
generation:
  role: example
proof_strategy: direct
---

## Example

On a probability space define $Pf=(\int f\,d\mu)\mathbf1_X$ for complex finite simple f. This is a complex-linear operator with $L^1\to L^\infty$ and $L^2\to L^2$ norms at most one. Consequently $\|Pf\|_{p'}\le\|f\|_p$ for $1\le p\le2$.

## Facts & Assumptions

[F1] The absolute value of an integrable function’s integral is at most the integral of its modulus [[thm-integral-triangle-inequality]].

[F2] Complex Cauchy–Schwarz bounds the pairing with the constant one [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F3] The core endpoint estimates interpolate to the conjugate-exponent estimate [[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]].

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Every finite simple function on a probability space is integrable; finite sums in its integral show that P is complex-linear. The constant one has every displayed norm equal to one. Hence $\|Pf\|_\infty=|\int f|\le\int|f|=\|f\|_1$ by the integral triangle inequality. In particular $P\mathbf1_X=\mathbf1_X$, so the bound is attained on this input. [F1, given]

2.1 Complex Cauchy–Schwarz against the constant one gives $\|Pf\|_2=|\langle f,1\rangle|\le\|f\|_2\|1\|_2=\|f\|_2$. Every probability space is sigma-finite, with the constant exhaustion X, so F3 applies with A=B=1 to give $\|Pf\|_{p'}\le\|f\|_p$ for interior p. The endpoint estimates are the two calculations above. [F2, F3, step 1.1] ∎

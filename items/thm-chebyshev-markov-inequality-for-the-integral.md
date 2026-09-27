---
id: thm-chebyshev-markov-inequality-for-the-integral
kind: theorem
title: "Chebyshev-Markov inequality for the integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, ch. 4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $f:X\to[0,+\infty]$ be measurable and let $t>0$. Then
$$\mu(\{f\ge t\})\le\frac1t\int f\,d\mu.$$

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$ and a real number $t>0$.

[L1] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] For measurable $E$ and $t>0$, the nonnegative integral of the simple function $t\chi_E$ is $t\mu(E)$ ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

## Proof

**Proof technique:** direct.

1.1 Put $E:=\{f\ge t\}$, which is measurable. Since $t\chi_E\le f$, [L1] and [L2] give $$t\,\mu(E)=\int t\chi_E\,d\mu\le\int f\,d\mu.$$ [L1, L2, given]

2.1 Dividing by the positive real $t$ gives $$\mu(\{f\ge t\})\le t^{-1}\int f\,d\mu.$$ [step 1.1, algebra] ∎

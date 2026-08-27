---
id: thm-chebyshev-markov-inequality-for-the-integral
kind: theorem
title: "Chebyshev-Markov inequality for the integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
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

## Proof

**Proof technique:** direct.

1.1 If $E:=\{f\ge t\}$, then $t\chi_E\le f$. Applying [L1] gives[L1, given]
$$t\,\mu(E)=\int t\chi_E\,d\mu\le\int f\,d\mu.$$


2.1 Dividing by the positive number $t$ yields[step 1.1, algebra] ∎
$$\mu(\{f\ge t\})\le t^{-1}\int f\,d\mu.$$


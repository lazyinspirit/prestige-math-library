---
id: thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one
kind: theorem
title: "The $p$-power triangle inequality for nonnegative functions when $0 < p < 1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-calligraphic-l-p-on-a-measure-space, thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: "For nonnegative numbers a, b and 0 < p < 1 one has (a + b)^p <= a^p + b^p. Apply this pointwise to f and g and integrate."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, reverse inequality discussion before Definition 7.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $0<p<1$ and let $f,g\in\mathcal L^p(\mu)$ be nonnegative. Then

$$\|f+g\|_p^p\le\|f\|_p^p+\|g\|_p^p.$$

Equivalently,

$$\int (f+g)^p\,d\mu\le\int f^p\,d\mu+\int g^p\,d\mu.$$

## Facts & Assumptions

**Given:** An exponent $0<p<1$ and nonnegative functions
$f,g\in\mathcal L^p(\mu)$.

[L1] For $0<p<1$ and nonnegative reals $a,b$ one has
$(a+b)^p\le a^p+b^p$
([[thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]]).

[L2] The nonnegative integral is monotone and additive
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** For nonnegative numbers $a,b$ and $0<p<1$ one has
$(a+b)^p\le a^p+b^p$. Apply this pointwise to $f$ and $g$ and integrate.

1.1 The scalar inequality [L1] applied pointwise gives [L1, given]
$$(f+g)^p\le f^p+g^p.$$

2.1 Integrating and using monotonicity and additivity from [L2] yields [step 1.1, L2]
$$\int (f+g)^p\,d\mu\le\int f^p\,d\mu+\int g^p\,d\mu.$$
This is exactly the displayed $\|\,\cdot\,\|_p^p$ inequality.
∎

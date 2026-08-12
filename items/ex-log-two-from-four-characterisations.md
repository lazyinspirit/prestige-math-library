---
id: ex-log-two-from-four-characterisations
kind: example
title: "Log 2 from four characterisations: hyperbolic area, the alternating harmonic series, Landau iterates and exp^{-1}(2)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-logarithm-definition-equivalence,
       thm-log-one-plus-x-power-series, thm-landau-logarithm-limit,
       def-natural-logarithm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Example

The number $\log2$ has the four equal descriptions

$$\int_1^2\frac{dt}{t} =\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n =\lim_{n\to\infty}2^n\left(2^{1/2^n}-1\right) =\exp^{-1}(2).$$

## Facts & Assumptions

**Given:** The positive input $2$.

[L1] The inverse-exponential, integral, continued Mercator, Landau-limit, and
normalised functional-equation characterisations all define $\log$
([[thm-logarithm-definition-equivalence]]).

[L2] At $u=1$, the Mercator theorem gives
$\log2=\sum_{n=1}^{\infty}(-1)^{n+1}/n$
([[thm-log-one-plus-x-power-series]]).

[L3] For $x>0$,
$\log x=\lim_{n\to\infty}2^n(x^{1/2^n}-1)$
([[thm-landau-logarithm-limit]]).

[F1] The natural logarithm is the inverse of exponential
([[def-natural-logarithm]]).

## Verification

**Proof technique:** direct.

1.1 Apply the integral characterisation in [L1] at $x=2$ to obtain $\log2=\int_1^2dt/t$. [L1]
1.2 Apply [L2] to obtain the alternating harmonic series value. [L2]
1.3 Apply [L3] at $x=2$ to obtain the Landau limit. [L3]
1.4 By [F1], $\log2$ is the unique real $y$ with $\exp(y)=2$, namely $\exp^{-1}(2)$. [F1]
2.1 Steps 1.1 through 1.4 identify all four displayed quantities with the same value, as asserted by the equivalence theorem [L1]. [step 1.1, step 1.2, step 1.3, step 1.4, L1] ∎

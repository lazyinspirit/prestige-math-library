---
id: prop-order-and-scalar-rules-for-the-nonnegative-integral
kind: proposition
title: "Monotonicity and nonnegative homogeneity of the nonnegative integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $f,g:X\to[0,+\infty]$ be measurable and let $c\ge0$.

1. If $f\le g$, then $\int f\,d\mu\le\int g\,d\mu$.
2. $\int cf\,d\mu=c\int f\,d\mu$.

## Facts & Assumptions

**Given:** Nonnegative measurable functions $f,g$ and a scalar $c\ge0$.

[L1] The nonnegative integral is the supremum of simple minorants ([[def-nonnegative-lebesgue-integral]]).

[L2] On simple functions, the nonnegative and simple integrals agree ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $f\le g$, every simple minorant of $f$ is also a simple minorant of $g$. [L1, given]
Taking suprema in [L1] gives $\int f\,d\mu\le\int g\,d\mu$.

1.2 If $c=0$, both sides are $0$. Assume $c>0$. Multiplication by $c$ carries [L1, L2, given, algebra]
simple minorants of $f$ bijectively onto simple minorants of $cf$, and [L2]
scales their integrals by the same factor. Taking suprema in [L1] yields
$\int cf\,d\mu=c\int f\,d\mu$.

2.1 Steps 1.1 and 1.2 prove the monotonicity and nonnegative homogeneity rules.[step 1.1, step 1.2] ∎

---
id: prop-order-and-scalar-rules-for-the-nonnegative-integral
kind: proposition
title: "Monotonicity and nonnegative homogeneity of the nonnegative integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-basic-properties-of-the-nonnegative-simple-integral]
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
2. If $c>0$, then $\int cf\,d\mu=c\int f\,d\mu$. For $c=0$,
   the integral of the zero function is $0$. Neither clause forms the
   undefined extended-real product $0\cdot(+\infty)$.

## Facts & Assumptions

**Given:** Nonnegative measurable functions $f,g$ and a scalar $c\ge0$.

[L1] The nonnegative integral is the supremum of simple minorants ([[def-nonnegative-lebesgue-integral]]).

[L2] On simple functions, the nonnegative and simple integrals agree ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[L3] The simple integral is homogeneous for positive scalars and has zero
integral on the zero simple function
([[prop-basic-properties-of-the-nonnegative-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $f\le g$, every simple minorant of $f$ is also a simple minorant of $g$. [L1, given]
Taking suprema in [L1] gives $\int f\,d\mu\le\int g\,d\mu$.

1.2 The zero function has just one nonnegative simple minorant: itself. [L1, L2, L3]
Its simple integral is $0$ by [L3], so [L1] gives integral $0$ for the zero
function, even on a space of infinite measure.

1.3 For $c>0$, multiplication by $c$ bijects simple minorants of $f$ with those of $cf$. [L1, given, algebra]
The inverse divides by $c$ and preserves nonnegativity and simplicity.
By [L2] and [L3], the corresponding simple integrals differ by the factor
$c$. Multiplication by a positive finite real commutes with the supremum
in $[0,+\infty]$, including when that supremum is infinite. Hence
$\int cf\,d\mu=c\int f\,d\mu$. Together with steps 1.1 and 1.2,
this proves both clauses. ∎

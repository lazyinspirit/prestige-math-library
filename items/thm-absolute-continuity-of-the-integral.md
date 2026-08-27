---
id: thm-absolute-continuity-of-the-integral
kind: theorem
title: "Absolute continuity of the integral"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.16"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $f\in L^1(\mu)$ and let $\varepsilon>0$. Then there is $\delta>0$ such that
for every measurable $E$,
$$\mu(E)<\delta\qquad\Longrightarrow\qquad\int_E|f|\,d\mu<\varepsilon.$$

## Facts & Assumptions

**Given:** An integrable function $f$ and a real number $\varepsilon>0$.

[L1] The truncations $|f|\wedge n$ increase pointwise to $|f|$, so their integrals converge to $\int|f|\,d\mu$ by monotone convergence ([[thm-monotone-convergence-for-the-integral]]).

[L2] The integral over a measurable set is defined by $\int_E h\,d\mu=\int h\chi_E\,d\mu$ ([[def-integral-over-a-measurable-set]]).

[L3] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L4] Integrability means $\int|f|\,d\mu<+\infty$ ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Choose $n$ so large that [L1, L4, choose]
$$\int\bigl(|f|-|f|\wedge n\bigr)\,d\mu<\varepsilon/2,$$
which is possible by [L1] and [L4]. Put $\delta:=\varepsilon/(2n+1)$.

2.1 If $\mu(E)<\delta$, then [step 1.1, L2, L3, algebra] ∎
$$\int_E|f|\,d\mu\le\int_E(|f|\wedge n)\,d\mu+\int\bigl(|f|-|f|\wedge n\bigr)\,d\mu \le n\mu(E)+\varepsilon/2<\varepsilon,$$
using [L2] and [L3] for the first term.

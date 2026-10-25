---
id: thm-absolute-continuity-of-the-integral
kind: theorem
title: "Absolute continuity of the integral"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-receipts.jsonl (thm-absolute-continuity-of-the-integral). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L5] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 Put $h_n=|f|-|f|\wedge n\ge0$. The pointwise identity $|f|=(|f|\wedge n)+h_n$ and [L5] give $\int h_n=\int|f|-\int(|f|\wedge n)$; the subtraction is valid because both integrals are finite by [L4]. By [L1] choose $n$ so large that $\int h_n\,d\mu<\varepsilon/2$, and put $\delta:=\varepsilon/(2n+1)$. [L1, L4, L5, choose]

2.1 If $\mu(E)<\delta$, then [L2], [L3], and [L5] give $\int_E|f|\,d\mu=\int_E(|f|\wedge n)\,d\mu+\int_Eh_n\,d\mu\le n\mu(E)+\int h_n\,d\mu<n\delta+\varepsilon/2<\varepsilon$. The last inequality follows from $n/(2n+1)<1/2$. [step 1.1, L2, L3, L5, algebra] ∎

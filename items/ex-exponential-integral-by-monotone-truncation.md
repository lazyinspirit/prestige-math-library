---
id: ex-exponential-integral-by-monotone-truncation
kind: example
title: "The exponential tail function is integrable by monotone truncation and geometric comparison"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-geometric-series, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Example

The function $x\mapsto e^{-x}$ on $[0,\infty)$ is Lebesgue integrable.

## Facts & Assumptions

**Given:** The function $f(x)=e^{-x}$ on $[0,\infty)$.

[L1] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L2] Intervals have the expected Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L3] The geometric series with ratio $e^{-1}$ converges ([[thm-geometric-series]]).

[L4] The nonnegative integral is additive on measurable sets ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Verification

**Proof technique:** direct.

1.1 Let $f_n:=e^{-x}\chi_{[0,n]}$. Then $f_n\uparrow f$. For each $k\ge0$ and [L1, L2, construct]
$x\in[k,k+1]$, one has $e^{-x}\le e^{-k}$, so
$$\int_{[k,k+1]}f_n\,d\lambda\le e^{-k}\lambda([k,k+1])=e^{-k}$$
by [L2].

2.1 Additivity [L4] therefore gives [step 1.1, L1, L3, L4] ∎
$$\int f_n\,d\lambda\le\sum_{k<n}e^{-k},$$
and the right-hand side is bounded independently of $n$ by [L3]. Passing to
the limit with [L1] shows $\int_0^\infty e^{-x}\,d\lambda<+\infty$.

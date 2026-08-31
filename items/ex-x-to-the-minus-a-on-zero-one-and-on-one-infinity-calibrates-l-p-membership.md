---
id: ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership
kind: example
title: "$x^{-a}$ on $(0,1)$ and on $(1,\\infty)$ calibrates $L^p$ membership"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-calligraphic-l-p-on-a-measure-space, thm-real-power-continuity-and-derivatives, thm-logarithm-derivative-and-integral, thm-comparison-test-for-improper-integrals]
proof_strategy: "Integrate x^(-ap) on (0, 1) and on (1, infinity) using the real-power antiderivative and compare the two thresholds ap < 1 and ap > 1."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Chapter 17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

Fix $a>0$ and let

$$f_0(x):=x^{-a}\chi_{(0,1)}(x),\qquad f_\infty(x):=x^{-a}\chi_{(1,\infty)}(x)$$

on $\mathbb R$ with Lebesgue measure. Then for every $p>0$:

1. $f_0\in\mathcal L^p$ exactly when $ap<1$.
2. $f_\infty\in\mathcal L^p$ exactly when $ap>1$.

So the single power family produces both inclusion failures on $\mathbb R$.

## Facts & Assumptions

**Given:** Real numbers $a>0$ and $p>0$.

[L1] Membership in $\mathcal L^p$ means finiteness of $\int |f|^p\,d\mu$
([[def-calligraphic-l-p-on-a-measure-space]]).

[L2] Positive-base power functions have the usual antiderivatives away from the
logarithmic endpoint, and $\int dx/x=\log x$
([[thm-real-power-continuity-and-derivatives]],
[[thm-logarithm-derivative-and-integral]]).

[L3] The comparison tests for improper integrals are available
([[thm-comparison-test-for-improper-integrals]]).

## Verification

**Proof technique:** Integrate $x^{-ap}$ on $(0,1)$ and on $(1,\infty)$ using
the real-power antiderivative and compare the two thresholds $ap<1$ and $ap>1$.

1.1 Because $|f_0|^p=x^{-ap}\chi_{(0,1)}$ and $|f_\infty|^p=x^{-ap}\chi_{(1,\infty)}$, [L1] reduces both claims to the improper integrals of $x^{-ap}$. [L1, given]

2.1 On $(0,1)$, the antiderivative is $x^{1-ap}/(1-ap)$ when $ap\ne1$, so the improper integral converges when $1-ap>0$, that is, when $ap<1$. If $ap=1$, it is $\int_0^1 dx/x$, which diverges by [L2]. If $ap>1$, then $x^{-ap}\ge x^{-1}$ on $(0,1)$, so divergence follows from [L2] and the comparison test [L3]. [L2, L3, step 1.1]

2.2 On $(1,\infty)$, the same antiderivative converges when $1-ap<0$, that is, when $ap>1$. If $ap=1$, it is again $\int_1^\infty dx/x$, which diverges by [L2]. If $ap<1$, then $x^{-ap}\ge x^{-1}$ for $x\ge1$, so divergence follows from [L2] and the comparison test [L3]. [L2, L3, step 1.1]

3.1 Steps 2.1 and 2.2 prove the two threshold claims. [step 2.1, step 2.2] ∎

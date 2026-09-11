---
id: thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis
kind: theorem
title: Fourier transform of a product with one integrable transform
deps: ["thm-l-one-fourier-inversion", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "def-countable-choice"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Proposition 11.18, pp.125–126; local Fubini proof extends its Schwartz case
---

## Statement

Assume countable choice. For $f,g\in L^1(\mathbb R^n;\mathbb C)$ with $\widehat f\in L^1$, use the continuous representative $f_c(x)=\int\widehat f(\eta)e^{2\pi ix\cdot\eta}\,d\eta$. Then $f_cg\in L^1$ and, for every $\xi$,
$$\widehat{fg}(\xi)=\int\widehat f(\eta)\widehat g(\xi-\eta)\,d\eta.$$
The product class is unchanged by other representatives; the symmetric variant holds when $\widehat g\in L^1$ instead.

## Facts & Assumptions

**Given:** The stated inputs and [[def-countable-choice]].

[F1] Inversion gives the continuous representative from an integrable transform ([[thm-l-one-fourier-inversion]]).

[F2] The transform bound is $\sup|\widehat h|\le\|h\|_1$ ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F3] Fubini permits exchanging absolutely integrable complex product integrals ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 F1 and the bound F2 applied to $\widehat f$ give $|f_c(x)|\le\|\widehat f\|_1$, hence $\|f_cg\|_1\le\|\widehat f\|_1\|g\|_1<\infty$. Changing either input on a null set changes its product only on the union of those two sets, so the integrable product class is well-defined. Also the convolution integral in the conclusion is absolutely convergent at every frequency, bounded by $\|\widehat f\|_1\|g\|_1$ using F2. [F1, F2, given]

2.1 Insert the inverse integral for $f_c$ into $\int f_c(x)g(x)e^{-2\pi ix\cdot\xi}\,dx$. The product integrand has modulus $|\widehat f(\eta)||g(x)|$ with double integral $\|\widehat f\|_1\|g\|_1$; measurability follows from coordinate pullbacks and the continuous exponential. F3 exchanges the integrals, giving $\int\widehat f(\eta)[\int g(x)e^{-2\pi ix\cdot(\xi-\eta)}\,dx]\,d\eta$, the required expression. Exchanging the roles of f and g proves the symmetric variant under its stated hypothesis. Countable choice is inherited from F1. No assertion that arbitrary products of two integrable functions are integrable is used. [F1, F3, step 1.1] ∎

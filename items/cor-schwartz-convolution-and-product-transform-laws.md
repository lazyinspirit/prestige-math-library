---
id: cor-schwartz-convolution-and-product-transform-laws
kind: corollary
title: Schwartz convolution and product laws
deps: ["cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space", "thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space", "thm-fourier-transform-converts-convolution-to-products", "thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis", "cor-uniqueness-of-the-l-one-fourier-transform", "def-countable-choice", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-dominated-convergence"]
status: published
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
      locator: Proposition 11.18 and Exercise 11.8; Teschl Corollary 14.13
---

## Statement

Assume countable choice. If $f,g\in\mathcal S$, their pointwise product and their everywhere-defined convolution are Schwartz functions, and
$$\mathcal F(f*g)=\widehat f\widehat g,\qquad\mathcal F(fg)=\widehat f*\widehat g.$$

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] Fourier transformation is an automorphism of Schwartz space ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F2] Products of Schwartz functions are Schwartz ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

[F3] Schwartz functions are integrable and bounded ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F4] The convolution transform formula holds on integrable inputs ([[thm-fourier-transform-converts-convolution-to-products]]).

[F5] The product formula holds when one transform is integrable ([[thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis]]).

[F6] Equal integral transforms imply equality almost everywhere ([[cor-uniqueness-of-the-l-one-fourier-transform]]).

[F7] Dominated convergence holds ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 By [F1]–[F3], $h=\mathcal F^{-1}(\widehat f\widehat g)$ is Schwartz and integrable. Also the convolution integral exists for every $x$, bounded absolutely by $\|f\|_\infty\|g\|_1$. It is continuous: for any $x_k\to x$, its integrands converge pointwise by continuity of $f$ and are dominated by $\|f\|_\infty|g|$; [F7] gives convergence of the integrals. The sequential continuity criterion is valid under countable choice. By [F4] the integrable convolution class has transform $\widehat f\widehat g$, so [F6] identifies it with $h$ almost everywhere. Two continuous functions equal almost everywhere are equal everywhere, since a nonzero difference persists on a ball containing a box of positive measure. Hence the actual convolution is $h\in\mathcal S$. [F1, F2, F3, F4, F6, F7, given]

2.1 The product $fg$ is Schwartz by [F2]. By [F1] and [F3], $f,g,\widehat f$ are integrable, so [F5] applies. Its continuous inverse representative of $f$ is $f$ itself by [F1]. Thus its identity gives the second displayed formula everywhere; step 1.1 and [F4] give the first. [step 1.1, F1, F2, F3, F4, F5] ∎

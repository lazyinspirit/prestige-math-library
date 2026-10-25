---
id: lem-complex-lp-completeness-density-and-inner-product
kind: lemma
title: "Complex completeness, density, and inner product: the consumer interface"
status: published
origin: pipeline
landmark: false
deps: [thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, def-complex-l-two-inner-product, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Apply the separate completeness, density and pairing theorems with their exact hypotheses."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.3, 10.12\u201310.13; \u00a710.4, 10.20; \u00a710.2, p=2. Teschl (10.5), p.282, conjugates the first variable; this scaffold reverses that convention as required by MT-16c."
---

## Statement

Assume countable choice. On every measure space, complex $L^p$ is complete for $1\le p\le\infty$, and every norm-convergent sequence has a subsequence of measurable representatives converging a.e. to its limit. For finite $p$, finite simple functions with finite-measure support are dense, and on $\mathbb R^n$ with Lebesgue measure, $n\ge1$, complex $C_c^\infty$ is dense. Complex $L^2$ has the first-variable-linear inner product $\int f\overline g$, its norm is $\|\cdot\|_2$, and Cauchy–Schwarz has the following equality criterion: if $g\ne0$, equality iff $f=cg$ a.e.; if $g=0$, equality for all $f$. The finite-tuple version uses a common scalar across components.

## Facts & Assumptions

**Given:** Countable choice, an arbitrary measure space and exponents in the stated ranges; Euclidean Lebesgue measure for smooth density.

[F1] Complex Lp completeness and a.e. subsequences hold under countable choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F2] Finite-simple density holds on arbitrary spaces and smooth density under countable choice on Euclidean spaces, both for finite p ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F3] The $L^2$ form has the stated norm and equality criterion, also for finite tuples ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Proof

**Proof technique:** Apply the separate completeness, density and pairing theorems with their exact hypotheses.

1.1 The measure space and exponent satisfy F1, and the assumed countable choice is exactly its additional hypothesis. It therefore supplies completeness for every $1\le p\le\infty$ and a.e.-convergent subsequences with the specified limit class. [F1, given]

1.2 For $p<\infty$, F2 applies to the same measure space and gives finite-simple approximants with finite-measure nonzero sets. In the Euclidean clause its Lebesgue and countable-choice hypotheses also hold, so it supplies smooth compactly supported approximants. [F2, given]

2.1 For $p=2$, F3 proves that the representative formula descends to an inner product and that its squared norm equals $\int|f|^2$. Thus its induced norm is the same $L^2$ norm used in step 1.1. F3 also supplies precisely the nonzero-second-argument scalar-multiple criterion and the zero-second-argument exception, and its finite-sum proof supplies the common-scalar tuple version. This collects the asserted interfaces without any additional analytic hypothesis. [F3, step 1.1] ∎

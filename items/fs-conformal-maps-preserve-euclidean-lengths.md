---
id: fs-conformal-maps-preserve-euclidean-lengths
kind: false-statement
title: "FALSE: conformal maps preserve Euclidean lengths"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-biholomorphisms-are-conformal-with-holomorphic-inverse, def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §2.3 Conformal Mapping"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Conformal maps preserve Euclidean lengths.

## Facts & Assumptions

**Given:** The affine map $f:\mathbb C\to\mathbb C$, $f(z)=2z$.

[F1] A biholomorphism is conformal in this page's orientation-preserving sense
([[rem-biholomorphisms-are-conformal-with-holomorphic-inverse]]).

[F2] A map is biholomorphic when it is bijective, holomorphic, and has
holomorphic inverse ([[def-biholomorphic-map]]).

## Refutation

1.1 The map $f(z)=2z$ is holomorphic on $\mathbb C$, bijective, and has holomorphic inverse $f^{-1}(w)=w/2$, so [F2] and [F1] make it conformal. [F1, F2, given]

2.1 But the unit tangent vector $1$ at $0$ is sent to $f'(0)\cdot1=2$, whose Euclidean length is $2\ne1$. Therefore a conformal map need not preserve Euclidean lengths. [step 1.1, algebra] ∎

---
id: ex-classification-of-z-plus-one-two-z-and-one-over-z
kind: example
title: "The maps z+1, 2z, and 1/z realize the parabolic, hyperbolic, and elliptic branches of the classification"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-classification-mobius-transformations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Example

The three maps
$$z\mapsto z+1,\qquad z\mapsto 2z,\qquad z\mapsto 1/z$$
realize the parabolic, hyperbolic, and elliptic branches of the Möbius
classification.

## Facts & Assumptions

**Given:** The Möbius maps $z\mapsto z+1$, $z\mapsto2z$, and $z\mapsto1/z$.

[L1] Nonidentity Möbius transformations are parabolic or conjugate to a dilation, with the elliptic/hyperbolic/loxodromic convention recorded on the classification theorem ([[thm-classification-mobius-transformations]]).

## Verification

**Proof technique:** direct.

1.1 The map $z\mapsto z+1$ fixes only $\infty$, so [L1] classifies it as parabolic; the map $z\mapsto2z$ fixes $0$ and $\infty$ and is already the dilation normal form with multiplier $2$, so [L1] classifies it as hyperbolic. [L1, given]

2.1 The map $z\mapsto1/z$ fixes $1$ and $-1$, and conjugating by $(z-1)/(z+1)$ turns it into $w\mapsto-w$. Since that multiplier has modulus $1$, [L1] places it in the elliptic branch. [L1, given, algebra] ∎

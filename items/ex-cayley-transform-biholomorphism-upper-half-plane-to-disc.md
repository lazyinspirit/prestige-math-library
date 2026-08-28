---
id: ex-cayley-transform-biholomorphism-upper-half-plane-to-disc
kind: example
title: "The Cayley transform carries the upper half-plane biholomorphically onto the unit disc"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mobius-transformations-biholomorphic-sphere]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

The Möbius map
$$C(z):=\frac{z-i}{z+i}$$
carries the upper half-plane $\{\operatorname{Im}z>0\}$ biholomorphically onto
$\mathbb D$.

## Facts & Assumptions

**Given:** The Cayley transform $C(z)=(z-i)/(z+i)$.

[L1] Every Möbius transformation is a sphere biholomorphism ([[thm-mobius-transformations-biholomorphic-sphere]]).

## Verification

**Proof technique:** direct.

1.1 The determinant condition is $ad-bc=2i\neq0$, so [L1] makes $C$ Möbius. For real $x$, one has $|C(x)|=1$, and for $z=x+iy$ with $y>0$ the identity $|z+i|^2-|z-i|^2=4y>0$ gives $|C(z)|<1$. [L1, given, algebra]

2.1 The inverse formula is $C^{-1}(w)=i(1+w)/(1-w)$, and the same calculation in reverse shows that $|w|<1$ implies $\operatorname{Im}C^{-1}(w)>0$. Hence $C$ carries the upper half-plane biholomorphically onto the unit disc. [given, algebra] ∎

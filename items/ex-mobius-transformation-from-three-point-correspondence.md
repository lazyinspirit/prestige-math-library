---
id: ex-mobius-transformation-from-three-point-correspondence
kind: example
title: "A Möbius transformation is recovered from three point correspondences"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-three-point-transitivity-mobius-transformations]
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

The unique Möbius transformation carrying $(1,i,-1)$ to $(\infty,0,1)$ is
$$M(z)=\frac{(1-i)(z-i)}{z-1}.$$

## Facts & Assumptions

**Given:** The source triple $(1,i,-1)$ and the target triple $(\infty,0,1)$.

[L1] A unique Möbius transformation carries one ordered triple of distinct sphere points to another ([[thm-three-point-transitivity-mobius-transformations]]).

## Verification

**Proof technique:** direct.

1.1 The formula $M(z)=(1-i)(z-i)/(z-1)$ satisfies $M(1)=\infty$, $M(i)=0$, and $M(-1)=1$ by direct substitution. [given, algebra]

2.1 Fact [L1] makes a Möbius transformation with those three prescribed values unique, so this formula is exactly the desired map. [L1, given] ∎

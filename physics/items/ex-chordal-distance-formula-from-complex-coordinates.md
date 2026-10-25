---
id: ex-chordal-distance-formula-from-complex-coordinates
kind: example
title: "The chordal distance has the standard coordinate formula on the finite plane"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chordal-metric-riemann-sphere, thm-stereographic-projection-riemann-sphere-homeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

For finite points $z,w\in\mathbb C$, the chordal metric is
$$\chi(z,w)=\frac{2|z-w|}{\sqrt{(1+|z|^2)(1+|w|^2)}},$$
while
$$\chi(z,\infty)=\frac{2}{\sqrt{1+|z|^2}}.$$

## Facts & Assumptions

**Given:** The chordal metric is Euclidean distance after stereographic projection.

[L1] Stereographic projection and the chordal metric are given by [[thm-stereographic-projection-riemann-sphere-homeomorphism]] and [[def-chordal-metric-riemann-sphere]].

## Verification

**Proof technique:** direct.

1.1 Substituting the stereographic coordinates of $z$ and $w$ into the Euclidean distance formula on $S^2$ simplifies to $\chi(z,w)^2=4|z-w|^2/((1+|z|^2)(1+|w|^2))$, and taking square roots gives the finite-point formula. [L1, given, algebra]

2.1 Using $\Sigma(\infty)=(0,0,1)$ in the same calculation gives $\chi(z,\infty)^2=4/(1+|z|^2)$, so $\chi(z,\infty)=2/\sqrt{1+|z|^2}$. [L1, given, algebra] ∎

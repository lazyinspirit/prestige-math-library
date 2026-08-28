---
id: ex-stereographic-projection-formulas-on-the-unit-sphere
kind: example
title: "Stereographic projection and its inverse are explicit in coordinates"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stereographic-projection-riemann-sphere-homeomorphism]
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

Stereographic projection from the north pole has the explicit formulas
$$\Sigma(z)=\left(\frac{2\operatorname{Re}z}{1+|z|^2},\ \frac{2\operatorname{Im}z}{1+|z|^2},\ \frac{|z|^2-1}{1+|z|^2}\right),\qquad \Pi(x,y,t)=\frac{x+iy}{1-t},$$
with $\Sigma(\infty)=(0,0,1)$ and $\Pi(0,0,1)=\infty$.

## Facts & Assumptions

**Given:** The stereographic formulas.

[L1] The displayed formulas define inverse homeomorphisms between $\widehat{\mathbb C}$ and the unit sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

## Verification

**Proof technique:** direct.

1.1 Fact [L1] already gives the inverse formulas. Substituting $z=0$ gives the south pole $(0,0,-1)$, and the defining clause sends $\infty$ to the north pole $(0,0,1)$. [L1, given]

2.1 Substituting $(0,0,-1)$ into the inverse formula returns $0$, while the exceptional north-pole clause returns $\infty$. Thus the coordinate formulas behave exactly as claimed. [L1, given] ∎

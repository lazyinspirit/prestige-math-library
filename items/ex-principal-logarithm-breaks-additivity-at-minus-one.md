---
id: ex-principal-logarithm-breaks-additivity-at-minus-one
kind: example
title: "The principal logarithm fails to turn multiplication into addition at $(-1,-1)$"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [rem-holomorphic-logarithm-and-principal-power-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2 §3.4 The Logarithm"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

For the pointwise principal logarithm,

$$\operatorname{Log}\bigl((-1)(-1)\bigr)\ne \operatorname{Log}(-1)+\operatorname{Log}(-1).$$

Indeed,

$$\operatorname{Log}(1)=0,\qquad \operatorname{Log}(-1)=i\pi,$$

so

$$\operatorname{Log}\bigl((-1)(-1)\bigr)=0\qquad\text{but}\qquad \operatorname{Log}(-1)+\operatorname{Log}(-1)=2\pi i.$$

This is exactly the branch-cut warning from
[[rem-holomorphic-logarithm-and-principal-power-dictionary]]: principal
logarithms do not satisfy a global product-to-sum law across the negative axis.

## Facts & Assumptions

**Given:** The principal logarithm conventions of
[[rem-holomorphic-logarithm-and-principal-power-dictionary]].

[F1] The pointwise principal logarithm is defined by
$$\operatorname{Log}z=\log r+i\theta,\qquad z=r(\cos \theta+i\sin\theta),\quad -\pi<\theta\le\pi,$$
and on the negative real axis one has $\operatorname{Log}(-1)=i\pi$
([[rem-holomorphic-logarithm-and-principal-power-dictionary]]).

## Verification

1.1 Applying [F1] to $1=1(\cos 0+i\sin 0)$ gives $\operatorname{Log}(1)=0$. [F1, given]

2.1 Applying [F1] to $-1=1(\cos \pi+i\sin \pi)$ gives $\operatorname{Log}(-1)=i\pi$, hence $\operatorname{Log}(-1)+\operatorname{Log}(-1)=2\pi i\ne 0=\operatorname{Log}(1)=\operatorname{Log}\bigl((-1)(-1)\bigr)$. [F1, step 1.1, algebra] ∎

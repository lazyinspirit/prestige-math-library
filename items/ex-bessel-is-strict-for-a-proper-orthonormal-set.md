---
id: ex-bessel-is-strict-for-a-proper-orthonormal-set
kind: example
title: "Bessel's inequality is strict for a vector outside the span of a proper orthonormal set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-bessel-inequality-and-finite-parseval-identity, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In standard $\mathbb R^3$, take the orthonormal list $(e_0,e_1)$ and $v=(1,2,3)$. Then Bessel's inequality is strict:

$$|\langle v,e_0\rangle|^2+|\langle v,e_1\rangle|^2=5<14=\lVert v\rVert^2.$$

The gap $9$ is the squared norm of the orthogonal remainder $3e_2$.

## Facts & Assumptions

**Given:** The first two standard basis vectors and $v=(1,2,3)$.

[L1] Bessel's inequality becomes equality exactly when the vector lies in the span of the orthonormal list ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[L2] Standard coordinate inner products are dot products ([[prop-standard-coordinate-inner-products]]).

## Verification

**Proof technique:** computation.

1.1 By [L2], the two coefficients are $1$ and $2$, while $\lVert v\rVert^2=1^2+2^2+3^2=14$. Hence the Bessel sum is $5$ and the gap is $9$. [L2, algebra]

2.1 The projection onto $\operatorname{span}(e_0,e_1)$ is $(1,2,0)$, leaving $3e_2$ of squared norm $9$. Since $v$ is outside the span, strictness also follows from [L1]. [step 1.1, L1, L2] ∎

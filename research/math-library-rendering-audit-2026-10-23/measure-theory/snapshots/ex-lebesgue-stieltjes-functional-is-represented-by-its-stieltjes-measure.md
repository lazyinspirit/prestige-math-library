---
id: ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure
kind: example
title: "A Lebesgue--Stieltjes functional is represented by its Stieltjes measure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-existence-of-the-lebesgue-stieltjes-measure, prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Example

Let $F:\mathbb R\to\mathbb R$ be increasing and right-continuous, and let $\mu_F$ be the Lebesgue--Stieltjes measure with $\mu_F((a,b])=F(b)-F(a)$. Then
$L_F(f)=\int f\,d\mu_F$ is a positive functional on $C_c(\mathbb R)$ represented by $\mu_F$.

## Facts & Assumptions

**Given:** $\mu_F$ is the Lebesgue--Stieltjes measure associated with $F$.

## Verification

**Proof technique:** direct.

1.1 The measure $\mu_F$ is finite on compact intervals, so the displayed integral is finite for compactly supported continuous $f$. It is linear and positive. [given]

2.1 Lebesgue--Stieltjes regularity makes $\mu_F$ Radon without changing its half-open interval convention. Thus the definition already gives a Radon representation, and RMK uniqueness says it is the representing measure. [given] ∎

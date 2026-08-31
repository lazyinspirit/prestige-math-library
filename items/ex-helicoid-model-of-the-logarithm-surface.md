---
id: ex-helicoid-model-of-the-logarithm-surface
kind: example
title: "The logarithm surface admits the standard helicoid model"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-surface-of-the-logarithm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Write $w=x+iy$. Under the biholomorphism
$\Lambda:\mathcal R_{\log}\to\mathbb C$ of
[[thm-riemann-surface-of-the-logarithm]], the logarithm surface is modeled in
$\mathbb R^3$ by the helicoid

$$H(w):=(e^x\cos y,\ e^x\sin y,\ y).$$

Its projection to the first two coordinates is the punctured-plane point
$e^w \in \mathbb C^\times$.

## Facts & Assumptions

**Given:** The biholomorphism $\Lambda:\mathcal R_{\log}\to\mathbb C$.

[L1] The logarithm surface is biholomorphic to $\mathbb C$, and its projection
corresponds to $\exp$
([[thm-riemann-surface-of-the-logarithm]]).

## Verification

**Proof technique:** direct.

1.1 Writing $w=x+iy$, Euler's formula gives $e^w=e^x(\cos y+i\sin y)$. So the first two coordinates of $H(w)$ are exactly the complex number $e^w$. [given, algebra]

2.1 By [L1], the point of the logarithm surface corresponding to $w$ projects to $e^w$. Step 1.1 therefore identifies the abstract surface with the standard helicoid model in $\mathbb R^3$, whose vertical coordinate records the argument before taking it modulo $2\pi$. [L1, step 1.1] ∎

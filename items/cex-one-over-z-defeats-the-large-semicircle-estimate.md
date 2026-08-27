---
id: cex-one-over-z-defeats-the-large-semicircle-estimate
kind: counterexample
title: "The function 1 / z makes the large-semicircle shortcut fail"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-large-arc-vanishing-follows-from-pointwise-decay-alone]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the pointwise decay of $1/z$ along larger and larger upper
semicircles is enough to force the arc integral to vanish.

## Facts & Assumptions

**Given:** The function $f(z)=1/z$ and the upper semicircles $\gamma_R^+(t)=Re^{it}$.

## Counterexample

**Proof technique:** computation.

1.1 On the upper semicircle $\gamma_R^+(t)=Re^{it}$ one has $\int_{\gamma_R^+}\frac{dz}{z} =\int_0^\pi \frac{iRe^{it}}{Re^{it}}\,dt =i\pi.$ [given, algebra]

2.1 So the arc integral is constant, not vanishing, even though $1/(Re^{it})$ is pointwise $O(R^{-1})$ on the arc. This is the concrete witness behind [[fs-large-arc-vanishing-follows-from-pointwise-decay-alone]]. [step 1.1] ∎

---
id: fs-large-arc-vanishing-follows-from-pointwise-decay-alone
kind: false-statement
title: "FALSE: pointwise decay alone makes every large semicircle integral vanish"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-large-semicircle-vanishing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
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

## Statement

**False claim:** if $f(z)\to0$ pointwise on the upper semicircle $|z|=R$ as
$R\to\infty$, then
$\int_{\gamma_R^+}f(z)\,dz\to0.$

## Facts & Assumptions

**Given:** The function $f(z)=1/z$ and the upper semicircles $\gamma_R^+(t)=Re^{it}$.

[L1] The correct large-arc lemma assumes control of $z\,f(z)$, not only of $f(z)$ itself ([[lem-large-semicircle-vanishing]]).

## Refutation

**Proof technique:** direct.

1.1 Along the upper semicircle, $f(Re^{it})=e^{-it}/R\to0$ pointwise. But $\int_{\gamma_R^+}\frac{dz}{z} =\int_0^\pi \frac{iRe^{it}}{Re^{it}}\,dt =i\pi.$ [given, algebra]

2.1 So the arc integral does not tend to $0$ even though the pointwise values do. [step 1.1, L1] ∎ This is exactly why requires the stronger hypothesis on $zf(z)$. [L1]

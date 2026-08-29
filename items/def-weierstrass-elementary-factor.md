---
id: def-weierstrass-elementary-factor
kind: definition
title: "Weierstrass elementary factors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Definition

For an integer $p\ge0$, the **$p$th Weierstrass elementary factor** is

$$E_p(w):=(1-w)\exp\!\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right).$$

For $p=0$ the empty sum in the exponential is interpreted as $0$, so
$E_0(w)=1-w$.

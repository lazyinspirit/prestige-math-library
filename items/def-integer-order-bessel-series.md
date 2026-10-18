---
id: def-integer-order-bessel-series
kind: definition
title: Integer-order Bessel series
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: [lem-integer-order-bessel-series-tail]
forward_refs: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §10.2(ii), equation 10.2.2
      url: https://dlmf.nist.gov/10.2
    - title: DLMF, §10.25(ii), equation 10.25.2
      url: https://dlmf.nist.gov/10.25
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 0
---

## Definition

For an integer $n\ge0$ and $z\in\mathbb C$, define

$$J_n(z)=\sum_{k=0}^{\infty}\frac{(-1)^k(z/2)^{2k+n}}{k!(k+n)!}, \qquad I_n(z)=\sum_{k=0}^{\infty}\frac{(z/2)^{2k+n}}{k!(k+n)!}.$$

These are the integer-order Bessel and modified Bessel functions used on this
page. For real $x\ge0$, the scaled modified Bessel value means
$I_n^{\mathrm{sc}}(x)=e^{-x}I_n(x)$. This notation does not assert a finite
evaluation method or a truncation bound; those are proved separately.

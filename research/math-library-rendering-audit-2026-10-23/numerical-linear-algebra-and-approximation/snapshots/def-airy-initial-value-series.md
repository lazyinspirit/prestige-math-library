---
id: def-airy-initial-value-series
kind: definition
title: Airy initial-value series
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euler-gamma-function]
justified_by: [lem-airy-series-coefficient-recurrence-and-tail]
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
    - title: DLMF, §9.2(ii), equations 9.2.3–9.2.6
      url: https://dlmf.nist.gov/9.2
    - title: DLMF, §9.4, Maclaurin series
      url: https://dlmf.nist.gov/9.4
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 0
---

## Definition

For $y(z)=\sum_{k\ge0}c_kz^k$, set $c_2=0$ and
$c_{k+3}=c_k/((k+3)(k+2))$ for $k\ge0$. Define $\operatorname{Ai}$ by this
series with

$$c_0=\frac{1}{3^{2/3}\Gamma(2/3)},\qquad c_1=-\frac{1}{3^{1/3}\Gamma(1/3)},$$

and define $\operatorname{Bi}$ by the same recurrence with

$$c_0=\frac{1}{3^{1/6}\Gamma(2/3)},\qquad c_1=\frac{3^{1/6}}{\Gamma(1/3)}.$$

Here $\Gamma$ is Euler's integral on the right half-plane from
[[def-euler-gamma-function]]. The standard Airy initial values are those in
DLMF §9.2(ii); in particular, the power of $3$ in $\operatorname{Bi}(0)$ is
in the denominator.

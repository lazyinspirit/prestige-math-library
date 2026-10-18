---
id: def-erfcx-moment-sequence
kind: definition
title: Scaled complementary error function and its moments
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-fresnel-erf-and-hypergeometric-series]
justified_by: [lem-erfcx-moment-recurrence]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §7.2, definitions and elementary properties
      url: https://dlmf.nist.gov/7.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Definition

For real $x>0$, define
$\operatorname{erfcx}(x)=e^{x^2}\operatorname{erfc}(x)$. For each integer
$k\ge0$, define the finite positive moment

$$M_k(x)=\int_0^\infty t^k e^{-t^2-2xt}\,dt.$$

The moments are auxiliary quantities for a finite-depth interval enclosure of
$\operatorname{erfcx}$. They are not the modified Bessel functions $I_k$.

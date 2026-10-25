---
id: def-logarithmic-integral
title: "Logarithmic integral"
kind: definition
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76.2, equation (6.14), p.179"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
---

## Definition

For real $x\ge2$, define
$$\operatorname{Li}(x)=\int_2^x\frac{dt}{\log t}.$$
In particular $\operatorname{Li}(2)=0$. The integral never crosses the singularity at one.

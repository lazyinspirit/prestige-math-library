---
id: ex-zero-density-at-q-one
kind: example
title: "The Heath–Brown estimate at conductor one"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - thm-heath-brown-density-estimate-for-dirichlet-l-functions
justified_by: []
aliases: []
forward_refs: []
dependency_level: 8
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions, Theorem 1"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "Printed p. 231, the conductor-one Riemann zeta specialization of Theorem 1."
---

## Example

For $Q=1$, the only primitive character in the aggregate count is the principal character modulo $1$, whose Dirichlet series is $\zeta(s)=\sum_{n\ge1}n^{-s}$ on $\operatorname{Re}s>1$. Hence for $11/14\le\sigma\le1$ and $T\ge1$, the first Heath–Brown estimate specializes to
$$\#\{\rho=\beta+i\gamma:\zeta(\rho)=0,\ \beta\ge\sigma,\ |\gamma|\le T\}\ll_\varepsilon T^{2(1-\sigma)+\varepsilon}.$$
Here $\ll_\varepsilon$ means the implied constant may depend on $\varepsilon$ only.

## Example references

[Heath-Brown, Theorem 1 and its conductor-one specialization](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Remarks

The local verification is not supplied because the cited A-page theorem remains an authoring obligation; this example is escalated with it.

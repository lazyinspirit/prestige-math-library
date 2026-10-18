---
id: ex-pe04-upwind-transport-with-inflow
kind: example
title: A constant upwind DG state with inflow data on one interval
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-upwind-dg-transport-discretization
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Take the one-cell interval $K=(0,1)$, degree $p=0$, speed $a>0$, constant cell state $U(t)$, and inflow value $g(t)$ at $x=0$. The outflow trace at $x=1$ is $U(t)$.

## Facts & Assumptions

**Given:** The one-dimensional upwind DG weak form on $(0,1)$, with $\beta=a>0$, cell length one, and left inflow flux $-ag$.

[F1] [[def-pe04-upwind-dg-transport-discretization]]: for a degree-zero test function the volume derivative term vanishes, and the two endpoint fluxes enter with their outward signs.

## Verification

1.1 Use the constant test $v_h=1$ in the DG equation. The cell mass is $U$, the outflow contribution is $aU$, and the inflow contribution is $-ag$, so $\dot U+aU-ag=0$ and $\dot U=a(g-U)$. [given, F1, algebra]

2.1 For $E(t)=\frac12U(t)^2$, multiply the ODE by $U$ to get $\dot E=aU(g-U)=\frac a2g^2-\frac a2U^2-\frac a2(U-g)^2$. Rearranging displays the outflow energy, mismatch dissipation at inflow, and energy supplied by the boundary datum. [given, step 1.1, algebra] ∎

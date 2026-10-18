---
id: ex-pe04-central-versus-upwind-periodic-transport
kind: example
title: Central and upwind fluxes have different periodic dissipation
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
  precheck: pending
---

## Example

On two equal periodic interval cells of length $h$, consider degree-zero DG for $u_t+a u_x=0$ with $a>0$ and cell states $u_1,u_2$. Compare the central flux $\widehat f_c(a_0,b_0)=a(a_0+b_0)/2$ with the upwind flux $\widehat f_u(a_0,b_0)=a a_0$.

## Facts & Assumptions

**Given:** The degree-zero weak DG balance with a single shared numerical flux at each oriented face and periodic indexing $u_0=u_2$, $u_3=u_1$.

[F1] [[def-pe04-upwind-dg-transport-discretization]]: the semidiscrete cell balance is $h\dot u_j=-(\widehat f_{j+1/2}-\widehat f_{j-1/2})$ for a degree-zero test function.

## Verification

1.1 For the central flux, both faces of cell 1 see the same pair $(u_1,u_2)$ and hence the same flux; likewise for cell 2. Thus $\dot u_1=\dot u_2=0$ and $E=\frac h2(u_1^2+u_2^2)$ has $\dot E=0$. [given, F1, algebra]

2.1 For the upwind flux, the two cell equations are $\dot u_1=-\frac ah(u_1-u_2)$ and $\dot u_2=-\frac ah(u_2-u_1)$. Therefore $\dot E=h(u_1\dot u_1+u_2\dot u_2)=-a(u_1-u_2)^2$. In particular, at $(u_1,u_2)=(1,-1)$ the central rate is zero and the upwind rate is $-4a<0$. [F1, step 1.1, algebra] ∎

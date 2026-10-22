---
id: ex-qftx-truncation-landau-pole
kind: example
title: A truncated Landau pole is not continuum nonexistence
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - thm-qftx-truncated-rg-ode
justified_by: []
forward_refs: []
dependency_roles:
  thm-qftx-truncated-rg-ode: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Romeo Brunetti, Michael Dütsch, and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups
      url: https://arxiv.org/html/0901.2038
      locator: Sections 5.1–5.2 and 7.2, formal RG cocycle and a model-specific scalar beta-flow example.
    - title: Renormalization Scheme Dependence, University of Texas at Austin QFT II lecture notes
      url: https://web2.ph.utexas.edu/~vadim/Classes/2022f/ms.pdf
      locator: Printed pages 1–2, equations (2)–(9), coupling redefinitions and beta-series coefficients.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

For dimensionless $b>0$ and $g_0>0$, the truncated equation $dg/dt=bg^2$ with $g(0)=g_0$ has maximal solution $g(t)=g_0/(1-bg_0t)$ for $t<t_*:=(bg_0)^{-1}$, and $g(t)\to+\infty$ as $t\uparrow t_*$. Here “truncated Landau pole” means this finite endpoint $t_*$ of the exact solution to the truncated equation, where the real coupling diverges. The calculation supplies no estimate for omitted higher-order beta terms near $t_*$ and implies no nonexistence result for a continuum theory.

## Example references

[[thm-qftx-truncated-rg-ode]]

## Facts & Assumptions

**Given:** $b>0$, $g_0>0$, $t_*=(bg_0)^{-1}$, and the truncated ODE in [[thm-qftx-truncated-rg-ode]].

[A1] The example concerns only the real truncated initial-value problem; no omitted beta coefficients or ultraviolet completion are specified.

[F1] [[thm-qftx-truncated-rg-ode]]: for the stated prescribed scalar model, the unique maximal solution is $g(t)=g_0/(1-bg_0t)$ on $(-\infty,t_*)$ for $bg_0>0$; maximal means that the IVP solution has no extension to a strictly larger interval as an IVP solution.

## Verification

**Proof technique:** direct endpoint limit.

**Given:** [A1] and [F1].

1.1 Under [A1], [F1] gives the denominator positive on the interval containing zero with $t<t_*$, and $g$ is the exact solution of the truncated equation there. [A1, F1]

2.1 As $t\uparrow t_*$, $1-bg_0t\downarrow0$ while $g_0>0$ stays fixed, so $g(t)\to+\infty$. Since [F1] states only the truncated equation, neither this limit nor the calculation gives a bound on omitted terms or a conclusion about continuum nonexistence. [A1, F1, step 1.1, algebra] ∎

## Remarks

The pole is an endpoint of this model's maximal solution. It is not a measurement and does not assert that the truncation is accurate near that endpoint.

---
id: def-csm-frontier-ssep-quasipotential
kind: definition
title: "Fixed-mean action quasi-potential"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-ssep-current-action
dependency_roles:
  def-csm-frontier-ssep-current-action: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Section IV.1, equations (4.8)–(4.9): the quasi-potential as the infimum of action over trajectories from the stationary profile."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Sections 11 and 14.1: the variational density functional and its equilibrium reverse-relaxation path."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Fix $d\ge1$, $\bar\rho\in(0,1)$, and normalized product Haar measure $dx$ on $\mathbb T^d$. Let $\rho:\mathbb T^d\to(0,1)$ be a smooth target profile whose values are bounded away from $0$ and $1$. A connection of duration $T>0$ from the homogeneous profile $\bar\rho$ to $\rho$ is a smooth pair $(u,j)$ on $[0,T]\times\mathbb T^d$, smooth up to the time endpoints and periodic in space, such that for some $\varepsilon_T\in(0,1/2)$ one has $\varepsilon_T\le u(t,x)\le1-\varepsilon_T$, $\int_{\mathbb T^d}u(t,x)\,dx=\bar\rho$ for all $t$, $\partial_tu+\nabla\cdot j=0$, $u(0,x)=\bar\rho$, and $u(T,x)=\rho(x)$. Define

$$\mathcal V_{\bar\rho}(\rho):=\inf\left\{\mathcal I_{[0,T]}(u,j):T>0,\ (u,j)\text{ is a connection of duration }T\text{ from }\bar\rho\text{ to }\rho\right\},$$

with the infimum of the empty set defined to be $+\infty$. The action is the functional defined in the preceding item.

## Definition references

[[def-csm-frontier-ssep-current-action]]


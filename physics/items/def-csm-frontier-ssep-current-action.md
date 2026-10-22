---
id: def-csm-frontier-ssep-current-action
kind: definition
title: "Normalized SSEP macroscopic fluctuation action"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Sections II.1–II.3, equations (2.1)–(2.8) and (2.12)–(2.16); Section V.D, boundary-driven SSEP coefficients and action convention."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Sections 8.1–9, equations (90)–(97) and (112)–(130): SSEP transport coefficients and the diffusive current action."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Fix an integer $d\ge1$ and let $\mathbb T^d=(\mathbb R/\mathbb Z)^d$ carry normalized product Haar measure $dx$, with $dx(\mathbb T^d)=1$. Coordinates and time are dimensionless in the diffusive normalization $D=1$. For $r\in(0,1)$ set the mobility function $\chi(r):=r(1-r)$. For any finite interval $[a,b]$ with $a<b$, let $\rho:[a,b]\times\mathbb T^d\to\mathbb R$ be a scalar density and let $j:[a,b]\times\mathbb T^d\to\mathbb R^d$ be a vector current. Require both fields to be smooth up to the time endpoints and periodic in space, and require that for some $\varepsilon\in(0,1/2)$, $\varepsilon\le\rho(t,x)\le1-\varepsilon$ for every $(t,x)$. Call $(\rho,j)$ admissible when it also satisfies the continuity equation $\partial_t\rho+\nabla\cdot j=0$. Define its dimensionless action by

$$\mathcal I_{[a,b]}(\rho,j):=\frac14\int_a^b\int_{\mathbb T^d}\frac{|j(t,x)+\nabla\rho(t,x)|^2}{\rho(t,x)(1-\rho(t,x))}\,dx\,dt.$$

This is the macroscopic fluctuation functional in the stated normalized SSEP coefficient convention. It is a definition of a functional and does not assert a microscopic path-space large-deviation principle or a probability estimate.

## Definition references


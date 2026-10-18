---
id: def-crouzeix-raviart-face-average-interpolant
kind: definition
title: The face-average Crouzeix–Raviart interpolant
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - def-crouzeix-raviart-local-p1-element
  - def-wkp-zero-as-a-sobolev-closure
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.1, equations (36.4)–(36.6), and the global interpolation definition after Proposition 36.2, PDF pp. 2–4."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 308–313: interpolation into the conforming P1 subspace used for approximation."
---

## Definition

Assume Countable Choice. For $u\in H^1(K)$, use the facet traces of
[[lem-crouzeix-raviart-simplex-traces-and-green-identity]] and define its local
face-average interpolant by
$$I_K^{CR}u:=\sum_{F\subset\partial K}\left(\frac1{|F|}\int_Fu\,dS\right)\phi_{K,F},$$
where $\phi_{K,F}$ is the explicit polynomial in
[[def-crouzeix-raviart-local-p1-element]]. On a finite matching mesh, define
$I_h^{CR}u$ cellwise by $(I_h^{CR}u)|_K=I_K^{CR}(u|_K)$. For a global
$u\in H^1_0(\Omega)$, the cell traces agree on interior facets and vanish on
boundary facets, so this formula has the intended global Crouzeix–Raviart
degrees of freedom. The local estimate item proves its fractional
approximation bounds.

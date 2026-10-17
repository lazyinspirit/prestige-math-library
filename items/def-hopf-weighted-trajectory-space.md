---
id: def-hopf-weighted-trajectory-space
kind: definition
title: Weighted trajectory space for a local center-manifold construction
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-norm-and-normed-space]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Section 2, printed pp. 27–44, graph-transform construction of a center manifold
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 151–159
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $E$ be a finite-dimensional real normed space and let $\eta>0$. Define

$$\mathcal C_\eta(E):=\left\{u\in C(\mathbb R,E):\|u\|_\eta:=\sup_{t\in\mathbb R}e^{-\eta|t|}\|u(t)\|<\infty\right\}.$$

The norm is $\|u\|_\eta$. It permits at most the fixed exponential growth rate $\eta$ in either time direction. It does not say that a trajectory is bounded.

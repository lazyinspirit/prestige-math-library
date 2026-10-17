---
id: def-two-stage-radau-iia-tableau
title: "Two-stage Radau IIA tableau"
kind: definition
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-implicit-runge-kutta-stage-equations
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9, PDF pp. 81–83 / printed pp. 79–81: two-stage Radau IIA derivation, tableau, and scalar stability function."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 9 and 18–20: Radau IIA order family, A-stability, and the two-stage tableau."
---

## Definition

The two-stage Radau IIA method has

$$A=\begin{pmatrix}5/12&-1/12\\3/4&1/4\end{pmatrix},\qquad b=\begin{pmatrix}3/4\\1/4\end{pmatrix},\qquad c=\begin{pmatrix}1/3\\1\end{pmatrix}.$$

Applied to $y'=f(t,y)$, its stages and update are those of [[def-implicit-runge-kutta-stage-equations]]. The row sums of $A$ equal $c$, and the final row of $A$ is $b^\mathsf T$.

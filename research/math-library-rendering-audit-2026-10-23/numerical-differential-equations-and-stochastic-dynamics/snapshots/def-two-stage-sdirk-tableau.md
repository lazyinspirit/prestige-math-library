---
id: def-two-stage-sdirk-tableau
title: "Selected two-stage singly diagonally implicit Runge–Kutta tableau"
kind: definition
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-implicit-runge-kutta-stage-equations
  - thm-of-square-roots
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
      locator: "§III.3 and §III.9, PDF pp. 66–68 and 81–83 / printed pp. 64–65 and 79–81."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 21–25: diagonally implicit Runge–Kutta structure, L-stable examples, and modified Newton factorization reuse."
---

## Definition

Let $\gamma=1-1/\sqrt2$. The selected two-stage singly diagonally implicit Runge–Kutta method has

$$A=\begin{pmatrix}\gamma&0\\1-\gamma&\gamma\end{pmatrix},\qquad b=\begin{pmatrix}1-\gamma\\\gamma\end{pmatrix},\qquad c=\begin{pmatrix}\gamma\\1\end{pmatrix}.$$

Applied to $y'=f(t,y)$, its stages and update are those of [[def-implicit-runge-kutta-stage-equations]]. Both diagonal entries of $A$ equal $\gamma$, the row sums are $c$, and the final row of $A$ is $b^\mathsf T$.

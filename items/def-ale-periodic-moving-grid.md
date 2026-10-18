---
id: def-ale-periodic-moving-grid
kind: definition
title: "Periodic one-dimensional moving grid"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
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
    date: 2026-10-18
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§4, ALE conservation equations, pp. 419–420; §6, geometric conservation laws, pp. 422–425."
---

## Definition

Fix $N\ge1$, a reference cell width $\Delta\xi>0$, a time step $\Delta t>0$, and a physical period length $L>0$. Face positions $x_{i+1/2}^n$ and face velocities $w_{i+1/2}^n$ are indexed periodically by $i\in\mathbb Z$, with $x_{i+N+1/2}^n=x_{i+1/2}^n+L$ and $w_{i+N+1/2}^n=w_{i+1/2}^n$. The physical cell $i$ is $[x_{i-1/2}^n,x_{i+1/2}^n]$ and its dimensionless Jacobian is $J_i^n=(x_{i+1/2}^n-x_{i-1/2}^n)/\Delta\xi$; require $J_i^n>0$.

For a constant physical advection speed $a\in\mathbb R$, the relative face speed is $c_{i+1/2}^n:=a-w_{i+1/2}^n$. Write $c^+:=\max(c,0)$ and $c^-:=\min(c,0)$. The prescribed face move is $x_{i+1/2}^{n+1}=x_{i+1/2}^n+\Delta t\,w_{i+1/2}^n$. The cell average $\bar u_i^n$ is the average over the corresponding physical cell.

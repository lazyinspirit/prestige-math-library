---
id: def-characteristic-crossing-and-caustic-for-first-order-pde
kind: definition
title: "Characteristic crossing and caustic for a first-order PDE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-augmented-characteristic-system-for-a-quasilinear-pde, lem-local-solvability-of-the-augmented-characteristic-ode]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Definition

For a characteristic strip, a **crossing** or **caustic** is a point or time at
which the projected map $(s,y)\mapsto X(s,y)$ loses local rank or local
one-to-one graphing.  It is a failure of the projection needed to define
$u=Z\circ X^{-1}$, not a claim that the lifted ODE $(X,Z)$ has reached its
maximal lifespan.  For a forward-time family, a first crossing time is an
infimum in $[0,\infty]$, with value $\infty$ when the relevant set is empty.

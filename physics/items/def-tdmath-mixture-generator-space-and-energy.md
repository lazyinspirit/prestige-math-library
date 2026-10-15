---
id: def-tdmath-mixture-generator-space-and-energy
kind: definition
title: "Compact phase-generator mixture"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-borel-probability-law-on-a-polish-space","def-integrable-real-and-complex-functions-and-their-integrals"]
justified_by: []
dependency_roles: {"def-borel-probability-law-on-a-polish-space":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Definition

Let $K$ be a nonempty compact subset of $\mathbb R^d$, $d\ge1$, with its Borel sigma-algebra, and let $a:K\to\mathbb R$ be continuous. The **convex hull** $\operatorname{conv}K$ is the set of finite convex combinations of points of $K$. A **phase generator** is a point $y\in K$ with declared energy $a(y)$. A **mixture** is a Borel probability measure $P$ on $K$. Its barycenter and mean energy are the coordinatewise Lebesgue integrals
$$\bar y(P):=\int_K y\,dP(y)\in\mathbb R^d,\qquad \bar a(P):=\int_K a(y)\,dP(y)\in\mathbb R.$$
These integrals are finite because each coordinate and $a$ are bounded on compact $K$. For prescribed mean $x\in\operatorname{conv}K$, the **mixture energy** is
$$a_{\rm mix}(x):=\inf\{\bar a(P):P\text{ is a Borel probability on }K,\ \bar y(P)=x\}.$$
The admissible set is nonempty since every finite convex combination of points of $K$ is the barycenter of a finite atomic probability. The definition does not assert that the infimum is attained; the theorem on this page gives a compact continuous sufficient condition.

## Scope

The definition concerns a mathematical probability mixture and an assigned scalar energy. It does not assert that physical phases can be prepared, exchanged, or brought to equilibrium.

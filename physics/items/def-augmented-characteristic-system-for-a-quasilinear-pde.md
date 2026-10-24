---
id: def-augmented-characteristic-system-for-a-quasilinear-pde
kind: definition
title: "The augmented characteristic system for a quasilinear first-order PDE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-semilinear-and-quasilinear-first-order-cauchy-problems]
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

For the problem in
[[def-semilinear-and-quasilinear-first-order-cauchy-problems]], its augmented
characteristic strip is a map $(X,Z)(s,y)$ satisfying

$$\dot X=a(X,Z),\qquad \dot Z=b(X,Z),\qquad (X,Z)(0,y)=(\gamma(y),\phi(y)).$$

Here $s$ is the characteristic parameter and $y\in V$ labels the initial
point.  The system concerns only $(X,Z)$; no differential equation for a
putative gradient is included in this definition.

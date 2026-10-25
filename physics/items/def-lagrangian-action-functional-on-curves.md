---
id: def-lagrangian-action-functional-on-curves
kind: definition
title: Lagrangian action functional on curves
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, Hamiltonian and Lagrangian formalisms, pp. 112--116
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $Q$ be a smooth configuration manifold and let
$L:TQ\to\mathbb R$ be a smooth **Lagrangian**. For a $C^1$ curve
$\gamma:[a,b]\to Q$, its **action** is

$$\mathcal S_L(\gamma)=\int_a^b L(\gamma(t),\dot\gamma(t))\,dt.$$

For a variational problem, the endpoints are fixed: an admissible smooth
variation $\gamma_s$ satisfies
$\gamma_s(a)=\gamma(a)$ and $\gamma_s(b)=\gamma(b)$. A $C^2$ curve is
**stationary** if the derivative of the action at $s=0$ vanishes for every
such variation.

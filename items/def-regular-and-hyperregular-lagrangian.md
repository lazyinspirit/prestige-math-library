---
id: def-regular-and-hyperregular-lagrangian
kind: definition
title: Regular and hyperregular Lagrangian
status: draft
origin: pipeline
deps: ["def-fibre-derivative-and-legendre-transform-of-a-lagrangian"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 19, Legendre transform, pp. 114--116
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A Lagrangian $L:TQ\to\mathbb R$ is **regular** if its fibre Hessian

$$\left(\frac{\partial^2L}{\partial v^i\partial v^j}\right)$$

is nonsingular at every point. Equivalently, its Legendre map $\mathbb FL$ is
a local diffeomorphism.

It is **hyperregular** if $\mathbb FL:TQ\to T^*Q$ is a global
fibre-preserving diffeomorphism. Hyperregularity implies regularity; local
invertibility alone does not imply global bijectivity.

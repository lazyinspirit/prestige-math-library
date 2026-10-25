---
id: def-fibre-derivative-and-legendre-transform-of-a-lagrangian
kind: definition
title: Fibre derivative or Legendre map of a Lagrangian
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
      locator: Lecture 19, Legendre transform, pp. 114--116
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

For a smooth Lagrangian $L:TQ\to\mathbb R$, its **fibre derivative** or
**Legendre map** is the fibre-preserving smooth map

$$\mathbb FL:TQ\to T^*Q,\qquad (\mathbb FL(q,v))(w)=\left.\frac d{ds}\right|_{s=0}L(q,v+sw).$$

In bundle coordinates it is
$\mathbb FL(q^i,v^i)=(q^i,p_i)$ with
$p_i=\partial L/\partial v^i$. This coordinate formula also shows smoothness
and that the base point $q$ is unchanged.

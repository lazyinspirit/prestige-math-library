---
id: def-orbit-stabilizer-and-orbit-map-of-a-smooth-action
kind: definition
title: Orbits, stabilizers, and orbit maps of smooth actions
status: published
origin: pipeline
deps: [def-smooth-left-action-of-a-lie-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Section 4.4, printed page 31
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Quotients of Manifolds by Group Actions, printed page 541
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

For a smooth left action of $G$ on $M$ and $x\in M$, the **stabilizer** or
**isotropy subgroup**, the **orbit**, and the **orbit map** are

$$G_x=\{g\in G:g\cdot x=x\},\qquad G\cdot x=\{g\cdot x:g\in G\},$$

$$\Phi_x:G\longrightarrow M,\qquad \Phi_x(g)=g\cdot x.$$

The action laws make $G_x$ a subgroup, and joint smoothness makes $\Phi_x$
smooth. No embeddedness, closedness, or manifold structure on the orbit is
included in this definition.

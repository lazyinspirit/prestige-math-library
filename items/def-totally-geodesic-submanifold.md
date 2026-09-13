---
id: def-totally-geodesic-submanifold
kind: definition
title: Totally geodesic submanifold
status: published
origin: pipeline
deps: ["def-induced-connection-and-second-fundamental-form", "lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, definition of totally geodesic and Exercise 8.4(c), printed page 139
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. An embedded Riemannian submanifold
$M\subseteq\overline M$ is **totally geodesic** when its normal-valued second
fundamental form vanishes identically:

$$\mathrm{II}_p(u,v)=0\qquad\text{for every }p\in M\text{ and }u,v\in T_pM.$$

By
[[lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor]],
this is an intrinsic pointwise condition on the embedding and ambient metric;
it is independent of extensions, frames, and normal orientations. The choice
hypothesis is inherited exactly through the smooth projection used to define
$\mathrm{II}$ in
[[def-induced-connection-and-second-fundamental-form]], and the vanishing
condition makes no additional choice.

The condition is vacuous for the empty submanifold and holds automatically
when the tangent bundle or normal bundle has rank zero. It applies unchanged
in rank one and at boundary points. Degenerate induced metrics are outside the
Riemannian hypothesis. The next theorem proves the promised equivalence with
ambient preservation of tangent derivatives and with the local geodesic
condition; those are consequences, not part of this definition.

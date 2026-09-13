---
id: ex-the-orientation-system-of-the-mobius-band
kind: example
title: Orientation system of the Mobius band
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-the-manifold-orientation-system-is-a-local-system, def-orientation-local-system-on-a-manifold-with-boundary]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, pp.100–102
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

The orientation system of the Mobius band has monodromy $-1$ around its core circle. The double cover obtained by unwrapping the core twice is an annulus, on which the pulled-back system is constant. The restriction of the orientation system to the single boundary circle is constant.

## Facts & Assumptions

**Given:** The Mobius band $B=[0,1]\times[-1,1]/(0,s)\sim(1,-s)$.

[F1] [[prop-the-manifold-orientation-system-is-a-local-system]] identifies monodromy with the sign of transported local orientations.

[F2] [[def-orientation-local-system-on-a-manifold-with-boundary]] extends the interior system over the boundary by a collar and identifies its boundary restriction by outward-normal-first transport.

## Proof

**Proof technique:** direct.

1.1 Give the rectangle the local orientation represented by the ordered coordinate directions $(\partial_x,\partial_s)$. The gluing sends these to $(\partial_x,-\partial_s)$, so one traversal of the core returns the negative local orientation. By [F1], its monodromy is $-1$. [F1]

2.1 Unwrap the gluing twice: $[0,2]\times[-1,1]/(0,s)\sim(2,s)$ maps two-to-one onto $B$. This space is an annulus, and its core maps twice around the core of $B$. Hence the pulled-back monodromy is $(-1)^2=1$. Since the annulus retracts onto its core circle, the pulled-back rank-one local system is constant. [F1, step 1.1]

3.1 The two horizontal rectangle edges are joined into one boundary circle. Traversing this circle runs from $(0,1)$ to $(1,1)\sim(0,-1)$ and then from $(0,-1)$ to $(1,-1)\sim(0,1)$, so its image in the core has degree two. Its orientation monodromy is therefore $(-1)^2=1$. The collar extension in [F2] gives the same transport at boundary points, hence the restricted system is constant. The boundary circle is orientable even though $B$ is not. Empty-boundary and zero-ring cases are not part of this fixed example, and no AC is used. [F1, F2, step 1.1] ∎

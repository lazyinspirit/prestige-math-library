---
id: cex-knot-kt-19-boundary-case
kind: counterexample
title: "A nonprimitive pair is not an ordinary slope"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-multicusped-dehn-filling
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §4.5, generalized Dehn surgery invariants"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf"
      locator: "Chapter 5, §5.8, cone and ordinary filling parameters"
verification:
  precheck: pending
---

## Statement refuted

Every nonzero integral pair $(p,q)$ on a torus with ordered basis $([\mu],[\lambda])$ represents an ordinary Dehn-filling slope.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

## Facts & Assumptions

**Given:** An oriented torus with ordered integral basis $([\mu],[\lambda])$ and the generalized cone-filling convention.

[F1] [[def-multicusped-dehn-filling]]: an ordinary slope is represented by a primitive integral pair modulo simultaneous sign; a generalized parameter $r(p,q)$ with primitive $(p,q)$ has core direction $(p,q)$ and cone angle $2\pi/r$.

## Proof

**Given:** The torus with ordered basis $([\mu],[\lambda])$ and the generalized cone-filling convention.

1.1 The coordinates $(2,0)$ have greatest common divisor $2$, so they are not primitive. By [F1], they therefore do not represent an ordinary slope or the meridian class of an ordinary smooth filling. The primitive pair on the same ray is $(1,0)$. [given, F1, algebra]

2.1 Write $(2,0)=2(1,0)$, so the radial factor is $r=2$. The generalized parameter convention in [F1] assigns cone angle $2\pi/2=\pi$ to this ray parameter. This differs from the ordinary smooth filling along slope $(1,0)$, which uses the primitive parameter with $r=1$ and full angle $2\pi$. Hence the nonprimitive pair is a cone/orbifold completion parameter, not an ordinary slope. [given, F1, step 1.1, algebra] ∎

## Sources

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

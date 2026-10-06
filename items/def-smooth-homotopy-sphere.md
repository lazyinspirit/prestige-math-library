---
id: def-smooth-homotopy-sphere
kind: definition
title: "Smooth homotopy sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 504-506, introduction and section 1 (homotopy spheres and the group of h-cobordism classes)"
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 399, introduction (closed manifolds with the homotopy type of S^7)"
---

## Definition

A **smooth homotopy $n$-sphere** is a closed connected smooth $n$-manifold
$\Sigma$ equipped with a homotopy equivalence $\Sigma\simeq S^n$. When the
homotopy equivalence is only asserted to exist, $\Sigma$ is still called a
homotopy $n$-sphere; when a particular equivalence is used in an argument, that
equivalence is part of the supplied data. An **oriented** smooth homotopy
$n$-sphere is a smooth homotopy $n$-sphere together with a chosen orientation
of $\Sigma$.

No topological Poincaré assertion is built into the definition: a homotopy
$n$-sphere is not assumed homeomorphic to $S^n$, and in dimension seven the
exotic examples of this page are homotopy spheres whose homeomorphism with
$S^n$ is a theorem proved separately, while their diffeomorphism failure is
the exotic phenomenon. The homotopy type supplies the homology and
fundamental-group data used later, and the chosen orientation is what the
oriented connected-sum operation of the following items uses.

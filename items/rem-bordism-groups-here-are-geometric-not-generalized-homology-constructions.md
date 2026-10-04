---
id: rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions
kind: remark
title: Bordism groups here are geometric, not generalized homology constructions
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-and-oriented-bordism-groups
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.4, bordism as a homology theory, printed pp.252-258"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Theorems 6.23 and 6.25 (Thom), electronic p.118"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Lecture 3, the Pontrjagin-Thom theorem, printed pp.25-28"
---

## Remark

The sets $\Omega_n^{O}$ and $\Omega_n^{SO}$ defined on this page are
**geometric**: their elements are bordism classes of closed smooth manifolds,
their operation is disjoint union, and their product (taken up later on this
page) is the Cartesian product of manifolds
([[def-unoriented-and-oriented-bordism-groups]]). Every construction on this
page is a statement about manifolds, bordisms and their boundary data.

This page constructs **no Thom spectrum, no ring spectrum and no generalized
homology theory**, and it asserts no excision, suspension or Mayer-Vietoris
property for bordism. In particular the identification of these groups with
stable homotopy groups of Thom spectra, for instance
$$\Omega_n^{O}\cong\pi_n(MO),\qquad \Omega_n^{SO}\cong\pi_n(MSO),$$
together with the Pontryagin-Thom construction, the Thom transversality
theorem and the bordism homology axioms, belongs to algebraic topology and to
later pages of this library; the cited sources prove those statements, but
nothing here depends on them. The remark fixes the seam so that consumers do
not read a spectrum-level or homology-theoretic claim into the geometric
definitions of this page.

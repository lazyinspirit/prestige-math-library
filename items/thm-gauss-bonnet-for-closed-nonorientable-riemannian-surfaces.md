---
id: thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces
kind: theorem
title: Gauss-Bonnet for closed nonorientable surfaces
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-riemannian-volume-density
  - thm-density-integration-is-defined-without-an-orientation
  - def-countable-choice
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the global theorem is stated by a finite geodesic triangulation, so no global orientation is needed once the curvature is integrated against the volume density."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): the global summation over a triangulation with facewise orientation choices."
---

## Statement

Assume the axiom of choice through the triangulation and density-integration
suppliers. Let $M$ be a closed compact Riemannian surface that is
nonorientable, with Riemannian metric $g$, Gaussian curvature $K$, and
orientation-free Riemannian area density $\mu_g$. Then
$$\int_MK\,\mu_g=2\pi\,\chi(M),$$
where $\chi(M)$ is the Euler characteristic of the smooth surface. No
orientation of $M$, no orientation double cover and no surface classification
is used.

## Facts & Assumptions

**Given:** A closed compact nonorientable Riemannian surface $(M,g)$, its Gaussian curvature $K$, and the orientation-free area density $\mu_g$.

[A1] Full AC is assumed through the finite curvilinear triangulation supplier and its arbitrary-Jordan-curve inputs; density integration needs only its countable-choice consequence ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Every compact smooth Riemannian surface admits a finite face-to-face curvilinear triangulation whose closed faces lie in frameable coordinate disks ([[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]).

[F2] For a closed, possibly nonorientable compact Riemannian surface with arbitrary orientations on the frameable faces of a finite curvilinear triangulation, one has $\int_MK\,\mu_g=2\pi(V-E+F)$ ([[lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation]]).

[F3] Any two finite face-to-face piecewise $C^2$ curvilinear triangulations of a compact smooth surface have the same $V-E+F$, and this common metric-independent value is written $\chi(M)$ ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

[F4] The Riemannian density $\mu_g$ and the orientation-free integral of a continuous function against it are defined without a choice of orientation ([[def-riemannian-volume-density]], [[thm-density-integration-is-defined-without-an-orientation]]).

## Proof

**Proof technique:** choose a finite curvilinear triangulation, orient its faces arbitrarily, apply the summation lemma and substitute the well-defined Euler characteristic.

1.1 The surface $M$ is a compact smooth surface with empty boundary, so [F1] produces a finite face-to-face curvilinear triangulation $\mathcal T=(V,E,F,\phi)$; every closed face lies in a frameable coordinate disk and is a compact regular disk region with ordinary corners. [A1, F1, given]

2.1 Since $M$ is closed, orient each face arbitrarily and apply [F2] to obtain $\int_MK\,\mu_g=2\pi(V-E+F)$. The density integral of [F4] needs no global orientation, and reversing one face orientation reverses both its positive boundary tangent and its quarter-turn, leaving the inward conormal and the cancellation intact. [A1, F2, F4, step 1.1]

2.2 The triangulation $\mathcal T$ is a finite face-to-face curvilinear triangulation of the compact smooth surface $M$, so [F3] identifies its count with the surface invariant: $V-E+F=\chi(M)$, independently of the triangulation and of any metric. [F3, step 1.1]

3.1 Substituting step 2.2 into step 2.1 gives $\int_MK\,\mu_g=2\pi\chi(M)$, which is the asserted identity; no orientation, orientation cover, or classification statement was used. [F2, F3, step 2.1, step 2.2, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 167-172, proves the global theorem by finite-face summation; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, gives the same summation with facewise choices. Here the supplier is the curvilinear triangulation [[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]], and the orientation-independent cancellation is proved in [[lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation]].

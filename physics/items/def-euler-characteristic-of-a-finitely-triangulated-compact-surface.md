---
id: def-euler-characteristic-of-a-finitely-triangulated-compact-surface
kind: definition
title: Euler characteristic of a finitely triangulated compact surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188); the counting of vertices, edges and faces in the proof of Theorem 9.7 and Problem 9-5."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22); the Euler characteristic of a triangulated surface."
---

## Definition

Let $M$ be a compact smooth two-manifold, possibly disconnected, nonorientable
or with boundary, and let $\mathcal T=(V,E,F,\phi)$ be a curvilinear
face-to-face triangulation of $M$ in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]]. Write
$$V(\mathcal T)=|V|,\qquad E(\mathcal T)=|E|,\qquad F(\mathcal T)=|F|,$$
counting each vertex once, each edge once (a boundary edge with one incident
face is still a single edge), and each closed triangular face once. The
**Euler characteristic of the triangulated surface $(M;\mathcal T)$** is
$$\chi(M;\mathcal T):=V(\mathcal T)-E(\mathcal T)+F(\mathcal T).$$

The number is defined for the supplied triangulation only. Under the axiom of
choice, existence of at least one such triangulation for every compact smooth
surface carrying a Riemannian metric follows from
[[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]. The
independence of $\chi(M;\mathcal T)$ from the choice of triangulation, and hence
the notation $\chi(M)$, is not assumed here; it is proved later by the
well-definedness theorem on this page. A subdivision that inserts vertices in
edges or cones a vertex inside a face does not change the value, as recorded by
the subdivision lemma on this page.

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed
pp. 167-172, counts vertices, edges and faces of a geodesic triangulation in the
proof of Theorem 9.7 and in Problem 9-5; Datar, *Lectures on Riemannian
Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, uses the same finite
count. The definition above is indexed by the supplied triangulation, and the
invariance statement is deliberately deferred to the later theorem of this
page rather than imported from the sources.

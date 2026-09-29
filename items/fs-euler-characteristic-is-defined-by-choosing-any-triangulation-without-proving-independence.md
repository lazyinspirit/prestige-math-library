---
id: fs-euler-characteristic-is-defined-by-choosing-any-triangulation-without-proving-independence
kind: false-statement
title: The raw cell-count triple is a surface invariant
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-euler-characteristic-of-a-finitely-triangulated-compact-surface
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - lem-euler-characteristic-is-unchanged-by-edge-and-face-subdivision
  - def-curvilinear-triangulation-of-a-compact-surface
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
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the Euler count enters only after the comparison of triangulations, through the equality of the curvature integral with 2pi(V-E+F)."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): the finite count is identified with the Euler characteristic through the global theorem, not by fiat."
---

## Statement

False: for a compact surface $M$, the raw triple $(V,E,F)$ of vertex, edge,
and face counts is independent of the chosen finite curvilinear triangulation.
The alternating sum $V-E+F$ is a surface invariant by a separate comparison
theorem; this false claim concerns the three counts individually.

## Facts & Assumptions

**Given:** The assertion that the raw cell-count triple is independent of triangulation, to be refuted by two triangulations of one disk.

[F1] A curvilinear triangulation of a compact surface is finite data $(V,E,F,\phi)$ with $V$ vertices, $E$ edges and $F$ triangular faces ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] Inserting a vertex in an edge and splitting the incident face along a new edge, or coning a vertex inside a face to its three vertices, changes the raw counts to $(V+1,E+3,F+2)$ in the interior-edge case, $(V+1,E+2,F+1)$ in the boundary-edge case and $(V+1,E+3,F+2)$ in the face-cone case, and always leaves $V-E+F$ unchanged ([[lem-euler-characteristic-is-unchanged-by-edge-and-face-subdivision]]).

[F3] The Euler characteristic of a triangulated surface is $\chi(M;\mathcal T)=V-E+F$; the number is defined for the supplied triangulation only, and independence from the choice of triangulation, and hence the notation $\chi(M)$, is not assumed in the definition ([[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]]).

[F4] Every two finite face-to-face piecewise $C^2$ curvilinear triangulations of a compact smooth surface have the same $V-E+F$, and the common value is written $\chi(M)$ ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Refutation

**Proof technique:** exhibit two triangulations of the same disk with different vertex and edge counts, then identify the separate theorem that makes their alternating sums equal.

1.1 Let $D$ be the closed unit disk and let $\mathcal T_1$ be its triangulation by a single curvilinear triangle, so $V_1=3$, $E_1=3$, $F_1=1$. Insert a point in the interior of one edge and split the face by the new edge from that point to the opposite vertex, obtaining a triangulation $\mathcal T_2$ of the same surface $D$; this is one of the elementary subdivisions of [F2] and gives $V_2=4$, $E_2=5$, $F_2=2$. Both are curvilinear triangulations of the same compact surface by [F1], but the raw data differ: $(3,3,1)\neq(4,5,2)$. [F1, F2, given]

2.1 The two triangulations in step 1.1 have different raw triples, $(3,3,1)\ne(4,5,2)$, although their underlying surface is the same disk. This directly refutes the stated independence of $(V,E,F)$. [step 1.1]

2.2 The alternating sums agree, $3-3+1=1=4-5+2$, as the subdivision lemma [F2] predicts. The definition [F3] initially writes this value as $\chi(D;\mathcal T)$; the comparison theorem [F4] proves that it is independent of $\mathcal T$ and may be written $\chi(D)$. Thus this example changes the individual counts, not Euler characteristic. [F2, F3, F4, step 1.1, algebra]

3.1 Hence the raw triple $(V,E,F)$ is not a surface invariant, while the alternating sum is invariant by step 2.2. [step 2.1, step 2.2] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 167-172, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, identify the alternating count of a triangulation with Euler characteristic through a comparison. The two-triangulation witness is the elementary subdivision of [[lem-euler-characteristic-is-unchanged-by-edge-and-face-subdivision]]. The indexed definition [[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]] and comparison theorem [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]] explain why the alternating sum remains invariant when the raw cell counts change.

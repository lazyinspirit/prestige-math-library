---
id: lem-euler-characteristic-is-unchanged-by-edge-and-face-subdivision
kind: lemma
title: Euler count under elementary subdivision
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-euler-characteristic-of-a-finitely-triangulated-compact-surface
  - def-curvilinear-triangulation-of-a-compact-surface
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: literature-derived
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
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the proof of Theorem 9.7 and Problem 9-5 count vertices, edges and faces of a triangulation and use exactly this invariance under subdivision."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): finite triangulation of a surface and the Euler count of the triangulation."
---

## Statement

Let $M$ be a compact smooth two-manifold, possibly disconnected, nonorientable
or with boundary, and let $\mathcal T=(V,E,F,\phi)$ be a curvilinear
face-to-face triangulation of $M$ in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]].

(i) Let $e\in E$, let $v$ be a point of the relative interior of $e$, and
replace $e$ by the two compact subedges determined by $v$. If $e$ is interior,
divide each of its two incident faces into two faces by one new edge from $v$
to the vertex opposite $e$; if $e$ is a boundary edge, divide its single
incident face in the same way. Require each new edge to be a regular $C^2$
embedding whose relative interior lies in the open face, whose image meets
the face boundary only at its endpoints, whose tangent direction at $v$ is
not collinear with the tangent of $e$ at $v$, and whose tangent at the old
opposite vertex enters the interior of that face's corner sector.

(ii) Let $f\in F$ and let $v$ be a point of the open face of $f$. Join $v$ to
the three vertices of $f$ by three new regular $C^2$ embedded edges whose
relative interiors lie in the open face, whose images meet the face boundary
only at their old-vertex endpoints, and which meet each other only at $v$.
Require their outward tangent rays at $v$ to be pairwise distinct and their
tangents at the old vertices to enter the interiors of the respective face
corner sectors. Replace $f$ by the three faces cut out by these edges.

In each case the resulting data are again a curvilinear face-to-face
triangulation of $M$, and its Euler characteristic equals $\chi(M;\mathcal T)$:
$$V'-E'+F'=V-E+F .$$
A finite sequence of such operations therefore also leaves $V-E+F$ unchanged.

## Facts & Assumptions

**Given:** A curvilinear face-to-face triangulation of a compact surface and one elementary subdivision operation of type (i) or (ii), with the new edges regular $C^2$ embedded arcs as specified.

[F1] A curvilinear triangulation is finite data $(V,E,F,\phi)$ of vertices, regular $C^2$ embedded edges meeting only at common endpoints, and face homeomorphisms from the standard closed triangle whose open faces are open in $\operatorname{Int}M$, with the stated half-disk, sector, incidence and link conditions ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] For a curvilinear triangulation $\mathcal T$ of a compact surface $M$, the Euler characteristic of the triangulated surface is $\chi(M;\mathcal T)=V-E+F$, counting each vertex, edge and triangular face once ([[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]]).

## Proof

**Proof technique:** count the local changes of $V$, $E$ and $F$ in the three possible configurations and check the triangulation axioms for the subdivided data.

1.1 An interior edge has exactly two incident faces and a boundary edge exactly one, and every face of a curvilinear triangulation has exactly three vertices and three sides; the operation of type (i) inserts one new vertex, replaces one edge by two, adds one new edge inside each incident face, and replaces each incident face by two faces. The operation of type (ii) inserts one new vertex, adds three new edges and replaces one face by three faces. [F1, given]

2.1 Case (i): if $e$ is interior, the changes are $\Delta V=1$, $\Delta E=+1+2=3$, $\Delta F=+2$, so $\Delta(V-E+F)=1-3+2=0$. If $e$ is a boundary edge, the changes are $\Delta V=1$, $\Delta E=+1+1=2$, $\Delta F=+1$, so $\Delta(V-E+F)=1-2+1=0$. [step 1.1, algebra]

2.2 Case (ii): the changes are $\Delta V=1$, $\Delta E=3$, $\Delta F=+2$, so $\Delta(V-E+F)=1-3+2=0$. [step 1.1, algebra]

2.3 The subdivided data satisfy the triangulation axioms [F1]: the new edges are regular $C^2$ embeddings by hypothesis; each new edge lies inside the closed face except at its endpoints and meets the split edge transversally at the inserted vertex by the non-collinearity hypothesis, so edges meet only at common endpoints; each new face is the image of the corresponding sub-triangle of the reference triangle under the old face homeomorphism composed with the subdivision homeomorphism, which is a homeomorphism of a closed triangle onto the closed new face; the incidence conditions for interior and boundary edges hold because each new edge bounds exactly the two faces that share it and each split edge bounds the two subfaces on one side of the split; and the link of the inserted vertex is a circle when $v\in\operatorname{Int}M$ and a closed interval when $v\in\partial M$, since the incident edge germs are the two halves of the split edge, the new edges inside the incident faces, and, in the boundary case, the germs of the boundary arcs, which glue in the induced cyclic or linear order. The unmodified vertices, edges and faces keep their properties. [F1, step 1.1, given]

3.1 Applying [F2] to the subdivided triangulation and combining with the three count computations gives $V'-E'+F'=(V-E+F)+\Delta(V-E+F)=V-E+F$ in each case, because the three cases are exhaustive: the split edge is interior or a boundary edge, and the second operation inserts a vertex in a face. [F2, step 2.1, step 2.2, algebra]

4.1 Repeating the argument finitely many times and adding the successive changes yields that any finite sequence of such operations leaves $V-E+F$ unchanged, while each intermediate and final datum is again a curvilinear triangulation by step 2.3. This proves the statement. [F2, step 2.1, step 2.2, step 2.3, step 3.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 167-172, and Problem 9-5 there count vertices, edges and faces of a triangulation of a compact surface and use the standard invariance of $V-E+F$ under elementary subdivision; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, records the same finite count. The two elementary moves and their local incidence counts are verified here against the library definition [[def-curvilinear-triangulation-of-a-compact-surface]]; the count identity itself is the elementary computation of this lemma.

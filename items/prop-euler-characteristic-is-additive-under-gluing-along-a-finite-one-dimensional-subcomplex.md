---
id: prop-euler-characteristic-is-additive-under-gluing-along-a-finite-one-dimensional-subcomplex
kind: proposition
title: Euler characteristic under finite subcomplex gluing
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - lem-curvilinear-triangulation-induces-a-finite-cw-structure
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-euler-characteristic-of-a-finitely-triangulated-compact-surface
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the vertex-edge-face count is additive under gluing along a common one-dimensional piece, as used when assembling surfaces from boundary pieces."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22): finite cell counts and their behavior under pasting along a subcomplex."
---

## Statement

Let $A$ and $B$ be compact smooth surfaces, or compact regular surface regions
in a common ambient smooth surface, each carrying a finite curvilinear
triangulation in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]], and suppose the two
triangulations agree on $C=A\cap B$: the intersection is a common finite
one-dimensional subcomplex, consisting of finitely many vertices and edges
shared by the two triangulations with the same incidences, so that it is a
finite disjoint union of embedded compact arcs and circles and the union
$A\cup B$ carries the finite curvilinear triangulation obtained by taking the
union of the two cell structures. Then
$$\chi(A\cup B)=\chi(A)+\chi(B)-\chi(C),\qquad \chi(C)=V_C-E_C .$$
No claim is made that arbitrary smooth curves or arbitrary overlay
intersections form such a compatible finite subcomplex.

## Facts & Assumptions

**Given:** Compact surfaces or compact regular surface regions $A$ and $B$ with finite curvilinear triangulations agreeing on the common finite one-dimensional subcomplex $C=A\cap B$, and the union triangulation built from the two cell structures.

[F1] A curvilinear triangulation is finite data with vertices, regular $C^2$ edges and triangular faces meeting face-to-face, so finitely many such data can be combined along a common subcomplex ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] The vertices, edge interiors and face interiors of a finite curvilinear triangulation form a finite regular CW complex whose $0$-, $1$- and $2$-cells are indexed by $V$, $E$ and $F$ ([[lem-curvilinear-triangulation-induces-a-finite-cw-structure]]).

[F3] For a curvilinear triangulation the Euler characteristic of the triangulated surface is $\chi(M;\mathcal T)=V-E+F$, and for a compact smooth surface the common value over all triangulations is written $\chi(M)$ ([[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Proof

**Proof technique:** count the cells of the union and apply inclusion-exclusion to the three finite counts.

1.1 Let $V_A,E_A,F_A$ and $V_B,E_B,F_B$ be the cell numbers of the two triangulations, and $V_C,E_C$ those of the common subcomplex $C$. Since the triangulations agree on $C$, the union of the two cell structures has vertex set $V_A\cup V_B$, edge set $E_A\cup E_B$ and face set $F_A\sqcup F_B$: a face of $A$ and a face of $B$ cannot have overlapping interiors because $A\cap B=C$ is one-dimensional, while every edge and vertex of the two triangulations lies in $A$ or in $B$ and the shared ones lie in $C$. [F1, given]

2.1 Counting cell incidences of the union gives $V=V_A+V_B-V_C$, $E=E_A+E_B-E_C$ and $F=F_A+F_B$, since the shared vertices and edges are counted once in each triangulation and once in $C$, and the faces have no overlap. [step 1.1, algebra]

2.2 The union data are a finite curvilinear triangulation of $A\cup B$: faces and edges are those of the two triangulations, they meet face-to-face because within each triangulation they do and across $C$ because the two triangulations agree on $C$ edge by edge and vertex by vertex, and the link conditions glue along the common subcomplex. Hence [F3] applies and $\chi(A\cup B)=V-E+F$, while $\chi(A)=V_A-E_A+F_A$ and $\chi(B)=V_B-E_B+F_B$ by the well-definedness of the Euler characteristic of compact surfaces. [F1, F2, F3, step 1.1, given]

3.1 Substituting step 2.1 into the counting expression and regrouping, $V-E+F=(V_A-E_A+F_A)+(V_B-E_B+F_B)-(V_C-E_C)=\chi(A)+\chi(B)-\chi(C)$, where the last term is the count $\chi(C)=V_C-E_C$ of the common one-dimensional subcomplex. [step 2.1, step 2.2, algebra]

4.1 Combining the two preceding steps and using the well-definedness of $\chi$ for compact surfaces gives $\chi(A\cup B)=\chi(A)+\chi(B)-\chi(C)$ for every compatible gluing along a finite one-dimensional subcomplex, as claimed. [F3, step 2.2, step 3.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 167-172, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Section 2.2, printed pp. 13-15, use the additivity of the vertex-edge-face count under pasting along a common boundary piece. The counting is carried out here directly for the union cell structure, using the CW interpretation of [[lem-curvilinear-triangulation-induces-a-finite-cw-structure]] and the well-defined surface Euler characteristic of [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]; the compatible-subcomplex hypothesis is stated explicitly instead of being assumed for arbitrary smooth overlays.

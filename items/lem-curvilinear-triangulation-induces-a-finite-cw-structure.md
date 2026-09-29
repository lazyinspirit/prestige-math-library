---
id: lem-curvilinear-triangulation-induces-a-finite-cw-structure
kind: lemma
title: A curvilinear triangulation gives a finite regular CW complex
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - def-cell-attachment-by-a-characteristic-map
  - def-topological-manifold-with-boundary
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-generated
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
    - title: Allen Hatcher, Algebraic Topology
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Appendix, §Simplicial CW Structures, printed p. 535 (PDF p. 543), lines 39298–39303: defines regular CW by characteristic maps that can be chosen to be embeddings and notes that cell closures are homeomorphic to closed balls. Terminology context only; this proof verifies the supplied maps directly."
---

## Statement

Let $\mathcal T=(V,E,F,\phi)$ be a finite face-to-face curvilinear
triangulation of a compact surface $M$, possibly disconnected, nonorientable,
or with boundary. The vertices, relative interiors of edges, and interiors of
faces form a finite regular CW complex on $M$: each cell characteristic map
is a homeomorphism from a closed ball onto its closed cell. Its $0$-, $1$-,
and $2$-cells are indexed respectively by $V$, $E$, and $F$.

## Facts & Assumptions

**Given:** The compact surface $M$ and finite face, edge, vertex, map, and incidence data of a curvilinear triangulation.

[F1] Each edge is the image of a regular $C^2$ embedding of $[0,1]$; its endpoints are two distinct vertices, its relative interior contains no vertex, and distinct edges meet only at common endpoints ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] Each face map is a homeomorphism from the closed standard triangle onto a closed face image; its open face is open in $\operatorname{Int}M$, its image is the closure of that open face, and each full side maps homeomorphically onto an edge ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F3] Face images cover $M$ and meet pairwise only in a common full edge, a common vertex, or not at all; every edge is incident to its stated one or two faces, the boundary edges and vertices form $\partial M$, and each vertex link is a circle or a closed interval as specified in the triangulation definition ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F4] Attaching an $n$-cell means forming the pushout of a closed $n$-disk along its boundary map; the quotient map restricted to the disk is its characteristic map ([[def-cell-attachment-by-a-characteristic-map]]).

[F5] A CW complex is Hausdorff, is built by disk attachments, and satisfies closure finiteness and the weak-topology condition on closed cells ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F6] A topological manifold with boundary is Hausdorff and second countable ([[def-topological-manifold-with-boundary]]).

## Proof

**Proof technique:** Build the skeleta from the supplied maps, then verify the finite closed-cell topology and regularity.

1.1 For each $v\in V$ take the singleton $0$-cell $\{v\}$; for each $e\in E$ take its relative interior as a $1$-cell; and for each $f\in F$ take $\phi_f((\Delta^2)^\circ)$ as a $2$-cell. The compact edge interval has closed image in the Hausdorff surface by [F1] and [F6], and its relative interior is dense in that image, so its cell closure is the interval with its two endpoint vertices. By [F2], each face image is the closure of its open face, and its boundary is the three full edge cells and their vertices. The face-edge incidences and vertex-link clauses in [F3], together with the face intersection and edge intersection clauses, ensure that these open cells are pairwise disjoint and cover $M$ and that every cell boundary is a union of lower cells. [F1, F2, F3, F6, given]

2.1 Let $X^0=V$ and $X^1=V\cup\bigcup_{e\in E}e$. The finite subspace $V$ is discrete: since $M$ is Hausdorff, each singleton is closed, and for each $v\in V$ the intersection of the finitely many open sets $M\setminus\{w\}$, $w\in V\setminus\{v\}$, isolates $v$ in $V$. Attach one closed interval for each edge to its two endpoint vertices using its supplied embedding from [F1]. The resulting finite attachment quotient is compact and maps continuously and bijectively to $X^1$: injectivity follows because distinct edge images meet only at common endpoints. Since $X^1$ is a subspace of the Hausdorff space $M$ by [F6], the map is a homeomorphism; a continuous bijection from a compact space to a Hausdorff space is closed because the image of every closed subset is compact and hence closed. Now attach one triangular disk for each face along its boundary map from [F2]. For completeness, let $c$ be the triangle's centroid; each ray from $c$ meets the polygonal boundary once, at a positive continuous radial distance $R(u)$ for unit direction $u$, so the map $c+ rR(u)u\mapsto ru$ for $0<r\leq1$, extended by $c\mapsto0$, is a homeomorphism from the closed triangle to the closed unit disk (continuity at $c$ follows as the image norm is $r$). Thus the supplied face map gives a disk attachment as in [F4]. The face quotient is compact and maps continuously and bijectively onto $M$: [F2] gives injectivity on each face, while [F3] and step 1.1 show distinct face interiors are disjoint from each other and from $X^1$, with all remaining identifications exactly along their common full edges or vertices already in $X^1$. The compact-to-Hausdorff argument using [F6] makes this map a homeomorphism. The open interval and face interiors map homeomorphically onto the cells of step 1.1; taking $X^n=M$ for $n\geq2$ completes the filtration required in [F5]. [F1, F2, F3, F4, F5, F6, step 1.1]

3.1 There are finitely many cells, so every closed cell meets only finitely many cells. Each face image is closed by [F2]; each edge image is compact by [F1] and hence closed in the Hausdorff space $M$ by [F6]; each vertex is closed as well. These finitely many closed cells cover $M$. If $A\subseteq M$ has closed intersection with every closed cell, each such intersection is closed in $M$ because the closed cell is closed in $M$, and their finite union is $A$; hence $A$ is closed. The converse follows by restriction to each closed cell. This is the weak topology required in [F5]. [F1, F2, F3, F5, F6, step 1.1, step 2.1]

4.1 The vertex characteristic map is the point inclusion, each edge characteristic map is its supplied interval embedding, and each face characteristic map is the composition of the fixed disk-to-triangle homeomorphism in step 2.1 with its supplied face homeomorphism. Thus every characteristic map is a homeomorphism onto its closed cell, which is the regularity asserted in the statement. The open cells are indexed once each by $V$, $E$, and $F$, giving the stated counts. If $M$ is empty, the covering clause forces all three finite index sets to be empty and the empty CW complex satisfies the same clauses. The supplied finite data require no choice principle. [F1, F2, F4, F5, step 1.1, step 2.1, step 3.1, given] ∎

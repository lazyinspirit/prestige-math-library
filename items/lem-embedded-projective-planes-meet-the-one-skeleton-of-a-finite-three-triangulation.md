---
id: lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation
kind: lemma
title: An embedded projective plane meets the one-skeleton of a finite three-triangulation
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - ex-projective-plane-polygonal-schema
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - lem-no-closed-nonorientable-pl-surface-in-s-three
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Let $T$ be a finite simplicial triangulation of a compact PL three-manifold $M$. Every PL embedded projective plane in $\operatorname{Int}M$ meets $T^{(1)}$. The manifold may be nonorientable and may contain projective planes. No irreducibility or choice hypothesis is imposed.

More precisely, every compact subset of $\operatorname{Int}M\setminus T^{(1)}$ lies in the interior of an explicitly parametrized finite thickening of the dual graph, built from convex three-ball vertex pieces and standard disk-prism edge pieces. An embedded projective plane in such a thickening would lift into a parametrized finite tree of these balls, contradicting its nonorientability.

## Statement references

[[lem-parametrized-pl-balls-absorb-standard-boundary-windows]] — finite tree gluing of parametrized balls along marked disk windows.

[[lem-no-closed-nonorientable-pl-surface-in-s-three]] — the obstruction in the standard PL three-sphere.

## Facts & Assumptions

**Given:** The finite triangulation and a hypothetical embedded projective plane $S$ missing its one-skeleton and lying in $\operatorname{Int}M$.

[F1] The projective plane is the finite polygonal surface with attaching word $aa$ and is nonorientable. Removing a point in the open polygonal face gives an open Mobius band, which retracts onto its core circle; this retraction is obtained by its rectangle-with-reversed-ends model. Thus every polygonal loop may be moved off that point and then onto a power of the core, while twice the core bounds the polygonal face. ([[ex-projective-plane-polygonal-schema]])

[F2] Two parametrized finite PL three-balls glued along marked parametrized boundary disks by a given PL map form a parametrized PL three-ball. Consequently a finite tree of such pieces is a parametrized ball, by successively deleting a leaf and applying that assertion to its one attaching window. Prisms with convex disk bases are themselves parametrized balls. ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]])

[F3] No closed nonorientable PL surface embeds in the standard PL three-sphere, and therefore none embeds in a parametrized PL three-ball: compose its parameter with the standard inclusion of the convex ball into $\mathbb R^3\subset S^3$. ([[lem-no-closed-nonorientable-pl-surface-in-s-three]])

## Proof

1.1 First construct the claimed finite thickening around any compact $C\subset\operatorname{Int}M\setminus T^{(1)}$. Give each tetrahedron its barycentric coordinates $x_0,x_1,x_2,x_3$. For a sufficiently small common $\epsilon>0$, cut it down to the convex polyhedron $$B_\tau=\{x_i\ge0,\ \sum_i x_i=1,\ x_i+x_j\ge\epsilon\text{ for }i\ne j\}.$$ On an original face its window is the central triangle on which each of the other three coordinates is at least $\epsilon$. Different original face windows are disjoint, because a point in their intersection would have two zero coordinates. The shared windows agree from the two incident tetrahedra. Their union, glued across the interior faces of $T$, contains $C$ in its relative interior for sufficiently small $\epsilon$: the only points where a pair sum vanishes are on original edges, and the finitely many positive pair sums have a positive lower bound on the corresponding compact portions of $C$. Boundary faces do not meet $C$ after a sufficiently small boundary trimming if needed, since $C\subset\operatorname{Int}M$. All pieces and windows are supplied convex parametrized balls and disks. [given, construct]

1.2 We record the elementary graph fact needed for the lift. Fix a spanning tree in a finite connected graph and contract its tree edges. Traversing the remaining oriented edges labels each loop by a word in their names and inverses. Cancelling adjacent inverse pairs is exactly path homotopy in the graph: each cancellation retracts a path followed by its reverse, and the space of all reduced paths from a base vertex, joined by the operation of appending one edge and cancelling, is a tree. It has a unique finite edge path between any two vertices, since deleting the last edge repeatedly reaches their longest common initial path. A loop contracting in the graph lifts to a loop in this tree and has empty reduced word, as can also be checked one triangle at a time in a subdivided disk homotopy. If a reduced word $w$ has square equal to the empty word, cyclically cancel its first and last inverse letters until $w=tct^{-1}$ with $c$ cyclically reduced. If $c$ were nonempty, $cc$ would still be reduced and nonempty, so $w^2$ could not reduce to the empty word. Thus $w$ itself is empty. The graph has no nontrivial element of order two. [construct, algebra]

2.1 Separate each glued face window from its two adjacent vertex pieces by thin, disjoint face collars. These have explicit finite PL prism parameters. For completeness, in $B_\tau$ cut the face $x_i=0$ off by $x_i=\eta$, with $\eta>0$ small enough that no other vertex of the polyhedron lies in that slab. Its cross-sections have the same finite face incidence as the central triangle; triangulate corresponding polygonal faces and cone the resulting matching face subdivisions to obtain a PL parameter of the slab as a disk prism. The slabs for different original faces can be chosen disjoint. Cutting them off leaves a convex vertex ball, and the two matching slabs on opposite sides of a glued window form its standard edge prism. The resulting finite space $H$ has disjoint ball vertex pieces and disk-prism edge pieces attached along their marked end windows. It contains $C$ in its interior. Its incidence graph $G$ is the corresponding finite dual graph, allowing loops or repeated edges. Collapse each vertex piece to its vertex and map each prism by its interval parameter. This defines a continuous PL map $p:H\to G$. [step 1.1, construct]

3.1 Apply the construction with $C=S$, and restrict to its connected component of $H$. The image under $p$ of the core loop in [F1] has square null-homotopic in $G$, because twice that core bounds its face in $S$. By step 1.2 its graph word is empty. Every loop on $S$ is homotopic to a power of that core by [F1], so every loop of $S$ has empty graph word under $p$. There is no appeal here to a choice of a universal cover: the graph paths and their reduced words are explicit finite strings. [given, F1, step 2.1, step 1.2, construct]

4.1 Construct the tree of copies of the marked vertex balls and edge prisms by indexing them with reduced paths in the original graph $G$, before contracting its spanning tree in step 1.2. A path has a specified endpoint vertex; deleting successive last edges or appending one edge gives the usual path tree. A window joins the indicated endpoint copies exactly as its original graph edge is appended or cancelled. The projection to $H$ is a local PL homeomorphism, including at the window seams, because it reproduces each finite incident ball/prism chart. The map of $S$ lifts into these copies. One direct finite construction chooses a base point, subdivides the finite surface into pieces lying in ball or prism charts, and assigns the copy at another point by the reduced original-edge path from the base point. Step 3.1 makes this independent of the path: a loop with empty generator word contracts, and its original-edge path cancels to the empty path in the path tree. On each chart this specifies the inverse local projection, and the assignments agree on overlaps. Thus the lift is PL. It is embedded: equal lifted image points would have equal projected image points, and the original map of $S$ is injective. [given, step 1.2, step 3.1, construct]

5.1 The lifted finite surface meets only finitely many copies. This can be seen directly in the construction of step 4.1: use a spanning tree of its finite subdivision to choose the chart paths and extend over its finitely many faces; only finitely many finite words occur. Enlarge this finite set of copies by their connecting tree paths and, where the surface meets a window, the adjacent pieces. This gives a finite subtree of parametrized balls and prisms containing the lifted surface; further one-layer enlargement makes its surface points interior. Subdivide each graph edge by a prism node. The resulting finite incidence graph remains a tree, all pieces have their supplied ball parameters, and all attaching windows are the supplied parametrized disks. By the leaf induction [F2] its union is a parametrized PL three-ball. The embedded lift of $S$ contradicts [F1] and [F3]. This excludes the hypothetical zero-edge projective plane and proves the Statement. [F1, F2, F3, step 2.1, step 4.1, construct, contradiction] ∎

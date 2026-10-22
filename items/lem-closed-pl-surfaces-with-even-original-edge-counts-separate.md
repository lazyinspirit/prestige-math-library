---
id: lem-closed-pl-surfaces-with-even-original-edge-counts-separate
kind: lemma
title: Closed PL surfaces with even original-edge counts separate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 0
verification:
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

Let $M$ be a connected compact PL three-manifold with a finite simplicial triangulation $T$. Let $S\subset\operatorname{int}M$ be a connected closed locally flat PL surface. Suppose $S$ misses the original vertices, is transverse to the original edges, and meets every original global edge in an even number of points. Then $M\setminus S$ is disconnected. Neither $M$ nor $S$ is assumed orientable, and no irreducibility or choice principle is required.

## Facts & Assumptions

**Given:** The finite triangulation and the embedded locally flat surface with the stated edge parities. Local flatness means that a neighborhood of each surface point has a PL chart in which the surface is a coordinate plane.

## Proof

1.1 A transverse finite PL closed loop has a well-defined intersection count with $S$ modulo two, and this count is invariant under PL homotopy. Here is the finite representative argument needed for that assertion. Subdivide a homotopy annulus and the ambient finite PL charts until its pieces lie in charts straightening $S$. Put its interior vertices in general position, keeping its transverse boundary loops fixed. Such positions exist by avoiding finitely many affine equalities in each chart; a common finite subdivision makes the constructions agree on chart overlaps. In each chart, transverse intersection is the inverse image of one linear coordinate being zero. On the triangulated annulus these pieces paste to a compact PL one-manifold: interior points have two incident sides and boundary points have one. It consists of finitely many circles and arcs. Each arc has two boundary endpoints, so the total number of intersections on the two boundary loops is even. This proves the asserted invariance, with no orientation signs. The argument also permits an arbitrarily small generic perturbation of a loop or homotopy relative to already transverse boundary data. [given, construct, algebra]

1.2 Every finite PL closed loop is PL homotopic to an edge loop in $T$. For an explicit finite construction, realize the finite abstract complex in a Euclidean space by its barycentric coordinates. The inverse images of its finitely many open vertex stars cover the parameter circle. Subdivide the circle sufficiently finely that the image of each closed vertex star of that subdivision lies in one of these target stars, and assign that source vertex a witnessing target vertex. The vertices assigned to the ends of a source edge belong to the carrier simplex of every interior image point on that edge; consequently they span an edge or coincide. They define an edge loop. The original map and this edge map are carried by common original simplices, so they are homotopic within those simplices. Explicitly subdivide further where the original PL map changes its carrier, triangulate each homotopy prism, and extend linearly from the two boundary maps; each such extension stays in its convex carrier simplex. This gives the claimed PL homotopy. Since $S$ misses the target vertices and is transverse to the target edges, the resulting edge loop is transverse after harmless parametrization and a small perturbation at its vertices disjoint from $S$. [given, construct]

2.1 An edge loop crosses $S$ an even number of times. Indeed each traversal of an original edge contributes its even intersection number, with multiplicity; backtracking and repeated edges do not affect parity. By steps 1.1 and 1.2 every transverse finite PL closed loop has even intersection count with $S$. The argument allows boundary edges: $S$ is disjoint from the boundary of $M$, so any small inward displacement there is disjoint from $S$ and changes no count. [given, step 1.1, step 1.2, algebra]

3.1 Suppose $M\setminus S$ were connected. Choose one straightening chart at a point of $S$ and a short interval crossing its coordinate plane once. Its endpoints lie in the complement and can be joined there by a finite PL path. To justify the path assertion without a selection principle, the set reachable from one endpoint by finite polygonal paths in PL charts is open and its complement is open; connectedness makes the reachable set the entire complement. Membership supplies just one finite chart chain and finitely many joining points. Concatenate that path with the transverse interval, then perturb away any extraneous tangencies while staying in the complement along the joining path. The resulting finite PL closed loop crosses $S$ exactly once. This contradicts step 2.1. Hence the complement is disconnected. All selections and subdivisions were finite; no orientability or ball bounded by $S$ was used. [given, step 1.1, step 2.1, construct, contradiction] ∎

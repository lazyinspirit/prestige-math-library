---
id: lem-plane-edge-face-incidence
kind: lemma
title: "Face frontiers are unions of whole edges; a cycle edge borders two faces and a bridge borders one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, thm-polygonal-jordan-curve, lem-polygonal-arc-does-not-separate-the-plane, lem-edge-is-a-bridge-iff-it-lies-on-no-cycle, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemmas 4.1.3 and 4.2.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
      locator: "Chapter 4 preview, pp. 95 and 97–98"
pipeline_run: null
---

## Statement

In a plane graph ([[def-plane-graph-face-and-boundary]]), if the relative interior of an edge meets the frontier of a face, then the whole edge lies in that frontier. An edge on a cycle is incident with two distinct faces, one on each local side. A bridge is incident with one face on both local sides and is therefore traversed twice in that face's boundary walk. Edge deletion is as in [[def-graph-deletion-contraction-minor-and-subdivision]], and the bridge cases use the arc-complement fact [[lem-polygonal-arc-does-not-separate-the-plane]].

## Facts & Assumptions

**Given:** A plane graph $G$ and an edge $e$.

[L1] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

[L2] An edge is a bridge if and only if it lies on no cycle ([[lem-edge-is-a-bridge-iff-it-lies-on-no-cycle]]).

[F1] If $X_1,X_2$ are disjoint finite unions of plane points and polygonal arcs, and a polygonal arc $P$ joins one point of each with its interior inside a region $O$ of $\mathbb R^2\setminus(X_1\cup X_2)$, then $O\setminus P$ remains a single region of $\mathbb R^2\setminus(X_1\cup P\cup X_2)$ (Diestel, *Graph Theory*, Lemma 4.1.3, cited above).

## Proof

**Proof technique:** direct.

1.1 At an interior point of a straight segment of the polygonal arc $e$, a sufficiently small disk meets the drawing only in that segment; its two open sides lie in faces. At each of the finitely many bends, a small disk meets the drawing only in the two adjacent subsegments of $e$, and its two complementary local sides join the corresponding sides of those segments. Overlapping these finitely many local disks along $e$ shows that each side stays in the same face throughout the edge interior. Every neighbourhood of an endpoint meets the edge interior, so that endpoint also lies in the frontier of each incident face. Hence any face frontier meeting the edge interior contains the whole edge. [given]

2.1 If $e$ lies on a cycle $C$, [L1] gives two regions of the polygonal image of $C$. The two local sides of $e$ lie in different such regions and cannot be joined in the complement of the full drawing, so they belong to two distinct faces of $G$. [step 1.1, L1]

3.1 If $e$ lies on no cycle, [L2] makes it a bridge. Partition the components of the deleted-edge drawing into two disjoint finite unions of points and arcs $X_1,X_2$, with the endpoints of $e$ in different parts. The two local sides lie in one face $f$ of that drawing, since a small rectangle across an interior point of $e$ joins them there. Apply [F1] to $X_1,X_2$ and $e$: $f\setminus e$ is one face of the original drawing. Thus the two local sides border the same face; its boundary walk encounters $e$ once on each side. [step 1.1, L2, F1] ∎

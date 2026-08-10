---
id: lem-plane-edge-face-incidence
kind: lemma
title: "Face frontiers are unions of whole edges; a cycle edge borders two faces and a bridge borders one"
status: draft
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
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemmas 4.2.2-4.2.3"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

In a plane graph ([[def-plane-graph-face-and-boundary]]), if the relative interior of an edge meets the frontier of a face, then the whole edge lies in that frontier. An edge on a cycle is incident with two distinct faces, one on each local side. A bridge is incident with one face on both local sides and is therefore traversed twice in that face's boundary walk. Edge deletion is as in [[def-graph-deletion-contraction-minor-and-subdivision]], and the bridge cases use the arc-complement fact [[lem-polygonal-arc-does-not-separate-the-plane]].

## Facts & Assumptions

**Given:** A plane graph $G$ and an edge $e$.

[L1] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

[L2] An edge is a bridge if and only if it lies on no cycle ([[lem-edge-is-a-bridge-iff-it-lies-on-no-cycle]]).

## Proof

**Proof technique:** direct.

1.1 A sufficiently small rectangle about any interior point of $e$ meets the drawing only in a straight subsegment of $e$. Its two open half-rectangles lie in faces. Sliding overlapping rectangles along the compact edge interior shows that each local side remains in one face until an endpoint is reached; hence frontier membership propagates along the entire edge. [given]

2.1 If $e$ lies on a cycle $C$, [L1] gives two regions of the polygonal image of $C$. The two local sides of $e$ lie in different such regions and cannot be joined in the complement of the full drawing, so they belong to two distinct faces of $G$. [step 1.1, L1]

3.1 If $e$ lies on no cycle, [L2] makes it a bridge. Delete its interior. The two local sides can be joined by a small detour around either endpoint through the component complement, because no second endpoint path closes a polygon. They therefore lie in one face, and a boundary traversal encounters $e$ once in each direction. [step 1.1, L2] ∎


---
id: lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction
kind: lemma
title: "Sc toolkit minimal diagrams and cut vertex reduction"
status: published
origin: pipeline
deps: [def-sc-toolkit-labelled-planar-disc-diagram, thm-sc-toolkit-van-kampen-existence, thm-well-ordering-principle]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.5 Figure 3.5.1 and nonsingular restriction before Definition 3.5.3"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Statement

Every null word has a minimum-area diagram. Such a diagram is **reduced**: no adjacent distinct faces form a cancellable pair, meaning that their full boundary words, read from the same oriented common edge with one face orientation reversed, agree literally. Every diagram decomposes along cut vertices into nonsingular disc blocks and bridge blocks. An end disc block meets the remainder in at most one vertex; a boundary arc avoiding that vertex in its interior is a contiguous part of the full outer walk. An end bridge has a spur tip.

## Facts & Assumptions

**Given:** A null word $w$ and diagrams with the conventions below.

[F1] The planar diagram and boundary-walk conventions are those of [[def-sc-toolkit-labelled-planar-disc-diagram]].

[F2] A null word has a diagram ([[thm-sc-toolkit-van-kampen-existence]]).

[F3] A nonempty subset of the natural numbers has a least member ([[thm-well-ordering-principle]]).

## Proof

1.1 The set of face counts of diagrams for $w$ is nonempty by [F2] and is a subset of the natural numbers. Its least member exists by [F3] and, being in this set, is attained by a diagram. This is a single existential choice, even for an infinite presentation. [F2, F3]

1.2 To decompose a diagram, split at any cut vertex into its incident components together with that vertex, and repeat in each component. Each split partitions a finite nonempty set of edges into smaller sets, so it terminates. The incidence graph of resulting blocks and splitting vertices is connected. It has no cycle: such a cycle would provide a path avoiding one of the vertices that was a cut vertex at the corresponding split. Hence this incidence graph is a finite tree. A block with no cycle is a single bridge. In a block with a cycle, the outer boundary is a simple closed curve: a repeated boundary vertex would separate two successive exterior sectors and be a cut vertex. Every bounded region is filled, since an unfilled bounded region would be a hole in the original simply connected planar complex. Thus this block is a nonsingular disc. [F1]

2.1 Suppose two adjacent faces cancel. Cut them apart along any further common edges, keeping copies of those edges on the attached outside sectors. Delete their interiors and the selected common edge; pair their complementary boundary paths position by position. The paths have equal labels in the same direction because the full face words agree when based on that common edge. Glue each paired pair, carrying its outside sectors with it in their inherited planar order. This is the collapse of a folded pair of polygons to one path: it can be performed in a small planar neighbourhood of those polygons after the cuts. Components pinched off at a vertex are retained as vertex-attached components; any closed interior components are discarded. The outside boundary occurrences and their labels are preserved; a disappearing backtrack can be restored by an exterior spur. No hole is introduced, since the removed region is replaced by its paired boundary path. The result is a diagram for $w$ with at most two fewer faces. This contradicts step 1.1. [F1, step 1.1]

3.1 Traversing the outer boundary visits each branch of this finite tree in planar order, returning to its attachment before continuing in the parent block. Therefore an end disc block has just one possible interruption, at its attachment vertex; all boundary arcs not passing through that vertex internally occur uninterrupted in the full walk. An end bridge has a terminal vertex of degree one, whose excursion reads $aa^{-1}$. The one-point diagram needs no blocks, and a single disc needs no attachment. These observations prove the asserted decomposition and boundary qualifications. [step 1.2, F1] ∎

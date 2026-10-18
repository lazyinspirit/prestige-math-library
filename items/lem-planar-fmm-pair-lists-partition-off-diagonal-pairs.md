---
id: lem-planar-fmm-pair-lists-partition-off-diagonal-pairs
kind: lemma
title: Planar FMM lists partition all ordered off-diagonal particle pairs
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-finite-planar-quadtree-fmm-pair-lists]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leslie Greengard and Vladimir Rokhlin, A Fast Algorithm for Particle Simulations, Journal of Computational Physics 73 (1987), 325–348"
      url: "https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Statement

For a finite quadtree and a nonempty root pair as in [[def-finite-planar-quadtree-fmm-pair-lists]], the recursive interaction decomposition terminates. The Cartesian pair sets $I_C\times I_D$ of its far cell pairs, together with its direct near particle pairs, are pairwise disjoint and partition $\{(j,i)\in I\times I:j\ne i\}$.

## Facts & Assumptions

**Given:** A finite quadtree with its source/target labels, the recursive pair rule, and distinct positions for distinct labels.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: each internal cell's four child cells partition its labels; the recursive rule either records a separated cell pair, records the off-diagonal pairs in two leaves directly, or replaces a cell pair by its nonempty child-pair partition.

## Proof

1.1 For a cell $C$ let $h(C)$ be its remaining tree height, and for a pair $(C,D)$ use $h(C)+h(D)$. Every nonterminal call split by [F1] selects a nonleaf cell (both coordinates when $C=D$); each child call strictly lowers the height of every split coordinate and leaves any unsplit coordinate fixed. The measure is a nonnegative integer, so every branch terminates. The recursion is finitely branching (at most sixteen child pairs at a simultaneous equal-cell split), hence its finite-depth recursion tree is finite. [given, F1, induction]

2.1 If the source cell is split, its child label sets are disjoint and cover the source labels, so the child Cartesian products are a disjoint cover of $I_C\times I_D$. The same statement holds when the target cell is split. When $C=D$ is internal, splitting both ordered coordinates gives all ordered child products, also disjoint. Thus each recursive replacement preserves exactly the parent pair set. [F1, step 1.1, algebra]

3.1 A terminal far cell pair records its entire Cartesian product $I_C\times I_D$. A terminal near pair of leaves records exactly that product with the diagonal labels removed. By step 2.1, induction from the root pair shows these terminal records cover the off-diagonal part of the root product without overlap. [F1, step 2.1, induction]

4.1 A far cell pair has disjoint circumscribed disks because $R_{CD}>a_C+a_D$; hence its label sets cannot intersect and its product contains no diagonal pair. Removing the diagonal only at terminal leaf pairs therefore leaves exactly all ordered pairs $(j,i)$ with $j\ne i$, each once. [F1, step 3.1, algebra] ∎

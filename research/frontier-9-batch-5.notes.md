# Frontier 9 batch 5 — source and authoring ledger

Scope: graph colouring and the fundamental group. This is draft-only authoring
in the linked `build-foundations-ab-pairs` worktree.

## Authored core

- Proper colourings, clique and independence numbers, the greedy
  $\Delta+1$ upper bound, and the standard chromatic lower/upper bounds.
- Exact colouring of complete graphs and a $P_4$ vertex order showing that
  greedy colouring can use more than the chromatic number.
- Based loops, loop-class multiplication, induced homomorphisms, functoriality,
  simple connectedness, and trivial fundamental groups of nonempty convex
  subsets of Euclidean space.
- The unit interval as a directly checkable trivial-fundamental-group example.

## Sources checked

- [Reinhard Diestel, *Graph Theory*, basic concepts](https://diestel-graph-theory.com/basic.html)
  for finite graph colouring conventions.
- [Allen Hatcher, *Algebraic Topology*, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)
  for loop concatenation, induced maps, and contraction arguments.

## Boundary record

The null graph is included in the clique/independence bounds, while the greedy
lemma is explicitly nonnull. Loop multiplication fixes endpoint and basepoint
conventions; the convexity theorem assumes the subset is nonempty. The exact
proof-bearing scope and its fact/step/boundary maps are in
`frontier-9-batch-5.proof-contracts.json`.

---
id: ex-fmm-clustered-points-require-depth-sensitive-work
kind: example
title: A clustered point set makes tree depth enter the work
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-finite-planar-quadtree-fmm-pair-lists, alg-planar-laplace-fmm-fixed-order, thm-planar-fmm-operation-count-under-linear-list-assumptions]
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

## Example

This example shows why the operation theorem records tree depth, node count, and list counts explicitly. In the square $[-1/2,1/2]^2$, place two distinct unit charges at $z_1=0$ and $z_2=2^{-M}$ for an integer $M\ge3$, and refine a dyadic quadtree until every leaf has occupancy at most $1$.

## Facts & Assumptions

**Given:** The dyadic square partition, the two distinct points above, leaf occupancy $1$, and the per-node passes of the planar FMM.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: dyadic bisection halves every cell side length, and the level-restricted linear-size hypothesis explicitly bounds the number $T$ of nonempty cells by a constant times $N$.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: the upward and downward passes visit every nonempty leaf and every parent-child edge whose two cells are nonempty.

[F3] [[thm-planar-fmm-operation-count-under-linear-list-assumptions]]: the $O(Np^2)$ conclusion requires $T,V,K,J=O(N)$.

## Verification

1.1 At depth $h$ the cell along the corner path containing $0$ has side length $2^{-h}$. For every $h<M$, $2^{-M}<2^{-h}$, so both $0$ and $2^{-M}$ lie in that same cell; at the next split the second point is on the midpoint boundary and is assigned to the upper child, while $0$ is assigned to the lower child. Therefore the tree has a nonempty path through depth $M$ and at least $M+1$ nonempty cells, although $N=2$. [given, F1, algebra]

2.1 With fixed $p=1$, $Np^2=2$ is constant as $M$ varies, whereas [F2] makes the passes visit at least the $M$ nonempty parent-child edges on the path from step 1.1. This family violates the uniform node bound $T\le C_TN$ required in [F3], so the theorem's hypotheses do not give a uniform $O(Np^2)$ bound over arbitrarily clustered inputs. [given, F2, F3, step 1.1, algebra] ∎

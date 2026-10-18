---
id: thm-planar-fmm-operation-count-under-linear-list-assumptions
kind: theorem
title: Planar FMM operation count under explicit linear-size tree and list bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-finite-planar-quadtree-fmm-pair-lists, alg-planar-laplace-fmm-fixed-order, lem-planar-fmm-pair-lists-partition-off-diagonal-pairs]
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

Let $N\ge1$ and $p\ge1$. Suppose the finite quadtree and recursive interaction decomposition supplied to [[alg-planar-laplace-fmm-fixed-order]] are linear-size level-restricted and have bounded lists in the exact sense of [[def-finite-planar-quadtree-fmm-pair-lists]]: $T,V\le C\,N$, $K:=|\mathcal F|\le C\,T$, and $J:=|\mathcal N|\le C\,N$ for a constant $C$ independent of $N,p$. Counting each complex addition, multiplication, division by a nonzero number, coefficient copy, cell-pair inspection, and evaluation of a fixed logarithm branch at one argument as one operation, the FMM passes and direct near evaluation use at most
$$C_0\bigl(N(p+1)+(T+K)(p+1)^2+V+J\bigr)$$
operations for an absolute implementation constant $C_0$. Hence the total counted work is $O(N(p+1)^2)$, and therefore $O(Np^2)$ for $p\ge1$. The input quadtree construction and point-to-cell preprocessing are not included; a highly clustered input must report its actual tree depth, node count, and list/traversal counts before a linear-in-$N$ conclusion is made.

## Facts & Assumptions

**Given:** A finite quadtree, its cell-membership arrays, the recursive pair decomposition, and a fixed order $p\ge1$.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: $T$ counts nonempty cells, $V$ counts recursive pair inspections, $K$ counts far cell pairs, and $J$ counts direct near particle pairs; the linear-size and bounded-list assumptions are explicit inequalities on these counts.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: P2M, M2M, M2L, L2L, L2P, and direct near evaluation are finite sums with the displayed index ranges; M2M and L2L process only parent-child edges whose two cells are nonempty.

[F3] [[lem-planar-fmm-pair-lists-partition-off-diagonal-pairs]]: each off-diagonal pair appears once in the far or direct list.

## Proof

1.1 At each nonempty leaf, P2M accumulates $p+1$ moments per resident source, so the total is at most $N(p+1)$ operations up to a constant. The nonempty cells form a rooted connected subtree, so enumerating them by inspecting four children per nonempty internal cell costs $O(T)$ and yields exactly $T-1$ parent-child edges whose two cells are nonempty. On each such edge, M2M or L2L evaluates triangular sums with $\sum_{n=0}^p(n+1)=(p+1)(p+2)/2$ terms, hence at most $O((p+1)^2)$ operations. Empty-child moments are zero and their edges are skipped. Initializing the local vectors costs $O(T(p+1))$, and both this and the $O(T)$ enumeration cost are absorbed in the displayed bound. [given, F1, F2, algebra]

1.2 For each of the $K$ far pairs, M2L forms $p+1$ coefficients, each using at most $p+1$ terms, and evaluates the fixed logarithm once at the pair center; this costs $O(K(p+1)^2)$ because $p\ge1$. L2P evaluates one degree-$p$ polynomial and its derivative at each of $N$ targets in $O(N(p+1))$ operations. [given, F1, F2, algebra]

1.3 The recursive list decomposition uses $V$ cell-pair inspections. Each of the $J$ direct near particle-pair evaluations uses a constant number of arithmetic operations and one fixed-logarithm evaluation. By [F3] no required pair is counted twice or omitted; the work to dispatch the finite lists is included in these counts. [given, F1, F2, F3, algebra]

2.1 Adding the counts from steps 1.1, 1.2, and 1.3 gives the displayed operation bound after increasing one absolute constant $C_0$. The assumptions $T,V\le CN$, $K\le CT$, and $J\le CN$ then give $O(N(p+1)^2)$; since $p\ge1$, $(p+1)^2\le4p^2$, giving $O(Np^2)$. No bound on the cost of constructing the input quadtree or assigning its points was used. [given, step 1.1, step 1.2, step 1.3, algebra] ∎

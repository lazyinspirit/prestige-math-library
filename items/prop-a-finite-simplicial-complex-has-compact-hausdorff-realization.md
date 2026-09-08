---
id: prop-a-finite-simplicial-complex-has-compact-hausdorff-realization
kind: proposition
title: "A finite simplicial complex has a compact Hausdorff realization"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-realization-of-an-abstract-simplicial-complex, def-locally-finite-and-finite-dimensional-simplicial-complex, def-subspace-topology-top, thm-metric-open-set-algebra, thm-heine-borel-rn, thm-metric-hausdorff-separation]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol
    verdict: certify
    date: 2026-09-08
    scope: owner-authorized-published-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Statement

If $K$ is a finite abstract simplicial complex, then its geometric realization
$|K|$ is compact and Hausdorff.

## Facts & Assumptions

**Given:** A finite abstract simplicial complex $K$.

[L1] There are finitely many simplices, and the realization has barycentric coordinates and the weak topology determined by their Euclidean simplex topologies ([[def-locally-finite-and-finite-dimensional-simplicial-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]]).

[L2] Closed subsets of a subspace are traces of ambient closed sets. In particular, a closed subset of a closed subspace is ambient closed ([[def-subspace-topology-top]]). Finite unions of closed sets are closed by complementation of finite intersections of open sets ([[thm-metric-open-set-algebra]]).

[L3] A closed bounded subset of Euclidean $\mathbb R^N$, for $N\ge1$, is compact ([[thm-heine-borel-rn]]); distinct points have disjoint open metric balls ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 If there is no nonempty simplex, the realization is empty and is compact and Hausdorff. Otherwise enumerate the finitely many vertices as $v_1,\ldots,v_N$, with $N\ge1$. The barycentric coordinate map identifies the realization as a set with $E:=\bigcup_{\sigma\in K,\ \sigma\ne\varnothing}E_\sigma\subseteq[0,1]^N$, where $$E_\sigma=\{x\in[0,1]^N:\ \textstyle\sum_{i=1}^Nx_i=1,\ x_i=0\text{ if }v_i\notin\sigma\}.$$ On each simplex this identification has precisely its Euclidean simplex topology. [L1, given]

2.1 Each $E_\sigma$ is closed in $\mathbb R^N$. Indeed coordinates and their sum are continuous: $|x_i-y_i|\le\|x-y\|_2$ and $|\sum_i x_i-\sum_i y_i|\le N\|x-y\|_2$. Thus violating any of its finitely many closed coordinate constraints persists on a sufficiently small ball. The finite union $E$ is closed by [L2] and bounded since it lies in $[0,1]^N$. [L2, step 1.1, algebra]

3.1 A subset $F\subseteq E$ is weakly closed exactly when $F\cap E_\sigma$ is closed in $E_\sigma$ for every nonempty simplex, by taking complements in the weak-open criterion [L1]. If $F$ is weakly closed, each such intersection is closed in $\mathbb R^N$ by step 2.1 and [L2]. Their finite union is $F$, so $F$ is closed in $E$. Conversely, if $F$ is closed in $E$, all its traces on $E_\sigma$ are closed there by [L2], hence $F$ is weakly closed. Therefore the weak topology equals the Euclidean subspace topology on $E$. [L1, L2, step 2.1]

4.1 By [L3] and step 2.1, $E$ is compact. For two distinct points of $E$, intersect their disjoint Euclidean open balls from [L3] with $E$; these are disjoint subspace-open neighborhoods. Hence $E$ is Hausdorff. Step 3.1 transfers both properties to the realization; step 1.1 handled the empty case. [L2, L3, step 1.1, step 2.1, step 3.1] ∎

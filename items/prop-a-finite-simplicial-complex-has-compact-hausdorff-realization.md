---
id: prop-a-finite-simplicial-complex-has-compact-hausdorff-realization
kind: proposition
title: "A finite simplicial complex has a compact Hausdorff realization"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-realization-of-an-abstract-simplicial-complex, def-locally-finite-and-finite-dimensional-simplicial-complex, lem-geometric-simplices-intersect-in-the-realization-of-their-common-face, thm-heine-borel-rn, thm-metric-hausdorff-separation]
proof_strategy: direct
verification:
  precheck: pass
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

## Proof

**Given:** A finite abstract simplicial complex $K$.

1.1 If $K$ has no nonempty simplices, then $|K|=\varnothing$, which is compact and Hausdorff. Otherwise $K$ has finitely many vertices; write them as $v_1,\dots,v_N$. For each simplex $\sigma$ of $K$, the subset $|\sigma|\subseteq|K|$ identifies with a Euclidean simplex in $[0,1]^N$, cut out by finitely many linear equations and inequalities, so $|\sigma|$ is compact. [given]

2.1 The realization $|K|$ is the union of the finitely many subsets $|\sigma|$ over the nonempty simplices $\sigma$ of $K$, and this union is empty in the case handled at the start of step 1.1. Therefore step 1.1 makes $|K|$ a finite union of compact sets and hence compact. [step 1.1]

2.2 For each simplex $\sigma$, let $O_\sigma\subseteq[0,1]^N$ be open with $U\cap|\sigma|=O_\sigma\cap|\sigma|$. Since there are only finitely many simplices, a subset $U\subseteq|K|$ is weakly open exactly when $U=(\bigcup_\sigma O_\sigma)\cap|K|$. Thus the weak topology on $|K|$ agrees with the subspace topology from $[0,1]^N$. The cube $[0,1]^N$ is Hausdorff, so $|K|$ is Hausdorff as a subspace. [step 1.1]

3.1 Steps 2.1 and 2.2 give compactness and Hausdorffness. [step 2.1, step 2.2] ∎

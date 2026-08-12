---
id: thm-centralizer-cardinality-from-cycle-type
kind: theorem
title: 'If $\sigma\in S_n$ has $c_k$ cycles of length $k$, then $|C_{S_n}(\sigma)|=\prod_{k=1}^n k^{c_k}c_k!$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugacy-class-and-centralizer, thm-disjoint-cycle-decomposition, def-permutation-support-disjoint-cycles-and-cycle-type, def-factorial-and-falling-factorial, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: counting
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, Groups, Geometry and Representation Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

If $\sigma\in S_n$ has $c_k$ cycles of length $k$, including fixed points when
$k=1$, then
$$|C_{S_n}(\sigma)|=\prod_{k=1}^n k^{c_k}c_k!.$$
The formula uses the empty product $1$ when $n=0$.

## Facts & Assumptions

**Given:** A permutation $\sigma\in S_n$ of cycle type $(c_1,\ldots,c_n)$.

[F1] The centralizer consists of the permutations commuting with $\sigma$ ([[def-conjugacy-class-and-centralizer]]).

[F2] Every permutation has a disjoint-cycle decomposition unique up to reordering and cyclic rotation, and its cycle type counts the orbits of each length, including fixed points as $1$-cycles ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] $c_k!$ counts the permutations of $c_k$ objects ([[def-factorial-and-falling-factorial]]).

[F4] A finite product combines independent choices, with empty product equal to the identity $1$ ([[def-monoid-finite-product]]).

## Proof

**Proof technique:** counting.

1.1 If $g\sigma=\sigma g$ and $O$ is a $\langle\sigma\rangle$-orbit, then $g(O)$ is another orbit of the same size. [F1, F2, algebra]

2.1 For the $c_k$ orbits of size $k$, $g$ may permute those orbits in $c_k!$ ways by [F3]. Once a target orbit is chosen, the image of one marked point has $k$ choices, and commutation forces all other images; hence there are $k^{c_k}c_k!$ choices at length $k$. [F1, F2, F3, step 1.1]

3.1 Conversely, arbitrary orbit permutations and cyclic offsets from step 2.1 assemble on the disjoint orbits to a unique bijection $g$, and the forced-image rule makes $g\sigma=\sigma g$. [F2, step 2.1, algebra]

4.1 Choices for distinct lengths are independent, so [F4] and steps 2.1--3.1 give the displayed product. If $c_k=0$ its factor is $k^0 0!=1$; for the identity the result is $n!$, and for $n=0$ it is the empty product $1$. [F3, F4, step 2.1, step 3.1] ∎

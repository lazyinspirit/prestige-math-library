---
page: approximation-algorithms-and-gap-reductions
title: "Approximation Algorithms and Gap Reductions"
status: draft
requires: [alphabet-reduction-and-the-pcp-theorem, classical-np-completeness-reductions, finite-counting-and-binomial-coefficients, graphs-walks-and-connectivity, trees-forests-and-spanning-trees, eulerian-and-hamiltonian-graphs]
items:
  - def-optimization-problem-and-approximation-ratio
  - def-ptas-fptas-and-apx
  - thm-maximal-matching-is-a-two-approximation-for-vertex-cover
  - def-greedy-set-cover
  - def-harmonic-number-for-set-cover-analysis
  - lem-greedy-set-cover-charging-bound
  - thm-greedy-set-cover-is-an-h-n-approximation
  - thm-random-cut-has-expected-half-the-edges
  - thm-conditional-expectation-derandomizes-max-cut-half-approximation
  - def-metric-tsp
  - lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp
  - lem-euler-double-tree-shortcutting-does-not-increase-cost
  - thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp
  - def-gap-problem-and-gap-preserving-reduction
  - lem-pcp-verifier-reduces-to-gap-max-three-sat
  - thm-max-three-sat-has-no-ptas-unless-p-equals-np
  - lem-gap-three-sat-reduces-to-gap-independent-set
  - thm-independent-set-has-no-ptas-unless-p-equals-np
  - def-l-reduction
  - def-apx-hardness-and-apx-completeness
  - lem-l-reductions-transfer-apx-hardness
  - fs-exact-np-hardness-implies-no-constant-approximation
examples: []
---

This page develops the finite-instance model of optimization problems and the
value-inequality definition of an approximation ratio, together with the
PTAS, FPTAS and locally defined APX classes. It states the selected
L-reduction convention, the two-sided error inequality that defines it, and
the APX-hardness and APX-completeness notions built on that convention,
proved separately by a dependency-backed transfer and composition lemma.

Four approximation algorithms are analysed directly. A maximal matching gives
a factor-two vertex cover. A random cut crosses half the edges in expectation,
and fixing vertices by the larger conditional expectation derandomises this to
a polynomial-time half-approximation for Max-Cut. Weighted greedy set cover
charges each element the cost per newly covered element and sums the bounds
OPT/(n-j+1) to H_n times the optimum. For metric TSP, deleting a tour edge
gives a spanning tree whose weight lower-bounds the optimal tour, while
doubling a minimum spanning tree, traversing an Euler circuit and shortcutting
repeated vertices costs at most twice the tree weight, giving the double-tree
factor two.

The final part turns PCP verifiers into inapproximability. A constant-query
perfect-completeness verifier with soundness s<1 is unfolded into a 3-CNF
formula with a constant relative gap delta, and the clause-literal consistency
graph turns that optimum into the maximum independent-set size without
changing the gap. Composing the two reductions shows that a PTAS for Max-3SAT
or for maximum independent set would decide every language in NP and so force
P=NP. The three PCP-hardness items assume the Axiom of Choice for the currently
published PCP supplier proof route, which reaches a Zorn-based algebraic
embedding-extension step; the finite reductions themselves make only explicit
finite choices.

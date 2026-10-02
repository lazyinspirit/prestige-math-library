---
page: approximation-algorithms-and-gap-reductions-examples
title: "Approximation Algorithms and Gap Reductions: Examples and Counterexamples"
status: published
requires: [approximation-algorithms-and-gap-reductions]
items: []
examples:
  - ex-greedy-set-cover-charging-bound
  - ex-l-reductions-transfer-apx-hardness
  - cex-exact-np-hardness-implies-no-constant-approximation
  - ex-conditional-expectation-for-a-small-max-cut-instance
  - ex-double-tree-shortcutting-for-a-metric-tsp-instance
---

These examples check the page's definitions and reductions on small inputs.
A concrete four-element set-cover instance runs the weighted greedy algorithm
to completion, with OPT=4, unit charges, and the harmonic bound 25/3; the
pointwise charge bounds are evaluated with the remaining count of each round.
The four-vertex square metric gives an MST of weight 3, a doubled-tree Euler
walk of cost 6, and a first-visit shortcut tour of cost 4, which is also
optimal; the closing shortcut replaces a segment of length 3 with an edge of
length 1.

Conditional expectation is run by hand on the triangle: the initial
expectation is 3/2, fixing the first vertex leaves candidates 1 and 2 for the
second, and either choice for the third returns a cut of two edges. The
clause-literal graph of the two-clause formula (x or x or x) and (not x or
not x or not x) has six vertices but independent-set number one, equal to the
formula's maximum satisfied-clause count, exhibiting an L-reduction with both
constants equal to one. A four-vertex path shows that a maximal matching of the
middle edge yields the optimal cover of size two while the two outer edges
realize the factor-two bound, refuting the claim that exact NP-hardness rules
out constant-factor approximation.

---
page: the-hook-length-formula-and-rsk-correspondence
title: "The Hook Length Formula and Rsk Correspondence"
status: draft
items: [def-hook-arm-leg-and-hook-length, lem-standard-tableau-removal-recursion, lem-hook-product-change-under-corner-removal, lem-hook-product-branching-identity, thm-hook-length-formula, def-row-insertion-and-bumping-route, lem-row-bumping-route-monotonicity, lem-robinson-schensted-recording-tableau-is-standard, def-reverse-row-deletion, lem-row-insertion-and-reverse-deletion-are-inverse, thm-robinson-schensted-correspondence, lem-first-row-insertion-basic-subsequences, def-column-insertion-for-distinct-letters, lem-row-and-column-insertion-commute, lem-word-reversal-transposes-the-insertion-tableau, thm-schensted-longest-increasing-and-decreasing-subsequence-theorem, thm-rsk-correspondence-for-two-line-arrays, cor-rsk-symmetry-under-inversion, cor-sum-of-squares-of-standard-tableau-numbers, cor-involutions-are-counted-by-standard-tableaux]
examples: []
---

This page proves the hook length formula and builds the Robinson-Schensted
correspondence on the combinatorial base of
[[young-diagrams-tableaux-and-permutation-modules]].

The first half is the Frame-Robinson-Thrall count. It fixes hooks, arms, legs
and hook lengths with the English convention, proves the removal recursion for
standard tableaux, computes how the hook product changes when a removable
corner is deleted, and proves the branching identity that turns the recursion
into the closed formula $f^\lambda=n!/\prod_{x\in[\lambda]}h(x)$; the dimension
statement for Specht modules follows from
[[thm-standard-polytabloid-basis]].

The second half constructs RSK. Row insertion with its bumping route,
reverse row deletion and the proof that they are inverse are followed by the
recording tableau, the bijection between permutations and pairs of standard
tableaux, the column insertion and commutation lemmas, the basic subsequences
of the first row, and Schensted's longest increasing and decreasing
subsequence theorem. The page closes with the RSK correspondence for two-line
arrays, the symmetry under inversion, the sum-of-squares identity
$\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ and the count of involutions by
standard tableaux. Concrete computations of the hook table and of RSK runs are
collected on the accompanying examples page.

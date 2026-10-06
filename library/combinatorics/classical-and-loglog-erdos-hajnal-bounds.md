---
page: classical-and-loglog-erdos-hajnal-bounds
title: "Classical and Log-Log Erdős–Hajnal Bounds"
status: published
items: [thm-classical-erdos-hajnal-bound,
        thm-loglog-erdos-hajnal-bound,
        cor-the-loglog-bound-eventually-dominates-the-classical-bound]
examples: []
---

Homogeneous sets, sparse induced subgraphs, greedy colouring, the product bound
$|V|\le\chi\alpha$, complementation, and base-$2$ logarithms are the ingredients
behind the quantitative Erdős–Hajnal estimates. The page uses them in one fixed
order: a density theorem isolates a large induced subgraph with few edges or few
nonedges, trimming turns low density into bounded degree, colouring extracts a
large stable set, and the complement turns the same argument into a clique bound.

The two density bounds proved earlier on
`quantitative-induced-density-and-the-loglog-step` supply the classical
$\sqrt{\log_2 n}$ and improved
$\sqrt{\log_2 n\,\log_2\log_2 n}$ scales. This page derives the corresponding
homogeneous-set lower bounds for $H$-free graphs. A final corollary compares
the two exponents and shows that
the log-log scale eventually dominates every fixed classical scale.

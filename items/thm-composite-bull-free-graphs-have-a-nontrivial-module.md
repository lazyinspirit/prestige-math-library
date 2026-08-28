---
id: thm-composite-bull-free-graphs-have-a-nontrivial-module
kind: theorem
title: "Every composite bull-free graph has a nontrivial module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-basic-and-composite-bull-free-graphs, def-split-set-in-a-bull-free-graph, thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module, prop-bull-free-graphs-are-complement-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 1.4"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Every composite bull-free graph has a nontrivial module.

## Facts & Assumptions

**Given:** A composite bull-free graph $G$.

[F1] In a composite bull-free graph there is an odd hole or odd antihole $A$ with one outside vertex complete to $V(A)$ and another outside vertex anticomplete to $V(A)$ ([[def-basic-and-composite-bull-free-graphs]]).

[F2] A set is split when every mixed outside vertex has one of the two witnesses from the definition: either a three-vertex path, or a three-vertex configuration with exactly one edge among the three vertices ([[def-split-set-in-a-bull-free-graph]]).

[L1] A split set with both a complete and an anticomplete outside witness yields a nontrivial module ([[thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]]).

[L2] Bull-freeness is complement-invariant ([[prop-bull-free-graphs-are-complement-invariant]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L2], after passing to the complement if needed we may assume that $A$ is an odd hole with vertices $h_1,\dots,h_k$ in cyclic order, together with a vertex $c$ complete to $V(A)$ and a vertex $a$ anticomplete to $V(A)$. To apply [L1], it is enough to show that $V(A)$ is split. [F1, L1, L2, choose]

1.2 Let $x\in V(G)\setminus V(A)$ be neither complete nor anticomplete to $V(A)$. By cyclic symmetry, assume $x$ is adjacent to $h_1$ and nonadjacent to $h_2$. If $x$ is adjacent to $h_k$, then the path $h_k$-$h_1$-$h_2$ gives the first split alternative from [F2]. So assume $x$ is nonadjacent to $h_k$. If $x$ is also nonadjacent to $h_{k-1}$, then $h_1h_2\in E(G)$ while $h_1h_{k-1},h_{k-1}h_2\notin E(G)$, so the triple $(h_1,h_{k-1},h_2)$ gives the second split alternative. Otherwise $x$ is adjacent to $h_{k-1}$, and then $h_{k-1}h_k\in E(G)$ while $h_{k-1}h_2,h_2h_k\notin E(G)$, so the triple $(h_{k-1},h_2,h_k)$ gives the second split alternative. Hence every mixed outside vertex satisfies [F2], so $V(A)$ is split. [F2, algebra]

2.1 Step 1.2 shows that the odd hole $A$ is a split set, and step 1.1 supplies a complete and an anticomplete outside vertex for it. Therefore [L1] gives a nontrivial module in $G$. [step 1.1, step 1.2, L1] ∎

---
id: lem-basic-bull-free-hole-with-a-complete-outside-vertex
kind: lemma
title: "In a basic bull-free graph, an odd hole with a complete outside vertex has tightly constrained neighbors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-basic-and-composite-bull-free-graphs, def-hole-antihole-and-odd-hole]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Lemma 4.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a basic bull-free graph, let $H$ be an odd hole in $G$ with
$|V(H)|\ge5$, let $c\in V(G)\setminus V(H)$ be complete to $V(H)$, and let
$u\in V(G)\setminus V(H)$ be nonadjacent to $c$. Then either:

1. $u$ is complete to $V(H)$; or
2. $|V(H)|=5$ and $u$ has at least three neighbors in $V(H)$.

## Facts & Assumptions

**Given:** A basic bull-free graph $G$, an odd hole $H$ with vertices $h_1,\dots,h_k$ in cyclic order and $k\ge5$, a vertex $c$ complete to $V(H)$, and a vertex $u$ nonadjacent to $c$.

[F1] A basic bull-free graph is a bull-free graph that is not composite ([[def-basic-and-composite-bull-free-graphs]]).

[F2] A hole is an induced cycle ([[def-hole-antihole-and-odd-hole]]).

## Proof

**Proof technique:** direct.

1.1 Because $G$ is basic, $u$ cannot be anticomplete to $V(H)$: otherwise the odd hole $H$ would have the complete outside vertex $c$ and the anticomplete outside vertex $u$, making $G$ composite and contradicting [F1]. Assume neither outcome of the Statement holds. By cyclic symmetry choose $h_1$ adjacent to $u$. Suppose that $u$ is adjacent to $h_2$. Since $\{h_k,h_1,u,h_2,h_3\}$ is not a bull, $u$ is adjacent to at least one of $h_k,h_3$; after reversing and shifting the cyclic labels in the second case, we may assume that $u$ is adjacent to $h_k$. Since neither outcome holds, $k>5$ and $u$ is not complete to $H$. Since $\{u,h_2,h_3,c,h_{k-1}\}$ is not a bull, $u$ is adjacent to at least one of $h_3,h_{k-1}$; reflecting the cyclic labels through $h_1$ if necessary, we may assume that $u$ is adjacent to $h_3$. Let $i>3$ be minimal with $u$ nonadjacent to $h_i$. Minimality makes $u$ adjacent to $h_{i-2},h_{i-1}$, while $u$ is adjacent to $h_k$. If $i\ne k-1$, then $\{h_i,h_{i-1},h_{i-2},u,h_k\}$ is a bull, so $i=k-1\ge5$. But then $\{h_i,h_{i-1},h_{i-2},u,h_1\}$ is a bull, a contradiction. Thus $u$ is not adjacent to $h_2$; applying the same argument to any putative consecutive pair shows that $u$ has no two consecutive neighbors on $H$. [F1, F2, given, choose, algebra]

2.1 Since $u$ is adjacent to $h_1$ but to no consecutive pair on $H$, the vertices $\{u,h_1,h_2,c,h_i\}$ with $4\le i\le k-1$ would induce a bull unless $u$ were adjacent to every such $h_i$. Reflecting the cycle through $h_1$ gives the same conclusion for $h_3,\dots,h_{k-2}$. In particular $u$ is adjacent to both $h_3$ and $h_4$, a consecutive pair, contradicting step 1.1. Therefore our assumption that neither outcome holds was impossible. [step 1.1, F2, algebra]

3.1 One of the two stated outcomes must hold. [step 1.1, step 2.1] ∎

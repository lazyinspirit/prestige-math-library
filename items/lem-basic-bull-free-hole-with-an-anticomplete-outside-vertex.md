---
id: lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex
kind: lemma
title: "In a basic bull-free graph, an odd hole with an anticomplete outside vertex forbids consecutive neighbors"
status: draft
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Lemma 4.2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a basic bull-free graph, let $H$ be an odd hole in $G$ with
$|V(H)|\ge5$, let $a\in V(G)\setminus V(H)$ be anticomplete to $V(H)$, and let
$u\in V(G)\setminus V(H)$ be adjacent to $a$. Then $u$ has no two consecutive
neighbors on $H$. In particular, $u$ has at least $\lceil |V(H)|/2\rceil$
nonneighbors in $V(H)$.

## Facts & Assumptions

**Given:** A basic bull-free graph $G$, an odd hole $H$ with vertices $h_1,\dots,h_k$ in cyclic order and $k\ge5$, a vertex $a$ anticomplete to $V(H)$, and a vertex $u$ adjacent to $a$.

[F1] A basic bull-free graph is not composite ([[def-basic-and-composite-bull-free-graphs]]).

[F2] A hole is an induced cycle ([[def-hole-antihole-and-odd-hole]]).

## Proof

**Proof technique:** direct.

1.1 Because $G$ is basic, $u$ cannot be complete to $V(H)$: together with the anticomplete outside vertex $a$, that would make the odd hole $H$ a composite witness, contrary to [F1]. So $u$ has a nonneighbor on $H$. Suppose $u$ had two consecutive neighbors, say $h_1$ and $h_2$. Let $i$ be minimal with $u$ nonadjacent to $h_i$; then $i\ge3$, and minimality gives $u$ adjacent to $h_{i-1}$ and $h_{i-2}$. Since $a$ is anticomplete to $H$, the five vertices $\{a,u,h_{i-2},h_{i-1},h_i\}$ induce a bull, contradicting bull-freeness. Therefore $u$ has no two consecutive neighbors on $H$. [F1, F2, given, choose, algebra]

2.1 On a cycle of length $k$, any vertex subset with no two consecutive vertices has size at most $\lfloor k/2\rfloor$. Step 1.1 therefore bounds the number of neighbors of $u$ on $H$ by $\lfloor k/2\rfloor$, so the number of nonneighbors is at least $k-\lfloor k/2\rfloor=\lceil k/2\rceil$. [step 1.1, algebra] ∎

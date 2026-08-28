---
id: thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect
kind: theorem
title: "For a vertex in a basic bull-free graph, either its neighborhood or its antineighborhood is perfect"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-graph-for-the-bull-route, lem-basic-bull-free-hole-with-a-complete-outside-vertex, lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex, rem-strong-perfect-graph-theorem-for-the-bull-route, prop-bull-free-graphs-are-complement-invariant, def-basic-and-composite-bull-free-graphs]
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
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 4.3"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a basic bull-free graph and let $u\in V(G)$. Let $N$ be the set of
neighbors of $u$, and let $M$ be the set of nonneighbors of $u$. Then at least
one of the induced graphs $G[N]$ and $G[M]$ is perfect.

## Facts & Assumptions

**Given:** A basic bull-free graph $G$, a vertex $u\in V(G)$, its neighborhood $N$, and its antineighborhood $M$.

[L1] In a basic bull-free graph, a vertex outside a hole that is nonadjacent to a complete outside witness is either complete to the hole or is in the exceptional five-hole case; in particular it has at least $|H|-2$ neighbors on that hole ([[lem-basic-bull-free-hole-with-a-complete-outside-vertex]]).

[L2] In a basic bull-free graph, a vertex adjacent to an anticomplete outside witness has at least $\lceil |H|/2\rceil$ nonneighbors on the hole ([[lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex]]).

[L3] A finite graph is perfect exactly when it contains no odd hole and no odd antihole ([[rem-strong-perfect-graph-theorem-for-the-bull-route]]).

[L4] Bull-freeness, and therefore basicness, is preserved by complementation ([[prop-bull-free-graphs-are-complement-invariant]], [[def-basic-and-composite-bull-free-graphs]]).

## Proof

**Proof technique:** direct.

1.1 Suppose neither $G[N]$ nor $G[M]$ is perfect. First they cannot both contain odd holes. Indeed, let $H_N\subseteq G[N]$ and $H_M\subseteq G[M]$ be odd holes of lengths $n$ and $m$. Every vertex of $H_M$ is nonadjacent to $u$, while $u$ is complete to $H_N$, so [L1] gives each vertex of $H_M$ at least $n-2$ neighbors in $H_N$. Thus there are at least $m(n-2)$ cross edges. On the other hand every vertex of $H_N$ is adjacent to $u$, while $u$ is anticomplete to $H_M$, so [L2] gives each vertex of $H_N$ at least $(m+1)/2$ nonneighbors in $H_M$. Hence there are at least $n(m+1)/2$ cross nonedges. Since there are only $mn$ cross pairs altogether, we obtain $m(n-2)+n(m+1)/2\le mn$, equivalently $mn-4m+n\le0$, impossible because $m,n\ge5$ make the left-hand side at least $m+5>0$. [L1, L2, L3, algebra]

2.1 By [L4], the same argument in $\overline G$ shows that $G[N]$ and $G[M]$ cannot both contain odd antiholes. If $G[N]$ contained an odd hole, then step 1.1 would force $G[M]$ to contain no odd hole, so [L3] would give an odd antihole $H_M$ in $G[M]$. Because a $5$-antihole is also a $5$-hole, step 1.1 excludes the case $|H_M|=5$, and the same complement argument excludes $|H_N|=5$; hence both have length at least $7$. Now every vertex of $H_M$ is nonadjacent to $u$, so [L1] applied to the odd hole $H_N$ with complete outside vertex $u$ makes each vertex of $H_M$ complete to $H_N$. Applying the same lemma in $\overline G$ reverses the roles of hole and antihole and shows that each vertex of $H_N$ is anticomplete to $H_M$, contradiction. Therefore $G[N]$ has no odd hole, and by [L3] it must contain an odd antihole. Symmetrically, $G[M]$ contains an odd hole. [step 1.1, L1, L3, L4, algebra]

3.1 Take the odd antihole $H_N\subseteq G[N]$ and the odd hole $H_M\subseteq G[M]$ from step 2.1, with lengths $n$ and $m$. By [L2], each vertex of $H_N$ has at least $(m+1)/2$ nonneighbors in $H_M$. Applying [L2] in the complement graph, where $H_N$ becomes an odd hole and $u$ is anticomplete to it, shows that each vertex of $H_M$ has at least $(n+1)/2$ neighbors in $H_N$. Hence the number of cross nonedges is at least $n(m+1)/2$ and the number of cross edges is at least $m(n+1)/2$. Their sum is at least $(2mn+m+n)/2>mn$, impossible. This contradiction proves that at least one of $G[N]$ and $G[M]$ is perfect. [step 2.1, L2, L4, algebra] ∎

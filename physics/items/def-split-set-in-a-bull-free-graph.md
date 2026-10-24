---
id: def-split-set-in-a-bull-free-graph
kind: definition
title: "A split set in a bull-free graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bull-free-graph, def-hole-antihole-and-odd-hole, def-graph-walk-trail-path-and-cycle, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 3"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Definition

Let $G$ be a finite graph and let $S\subseteq V(G)$ with $|S|>1$. We say that
$S$ is **split** when, for every vertex $x\in V(G)\setminus S$ that is neither
complete nor anticomplete to $S$, there exist distinct vertices $u,v,w\in S$
such that one of the following holds:

1. $u$-$v$-$w$ is an induced path in $G[S]$ (so $uv,vw$ are edges and $uw$
   is a nonedge), with $x$ adjacent to $u$ and $v$ and nonadjacent to $w$; or
2. $u$ and $w$ are adjacent in $G[S]$, while $u$ is nonadjacent to $v$ and $v$
   is nonadjacent to $w$, and $x$ is adjacent to $u$ and nonadjacent to $v$
   and $w$.

The definition is complement-invariant: $S$ is split in $G$ if and only if it
is split in $\overline G$, because clause $1$ in $G$ is clause $2$ in
$\overline G$, clause $2$ in $G$ is clause $1$ in $\overline G$, and
completeness swaps with anticompleteness.

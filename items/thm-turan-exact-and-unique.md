---
id: thm-turan-exact-and-unique
kind: theorem
title: "Turán's theorem with equality: $\\operatorname{ex}(n,K_{r+1})=e(T_{n,r})$, and $T_{n,r}$ is the unique extremal graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extremal-number-turan-graph-and-blowup, lem-turan-graph-edge-count-and-balance, lem-zykov-symmetrisation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Statement

For $n\in\mathbb N$ and $r\ge1$,

$$\operatorname{ex}(n,K_{r+1})=e(T_{n,r}).$$

Moreover, an $n$-vertex $K_{r+1}$-free graph has this many edges if and only if it is isomorphic to $T_{n,r}$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] $\operatorname{ex}(n,H)$ is the maximum edge count of an $n$-vertex graph with no ordinary copy of $H$ ([[def-extremal-number-turan-graph-and-blowup]]).

[F2] Zykov symmetrisation takes an extremal $K_{r+1}$-free graph to a complete $k$-partite graph with $k\le r$ and the same edge count ([[lem-zykov-symmetrisation]]).

[F3] Among complete $r$-partite graphs on $n$ vertices, $T_{n,r}$ has maximum edge count, with equality exactly for balanced part sizes ([[lem-turan-graph-edge-count-and-balance]]).

## Proof

**Proof technique:** symmetrise for the bound, then use degree induction for rigidity.

1.1 The graph $T_{n,r}$ is $K_{r+1}$-free. Zykov symmetrisation sends an extremal graph to a complete $k$-partite graph with $k\le r$ and the same edge count; adding empty parts makes it complete $r$-partite, so balancing bounds its edges by $e(T_{n,r})$. Hence the displayed extremal number is exact. [given, F1, F2, F3]

1.2 For uniqueness, induct on $r$. At $r=1$, a $K_2$-free graph is edgeless and equals $T_{n,1}$. The case $n=0$ is also immediate. Assume $r\ge2$, $n\ge1$, and rigidity for $r-1$, and let $G$ attain $e(T_{n,r})$. Choose a vertex $v$ of maximum degree $d$, put $A=N(v)$ and $B=V(G)\setminus A$. Then $G[A]$ is $K_r$-free and $e(G)\le e(G[A])+\sum_{b\in B}d(b)\le e(T_{d,r-1})+(n-d)d$. The last expression is the edge count of a complete $r$-partite graph whose one part has size $n-d$ and whose remaining parts are balanced on $d$ vertices, so balancing makes it at most $e(T_{n,r})$. [given, F3]

2.1 Equality for $G$ forces equality throughout step 1.2. The first inequality forces $G[B]$ to have no edge, the degree inequality forces every $b\in B$ to have degree $d$, and $|A|=d$ then forces every vertex of $B$ to be adjacent to every vertex of $A$. Inductive rigidity gives $G[A]\cong T_{d,r-1}$, and balancing equality makes the resulting $r$ part sizes differ by at most $1$. Thus $G\cong T_{n,r}$. [step 1.2, given, F3]

3.1 Conversely $T_{n,r}$ is $K_{r+1}$-free and has the extremal edge count by step 1.1. The induction therefore proves both directions of the equality characterization. [step 1.1, step 2.1]

4.1 Steps 1.1-3.1 prove the exact formula and uniqueness for every $n$, including $n<r$ and $n=0$. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

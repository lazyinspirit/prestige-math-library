---
id: cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree
kind: corollary
title: "An H-free graph has a linearly large induced subgraph whose graph or complement has bounded maximum degree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-rodl-in-the-edge-density-form,
       lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree,
       def-edge-density-between-vertex-sets,
       def-graph-isomorphism-and-complement,
       def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 4.3"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, proof sketch around Theorem 1.3"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

For every finite graph $H$ and every real $\epsilon>0$, there exists
$\delta>0$ such that every nonempty $H$-free graph $G$ contains a set
$X\subseteq V(G)$ with $|X|\geq \delta|V(G)|$ for which one of $G[X]$ or
$\overline{G}[X]$ has maximum degree at most $\epsilon\delta|V(G)|$.

## Facts & Assumptions

**Given:** A finite graph $H$, a real $\epsilon>0$, and a nonempty $H$-free graph $G$.

[L1] For every graph $H$ and every real $\eta\in(0,\tfrac12)$, there exists $\delta_0>0$ such that every nonempty $H$-free graph contains a set $Z\subseteq V(G)$ with $|Z|\geq \delta_0|V(G)|$ and either $d_G(Z,Z)\leq \eta$ or $d_G(Z,Z)\geq 1-\eta$ ([[cor-rodl-in-the-edge-density-form]]).

[L2] If a graph on $n$ vertices has at most $\lambda n(n-1)/2$ edges, then for every integer $m$ with $1\leq m\leq (n+1)/2$ it has an $m$-vertex induced subgraph of maximum degree at most $4\lambda(m-1)$ ([[lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree]]).

## Proof

**Proof technique:** direct.

1.1 Put $\eta:=\epsilon/8$. If $\eta\geq 1/2$, then $\epsilon\geq 4$. The conclusion is trivial with $\delta:=1$, because every induced subgraph has maximum degree at most $|V(G)|-1<|V(G)|\leq \epsilon|V(G)|=\epsilon\delta|V(G)|$. So we may assume $\eta<1/2$, and [L1] gives $\delta_0>0$ for the parameter $\eta$. Set $\delta:=\min\{\delta_0,1\}/2$. [given, L1, choose, cases]

2.1 Apply [L1] to the given nonempty $H$-free graph $G$. Then there is $Z\subseteq V(G)$ with $|Z|\geq \delta_0|V(G)|\geq 2\delta|V(G)|$ and either $d_G(Z,Z)\leq \eta$ or $d_G(Z,Z)\geq 1-\eta$. Let $m:=\lceil \delta|V(G)|\rceil$. Since $|Z|$ is an integer and $|Z|\geq 2\delta|V(G)|$, we have $|Z|\geq \lceil 2\delta|V(G)|\rceil\geq 2m-1$, so $m\leq (|Z|+1)/2$. [step 1.1, L1, choose, algebra]

3.1 First suppose $d_G(Z,Z)\leq \eta$. Writing $n:=|Z|$, the definition of density gives $2|E(G[Z])|/n^2\leq \eta$. If $n=1$, then $m=1$ and $Z$ itself already has maximum degree $0\leq \epsilon\delta|V(G)|$. If $n\geq 2$, then $n^2\leq 2n(n-1)$, so $|E(G[Z])|\leq \eta n^2/2\leq (\epsilon/4)n(n-1)/2$. Applying [L2] with $\lambda=\epsilon/4$ gives a set $X\subseteq Z$ with $|X|=m$ and maximum degree at most $4(\epsilon/4)(m-1)=\epsilon(m-1)\leq \epsilon\delta|V(G)|$. [step 2.1, L2, algebra, cases]

4.1 Now suppose instead that $d_G(Z,Z)\geq 1-\eta$. If $n:=|Z|$, then $d_{\overline G}(Z,Z)=1-\frac1n-d_G(Z,Z)\leq \eta-\frac1n\leq \eta$. Applying step 3.1 to the complement graph on the same vertex set yields $X\subseteq Z$ with $|X|=m$ such that $\overline G[X]$ has maximum degree at most $\epsilon\delta|V(G)|$. [step 2.1, step 3.1, algebra]

5.1 In either case there is a set $X$ with $|X|=m\geq \delta|V(G)|$ such that one of $G[X]$ or $\overline G[X]$ has maximum degree at most $\epsilon\delta|V(G)|$. [step 3.1, step 4.1, cases-exhaustive] ∎

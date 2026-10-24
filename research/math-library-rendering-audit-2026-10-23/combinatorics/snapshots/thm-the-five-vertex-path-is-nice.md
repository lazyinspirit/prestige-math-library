---
id: thm-the-five-vertex-path-is-nice
kind: theorem
title: "The five-vertex path is nice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nice-graph,
       thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade,
       thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 3.4 and Lemma 6.2"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, niceness discussion"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

The graph $P_5$ is nice.

## Facts & Assumptions

**Given:** The five-vertex path $P_5$.

[L1] Every sufficiently large $\overline{P_5}$-free graph admits a pure or $x$-sparse polynomial blockade when $x$ is below the source threshold ([[thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade]]).

[L2] Such local pure or sparse blockades force a nice blockade ([[thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade]]).

[L3] A graph is nice exactly when some exponent $d$ makes the conclusion of step 2.1 hold for every sufficiently large $\overline H$-free graph ([[def-nice-graph]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be a common exponent large enough to dominate the polynomial width bound in [L1] and the layout theorem [L2]. Fix $\epsilon\in(0,\tfrac12)$ and a $\overline{P_5}$-free graph $G$ with $|V(G)|\ge \epsilon^{-10d^2}$, and set $x:=\epsilon^{5d}$. Then $x<2^{-d}$. If $F$ is an induced subgraph of $G$ with $|V(F)|\ge \epsilon^d|V(G)|$, then $$ |V(F)|\ge \epsilon^d\epsilon^{-10d^2}=\epsilon^{-10d^2+d}\ge \epsilon^{-5d^2}=x^{-d}. $$ Therefore [L1] applies to $F$ and gives a pure or $x$-sparse $(k,|V(F)|/k^d)$-blockade for some $k\in[2,\epsilon^{-5d^2}]$. [L1, choose, given, algebra]

2.1 Applying [L2] to $G$ yields an $(\epsilon^{-1},\epsilon^{10d^2}|V(G)|)$-blockade whose distinct block pairs are either complete or weakly $\epsilon^d$-sparse. By [L3], this is exactly the niceness condition for $H=P_5$. [step 1.1, L2, L3]

3.1 Therefore $P_5$ is nice. [step 2.1] ∎

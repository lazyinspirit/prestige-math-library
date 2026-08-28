---
id: thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades
kind: theorem
title: "A tau-critical graph has no wide pure blockade with cograph pattern"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tau-critical-graph,
       thm-pure-blockades-with-cograph-patterns-have-additive-kappa,
       def-pattern-graph-of-a-pure-blockade,
       def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-kappa-of-a-graph,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-blockade-length-and-width,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-clique-stable-set-and-numbers,
       def-real-power,
       thm-real-power-laws,
       thm-real-power-continuity-and-derivatives,
       thm-monotonicity-from-the-derivative,
       cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Theorem 5.2"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\tau>0$, and let $G$ be a $\tau$-critical graph. Then for every integer
$t>0$, there is no pure blockade in $G$ with cograph pattern, of length $t$ and
width at least $|V(G)|t^{-1/\tau}$, such that each block is a proper subset of
$V(G)$.

## Facts & Assumptions

**Given:** A real $\tau>0$, a $\tau$-critical graph $G$, and an integer $t>0$.

[L1] A $\tau$-critical graph satisfies $\kappa(G)<|V(G)|^\tau$, while every proper induced subgraph $H$ satisfies $\kappa(H)\geq |V(H)|^\tau$ ([[def-tau-critical-graph]]).

[L2] A pure blockade with cograph pattern has additive $\kappa$ on its support ([[thm-pure-blockades-with-cograph-patterns-have-additive-kappa]]).

[L3] If $X\subseteq V(G)$, then every clique or stable set in $G[X]$ is also one in $G$, so $\kappa(G)\geq \kappa(G[X])$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-kappa-of-a-graph]], [[def-clique-stable-set-and-numbers]]).

[L4] For positive reals, $(ab)^r=a^rb^r$ and $(a^r)^s=a^{rs}$ ([[thm-real-power-laws]]).

[L5] Because $\tau>0$, the function $x\mapsto x^\tau$ is increasing on $(0,\infty)$: its derivative is $\tau x^{\tau-1}$, the factor $x^{\tau-1}$ is positive for $x>0$ because real powers are defined through $\exp$ and $\exp$ is positive, and the derivative-sign theorem then gives monotonicity ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[cor-exponential-reciprocal-and-positivity]], [[thm-monotonicity-from-the-derivative]]).

[F1] If a blockade has width $w$, then each of its blocks has cardinality at least $w$ ([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $\mathcal B=(B_1,\dots,B_t)$ is a pure blockade in $G$ with cograph pattern, length $t$, width at least $|V(G)|t^{-1/\tau}$, and each $B_i$ a proper subset of $V(G)$. By [L1], each proper induced subgraph $G[B_i]$ satisfies $\kappa(G[B_i])\geq |B_i|^\tau$. Since each block has size at least the width, [F1] gives $|B_i|\ge |V(G)|t^{-1/\tau}>0$, so [L5] and [L4] yield $\kappa(G[B_i])\geq |B_i|^\tau \geq (|V(G)|t^{-1/\tau})^\tau =|V(G)|^\tau t^{-1}$ for every $i$. [L1, L4, L5, F1, given, assume-contra]

2.1 Let $X:=V(\mathcal B)=B_1\cup\cdots\cup B_t$. Applying [L2] to the blockade and then using step 1.1 yields $\kappa(G[X])\geq \sum_{i=1}^{t}\kappa(G[B_i]) \geq \sum_{i=1}^{t}|V(G)|^\tau t^{-1} =|V(G)|^\tau.$ Then [L3] gives $\kappa(G)\geq |V(G)|^\tau$, contradicting the first clause of [L1]. [step 1.1, L1, L2, L3]

3.1 This contradiction proves that no such blockade exists. [step 2.1, discharge-contradiction] ∎

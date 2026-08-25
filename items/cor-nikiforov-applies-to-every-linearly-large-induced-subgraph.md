---
id: cor-nikiforov-applies-to-every-linearly-large-induced-subgraph
kind: corollary
title: "A linearly large induced subgraph of a graph with few induced copies again has a linearly large restricted set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [thm-nikiforov-few-induced-copies-force-a-linear-restricted-set, lem-few-induced-copies-is-inherited-by-large-induced-subgraphs, def-subgraph-induced-subgraph-and-spanning-subgraph, def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

Fix a graph $H$, a real $\epsilon\in(0,\tfrac12)$, and a fraction $\lambda>0$.
Then there exists $\delta>0$ such that whenever $G$ is a nonempty graph on $n$
vertices with $\operatorname{ind}_H(G)<(\delta n)^{|V(H)|}$ and $W\subseteq V(G)$
satisfies $|W|\ge\lambda n$, the induced subgraph $G[W]$ contains an
$\epsilon$-restricted set of size at least $\delta|W|$.

## Facts & Assumptions

**Given:** A graph $H$, a real $\epsilon\in(0,\tfrac12)$, and a real $\lambda>0$.

[L1] If $G$ has $n$ vertices, $h=|V(H)|$, $\operatorname{ind}_H(G)<(\delta n)^h$, and $|W|\ge\lambda n>0$, then $\operatorname{ind}_H(G[W])<((\delta/\lambda)|W|)^h$ ([[lem-few-induced-copies-is-inherited-by-large-induced-subgraphs]]).

[L2] There is $\delta_0>0$ such that every nonempty graph $J$ with $\operatorname{ind}_H(J)<(\delta_0|V(J)|)^{|V(H)|}$ has an $\epsilon$-restricted set of size at least $\delta_0|V(J)|$ ([[thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta_0$ be the constant of [L2] for $H$ and $\epsilon$, and set $\delta:=\min\{\delta_0,\lambda\delta_0\}$. Then $\delta>0$, $\delta\le\delta_0$, and $\delta/\lambda\le\delta_0$. [L2, choose, algebra]

2.1 If $\operatorname{ind}_H(G)<(\delta n)^{|V(H)|}$ and $|W|\ge\lambda n$, then [L1] gives $\operatorname{ind}_H(G[W])<((\delta/\lambda)|W|)^{|V(H)|}\le(\delta_0|W|)^{|V(H)|}$. [step 1.1, L1, algebra]

3.1 Applying [L2] inside $G[W]$ yields an $\epsilon$-restricted set of size at least $\delta_0|W|$. Since $\delta_0|W|\ge\delta|W|$ by step 1.1, this is the required set. [step 1.1, step 2.1, L2, algebra] ∎

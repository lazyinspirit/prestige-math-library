---
id: cor-rodl-for-a-nonempty-family-of-forbidden-graphs
kind: corollary
title: "Rödl's theorem for a nonempty family of forbidden induced subgraphs"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-rodl-every-h-free-graph-has-a-linear-restricted-set, def-h-free-and-family-free-graph, def-c-sparse-and-c-restricted-vertex-set]
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
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a nonempty family of graphs and let
$\epsilon\in(0,\tfrac12)$. Then there exists $\delta>0$ such that every
$\mathcal F$-free nonempty finite simple graph $G$ has an $\epsilon$-restricted vertex
set of size at least $\delta|V(G)|$.

## Facts & Assumptions

**Given:** A nonempty family $\mathcal F$ of graphs and a real $\epsilon\in(0,\tfrac12)$.

[L1] A graph that is $\mathcal F$-free is $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

[L2] For every graph $H$ and $\epsilon\in(0,1/2)$ there is $\delta>0$ such that every nonempty $H$-free graph $G$ has an $\epsilon$-restricted set of size at least $\delta|V(G)|$ ([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

## Proof

**Proof technique:** direct.

1.1 Choose any graph $H\in\mathcal F$. [given, choose]

2.1 By [L2], there is a constant $\delta>0$ such that every nonempty $H$-free graph has an $\epsilon$-restricted set of size at least $\delta|V(G)|$. [step 1.1, L2, choose]

3.1 If $G$ is nonempty and $\mathcal F$-free, then [L1] makes it $H$-free, so step 2.1 applies to $G$. [step 1.1, step 2.1, L1] ∎

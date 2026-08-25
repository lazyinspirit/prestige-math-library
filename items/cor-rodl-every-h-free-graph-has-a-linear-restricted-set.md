---
id: cor-rodl-every-h-free-graph-has-a-linear-restricted-set
kind: corollary
title: "Rödl: for every $H$ and every $\\epsilon\\in(0,\\tfrac12)$ there is $\\delta>0$ such that every nonempty $H$-free graph has an $\\epsilon$-restricted vertex set of size at least $\\delta|V(G)|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-nikiforov-few-induced-copies-force-a-linear-restricted-set, def-h-free-and-family-free-graph, def-induced-copy-number, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

For every graph $H$ and every $\epsilon\in(0,\tfrac12)$ there exists $\delta>0$
such that every nonempty $H$-free finite simple graph $G$ has an
$\epsilon$-restricted vertex set of size at least $\delta|V(G)|$.

## Facts & Assumptions

**Given:** A graph $H$ and a real $\epsilon\in(0,\tfrac12)$.

[L1] If $G$ is $H$-free, then $\operatorname{ind}_H(G)=0$ ([[def-h-free-and-family-free-graph]], [[def-induced-copy-number]]).

[L2] For every graph $H$ and $\epsilon\in(0,1/2)$ there is $\delta>0$ such that every nonempty graph $G$ satisfying $\operatorname{ind}_H(G)<(\delta|V(G)|)^{|V(H)|}$ has an $\epsilon$-restricted set of size at least $\delta|V(G)|$ ([[thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta$ be the constant supplied by [L2] for the given $H$ and $\epsilon$. [L2, choose]

1.2 If $G$ is nonempty and $H$-free, then [L1] gives $\operatorname{ind}_H(G)=0<(\delta|V(G)|)^{|V(H)|}$. [L1, algebra]

2.1 Applying [L2] to step 1.2 yields the desired $\epsilon$-restricted set. [step 1.1, step 1.2, L2] ∎

---
id: lem-few-induced-copies-is-inherited-by-large-induced-subgraphs
kind: lemma
title: "If $G$ has fewer than $(\\delta n)^h$ induced copies of $H$ and $|W|\\ge\\lambda n$, then $G[W]$ has fewer than $((\\delta/\\lambda)|W|)^h$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-copy-number, def-induced-embedding-and-induced-copy, def-subgraph-induced-subgraph-and-spanning-subgraph, def-real-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Let $H$ have $h$ vertices. If $G$ has $n$ vertices,
$\operatorname{ind}_H(G)<(\delta n)^h$, and $W\subseteq V(G)$ satisfies
$|W|\ge\lambda n>0$, then

$$ \operatorname{ind}_H(G[W])<((\delta/\lambda)|W|)^h. $$

## Facts & Assumptions

**Given:** A graph $H$ with $h$ vertices, a graph $G$ on $n$ vertices, reals $\delta>0$ and $\lambda>0$, and a subset $W\subseteq V(G)$ with $|W|\ge\lambda n$ and $\operatorname{ind}_H(G)<(\delta n)^h$.

[L1] An induced embedding of $H$ into $G[W]$ is, by definition, an induced embedding of $H$ into $G$ whose image lies in $W$ ([[def-induced-embedding-and-induced-copy]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L2] The induced-copy number counts induced embeddings ([[def-induced-copy-number]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every induced embedding counted by $\operatorname{ind}_H(G[W])$ is also counted by $\operatorname{ind}_H(G)$. [L1]

2.1 Therefore $\operatorname{ind}_H(G[W])\le\operatorname{ind}_H(G)<(\delta n)^h$ by [L2]. [step 1.1, L2]

3.1 Since $|W|\ge\lambda n$, one has $n\le|W|/\lambda$. Substituting this into step 2.1 yields $\operatorname{ind}_H(G[W])<((\delta/\lambda)|W|)^h$. [step 2.1, algebra] ∎

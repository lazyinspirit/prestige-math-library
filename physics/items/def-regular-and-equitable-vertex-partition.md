---
id: def-regular-and-equitable-vertex-partition
kind: definition
title: "$\\epsilon$-regular vertex partitions, equitable partitions, and refinement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-epsilon-regular-pair]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.7 and Theorem 2.1.20"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Definition

Let $G$ be a nonempty graph and let $\mathcal P=\{V_1,\ldots,V_k\}$ be a partition of $V(G)$ into nonempty parts. For $\epsilon>0$, the partition is **$\epsilon$-regular** if
$$\sum_{(i,j):\,(V_i,V_j)\text{ is not }\epsilon\text{-regular}}|V_i||V_j|\le\epsilon|V(G)|^2,$$
where ordered pairs and the diagonal pairs $i=j$ are included ([[def-epsilon-regular-pair]]).

The partition is **equitable** if $||V_i|-|V_j||\le1$ for all $i,j$. A partition $\mathcal Q$ **refines** $\mathcal P$ if every part of $\mathcal Q$ is contained in a part of $\mathcal P$. The empty family is the unique partition of the null graph and is equitable and $\epsilon$-regular by convention.

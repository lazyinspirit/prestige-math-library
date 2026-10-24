---
id: ex-energy-of-trivial-and-discrete-partitions
kind: example
title: "The trivial partition has energy $d(G)^2$, while the singleton partition records every adjacency"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-energy-of-a-vertex-partition, lem-energy-is-monotone-under-refinement]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.10"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $G$ be an $n$-vertex graph with $n>0$ and $m$ edges. The one-part partition has energy
$$\left(\frac{2m}{n^2}\right)^2,$$
whereas the partition into singletons has energy $2m/n^2$. The latter is at least the former. For the null graph both energies are $0$ by convention.

## Facts & Assumptions

**Given:** A finite graph and its trivial and discrete partitions.

[L1] Partition energy is the ordered part-pair weighted sum of squared densities, with null-graph value $0$ ([[def-energy-of-a-vertex-partition]]).

[L2] Energy cannot decrease under refinement ([[lem-energy-is-monotone-under-refinement]]).

## Verification

**Proof technique:** direct.

1.1 For the one-part partition, the ordered-pair density is $d(V,V)=2m/n^2$, so [L1] gives energy $(2m/n^2)^2$. [given, L1, algebra]

1.2 In the singleton partition, an ordered pair of distinct singleton parts has squared density $1$ exactly when its two vertices are adjacent; diagonal densities and nonedge densities are $0$. Every edge contributes its two orientations, so [L1] gives energy $2m/n^2$. [given, L1, algebra]

2.1 Since $0\le2m/n^2\le1$, its square is no larger than itself, agreeing with [L2] because the singleton partition refines the trivial one. The null case is the convention in [L1]. [step 1.1, step 1.2, L1, L2, algebra] ∎

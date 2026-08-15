---
id: ex-triangle-counting-in-a-complete-tripartite-graph
kind: example
title: "The triangle counting lemma is exact for three complete cross-pairs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-triangle-counting-lemma-for-regular-triples, def-edge-density-between-vertex-sets, def-epsilon-regular-pair]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.2.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $X,Y,Z$ be disjoint nonempty vertex sets with every cross-edge between distinct sets present. Every cross-pair is $0$-regular of density $1$, and exactly $|X||Y||Z|$ ordered transversal triples span a triangle.

## Facts & Assumptions

**Given:** Three sets with all cross-edges present.

[L1] The triangle counting lemma bounds the number of transversal triangles from the three pair densities and their regularity ([[thm-triangle-counting-lemma-for-regular-triples]]).

[L2] Density is the number of ordered cross-edge incidences divided by the product of the set sizes ([[def-edge-density-between-vertex-sets]]).

[L3] A pair is $0$-regular when every nonempty subpair has the same density as the whole pair ([[def-epsilon-regular-pair]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], each cross-pair has density $1$. Every nonempty subpair is also complete and has density $1$, so each pair is $0$-regular by [L3]. [given, L2, L3]

1.2 Every $(x,y,z)\in X\times Y\times Z$ has all three required edges and therefore spans a triangle. Conversely, each ordered transversal triangle is one such product choice, giving exactly $|X||Y||Z|$. [given, algebra]

2.1 Substitution $a=b=c=1$ and $\epsilon=0$ into [L1] yields the same lower bound $|X||Y||Z|$, so the bound is exact here. [step 1.1, step 1.2, L1, algebra] ∎

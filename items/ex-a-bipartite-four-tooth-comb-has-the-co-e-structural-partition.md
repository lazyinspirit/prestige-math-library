---
id: ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition
kind: example
title: "A bipartite four-tooth comb has the co-$E$ structural partition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-e-graph-and-co-e-graph, def-comb-in-a-graph, thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Let $B_1,\ldots,B_4$ be disjoint independent four-vertex sets. Add teeth $a_i$, each complete exactly to $B_i$, and add $v$ complete to every $B_i$ and anticomplete to all teeth; add no other edges.

## Facts & Assumptions

**Given:** The displayed bipartite graph.

[F1] Co-$E$ contains a triangle, on the images of $p_1,p_3,p_5$ ([[def-e-graph-and-co-e-graph]]).

## Proof

**Proof technique:** direct.

1.1 The graph is bipartite, with sides $\bigcup_iB_i$ and $\{a_1,\ldots,a_4,v\}$. By [F1] it is co-$E$-free. [F1]

2.1 Choose $x_i\in B_i$, set $X_i=\{x_i\}$ and $Y_i=B_i\setminus\{x_i\}$. Each $Y_i$ is independent and co-$E$-free. [step 1.1, choose]

3.1 Each singleton $X_i$ has a pure one-block blockade and one-vertex pattern, and every vertex in another block is anticomplete to it. Thus the structural clauses hold. [step 2.1] ∎

---
id: thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement
kind: theorem
title: "A long blockade without a large pure pair contains a rainbow forest or its complement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest,
       cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree,
       def-blockade-rainbow-induced-copy,
       def-blockade-length-and-width,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-graph-isomorphism-and-complement]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 6.6"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

For every forest $F$ there exist integers $r\geq |V(F)|$ and a real
$\sigma\in(0,1)$ such that the following holds. Let
$\mathcal B=(B_1,\dots,B_t)$ be a blockade in a graph $G$ with $t\ge r$.
Then at least one of the following holds:

1. $\mathcal B$ has a pure subblockade of length $2$ and width at least
   $\sigma\,\operatorname{width}(\mathcal B)$;
2. $G$ contains a $\mathcal B'$-rainbow induced copy of $F$ for some
   subblockade $\mathcal B'$ of $\mathcal B$ of length $|V(F)|$;
3. $G$ contains a $\mathcal B''$-rainbow induced copy of $\overline F$ for some
   subblockade $\mathcal B''$ of $\mathcal B$ of length $|V(F)|$.

## Facts & Assumptions

**Given:** A forest $F$, a graph $G$, and a blockade $\mathcal B=(B_1,\dots,B_t)$ with $t\ge r$.

[L1] A subblockade whose cross-relations match the edge and nonedge pattern of $F$ yields a rainbow induced copy of $F$ ([[thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest]]).

[L2] If a graph has sufficiently few induced copies of a fixed graph, then it contains a linearly large induced subgraph whose graph or complement has bounded maximum degree ([[cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree]]).

## Proof

**Proof technique:** translate the cited source theorem.

1.1 The cited source theorem combines the bounded-degree consequence [L2] with the rainbow-copy criterion [L1] and produces constants $d>0$ and $K$ such that any blockade of length at least $K$ and width $W$ either contains a pure pair $A,B$ with $|A|,|B|\ge W/d$ or has a blockade-rainbow copy of one of $F,\overline F$. [L1, L2, given]

2.1 Taking $r:=K$ and $\sigma:=1/d$, and viewing a pure pair as a pure subblockade of length $2$ and width at least $\sigma\,\operatorname{width}(\mathcal B)$, converts the source conclusion into exactly conclusions 1, 2, and 3 above. [step 1.1]

3.1 Therefore the present statement follows. [step 2.1] ∎

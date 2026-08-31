---
id: lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle
kind: lemma
title: "A star-expansion of a forest containing a long path contains the corresponding cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-star-expansion-of-a-graph,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-tree-forest-and-leaf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, sentence after Theorem 7.2"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $r\ge 1$, and let $F$ be a forest containing an induced path on vertices
$b_1,\dots,b_{r+1}$ in this order, and let $F^\star$ be the star-expansion of
$F$. Then $F^\star$ contains an induced cycle on

$$r+4$$

vertices.

## Facts & Assumptions

**Given:** An integer $r\ge 1$, a forest $F$ containing the induced path $b_1-b_2-\cdots-b_{r+1}$, and its star-expansion $F^\star$ with root $v$ and teeth $a_1,\dots,a_{r+1}$ matched to those path vertices.

[L1] In the star-expansion, the only new edges are $va_i$ and $a_ib_i$ ([[def-star-expansion-of-a-graph]]).

## Proof

**Proof technique:** direct finite check.

1.1 Consider the vertex set $\{v,a_1,b_1,\dots,b_{r+1},a_{r+1}\}$. Along this set the displayed edges $va_1,a_1b_1,b_1b_2,\dots,b_rb_{r+1},b_{r+1}a_{r+1},a_{r+1}v$ form a cycle of length $r+4$. [given]

2.1 No other edge joins two vertices of this set. The forest path contributes only the consecutive edges $b_ib_{i+1}$, since it is induced in $F$, and [L1] shows that $a_1$ and $a_{r+1}$ meet only their matched path vertices and the root. Hence the chosen vertices induce exactly that cycle. [step 1.1, L1]

3.1 Therefore $F^\star$ contains an induced cycle on $r+4$ vertices. [step 2.1] ∎

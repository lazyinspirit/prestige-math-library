---
id: lem-the-star-expansion-of-the-four-vertex-path-contains-induced-c-six-and-c-seven
kind: lemma
title: "The star-expansion of the four-vertex path contains induced six- and seven-cycles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-star-expansion-of-a-graph,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, discussion after Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $P_4^\star$ be the star-expansion of the path
$b_1-b_2-b_3-b_4$. Then $P_4^\star$ contains induced copies of $C_6$ and $C_7$.

## Facts & Assumptions

**Given:** The star-expansion $P_4^\star$ with root $v$, teeth
$a_1,a_2,a_3,a_4$, and path vertices $b_1,b_2,b_3,b_4$.

[L1] In a star-expansion, the only new edges are $va_i$ and $a_ib_i$
([[def-star-expansion-of-a-graph]]).

## Proof

**Proof technique:** direct finite check.

1.1 Consider the six vertices $v,a_1,b_1,b_2,b_3,a_3$. By [L1], the edges among them are exactly $va_1,a_1b_1,b_1b_2,b_2b_3,b_3a_3,a_3v$. No other edge is present: the teeth $a_1,a_3$ meet only their matched path vertices and the root, and the path contains no edge $b_1b_3$. Hence these six vertices induce a $6$-cycle. [L1]

1.2 Consider the seven vertices $v,a_1,b_1,b_2,b_3,b_4,a_4$. Again [L1] shows that the edges among them are exactly $va_1,a_1b_1,b_1b_2,b_2b_3,b_3b_4,b_4a_4,a_4v$. No chord occurs: $a_1$ and $a_4$ meet only the root and their matched path vertices, and the path has no edges other than the consecutive ones displayed. Hence these seven vertices induce a $7$-cycle. [L1]

2.1 Steps 1.1 and 1.2 give induced copies of $C_6$ and $C_7$ in $P_4^\star$. [step 1.1, step 1.2] ∎

---
id: cex-omitting-cross-block-purity-breaks-the-transversal-conclusion
kind: counterexample
title: "Omitting cross-block purity breaks the transversal conclusion"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-comb-in-a-graph, def-pattern-graph-of-a-pure-blockade, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, condition (2.3) and Claim 5.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement refuted

It is false that one wide pure-partition block selected from each comb block
must form a pure transversal if cross-block purity is omitted.

## Facts & Assumptions

**Given:** Four comb blocks $B_i=\{b_i^0,\ldots,b_i^7\}$ and teeth $a_i$. Each $a_i$ is complete to $B_i$ and anticomplete to the other $B_j$. Take the one-block partitions $A^i_1=B_i$. Put precisely one edge, $b_1^0b_2^0$, between $B_1$ and $B_2$, and put no edges between any other distinct pair of blocks.

[F1] The specified tooth/block incidences make these four pairs an $(4,8)$-comb ([[def-comb-in-a-graph]]).

[F2] A pair is mixed when it is neither complete nor anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Counterexample

**Proof technique:** direct finite adjacency check.

1.1 Each one-block partition $(A^i_1)$ is vacuously a pure blockade, and $|A^i_1|=8\ge8/(2\cdot4)=1$; [F1] confirms that the ambient blocks are a comb. [F1, given, algebra]

1.2 The pair $(A^1_1,A^2_1)$ has the edge $b_1^0b_2^0$ but, for example, does not have $b_1^0b_2^1$. It is neither anticomplete nor complete, hence is mixed by [F2]. [F2, given]

2.1 Therefore the four wide selected blocks are not a pure transversal. The missing cross-block-purity condition is exactly what fails here. [step 1.2, F2] ∎

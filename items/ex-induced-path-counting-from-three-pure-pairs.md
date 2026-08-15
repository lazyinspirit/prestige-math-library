---
id: ex-induced-path-counting-from-three-pure-pairs
kind: example
title: "Two complete pairs and one anticomplete pair produce exactly $|X_1||X_2||X_3|$ induced copies of $P_3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-induced-counting-lemma-for-regular-pairs, def-edge-density-between-vertex-sets, def-epsilon-regular-pair, def-standard-complete-bipartite-path-and-cycle-graphs]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.6.2 with Remark 2.6.3(b)"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $X_1,X_2,X_3$ be disjoint nonempty vertex sets. If $(X_1,X_2)$ and $(X_2,X_3)$ are complete and $(X_1,X_3)$ is anticomplete, then exactly $|X_1||X_2||X_3|$ part-respecting labelled triples induce the path $1-2-3$. All three cross-pairs are $0$-regular.

## Facts & Assumptions

**Given:** Three pure cross-pairs as in the Statement.

[L1] The induced counting lemma counts maps satisfying every prescribed edge and nonedge relation across regular pairs ([[thm-induced-counting-lemma-for-regular-pairs]]).

[L2] Complete and anticomplete pairs have density $1$ and $0$, respectively ([[def-edge-density-between-vertex-sets]]), and constant-density pure pairs are $0$-regular ([[def-epsilon-regular-pair]]).

[L3] The graph $P_3$ has edges $12,23$ and nonedge $13$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Every triple $(x_1,x_2,x_3)$ in the product has edges $x_1x_2,x_2x_3$ and nonedge $x_1x_3$. By [L3] it induces the labelled path $1-2-3$. [given, L3]

2.1 Conversely every part-respecting labelled triple is one of these product choices, so their number is exactly $|X_1||X_2||X_3|$. [step 1.1, algebra]

3.1 The two complete pairs have density $1$ and the anticomplete pair density $0$; every nonempty subpair retains its density. Hence [L2] gives $0$-regularity, making this the zero-error model of [L1]. [given, L1, L2] ∎

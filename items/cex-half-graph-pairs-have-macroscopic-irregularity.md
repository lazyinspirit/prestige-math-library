---
id: cex-half-graph-pairs-have-macroscopic-irregularity
kind: counterexample
title: "The half graph has no regularity across its natural bipartition at a fixed small parameter"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-epsilon-regular-pair, def-standard-complete-bipartite-path-and-cycle-graphs]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, sec. 2.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $X_n=\{a_1,\ldots,a_n\}$ and $Y_n=\{b_1,\ldots,b_n\}$, with $a_ib_j$ an edge exactly when $i\le j$. For every $n\ge4$, the natural pair $(X_n,Y_n)$ is not $1/5$-regular.

## Facts & Assumptions

**Given:** The displayed bipartite half graph.

[L1] Failure of $\epsilon$-regularity is witnessed by subsets of relative size at least $\epsilon$ whose density differs from the full-pair density by more than $\epsilon$ ([[def-epsilon-regular-pair]]).

[L2] A bipartite graph has no edges within either of its two specified sides ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Counterexample

**Proof technique:** direct.

1.1 The number of cross-edges is $n+(n-1)+\cdots+1=n(n+1)/2$, so $d(X_n,Y_n)=(n+1)/(2n)$. [given, algebra]

1.2 Put $q=\lceil n/4\rceil$, $A=\{a_1,\ldots,a_q\}$, and $B=\{b_{n-q+1},\ldots,b_n\}$. Then $|A|,|B|\ge n/4>n/5$, and every $a_i\in A$ satisfies $i\le j$ for every $b_j\in B$, so $d(A,B)=1$. [given, L2, choose, algebra]

2.1 For $n\ge4$, one has $|d(A,B)-d(X_n,Y_n)|=(n-1)/(2n)\ge3/8>1/5$. Together with the size bounds in step 1.2, [L1] shows that $(X_n,Y_n)$ is not $1/5$-regular. [step 1.1, step 1.2, L1, algebra] ∎

---
id: lem-author-2501feae0519-cycle-union-bound
kind: lemma
title: A Berge cycle bounds the union of its hyperedges
status: published
origin: pipeline
domain: mathematics
deps:
  - def-berge-cycles-and-incidence-graph
  - math:def-uniform-hypergraph-and-complete-partite-hypergraph
  - math:def-finite-cardinality
  - math:thm-double-counting
  - math:def-sum-over-a-finite-index-set
  - math:lem-nat-finite-sum-laws-and-the-canonical-embedding
dependency_roles:
  def-berge-cycles-and-incidence-graph: mathematical-premise
  math:def-uniform-hypergraph-and-complete-partite-hypergraph: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:thm-double-counting: mathematical-premise
  math:def-sum-over-a-finite-index-set: mathematical-premise
  math:lem-nat-finite-sum-laws-and-the-canonical-embedding: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $r\geq2$ and let $e_0,\ldots,e_{t-1}$ be the distinct edges of a Berge cycle of length $t\geq2$ in a finite $r$-uniform hypergraph. Then $|\bigcup_{i<t}e_i|\leq(r-1)t$.

## Statement references

[[def-berge-cycles-and-incidence-graph]]

[[math:def-uniform-hypergraph-and-complete-partite-hypergraph]]

[[math:def-finite-cardinality]]

## Facts & Assumptions

[F1] [[def-berge-cycles-and-incidence-graph]] defines a Berge cycle using distinct vertices $x_i\in e_i\cap e_{i+1}$, cyclically. [[math:def-uniform-hypergraph-and-complete-partite-hypergraph]] gives $|e_i|=r$, and [[math:def-finite-cardinality]] interprets the finite cardinalities.

[F2] [[math:thm-double-counting]] states that for finite sets $X,Y$ and a relation $R\subseteq X\times Y$, the sum of the row-fibre cardinalities and the sum of the column-fibre cardinalities both equal $|R|$. [[math:def-sum-over-a-finite-index-set]] defines these natural-valued sums independently of enumeration, with reindexing and constant-summand clauses.

[F3] Clauses 1--4 of [[math:lem-nat-finite-sum-laws-and-the-canonical-embedding]] give additivity, constant sums, splitting and monotonicity for finite sums of natural numbers. Applying them to an enumeration as in [[math:def-sum-over-a-finite-index-set]] gives the corresponding laws for a finite index set; a finite list may be extended by zeros to a sequence on $\mathbb N$.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Put $U=\bigcup_{i<t}e_i$ and $I=\{0,\ldots,t-1\}$. These are finite, with $|I|=t$. Define $R=\{(v,i)\in U\times I:v\in e_i\}$ and $m(v)=|\{i\in I:v\in e_i\}|$ for $v\in U$. The row fibre at $v$ has size $m(v)$ and the column fibre at $i$ is $e_i$, of size $r$. Double counting therefore gives $\sum_{v\in U}m(v)=|R|=\sum_{i\in I}r=rt$. [F1, F2]

2.1 Every $v\in U$ lies in at least one displayed edge, so $m(v)\geq1$ and $d(v)=m(v)-1$ is a natural number satisfying $m(v)=1+d(v)$. Additivity and the constant-summand law yield $rt=\sum_{v\in U}(1+d(v))=|U|+\sum_{v\in U}d(v)$. [step 1.1, F2, F3, algebra]

3.1 Each cycle vertex $x_i$ belongs to the two distinct edges $e_i,e_{i+1}$, so $d(x_i)\geq1$, also when $t=2$. Enumerate $U$ with the $t$ distinct cycle vertices first. By splitting the sum after these vertices, monotonicity and the constant-summand law give $\sum_{v\in U}d(v)\geq t$, since the remaining terms are nonnegative. Thus $|U|+t\leq rt=(r-1)t+t$, and cancellation gives $|U|\leq(r-1)t$. [F1, F2, F3, step 2.1, algebra] ∎

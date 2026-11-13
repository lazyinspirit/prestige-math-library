---
id: lem-author-2501feae0519-independent-class-colouring-bound
kind: lemma
title: Small independent sets obstruct weak colourings
status: published
origin: pipeline
domain: mathematics
deps:
  - def-weak-hypergraph-colouring-palette
  - math:def-finite-cardinality
  - math:thm-subset-of-a-finite-set
  - math:thm-sum-rule
  - math:thm-reals-ordered-field
  - math:lem-nat-finite-sum-laws-and-the-canonical-embedding
  - math:lem-finite-sum-laws
dependency_roles:
  def-weak-hypergraph-colouring-palette: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:thm-sum-rule: mathematical-premise
  math:thm-reals-ordered-field: mathematical-premise
  math:lem-nat-finite-sum-laws-and-the-canonical-embedding: mathematical-premise
  math:lem-finite-sum-laws: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $\mathcal H=(V,E)$ be a finite hypergraph with $|V|=n>0$, and let $k$ be a positive integer. Call $I\subseteq V$ independent if it contains no hyperedge. If every independent set has size at most a real number $a$ and $ka<n$, then $\mathcal H$ has no weak $k$-colouring. In comparisons and arithmetic with reals, natural numbers denote their canonical images in $\mathbb R$.

## Statement references

[[def-weak-hypergraph-colouring-palette]]

[[math:def-finite-cardinality]]

[[math:thm-subset-of-a-finite-set]]

[[math:thm-sum-rule]]

[[math:thm-reals-ordered-field]]

[[math:lem-nat-finite-sum-laws-and-the-canonical-embedding]]

[[math:lem-finite-sum-laws]]

## Facts & Assumptions

[F1] [[def-weak-hypergraph-colouring-palette]] defines weak colourings as maps to $[k]=\{1,\ldots,k\}$ with no monochromatic hyperedge; unused colours are allowed.

[F2] [[math:def-finite-cardinality]] defines finite cardinality. By [[math:thm-subset-of-a-finite-set]], every subset of finite $V$ is finite. Clause 2 of [[math:thm-sum-rule]] gives the cardinality of a finite pairwise disjoint union as the sum of its members' cardinalities.

[F3] [[math:thm-reals-ordered-field]] supplies the ordered real field. Clauses 6 and 7 of [[math:lem-nat-finite-sum-laws-and-the-canonical-embedding]] identify a finite natural sum with the real sum of its canonical images and preserve natural order under this embedding.

[F4] Clauses 2 and 4 of [[math:lem-finite-sum-laws]] give $\sum_{j<k}a=ka$ for a constant real list and monotonicity of real finite sums under termwise inequalities.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** No weak $k$-colouring exists.

1.1 If $c:V\to[k]$ were a weak $k$-colouring, put $C_j=\{v\in V:c(v)=j+1\}$ for $0\leq j<k$. These sets are pairwise disjoint, cover $V$, and are finite subsets of $V$. Each $C_j$ is independent, since a hyperedge contained in it would be monochromatic. Hence $|C_j|\leq a$ for every $j<k$, including unused colours. [given, F1, F2]

2.1 The finite partition formula gives $n=\sum^{\mathbb N}_{j<k}|C_j|$. Passing to canonical real images and applying the real finite-sum laws gives $n=\sum^{\mathbb R}_{j<k}|C_j|\leq\sum^{\mathbb R}_{j<k}a=ka<n$. This contradicts the real order, so no weak $k$-colouring exists. [given, F2, F3, F4, step 1.1, algebra] ∎

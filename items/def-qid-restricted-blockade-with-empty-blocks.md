---
id: def-qid-restricted-blockade-with-empty-blocks
kind: definition
title: "Qid restricted blockade with empty blocks"
status: published
origin: pipeline
deps: [def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, def-complete-anticomplete-pure-and-x-sparse-blockades]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "Section 2, blockade conventions"
---

## Definition

For a finite simple graph $G$, a QID block sequence $(B_1,\ldots,B_k)$ has integer length $k\geq1$, pairwise disjoint subsets $B_i\subseteq V(G)$, and width $\min_i|B_i|$. Empty blocks are permitted, including repeated empty sets.

For $x\geq0$, it is $x$-restricted if for each $i$ one may choose $K_i\in\{G,\overline G\}$ such that every $v\in\bigcup_{j>i}B_j$ satisfies $|N_{K_i}(v)\cap B_i|\leq x|B_i|$. The choice of $K_i$ is fixed for that index, for all later vertices. It is uniformly $x$-sparse in $K$ if every index uses the same $K$.

This extends [[def-directional-and-weak-sparsity-between-vertex-sets]] by the degree inequality itself. If $B_i$ is empty both sides are zero; if the later union is empty the condition has no instances. At positive width these are the blockades of [[def-blockade-length-and-width]]. For positive width and $0\leq x\leq1$, uniform $x$-sparsity in a fixed $K\in\{G,\overline G\}$ is precisely the $x$-sparse blockade notion of [[def-complete-anticomplete-pure-and-x-sparse-blockades]] applied to the ambient graph $K$: the degree condition on a union holds exactly when it holds on every constituent later block. For $x>1$ the QID degree inequality remains meaningful, but it lies outside that published definition's parameter range.

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Section 2, blockade conventions.

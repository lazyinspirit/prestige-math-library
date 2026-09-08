---
id: def-pruned-tree-products-and-dense-matrices
kind: definition
title: "Finite products of pruned trees and dense matrices"
status: published
origin: pipeline
deps: [def-set-theoretic-tree-and-levels]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Halpern–Läuchli definitions and Propositions 1–2 preceding Theorem 29.28, printed p661"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

A tree here has height $\omega$, a unique root, finitely many immediate successors at each node, and no terminal nodes. Heights, tree order and levels are as in [[def-set-theoretic-tree-and-levels]]. For $A\subseteq T$, say that $A$ **dominates** $t$ if $t\le_Ta$ for some $a\in A$. For $h,k<\omega$, $A$ is **$(h,k)$-dense** if some $x\in T_h$ has every node of $T_{h+k}$ above $x$ dominated by $A$. It is **$k$-dense** if it is $(0,k)$-dense, and **infinity-dense** if it is $k$-dense for every $k<\omega$.

The unique root is below every node: the first predecessor of a positive-height node is a root, and uniqueness identifies it; the height-zero case is the root itself. Hence the height-$k$ cone above the root is exactly $T_k$. Therefore $A$ is $k$-dense iff it dominates every node on level $k$, in both directions by this equality. Every node has some finite height, so infinity-density implies it is dominated by applying this equivalence at its height. Conversely if every node is dominated, then every level is dominated and the same equivalence gives $k$-density for each $k$. These prove both density characterizations directly.

For a positive finite family $(T_1,\ldots,T_d)$ of such trees, an **$(h,k)$-matrix** is a product $\prod_{i=1}^d A_i$ where each $A_i\subseteq T_i$ is $(h,k)$-dense; the same $h,k$ are used in every factor. A **$k$-matrix** means a $(0,k)$-matrix. Matrices are subsets of the full product $\prod_iT_i$. The **level product**, in contrast, is $\bigcup_{n<\omega}\prod_i(T_i)_n$, consisting only of equal-height tuples. The density definition does not require a matrix to be in the level product.

For $k=0$, $(h,0)$-density means that some node of level $h$ is dominated; for $h=k=0$, it is equivalent to $A\ne\varnothing$. No terminal nodes ensures every height-$h$ node has an extension at height $h+k$, by finitely many successor choices; therefore an empty set is never $(h,k)$-dense. At $d=1$ a matrix is just the indicated dense set, up to the one-tuple identification; $d=0$ is excluded.

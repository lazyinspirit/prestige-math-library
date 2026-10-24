---
id: "def-normal-splitting-set-theoretic-tree"
kind: "definition"
title: "Normal and splitting trees"
status: published
origin: "pipeline"
deps: ["def-set-theoretic-tree-and-levels"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted)"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
---

## Definition

For a tree as in [[def-set-theoretic-tree-and-levels]], call $T$ **normal** when it has exactly one root, every $t\in T$ has an extension in $T_\beta$ whenever $\operatorname{ht}(t)<\beta<\operatorname{ht}(T)$, and distinct nodes on the same nonzero limit level have distinct strict predecessor sets.

A node $u$ is an **immediate successor** of $t$ if $t<_Tu$ and there is no $v$ with $t<_Tv<_Tu$. Call $T$ **splitting** when every node $t$ has at least two distinct immediate successors whenever $\operatorname{ht}(t)+1<\operatorname{ht}(T)$. Splitting is an additional condition, not part of normality here. No cardinal bound on levels is included in either adjective.

The empty tree is not normal. A singleton tree is normal and vacuously splitting. Nodes on a last level have no splitting requirement; limit-level uniqueness is required only at nonzero limits. These conventions separate conditions that Monk bundles into his normal-tree terminology.

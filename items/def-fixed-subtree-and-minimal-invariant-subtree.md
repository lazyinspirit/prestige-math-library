---
id: def-fixed-subtree-and-minimal-invariant-subtree
kind: definition
title: "Fixed subtrees and minimal invariant subtrees"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-fixed-point-sets-of-a-group-action, def-graph-automorphism-and-group-action-on-a-simplicial-graph, def-simplicial-tree]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Definition

Let a group $G$ act on a simplicial tree $T$. For a subgroup $H\le G$, the
**fixed-vertex set** is the global fixed-point set $V(T)^H$ from
[[def-fixed-point-sets-of-a-group-action]]. When this set is nonempty, the
subtree spanned by those fixed vertices is the **fixed subtree** of $H$ and is
denoted $T^H$.

A nonempty subtree $Y\subseteq T$ is **$H$-invariant** when $h(Y)=Y$ for every
$h\in H$. A **minimal $H$-invariant subtree** is an $H$-invariant subtree that
contains no smaller nonempty $H$-invariant subtree. It need not exist for an
arbitrary action, and when it does exist it need not be unique in general.

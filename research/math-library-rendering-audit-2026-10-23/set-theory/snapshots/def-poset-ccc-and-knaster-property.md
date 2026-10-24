---
id: def-poset-ccc-and-knaster-property
kind: definition
title: "Compatibility, ccc and Knaster for posets"
status: published
origin: pipeline
deps: [def-partial-order, def-countable, lem-tree-predecessors-and-common-extensions]
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
    - title: "Monk, Set theory following Jech (2024), property (K) definition preceding Lemma 15.14, printed p265; reverse-tree comparison expanded locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $(P,\le)$ be a poset as in [[def-partial-order]], with stronger conditions smaller. Conditions $p,q\in P$ are **compatible** if some $r\in P$ satisfies $r\le p$ and $r\le q$. Otherwise they are **incompatible**. A **poset antichain** is a set of pairwise incompatible conditions. The **countable chain condition** (ccc) says that every poset antichain is countable. The **Knaster property** says that every uncountable subset of $P$ has an uncountable subset consisting of pairwise compatible conditions. Countable includes finite, as in [[def-countable]].

Knaster implies ccc: if $A$ were an uncountable antichain, Knaster would give an uncountable pairwise compatible $B\subseteq A$. Choose two distinct members of $B$; they would be both compatible and incompatible. Empty and countable posets satisfy both properties, because they have no uncountable subsets. A condition is compatible with itself, using itself as lower bound; singletons are therefore pairwise compatible and also antichains under the distinct-pair convention.

Incompatibility is stronger than incomparability in a general poset. For a tree $T$, put $p\le_Pq$ iff $q\le_Tp$, so a lower bound is a common tree extension. By [[lem-tree-predecessors-and-common-extensions]], a common extension forces the two nodes comparable. Conversely, for comparable tree nodes the higher node extends both. Thus the two antichain notions coincide for this reverse tree order. The orientation of the order is essential to that identification.

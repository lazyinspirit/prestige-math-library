---
id: def-antichain-and-poset-covers
kind: definition
title: "Antichains, chain covers, and antichain covers of a poset"
status: published
origin: session
deps: [def-partial-order, def-chain]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Definition

Let $(P,\le)$ be a poset ([[def-partial-order]]).

An **antichain** is a subset $A\subseteq P$ whose distinct elements are
incomparable. Thus $x,y\in A$ and $x\ne y$ imply that neither $x\le y$ nor
$y\le x$. An antichain is **maximal** if it is contained in no larger
antichain, and **maximum** if its cardinality is at least that of every
antichain in $P$. These notions are different: maximal refers to inclusion,
whereas maximum refers to cardinality.

A **chain cover** of $P$ is a family $\mathcal C$ of chains
([[def-chain]]) with $P=\bigcup_{C\in\mathcal C}C$. An **antichain cover** is a
family $\mathcal A$ of antichains with
$P=\bigcup_{A\in\mathcal A}A$. A cover may have overlapping members. For a
finite cover, order its members, assign each point to the first member that
contains it, and delete it from the others. This produces a partition into no
more chains, or no more antichains, so minimum cover numbers are unchanged if
partitions are required.

---
id: def-young-graph
kind: definition
title: The Young graph of partitions
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.16, printed pp. 18-19, and Theorem 6.8, printed p. 26"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: n/a
---

## Definition

Diagrams are English Young diagrams and addable nodes are those of
[[def-removable-and-addable-nodes-of-a-partition]];
$[\lambda]$ denotes the diagram of a partition $\lambda$
([[def-partition-young-diagram-and-conjugate-partition]]).

The **Young graph** is the directed graph whose

- **vertices** are all partitions $\lambda$, including $\lambda=\varnothing$
  and including partitions of every size $n\ge0$; and
- **directed edges** are the pairs $(\lambda,\nu)$ for which $\nu$ is a
  partition and there is an addable node $y$ of $\lambda$ with
  $[\nu]=[\lambda]\cup\{y\}$, the edge pointing from $\lambda$ to $\nu$.

An **edge** $\lambda\to\nu$ therefore always joins a partition of some $n$ to
a partition of $n+1$: inserting a node raises the size by one. The **rank**,
or size, of a vertex $\lambda$ is $|\lambda|$. We say that $\lambda\to\nu$ **adds** the
unique node $[\nu]\setminus[\lambda]$. A **path** in the Young graph is a
finite sequence $\lambda^{(0)}\to\lambda^{(1)}\to\cdots\to\lambda^{(k)}$ of
edges; its **endpoints** are $\lambda^{(0)}$ and $\lambda^{(k)}$, and its
**length** is $k$. Paths of length $0$ are the single vertices.

The edge relation is well defined as a set of ordered pairs: by
[[def-removable-and-addable-nodes-of-a-partition]], for an addable node $y$
the partition $\nu$ with $[\nu]=[\lambda]\cup\{y\}$ is unique, and conversely
the node $[\nu]\setminus[\lambda]$ determines $\nu$ from $\lambda$; hence
distinct addable nodes of $\lambda$ give distinct edges out of $\lambda$, and
there are no multiple edges. The empty partition has
$\operatorname{Add}(\varnothing)=\{(1,1)\}$, so its unique edge points to
$(1)$, while $\operatorname{Rem}(\varnothing)=\emptyset$, so no edge points
into $\varnothing$.

## Remarks

- **Layering and acyclicity.** Since every edge raises the size by one, every
  directed path from $\lambda$ to $\mu$ has length exactly $|\mu|-|\lambda|$; in
  particular $\lambda\to\nu$ and $\nu\to\lambda$ can never both occur, no
  directed cycle exists, and the vertices of a fixed size form an independent
  layer. Paths of length $k$ from $\lambda$ end at partitions of size
  $|\lambda|+k$.

- **Locally finite, globally infinite.** A partition $\lambda$ has at most
  $\ell(\lambda)+1$ addable nodes, because an addable node lies at a row end
  $(i,\lambda_i+1)$ with $i=1$ or $\lambda_{i-1}>\lambda_i$, or is the node
  $(k+1,1)$ opening one new row; a finitely supported region of the plane can be added to
  a fixed diagram in only finitely many ways, so $\lambda$ has finitely many
  outgoing edges. Likewise, each $\nu$ has finitely many incoming edges, since
  a partition of $n+1$ has finitely many removable nodes. The vertex set is
  countably infinite, with a finite layer for each $n$: every partition of
  $n\ge1$ is a list of at most $n$ entries in $\{1,\dots,n\}$, and rank $0$
  consists only of $\varnothing$. There is at least one vertex at every rank.

- **Row endpoints that are not addable give no edge.** In $\lambda=(2,2)$ the
  row end $(2,3)$, a third box in the second row, is not addable: addability
  of $(i,\lambda_i+1)$ requires $i=1$ or $\lambda_{i-1}>\lambda_i$, and here
  $\lambda_1=\lambda_2=2$. No partition of $5$ contains $(2,2)$ and $(2,3)$
  without containing $(1,3)$, so the attempt to add $(2,3)$ produces no vertex
  and no edge. The actual edges out of $(2,2)$ are the edge to $(3,2)$,
  adding the addable node $(1,3)$, and the edge to $(2,2,1)$, adding the
  addable node $(3,1)$ that opens the third row. For partitions $\lambda$
  and $\nu$ with $|\nu|=|\lambda|+1$, containment $[\lambda]\subseteq[\nu]$
  is equivalent to an edge $\lambda\to\nu$: their unique difference node
  is addable because the enlarged diagram is already a Young diagram.

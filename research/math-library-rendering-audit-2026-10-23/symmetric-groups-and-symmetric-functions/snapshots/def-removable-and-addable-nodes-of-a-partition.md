---
id: def-removable-and-addable-nodes-of-a-partition
kind: definition
title: Removable and addable nodes
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Definition 1.10 and the deletion recursion, printed p. 7"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Chapter 2, printed pp. 7-8"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $\lambda\vdash n$ with Young diagram $[\lambda]$, and let
$\mu\vdash n-1$ and $\nu\vdash n+1$ denote partitions of the neighbouring
sizes ([[def-partition-young-diagram-and-conjugate-partition]]).

A node $x\in[\lambda]$ is **removable** if deleting it leaves a Young diagram,
that is, if there is a partition $\mu\vdash n-1$ with
$$[\mu]=[\lambda]\setminus\{x\};$$
such a $\mu$ is unique because a partition is determined by its diagram. A
point $y\notin[\lambda]$ is **addable** for $\lambda$ if inserting it leaves a
Young diagram, that is, if there is a partition $\nu\vdash n+1$ with
$$[\nu]=[\lambda]\cup\{y\};$$
again $\nu$ is unique. We write $\operatorname{Rem}(\lambda)$ and
$\operatorname{Add}(\lambda)$ for the sets of removable and of addable nodes
of $\lambda$.

Since $[\lambda]=\{(i,j):1\le i\le k,\ 1\le j\le\lambda_i\}$ is determined by
the inequalities $1\le j\le\lambda_i$, the two conditions have the following
row form. Write $\lambda_{k+1}:=0$ for a partition $\lambda=(\lambda_1,\dots,\lambda_k)$.
A node $(i,\lambda_i)$ is removable if and only if
$\lambda_i>\lambda_{i+1}$: deleting the last node of row $i$ keeps the row
lengths weakly decreasing exactly when row $i+1$ is strictly shorter, and no
node $(i,j)$ with $j<\lambda_i$ can be deleted, since the node
$(i,j+1)$ would then have no node to its left. Similarly a node
$(i,\lambda_i+1)$ with $1\le i\le k$ is addable if and only if $i=1$ or
$\lambda_{i-1}>\lambda_i$, the node $(k+1,1)$ opening a new row is always
addable, and these are all the addable nodes. In particular a row endpoint of
$[\lambda]$ is removable only if no node of $[\lambda]$ lies immediately
below it.

For the empty partition the diagram is empty, so
$\operatorname{Rem}(\varnothing)=\emptyset$, while
$\operatorname{Add}(\varnothing)=\{(1,1)\}$ is a single node, whose insertion
produces the partition $(1)$.

## Remarks

- **Removable nodes are exactly the corners.** The removable nodes of
  $\lambda$ are the row endpoints $(i,\lambda_i)$ with
  $\lambda_i>\lambda_{i+1}$; the lowest row always qualifies, because
  $\lambda_{k+1}=0<\lambda_k$. Every removable node has hook length $1$ in the
  usual terminology, and $(k+1,1)$ is always addable, so $\lambda$ arises from
  exactly $\#\operatorname{Rem}(\lambda)$ partitions of $n-1$ by inserting one
  node, and is contained in exactly $\#\operatorname{Add}(\lambda)$ partitions
  of $n+1$.

- **Nodes versus row endpoints.** Ending a row is necessary but not sufficient
  for removability: in $\lambda=(3,3,1)$ the node $(1,3)$ ends the first row
  but the node $(2,3)$ lies directly below it, so deleting $(1,3)$ leaves the
  row lengths $(2,3,1)$, which are not weakly decreasing and are not the row
  lengths of a partition.

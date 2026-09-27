---
id: def-partition-young-diagram-and-conjugate-partition
kind: definition
title: Partitions, English diagrams, and conjugation
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-symmetric-group]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Chapter 2, printed pp. 7-10, Definitions 2.1 and 2.7"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.4, printed p. 7"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: n/a
---

## Definition

**Partitions.** Let $n\ge 0$ be an integer. A **partition of $n$** is a finite
weakly decreasing sequence $\lambda=(\lambda_1,\dots,\lambda_k)$ of positive
integers with $\lambda_1+\cdots+\lambda_k=n$. Its entries are the **parts** of
$\lambda$ and $k$ is the **number of parts**. For $n=0$ the only partition is
the **empty partition** $\varnothing$, the empty sequence with $k=0$; for
$n\ge 1$ one has $\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_k\ge 1$ and
$k\le n$. We write $\lambda\vdash n$. Trailing zeros are not parts: a finite
sequence of nonnegative integers ending in $0$ is not a partition, so the
number of parts of $\lambda$ is determined by $\lambda$ and
$(\lambda_1,\dots,\lambda_k)$ is a different data type from
$(\lambda_1,\dots,\lambda_k,0)$.

**English Young diagrams.** The **(English) Young diagram** of a nonempty $\lambda$ is
$$[\lambda]:=\{\,(i,j)\;:\;1\le i\le k,\ 1\le j\le \lambda_i\,\}\subseteq\mathbb N\times\mathbb N,$$
where $i$ numbers the **rows** downward and $j$ numbers the **columns**
rightward. An element of $[\lambda]$ is a **node**, or box, of the diagram. Row
$i$ of $[\lambda]$ carries $\lambda_i$ nodes, and column $j$ carries
$$\lambda'_j:=\#\{\,i: \lambda_i\ge j\,\}$$
nodes, a quantity that is $0$ beyond the last column (and for every $j\ge1$ when $\lambda=\varnothing$). Since a partition is weakly
decreasing, $[\lambda]$ determines $\lambda$: if $[\mu]=[\lambda]$, then row
$i$ of $[\lambda]$ is row $i$ of $[\mu]$, so $\mu_i=\lambda_i$ for every $i$
and $\mu=\lambda$. In particular $[\varnothing]=\emptyset$, the empty diagram.

**Conjugation.** The **conjugate partition** of a nonempty $\lambda$ is
$$\lambda':=(\lambda'_1,\lambda'_2,\dots,\lambda'_{\lambda_1}),$$
the sequence of column heights of $[\lambda]$, with $\varnothing':=\varnothing$
for the empty partition. This is again a partition of $n$, and
$[\lambda']$ is the transpose of $[\lambda]$:
for $1\le i\le\lambda_1$ and $1\le j\le k$,
$$(i,j)\in[\lambda']\iff j\le\lambda'_i\iff \lambda_j\ge i\iff (j,i)\in[\lambda].$$
Outside these bounds neither diagram contains the corresponding node; for the empty partition both diagrams are empty.
Conjugation is an involution, $\lambda''=\lambda$, because
$\lambda''_i=\#\{j:\lambda'_j\ge i\}$ counts the columns of $[\lambda]$ of
height at least $i$, that is, the columns $j$ with at least $i$ rows of length
$\ge j$, which by weak decrease is exactly the set of $j\le\lambda_i$. Thus
$\lambda\mapsto\lambda'$ is a bijection on the partitions of $n$, exchanging
the number of parts with the largest part for nonempty partitions.

**Size zero.** The symmetric group of $\{1,\dots,n\}$ is
$S_n:=\operatorname{Sym}(\{1,\dots,n\})$ ([[def-symmetric-group]]) for every
$n\ge 0$, and we fix
$$S_0:=\operatorname{Sym}(\emptyset)=\{1\},$$
the trivial group; for $n=0$ the set $\{1,\dots,n\}$ is empty and the group
acts trivially on every size-zero object below. This is the convention used
whenever the constructions of this page are read at $n=0$.

## Remarks

- **Indexing conventions.** Rows are numbered from top to bottom and columns
  from left to right, and the row lengths are weakly decreasing, so the diagram
  is left-aligned and top-aligned inside its bounding rectangle of $\lambda_1$
  columns and $k$ rows. This is the English convention; the French convention
  (rows weakly increasing downward) is not used here.

- **Conjugation transposes the diagram.** The identity $[\lambda']=[\lambda]^{T}$
  says that summing over the parts of $\lambda'$ is summing over the columns of
  $[\lambda]$: double counting the nodes of $[\lambda]$ by rows gives $n$ and by
  columns gives $\lambda'_1+\cdots+\lambda'_{\lambda_1}$, so $\lambda'$ is a
  partition of $n$. A partition equal to its conjugate is **self-conjugate**;
  the diagonal nodes of $[\lambda]$ are the fixed points of the transpose.

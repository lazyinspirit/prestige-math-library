---
id: def-young-tableau-standard-tableau-and-shape
kind: definition
title: Tableaux and standard tableaux
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
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definitions 2.1(b)(c), printed p. 7"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.4, printed p. 7"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $\lambda\vdash n$ and let $[\lambda]$ be its Young diagram
([[def-partition-young-diagram-and-conjugate-partition]]). A **tableau of shape
$\lambda$**, or $\lambda$-tableau, is a bijection
$$t:[\lambda]\longrightarrow\{1,2,\dots,n\}.$$
We write $t(i,j)$ for the entry of $t$ in the node $(i,j)$, and we display $t$
as the diagram $[\lambda]$ with each node carrying its entry. Thus a tableau
places each of the numbers $1,\dots,n$ in exactly one node of $[\lambda]$. For
$\lambda=\varnothing$ the diagram is empty and the empty map is the unique
tableau of shape $\varnothing$, the **empty tableau**. The **shape** of a
tableau $t$ is the partition $\lambda$ with $t:[\lambda]\to\{1,\dots,n\}$,
which is determined by $t$ because $[\lambda]$ determines $\lambda$.

**Standard tableaux.** A tableau $t$ of shape $\lambda$ is **standard** if its
entries strictly increase along rows and down columns, that is, if
$$t(i,j)<t(i,j+1)\quad\text{whenever }(i,j),(i,j+1)\in[\lambda],$$
$$t(i,j)<t(i+1,j)\quad\text{whenever }(i,j),(i+1,j)\in[\lambda].$$
The empty tableau is standard, because both conditions are vacuous, and it is
the unique standard tableau of shape $\varnothing$. Following the classical
notation we write $f^\lambda$ for the number of standard $\lambda$-tableaux.

**The left action on tableaux.** For $\sigma\in S_n$ and a $\lambda$-tableau
$t$, define
$$(\sigma\cdot t)(i,j):=\sigma\bigl(t(i,j)\bigr)\qquad\bigl((i,j)\in[\lambda]\bigr).$$
Since $t$ is a bijection onto $\{1,\dots,n\}$ and $\sigma$ is a bijection of
$\{1,\dots,n\}$, the map $\sigma\cdot t$ is again a bijection
$[\lambda]\to\{1,\dots,n\}$, hence again a $\lambda$-tableau, and
$\mathrm{id}\cdot t=t$, $\sigma\cdot(\tau\cdot t)=(\sigma\tau)\cdot t$ for all
$\sigma,\tau\in S_n$: the rule is a left action of $S_n$ on the set of
$\lambda$-tableaux. For every $\sigma\in S_n$ the row sets of $\sigma\cdot t$
are the images under $\sigma$ of the row sets of $t$, and the column sets of
$\sigma\cdot t$ are the images under $\sigma$ of the column sets of $t$.

## Remarks

- **A tableau is not a tabloid.** A tableau records a position for every
  entry; the row-equivalence classes of tableaux, called tabloids, are defined
  later on this page and forget the order of the entries inside each row. The
  action above is the one that descends to tabloids.

- **Counting tableaux.** Fixing any listing of the $n$ nodes of $[\lambda]$,
  a tableau is the same thing as an ordering of the entries
  $1,\dots,n$ along that listing, so there are $n!$ tableaux of shape
  $\lambda$; for $n=0$ the empty tableau is the single one and $0!=1$. For $n\ge1$ the
  extreme shapes have exactly one standard tableau each: the single row
  $1\,2\,\cdots\,n$ for $(n)$, and the single column with $1,2,\dots,n$ from
  top to bottom for $(1^n)$, so $f^{(n)}=f^{(1^n)}=1$.

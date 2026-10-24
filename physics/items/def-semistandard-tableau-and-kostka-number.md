---
id: def-semistandard-tableau-and-kostka-number
kind: definition
title: Semistandard tableaux and Kostka numbers
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 2.4, printed pp. 28-29 (PDF pp. 30-31)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Chapter 4, Remark 4.15, printed p. 17 (PDF p. 19), Kostka numbers as multiplicities"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $\lambda\vdash n$ and $\mu\vdash n$ be partitions of the same integer $n$,
with diagrams $[\lambda]$ and $[\mu]$
([[def-partition-young-diagram-and-conjugate-partition]]). For content counts
only, set $\mu_i:=0$ for $i$ beyond the number of parts of $\mu$; these
zeros are not additional parts of the partition.

A **semistandard tableau of shape $\lambda$ and content $\mu$**, also called a
semistandard tableau of shape $\lambda$ and **type $\mu$**, is a filling
$T:[\lambda]\to\{1,2,\dots\}$ of the boxes of $[\lambda]$ with positive
integers such that:

1. **content:** for every $i\ge 1$ the entry $i$ occurs in exactly $\mu_i$
   boxes of $[\lambda]$, so the multiset of entries is
   $\{1^{\mu_1},2^{\mu_2},\dots\}$ and in particular every entry lies between
   $1$ and the number of parts of $\mu$;
2. **rows:** the entries weakly increase along every row, that is,
   $T(i,j)\le T(i,j+1)$ whenever $(i,j)$ and $(i,j+1)$ are both in
   $[\lambda]$;
3. **columns:** the entries strictly increase down every column, that is,
   $T(i,j)<T(i+1,j)$ whenever $(i,j)$ and $(i+1,j)$ are both in $[\lambda]$.

The **Kostka number** $K_{\lambda,\mu}$ is the number of semistandard
tableaux of shape $\lambda$ and content $\mu$:
$$K_{\lambda,\mu}:=\#\{\,T:T\text{ is a semistandard }\lambda\text{-tableau of content }\mu\,\}.$$
This is well defined and finite: a filling of the $n$ boxes of $[\lambda]$ by
positive integers has at most $n^n$ possibilities for $n\ge1$ once each entry is required
to lie between $1$ and the number of parts of $\mu$, and conditions 1--3 cut this
finite set down to the semistandard tableaux, so $K_{\lambda,\mu}$ is a
nonnegative integer. It is zero when the conditions cannot be met.

Two entries may be equal inside a row, but never inside a column: a repeated
entry in a column would contradict the strict increase of condition 3, so the
repetitions of a label forced by the content $\mu$ must be spread across
distinct columns of $[\lambda]$. For $\lambda=\mu=\varnothing$ there is a
single filling, the empty one, so
$$K_{\varnothing,\varnothing}=1 .$$

**Relation to standard tableaux.** Because a tableau of content $(1^n)$ uses
each of the numbers $1,\dots,n$ exactly once, its entries are pairwise
distinct, and weak increase along a row is then strict increase along that
row; a filling of $[\lambda]$ with content $(1^n)$ is therefore semistandard
exactly when it is a standard $\lambda$-tableau
([[def-young-tableau-standard-tableau-and-shape]]), that is,
$$K_{\lambda,(1^n)}=f^\lambda ,$$
the number of standard tableaux of shape $\lambda$. In particular, for $n\ge1$,
$K_{(n),(1^n)}=K_{(n),(n)}=1$, since the single row carries either the
standard entries $1,2,\dots,n$ or the $n$ copies of the entry $1$, and
$K_{(1^n),(1^n)}=1$, realized by the single column $1,2,\dots,n$ read from
top to bottom.

## Remarks

- **Compositions.** The definition of content makes sense for any composition
  $\mu$ of $n$, that is, for a finite sequence of nonnegative integers summing
  to $n$, and one sometimes allows $\mu_i=0$; the sources state the definition
  in that generality and then specialize to partitions. Above we have
  specialized to $\mu\vdash n$, which is the case used below.

- **Kostka numbers as multiplicities.** The classical use of the numbers
  $K_{\lambda,\mu}$ is as multiplicities of Specht modules in Young
  permutation modules: Young's rule states that the multiplicity of the
  Specht module labelled by $\lambda$ in $M^\mu$ equals $K_{\lambda,\mu}$.
  Neither the Specht modules nor Young's rule are proved on this page; here
  $K_{\lambda,\mu}$ is only the explicit combinatorial count defined above.

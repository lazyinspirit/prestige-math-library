---
id: def-dominance-order-on-partitions
kind: definition
title: Dominance order on partitions
status: draft
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
    - title: "David Craven, Groups, Geometries and Representation Theory - Definition 1.19 and Lemma 1.20, printed pp. 15-16"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definition 2.12 and Remark 2.13, printed p. 9"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\lambda,\mu\vdash n$ be partitions of the same integer $n$
([[def-partition-young-diagram-and-conjugate-partition]]). We say that
$\lambda$ **dominates** $\mu$, and write $\lambda\unrhd\mu$, exactly when
$$\sum_{i=1}^{r}\lambda_i\;\ge\;\sum_{i=1}^{r}\mu_i\qquad\text{for every }r\ge1,$$
where each sequence is padded with zeros beyond its number of parts; since both
partitions have total $n$, both sides equal $n$ for all $r$ at least the number
of parts of either, so the condition is a finite family of inequalities between
integers. We write $\lambda\rhd\mu$ when $\lambda\unrhd\mu$ and
$\lambda\ne\mu$. The relation $\unrhd$ is the **dominance order** on the
partitions of $n$; we call $\lambda$ and $\mu$ **incomparable** when neither
$\lambda\unrhd\mu$ nor $\mu\unrhd\lambda$ holds.

Because it is defined by a family of non-strict inequalities between integers,
$\unrhd$ is reflexive and transitive. It is also antisymmetric: if
$\lambda\unrhd\mu$ and $\mu\unrhd\lambda$, then the prefix sums of $\lambda$ and
of $\mu$ are equal for every $r\ge1$, and subtracting consecutive prefix sums
gives $\lambda_i=\mu_i$ for every $i$ (both sequences are eventually zero).
Hence $\unrhd$ is a partial order on the set of partitions of $n$. For $n\ge1$,
the partition $(n)$ is its unique maximum and the partition $(1^n)$ its unique
minimum: for every $\mu\vdash n$ and every $r\ge1$ one has
$$\min(r,n)=\sum_{i\le r}(1^n)_i\;\le\;\sum_{i\le r}\mu_i\;\le\;n=\sum_{i\le r}(n)_i .$$

For $n=0$ the order is the trivial order on the one-element set
$\{\varnothing\}$.

## Remarks

- **Partial, not total.** Dominance is in general a proper partial order, not a
  total order: the partitions $(4,1,1)$ and $(3,3)$ of $6$ are incomparable,
  because their prefix sums $4,5,6$ and $3,6,6$ cross, and so are their
  conjugates $(3,1,1,1)$ and $(2,2,2)$. For each $n\le5$, by contrast, all
  partitions of $n$ are comparable. The companion examples page lists the
  chains through size five and this first incomparable pair.

- **Not the lexicographic order.** Dominance must not be identified with the
  lexicographic order on partitions, which orders $\lambda$ and $\mu$ by their
  first differing part and is total. The two relations agree on all partitions
  of $n$ for $n\le5$, but lexicographic order is total by definition while
  dominance is not, so the relations are distinct; a dominance step never
  follows from a comparison of single parts alone, only from all the prefix
  sums.

- **Conjugation reverses the order.** Transposing diagrams turns prefix sums
  of row lengths into prefix sums of column heights, and this reverses
  dominance: $\lambda\unrhd\mu$ holds if and only if
  $\mu'\unrhd\lambda'$. This is proved on this page as
  [[lem-conjugation-reverses-dominance]] and is used to keep row and column
  versions of every later statement consistent.

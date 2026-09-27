---
id: def-row-and-column-stabilizers-of-a-tableau
kind: definition
title: Row and column stabilizers
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-young-tableau-standard-tableau-and-shape]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definition 2.3 and Lemma 2.8, printed p. 8"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.6, printed pp. 13-14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\lambda\vdash n$ and let $t$ be a $\lambda$-tableau, with entries
$t(i,j)$ in the nodes of $[\lambda]$
([[def-young-tableau-standard-tableau-and-shape]]). If $n=0$, there are no
rows or columns; define $R_t=C_t=S_0=\{1\}$ for the unique empty tableau.
For the row and column formulas below assume $n\ge1$, so $\lambda_1$ exists.
For a row $i$ write
$$A_i:=\{t(i,j):1\le j\le\lambda_i\}$$
for the set of entries in that row, and for a column $j$ write
$$B_j:=\{t(i,j):1\le i\le\lambda'_j\}$$
for the set of entries in that column. The sets $A_1,\dots,A_k$ are pairwise
disjoint and partition $\{1,\dots,n\}$, and likewise the sets
$B_1,\dots,B_{\lambda_1}$ are pairwise disjoint and partition
$\{1,\dots,n\}$, because $t$ is a bijection $[\lambda]\to\{1,\dots,n\}$.

The **row stabilizer** of $t$ is
$$R_t:=\{\sigma\in S_n:\sigma(A_i)=A_i\text{ for every row }i\},$$
and the **column stabilizer** of $t$ is
$$C_t:=\{\sigma\in S_n:\sigma(B_j)=B_j\text{ for every column }j\}.$$
Thus $R_t$ is the subgroup of $S_n$ consisting of the permutations that map
each row set of $t$ onto itself, and $C_t$ is the subgroup of those that map
each column set of $t$ onto itself. In terms of the left action
$(\sigma\cdot t)(i,j)=\sigma(t(i,j))$, a permutation lies in $R_t$ exactly when
$\sigma\cdot t$ can be obtained from $t$ by permuting the entries within each
row, and in $C_t$ exactly when $\sigma\cdot t$ is obtained from $t$ by
permuting the entries within each column.

Both sets are subgroups of $S_n$: the identity preserves every $A_i$ and every
$B_j$, and if $\sigma$ and $\tau$ preserve each of these sets then so do
$\sigma\tau$ and $\sigma^{-1}$. Moreover the sets $A_i$ are permuted onto
themselves one by one, not merely as a family, and each $A_i$ determines a
subgroup $S(A_i)\le S_n$ of permutations fixing the complement of $A_i$
pointwise; because the $A_i$ are pairwise disjoint and cover $\{1,\dots,n\}$,
every $\sigma\in R_t$ factors uniquely as $\sigma=\sigma_1\cdots\sigma_k$ with
$\sigma_i\in S(A_i)$, so
$$R_t=S(A_1)\times\cdots\times S(A_k)\cong S_{\lambda_1}\times\cdots\times S_{\lambda_k},\qquad |R_t|=\lambda_1!\cdots\lambda_k!.$$
The same argument with columns gives
$$C_t=S(B_1)\times\cdots\times S(B_{\lambda_1})\cong S_{\lambda'_1}\times\cdots\times S_{\lambda'_{\lambda_1}},\qquad |C_t|=\lambda'_1!\cdots\lambda'_{\lambda_1}!.$$
For $n=0$ there is one tableau, the empty one, and
$R_t=C_t=S_0=\{1\}$.

## Remarks

- **Equal rows are still distinguished.** The row sets are individual sets:
  each $A_i$ must be preserved individually, even when two rows have
  equal length. The factors $S(A_i)$ on distinct row sets are distinct when
  their common size is at least two; singleton row sets both give the trivial
  subgroup. This labelled-rows
  convention is what makes $R_t\cap C_t$ trivial: a permutation preserving
  every row set and every column set sends the entry $t(i,j)$ into
  $A_i\cap B_j=\{t(i,j)\}$, since row $i$ and column $j$ meet in the single
  box $(i,j)$; so it fixes every entry and is the identity, and
  $R_t\cap C_t=\{1\}$.

- **Relation to Young subgroups.** If $t_0$ is the standard row-filled
  $\lambda$-tableau, whose row $i$ carries the consecutive block of entries
  $\lambda_1+\cdots+\lambda_{i-1}+1,\dots,\lambda_1+\cdots+\lambda_i$, then
  $R_{t_0}$ is the standard Young subgroup $S_\lambda$ of the next definition
  on this page; for an arbitrary tableau, $R_t$ is a conjugate of $S_\lambda$.

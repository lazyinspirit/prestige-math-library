---
id: def-young-subgroup-tabloid-and-permutation-module
kind: definition
title: Young subgroups, tabloids, and permutation modules
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape, def-row-and-column-stabilizers-of-a-tableau, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definitions 2.6 and 2.10, Lemma 3.4 and Definition 3.5, printed pp. 8-13"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 1.6, printed pp. 13-14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $n\ge 0$ and let $\lambda=(\lambda_1,\dots,\lambda_k)\vdash n$ be a partition
with Young diagram $[\lambda]$
([[def-partition-young-diagram-and-conjugate-partition]]). Throughout, $S_n$
denotes the symmetric group of $\{1,\dots,n\}$, with $S_0=\{1\}$.

**Standard Young subgroups.** For $1\le i\le k$ let
$$B_i:=\{\lambda_1+\cdots+\lambda_{i-1}+1,\ \lambda_1+\cdots+\lambda_{i-1}+2,\ \dots,\ \lambda_1+\cdots+\lambda_i\}$$
be the $i$-th **block** of $\lambda$. The blocks are consecutive intervals of
integers, they are pairwise disjoint, each has $|B_i|=\lambda_i$, and together
they partition $\{1,\dots,n\}$. The **standard Young subgroup** of type
$\lambda$ is
$$S_\lambda:=\{\,\sigma\in S_n:\sigma(B_i)=B_i\text{ for every }1\le i\le k\,\}.$$
This is a subgroup of $S_n$, namely the direct product
$S(B_1)\times\cdots\times S(B_k)$ of the symmetric groups of the individual
blocks, each acting on its block and fixing the remaining entries pointwise;
as in [[def-row-and-column-stabilizers-of-a-tableau]], the product
decomposition is unique because the blocks are pairwise disjoint and cover
$\{1,\dots,n\}$, so $|S_\lambda|=\lambda_1!\cdots\lambda_k!$. A **Young
subgroup of type $\lambda$** is a subgroup of $S_n$ conjugate to
$S_\lambda$. For $k=0$, that is for $\lambda=\varnothing$ and $n=0$, there are
no blocks and $S_\varnothing=S_0=\{1\}$.

**Row equivalence and tabloids.** Let $t$ and $u$ be $\lambda$-tableaux
([[def-young-tableau-standard-tableau-and-shape]]). We say that $t$ and $u$
are **row equivalent**, and write $t\sim u$, when they have the same row sets:
for every row $i$,
$$\{\,t(i,j):1\le j\le\lambda_i\,\}=\{\,u(i,j):1\le j\le\lambda_i\,\}.$$
Equivalently, $t\sim u$ if and only if $u=\rho\cdot t$ for some $\rho\in R_t$:
if $u=\rho\cdot t$ then $\rho$ merely permutes the entries inside each row of
$t$, and conversely, if the row sets agree, then
$\rho(t(i,j)):=u(i,j)$ defines a permutation $\rho$ of $\{1,\dots,n\}$ that
preserves each row set of $t$, so $\rho\in R_t$ and $\rho\cdot t=u$. Hence
$\sim$ is an equivalence relation on the $\lambda$-tableaux, and the
equivalence class
$$\{t\}:=\{\,u:u\sim t\,\}=\{\,\rho\cdot t:\rho\in R_t\,\}$$
is the **tabloid** of $t$. We draw $\{t\}$ as the diagram $[\lambda]$ filled
with the entries of $t$ and bars between the rows, recording that the order of
the entries inside a row is forgotten. A tabloid is **standard** when it
contains a standard tableau.

**The permutation module.** Let $\Omega_\lambda$ be the finite set of
$\lambda$-tabloids. For $\sigma\in S_n$ and a tabloid $\{t\}$ define
$$\sigma\cdot\{t\}:=\{\sigma\cdot t\}.$$
This is well defined: if $t,u$ are $\lambda$-tableaux with $t\sim u$, then the
row sets of $\sigma\cdot u$ are the $\sigma$-images of the row sets of $u$,
which are the $\sigma$-images of the row sets of $t$, and these are exactly
the row sets of $\sigma\cdot t$
([[def-young-tableau-standard-tableau-and-shape]]); so
$\sigma\cdot u\sim\sigma\cdot t$ and the tabloids $\{\sigma\cdot u\}$ and
$\{\sigma\cdot t\}$ coincide. Because the action on tableaux is a left action,
the induced rule on tabloids satisfies $\mathrm{id}\cdot\{t\}=\{t\}$ and
$\sigma\cdot(\tau\cdot\{t\})=(\sigma\tau)\cdot\{t\}$, so $S_n$ acts on
$\Omega_\lambda$ from the left. The **Young permutation module** attached to
$\lambda$ is the complex vector space
$$M^\lambda:=\mathbb C^{(\Omega_\lambda)}$$
with the tabloids as basis, again written $\{t\}$ for the basis vector of the
tabloid $\{t\}$, equipped with the linear extension of the action above:
$$\sigma\cdot\sum_{\{t\}\in\Omega_\lambda}a_{\{t\}}\,\{t\}:=\sum_{\{t\}\in\Omega_\lambda}a_{\{t\}}\,\{\sigma\cdot t\}.$$
This is the permutation representation of $S_n$ on the finite set
$\Omega_\lambda$ ([[def-trivial-regular-and-permutation-representations]]),
so $M^\lambda$ is a finite-dimensional complex representation of $S_n$.

**The stabilizer of a tabloid.** For every $\lambda$-tableau $t$ one has
$$\sigma\cdot\{t\}=\{t\}\iff \sigma\cdot t\sim t\iff \sigma\in R_t,$$
so the stabilizer in $S_n$ of the tabloid $\{t\}$ is exactly the row
stabilizer $R_t$ ([[def-row-and-column-stabilizers-of-a-tableau]]). The action
on $\Omega_\lambda$ is transitive: given tabloids $\{t\}$ and $\{s\}$, the
permutation $\sigma$ determined by $\sigma(t(i,j)):=s(i,j)$ satisfies
$\sigma\cdot t=s$, hence $\sigma\cdot\{t\}=\{s\}$. In particular, for the
**standard row-filled $\lambda$-tableau** $t_0$, whose row $i$ carries the
entries of $B_i$ in increasing order, the row sets of $t_0$ are precisely the
blocks $B_1,\dots,B_k$, so $R_{t_0}=S_\lambda$ and the stabilizer of the
tabloid $\{t_0\}$ is the standard Young subgroup $S_\lambda$.

## Remarks

- **Two descriptions of a tabloid.** A tabloid of shape $\lambda$ is the same
  data as an unordered partition of $\{1,\dots,n\}$ into $k$ labelled classes
  of sizes $\lambda_1,\dots,\lambda_k$: the class number $i$ is the set of
  entries in row $i$. The tabloids of shape $\lambda$ are exactly the images
  $\{\sigma\cdot t_0\}$ of the single tabloid $\{t_0\}$ under $S_n$, so
  $\Omega_\lambda$ is a transitive $S_n$-set with point stabilizer $S_\lambda$
  in the sense just described.

- **Notation.** Some sources write $M^\lambda$ for the induced module
  $\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$; the next lemma on this page
  proves that this is the same representation as the tabloid module defined
  above, and the identification also shows that $M^\lambda$ is generated by
  the single tabloid $\{t_0\}$.

- **Extreme shapes.** For $\lambda=(n)$ all $\lambda$-tableaux have the same
  single row set $\{1,\dots,n\}$, so there is exactly one tabloid and $M^{(n)}$
  is one-dimensional with trivial action. For $\lambda=(1^n)$ each row is a
  single box, so the row-equivalence classes are singletons and
  $\Omega_{(1^n)}$ is the set of all $\lambda$-tableaux; the companion
  examples page uses this to identify $M^{(1^n)}$ with the regular
  representation.

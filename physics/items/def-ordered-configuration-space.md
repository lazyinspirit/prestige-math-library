---
id: def-ordered-configuration-space
kind: definition
title: "Ordered configuration spaces $F_n(X)$"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-product-topology, def-subspace-topology-top, def-natural-numbers,
       def-topological-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1 and 1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Fadell-Neuwirth, Configuration Spaces, section II Theorem 1, printed pp. 111-114"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ is the set of its
predecessors ([[def-natural-numbers]]), and let $X$ be a topological space
([[def-topological-space]]). Write

$$X^n:=\prod_{k<n}X$$

for the $n$-fold product, carrying the product topology ([[def-product-topology]]),
and display its points as $(x_1,\dots,x_n)$: the **label** $i\in\{1,\dots,n\}$
names the coordinate of index $i-1$ in the sense of that definition. The
**ordered configuration space** of $n$ points in $X$ is the subspace

$$F_n(X):=\{\,(x_1,\dots,x_n)\in X^n\;:\;x_i\neq x_j\ \text{whenever}\ i\neq j\,\}$$

with the subspace topology inherited from $X^n$
([[def-subspace-topology-top]]). Equivalently

$$F_n(X)=X^n\setminus\bigcup_{i\neq j}\{(x_1,\dots,x_n)\in X^n:x_i=x_j\},$$

since a tuple lies in $F_n(X)$ exactly when its entries are pairwise distinct:
the **collision diagonals** $x_i=x_j$, $i\neq j$, are removed from the product.
Points of $F_n(X)$ are called **ordered configurations** of $n$ points in $X$.

**The label set.** The labels $1,\dots,n$ are part of the data, and throughout
this page they are identified with the set $n=\{0,1,\dots,n-1\}$ by the
bijection $\kappa(i):=i-1$. It is through $\kappa$ that the symmetric group
$S_n=\operatorname{Sym}(n)$ acts on $F_n(X)$, in
[[prop-the-symmetric-group-acts-freely-on-ordered-configurations]].

**Elementary cases.** For $n=0$ the product $X^0$ is a one-point space
([[def-product-topology]]), and the defining condition is vacuous, so

$$F_0(X)=\{\,\text{the empty tuple}\,\}$$

for every $X$, including $X=\varnothing$. For $n=1$ there is no pair $i\neq j$,
so single-coordinate evaluation $(x_1)\mapsto x_1$ is a canonical
homeomorphism $F_1(X)\cong X$. For $n\geq2$ and any $X$ one has

$$F_n(X)\neq\varnothing\quad\Longleftrightarrow\quad X\ \text{has at least } n \text{ distinct points}.$$

if $X$ has at least $n$ points, an injection $\{1,\dots,n\}\to X$ is exactly a
tuple of pairwise distinct points of $X$, and conversely such a tuple displays
$n$ distinct points. In particular $F_n(X)=\varnothing$ when $X$ is empty and
$n\geq1$.

**Based configurations.** A **base configuration** in $F_n(X)$ is a point
$q=(q_1,\dots,q_n)$ of $F_n(X)$. Such a $q$ is fixed once and for all only when
$F_n(X)$ is nonempty; when $n\ge1$, $F_n(X)\ne\varnothing$, and $X$ is
infinite, $F_n(X)$ is infinite: from any one configuration, keep coordinates
$2,\dots,n$ fixed and vary the first coordinate among the infinitely many
points of $X\setminus\{q_2,\dots,q_n\}$. The choice of $q$ is part of the data
of every construction below. All base configurations on this page are chosen in the ordered space
$F_n(X)$; the corresponding basepoint of the unordered quotient is its orbit
([[def-unordered-configuration-space]]).

**Separation of distinct coordinates.** If $X$ is Hausdorff
([[def-hausdorff-space]]) and $q\in F_n(X)$, then the finitely many points
$q_1,\dots,q_n$ are pairwise distinct, and for each pair $i\neq j$ Hausdorffness
supplies disjoint open sets separating $q_i$ from $q_j$; a finite intersection
over the finitely many pairs $j\neq i$ therefore gives, for every $i$, an open
neighbourhood $U_i$ of $q_i$ with $U_i\cap U_j=\varnothing$ whenever $i\neq j$.
This is used in
[[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]].

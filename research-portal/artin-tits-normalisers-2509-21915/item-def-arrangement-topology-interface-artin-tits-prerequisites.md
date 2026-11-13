---
title: Locally finite arrangements and relative face terminology
status: published
research_item: def-arrangement-topology-interface-artin-tits-prerequisites
dependency_level: 0
---

## Prerequisites

- [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)
- [math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)
- [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)
- [math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness)
- [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)
- [math:def-affine-subspace-of-a-vector-space](https://alphabetamath.cc/item/def-affine-subspace-of-a-vector-space)
- [math:def-dimension](https://alphabetamath.cc/item/def-dimension)
- [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)
- [math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)
- [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)
- [math:def-metric-space](https://alphabetamath.cc/item/def-metric-space)
- [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)
- [math:cor-rn-is-polygonally-connected-and-locally-path-connected](https://alphabetamath.cc/item/cor-rn-is-polygonally-connected-and-locally-path-connected)
- [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)
- [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)
- [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)
- [math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)


## Definition

Let $E$ be a finite-dimensional real vector space, let $n=\dim_{\mathbb R}E$, and choose a linear coordinate isomorphism $c:E\to\mathbb R^n$. On $\mathbb R^n$ use the Euclidean metric $d_2(u,v)=(\sum_{i=0}^{n-1}(u_i-v_i)^2)^{1/2}$. Give $E$ the metric $d_E(x,y)=d_2(c(x),c(y))$ and its metric topology: $O\subseteq E$ is open if for each $x\in O$ there is $r>0$ such that $\{y\in E:d_E(x,y)<r\}\subseteq O$. For $n=0$, $\mathbb R^0$ and $E$ are singletons, the sum is empty and the metric is zero; the topology is $\{\varnothing,E\}$. This specifies the transported Euclidean topology. A subset $T\subseteq E$ is convex if $(1-t)x+ty\in T$ whenever $x,y\in T$ and $0\leq t\leq1$. Give $T$ the subspace topology: its open sets are the intersections of $T$ with open subsets of $E$. A neighbourhood of $x\in T$ is a subset of $T$ containing an open subset of $T$ that contains $x$.

An arrangement $(T,\mathcal A)$ consists of such a convex $T$ and a set $\mathcal A$ of linear hyperplanes $H\subseteq E$, each meeting $T$. A linear hyperplane is a linear subspace of codimension one. The arrangement is locally finite in $T$ if every $x\in T$ has a neighbourhood meeting only finitely many distinct members of $\mathcal A$. For a convex $T'\subseteq T$, its restriction has hyperplane set $\{H\in\mathcal A:H\cap T'\ne\varnothing\}$.

A chamber is a connected component of $T\setminus\bigcup_{H\in\mathcal A}H$, with the subspace topology. For a chamber $C$, write $\overline C$ for its closure in $E$: the points whose every open neighbourhood in $E$ meets $C$. An affine subspace of $E$ is a translate $a+U$ of a linear subspace $U\subseteq E$. Its direction space is $U=(a+U)-a$, and its affine dimension is $\dim_{\mathbb R}U$. For a nonempty set $A\subseteq E$, its affine hull $\operatorname{aff}(A)$ is the intersection of all affine subspaces containing $A$; its affine dimension is the affine dimension of $\operatorname{aff}(A)$. A wall of $C$ is a nonempty set $\overline C\cap H$ of affine dimension $\dim_{\mathbb R}E-1$, where $H\in\mathcal A$. No affine dimension is assigned to an empty intersection here. The wall is the intersection, while $H$ is its defining arrangement hyperplane; these are different kinds of objects. Two distinct chambers are adjacent if they share a wall. A gallery is a finite sequence of chambers in which consecutive chambers are adjacent; its length is the number of consecutive pairs.

A basis of a vector space is a linearly independent spanning set. An open simplicial cone in a finite-dimensional real vector space $F$ is a set $\{\sum_{i=1}^k t_i v_i:t_i>0\}$ for a basis $v_1,\ldots,v_k$ of $F$; for $k=0$ the empty sum is $0$. For an arrangement with $T=E$, put $L=\bigcap_{H\in\mathcal A}H$, taking $L=E$ when $\mathcal A$ is empty. The quotient vector space $E/L$ consists of cosets $x+L$ with operations $(x+L)+(y+L)=(x+y)+L$ and $t(x+L)=tx+L$; its canonical projection is $q:E\to E/L$, $q(x)=x+L$. The arrangement is simplicial if every chamber is of the form $L+\{\sum_{i=1}^k t_i v_i:t_i>0\}$, where $q(v_1),\ldots,q(v_k)$ form a basis of $E/L$. Thus the common linear factor is retained in $E$ and removed for the simplicial test.

## Definition references

[math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-linear-isomorphism-and-invertible-linear-map](https://alphabetamath.cc/item/def-linear-isomorphism-and-invertible-linear-map)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-convex-subset-of-euclidean-space](https://alphabetamath.cc/item/def-convex-subset-of-euclidean-space)

[math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)

[math:def-cover-refinement-and-local-finiteness](https://alphabetamath.cc/item/def-cover-refinement-and-local-finiteness)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-affine-subspace-of-a-vector-space](https://alphabetamath.cc/item/def-affine-subspace-of-a-vector-space)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)

[math:lem-metrics-on-rn](https://alphabetamath.cc/item/lem-metrics-on-rn)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

[math:def-metric-space](https://alphabetamath.cc/item/def-metric-space)

[math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)

## Justification

For $n\geq1$, the Euclidean metric supplier establishes that $d_2$ is a metric; transporting its distances along the bijection $c$ gives the metric axioms for $d_E$. For $n=0$, the zero metric on the singleton satisfies these axioms directly. Thus the metric topology and the coordinate isomorphism specify the topology used in all closure and neighbourhood statements. The subspace topology makes the stated relative neighbourhoods meaningful. Local finiteness applies the usual neighbourhood condition to the hyperplanes indexed by the distinct members of $\mathcal A$; it does not identify different hyperplanes merely because their traces on $T$ coincide. Connected components supply the chambers. The direction space of an affine subspace is independent of its chosen point: if $b\in a+U$, then $(a+U)-b=U$. For a nonempty $A$, fix $a\in A$; every affine subspace containing $A$ is $a+U$, so their intersection is $a+\bigcap U$, an affine subspace containing $A$ and contained in every such subspace. This proves that the stated affine hull is the smallest one. Its direction space is a subspace of the finite-dimensional $E$, so the finite-dimensional dimension applies. The wall definition selects a nonempty set by its specified intersection and affine dimension, so it makes no assertion that every arrangement hyperplane supports a wall. The gallery condition is a finite condition on already defined chambers and walls. Finally, $L$ is a linear subspace, since intersections preserve zero, addition and scalar multiplication. Hence the quotient construction applies, and the displayed criterion specifies simpliciality using the canonical images $q(v_i)$ in $E/L$.

For the empty arrangement with $T=E$, the complement is $E$. If $n\geq1$, [math:cor-rn-is-polygonally-connected-and-locally-path-connected](https://alphabetamath.cc/item/cor-rn-is-polygonally-connected-and-locally-path-connected) gives connectedness of $\mathbb R^n$ with its Euclidean topology. For each $x\in E$ and $r>0$, the bijection $c$ takes $\{y\in E:d_E(x,y)<r\}$ exactly onto $\{v\in\mathbb R^n:d_2(c(x),v)<r\}$. The ball criterion for openness therefore sends every open subset of $E$ to an open subset of $\mathbb R^n$. A separation of $E$ into two disjoint nonempty open sets would be carried by $c$ to such a separation of $\mathbb R^n$, contradicting connectedness ([math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)). If $n=0$, $E$ is a singleton and cannot be partitioned into two nonempty sets, so it is connected as well. Thus in every dimension $E$ is connected, and it is the sole chamber by the connected-component definition: the union of all connected subsets containing any given point already includes $E$ itself ([math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)). Here $L=E$, $E/L$ is the zero space with empty basis, and $L+\{0\}=E$, so this chamber satisfies the stated simpliciality criterion.

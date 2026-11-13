---
title: Separation by a hyperplane
status: published
research_item: def-separating-hyperplane-artin-tits-normalisers
dependency_level: 3
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 8, paragraph before Lemma 3.5
      statement: A hyperplane separates two points of the Tits cone when they lie in
        different half-spaces, equivalently in different connected components of
        the cone with the hyperplane removed.
      hypotheses: The Coxeter-system and Tits-cone notation of the article; the two
        points belong to the full Tits cone.
      reading_limits: The frozen PDF image p. 8 and extracted paragraph before Lemma
        3.5 were read for attribution. This reference is not a proof premise for
        the equivalence; the justification is a local argument using the
        declared mathematical suppliers.
---

PDF p. 8: ` paragraph before Lemma 3.5 `

## Prerequisites

- [def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers)
- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)
- [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)
- [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)
- [math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)
- [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected)
- [math:lem-product-topology-on-rn](https://alphabetamath.cc/item/lem-product-topology-on-rn)
- [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)


## Definition

Use the finite-rank Coxeter realization, dual space $\Theta$ with its Euclidean topology, and full Tits cone $\mathrm{Cone}\subseteq\Theta$ of [def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers). Let $H\subseteq\Theta$ be a linear hyperplane, and choose a nonzero linear functional $a:\Theta\to\mathbb R$ with $H=\ker a$. Its two open half-spaces are $\{x\in\Theta:a(x)>0\}$ and $\{x\in\Theta:a(x)<0\}$.

For $f,g\in\mathrm{Cone}$, say that $H$ separates $f$ and $g$ if $a(f)$ and $a(g)$ have opposite strict signs. Equivalently, $f$ and $g$ belong to different connected components of $\mathrm{Cone}\setminus H$, equipped with the subspace topology. In particular, a point of $H$ is not separated from any point by $H$.

## Definition references

[def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)

[math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)

## Facts & Assumptions

[F1] The finite-rank realization gives a linear coordinate isomorphism $c:\Theta\to\mathbb R^n$, where $n=\dim_{\mathbb R}\Theta$, and the transported metric is $d_\Theta(x,y)=\|c(x)-c(y)\|_2$. Openness means that every point contains a metric ball lying in the set; subspaces carry the relative topology. A linear hyperplane has codimension one. [def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers) [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[F2] The full Tits cone is convex. [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

[F3] A linear functional is a scalar-valued linear map, with no continuity assumed in the algebraic-dual definition. [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[F4] A connected space has no partition into two disjoint nonempty open subsets. Connected subsets carry the subspace topology. The component of a point is the union of all connected subsets containing that point and is the largest such connected subset. [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space) [math:def-connected-component-and-quasicomponent](https://alphabetamath.cc/item/def-connected-component-and-quasicomponent)

[F5] For $n\geq1$, every convex subset of $\mathbb R^n$ with the product topology is connected, and that topology equals the Euclidean $d_2$ topology. [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected), claim 1; [math:lem-product-topology-on-rn](https://alphabetamath.cc/item/lem-product-topology-on-rn), claim 3.

[F6] Every real linear map $L:\mathbb R^m\to\mathbb R^k$ has a constant $K_0\geq0$ such that $\|Lh\|_2\leq K_0\|h\|_2$ for all $h$. [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)

## Justification

**Given:** The finite-rank realization, full Tits cone and linear hyperplane $H$ in the Definition, with the coordinate map and metric in [F1]. The existence of $H$ implies $n\geq1$.

1.1 Choose $u\notin H$. Since $H$ has codimension one, every $x\in\Theta$ has a unique expression $x=h+tu$ with $h\in H$ and $t\in\mathbb R$. Set $a(h+tu)=t$; this is a nonzero linear functional with kernel $H$. If $b$ is another nonzero linear functional with kernel $H$, then $b(u)\ne0$ and $b(h+tu)=t b(u)=b(u)a(h+tu)$. Thus $b=b(u)a$, so the opposite-strict-sign condition is independent of the chosen defining functional. [F1, F3, algebra, choose]

2.1 Apply [F6] to the linear map $a\circ c^{-1}:\mathbb R^n\to\mathbb R$ and choose $K=K_0+1>0$. By linearity, $|a(y)-a(x)|\leq Kd_\Theta(x,y)$. If $a(x)\ne0$ and $d_\Theta(x,y)<|a(x)|/(2K)$, then $|a(y)-a(x)|<|a(x)|/2$, so $a(y)$ has the same strict sign as $a(x)$. Hence each strict-sign half-space contains an open ball about each of its points and is open by [F1]. [F1, F3, F6, step 1.1, algebra]

2.2 Put $P=\{x\in\mathrm{Cone}:a(x)>0\}$ and $N=\{x\in\mathrm{Cone}:a(x)<0\}$. Convexity in [F2] and the identity $a((1-t)x+ty)=(1-t)a(x)+ta(y)$ show that both $P$ and $N$ are convex. The linear map $c$ therefore sends each to a convex subset of $\mathbb R^n$, connected by [F5] in its Euclidean subspace topology. The coordinate map transports the subspace topology by [F1]: a partition of $P$ or $N$ into two relatively open nonempty pieces would give such a partition of its coordinate image, contradicting connectedness. Thus every nonempty one of $P,N$ is connected. [F1, F2, F3, F4, F5, step 1.1]

3.1 The sets $P,N$ are disjoint, cover $\mathrm{Cone}\setminus H$, and are relatively open there by step 2.1. A connected subset of $\mathrm{Cone}\setminus H$ cannot meet both, since their traces would be a separation in the sense of [F4]. For a point in $P$, every connected subset containing it is therefore contained in $P$, while $P$ itself is connected by step 2.2. The component formula in [F4] consequently gives exactly $P$ as its component; the same argument applies to $N$. The nonempty sign intersections are precisely the connected components. This proves the stated equivalence, including at boundary points of the full Tits cone. Points of $H$ are excluded from the complement and never have opposite strict signs. [F1, F4, step 2.1, step 2.2] ∎

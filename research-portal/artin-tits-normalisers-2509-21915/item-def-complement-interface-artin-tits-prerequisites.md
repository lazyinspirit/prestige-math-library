---
title: Complexified complements in an open convex cone
status: draft
research_item: def-complement-interface-artin-tits-prerequisites
dependency_level: 1
---

## Prerequisites

- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)
- [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)
- [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)
- [math:def-direct-sum-model-of-complexification](https://alphabetamath.cc/item/def-direct-sum-model-of-complexification)
- [math:def-group-action](https://alphabetamath.cc/item/def-group-action)
- [math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)
- [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)
- [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)
- [math:thm-bounded-linear-operator-equivalences](https://alphabetamath.cc/item/thm-bounded-linear-operator-equivalences)


## Definition

Let $E$ be a finite-dimensional real vector space with the Euclidean topology supplied by linear coordinates. Let $T\subseteq E$ be nonempty, open and convex, and let $\mathcal A$ be a locally finite arrangement in $T$: its members are linear hyperplanes meeting $T$, and every point of $T$ has a neighbourhood meeting only finitely many members. Define the complement

$$M(T,\mathcal A)=(T\times T)\setminus\bigcup_{H\in\mathcal A}(H\times H).$$

Give $T\times T$ the product topology and $M(T,\mathcal A)$ its subspace topology: its open sets are intersections of $M(T,\mathcal A)$ with open subsets of $T\times T$.

When $T=E$, put $E_{\mathbb C}=\mathbb C\otimes_{\mathbb R}E$ and identify $(x,y)$ with $1\otimes x+i\otimes y$, also written $x+iy$. For each $H\in\mathcal A$, its complexification inside $E_{\mathbb C}$ means $H_{\mathbb C}=\operatorname{span}_{\mathbb C}\{1\otimes h:h\in H\}$. Under this identification the complement is $E_{\mathbb C}\setminus\bigcup_{H\in\mathcal A}H_{\mathbb C}$.

Suppose a group $G$ acts on $E$ by invertible real-linear maps and each $g\in G$ preserves $T$ and permutes $\mathcal A$. The action convention is $ex=x$ and $(gh)x=g(hx)$. The diagonal action on $T\times T$ is $g\cdot(x,y)=(gx,gy)$; its restriction to the complement is the diagonal action on $M(T,\mathcal A)$.

A homeomorphism is a continuous bijection with continuous inverse. A covering-space action is an action by homeomorphisms for which every point has an open neighbourhood $U$ satisfying $gU\cap U=\varnothing$ for every nonidentity $g$. Setwise preservation alone does not assert this condition or path connectedness. Path connectedness means that for any $p,q\in M(T,\mathcal A)$ there is a continuous map $\gamma:[0,1]\to M(T,\mathcal A)$ with $\gamma(0)=p$ and $\gamma(1)=q$, where $[0,1]$ has its usual subspace topology from $\mathbb R$.

## Definition references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:thm-tensor-and-direct-sum-models-of-complexification-agree](https://alphabetamath.cc/item/thm-tensor-and-direct-sum-models-of-complexification-agree)

[math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-covering-space-action](https://alphabetamath.cc/item/def-covering-space-action)

[math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)

[math:def-direct-sum-model-of-complexification](https://alphabetamath.cc/item/def-direct-sum-model-of-complexification)

[math:def-group-action](https://alphabetamath.cc/item/def-group-action)

[math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

## Justification

The arrangement convention supplies the ambient topology and the meanings of convexity, hyperplane and local finiteness. The displayed set is a subset of $T\times T$, so the product and subspace topologies determine its topology.

The tensor/direct-sum isomorphism has inverse $\Psi_E(x,y)=1\otimes x+i\otimes y$ and forward map $\Phi_E(1\otimes x+i\otimes y)=(x,y)$. A finite complex linear combination of $1\otimes h_j$, with $h_j\in H$, can be written as $1\otimes h+i\otimes k$ with $h,k\in H$: write each coefficient as $a_j+ib_j$ and set $h=\sum_j a_jh_j$, $k=\sum_j b_jh_j$. Conversely every such expression belongs to the stated complex span. Hence $H_{\mathbb C}=\Psi_E(H\times H)$, and $\Phi_E$ sends it exactly onto $H\times H$. Applying the same isomorphism to the real vector space $H$ identifies its abstract complexification $\mathbb C\otimes_{\mathbb R}H$ with $H\times H$; composing with $\Psi_E$ gives an injective complex-linear map into $E_{\mathbb C}$, sending $z\otimes h$ to $z(1\otimes h)$. Thus the specified subspace is precisely the complexification induced by the inclusion of $H$. Bijection then identifies the removed unions and their complements when $T=E$.

The action axioms hold on each coordinate of the diagonal map. For each $g$, that map sends $H\times H$ to $(gH)\times(gH)$ and $T\times T$ to itself. Because $g$ permutes $\mathcal A$, it preserves the removed union and its complement. Its inverse is the diagonal map for $g^{-1}$.

To justify continuity, use the chosen linear coordinates $E\cong\mathbb R^n$ and the Euclidean norm in those coordinates. Each $g$ is represented by a linear map $\mathbb R^n\to\mathbb R^n$, so the Euclidean linear-map bound supplies $K_g\geq0$ with $\|gv\|_2\leq K_g\|v\|_2$. The bounded-linear-operator equivalences imply that $g$ is continuous; they apply to the Euclidean normed spaces here and also to the linear inverse $g^{-1}$. This includes $n=0$.

The subspace topology therefore makes $g|_T:T\to T$ and its inverse continuous. Basic open sets of $T\times T$ are rectangles $U\times V$ with $U,V$ open in $T$. The inverse image of such a rectangle under the diagonal map is $(g|_T)^{-1}(U)\times(g|_T)^{-1}(V)$, which is open. Preimages commute with unions, so the diagonal map is continuous on every product-open set. The same argument applies to $g^{-1}$. Restricting domain and codomain to the invariant subspace $M(T,\mathcal A)$ preserves continuity by the subspace-topology characteristic property, so these mutually inverse restricted maps are homeomorphisms.

The covering-space condition is an additional neighbourhood condition on this restricted action, not a consequence asserted by the definition.

## Justification references

[math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)

[math:thm-bounded-linear-operator-equivalences](https://alphabetamath.cc/item/thm-bounded-linear-operator-equivalences)

---
title: Translation preserves an embedded disc and its tangent space
status: draft
research_item: lem-author-4c1c39929ecb-translated-tangent-discs
dependency_level: 0
---

## Prerequisites

- [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space)
- [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms)
- [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:cor-euclidean-immersion-normal-form-and-local-embedding](https://alphabetamath.cc/item/cor-euclidean-immersion-normal-form-and-local-embedding)


## Statement

Let $0\le d\le m$ be integers and let $r\in\{1,2,\ldots\}\cup\{\infty\}$. For maps between positive-dimensional Euclidean open sets, $C^r$ has its componentwise meaning: every iterated coordinate partial derivative of order at most $r$ exists and is continuous, with every finite order required when $r=\infty$. Maps with zero-dimensional source or target are declared $C^r$; their total derivatives are the unique linear maps in the corresponding zero-dimensional case. A $C^r$ embedded $d$-disc here is the image $W=j(D)$ of a $C^r$ map $j:D\to\mathbb R^m$ from a nonempty open ball $D\subseteq\mathbb R^d$ that is injective, is a homeomorphism onto its image with the subspace topology, and has injective total derivative everywhere.

At $x=j(a)$, identify tangent vectors with vectors of $\mathbb R^m$ and set $T_xW=\operatorname{im}Dj(a)$. This tangent subspace is independent of the admissible parametrization of the image disc.

Assume explicitly that $0\in D$ and $j(0)=0$. For any $p\in\mathbb R^m$, the translated set $W_p=p+W$ is a $C^r$ embedded $d$-disc through $p$, parametrized by $j_p(a)=p+j(a)$, and $T_pW_p=T_0W$ under these Euclidean identifications. The zero-dimensional disc is allowed and is a singleton with zero tangent subspace.

## Statement references

[math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space)

[math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

## Facts & Assumptions

[F1] Total derivatives use the linear approximation with normwise remainder in [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space), including zero dimensions. The positive-dimensional $C^r$ convention is [math:def-ck-euclidean-maps-and-diffeomorphisms](https://alphabetamath.cc/item/def-ck-euclidean-maps-and-diffeomorphisms); for $r\ge1$ it supplies $C^1$ regularity and continuous total derivative. The zero-dimensional convention is stated above.

[F2] A homeomorphism is a continuous bijection with continuous inverse [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps). The image carries the subspace topology, whose open sets are traces of ambient open sets, and restrictions and corestrictions of continuous maps obey its characteristic property [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top).

[F3] At a positive-dimensional immersion point, [math:cor-euclidean-immersion-normal-form-and-local-embedding](https://alphabetamath.cc/item/cor-euclidean-immersion-normal-form-and-local-embedding) with $k=1$ supplies local $C^1$ source and ambient coordinates in which the map is the inclusion $u\mapsto(u,0)$. Derivatives of composites satisfy [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives).

## Proof

**Given:** The dimensions, differentiability order, embedding, explicit basepoint hypotheses and translation in the Statement.

**Goal:** Preserve embeddedness, dimension and the intrinsic tangent subspace.

1.1 Define $j_p(a)=p+j(a)$. The remainder identity $j_p(a+h)-j_p(a)-Dj(a)h=j(a+h)-j(a)-Dj(a)h$ proves $Dj_p(a)=Dj(a)$ directly from [F1]. In positive source and target dimensions, the first coordinate difference quotients cancel the constant $p$; induction on the length of a nonempty word of coordinate derivatives shows that all those derivatives of $j_p$ equal those of $j$. The order-zero map $j_p$ is continuous because translation preserves Euclidean distances. Hence $j_p$ is $C^r$, including $r=\infty$. In zero source or target dimension, the stated $C^r$ convention and the zero derivative give the same conclusions. [given, F1, algebra]

1.2 To justify the tangent convention intrinsically, let $k:E\to W$ be another admissible parametrization with $k(b)=j(a)=x$, first with both parameter dimensions positive. The immersion normal form in [F3] gives a $C^1$ map $L$ on an ambient neighbourhood of $x$ satisfying $L(j(v))=v$ on a domain neighbourhood $V$ of $a$: project onto the inclusion coordinates and undo the source coordinate change. Shrink $V$ so that $j(V)$ is inside that ambient neighbourhood. Because $j$ is a homeomorphism onto $W$, $j(V)$ is relatively open in $W$. By continuity of $k$ and [F2], a neighbourhood of $b$ maps into $j(V)$. There the transition $\phi=L\circ k$ is $C^1$, satisfies $\phi(b)=a$ and $j\circ\phi=k$, and the chain rule gives $Dk(b)=Dj(a)D\phi(b)$. Consequently $\operatorname{im}Dk(b)\subseteq\operatorname{im}Dj(a)$. [given, F1, F2, F3]

2.1 The equality $j_p(a)=j_p(b)$ implies $j(a)=j(b)$ and hence $a=b$. Translation and its inverse preserve distances, and thus are continuous on Euclidean spaces and their subspaces. The inverse of $j_p:D\to W_p$ is $x\mapsto j^{-1}(x-p)$; it is continuous by the given homeomorphism and the subspace property in [F2]. Thus $j_p$ is a homeomorphism onto $W_p$. Its derivative is injective by step 1.1, so it is an embedded disc with parameter dimension $d$. [given, F2, step 1.1]

2.2 Interchanging $j$ and $k$ in step 1.2 gives the reverse inclusion, so the tangent subspace is independent of parametrization, even if the parameter dimensions were initially different. If one parameter dimension is zero, the image $W$ is a singleton. An injective parametrization of that image from a nonempty open ball of positive dimension is impossible, since such a ball has two distinct points. Thus the other parameter dimension is also zero, and both derivative images are the zero subspace by [F1]. This also covers ambient dimension zero, since an injective derivative into the zero space forces parameter dimension zero. [given, F1, step 1.2]

3.1 The explicit basepoint hypotheses give $j_p(0)=p+j(0)=p$. Steps 1.1 and 2.1 show that $W_p$ is an embedded $d$-disc, and steps 1.2 and 2.2 justify applying the tangent convention at each basepoint. Therefore $T_pW_p=\operatorname{im}Dj_p(0)=\operatorname{im}Dj(0)=T_0W$. For $d=0$, $D=\{0\}$, $W=\{0\}$, and $W_p=\{p\}$, with zero tangent subspace as asserted. [given, step 1.1, step 2.1, step 1.2, step 2.2] ∎

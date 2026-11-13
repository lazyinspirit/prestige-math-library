---
title: Transport local invariance and forward trapping to a fixed point
status: draft
research_item: lem-author-4c1c39929ecb-transport-of-trapping
dependency_level: 2
---

## Prerequisites

- [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation)
- [lem-author-4c1c39929ecb-translated-iterates](item-lem-author-4c1c39929ecb-translated-iterates)
- [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs)
- [lem-author-4c1c39929ecb-adapted-ball-neighbourhoods](item-lem-author-4c1c39929ecb-adapted-ball-neighbourhoods)


## Statement

Let $m\ge0$ and $r\ge1$ be integers, with $r$ finite. Let $U\subseteq\mathbb R^m$ be open, let $p\in U$, and let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism with $h(p)=p$. Here $C^r$ uses continuous iterated Fréchet derivatives through order $r$, and local diffeomorphism means that around each point $h$ has a $C^r$ inverse onto an open image. Define $f:U-p\to\mathbb R^m$ by $f(y)=h(p+y)-p$. For either local map, an iterate is defined only when all preceding points lie in its domain; $f^0$ and $h^0$ are identities.

Let $0\le d\le m$ be integers, let $s\in\{1,2,\ldots\}\cup\{\infty\}$, and let $W$ be a $C^s$ embedded $d$-disc through zero. An embedded disc here is an image $k(E)$ of an injective $C^s$ map $k:E\to\mathbb R^m$ from a nonempty open ball $E\subseteq\mathbb R^d$, such that $k$ is a homeomorphism onto its image with the subspace topology and $Dk$ is injective everywhere. Use the componentwise $C^s$ and zero-dimensional conventions of the translated-disc lemma.

Let $B\subseteq U-p$ be an open ball about zero for some norm. Suppose $f(W\cap(U-p))\cap B\subseteq W$, and suppose every $y\in U-p$ for which all $f^n(y)$ are defined and lie in $B$ for $n\ge0$ belongs to $W$. Then $W_p=p+W$ is a $C^s$ embedded $d$-disc through $p$ with $T_pW_p=T_0W$ under the Euclidean tangent-space identifications, $B_p=p+B$ is a Euclidean open neighbourhood of $p$, $h(W_p\cap U)\cap B_p\subseteq W_p$, and every $x\in U$ for which all $h^n(x)$ are defined and lie in $B_p$ for $n\ge0$ belongs to $W_p$.

## Facts & Assumptions

[F1] Under the stated open-domain, fixed-point and finite-regularity local-diffeomorphism hypotheses, translation supplies the local conjugacy [lem-author-4c1c39929ecb-fixed-point-translation](item-lem-author-4c1c39929ecb-fixed-point-translation) and identities for every defined iterate [lem-author-4c1c39929ecb-translated-iterates](item-lem-author-4c1c39929ecb-translated-iterates).

[F2] The embedded-disc, componentwise regularity and zero-dimensional conventions, and preservation of discs and tangent spaces under translation, are supplied by [lem-author-4c1c39929ecb-translated-tangent-discs](item-lem-author-4c1c39929ecb-translated-tangent-discs). Norm balls are Euclidean neighbourhoods by [lem-author-4c1c39929ecb-adapted-ball-neighbourhoods](item-lem-author-4c1c39929ecb-adapted-ball-neighbourhoods).

## Proof

**Given:** The map, open domain, fixed point, finite integer map regularity, defined-iterate convention, disc and its independent regularity and embedding convention, ball, and invariance and trapping hypotheses in the Statement.

**Goal:** Transport all these conclusions to the fixed point $p$.

1.1 Choose the admissible parametrization $k:E\to W$ and $a_0\in E$ with $k(a_0)=0$. Put $D=E-a_0$ and $j(a)=k(a+a_0)$. Then $D$ is an open ball containing zero, $j(0)=0$ and $j(D)=W$. Parameter translation and its inverse preserve distances and hence are homeomorphisms; composing them with $k$ and its inverse shows that $j$ is a homeomorphism onto $W$. It is injective. In positive source and target dimensions, coordinate difference quotients give $\partial^\alpha j(a)=\partial^\alpha k(a+a_0)$ for every nonempty derivative word $\alpha$ of required order, so these derivatives are continuous and $j$ is $C^s$. The differentiability remainder likewise gives $Dj(a)=Dk(a+a_0)$, which is injective. In zero source or target dimension, the same regularity and derivative conclusions follow from the zero-dimensional convention. Thus $j$ is an admissible parametrization of the entire disc satisfying the centered-parametrization hypotheses of the translated-disc result. [given, F2]

1.2 If $z\in h(W_p\cap U)\cap B_p$, write $z=h(p+w)$ with $w\in W\cap(U-p)$. Then $z-p=f(w)\in B$, so $z-p\in f(W\cap(U-p))\cap B\subseteq W$. Hence $z\in W_p$. [given, F1]

2.1 Apply the translated-disc result in [F2] to $j$ and $D$ from step 1.1. It gives that $W_p$ is a $C^s$ embedded $d$-disc through $p$ with $T_pW_p=T_0W$. The norm-ball result in [F2] gives that $B_p$ is a Euclidean open neighbourhood of $p$. [given, F2, step 1.1]

3.1 Let $x\in U$ have all nonnegative $h$-iterates defined and in $B_p$. The defined-iterate identities in [F1] give that all $f^n(x-p)$ are defined and lie in $B$ for every $n\ge0$. The trapping hypothesis gives $x-p\in W$, so $x\in W_p$, as required. [given, F1] ∎

---
title: Frames and their transition units
status: published
research_item: lem-author-8e1c0251ef0d-frame-transitions
dependency_level: 1
---

PDF p. 4: Weight one units and Picard identification

## Prerequisites

- [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)
- [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)
- [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)
- [math:def-comma-slice-and-coslice-categories](https://alphabetamath.cc/item/def-comma-slice-and-coslice-categories)


## Statement
Let $\mathcal O$ be a sheaf of commutative unital rings on a site $(\mathcal C,J)$, and let $L$ be a sheaf of $\mathcal O$-modules locally isomorphic to $\mathcal O$. A frame over $U$ is an $\mathcal O|_U$-module isomorphism $e:\mathcal O|_U\to L|_U$ on the slice site $\mathcal C/U$. The frames form a sheaf of sets $P$ and a torsor under $\mathcal O^\times$, acting by multiplication of frames: they have local sections, and any two frames over the same object differ by a unique unit. For a covering family $(f_i:U_i\to U)$ with given frames $e_i$, interpret an overlap as an object $V$ with arrows $a_i:V\to U_i$ and $a_j:V\to U_j$ such that $f_i a_i=f_j a_j$. On each such object the unique transition unit $g_{ij}\in\mathcal O(V)^\times$ is defined by $e_j|_V=g_{ij}e_i|_V$. These units commute with further restriction. On every common object with three such arrows having the same composite to $U$, they satisfy $g_{ij}g_{jk}=g_{ik}$. Thus no existence of double or triple fibre products is assumed.

## Facts & Assumptions

**Given:** $\mathcal O$ and $L$ as stated, with the following explicit conventions.

**Goal:** Establish the frame sheaf, torsor action and transition equation on an arbitrary site.

[F1] Use the site, covering-sieve, presheaf, matching-family and sheaf conventions in Facts [F1]–[F3] of [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf). A covering family means a family of arrows whose generated sieve is covering. Write $h^*$ for restriction along an arrow $h$. The same supplier proves that $G(U)=\mathcal O(U)^\times$, with the inherited restrictions, is a sheaf of abelian groups. Rings and ring maps are unital; the zero ring is allowed. No scheme or additional smallness hypothesis is imposed.

[F2] Modules and linear maps mean unital left modules and module homomorphisms as in [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) and [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel). A sheaf of $\mathcal O$-modules is a sheaf of abelian groups $L$ with an $\mathcal O(V)$-module structure on every $L(V)$ and additive restrictions satisfying $h^*(as)=h^*(a)h^*(s)$. A morphism consists of linear maps on sections commuting with every restriction; an isomorphism has an inverse of the same kind. Composition and identities are componentwise.

[F3] The slice category $\mathcal C/U$ is as in [math:def-comma-slice-and-coslice-categories](https://alphabetamath.cc/item/def-comma-slice-and-coslice-categories): objects are arrows $p:V\to U$, and an arrow from $q:W\to U$ to $p$ is $h:W\to V$ with $ph=q$. Give this slice the topology in which a sieve on $p:V\to U$ is covering precisely when its underlying arrows into $V$ form a covering sieve in $J(V)$. The topology axioms are the same sieve axioms as in [F1], on those domains. For any sheaf $F$ on $\mathcal C$, define $F|_U(p)=F(V)$ with its original restrictions. The sheaf condition on the slice is exactly the original condition on $V$, so this is a sheaf. This defines $\mathcal O|_U$ and $L|_U$ and their module structures. Restricting a frame along $f:V\to U$ means taking its components at arrows $fh$ for $h:W\to V$; no base-change fibre product is used.

[F4] Locally isomorphic here means that for every $U$ there is a covering sieve $R$ on $U$ such that a frame exists on the domain of every arrow in $R$; it asserts existence, not a simultaneous choice of frames. A $G$-torsor here is a sheaf of sets with restriction-compatible $G(U)$-actions, locally having sections in this sense, such that for every pair of sections over $U$ a unique element of $G(U)$ carries the first to the second. Define the action on a frame by $(u\cdot e)_p(a)=e_p(p^*u\,a)$ for $p:V\to U$ and $a\in\mathcal O(V)$. The module and unit laws in [F1] and [F2] make this an invertible, restriction-compatible action.

## Proof

1.1 A module morphism $e:\mathcal O|_U\to L|_U$ is determined by $s=e_{1_U}(1)$: naturality and linearity force $e_p(a)=a\,p^*s$ for every $p:V\to U$. Conversely this formula defines such a morphism for every $s\in L(U)$, by [F2] and [F3]. Thus frames identify with a subset $P(U)$ of the set $L(U)$, and restriction of frames makes $P$ a presheaf. Every automorphism of $\mathcal O|_U$ is multiplication by its value $u$ at $1$; applying the same observation to its inverse gives $uv=vu=1$ for its inverse coefficient $v$. Conversely a unit gives such an automorphism. Composing one frame with the inverse of another therefore gives the unique unit relating them, with the action in [F4]. To check gluing, take a matching family of frames $e_f$ on a covering sieve $R$ on $U$. Their sections $s_f=e_f(1)$ match, so [F1] glues them uniquely to $s\in L(U)$ and hence to the morphism $e$ just constructed. For $p:V\to U$ and $t\in L(V)$, the sieve $p^*R$ covers $V$. For each $h:W\to V$ in it, the unique coefficient $b_h=e_{ph,1_W}^{-1}(h^*t)\in\mathcal O(W)$ is compatible with further restriction, since the frames match. The sheaf condition for $\mathcal O$ glues these coefficients to $b\in\mathcal O(V)$; separation for $L$ gives $e_p(b)=t$. If two coefficients have the same image under $e_p$, their restrictions agree by the local frames, hence they agree by separation for $\mathcal O$. Thus every $e_p$ is bijective. Its inverse is linear and commutes with restrictions, since those properties follow by applying the injective maps $e_p$ to the required equalities. Hence $e$ is a frame, uniquely determined by $s$, and $P$ is a sheaf. This proof also covers an empty covering sieve using the same sheaf uniqueness axioms. Local existence is [F4]; together with the action and unique-unit property this proves the torsor assertion. [F1, F2, F3, F4, construct]

2.1 Fix the given local frames and compatible arrows from a common object $V$ as in the Statement. By step 1.1 their restrictions differ by a unique unit $g_{ij}\in\mathcal O(V)^\times$. Further restriction preserves the defining equality, so uniqueness makes the unit on a further common object exactly the restriction of $g_{ij}$. For three compatible arrows, all three restricted frames are on the same slice over $V$, where $e_k=g_{jk}e_j=g_{jk}g_{ij}e_i$. Commutativity and the unique-unit assertion of step 1.1 give $g_{ij}g_{jk}=g_{ik}$. This proves the transition equation on common test objects without assuming fibre products, as well as its compatibility with restrictions. [F1, F3, F4, step 1.1, algebra] ∎

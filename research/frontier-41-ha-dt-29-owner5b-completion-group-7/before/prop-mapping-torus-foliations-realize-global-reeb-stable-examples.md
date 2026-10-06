---
id: prop-mapping-torus-foliations-realize-global-reeb-stable-examples
kind: proposition
title: "Mapping torus foliations realize global Reeb stable examples"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [prop-quotient-foliation-under-a-free-proper-foliated-action, def-suspension-foliation-of-a-group-action, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-group-action, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-regular-foliation-atlas, def-euclidean-spheres-and-closed-balls, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "the section on holonomy, printed pp. 140–143 (foliated circle bundles and the representation ↔ bundle correspondence, the representation correspondence)"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (suspension foliations and their holonomy)"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $L$ be a nonempty connected closed
smooth manifold and $f:L\to L$ a diffeomorphism
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Let $\mathbb Z$
act on $L\times\mathbb R$ by $n\cdot(x,t):=(f^n(x),t+n)$ and let
$M:=(L\times\mathbb R)/\mathbb Z$ be the associated **mapping torus**. Then:

1. $M$ is a closed smooth manifold;
2. the product foliation of $L\times\mathbb R$ by the slices $L\times\{t\}$ is
   invariant under the action and descends to a codimension-one regular
   foliation $F_f$ of $M$ whose leaves are the images of the slices;
3. every leaf of $F_f$ is compact and diffeomorphic to $L$, with trivial
   holonomy;
4. the projection $(x,t)\mapsto t\bmod 1$ descends to a smooth map $M\to S^1$
   whose fibres are exactly the leaves, exhibiting $F_f$ as the fibre foliation
   of a locally trivial fibre bundle over $S^1$ with fibre $L$;
5. the suspension/base direction (the image of $\partial/\partial t$) is
   transverse to the fibres, and its first-return map on the fibre
   $L\times\{0\}$ is $f^{-1}$, the monodromy for this quotient convention.

The foliation has a compact leaf with trivial holonomy, and it realizes the circle-fibration conclusion directly. The finite-fundamental-group global theorem applies to this foliation when $L$ is connected with finite fundamental group. Bundles over $S^1$ with fibre $L$ are classified up to isomorphism by
the conjugacy class of the monodromy in $\pi_0\operatorname{Diff}(L)$; hence
this bundle is the trivial bundle $L\times S^1$ if and only if $f$ is isotopic
to the identity, and monodromies with nonconjugate classes in $\pi_0\operatorname{Diff}(L)$ realize distinct bundle structures over the fixed oriented base circle. No claim is made about $M$ as a bare manifold.

## Facts & Assumptions

**Given:** A nonempty connected closed smooth manifold $L$, a diffeomorphism $f:L\to L$, and the $\mathbb Z$-action $n\cdot(x,t)=(f^n(x),t+n)$ on $L\times\mathbb R$.

[F1] Assume $\mathrm{AC}_\omega$. If a group acts on a connected smooth manifold freely and properly discontinuously by diffeomorphisms preserving a regular foliation, then the quotient carries a unique smooth structure making the orbit map a covering map, and the foliation descends to a regular foliation whose leaves are the images of the leaves ([[prop-quotient-foliation-under-a-free-proper-foliated-action]]).

[F2] A suspension foliation of a group action is the quotient of a product by the diagonal action; its leaves are the images of the factors ([[def-suspension-foliation-of-a-group-action]]).

[F3] A diffeomorphism is a bijective smooth map with smooth inverse; composites and inverses of diffeomorphisms are diffeomorphisms ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F4] An action of a group $\Gamma$ on a set $X$ is a homomorphism from $\Gamma$ to the group of bijections of $X$; free means no nontrivial element fixes a point ([[def-group-action]]).

[F5] The product of smooth manifolds carries a canonical product smooth structure, with the projections submersions and the slices $L\times\{t\}$ smoothly embedded ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F6] In a product foliation by the slices, plaques are the slices intersected with product charts; the leafwise transport inside a slice is the identity ([[def-regular-foliation-atlas]]).

## Proof

**Proof technique:** direct.

1.1 (The action is free, properly discontinuous and foliation-preserving.) For $m,n\in\mathbb Z$ one has $m\cdot(n\cdot(x,t))=(f^m(f^n(x)),t+n+m)=(f^{m+n}(x),t+m+n)$, so the formula defines an action [F3, F4]. It is free: an element $n$ with $n\cdot(x,t)=(x,t)$ forces $t+n=t$, hence $n=0$. It is properly discontinuous: for a compact $K\subseteq L\times\mathbb R$ the set of $n$ with $(K+(0,n))\cap K\neq\varnothing$ is finite, since the $t$-coordinates must satisfy $|n|\le$ the diameter bound of $K$ in the $t$-direction. Finally it preserves the product foliation: $n\cdot(L\times\{t\})=L\times\{t+n\}$ and the restriction is the diffeomorphism $f^n$ [F3, F5]. [F3, F4, F5]

1.2 (Quotient manifold and foliation.) By [F1] the quotient $M=(L\times\mathbb R)/\mathbb Z$ carries a unique smooth structure making the orbit map a covering map, and the product foliation descends to the regular codimension-one foliation $F_f$ whose leaves are the images of the slices $L\times\{t\}$ [F1, F2]. The closed manifold $L$ is compact without boundary, and $L\times[0,1]$ is a compact fundamental domain for the action, so $M$ is compact without boundary: $M$ is a closed smooth manifold. [F1, F2]

1.3 (Leaves and holonomy.) Each slice $L\times\{t\}$ is compact and the action carries slices diffeomorphically onto slices, so every leaf of $F_f$ is a compact manifold diffeomorphic to $L$ [F1, F5]. The holonomy of a leaf is trivial: within a slice the leafwise transport of a transversal is the identity of the product structure, and the quotient is taken by deck transformations acting leafwise [F6]. [F2, F5, F6]

1.4 (Bundle structure.) The projection $q_0(x,t):=t\bmod 1$ satisfies $q_0(n\cdot(x,t))=t+n\bmod1=q_0(x,t)$, hence descends to a smooth map $q:M\to S^1$ whose fibres are exactly the images of the slices, that is, the leaves [F1, F5]. Over an interval $I\subseteq S^1$ the identification $q^{-1}(I)\cong L\times I$ is a diffeomorphism commuting with $q$, so $q$ is a locally trivial fibre bundle with fibre $L$ whose fibre foliation is $F_f$ [F5]. [F1, F5]

1.5 (Transverse direction and monodromy.) The vector field $\partial/\partial t$ on $L\times\mathbb R$ is invariant under the action and transverse to the slices, so it descends to a nowhere-vanishing vector field transverse to $F_f$ [F1, F5]. Its flow after one unit of time sends $(x,0)$ to $(x,1)$, and $(x,1)$ is equivalent under the action to $-1\cdot(x,1)=(f^{-1}(x),0)$; therefore the first-return map of the descended flow on the fibre over $q(L\times\{0\})$ is $x\mapsto f^{-1}(x)$. This is the monodromy for the displayed quotient convention. [F1, F3, F5]

2.1 (Bundle structures over the fixed oriented circle.) Cut the base at a point. A finite interval subdivision subordinate to product charts trivializes the pullback bundle over $[0,1]$: successively modify each next trivialization by its overlap transition, extending that transition along the interval by a smooth reparametrization constant near the joining endpoint. The remaining endpoint identification is a fibre diffeomorphism $g$. If an isomorphism over the fixed oriented base identifies two such gluings $g,g'$, its interval trivializations give a path $h_t$ of fibre diffeomorphisms satisfying $h_0g=g'h_1$. Thus the mapping classes of $g,g'$ are conjugate. Conversely, if their mapping classes are conjugate, choose $h_0$ giving that conjugation and an isotopy from $h_0$ to $h_1=(g')^{-1}h_0g$, constant near endpoints. The map $(y,t)\mapsto(h_t(y),t)$ respects the endpoint identifications and descends to a bundle isomorphism. Hence bundles over this fixed base are classified by conjugacy classes in $\pi_0\operatorname{Diff}(L)$. A conjugacy class equals the identity class precisely when $g$ is isotopic to the identity. Here $g=f^{-1}$ by step 1.5, so the bundle is trivial exactly when $f$ is isotopic to the identity; distinct nonconjugate mapping classes give distinct bundle structures. No assertion about the bare total manifold is made. [step 1.3, step 1.4, step 1.5, construct] ∎

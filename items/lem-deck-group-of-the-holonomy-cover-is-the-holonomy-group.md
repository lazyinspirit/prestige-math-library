---
id: lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group
kind: lemma
title: The deck group of the holonomy cover is the holonomy group
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-holonomy-cover-of-a-leaf
- def-holonomy-representation-and-holonomy-group-of-a-leaf
- lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists
- lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action
- def-deck-transformation-and-deck-group
- def-covering-map-and-evenly-covered-neighbourhoods
- thm-path-lifting-for-covering-maps
- thm-homotopy-lifting-for-covering-maps
- thm-uniqueness-of-lifts-from-a-connected-space
- thm-covering-maps-inject-fundamental-groups
- prop-deck-transformations-are-determined-by-one-point-and-act-freely
- def-countable-choice-principle-for-foliation-pair
- def-induced-homomorphism-on-fundamental-groups
- thm-deck-group-of-a-universal-cover-is-the-fundamental-group
- cor-deck-group-of-a-regular-covering
- thm-first-isomorphism-theorem-groups
- lem-holonomy-respects-path-concatenation-and-reversal
- def-based-loops-and-fundamental-group
- thm-regular-covering-characterizations
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)
    url: https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf
    locator: §2.1–§2.2, printed pp. 11–15 (the holonomy cover and its deck group)
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33; §2.5, pp. 44–51 (the holonomy cover and the normal model)'
dependency_level: 7
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a regular
foliation, $L$ a leaf, $x\in L$, $T$ a local transversal at $x$,
$\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ the holonomy homomorphism with the convention $\rho_x([a])=h_{a^{-1}}(T,T)$, and
$p:\widehat L\to L$ the holonomy cover, with $\hat x\in p^{-1}(x)$ and
$p_*\pi_1(\widehat L,\hat x)=\ker\rho_x$
([[def-holonomy-cover-of-a-leaf]]). Then:

1. $p$ is a regular covering, $\pi_1(L,x)/\ker\rho_x$ acts faithfully on
   $\widehat L$ by deck transformations, and
   $\operatorname{Deck}(p)\cong\pi_1(L,x)/\ker\rho_x\cong\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$;
2. the deck action is a covering-space action,
   $\widehat L/\operatorname{Deck}(p)\cong L$, and the quotient map is $p$;
3. the holonomy group acts through transverse germs via $\rho_x$; when those
   germs are realized on a common invariant transverse neighbourhood $D$, the
   diagonal action of $H=\operatorname{Hol}(L,x)$ on $\widehat L\times D$ is
   free and a covering-space action. In particular, when $H$ is finite, $p$ is
   a finite-sheeted covering of degree $|H|$.

Traversal-order loop multiplication and composition-order germs require this reversed-loop convention, as in [[def-holonomy-representation-and-holonomy-group-of-a-leaf]]. Forward transport is an antihomomorphism with the same image and kernel as sets. The reversed-loop convention makes the deck identification and diagonal action homomorphic.

## Facts & Assumptions

**Given:** A regular foliation $F$, a leaf $L$ with $x\in L$, a local transversal $T$ at $x$, the holonomy representation $\rho_x$ with kernel $K=\ker\rho_x$, and the holonomy cover $p:\widehat L\to L$ with base point $\hat x$ over $x$.

[F1] The holonomy cover is the connected covering $p:\widehat L=\widetilde L/K\to L$ associated with $K=\ker\rho_x$, where $\widetilde L\to L$ is the universal cover, so that $p_*\pi_1(\widehat L,\hat x)=K$; $K$ is normal in $\pi_1(L,x)$ because it is a kernel ([[def-holonomy-cover-of-a-leaf]], [[lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists]], [[def-induced-homomorphism-on-fundamental-groups]]).

[F2] The deck group of the universal cover of $L$ is isomorphic to $\pi_1(L,x)$, and a covering of a path-connected, locally path-connected base with $p_*\pi_1(\widehat L,\hat x)=K$ normal is regular, with $\operatorname{Deck}(p)\cong\pi_1(L,x)/K$ ([[thm-regular-covering-characterizations]], [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]], [[cor-deck-group-of-a-regular-covering]], [[def-deck-transformation-and-deck-group]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] The holonomy group is $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$, and $K=\ker\rho_x$; the first isomorphism theorem gives $\pi_1(L,x)/K\cong\operatorname{Hol}(L,x)$ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]], [[thm-first-isomorphism-theorem-groups]]).

[F4] The deck group of a covering acts by a covering-space action, deck transformations are determined by their value at one point and act freely, and a connected regular covering has its deck group acting freely and transitively on each fibre, so its number of sheets is the order of that group ([[lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F5] The library product traverses the first loop before the second, and transports satisfy $h_{a*b}=h_b\circ h_a$ and $h_{a^{-1}}=h_a^{-1}$ ([[def-based-loops-and-fundamental-group]], [[lem-holonomy-respects-path-concatenation-and-reversal]]).

## Proof

**Proof technique:** direct.

1.1 (Convention and kernel.) By F5, $\rho_x([a])=h_{a^{-1}}$ satisfies $\rho_x([a][b])=\rho_x([a])\circ\rho_x([b])$. Its image is the same set of transport germs as the forward assignment, and its kernel is the same subgroup $K$, because taking inverses preserves the identity. Therefore the holonomy cover of F1 is still the connected cover associated to this normal kernel. The universal-cover deck convention of F2 prepends $a$ to a path when applying the deck transformation associated with $[a]$. Consequently the deck transformation corresponding to the germ $h_\gamma=\rho_x([\gamma^{-1}])$ prepends $\gamma^{-1}$. This fixes the precise convention consumed by the normal model. [F1, F2, F5]

2.1 (The deck group.) Since $p_*\pi_1(\widehat L,\hat x)=K$ is normal in $\pi_1(L,x)$, the covering $p$ is regular and [F2] gives $\operatorname{Deck}(p)\cong\pi_1(L,x)/K$ [F1, F2]. By the first isomorphism theorem applied to the holonomy representation, $\pi_1(L,x)/K\cong\rho_x(\pi_1(L,x))=\operatorname{Hol}(L,x)$ [F3]. Hence $\operatorname{Deck}(p)\cong\operatorname{Hol}(L,x)$, the deck action is faithful by the determination property [F4]. [F2, F3, F4, step 1.1]

3.1 (Quotient and finite degree.) Regularity in step 2.1 makes the deck group transitive on each covering fibre, and F4 makes its action free. Thus each fibre is a torsor for $\operatorname{Deck}(p)$, its quotient is $L$, and the induced quotient topology agrees with that of $L$ in covering trivializations. The deck action is a covering-space action by F4. If $H$ is finite, every fibre has exactly $|H|$ points, so $p$ is a finite-sheeted cover of that degree. [F2, F4, step 2.1]

4.1 (The diagonal action.) The germs of $H$ act on the transversal $T$ through $\rho_x$, and when they are realized on a common invariant transverse neighbourhood $D$ the formula $h\cdot(\hat y,t):=(h\,\hat y,h\,t)$ defines an action of $H$ on $\widehat L\times D$ preserving the product foliation by the slices. It is free: if $h\cdot(\hat y,t)=(\hat y,t)$, then $h$ fixes $\hat y$, so $h$ is the identity deck transformation by freeness of the deck action [F4]. It is a covering-space action, being the product of the covering-space action on $\widehat L$ and any action on $D$: a deck-separating neighborhood $V$ gives the neighborhood $V\times D$ whose nonidentity translates are disjoint [F4]. This is the diagonal model used by the finite-holonomy normal construction. [F3, F4, step 3.1]

5.1 Therefore the deck group of the holonomy cover is the holonomy group, the deck action is a covering-space action with quotient $L$, and the diagonal action on $\widehat L\times D$ is free and a covering-space action; for finite $H$ the cover is finite-sheeted of degree $|H|$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

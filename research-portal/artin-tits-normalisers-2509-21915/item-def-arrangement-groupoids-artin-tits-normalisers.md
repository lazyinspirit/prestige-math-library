---
title: Positive arrangement category and its groupoid completion
status: draft
research_item: def-arrangement-groupoids-artin-tits-normalisers
dependency_level: 17
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 14, §3.5, construction of D+ and D
      statement: The directed chamber graph has an arrow in each direction between
        adjacent chambers. Its positive category identifies geodesic paths with
        common endpoints, and its arrangement groupoid is the groupoid
        completion. In spherical type the article calls this the Deligne
        groupoid.
      hypotheses: The relative arrangement of a finite-rank Coxeter system and a
        subset J of its vertices; the Deligne-groupoid name is stated in the
        spherical-type case.
      reading_limits: The frozen article text at the cited construction was read for
        attribution. It is not used as a proof of well-definedness.
---

PDF p. 14: ` §3.5, construction of D+ and D `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-chamber-paths-artin-tits-normalisers](item-def-chamber-paths-artin-tits-normalisers)
- [def-geodesic-path-artin-tits-normalisers](item-def-geodesic-path-artin-tits-normalisers)
- [def-groupoid-completion-artin-tits-normalisers](item-def-groupoid-completion-artin-tits-normalisers)
- [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)
- [lem-author-9b7c42e8f103-interior-complement](item-lem-author-9b7c42e8f103-interior-complement)


## Definition

Fix a finite-rank Coxeter system and a subset $J$ of its vertices. Let $(\mathrm{Cone}(J)^\circ,\mathcal H^J)$ be its relative arrangement, and let $\mathrm{Cham}(J)$ be its set of chambers, the connected components of the arrangement complement. Two distinct chambers are adjacent when they share a wall, a codimension-one intersection of a chamber closure with an arrangement hyperplane.

Form the directed graph $Q_J$ with vertex set $\mathrm{Cham}(J)$ and exactly one arrow $C\to C'$ for each ordered pair of adjacent chambers. Thus each adjacent pair gives two oppositely directed arrows. A path is a finite sequence of composable arrows; the empty path at $C$ has source and target $C$. Its length is the number of arrows. A path is **geodesic** if its length is minimal among paths with the same source and target.

Let $R_J$ consist of all pairs of geodesic paths with the same source and target. The **positive arrangement category** $\mathcal D^+(J)$ is the category presented by $Q_J$ and $R_J$: its objects are the chambers and its morphisms are paths modulo the smallest endpoint-preserving equivalence relation containing $R_J$ and stable under concatenation on either side. Composition is induced by concatenation, read from left to right; empty paths give identities.

The **arrangement groupoid** $\mathcal D(J)$ is the groupoid completion of $\mathcal D^+(J)$, obtained by formally adjoining inverses to its morphisms. Its canonical functor from $\mathcal D^+(J)$ is universal for functors into groupoids. In spherical type, meaning that the Coxeter group is finite, the article calls $\mathcal D(J)$ the **Deligne groupoid**.

## Definition references

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[def-chamber-paths-artin-tits-normalisers](item-def-chamber-paths-artin-tits-normalisers)

[def-geodesic-path-artin-tits-normalisers](item-def-geodesic-path-artin-tits-normalisers)

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

[def-groupoid-completion-artin-tits-normalisers](item-def-groupoid-completion-artin-tits-normalisers)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

[lem-author-9b7c42e8f103-interior-complement](item-lem-author-9b7c42e8f103-interior-complement)

## Justification

The initial Coxeter system is the pair $(W,S)$ defined in [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length), with its finite generating set $S$ indexed by the vertices. The subset $J$ is a subset of that vertex set. By [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers), put $E=\Theta_J$, $T=\mathrm{Cone}(J)=\mathrm{Cone}\cap E$, and $D=\bigcup_{H\in\mathcal H^J}H$, so that $T^\circ=\mathrm{Cone}(J)^\circ$ is the interior in $E$ and every member of $\mathcal H^J$ is a linear hyperplane of $E$.

The Tits cone is convex and contains $0$ by [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites). The linear subspace $E$ contains $0$ and is closed under convex combinations, so $T$ is convex and contains $0$. Every $H\in\mathcal H^J$ contains $0$ and therefore meets $T$. Consequently [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers) applies to $(T,\mathcal H^J)$ in the finite-dimensional space $E$.

By [lem-author-9b7c42e8f103-interior-complement](item-lem-author-9b7c42e8f103-interior-complement), $T\setminus D=T^\circ\setminus D$. Both complements carry the topology induced from the same space $E$, so they are the same topological space and have exactly the same connected components. The chambers in the Definition are therefore exactly the chambers of $(T,\mathcal H^J)$. Each chamber has the same closure in $E$ and the same affine dimension in both descriptions. For every $H\in\mathcal H^J$, the intersection of that closure with $H$ is unchanged, so its wall condition and the shared-wall adjacency relation are unchanged. Thus the chambers-and-walls supplier gives precisely the stated conventions for the interior pair, even if some hyperplanes miss $T^\circ$. The entire hyperplane set is retained. If the complement is empty there are no chambers, and the same conclusion holds.

The chambers form a set of subsets of $E$, and their symmetric adjacency relation is a subset of the set of ordered chamber pairs, so $Q_J$ is a small directed graph. Because there is exactly one arrow for each ordered adjacent pair, its paths correspond to the chamber sequences of [def-chamber-paths-artin-tits-normalisers](item-def-chamber-paths-artin-tits-normalisers), including the one-chamber sequence for an empty path. Their lengths and endpoints agree; hence the geodesic condition agrees with [def-geodesic-path-artin-tits-normalisers](item-def-geodesic-path-artin-tits-normalisers).

By [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites), the set $R_J$ of endpoint-matched path pairs generates a smallest endpoint-preserving path congruence, and the quotient has well-defined identities and associative composition. It is therefore the stated small category. By [def-groupoid-completion-artin-tits-normalisers](item-def-groupoid-completion-artin-tits-normalisers), its groupoid completion exists with the stated universal property. The arrow in the opposite direction across a wall is an original generator; it is not assumed to be the formal inverse of the first arrow.

## Source notes

The article reference attributes the construction and spherical-type terminology. The justification uses the declared mathematical suppliers.

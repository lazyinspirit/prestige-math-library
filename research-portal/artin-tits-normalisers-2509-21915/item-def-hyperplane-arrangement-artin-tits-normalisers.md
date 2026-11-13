---
title: Linear hyperplane arrangements and local finiteness
status: draft
research_item: def-hyperplane-arrangement-artin-tits-normalisers
dependency_level: 1
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF page 4, §2.1
      statement: An arrangement consists of a convex subset of a real vector space and
        a set of linear hyperplanes each meeting that subset; restriction
        retains the hyperplanes meeting the smaller convex subset, and local
        finiteness is the neighbourhood condition on the original hyperplanes.
      hypotheses: A real vector space, a convex subset, and a set of linear
        hyperplanes; the local-finiteness clause uses open neighbourhoods in the
        subset.
      reading_limits: The frozen article text at §2.1 was read for attribution. The
        article does not specify an ambient topology in this passage; this item
        makes one explicit.
---

PDF p. 4: ` §2.1 `

## Prerequisites

- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)
- [math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)
- [math:def-dimension](https://alphabetamath.cc/item/def-dimension)
- [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)
- [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)


## Definition

Let $E$ be a real vector space equipped with a specified topology, and give each subset of $E$ the subspace topology: its open sets are its intersections with open subsets of $E$. In the finite-dimensional setting one may use the Euclidean topology described in the arrangement interface. A subset $T\subseteq E$ is convex when $(1-t)x+ty\in T$ for all $x,y\in T$ and $0\leq t\leq1$. A linear hyperplane is a linear subspace $H\subseteq E$ of codimension one, meaning that $E/H$ has dimension one.

A hyperplane arrangement $(T,\mathcal H)$ consists of a convex subset $T\subseteq E$ and a set $\mathcal H$ of linear hyperplanes in $E$, possibly infinite, such that $H\cap T\ne\varnothing$ for every $H\in\mathcal H$.

For a convex subset $T'\subseteq T$, the restriction to $T'$ is the arrangement $(T',\mathcal H_{T'})$, where $\mathcal H_{T'}=\{H\in\mathcal H:H\cap T'\ne\varnothing\}$. It is also denoted $(T',\mathcal H)$ when the restriction of the hyperplane set is understood.

The arrangement is locally finite if, for every $x\in T$, there is an open set $U$ in the subspace topology on $T$ with $x\in U$ such that $U$ meets only finitely many distinct members of $\mathcal H$.

## Definition references

[math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)

[math:def-linear-subspace](https://alphabetamath.cc/item/def-linear-subspace)

[math:def-dimension](https://alphabetamath.cc/item/def-dimension)

[math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

## Justification

The specified topology gives a subspace topology on $T$, so the neighbourhood condition is meaningful. Convexity of $T'$ and the defining filter on $\mathcal H_{T'}$ ensure that the restriction again satisfies the arrangement definition. The members retained are hyperplanes in $E$ themselves, so distinct hyperplanes are counted separately even if their intersections with $T$ coincide. The finite-dimensional convention and these arrangement operations agree with the arrangement interface.

## Source notes

The cited article supplies the arrangement terminology and its restriction and local-finiteness conventions. The explicit choice of topology makes the neighbourhood convention precise; no particular topology is asserted for an arbitrary-dimensional $E$.

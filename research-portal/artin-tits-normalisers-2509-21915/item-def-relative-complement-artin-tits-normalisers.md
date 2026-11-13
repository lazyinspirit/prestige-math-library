---
title: Relative complexified hyperplane complement
status: draft
research_item: def-relative-complement-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 13, equation (3.26) and the following formula
      statement: The relative complexified complement is obtained from the product of
        the interior of the J-cone with itself by removing the products H × H
        for the relative hyperplanes. When the Coxeter diagram is spherical, it
        is identified with the complement of their complexifications in the
        complexified relative space.
      hypotheses: The article's finite Coxeter diagram and its associated Coxeter
        group and relative arrangement; spherical means that the associated
        Coxeter group is finite.
      reading_limits: The frozen article text at equation (3.26) and the following
        formula was read for attribution. The article is not used as a proof of
        the spherical identification.
---

PDF p. 13: ` (3.26) and following formula `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)
- [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)
- [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)


## Definition

Let $(W,S)$ be a Coxeter system with finite $S$, and let $J\subseteq S$. In the real dual representation space $\Theta$, let $\Theta_J$ be the subspace on which the simple roots indexed by $J$ vanish. Let $\mathrm{Cone}(J)$ be the intersection of the Tits cone with $\Theta_J$, and let $\mathrm{Cone}(J)^\circ$ be its interior in $\Theta_J$. Let $\mathcal H^J$ be the set of distinct hyperplanes obtained by restricting to $\Theta_J$ those root hyperplanes that do not contain $\Theta_J$.

The **relative complexified hyperplane complement** is the space

$$\mathcal X_J^{\mathbb C}=(\mathrm{Cone}(J)^\circ\times\mathrm{Cone}(J)^\circ)\setminus\bigcup_{H\in\mathcal H^J}(H\times H).$$

It has the subspace topology inherited from the product topology. If $W$ is finite, a case also called **spherical type**, then $\mathrm{Cone}(J)^\circ=\Theta_J$. Under the real-linear identification $(x,y)\mapsto x\otimes1+y\otimes i$ of $\Theta_J\times\Theta_J$ with $\Theta_J\otimes_{\mathbb R}\mathbb C$, the space is

$$(\Theta_J\otimes_{\mathbb R}\mathbb C)\setminus\bigcup_{H\in\mathcal H^J}(H\otimes_{\mathbb R}\mathbb C).$$

## Definition references

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

## Justification

The relative-cone definition supplies the finite-dimensional space $\Theta_J$, its relative topology, the set $\mathrm{Cone}(J)^\circ$ and the collection of actual linear hyperplanes $\mathcal H^J$. Thus the displayed union and its complement are well-defined subsets of the product, whose product and subspace topologies are specified by [math:def-product-topology](https://alphabetamath.cc/item/def-product-topology) and [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top), respectively.

If $W$ is finite, [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers) gives $\mathrm{Cone}=\Theta$. Hence $\mathrm{Cone}(J)=\Theta_J$, and its interior in $\Theta_J$ is all of $\Theta_J$. The root set is finite because, by [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), it is the union of the $W$-orbits of the finitely many simple roots; consequently $\mathcal H^J$ is finite. Its members are linear hyperplanes and meet $\Theta_J$ at zero, so they form a locally finite arrangement there. The complexification identification in [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) sends each $H\times H$ to $H\otimes_{\mathbb R}\mathbb C$, and therefore sends the product complement to the displayed complexified complement.

## Source notes

The article is cited for attribution of the definition and spherical-type formulation. The well-definedness and identification above use the listed mathematical suppliers.

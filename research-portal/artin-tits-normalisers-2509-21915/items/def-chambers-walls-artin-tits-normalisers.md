---
id: def-chambers-walls-artin-tits-normalisers
kind: definition
title: Chambers, walls and adjacency
status: published
domain: mathematics
origin: pipeline
deps:
  - def-hyperplane-arrangement-artin-tits-normalisers
  - def-arrangement-topology-interface-artin-tits-prerequisites
dependency_roles:
  def-hyperplane-arrangement-artin-tits-normalisers: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 4, §2.1; p. 9, Remark 3.8
      statement: Chambers are connected components of the arrangement complement; a
        wall is a codimension-one intersection of the closure of a chamber with
        an arrangement hyperplane, and adjacent chambers share a wall.
      hypotheses: The article's arrangement consists of a convex subset of a real
        vector space and linear hyperplanes meeting it; the adjacency convention
        is recalled in Remark 3.8.
      reading_limits: The frozen article text at the cited passages and §3.1 was read
        for attribution. The finite-dimensional topology and affine-dimension
        convention below are made explicit here.
dependency_level: 2
---

## Definition

Let $(T,\mathcal H)$ be a hyperplane arrangement in a finite-dimensional real vector space $E$ with its Euclidean topology, as in [[def-hyperplane-arrangement-artin-tits-normalisers]] and [[def-arrangement-topology-interface-artin-tits-prerequisites]]. Thus $T$ is convex and each member of $\mathcal H$ is a linear hyperplane meeting $T$. Give the complement $T\setminus\bigcup_{H\in\mathcal H}H$ its subspace topology. Its connected components are the **chambers** of the arrangement.

For a chamber $C$, let $\overline C$ be its closure in $E$: the set of points every open neighbourhood of which meets $C$. The affine hull of a nonempty set is its smallest containing affine subspace, and its affine dimension is the dimension of that hull. A **wall** of $C$ is an intersection $\overline C\cap H$, for $H\in\mathcal H$, whose affine dimension is one less than the affine dimension of $C$. Two distinct chambers are **adjacent** if they share a wall. The wall is the intersection itself; the hyperplane $H$ is its supporting hyperplane and is not the wall by this convention.

## Justification

The arrangement definition supplies the convex domain and its hyperplanes; the subspace topology and connected components specify the chambers. Closure and affine dimension specify which intersections are walls without asserting that every hyperplane supplies one. If $C$ has affine dimension $\dim E$, this wall condition agrees with the dimension-$\dim E-1$ convention in the arrangement interface. Sharing one of these sets is a well-defined symmetric relation on distinct chambers.

## Source notes

The cited article supplies the chamber, wall and adjacency terminology. The ambient closure and affine-dimension convention make the formulation explicit; in the relative arrangement of §3.1 the ambient space is the relative vector space $\Theta_J$.

---
id: def-geodesic-path-artin-tits-normalisers
kind: definition
title: Geodesic chamber paths
status: published
domain: mathematics
origin: pipeline
deps:
  - def-chamber-paths-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - prop-relative-local-finiteness-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
dependency_roles:
  def-chamber-paths-artin-tits-normalisers: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  prop-relative-local-finiteness-artin-tits-normalisers: mathematical-premise
  prop-tits-cone-basic-artin-tits-normalisers: mathematical-premise
  prop-gallery-separation-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 13, §3.4, last paragraph before Proposition 3.29
      statement: A chamber path is geodesic when it crosses a minimal number of walls
        between its endpoints. Equivalently, it crosses each hyperplane of
        $\mathcal H^J$ at most once.
      hypotheses: The finite-rank relative chamber arrangement and chamber-path
        conventions of §§2–3; spherical type is not assumed here.
      reading_limits: The frozen article text at the cited paragraph was read for
        attribution. The article is not used as proof of the equivalence.
dependency_level: 16
---

## Definition

Fix a finite-rank Coxeter system and a subset $J$ of its vertex set. In the relative arrangement $(\mathrm{Cone}(J)^\circ,\mathcal H^J)$, a chamber path is a finite nonempty sequence of chambers with consecutive chambers adjacent. Its length is its number of consecutive pairs. At each adjacency the path crosses the unique relative hyperplane supporting the shared wall; repeated crossings are counted with multiplicity.

A path is **geodesic** if its length is minimal among chamber paths with the same source and target. Equivalently, it crosses each hyperplane of $\mathcal H^J$ at most once. Hyperplanes are counted as distinct sets, even when different roots define the same relative hyperplane. A one-chamber path has length zero and is geodesic.

## Definition references

[[def-chamber-paths-artin-tits-normalisers]]

[[def-relative-cone-artin-tits-normalisers]]

[[def-chambers-walls-artin-tits-normalisers]]

[[prop-relative-local-finiteness-artin-tits-normalisers]]

[[prop-tits-cone-basic-artin-tits-normalisers]]

[[prop-gallery-separation-interface-artin-tits-prerequisites]]

## Justification

The relative cone and its hyperplanes are specified by [[def-relative-cone-artin-tits-normalisers]], and the path, endpoint and adjacency conventions by [[def-chamber-paths-artin-tits-normalisers]] and [[def-chambers-walls-artin-tits-normalisers]]. The Tits cone is convex by [[prop-tits-cone-basic-artin-tits-normalisers]]; intersecting it with the relative linear space and taking the interior gives an open convex set. The relative arrangement is locally finite there by [[prop-relative-local-finiteness-artin-tits-normalisers]]. Hyperplanes missing the interior do not affect its chambers or crossings.

The chambers are open in the relative space, so their affine dimension is that of the relative space; the wall convention therefore agrees with the gallery interface. By [[prop-gallery-separation-interface-artin-tits-prerequisites]], each adjacency has a unique supporting hyperplane, any two chambers are joined by a finite gallery, and a gallery is shortest precisely when it crosses each separating hyperplane once and no other hyperplane. In any gallery, a separating hyperplane must be crossed an odd number of times and a nonseparating one an even number of times. Hence crossing every hyperplane at most once is equivalent to that shortest-gallery condition. The one-chamber path has no crossings and has the least possible length, zero.

## Source notes

The article reference attributes the terminology and equivalence. The justification uses the declared mathematical suppliers.

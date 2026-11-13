---
id: def-classical-complement-artin-tits-normalisers
kind: definition
title: Classical complexified hyperplane complement
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
  - def-complement-interface-artin-tits-prerequisites
dependency_roles:
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  prop-tits-cone-basic-artin-tits-normalisers: mathematical-premise
  def-complement-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: definition
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 5, Notation 2.1 and (2.2)–(2.3)
      statement: The article defines the complexified complement by removing the
        products of reflecting hyperplanes from the product of the interiors of
        the Tits cone, and identifies it with the usual complexified hyperplane
        complement in spherical type.
      hypotheses: The Coxeter-system and geometric conventions of §2.2; the
        identification with the full complexified space is for finite W.
      reading_limits: The frozen article text was consulted for the formulation and
        attribution. This citation is not used as a proof premise.
dependency_level: 4
formulation_deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
  - def-complement-interface-artin-tits-prerequisites
argument_deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
  - def-complement-interface-artin-tits-prerequisites
---

## Definition

Let $(W,S)$ be a Coxeter system with $S$ finite. Use the finite-dimensional real dual space $\Theta$, its topology, the Tits cone $\mathrm{Cone}$ and its interior $\mathrm{Cone}^{\circ}$, and the set $\mathcal H$ of distinct reflecting hyperplanes from [[def-coxeter-arrangement-artin-tits-normalisers]]. The classical complexified hyperplane complement is

$$\mathcal X^{\mathbb C}=(\mathrm{Cone}^{\circ}\times\mathrm{Cone}^{\circ})\setminus\bigcup_{H\in\mathcal H}(H\times H).$$

It has the subspace topology inherited from the product topology on $\mathrm{Cone}^{\circ}\times\mathrm{Cone}^{\circ}$. In particular, a point $(x,y)$ belongs to $\mathcal X^{\mathbb C}$ exactly when $x,y\in\mathrm{Cone}^{\circ}$ and no reflecting hyperplane contains both $x$ and $y$.

When $W$ is finite, identify $(x,y)\in\Theta\times\Theta$ with $x\otimes 1+y\otimes i\in\Theta\otimes_{\mathbb R}\mathbb C$. Under this identification,

$$\mathcal X^{\mathbb C}=(\Theta\otimes_{\mathbb R}\mathbb C)\setminus\bigcup_{H\in\mathcal H}(H\otimes_{\mathbb R}\mathbb C).$$

Here $H\otimes_{\mathbb R}\mathbb C$ denotes the complexification of the real hyperplane $H$, viewed as a subspace of the complexification of $\Theta$.

## Justification

The cited arrangement definition supplies $\Theta$, its topology, $\mathrm{Cone}^{\circ}$ and the set of hyperplanes. The displayed set difference is therefore a well-defined subset of the product; the product and subspace topology conventions are those of [[def-complement-interface-artin-tits-prerequisites]]. The pointwise membership condition is the set-theoretic meaning of removing the union.

If $W$ is finite, [[prop-tits-cone-basic-artin-tits-normalisers]] gives $\mathrm{Cone}=\Theta$, hence $\mathrm{Cone}^{\circ}=\Theta$. The complexification identification in [[def-complement-interface-artin-tits-prerequisites]] sends $H\times H$ to $H\otimes_{\mathbb R}\mathbb C$ for each real hyperplane $H$. It consequently sends the removed union and its complement to the corresponding union and complement displayed above. This justifies the finite-group identification.

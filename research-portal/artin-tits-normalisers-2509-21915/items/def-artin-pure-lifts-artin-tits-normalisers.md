---
id: def-artin-pure-lifts-artin-tits-normalisers
kind: definition
title: Artin–Tits group, pure subgroup and positive lifts
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - prop-classical-cover-artin-tits-normalisers
  - prop-positive-lift-interface-artin-tits-prerequisites
  - thm-reflection-artin-topology-input-artin-tits-prerequisites
  - math:def-cg-artin-monoid-and-group-presentations
  - math:def-fundamental-groupoid-of-a-space
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-classical-complement-artin-tits-normalisers: mathematical-premise
  prop-classical-cover-artin-tits-normalisers: mathematical-premise
  prop-positive-lift-interface-artin-tits-prerequisites: mathematical-premise
  thm-reflection-artin-topology-input-artin-tits-prerequisites: mathematical-premise
  math:def-cg-artin-monoid-and-group-presentations: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 5, §2.2 immediately after (2.4)
      statement: The article defines the Artin–Tits group and pure Artin–Tits group by
        the two fundamental groups in the covering sequence, and records the
        positive-lift section and Artin generators.
      hypotheses: The article's Coxeter-system and arrangement conventions; the
        formulation here uses the finite-rank hypotheses of the cited covering
        suppliers.
      reading_limits: The frozen article text at the cited passage was read for
        attribution. This reference is not used to justify the definition or its
        properties.
dependency_level: 6
---

## Definition

Let $(W,S)$ be a Coxeter system with $S=\{s_i:i\in\Gamma_0\}$ finite, and let $\mathcal X^{\mathbb C}$ be its classical complexified hyperplane complement. Choose $Z\in\mathcal X^{\mathbb C}$ and write $\overline Z$ for its orbit in $\mathcal X^{\mathbb C}/W$. The Artin–Tits group is $A=\pi_1(\mathcal X^{\mathbb C}/W,\overline Z)$, the group of based loop-homotopy classes in the quotient. The pure Artin–Tits group is $P=\pi_1(\mathcal X^{\mathbb C},Z)$, identified with its image in $A$ under the covering map. Let $\pi:A\to W$ send a loop class to the unique $w$ for which its lift starting at $Z$ ends at $wZ$.

Fix an isomorphism over $W$ from the presented Artin group to $A$ supplied by the fundamental-group identification. The presented group has generators $a_s$ for $s\in S$ and, for distinct $s,t$ with finite $m(s,t)=\operatorname{ord}(st)$, the relation equating the two alternating words of length $m(s,t)$ beginning with $a_s$ and $a_t$ respectively. Write $\sigma_s\in A$ for the image of $a_s$, and $\sigma_i=\sigma_{s_i}$. For a reduced expression $w=s_1\cdots s_r$, meaning an expression of minimum length among words in $S$ representing $w$, define the positive lift $\sigma_w=\sigma_{s_1}\cdots\sigma_{s_r}$; the empty product is the identity. Thus $w\mapsto\sigma_w$ is a set-theoretic section of $\pi$.

## Justification

The Coxeter-system supplier defines $W$, its generators and word length; the complement supplier defines $\mathcal X^{\mathbb C}$. Based fundamental groups consist of loop-homotopy classes with concatenation. The classical-cover result gives the covering, the endpoint map $\pi$, and the exact sequence $1\to P\to A\xrightarrow{\pi}W\to1$ after identifying $P$ with its image. In particular, $P=\ker\pi$.

The independent fundamental-group identification applies to the finite-rank dual reflection system identified in the classical-cover result. It gives an isomorphism of the presented Artin-group sequence with this covering sequence over $W$; fixing one makes the displayed generators elements of $A$. The Artin presentation defines the alternating relations. The positive-lift interface proves that products corresponding to any two reduced expressions for $w$ agree and that their image under the projection is $w$. Transporting these facts through the fixed isomorphism makes $\sigma_w$ well defined and gives $\pi(\sigma_w)=w$. A set-theoretic section is a function whose composite with $\pi$ is the identity; no homomorphism property is asserted.

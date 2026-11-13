---
id: def-groupoid-cover-artin-tits-normalisers
kind: definition
title: Groupoid coverings, universal and normal covers
status: published
domain: mathematics
origin: pipeline
deps:
  - def-groupoid-conventions-artin-tits-normalisers
  - thm-groupoid-cover-input-artin-tits-prerequisites
dependency_roles:
  def-groupoid-conventions-artin-tits-normalisers: mathematical-premise
  thm-groupoid-cover-input-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: definition
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 6, §2.4 before (2.10)
      statement: A groupoid covering has unique lifts from prescribed source objects;
        the article defines universal and normal covers and deck transformations
        in these terms.
      hypotheses: The groupoids are small and connected, as stipulated at the
        beginning of §2.4.
      reading_limits: The frozen extracted article text at the cited passage was read
        for attribution. This citation is not a proof premise.
dependency_level: 7
---

## Definition

Use the small, nonempty connected groupoids and left-to-right composition convention of [[def-groupoid-conventions-artin-tits-normalisers]]. A functor $F:\widetilde{\mathcal G}\to\mathcal G$ assigns objects to objects and morphisms to morphisms, preserving sources, targets, identities and composition. It is a **covering** if, for every morphism $\alpha:x\to y$ of $\mathcal G$ and every object $\widetilde x$ with $F(\widetilde x)=x$, there is exactly one morphism $\widetilde\alpha$ with source $\widetilde x$ and $F(\widetilde\alpha)=\alpha$. Its target $\widetilde y$ necessarily satisfies $F(\widetilde y)=y$ and is uniquely determined by the lift. Thus a covering is precisely a functor bijective on the set of morphisms with each prescribed source.

A covering is **universal** when every vertex group upstairs is trivial, meaning it contains only its identity morphism. Equivalently, for each pair of objects $\widetilde x,\widetilde y$ upstairs, $\operatorname{Hom}_{\widetilde{\mathcal G}}(\widetilde x,\widetilde y)$ contains exactly one morphism.

A **deck transformation** of $F$ is an automorphism $\phi$ of $\widetilde{\mathcal G}$, meaning an invertible functor from it to itself, satisfying the strict equality of functors $F\circ\phi=F$. The deck transformations form a group under ordinary functor composition and act on each fibre $F^{-1}(x)$ by their object maps. The covering is **normal** if this action is transitive on one fibre: any two objects in that fibre are related by a deck transformation. Equivalently, the action is transitive on every fibre.

## Definition references

[[def-groupoid-conventions-artin-tits-normalisers]]

[[thm-groupoid-cover-input-artin-tits-prerequisites]]

## Justification

The unique-lift condition is exactly source-star bijectivity: functoriality supplies a map from the set of arrows with source $\widetilde x$ to the set of arrows with source $F(\widetilde x)$, and the condition says that each arrow in the latter set has exactly one preimage. The target of a lift is determined because a morphism has a specified target and a functor preserves targets. The covering formulation agrees with [[thm-groupoid-cover-input-artin-tits-prerequisites]].

Connectedness upstairs provides a morphism $a:\widetilde x\to\widetilde y$ for any two objects. If every vertex group is trivial and $b$ is another morphism with those endpoints, then $ba^{-1}$ is an endomorphism of $\widetilde x$, hence is the identity; consequently $b=a$. Conversely, if every morphism set between two objects is a singleton, the endomorphism set at each object consists only of its identity. This proves the equivalence in the definition of universal.

The identity functor is a deck transformation, and deck transformations are closed under composition and inverses, since $F\circ\phi=F$ implies $F\circ\phi^{-1}=F$. They therefore act on each fibre. For $\alpha:x\to y$, send an object over $x$ to the target of its lift of $\alpha$. Lifting $\alpha^{-1}$ gives the inverse map: the composite of a lift and the lift of its inverse is the unique lift of an identity, hence is an identity. A deck transformation carries a lift of $\alpha$ to the lift from the transformed source, by strict equality and uniqueness. Thus this bijection of fibres is equivariant. Since the base groupoid is connected, every two fibres are related in this way; transitivity on one fibre is therefore equivalent to transitivity on every fibre. The connected-cover normality convention also agrees with [[thm-groupoid-cover-input-artin-tits-prerequisites]].

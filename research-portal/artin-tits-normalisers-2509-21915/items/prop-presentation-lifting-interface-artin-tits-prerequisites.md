---
id: prop-presentation-lifting-interface-artin-tits-prerequisites
kind: proposition
title: A criterion for lifting a presented groupoid
status: published
domain: mathematics
origin: pipeline
deps:
  - def-path-localisation-interface-artin-tits-prerequisites
  - def-small-groupoid-interface-artin-tits-prerequisites
  - thm-groupoid-cover-input-artin-tits-prerequisites
  - math:def-indexed-family
  - math:def-injection-surjection-bijection
dependency_roles:
  def-path-localisation-interface-artin-tits-prerequisites: mathematical-premise
  def-small-groupoid-interface-artin-tits-prerequisites: mathematical-premise
  thm-groupoid-cover-input-artin-tits-prerequisites: mathematical-premise
  math:def-indexed-family: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 7
---

## Statement

Let $G$ be the groupoid presented by a small directed graph $Q$, endpoint-preserving path relations $R$, formal inverse edges, and their cancellation relations. Let $(X_x)_{x\in Q_0}$ be a family of sets indexed by the vertex set $Q_0$. For each edge $e:x\to y$ choose a bijection $T_e:X_x\to X_y$, and assign its formal inverse edge the inverse bijection $T_e^{-1}$. Suppose that, for every relation in $R$, the two successive composites of these maps agree on the whole set over its source.

Then there is a small groupoid $E$ with objects the disjoint union of the sets $X_x$ and a functor $p:E\to G$ such that, for each object $u\in X_x$ and each arrow $g$ of $G$ with source $x$, exactly one arrow of $E$ has source $u$ and projects to $g$. The lift of a generating edge sends $u$ to $T_e(u)$. Thus $p$ is a covering in the source-star sense, whether or not $E$ or $G$ is connected. The lifts are determined by the specified maps and the covering property. Equality of projected labels alone does not establish equality of relation lifts: the composites must agree upstairs.

## Statement references

[[def-path-localisation-interface-artin-tits-prerequisites]]

[[def-small-groupoid-interface-artin-tits-prerequisites]]

[[thm-groupoid-cover-input-artin-tits-prerequisites]]

[[math:def-indexed-family]]

[[math:def-injection-surjection-bijection]]

## Facts & Assumptions

[F1] The path presentation, its endpoint-preserving generated congruence, the doubled graph and cancellation relations are as in [[def-path-localisation-interface-artin-tits-prerequisites]]. Paths and their map composites are read from left to right.

[F2] Groupoids, functors and inverse arrows use the conventions of [[def-small-groupoid-interface-artin-tits-prerequisites]]. A source-star covering is a functor bijective on arrows with each fixed source, as in [[thm-groupoid-cover-input-artin-tits-prerequisites]]; connectedness is not part of this local bijectivity condition.

[F3] The family $(X_x)_{x\in Q_0}$ is a function with domain the set $Q_0$, in the sense of [[math:def-indexed-family]]. Members of its disjoint union retain their vertex tag; $u\in X_x$ abbreviates the object $(x,u)$.

[F4] A bijection is an injective and surjective function, as in [[math:def-injection-surjection-bijection]]. The maps $T_e$ are the specified bijections and $T_e^{-1}$ their inverse functions.

## Proof

**Given:** The graph, relations, sets and bijections in the Statement.

**Goal:** Construct the claimed covering and establish the uniqueness of its lifts.

1.1 Assign to each finite path in the doubled graph the successive composite of its edge maps, assigning the identity map to an empty path. Among paths with the same endpoints, equality of these maps is an equivalence relation stable under concatenation on either side. It contains every relation in $R$ by hypothesis and both cancellation relations because the map for a formal inverse is the inverse bijection. By minimality of the generated congruence, equivalent paths induce the same map. Consequently every arrow $g:x\to y$ of $G$ induces a well-defined bijection $T_g:X_x\to X_y$, compatible with identities and composition; reversing a representative shows $T_{g^{-1}}=T_g^{-1}$. [F1, F4, given]

2.1 Define an arrow of $E$ to be a pair $(u,g)$ with $u\in X_x$ and $g:x\to y$ in $G$, with source $u$ and target $T_g(u)$. Its projection is $g$; define $(u,g)(T_g(u),h)=(u,gh)$ and the identity at $u$ to be $(u,1_x)$. Compatibility from the preceding step gives associativity and the identity laws. The inverse of $(u,g)$ is $(T_g(u),g^{-1})$, so $E$ is a groupoid and projection is a functor. Its object set is the tagged union of the set-indexed family $(X_x)_{x\in Q_0}$, and its arrows form a subset of the product of this object set with the arrow set of $G$; hence both are sets. [F1, F2, F3, step 1.1]

3.1 For each $u\in X_x$, projection sends the arrows with source $u$ bijectively to the arrows of $G$ with source $x$: the unique arrow over $g$ is $(u,g)$. In particular, the lift of $e$ ends at $T_e(u)$. Any other covering with the same fibres and generator-lift endpoints has, by successive unique lifting, the same endpoint for every path; its arrow over each $g$ is uniquely determined by its source and projection. The resulting correspondence of arrows preserves identities and composition, giving a unique isomorphism over $G$ that fixes the specified objects. This proves the criterion and its uniqueness assertion. [F2, F4, step 1.1, step 2.1] ∎

## Remarks

The hypothesis on relation composites is an obligation to be checked in any application. In particular, projecting two paths to the same arrow does not by itself prove that independently specified lifts have the same endpoint or composite.

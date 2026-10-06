---
id: lem-holonomy-classes-form-a-groupoid-congruence
kind: lemma
title: "Holonomy classes form a groupoid congruence"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - def-holonomy-groupoid-of-a-foliation
  - def-monodromy-groupoid-of-a-foliation
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - lem-holonomy-respects-path-concatenation-and-reversal
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - prop-smooth-maps-are-continuous
  - thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
  - def-leafwise-path-and-leafwise-homotopy
  - def-local-transversal-to-a-regular-foliation
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). On the
set of leafwise paths of $F$, the relation "same endpoints and equal holonomy
germs" is an equivalence relation coarser than leafwise homotopy relative to
endpoints, and it is a congruence for concatenation: if $a\sim a'$ and
$b\sim b'$, and $a*b$ and $a'*b'$ are defined, then $a*b\sim a'*b'$.
Consequently the quotient $\operatorname{Hol}(F)$ is a groupoid and the
projection $\operatorname{Mon}(F)\to\operatorname{Hol}(F)$ is a groupoid
morphism ([[def-holonomy-groupoid-of-a-foliation]],
[[def-monodromy-groupoid-of-a-foliation]]).

## Facts & Assumptions

**Given:** Leafwise paths of a regular foliation $F$ with chosen local transversals at their endpoints, and the relation of having equal holonomy germs.

[F1] The holonomy germ of a leafwise path is well defined, depends only on the path and the endpoint transversals, and is invariant under leafwise homotopy relative to endpoints ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]], [[def-local-transversal-to-a-regular-foliation]]).

[F2] Holonomy respects concatenation and reversal: $h_{a*b}=h_b\circ h_a$ for composable leafwise paths (with the appropriate endpoint transversals), and $h_{a^{-1}}=(h_a)^{-1}$ ([[lem-holonomy-respects-path-concatenation-and-reversal]]).

[F3] For fixed pointed source and target manifolds, a germ is the equivalence class of a local diffeomorphism under agreement on a source neighborhood ([[def-germ-of-a-local-diffeomorphism-at-a-point]]). Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[F4] Leafwise homotopy relative to endpoints is an equivalence relation on leafwise paths with fixed endpoints, and concatenation of leafwise paths is the operation of the monodromy groupoid ([[def-leafwise-path-and-leafwise-homotopy]], [[def-monodromy-groupoid-of-a-foliation]]).

## Proof

**Proof technique:** direct.

1.1 **Reflexivity, symmetry and transitivity.** Two leafwise paths are related exactly when they have the same endpoints and their holonomy germs (computed with the chosen endpoint transversals) are equal. Equality of germs is reflexive, symmetric and transitive by [F3], and having the same endpoints is likewise; hence the relation is an equivalence relation on leafwise paths. Leafwise homotopy relative to endpoints refines it: homotopic relative-endpoint leafwise paths have equal holonomy germs by [F1]. [F1, F3]

1.2 **Congruence for concatenation.** Suppose $a\sim a'$ and $b\sim b'$, with $a,a'$ from $x$ to $y$ and $b,b'$ from $y$ to $z$, and fix local transversals $T,S,R$ at $x,y,z$. By definition, $h_a(S,T)=h_{a'}(S,T)$ and $h_b(R,S)=h_{b'}(R,S)$. By multiplicativity [F2], $$h_{a*b}(R,T)=h_b(R,S)\circ h_a(S,T),\qquad h_{a'*b'}(R,T)=h_{b'}(R,S)\circ h_{a'}(S,T),$$ and these composites are equal by the following representative argument, which applies between different transversals. Choose representatives $f,f':(T,x)\to(S,y)$ agreeing on an open neighborhood $A$ of $x$, and $g,g':(S,y)\to(R,z)$ agreeing on an open neighborhood $B$ of $y$. By continuity, $A\cap f^{-1}(B)$ is an open neighborhood of $x$; on it $g\circ f=g'\circ f'$, so the composite germs agree by [F3]. Inversion likewise respects germ equality: after restricting the equal representatives $f,f'$ to a neighborhood on which they are diffeomorphisms, their inverses agree on its common open image about $y$. Hence $a*b\sim a'*b'$: the relation is a congruence. [F2, F3, F4]

2.1 **The quotient is a groupoid.** The composite of classes is well defined by step 1.2. Reversal is well defined by [F2] and the representative-inversion argument in step 1.2. The monodromy laws of [F4] supply endpoint-fixed leafwise homotopies from $c_x*a$ and $a*c_y$ to $a$, from $a*a^{-1}$ to $c_x$, and from $a^{-1}*a$ to $c_y$, as well as between the two associative concatenations. By step 1.1 these homotopies imply equality of holonomy classes. Thus constant-path classes are identities, reversal gives inverses, and composition is associative, so $\operatorname{Hol}(F)$ is a groupoid. [F2, F4, step 1.1, step 1.2]

3.1 **The projection is a morphism.** The projection sends the leafwise homotopy class of a path to its holonomy class; this is well defined by step 1.1 (a homotopy class is contained in a holonomy class), it preserves sources and targets, identities (constant paths), inverses (reversal) and composites (concatenation) by step 1.2 and [F2]. Hence it is a groupoid morphism. [F2, step 1.1, step 1.2, step 2.1] ∎

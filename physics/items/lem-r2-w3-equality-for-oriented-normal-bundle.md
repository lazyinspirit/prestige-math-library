---
id: lem-r2-w3-equality-for-oriented-normal-bundle
kind: lemma
title: "The integral third Stiefel–Whitney classes of oriented tangent and normal bundles agree when the restricted ambient second class vanishes"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: ZF + full AC inherited from Stiefel–Whitney and Bockstein suppliers.
proof_strategy: direct
deps:
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - prop-first-stiefel-whitney-class-classifies-orientability
  - def-bockstein-connecting-operation
  - lem-the-bockstein-is-independent-of-lift-and-cocycle-representative
  - def-axiom-of-choice
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
dependency_roles:
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-whitney-sum-formula-for-stiefel-whitney-classes: mathematical-premise
  prop-first-stiefel-whitney-class-classifies-orientability: mathematical-premise
  def-bockstein-connecting-operation: mathematical-premise
  lem-the-bockstein-is-independent-of-lift-and-cocycle-representative: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes, §8"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Whitney product formula and the definition of Stiefel–Whitney classes."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $Q$ and $Y$ be finite-dimensional Hausdorff second-countable smooth manifolds without boundary, and let $i:Q\hookrightarrow Y$ be a smooth embedding. Give $Y$ a smooth Riemannian metric and let $\nu=(i^*TY)/TQ$ be the real normal bundle, identified with the orthogonal complement of $TQ$ in $i^*TY$. Orient $TQ$ and $\nu$, and assume
$$w_1(TQ)=w_1(\nu)=0,\qquad w_2(i^*TY)=0.$$
Define $W_3(E):=\widetilde\beta_2(w_2(E))\in H^3(Q;\mathbb Z)$ for an oriented real bundle $E$, where $\widetilde\beta_2$ is the integral Bockstein of $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$. Then
$$W_3(TQ)=W_3(\nu).$$

## Facts & Assumptions

**Given:** Full AC, the oriented bundles $TQ,\nu$, their direct-sum identification with $i^*TY$, and $w_2(i^*TY)=0$.

[F1] [[thm-whitney-sum-formula-for-stiefel-whitney-classes]] states $w(E\oplus F)=w(E)w(F)$ over the admissible bases of its statement.

[F2] [[prop-first-stiefel-whitney-class-classifies-orientability]] states that an oriented numerable real bundle has $w_1=0$; here the vanishing is also explicitly assumed.

[F3] [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] fixes the total classes, their degrees, and the rank conventions.

[F4] [[def-bockstein-connecting-operation]] defines $\widetilde\beta_2$ from the displayed short exact coefficient sequence, and [[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]] proves that it is a well-defined function on cohomology classes.

[F5] A finite-dimensional Hausdorff second-countable smooth manifold is paracompact Hausdorff, has CW homotopy type, and its finite-rank smooth vector bundles are numerable. Thus the base and bundle hypotheses of [F1] apply to $Q$ ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

## Proof

**Given:** The bundle decomposition and vanishing classes above.

1.1 The base hypotheses of [F1] hold by [F5]. The degree-two part of the Whitney formula [F1] is
$$w_2(i^*TY)=w_2(TQ)+w_1(TQ)w_1(\nu)+w_2(\nu).$$
Using the two orientation vanishings and $w_2(i^*TY)=0$ gives $w_2(TQ)+w_2(\nu)=0$ in $H^2(Q;\mathbb F_2)$. Since this coefficient group has characteristic two, $w_2(TQ)=w_2(\nu)$. [F1, F2, F3, F5, given, algebra]

2.1 Apply the same function $\widetilde\beta_2$ of [F4] to the equal cohomology classes in step 1.1. By the definition of $W_3$, the resulting equality is $W_3(TQ)=W_3(\nu)$ in $H^3(Q;\mathbb Z)$. [F3, F4, step 1.1, algebra] ∎

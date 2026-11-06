---
id: lem-st-wu-relation-sq1-w2
kind: lemma
title: "First Steenrod square relation for w2"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 0
domain: mathematics
physical_scope: null
deps:
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-real-flag-bundle-and-stiefel-whitney-roots
  - thm-real-splitting-principle-with-mod-two-injective-pullback
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - thm-naturality-of-stiefel-whitney-classes
  - thm-steenrod-squares-are-well-defined-and-natural
  - prop-steenrod-square-normalization-instability-and-top-square
  - thm-cartan-formula-for-steenrod-squares
  - thm-cup-i-coboundary-identity
  - prop-cup-product-is-natural-unital-and-associative
  - def-compactly-generated-conventions-for-based-homotopy
  - def-real-and-complex-topological-vector-bundle
  - def-axiom-of-choice
dependency_roles:
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-real-flag-bundle-and-stiefel-whitney-roots: mathematical-premise
  thm-real-splitting-principle-with-mod-two-injective-pullback: mathematical-premise
  thm-whitney-sum-formula-for-stiefel-whitney-classes: mathematical-premise
  thm-naturality-of-stiefel-whitney-classes: mathematical-premise
  thm-steenrod-squares-are-well-defined-and-natural: mathematical-premise
  prop-steenrod-square-normalization-instability-and-top-square: mathematical-premise
  thm-cartan-formula-for-steenrod-squares: mathematical-premise
  thm-cup-i-coboundary-identity: mathematical-premise
  prop-cup-product-is-natural-unital-and-associative: mathematical-premise
  def-compactly-generated-conventions-for-based-homotopy: mathematical-premise
  def-real-and-complex-topological-vector-bundle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Proposition 3.3 and Theorem 3.1 proof, printed pp. 79–82: splitting principle and elementary symmetric Stiefel–Whitney roots."
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 34, printed pp. 123–127: Stiefel–Whitney roots, splitting principle, and Steenrod-square computation."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $E\to B$ be a numerable finite-rank real vector bundle, meaning it has a linear trivializing cover with a locally finite subordinate partition of unity. Let $B$ be paracompact and Hausdorff, compactly generated (a subset is closed exactly when every continuous map from a compact Hausdorff space has closed inverse image of it), and weak Hausdorff (every continuous map from a compact Hausdorff space has closed image); also require $B$ to be homotopy equivalent to a CW complex. With Stiefel–Whitney classes in $H^*(B;\mathbb F_2)$ and Steenrod squares in singular cohomology, one has
$$Sq^1w_2(E)=w_1(E)\smile w_2(E)+w_3(E).$$
The conventions $w_j(E)=0$ for $j$ above the rank include ranks zero and one.

## Statement references

[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]

[[thm-real-splitting-principle-with-mod-two-injective-pullback]]

[[def-compactly-generated-conventions-for-based-homotopy]]

[[def-real-and-complex-topological-vector-bundle]]

[Hatcher, *Vector Bundles & K-Theory*, Proposition 3.3](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf)

[Miller, *Algebraic Topology II*, Lecture 34](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf)

## Facts & Assumptions

**Given:** A numerable finite-rank real vector bundle on the stated admissible base; assume the full AC required by the cited splitting/class construction inputs.

[F1] [[thm-real-splitting-principle-with-mod-two-injective-pullback]]: the real flag pullback $q^*$ on mod-two cohomology is injective and $q^*E=\bigoplus_jL_j$.

[F2] [[def-real-flag-bundle-and-stiefel-whitney-roots]]: set $t_j=w_1(L_j)\in H^1(\operatorname{Fl}(E);\mathbb F_2)$ for the split line summands.

[F3] [[thm-whitney-sum-formula-for-stiefel-whitney-classes]]: $w(\bigoplus_jL_j)=\prod_jw(L_j)=\prod_j(1+t_j)$, so $w_1=\sum_jt_j$, $w_2=\sum_{i<j}t_it_j$, and $w_3=\sum_{i<j<k}t_it_jt_k$ after pullback.

[F4] [[thm-naturality-of-stiefel-whitney-classes]]: the classes $w_i$ commute with bundle pullback.

[F5] [[thm-steenrod-squares-are-well-defined-and-natural]]: $Sq^1$ is a natural cohomology operation.

[F6] [[prop-steenrod-square-normalization-instability-and-top-square]]: for a degree-one class $t$, $Sq^1(t)=t^2$.

[F7] [[thm-cartan-formula-for-steenrod-squares]]: $Sq^1(xy)=Sq^1(x)y+xSq^1(y)$.

[F8] [[thm-cup-i-coboundary-identity]]: the cup-one coboundary identity implies that, for mod-two cocycles, the two orders of the cup product represent the same cohomology class; hence the mod-two cohomology product is commutative.

[F9] [[prop-cup-product-is-natural-unital-and-associative]]: every continuous pullback is a ring map, so $q^*(xy)=q^*x\,q^*y$.

[A1] Full AC is assumed as defined in [[def-axiom-of-choice]], exactly as required by [F1] and the Stiefel–Whitney construction.

## Proof

1.1 On the flag bundle, write $q^*E=L_1\oplus\cdots\oplus L_n$ and $t_i=w_1(L_i)$ by [F1]–[F2]. The Whitney formula [F3] gives $q^*w_2(E)=\sum_{i<j}t_it_j$ using naturality [F4]. Apply [F7] to each summand and use [F6]:
$$Sq^1q^*w_2(E)=\sum_{i<j}(t_i^2t_j+t_it_j^2).$$
By [F5], this equals $q^*Sq^1w_2(E)$. [F1, F2, F3, F4, F5, F6, F7, A1]

2.1 By [F9], $q^*(w_1(E)w_2(E))=q^*w_1(E)\,q^*w_2(E)=(\sum_k t_k)(\sum_{i<j}t_it_j)$, using [F3]. Reorder factors using mod-two cup-product commutativity [F8]. Terms for which $k=i$ or $k=j$ give exactly $\sum_{i<j}(t_i^2t_j+t_it_j^2)$, the expression in step 1.1. For each triple of distinct indices $i<j<k$, the monomial $t_it_jt_k$ occurs three times, once for each choice of the singled-out factor $t_\ell$ in $w_1$; three equals one in $\mathbb F_2$. Therefore
$$q^*(w_1w_2)=Sq^1q^*w_2+\sum_{i<j<k}t_it_jt_k=Sq^1q^*w_2+q^*w_3.$$
The empty pair sum for ranks zero and one and the empty triple sum for ranks below three obey the same expansion. [F1, F3, F4, F8, F9, A1, step 1.1, algebra]

3.1 Rearranging the mod-two identity in step 2.1 gives $q^*(Sq^1w_2+w_1w_2+w_3)=0$. Since $q^*$ is injective by [F1] and subtraction equals addition over $\mathbb F_2$, the class inside the pullback is zero. This is the asserted identity for all ranks in the stated scope. [F1, A1, step 2.1, algebra] ∎

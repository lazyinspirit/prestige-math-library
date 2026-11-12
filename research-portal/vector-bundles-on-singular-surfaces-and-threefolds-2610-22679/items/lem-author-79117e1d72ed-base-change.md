---
id: lem-author-79117e1d72ed-base-change
kind: lemma
title: Projective bundle closure and naturality of the actual decomposition
status: published
domain: mathematics
deps:
  - math:def-projective-bundle-scheme
  - lem-author-79117e1d72ed-dual-conventions
  - lem-author-79117e1d72ed-bigraded-ring
  - lem-author-79117e1d72ed-additive-c1
  - lem-author-79117e1d72ed-all-bidegrees
  - def-bigraded-oriented-theory
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-scheme-over-base
  - math:def-field
  - math:def-category
  - math:def-locally-free-sheaf-finite-rank
  - math:def-pullback-module-ringed-spaces
  - math:def-base-change-morphism-schemes
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  lem-author-79117e1d72ed-dual-conventions: mathematical-premise
  lem-author-79117e1d72ed-bigraded-ring: mathematical-premise
  lem-author-79117e1d72ed-additive-c1: mathematical-premise
  lem-author-79117e1d72ed-all-bidegrees: mathematical-premise
  def-bigraded-oriented-theory: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-field: mathematical-premise
  math:def-category: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
formulation_deps:
  - math:def-projective-bundle-scheme
  - lem-author-79117e1d72ed-dual-conventions
  - lem-author-79117e1d72ed-bigraded-ring
  - lem-author-79117e1d72ed-additive-c1
  - lem-author-79117e1d72ed-all-bidegrees
  - def-bigraded-oriented-theory
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-scheme-over-base
  - math:def-field
  - math:def-category
  - math:def-locally-free-sheaf-finite-rank
  - math:def-pullback-module-ringed-spaces
  - math:def-base-change-morphism-schemes
argument_deps:
  - math:def-projective-bundle-scheme
  - lem-author-79117e1d72ed-dual-conventions
  - lem-author-79117e1d72ed-bigraded-ring
  - lem-author-79117e1d72ed-additive-c1
  - lem-author-79117e1d72ed-all-bidegrees
  - def-bigraded-oriented-theory
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-scheme-over-base
  - math:def-field
  - math:def-category
  - math:def-locally-free-sheaf-finite-rank
  - math:def-pullback-module-ringed-spaces
  - math:def-base-change-morphism-schemes
---

## Statement
Assume the Axiom of Choice. The category of qcqs $k$-schemes is closed under the positive-constant-rank projective bundles and their base changes required by the bigraded projective bundle contract.

For the decomposition and its naturality, additionally retain the compatible nested-universe and site-size bounds of the supplied graded-ring and EM first-Chern constructions. Existence and compatible enlargement of those bounds are separate size assumptions. All scheme, bundle, map and coefficient data in this cohomological assertion lie within those bounds.

For every finite locally free $E$ of constant rank $r>0$, the decomposition isomorphisms in every integer bidegree $(a,b)$, given by $(x_m)_m\mapsto\sum_{m=0}^{r-1}\pi^*(x_m)c_1(\mathcal O(1))^m$, are natural under base change $f:Y\to X$, using $f^*E$ and the induced map $\bar f:Q_Y(f^*E)\to Q_X(E)$.

## Statement references
[[def-bigraded-oriented-theory]]

[[lem-author-79117e1d72ed-all-bidegrees]]

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [[math:def-axiom-of-choice]]. It discharges the projective-bundle construction and the qcqs-closure conclusion of the dual-conventions supplier in step 1.1, and the ring and all-bidegrees decomposition hypotheses in step 2.1.

[A2] For the cohomological assertion and step 2.1, assume the compatible nested-universe and site-size bounds required by [[lem-author-79117e1d72ed-bigraded-ring]] and [[lem-author-79117e1d72ed-additive-c1]]. Use the same bounds for the actual groups, coefficient constructions, first-Chern maps, all-bidegrees isomorphisms and their pullbacks in [F2]. Universe existence and compatible enlargements are assumed separately. The geometric closure argument in step 1.1 retains the AC-qualified geometric interfaces of [F1] and needs no additional cohomological size premise.

[F1] [[math:def-projective-bundle-scheme]] supplies the quotient projectivization $Q_X(E)$, projection, tautological quotient line and arbitrary base change. [[lem-author-79117e1d72ed-dual-conventions]] identifies that line with the source convention and states that the projectivization of a constant-positive-rank bundle on a qcqs scheme over any field is again qcqs. Its geometric closure conclusion is used directly, with its stated AC hypothesis.

[F2] [[lem-author-79117e1d72ed-bigraded-ring]] supplies the actual groups $H^{a,b}$ in every integer bidegree, their products and functorial unital ring pullbacks, including the zero negative-weight convention and its standing size conventions; [[lem-author-79117e1d72ed-additive-c1]] supplies the natural first Chern map on line-bundle isomorphism classes; [[lem-author-79117e1d72ed-all-bidegrees]] supplies the displayed decomposition isomorphisms.

[F3] [[math:def-field]] fixes the field $k$. [[math:def-scheme]], [[math:def-morphism-of-schemes]], [[math:def-scheme-over-base]] and [[math:def-category]] fix the category with objects the qcqs $k$-schemes and morphisms all $k$-morphisms between them. Here qcqs means quasi-compact and quasi-separated as in [[math:def-quasi-compact-and-quasi-separated-scheme]]: the underlying space is quasi-compact and every pair of affine open subschemes has quasi-compact intersection.

[F4] [[math:def-locally-free-sheaf-finite-rank]] fixes the finite locally free sheaf and constant-rank conditions; [[math:def-pullback-module-ringed-spaces]] fixes module pullback, distinct from cohomology pullback. [[math:def-base-change-morphism-schemes]] fixes the base-change object and induced morphism. [[def-bigraded-oriented-theory]] specifies the projective bundle contract and the finite direct sums in the Statement; its Justification checks that module pullback preserves finite local freeness and constant rank.

## Proof
**Given:** A field $k$, qcqs $k$-schemes $X,Y$, a $k$-morphism $f:Y\to X$, a finite locally free $E$ of constant rank $r>0$ on $X$, and AC; for the cohomological assertion, also the compatible size bounds of [A2].

**Goal:** Check the scheme-category hypotheses and map-level naturality.

1.1 By [F4], $f^*E$ is finite locally free of the same constant rank $r$. Apply the qcqs-closure conclusion of [F1]'s dual-conventions supplier to $(X,E)$ and $(Y,f^*E)$, discharging its AC hypothesis by [A1]. Both $Q_X(E)$ and $Q_Y(f^*E)$ are therefore qcqs. Their projections give them $k$-scheme structures. By [F1] and [F4], $Q_Y(f^*E)\simeq Y\times_X Q_X(E)$, with induced projection $\bar f:Q_Y(f^*E)\to Q_X(E)$, and $\pi_X\bar f=f\pi_Y$. These projections and $\bar f$ are $k$-morphisms, so they lie in the category of [F3]. This proves precisely the closure required in [F4]; no inference from one affine cover to all affine opens is needed. [A1, F1, F3, F4, given]

2.1 Under [A1] and [A2], the decomposition of [F2] applies to both bundles by step 1.1. Write $\xi_X=c_1(\mathcal O_{Q_X(E)}(1))$ and $\xi_Y=c_1(\mathcal O_{Q_Y(f^*E)}(1))$. The tautological base-change identification in [F1] gives $\bar f^*\mathcal O_{Q_X(E)}(1)\simeq\mathcal O_{Q_Y(f^*E)}(1)$, so $\bar f^*\xi_X=\xi_Y$ by [F2]. For $x\in H^{a-2m,b-m}(X)$, functoriality and multiplicativity now give $\bar f^*(\pi_X^*x\,\xi_X^m)=\pi_Y^*(f^*x)\,\xi_Y^m$. This includes $m=0$ because pullback preserves the unit. Summing over $0\leq m<r$ proves that the decomposition square commutes, with componentwise $f^*$ on its finite direct-sum side. For $b<0$ both sides are zero by [F2]; if only a summand has negative weight its zero element satisfies the same equality. Hence naturality holds for every integer bidegree. [A1, A2, F1, F2, F4, step 1.1] ∎

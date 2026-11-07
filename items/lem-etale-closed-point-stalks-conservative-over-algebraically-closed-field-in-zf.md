---
id: lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf
kind: lemma
title: "Étale closed-point stalks are exact and conservative over an algebraically closed field in ZF"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - cor-noether-normalisation-module-finiteness
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - def-algebraically-closed-field
  - def-etale-sheaf-of-finite-modules
  - def-derived-category-of-etale-sheaves
proof_strategy: direct
axiom_use: "No choice principle is assumed; each witness is constructed from one given finite-type algebra or one specified section."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Stalks of sheaves"
      url: "https://stacks.math.columbia.edu/tag/03Q7"
    - title: "The Stacks Project, Morphisms of Schemes, Jacobson schemes"
      url: "https://stacks.math.columbia.edu/tag/02J4"
---

## Statement

Let k be an algebraically closed field, X a finite-type k-scheme, and Λ a finite coefficient ring. For each k-rational closed point x of X use Spec k→X as the geometric point. On the ordinary small étale site, the family of these stalk functors on sheaves of Λ-modules is exact and conservative. The conclusion assumes no choice principle, no algebraic closure of a function field, and no selection of one neighbourhood at every point. It applies to A_n=Z/ℓⁿ and levelwise to towers.

## Facts & Assumptions

**Given:** k, X, their small étale site and a specified sheaf or sheaf morphism as in the statement.

[F1] Every nonzero finite-type k-algebra is finite over a polynomial subalgebra in finitely many variables. [[cor-noether-normalisation-module-finiteness]]

[F2] Étale morphisms are universally open without a choice premise. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

[F3] An algebraically closed field has no proper finite algebraic field extension. [[def-algebraically-closed-field]]

[F4] Étale module sheaves form an abelian category on the fixed small site. The sheaf and sheafification conventions are the stated ones. [[def-derived-category-of-etale-sheaves]] [[def-etale-sheaf-of-finite-modules]]

## Proof

1.1 Every nonempty finite-type k-scheme Y has a k-rational closed point, using only one specified nonzero affine chart. Indeed write its nonzero coordinate algebra A as finite over R=k[z₁,…,z_d] by [F1]. Let m=(z₁,…,z_d). The localization A_m is a nonzero finite R_m-module: R⊂A remains injective after localization. If A_m/mA_m=0, determinant Nakayama applied to this one finite module gives an element of 1+mR_m that annihilates A_m, impossible because it is a unit. Thus B=A/mA is a nonzero finite-dimensional k-algebra. Among its proper ideals choose one of maximal k-dimension; this is a finite maximum, not a choice of an infinite family. It is maximal, and B modulo it is a finite field extension of k, hence k by [F3]. The resulting A→k gives a k-rational closed point of the chosen affine chart and of Y. [F1, F3, given, algebra]

2.1 At a specified k-rational point x, the category of étale neighbourhoods equipped with a specified lift of Spec k is filtered: the identity supplies one object and the fibre product supplies a common refinement of two, while an equalizer of two pointed maps is refined by an étale neighbourhood of the specified point. The stalk is the filtered colimit of sections over these pointed neighbourhoods. Filtered colimits of abelian groups are exact by finite witnesses: an equality or a vanishing in the colimit uses one common refinement of finitely many specified neighbourhoods, and a cokernel element is represented on one object and lifts locally there. This proves exactness of the stalk functor, without choosing a neighbourhood for every x. [F4, given, algebra]

3.1 Let F be a nonzero étale sheaf on X. Choose one nonzero section s over one étale object and restrict to one affine étale chart V on which it remains nonzero. Its zero locus is the union of images in V of étale neighbourhoods on which s is zero. It is open by [F2]. It is not all of V: otherwise the neighbourhoods would cover V and the sheaf separation axiom would force s=0. The nonempty closed complement has a k-rational point v by step 1.1. By definition, the germ of s at v is nonzero. The image x of v in X is a k-rational closed point. Pointed étale neighbourhoods of v in V are cofinal with those of x after fibre product with V; consequently the germ of s gives a nonzero element of the stalk F_x. Thus if every closed k-point stalk is zero, F is zero. [F2, step 1.1, given, algebra]

4.1 If a sheaf morphism induces an isomorphism on every closed k-point stalk, exactness from step 2.1 makes both its kernel and cokernel have zero such stalks. Step 3.1 makes both zero, so the morphism is an isomorphism. The same finite-witness proof is linear over A_n, and applying it separately at each level proves the tower assertion. [F4, step 2.1, step 3.1, algebra] ∎

## Scope

This is a finite-type, algebraically closed base special case. It does not construct injective or acyclic resolutions and does not assert product exactness or general rational-adic proper pushforward.

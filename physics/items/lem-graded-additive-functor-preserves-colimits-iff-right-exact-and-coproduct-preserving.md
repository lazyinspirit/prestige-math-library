---
id: lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving
kind: lemma
title: Colimits of a graded additive functor equal right exactness plus coproduct preservation
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-graded-degreewise-direct-sums-and-homogeneous-free-covers, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, def-preservation-reflection-creation-continuity-and-cocontinuity, def-left-exact-and-right-exact-functor, thm-small-colimits-from-coproducts-and-coequalizers, cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference, thm-an-additive-functor-preserves-finite-biproducts, thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits, def-abelian-category, def-additive-category, def-preadditive-category, def-additive-functor]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, printed pp.47-57 (Proposition 5.1.40, Theorem 5.1.43, Lemma 5.1.46, Corollary 5.1.48)"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem (arXiv:1612.04561v3), Introduction (classical unital-ring statement) and §2.1 Lemma 2.1"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $k$ be a field, $A,B$ graded $k$-algebras and
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ additive. Then $F$ preserves all small
colimits if and only if $F$ preserves cokernels and all coproducts; equivalently, $F$ is
cocontinuous if and only if it is right exact and coproduct preserving. No choice is used.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B$, an additive functor
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$, and a small diagram
$D:\mathcal J\to\operatorname{GrMod}_0(A)$ with coproducts $R=\coprod_{u:j\to k}D(j)$,
$S=\coprod_jD(j)$ and canonical maps $d,c:R\rightrightarrows S$ as in [L5].

[L1] $\operatorname{GrMod}_0(A)$ is abelian, and its kernels, images, cokernels and finite biproducts
are computed degreewise, so exactness is equivalent to exactness degreewise
([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L2] For every family the degreewise direct sum is the coproduct in $\operatorname{GrMod}_0(A)$, so
that category has all small coproducts, and a family of degree-zero maps out of the summands
assembles uniquely ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

[L3] A functor preserves $\mathcal J$-colimits when the image of every colimiting cocone is
colimiting, and it is cocontinuous when it preserves all small colimits
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L4] A functor is right exact when it preserves every finite colimit that exists in its source
category; left and right exactness assert preservation, not existence
([[def-left-exact-and-right-exact-functor]]).

[L5] For a small diagram $D:\mathcal J\to\mathcal C$, if the coproducts $R=\coprod_{u:j\to k}D(j)$
and $S=\coprod_jD(j)$ and the coequalizer of the canonical maps $d,c:R\rightrightarrows S$ exist,
then that coequalizer is a colimit of $D$
([[thm-small-colimits-from-coproducts-and-coequalizers]]).

[L6] In a preadditive category a coequalizer of a parallel pair $f,g:A\rightrightarrows B$ is
exactly a cokernel of $f-g$, and conversely
([[cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference]]).

[L7] An additive functor between additive categories preserves finite biproducts
([[thm-an-additive-functor-preserves-finite-biproducts]]).

[L8] An additive category in which every morphism has a kernel and a cokernel has all finite limits
and all finite colimits
([[thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]]).

[L9] An abelian category is an additive category in which every morphism has a kernel and a cokernel
and the canonical coimage-to-image comparison is an isomorphism ([[def-abelian-category]]).

[L10] An additive category is a preadditive category with all finite biproducts, equivalently one
with a zero object and binary biproducts ([[def-additive-category]]).

[L11] A preadditive category has abelian groups of morphisms with bilinear composition
([[def-preadditive-category]]).

[L12] A functor between preadditive categories is additive when each induced map on hom-groups is a
group homomorphism, equivalently $F(f+g)=Ff+Fg$ for parallel $f,g$ ([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L9] the category $\operatorname{GrMod}_0(A)$ is abelian, hence additive [L10] and preadditive [L11], and by [L2] it has all small coproducts; for a small diagram $D$ the coproducts $R$ and $S$ and the coequalizer of $(d,c)$ therefore exist, and by [L5] that coequalizer, which by [L6] is the cokernel of $c-d$, is a colimit of $D$. In particular every small diagram has a colimit in $\operatorname{GrMod}_0(A)$. [L1, L2, L5, L6, L9, L10, L11]

2.1 Assume $F$ preserves cokernels and all coproducts, and let $Q=\operatorname{coker}(c-d)$ be the colimit of $D$ from step 1.1 with its canonical cocone. Since $F$ preserves coproducts, the maps $F(\jmath_u)$ exhibit $F(R)$ as a coproduct of the $F(D(j))$ and the maps $F(\jmath_j)$ exhibit $F(S)$ as a coproduct of the $F(D(j))$, so $F(d)$ and $F(c)$ are the canonical maps of the same recipe for the composite $FD$; since $F$ preserves cokernels, $F(Q)$ with $F$ of the canonical map is a cokernel of $F(c-d)$, and $F(c-d)=F(c)-F(d)$ by additivity [L12]; by [L6] that cokernel is a coequalizer of $(F(d),F(c))$, so by [L5] applied to $FD$ the object $F(Q)$ with the image cocone is a colimit of $FD$. [step 1.1, L3, L5, L6, L12]

2.2 Conversely, if $F$ is cocontinuous then it preserves every coproduct, because a coproduct of a family is the colimit of the discrete diagram on its index set, and it preserves every cokernel, because the cokernel of a morphism $f$ is the coequalizer of $(f,0)$ by [L6] and hence a colimit over a parallel pair; both index categories are small. [step 1.1, L3, L6]

3.1 Since the small diagram $D$ of step 2.1 was arbitrary, $F$ preserves every small colimit, that is, $F$ is cocontinuous; together with step 2.2 this shows that preservation of all small colimits is equivalent to preservation of cokernels and all coproducts. [step 2.1, step 2.2, L3]

3.2 For the right-exact reformulation: a right exact functor preserves cokernels, since a cokernel is a finite colimit [L4]; conversely, if $F$ preserves cokernels and all coproducts, then it preserves the colimit of every finite diagram, because for finite $\mathcal J$ the coproducts $R$ and $S$ are finite and are finite biproducts of $\operatorname{GrMod}_0(A)$ [L2, L10] and all finite colimits of the source exist [L8], so the computation of step 2.1 with finite index sets applies verbatim; hence such an $F$ is right exact. [step 2.1, step 2.2, L2, L4, L7, L8, L10]

4.1 Combining steps 3.1 and 3.2: $F$ preserves all small colimits if and only if $F$ preserves cokernels and all coproducts if and only if $F$ is right exact and coproduct preserving, so cocontinuity of $F$ is exactly right exactness together with coproduct preservation; the coproducts and cokernels used are the canonical ones of step 1.1, so no choice is made. [step 1.1, step 3.1, step 3.2, L3, L4] ∎

## Remarks

The object class of [[thm-graded-eilenberg-watts-with-coherent-shifts]] may be described either by the right exactness-and-sums condition or by cocontinuity. This is an application of this lemma, not a prerequisite for its proof.

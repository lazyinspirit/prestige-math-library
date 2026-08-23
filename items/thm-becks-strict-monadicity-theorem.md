---
id: thm-becks-strict-monadicity-theorem
kind: theorem
title: "Strict Beck monadicity theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, def-u-split-coequalizer-and-creation-of-their-coequalizers, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs, thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras, thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Theorem VI.7.1"
      url: "https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.5.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $U:\mathcal D\to\mathcal C$ be a right adjoint. Then $U$ is strictly monadic if and only if it strictly creates coequalizers of $U$-split pairs.

Both clauses are on-the-nose: the comparison is an isomorphism of categories, and each supplied split coequalizer has a unique lift with the same apex and legs.

## Facts & Assumptions

**Given:** A right adjoint $U:\mathcal D\to\mathcal C$, a left adjoint $F$, induced monad $T$, and comparison functor $K$.

[L1] The functor $U$ is strictly monadic when $K$ is an isomorphism of categories ([[def-monadic-and-strictly-monadic-functor]]).

[L2] The Eilenberg–Moore forgetful functor strictly creates coequalizers of $U^T$-split pairs ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs]]).

[L3] The functor $U$ strictly creates coequalizers of $U$-split pairs when every supplied splitting has a unique lift on the same apex and legs, and the lifted fork is a coequalizer ([[def-u-split-coequalizer-and-creation-of-their-coequalizers]]).

[L4] The underlying canonical presentation of every algebra is split in the base category ([[thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras]]).

[L5] Every $T$-algebra is the coequalizer in $\mathcal C^T$ of its canonical pair of free algebras ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, if $K$ is an isomorphism then $U=U^TK$ on the nose. Transport through the inverse functor of $K$ preserves the exact apex, legs, and uniqueness in [L2], so $U$ has the strict-creation property in [L3]. [L1, L2, L3]

1.2 For the reverse direction, [L4] makes each lifted canonical pair $U$-split. Strict creation [L3] gives a unique object $H(A,a)$ of $\mathcal D$ on the prescribed underlying apex $A$ and a coequalizer whose underlying map is $a:TA\to A$. Uniqueness and the coequalizer universal property define $H$ on algebra homomorphisms. [L3, L4, construct]

2.1 The functor $K(H(A,a))$ and the given algebra $(A,a)$ are lifts of the same split base fork; [L2] and the canonical coequalizer [L5] make the lift unique, so $KH=1_{\mathcal C^T}$ on objects and morphisms. For $d\in\mathcal D$, its counit fork is the existing lift of the canonical split fork of $K(d)$, so strict uniqueness gives $HK(d)=d$ and the same equality on morphisms. Hence $H$ is a two-sided inverse of $K$, and $U$ is strictly monadic by [L1]. [step 1.2, L1, L2, L5, algebra]

3.1 Step 1.1 proves the forward implication and steps 1.2 and 2.1 prove the reverse implication, establishing the biconditional. [step 1.1, step 2.1] ∎

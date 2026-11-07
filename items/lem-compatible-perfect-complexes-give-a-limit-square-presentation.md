---
id: lem-compatible-perfect-complexes-give-a-limit-square-presentation
kind: lemma
title: Compatible two-term perfect complexes give a limit square presentation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-derived-tensor-product-in-the-bounded-above-setting
- thm-projective-complexes-model-the-bounded-above-derived-category
- lem-top-cohomology-of-derived-base-change
- thm-nakayama-lemma
- thm-splitting-lemma-for-modules
- thm-right-exactness-of-tensor-products
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory
    url: https://arxiv.org/pdf/2401.02946
    locator: §3.2.3, equations (12)–(13); the conditional algebraic construction is given below.
dependency_level: 1
proof_strategy: direct
axiom_use: AC supplies compatible lifts and bounded-above projective comparison maps.
---

## Statement

Assume AC. Let `A₁←A₂←⋯` be a sequence of surjective homomorphisms of commutative rings, each finite free over Z_p and a finite product of local rings, with each transition kernel contained in the source Jacobson radical. Put `A=lim A_n`. For each n let `D_n=[P_n→Q_n]` be a complex in degrees 0 and 1 of finitely generated projective A_n-modules, with `rank(P_n)=rank(Q_n)` on every local factor. Set `M_n=H¹(D_n)`. Suppose each transition is equipped with a derived isomorphism

`A_(n−1)⊗^L_(A_n) D_n ≅ D_(n−1)`

whose induced isomorphism on H¹ identifies `A_(n−1)⊗_(A_n)M_n` with M_(n−1), compatibly through the tower. Then `M=lim M_n` has a square presentation `A^d→A^d→M→0` for some finite d. Its reductions give compatible square presentations of the M_n, and the canonical maps `A_n⊗_A M→M_n` are isomorphisms. The hypotheses require actual complexes, zero virtual rank and derived descent; the Statement does not construct them from Weil–étale cohomology.

## Facts & Assumptions

**Given:** AC, the ring tower, complexes, zero-rank conditions and specified compatible derived isomorphisms in the Statement.

[F1] A bounded-above projective complex represents its derived tensor product, and derived morphisms between such complexes admit chain representatives. [[def-derived-tensor-product-in-the-bounded-above-setting]] [[thm-projective-complexes-model-the-bounded-above-derived-category]]

[F2] With no cohomology above degree one, a supplied derived base-change isomorphism induces the ordinary tensor isomorphism on H¹. [[lem-top-cohomology-of-derived-base-change]]

[F3] Nakayama's lemma applies when the ideal is contained in the Jacobson radical. [[thm-nakayama-lemma]]

[F4] Surjections onto projective modules split. [[thm-splitting-lemma-for-modules]]

[F5] AC is assumed. [[def-axiom-of-choice]]

[F6] Tensor products are right exact. [[thm-right-exactness-of-tensor-products]]

## Proof

**Proof technique:** choose common generators, lift two-term models, and pass to a compact inverse limit.

1.1 By [F2], every transition M_n→M_(n−1) is surjective and its quotient is `A_(n−1)⊗_(A_n)M_n`. Choose finitely many generators of M₁ and compatible lifts in M, using AC. Their images generate every M_n: the kernel of A_n→A₁ is in the Jacobson radical by induction on the tower, so [F3] applies to the finite module M_n. Write `π_n:A_n^d→M_n` for these compatible surjections. [F2, F3, F5, given, choose, construct, induction, algebra]

2.1 For fixed n, lift π_n through `Q_n→M_n` to `f:A_n^d→Q_n`. The map `(f,d_n):A_n^d⊕P_n→Q_n` is surjective and splits by [F4]. Its kernel K_n is finitely generated projective. Projection gives a two-term complex `[K_n→A_n^d]` and the evident map to D_n is a quasi-isomorphism: its degree-one cokernel is M_n and its degree-zero kernel is ker d_n. The split exact sequence gives `K_n⊕Q_n≅A_n^d⊕P_n`, so K_n has rank d on every local factor. Each finite projective module over a local ring is free, hence K_n≅A_n^d because A_n is a finite product of local rings. This gives a square presentation with top surjection π_n. [F4, F5, step 1.1, given, construct, algebra]

3.1 By [F1], the specified derived comparison is represented by a chain map between the base change of the n-th square complex and the (n−1)-st square complex. Its degree-one map induces the identity on the chosen generators in M_(n−1). Its difference from the identity therefore lands in the image of the lower differential; because the degree-one source is free, lift this difference and change the chain map by a homotopy to make its degree-one map exactly the identity. A quasi-isomorphism between two two-term complexes whose degree-one map is the identity has an isomorphism in degree zero: compare their kernels, images and cokernels. Hence the adjusted degree-zero map is invertible. Composing it with the coefficient projection gives a surjective lower transition, while the upper transition is the standard projection. These maps produce compatible square diagrams. [F1, F2, F5, step 2.1, given, construct, algebra]

4.1 The lower transitions differ from standard projections by invertible matrices. Each matrix over A_(n−1) lifts to an invertible matrix over A_n because the kernel lies in the Jacobson radical: lift its entries, and its determinant is a unit modulo the kernel and hence a unit. Recursively changing bases identifies the inverse limit of the lower free modules with A^d; the upper free modules already have limit A^d. The A_n and M_n are finitely generated Z_p-modules and hence compact. Passing to the inverse limit of the compatible exact square diagrams stays exact: for a compatible family in M, the nonempty closed sets of its compatible lifts at finitely many levels have the finite intersection property in the compact product of the free modules. Therefore `A^d→A^d→M→0` is exact, and its reductions recover the square presentations at each level. By the right exactness in [F6], the canonical map `A_n⊗_A M→M_n` is an isomorphism. No Weil–étale duality, perfectness, zero Euler characteristic or derived descent is inferred from the conclusion. [F2, F3, F5, F6, step 1.1, step 3.1, given, construct, induction, algebra] ∎

## Source and authoring record

This supplies only BDL's conditional algebraic assembly from already given perfect complexes, zero virtual ranks and compatible derived descent. The existence of the Weil–étale complexes, their cohomological identification, and the projection formula remain unproved here.

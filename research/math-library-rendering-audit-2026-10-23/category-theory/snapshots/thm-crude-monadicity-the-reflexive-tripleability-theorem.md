---
id: thm-crude-monadicity-the-reflexive-tripleability-theorem
kind: theorem
title: "Data-supplied crude monadicity theorem for reflexive coequalizers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reflexive-pair, def-conservative-functor, thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras, thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.5.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $U:\mathcal D\to\mathcal C$ have a left adjoint. Suppose that a specific coequalizer is supplied for every reflexive pair in $\mathcal D$, that $U$ preserves these coequalizers, and that $U$ reflects isomorphisms. Then $U$ is monadic.

## Facts & Assumptions

**Given:** An adjunction $F\dashv U$ satisfying the three hypotheses in the Statement, with induced monad $T$ and comparison functor $K$.

[L1] A parallel pair $f,g:A\rightrightarrows B$ is reflexive when it has a common section $r:B\to A$ with $fr=gr=1_B$ ([[def-reflexive-pair]]).

[L2] A conservative functor reflects isomorphisms ([[def-conservative-functor]]).

[L3] The canonical presentation of every algebra is split in the base category ([[thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras]]).

[L4] Every $T$-algebra is the coequalizer in $\mathcal C^T$ of its canonical pair of free algebras ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

[L5] The Eilenberg–Moore forgetful functor strictly creates coequalizers of its split pairs ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs]]).

## Proof

**Proof technique:** direct.

1.1 For a $T$-algebra $(A,a)$, the pair $F(TA)\rightrightarrows F(A)$ used in canonical reconstruction has common section $F(\eta_A)$: one composite is the algebra unit law and the other is the adjunction triangle identity. Hence it is reflexive by [L1]. [L1, L3]

2.1 Use the supplied coequalizer $q_A:F(A)\to H(A,a)$ of this reflexive pair. By hypothesis, applying $U$ preserves it. [step 1.1, given]

3.1 The preserved coequalizer $Uq_A$ and the split canonical base coequalizer in [L3] coequalize the same pair, so transport of the splitting makes the underlying fork of $K(q_A)$ split. By [L5], $K(q_A)$ is a coequalizer in $\mathcal C^T$; by [L4], so is the canonical fork ending at $(A,a)$. Their universal properties therefore give an isomorphism $K H(A,a)\cong(A,a)$. [step 2.1, L3, L4, L5]

4.1 For $d\in\mathcal D$, compare the coequalizer of the reflexive counit pair with the counit fork ending at $d$. Their images under $U$ are isomorphic canonical coequalizers, so the comparison morphism becomes an isomorphism under $U$ and is itself an isomorphism by [L2]. [step 3.1, L2]

5.1 The supplied object assignment and coequalizer universality define $H$ on algebra homomorphisms, and uniqueness makes the comparisons in steps 3.1 and 4.1 natural. Thus $H$ is a quasi-inverse to $K$, so $K$ is an equivalence and $U$ is monadic. [step 4.1, given, construct] ∎

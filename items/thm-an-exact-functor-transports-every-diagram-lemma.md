---
id: thm-an-exact-functor-transports-every-diagram-lemma
kind: theorem
title: "An exact functor transports every diagram lemma"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories,
       thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels,
       thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms,
       thm-the-connecting-morphism-exists-and-is-unique,
       thm-snake-lemma-in-an-abelian-category,
       thm-four-lemma-in-an-abelian-category,
       thm-sharp-five-lemma-in-an-abelian-category,
       thm-nine-lemma-in-an-abelian-category,
       thm-the-diagram-lemmas-hold-in-the-opposite-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

Let $F:\mathcal A \to \mathcal B$ be an exact functor between abelian
categories. Then $F$ carries every instance of the short five lemma, snake
lemma, four lemma, sharp five lemma, and nine lemma in $\mathcal A$ to the
corresponding valid instance in $\mathcal B$. For the snake lemma, the
connecting morphism is carried to the connecting morphism under the canonical
kernel and cokernel comparison isomorphisms.

## Facts & Assumptions

**Given:** An exact functor $F:\mathcal A \to \mathcal B$.

[L1] Exactness is equivalent to preserving kernels and cokernels, and one-sided
exactness preserves monomorphisms and epimorphisms
([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]],
[[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]).

[L2] The connecting morphism is characterized uniquely by a pullback-pushout
square, and the named diagram lemmas have already been proved in any abelian
category
([[thm-the-connecting-morphism-exists-and-is-unique]],
[[thm-snake-lemma-in-an-abelian-category]],
[[thm-four-lemma-in-an-abelian-category]],
[[thm-sharp-five-lemma-in-an-abelian-category]],
[[thm-nine-lemma-in-an-abelian-category]],
[[thm-the-diagram-lemmas-hold-in-the-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the functor $F$ preserves short exact sequences, kernels, cokernels, monomorphisms, and epimorphisms. Therefore applying $F$ to any diagram that satisfies the hypotheses of one of the listed lemmas again produces a diagram satisfying the same type of hypotheses in $\mathcal B$. [L1, given]

2.1 For the short five, four, sharp five, and nine lemmas, the conclusions are therefore immediate from the corresponding theorem in $\mathcal B$, namely [L2]. [L1, L2, step 1.1]

2.2 For the snake lemma, $F$ preserves the pullback, pushout, kernel, and cokernel data used in the construction of $\delta$. The resulting morphism in $\mathcal B$ satisfies the same universal-property square, so uniqueness in [L2] identifies it with the connecting morphism of the image diagram. [L1, L2, step 1.1]

3.1 Hence every diagram lemma on this page is transported by an exact functor, with the connecting morphism respected under the canonical comparisons. [step 2.1, step 2.2] ∎

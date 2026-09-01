---
id: thm-braided-coherence-via-underlying-braids
kind: theorem
title: "Braided coherence is controlled by underlying braids"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-braided-monoidal-functor, thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator, thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $\mathcal C$ be a braided monoidal category and let $X$ be an object of
$\mathcal C$. Each **formal canonical composite** on $X^{\otimes n}$ built
from associators, unitors, braidings, and their inverses has an underlying
braid in $B_n$. If two such formal composites have equal underlying braids,
then their interpreted morphisms in $\mathcal C$ are equal. Different formal
braids may, of course, have the same interpretation in a particular braided
category.

## Facts & Assumptions

**Given:** A braided monoidal category $\mathcal C$, an object $X\in\mathcal C$, and two canonical braided endomorphisms of $X^{\otimes n}$.

[L1] Every braided monoidal category is braided-monoidally equivalent to a strict braided one ([[thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]]).

[L2] The braid category is the free strict braided monoidal category on one generator ([[thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator]]).

[L3] A braided monoidal functor preserves canonical composites built from the braiding and tensor structure ([[def-braided-monoidal-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], replace the given braided monoidal category by a braided-monoidally equivalent strict one. Equality may be checked there because an equivalence is faithful on morphisms. [L1, given, choose]

2.1 In the strict model, every formal canonical endomorphism of $X^{\otimes n}$ is built only from the local braidings of adjacent copies of $X$, together with identities, tensoring, and composition. Reading those local crossings before interpretation gives a braid word and hence an element of $B_n$. By [L2], interpreting the formal composite is exactly applying the unique strict braided monoidal functor from the braid category that sends the generating object to $X$. [L2, step 1.1, construct]

3.1 If the two formal canonical composites have the same underlying braid, then step 2.1 identifies their interpretations as the images of the same morphism in the free braid category under the same braided functor. Hence they are equal in the strict model, and therefore equal in the original braided category by step 1.1 and [L3]. [L3, step 1.1, step 2.1, algebra] ∎

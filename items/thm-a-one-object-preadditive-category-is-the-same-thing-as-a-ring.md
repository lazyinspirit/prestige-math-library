---
id: thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring
kind: theorem
title: "A one-object preadditive category is the same thing as a ring"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preadditive-category, def-ring, def-ring-homomorphism, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.2"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "Mike Prest, Modules as exact functors, Rings as categories"
      url: "https://arxiv.org/pdf/1801.08015"
pipeline_run: frontier-20
---

## Statement

To give a one-object preadditive category is exactly to give a ring. More
precisely, if $\mathcal C$ is preadditive with one object $*$, then
$\operatorname{End}_{\mathcal C}(*)$ is a ring under hom-group addition and
composition as multiplication. Conversely, every ring $R$ defines a one-object
preadditive category with endomorphism ring $R$. Under this correspondence,
additive functors are exactly unital ring homomorphisms.

## Facts & Assumptions

**Given:** A preadditive category with one object $*$, or a ring $R$.

[L1] In a preadditive category every hom-set is an abelian group and
composition is bilinear ([[def-preadditive-category]]).

[L2] A ring is an abelian group under addition, a monoid under multiplication,
and a ring homomorphism preserves addition, multiplication, and $1$
([[def-ring]], [[def-ring-homomorphism]]).

[F1] A functor preserves identities and composition
([[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathcal C$ has one object $*$. Put $R:=\operatorname{End}_{\mathcal C}(*)$. By [L1], $R$ is an abelian group under its hom-group addition. The category identity $1_*$ is a multiplicative identity for composition, composition is associative, and the two displayed bilinearity laws in [L1] are exactly the distributive laws. Hence $R$ is a ring. [L1, L2]

1.2 Conversely, let $R$ be a ring. Form a category with one object $*$ and $\operatorname{End}(*)=R$, taking composition to be ring multiplication. The ring multiplication is associative with identity $1_R$, and [L2] gives bilinearity with respect to the additive group law. So this is a preadditive category. [L2]

2.1 If $F$ is an additive functor between one-object preadditive categories, then its action on the unique hom-set preserves addition because $F$ is additive, preserves multiplication because functors preserve composition, and preserves $1$ because functors preserve identities by [F1]. Thus $F$ is a unital ring homomorphism by [L2]. The converse is the same verification in the opposite direction. Steps 1.1 and 1.2 are inverse constructions, so the two notions are the same data. [L2, F1, step 1.1, step 1.2] ∎

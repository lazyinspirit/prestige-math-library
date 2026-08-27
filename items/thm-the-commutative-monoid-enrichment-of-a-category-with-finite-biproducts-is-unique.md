---
id: thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique
kind: theorem
title: "The commutative-monoid enrichment of a category with finite biproducts is unique"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Section 2"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

Let a category with finite biproducts carry a commutative-monoid law on each
hom-set for which composition is bilinear and the given finite biproducts are
biproducts for that enrichment. Then this law is the one defined in
[[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]].
In particular, the commutative-monoid enrichment is unique.

## Facts & Assumptions

**Given:** A category with finite biproducts and a second candidate bilinear
commutative-monoid law $\boxplus$ on its hom-sets.

[L1] Finite biproducts define a canonical addition on every hom-set
([[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]]).

## Proof

**Proof technique:** direct.

1.1 Fix $f,g:A\to B$, and write $\nabla_B:B\oplus B\to B$ for the codiagonal and $i_1,i_2:B\to B\oplus B$ for the coproduct injections. Because composition is bilinear for $\boxplus$, the morphism $i_1f\boxplus i_2g:A\to B\oplus B$ satisfies $p_1(i_1f\boxplus i_2g)=f$ and $p_2(i_1f\boxplus i_2g)=g$, where $p_1,p_2$ are the product projections and the off-diagonal terms vanish by the biproduct zero equations. Thus $i_1f\boxplus i_2g=\langle f,g\rangle$ by the product universal property. [L1, algebra]

2.1 Applying $\nabla_B$ and using bilinearity again gives $\nabla_B\langle f,g\rangle=\nabla_B(i_1f\boxplus i_2g)=\nabla_Bi_1f\boxplus\nabla_Bi_2g=f\boxplus g$, since $\nabla_Bi_1=\nabla_Bi_2=1_B$. But the left-hand side is exactly the canonical sum $f+g$ from [L1]. [L1, step 1.1]

3.1 Therefore $f\boxplus g=f+g$ for every pair of parallel morphisms. So every bilinear commutative-monoid enrichment compatible with the same finite biproducts is forced to equal the canonical one. [step 2.1, L1] ∎

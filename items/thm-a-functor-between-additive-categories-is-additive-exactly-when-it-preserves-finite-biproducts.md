---
id: thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts
kind: theorem
title: "A functor between additive categories is additive exactly when it preserves finite biproducts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, thm-an-additive-functor-preserves-finite-biproducts, thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct, thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.1"
      url: "https://stacks.math.columbia.edu/tag/010M"
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Corollary 2.5(2)"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

For a functor between additive categories, the following are equivalent:

1. the functor is additive;
2. the functor preserves finite biproducts.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$ between additive categories.

[L1] Additive functors preserve finite biproducts
([[thm-an-additive-functor-preserves-finite-biproducts]]).

[L2] Additive categories are preadditive with finite biproducts
([[def-additive-category]]).

[L3] In a preadditive category, finite products are automatically biproducts
([[thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct]]).

[L4] In an additive category, the preadditive hom-group law is a bilinear
commutative-monoid enrichment compatible with the finite biproduct diagrams.
Indeed, product uniqueness gives
$\langle f,g\rangle=i_1f+i_2g$, and bilinearity then gives
$\nabla\langle f,g\rangle=f+g$. By uniqueness this is the canonical biproduct
addition
([[thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 The implication from 1 to 2 is exactly [L1]. [L1]

1.2 Assume $F$ preserves finite biproducts. In an additive category, for parallel morphisms $f,g:A\to B$, the pairing into $B\oplus B$ is the unique morphism $\langle f,g\rangle$ with projections $f$ and $g$, and the codiagonal is the unique morphism $\nabla_B:B\oplus B\to B$ with both composites equal to $1_B$. Since $F$ preserves the relevant biproducts, it preserves those pairings and codiagonals. [L2, L3]

1.3 By [L4], the hom-group addition in an additive category is the canonical
biproduct addition. [L2, L4, step 1.2]
$f+g=\nabla_B\langle f,g\rangle$. Step 1.2 therefore gives
$F(f+g)=F(\nabla_B)F(\langle f,g\rangle)=\nabla_{FB}\langle Ff,Fg\rangle=Ff+Fg$.
So $F$ is additive. [L2, L4, step 1.2]

2.1 Steps 1.1 and 1.3 prove the equivalence. [step 1.1, step 1.3] ∎

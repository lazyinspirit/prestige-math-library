---
id: thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct
kind: theorem
title: "In a preadditive category, a finite product is automatically a biproduct"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preadditive-category, thm-the-opposite-of-a-preadditive-category-is-preadditive, thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemma 12.3.4"
      url: "https://stacks.math.columbia.edu/tag/09SE"
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Lemma 2.4"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Statement

In a preadditive category, every finite product is a biproduct. Hence for a
preadditive category the existence of all finite products, all finite
coproducts, and all finite biproducts are equivalent conditions.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ with a finite product.

[L1] In a preadditive category hom-sets are abelian groups and composition is
bilinear ([[def-preadditive-category]]).

[L2] In a preadditive category, an object is initial exactly when it is
terminal ([[thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]]).

[L3] The opposite of a preadditive category is preadditive
([[thm-the-opposite-of-a-preadditive-category-is-preadditive]]).

## Proof

**Proof technique:** direct.

1.1 For the empty family, a finite product is a terminal object, so [L2] makes it initial as well. Hence the empty product is already the empty biproduct. [L2]

2.1 For a binary product $P=A\times B$ with projections $p_A$ and $p_B$, step 1.1 gives a zero object and therefore zero morphisms. Define $i_A:A\to P$ and $i_B:B\to P$ by the product equations $p_Ai_A=1_A$, $p_Bi_A=0$, $p_Ai_B=0$, and $p_Bi_B=1_B$. These exist uniquely by the product universal property. [L1, step 1.1, construct]

3.1 Let $u:=i_Ap_A+i_Bp_B:P\to P$. By bilinearity from [L1], $p_Au=p_A$ and $p_Bu=p_B$. Since morphisms into a product are determined by their composites with the projections, $u=1_P$. Now for any $f:A\to X$ and $g:B\to X$, define $h:=fp_A+gp_B$. Then $hi_A=f$ and $hi_B=g$, and if $k:P\to X$ also has those composites, the identity $u=1_P$ gives $k=ku=ki_Ap_A+ki_Bp_B=fp_A+gp_B=h$. So $(P,i_A,i_B)$ is a coproduct. [L1, step 2.1]

4.1 Iterating the binary argument and using step 1.1 gives that every finite product is a finite biproduct. Applying the same statement to $\mathcal C^{\mathrm{op}}$, which is preadditive by [L3], shows that finite coproducts are equivalent as well. [L3, step 1.1, step 3.1] ∎

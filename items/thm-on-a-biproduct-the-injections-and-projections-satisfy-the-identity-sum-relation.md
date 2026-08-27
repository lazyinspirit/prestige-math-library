---
id: thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation
kind: theorem
title: "On a biproduct, the injections and projections satisfy the identity-sum relation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-biproduct-data-characterisation-without-addition, thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]
justified_by: []
aliases: []
landmark: false
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
    - title: "The Stacks Project, Section 12.3, Remark 12.3.6"
      url: "https://stacks.math.columbia.edu/tag/09SE"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Statement

Let $A\oplus B$ be a biproduct in a category with finite biproducts, with
injections $i_A,i_B$ and projections $p_A,p_B$. Then

$$i_Ap_A+i_Bp_B=1_{A\oplus B}.$$

Conversely, if an object $X$ in a semiadditive category is a product of $A$ and
$B$ with projections $p_A,p_B$, and if morphisms $i_A:A\to X$ and $i_B:B\to X$
satisfy the zero equations together with $i_Ap_A+i_Bp_B=1_X$, then $X$ is also
their coproduct and hence their biproduct.

## Facts & Assumptions

**Given:** A semiadditive category and a biproduct or product diagram for
$A,B$.

[L1] Biproduct data are characterized by the product and coproduct universal
properties plus the zero equations
([[thm-biproduct-data-characterisation-without-addition]]).

[L2] A semiadditive category has a commutative-monoid law on hom-sets with
bilinear composition
([[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X=A\oplus B$ is a biproduct. By [L1], the maps satisfy $p_Ai_A=1_A$, $p_Bi_B=1_B$, $p_Ai_B=0$, and $p_Bi_A=0$. Therefore $p_A(i_Ap_A+i_Bp_B)=p_A$ and $p_B(i_Ap_A+i_Bp_B)=p_B$ by bilinearity from [L2]. Since $X$ is the product of $A$ and $B$, these equalities force $i_Ap_A+i_Bp_B=1_X$. [L1, L2]

1.2 Conversely, assume $(X,p_A,p_B)$ is a product and that $i_A,i_B$ satisfy the same zero equations together with $i_Ap_A+i_Bp_B=1_X$. For any $f:A\to Y$ and $g:B\to Y$, define $h:=fp_A+gp_B:X\to Y$. Then $hi_A=f$ and $hi_B=g$ by the zero equations and bilinearity. [L1, L2, construct]

2.1 If $k:X\to Y$ also satisfies $ki_A=f$ and $ki_B=g$, then using the identity-sum relation and bilinearity gives $k=k1_X=k(i_Ap_A+i_Bp_B)=ki_Ap_A+ki_Bp_B=fp_A+gp_B=h$. So $(X,i_A,i_B)$ is a coproduct. Together with the zero equations, [L1] makes $X$ a biproduct. [L1, L2, step 1.2]

3.1 This proves both the identity-sum relation on a biproduct and the converse recovery of the coproduct structure from that relation. [step 1.1, step 2.1] ∎

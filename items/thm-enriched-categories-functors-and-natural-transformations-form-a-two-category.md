---
id: thm-enriched-categories-functors-and-natural-transformations-form-a-two-category
kind: theorem
title: "Set-object enriched categories, enriched functors, and enriched natural transformations form a strict 2-category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-enriched-functor, def-enriched-natural-transformation, def-strict-two-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.2"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Section 2.3"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Statement

Fix a locally small monoidal category $\mathcal V$. Then the $\mathcal V$-categories
with a set of objects, the $\mathcal V$-functors between them, and the
$\mathcal V$-natural transformations between those functors form a strict
2-category in the sense of [[def-strict-two-category]].

## Facts & Assumptions

**Given:** A locally small monoidal category $\mathcal V$.

[L1] A $\mathcal V$-category has a set of objects, hom-objects in $\mathcal V$,
composition morphisms, and identity morphisms satisfying associativity and the
unit laws ([[def-enriched-category]]).

[L2] A $\mathcal V$-functor is a function on objects together with hom-object
maps compatible with enriched composition and units
([[def-enriched-functor]]).

[L3] A $\mathcal V$-natural transformation is a family of components
$\mathbf 1\to\mathcal B(TA,SA)$ satisfying the enriched naturality law
([[def-enriched-natural-transformation]]).

[L4] A strict 2-category consists of objects, hom-categories, identity
1-morphisms, and horizontally composable functors satisfying strict
associativity and unit laws ([[def-strict-two-category]]).

## Proof

**Proof technique:** direct.

1.1 Take objects to be the set-object $\mathcal V$-categories. For fixed $\mathcal A,\mathcal B$, let the objects of the hom-category $\mathcal V\text{-}\mathbf{Cat}(\mathcal A,\mathcal B)$ be the $\mathcal V$-functors $\mathcal A\to\mathcal B$ from [L2], and let the morphisms be the $\mathcal V$-natural transformations from [L3]. The identity 2-cell on a functor $T$ has components $j_{TA}:\mathbf 1\to\mathcal B(TA,TA)$ from [L1], and vertical composition of $\alpha:T\Rightarrow S$ and $\beta:S\Rightarrow R$ is defined componentwise by $\mathbf 1\cong\mathbf 1\otimes\mathbf 1\xrightarrow{\beta_A\otimes\alpha_A}\mathcal B(SA,RA)\otimes\mathcal B(TA,SA)\xrightarrow{M^\mathcal B}\mathcal B(TA,RA)$. Associativity and the unit laws for this vertical composition follow directly from the associativity and unit diagrams of [L1]. [L1, L2, L3, given]

1.2 Horizontal composition of 1-morphisms is ordinary composition of $\mathcal V$-functors: if $T:\mathcal A\to\mathcal B$ and $U:\mathcal B\to\mathcal C$, then $(UT)_{A,B}=U_{TA,TB}\circ T_{A,B}$ and the compatibility axioms follow from those in [L2]. Whiskering of 2-cells is also componentwise: $(U\alpha)_A:=U_{TA,SA}\circ\alpha_A$ and $(\alpha H)_A:=\alpha_{HA}$. These formulas preserve naturality because [L2] and [L3] are already written against enriched composition. [L2, L3, algebra]

2.1 Step 1.1 gives a category of 1-morphisms and 2-morphisms for every ordered pair of objects, and step 1.2 gives horizontal composition functors between those hom-categories. The associativity and unit laws are strict because they are literal equalities of composed functions and of componentwise composites. Thus [L4] applies. [L4, step 1.1, step 1.2] ∎

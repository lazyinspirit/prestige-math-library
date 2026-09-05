---
id: thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor
kind: theorem
title: "Change of base extends to enriched functors and natural transformations as a 2-functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories, def-enriched-functor, def-enriched-natural-transformation]
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
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Propositions 4.2.2 and 4.2.3 and Theorem 4.2.4"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Statement

Let $\mathcal V$ and $\mathcal W$ be locally small monoidal categories. For a
lax monoidal functor $F:\mathcal V\to\mathcal W$, the change-of-base
construction extends from enriched categories to enriched functors and enriched
natural transformations and therefore defines a strict 2-functor
$F_*:\mathcal V\text{-}\mathbf{Cat}\to\mathcal W\text{-}\mathbf{Cat}$.

## Facts & Assumptions

**Given:** Locally small monoidal categories $\mathcal V,\mathcal W$ and a lax monoidal functor $F:\mathcal V\to\mathcal W$.

[L1] Change of base sends each $\mathcal V$-category $\mathcal A$ to the
$\mathcal W$-category $F_*\mathcal A$ with the same objects and hom-objects
obtained by applying $F$ ([[thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories]]).

[L2] An enriched functor is a hom-object map compatible with enriched
composition and identities ([[def-enriched-functor]]).

[L3] An enriched natural transformation is a family of unit-to-hom morphisms
satisfying the enriched naturality law
([[def-enriched-natural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 If $T:\mathcal A\to\mathcal B$ is a $\mathcal V$-functor, keep the same object map and apply $F$ to each hom-object map $T_{A,B}:\mathcal A(A,B)\to\mathcal B(TA,TB)$. Because [L1] changed both source and target hom-objects by $F$, the same compatibility diagrams from [L2] commute after applying $F$, so this gives a $\mathcal W$-functor $F_*T:F_*\mathcal A\to F_*\mathcal B$. [L1, L2, given]

1.2 If $\alpha:T\Rightarrow S$ is a $\mathcal V$-natural transformation, compose each component $\mathbf 1_{\mathcal V}\to\mathcal B(TA,SA)$ with the lax unit map $\mathbf 1_{\mathcal W}\to F(\mathbf 1_{\mathcal V})$ and then with $F$ of the component. The enriched naturality equation from [L3] is preserved because [L1] builds the target hom-objects and compositions by the same laxity data. So this yields a $\mathcal W$-natural transformation $F_*\alpha$. [L1, L3, construct]

2.1 Identity 1-cells, composite 1-cells, identity 2-cells, and vertical and horizontal compositions are preserved strictly because the construction is objectwise and applies the same functor $F$ to every structural morphism. Hence $F_*$ is a strict 2-functor. [step 1.1, step 1.2] ∎

---
id: thm-naturality-of-the-connecting-morphism
kind: theorem
title: "Naturality of the connecting morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       def-the-arrow-category-of-an-abelian-category,
       thm-the-connecting-morphism-exists-and-is-unique]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.18"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Proposition 1.3.4"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Statement

Given a morphism between two pieces of snake data in the Mac Lane shape in an
abelian category, the induced square between their connecting morphisms
commutes.

## Facts & Assumptions

**Given:** A commutative ladder between two Mac Lane snake diagrams.

[L1] The arrow category of an abelian category is again abelian ([[def-the-arrow-category-of-an-abelian-category]]).

[L2] The connecting morphism exists and is unique for Mac Lane snake diagrams ([[thm-the-connecting-morphism-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Regard each vertical arrow of the given ladder as an object of the arrow category $\mathcal A^{\to}$. Because kernels, cokernels, pullbacks, and pushouts in $\mathcal A^{\to}$ are computed componentwise, the entire ladder is again a Mac Lane snake diagram in $\mathcal A^{\to}$. [L1, L2, given]

2.1 Applying [L2] in $\mathcal A^{\to}$ produces a connecting morphism between the arrow objects $$\ker(\gamma) \to \operatorname{coker}(\alpha).$$ Read componentwise in $\mathcal A$, that morphism is exactly the pair consisting of the two ordinary connecting morphisms together with the comparison square between them. [L2, step 1.1, construct]

3.1 The defining square for the arrow-category connecting morphism commutes by construction, and uniqueness in [L2] forces that componentwise square to be the naturality square for the two ordinary connecting morphisms. Therefore the connecting morphism is natural. [L2, step 2.1] ∎

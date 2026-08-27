---
id: cor-hom-functors-on-a-preadditive-category-are-left-exact
kind: corollary
title: "Hom functors on a preadditive category are left exact"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-opposite-of-a-preadditive-category-is-preadditive, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups, thm-representable-functors-preserve-small-limits]
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
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Let $\mathcal C$ be a preadditive category and $A$ an object of $\mathcal C$.
Then the covariant hom-functor $\mathcal C(A,-):\mathcal C\to\mathbf{Ab}$ and
the contravariant hom-functor $\mathcal C(-,A):\mathcal C^{\mathrm{op}}\to\mathbf{Ab}$
preserve every existing finite limit. In particular, they are left exact.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ and an object $A$.

[L1] In a preadditive category, the hom-functors take values in abelian groups
([[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]).

[L2] Every covariantly representable functor to $\mathbf{Set}$ preserves all
existing small limits ([[thm-representable-functors-preserve-small-limits]]).

[L3] The opposite of a preadditive category is preadditive
([[thm-the-opposite-of-a-preadditive-category-is-preadditive]]).

## Proof

**Proof technique:** direct.

1.1 The underlying Set-valued functor of $\mathcal C(A,-)$ is covariantly representable, so [L2] says it preserves every existing small limit and hence every existing finite limit. By [L1], its values and structure maps already lie in $\mathbf{Ab}$, so this is exactly left exactness as an $\mathbf{Ab}$-valued functor. [L1, L2]

1.2 By [L3], the opposite category $\mathcal C^{\mathrm{op}}$ is again preadditive. The contravariant hom-functor $\mathcal C(-,A)$ is the covariantly representable functor $\mathcal C^{\mathrm{op}}(A,-)$, so [L2] applied in $\mathcal C^{\mathrm{op}}$ gives the same finite-limit preservation there. Again [L1] says its values lie in $\mathbf{Ab}$. [L1, L2, L3]

2.1 Therefore both hom-functors are left exact. This is the representable-functor theorem applied once in $\mathcal C$ and once in $\mathcal C^{\mathrm{op}}$, with no separate elementwise exactness computation. [step 1.1, step 1.2] ∎

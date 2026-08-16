---
id: cex-a-reflective-inclusion-need-not-preserve-colimits
kind: counterexample
title: "A reflective inclusion need not preserve even the empty colimit"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The singleton subcategory must be reflective while its initial object is not ambient-initial."
  counterexample_search: "Checked the reflector X -> 1, the initial object 1 in the singleton subcategory, and the ambient initial object emptyset."
deps: [def-reflective-subcategory-and-reflector, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, thm-the-adjunction-hom-set-bijection-under-local-smallness]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $\mathcal A$ be the full subcategory of $\mathbf{Set}$ whose only object is
a fixed singleton $1$. Its inclusion $I:\mathcal A\hookrightarrow\mathbf{Set}$
is reflective, but it does not preserve the empty colimit.

## Facts & Assumptions

**Given:** The full singleton subcategory $\mathcal A\subseteq\mathbf{Set}$.

[L1] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

[L2] Empty colimits are precisely initial objects ([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[L3] For locally small categories, an adjunction determines hom-set bijections natural in both variables, and conversely every such natural family of bijections determines a unique unit and counit satisfying the triangle identities, hence a unique adjunction structure ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Verification

**Proof technique:** counterexample.

1.1 The constant functor $R:\mathbf{Set}\to\mathcal A$ at $1$ is left adjoint to $I$: for every set $X$, both $\operatorname{Hom}_{\mathcal A}(1,1)$ and $\operatorname{Hom}_{\mathbf{Set}}(X,1)$ contain one map, and these bijections are natural in $X$; by the converse clause of [L3] they determine a unit and counit satisfying the triangle identities, hence an adjunction $R\dashv I$, so [L1] makes $\mathcal A$ reflective. [L1, L3]

1.2 The sole object $1$ is initial in $\mathcal A$, so it is the empty colimit there by [L2]. Its image $I(1)=1$ is not initial in $\mathbf{Set}$, whose initial object is $\varnothing$. [L2]

2.1 Therefore the included empty colimit is not an ambient colimit, so $I$ does not preserve even this colimit. [step 1.1, step 1.2] ∎

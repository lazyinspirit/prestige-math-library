---
id: fs-every-reflective-subcategory-is-closed-under-colimits
kind: false-statement
title: "FALSE: Every reflective subcategory is closed under ambient colimits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, thm-the-adjunction-hom-set-bijection-under-local-smallness]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, corollary 4.5.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim.** If a full subcategory is reflective, then the colimit in the
ambient category of every diagram valued in the subcategory again lies in the
subcategory.

## Facts & Assumptions

**Given:** The full subcategory $\mathcal A\subseteq\mathbf{Set}$ whose only
object is a fixed singleton $1$.

[L1] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

[L2] The colimit of the empty diagram is an initial object ([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[L3] For locally small categories, an adjunction determines hom-set bijections natural in both variables, and conversely every such natural family of bijections determines a unique unit and counit satisfying the triangle identities, hence a unique adjunction structure ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Refutation

**Proof technique:** counterexample.

1.1 The constant functor $R:\mathbf{Set}\to\mathcal A$ with value $1$ is left adjoint to the inclusion: both $\operatorname{Hom}_{\mathcal A}(1,1)$ and $\operatorname{Hom}_{\mathbf{Set}}(X,1)$ are singletons, naturally in $X$. By the converse clause of [L3] that natural family of bijections determines a unit and counit satisfying the triangle identities, hence an adjunction $R\dashv I$, and [L1] then makes $\mathcal A$ reflective. [L1, L3]

1.2 In $\mathcal A$, the object $1$ is initial and is therefore the empty colimit. In $\mathbf{Set}$ the empty colimit is $\varnothing$ by [L2], and $\varnothing$ is not an object of $\mathcal A$. [L2]

2.1 Thus an ambient colimit of a diagram valued in a reflective subcategory need not remain in that subcategory, refuting the claim. [step 1.1, step 1.2] ∎

---
id: fs-a-reflective-inclusion-creates-colimits
kind: false-statement
title: "FALSE: A reflective inclusion creates colimits"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-preservation-reflection-creation-continuity-and-cocontinuity, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, thm-the-adjunction-hom-set-bijection-under-local-smallness]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, corollary 4.5.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim.** The inclusion of every reflective full subcategory creates
all small colimits.

## Facts & Assumptions

**Given:** The inclusion $I:\mathcal A\hookrightarrow\mathbf{Set}$ of the full
subcategory whose only object is a fixed singleton $1$.

[L1] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

[L2] Ordinary creation of a colimit requires every target colimiting cocone to be isomorphic to the image of a source colimiting cocone ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L3] The empty colimit is an initial object ([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[L4] For locally small categories, an adjunction determines hom-set bijections natural in both variables, and conversely every such natural family of bijections determines a unique unit and counit satisfying the triangle identities, hence a unique adjunction structure ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Refutation

**Proof technique:** counterexample.

1.1 The constant functor $R:\mathbf{Set}\to\mathcal A$ at $1$ is left adjoint to $I$, since the unique maps $X\to1$ give hom-set bijections $\operatorname{Hom}_{\mathcal A}(R X,1)\cong\operatorname{Hom}_{\mathbf{Set}}(X,I1)$ natural in $X$; by the converse clause of [L4] these determine a unit and counit satisfying the triangle identities, hence an adjunction $R\dashv I$. Thus $I$ is a reflective inclusion by [L1]. [L1, L4]

1.2 The empty diagram in $\mathbf{Set}$ has colimit $\varnothing$, whereas the empty diagram in $\mathcal A$ has colimit $1$, by [L3]. Since $I(1)=1\not\cong\varnothing$, the ambient colimiting cocone is not isomorphic to the image of any cocone with an apex in $\mathcal A$. [L3]

2.1 This violates the creation requirement [L2], so a reflective inclusion need not create colimits. [step 1.1, step 1.2, L2] ∎

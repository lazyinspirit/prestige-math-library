---
id: cex-a-reflective-inclusion-need-not-preserve-colimits
kind: counterexample
title: "A reflective inclusion need not preserve even the empty colimit"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The singleton subcategory must be reflective while its initial object is not ambient-initial."
  counterexample_search: "Checked the reflector X -> 1, the initial object 1 in the singleton subcategory, and the ambient initial object emptyset."
deps: [def-reflective-subcategory-and-reflector, prop-empty-limits-and-colimits-are-terminal-and-initial-objects]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
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

## Verification

**Proof technique:** counterexample.

1.1 The constant functor $R:\mathbf{Set}\to\mathcal A$ at $1$ is left adjoint to $I$: for every set $X$, both $\operatorname{Hom}_{\mathcal A}(1,1)$ and $\operatorname{Hom}_{\mathbf{Set}}(X,1)$ contain one map. Hence [L1] makes $\mathcal A$ reflective. [L1]

1.2 The sole object $1$ is initial in $\mathcal A$, so it is the empty colimit there by [L2]. Its image $I(1)=1$ is not initial in $\mathbf{Set}$, whose initial object is $\varnothing$. [L2]

2.1 Therefore the included empty colimit is not an ambient colimit, so $I$ does not preserve even this colimit. [step 1.1, step 1.2] ∎

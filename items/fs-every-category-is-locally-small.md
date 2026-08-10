---
id: fs-every-category-is-locally-small
kind: false-statement
title: "Every category is locally small"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-small-locally-small-and-large-category, def-ordinal, lem-ordinal-trichotomy, thm-burali-forti, rem-category-theory-class-and-size-conventions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, sections 1.1 and 1.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**FALSE.** Every category is locally small.

## Facts & Assumptions

**Given:** The definable class $\mathrm{Ord}$ of all ordinals, interpreted under the category-size convention in [[rem-category-theory-class-and-size-conventions]].

[L1] A category is locally small exactly when every hom-collection is a set ([[def-small-locally-small-and-large-category]]).

[L2] Ordinals are linearly ordered by membership, so any two have a maximum ([[def-ordinal]], [[lem-ordinal-trichotomy]]).

[L3] There is no set of all ordinals ([[thm-burali-forti]]).

## Refutation

**Proof technique:** direct.

1.1 Define a one-object category $\mathcal O$ with object $*$ and $\operatorname{Hom}_{\mathcal O}(*,*)=\mathrm{Ord}$. Take $0$ as the identity and define $\beta\circ\alpha=\max\{\alpha,\beta\}$. [given, L2, L3]

2.1 Maximum is associative, and $\max\{0,\alpha\}=\alpha=\max\{\alpha,0\}$ for every ordinal $\alpha$. Thus the data in step 1.1 satisfy the category axioms under the given convention. [step 1.1, given, L2]

2.2 Its sole hom-collection is $\mathrm{Ord}$, which is not a set by [L3]. Hence $\mathcal O$ is not locally small by [L1]. [step 1.1, L1, L3]

3.1 The category $\mathcal O$ of step 2.1 refutes the assertion that every category is locally small. [step 2.1, step 2.2] ∎

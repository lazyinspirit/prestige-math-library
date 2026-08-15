---
id: cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete
kind: corollary
title: "A category satisfying the explicit SAFT intersection hypotheses is cocomplete"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-special-adjoint-functor-theorem-objectwise-form, thm-special-adjoint-functor-theorem-functor-form, prop-size-of-functor-categories, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-limit-and-colimit-of-a-diagram]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, corollary 4.7.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be complete and locally small with a supplied small coseparating set. Assume either the supplied-well-powering branch or the direct class-intersection and preservation branch of [[thm-special-adjoint-functor-theorem-objectwise-form]] for every diagonal functor $\Delta:\mathcal C\to\mathcal C^{\mathcal J}$ with $\mathcal J$ small. Then $\mathcal C$ is cocomplete.

If the resulting initial comma objects are supplied for every diagram, they assemble into the colimit functor left adjoint to $\Delta$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement and a small category $\mathcal J$.

[L1] For small $\mathcal J$, the functor category $\mathcal C^{\mathcal J}$ is locally small under the displayed size hypotheses ([[prop-size-of-functor-categories]]).

[L2] Completeness and cocompleteness mean existence of all small limits and colimits ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L3] A colimit of $D:\mathcal J\to\mathcal C$ is precisely an initial object of the comma category $(D\downarrow\Delta)$ ([[def-limit-and-colimit-of-a-diagram]]).

[L4] Objectwise SAFT supplies the required initial comma object under either explicit intersection branch, and supplied initial objects assemble into a left adjoint ([[thm-special-adjoint-functor-theorem-objectwise-form]], [[thm-special-adjoint-functor-theorem-functor-form]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal $\Delta$ preserves all small limits because limits in a functor category are computed objectwise. Its domain has the stated SAFT data and its codomain is locally small by [L1], so [L4] gives an initial object in $(D\downarrow\Delta)$ for every $D\in\mathcal C^{\mathcal J}$, including the empty diagram. [L1, L2, L4]

2.1 By [L3], that initial object is a colimit of $D$. Since $\mathcal J$ and $D$ were arbitrary, [L2] makes $\mathcal C$ cocomplete. When the initial objects are supplied as a family, the functor form in [L4] identifies their assembly as the colimit functor. [step 1.1, L2, L3, L4] ∎

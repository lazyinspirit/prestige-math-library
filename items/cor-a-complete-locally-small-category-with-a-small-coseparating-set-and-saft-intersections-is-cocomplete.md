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

[L3] A colimit of $D:\mathcal J\to\mathcal C$ is an initial object $(Q,\rho)$ of $\operatorname{Cocone}(D)$: for every cocone $(X,\xi)$ there is a unique $u:Q\to X$ with $u\rho_j=\xi_j$ for every $j$ ([[def-limit-and-colimit-of-a-diagram]]).

[L4] Objectwise SAFT supplies the required initial comma object under either explicit intersection branch, and supplied initial objects assemble into a left adjoint ([[thm-special-adjoint-functor-theorem-objectwise-form]], [[thm-special-adjoint-functor-theorem-functor-form]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal $\Delta$ preserves all small limits. Let $E:\mathcal K\to\mathcal C$ be a small diagram with limiting cone $(\lim E,\lambda_k)$ in $\mathcal C$, which exists by the completeness in [L2]. A cone over $\Delta E$ with apex $G\in\mathcal C^{\mathcal J}$ is a family of maps $G\to\Delta E(k)$ natural in $\mathcal J$ and compatible over $\mathcal K$, so at each $j\in\mathcal J$ its components form a cone over $E$ with apex $G(j)$; the universal property of $\lim E$ gives a unique map $G(j)\to\lim E$ for each $j$, and uniqueness makes that family automatically natural in $\mathcal J$. Hence $(\Delta(\lim E),\Delta\lambda_k)$ is a limiting cone and $\Delta$ is continuous, which is the hypothesis both branches of [L4] require. No selection is involved, because each component mediator is unique. Its domain has the stated SAFT data and its codomain is locally small by [L1], so [L4] gives an initial object in $(D\downarrow\Delta)$ for every $D\in\mathcal C^{\mathcal J}$, including the empty diagram. [L1, L2, L4]

2.1 An object of $(D\downarrow\Delta)$ is a natural transformation $D\Rightarrow\Delta X$, that is, a family $\xi_j:D(j)\to X$ commuting with the arrows of $\mathcal J$ — exactly a cocone under $D$ with vertex $X$ — and its morphisms are the maps of vertices commuting with those families, exactly the morphisms of $\operatorname{Cocone}(D)$. So the initial object of step 1.1 is an initial cocone, which by [L3] is a colimit of $D$. Since $\mathcal J$ and $D$ were arbitrary, [L2] makes $\mathcal C$ cocomplete. When the initial objects are supplied as a family, the functor form in [L4] identifies their assembly as the colimit functor. [step 1.1, L2, L3, L4] ∎

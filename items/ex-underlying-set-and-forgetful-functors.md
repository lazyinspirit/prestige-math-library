---
id: ex-underlying-set-and-forgetful-functors
kind: example
title: "Underlying-set and structure-forgetting functors among $\\mathbf{Grp}$, $\\mathbf{Ring}$, $\\mathbf{Vect}_F$, $R\\text{-}\\mathbf{Mod}$, $\\mathbf{Top}$, and $\\mathbf{Set}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-sets-and-functions-form-category-set, prop-groups-and-homomorphisms-form-category-grp, prop-rings-and-homomorphisms-form-category-ring, prop-vector-spaces-and-linear-maps-form-category-vect, prop-modules-and-homomorphisms-form-category-rmod, prop-topological-spaces-and-continuous-maps-form-category-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.3.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Each familiar category of structured objects has an underlying-set functor to
$\mathbf{Set}$. It sends an object to its carrier and a morphism to its
underlying function.

## Facts & Assumptions

**Given:** The five standard structured categories named in the example.

[L1] Sets and functions form $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[L2] Groups, unital rings, vector spaces, modules, and spaces with their standard morphisms form categories ([[prop-groups-and-homomorphisms-form-category-grp]], [[prop-rings-and-homomorphisms-form-category-ring]], [[prop-vector-spaces-and-linear-maps-form-category-vect]], [[prop-modules-and-homomorphisms-form-category-rmod]], [[prop-topological-spaces-and-continuous-maps-form-category-top]]).

## Verification

**Proof technique:** direct.

1.1 For each of the five structured categories in [L2], define $U$ on objects by $U(A)=$ the carrier of $A$, and define $U(f)$ to be the same ordered-pair relation as the structure-preserving map $f$, now regarded only as a function. [L1, L2]

2.1 The underlying function of the identity morphism of $A$ is $1_{U(A)}$, so $U(1_A)=1_{U(A)}$. [step 1.1]

2.2 Composition in every category in [L2] is composition of the underlying functions. Hence $U(g\circ f)=U(g)\circ U(f)$. [step 1.1, L2]

3.1 Thus the underlying-set assignments from $\mathbf{Grp}$, $\mathbf{Ring}$, $\mathbf{Vect}_F$, $R\text{-}\mathbf{Mod}$, and $\mathbf{Top}$ to $\mathbf{Set}$ are functors. They forget structure but not the identity and composition laws. [step 2.1, step 2.2] ∎

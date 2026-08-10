---
id: ex-product-with-a-fixed-space-is-a-functor
kind: example
title: "For a fixed space $X$, product with $X$ defines an endofunctor of $\\mathbf{Top}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, prop-topological-spaces-and-continuous-maps-form-category-top, thm-product-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.3.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Fix a topological space $X$. The assignment $Y\mapsto X\times Y$ is an
endofunctor of $\mathbf{Top}$.

## Facts & Assumptions

**Given:** A fixed topological space $X$.

[L1] Topological spaces and continuous maps form $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

[L2] A map into a product is continuous exactly when its coordinate maps are continuous ([[thm-product-universal-property]]).

[L3] An endofunctor must preserve identities and composition ([[def-functor-and-contravariant-functor]]).

## Verification

**Proof technique:** direct.

1.1 Define $T_X(Y)=X\times Y$ with the product topology. For a continuous $f:Y\to Z$, define $T_X(f)=1_X\times f$ by $(x,y)\mapsto(x,f(y))$. [L1]

2.1 Its coordinate maps are the first projection and $f$ after the second projection, so $T_X(f)$ is continuous by [L2]. [step 1.1, L2]

2.2 Pointwise, $1_X\times1_Y=1_{X\times Y}$ and $(1_X\times g)(1_X\times f)=1_X\times(gf)$. [step 1.1]

3.1 Thus $T_X$ sends every morphism of $\mathbf{Top}$ to a morphism and obeys the two functor equations. It is an endofunctor by [L3]. [step 2.1, step 2.2, L1, L3] ∎

---
id: ex-singletons-define-a-natural-transformation-to-the-power-set-functor
kind: example
title: "Singletons define a natural transformation from the identity functor on sets to the covariant power-set functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, def-natural-transformation, prop-sets-and-functions-form-category-set, def-power-set, def-subset-and-proper-subset, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Chapter II"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: null
---

## Example

Sending an element to its singleton is natural when the power-set construction
acts covariantly by direct image.

## Facts & Assumptions

**Given:** Sets $X,Y$ and a function $f:X\to Y$.

[L1] The power set consists of all subsets, and direct image sends subsets of $X$ to subsets of $Y$ ([[def-power-set]], [[def-subset-and-proper-subset]], [[def-image-and-preimage-under-a-relation]]).

[L2] Sets form a category, and functors and natural transformations obey identity, composition, and naturality equations ([[prop-sets-and-functions-form-category-set]], [[def-functor-and-contravariant-functor]], [[def-natural-transformation]]).

## Verification

**Proof technique:** direct.

1.1 Define $\mathcal P(X)$ to be the power set of $X$ and $\mathcal P(f)(S)=f[S]$. Direct images satisfy $1_X[S]=S$ and $(gf)[S]=g[f[S]]$, so $\mathcal P:\mathbf{Set}\to\mathbf{Set}$ is a functor. [L1, L2]

1.2 Define $\eta_X:X\to\mathcal P(X)$ by $\eta_X(x)=\{x\}$. [L1]

2.1 For every $x\in X$, $(\mathcal P(f)\eta_X)(x)=f[\{x\}]=\{f(x)\}=(\eta_Yf)(x)$. Therefore $\mathcal P(f)\eta_X=\eta_Yf$. [step 1.1, step 1.2, L1]

3.1 The equality in step 2.1 is the naturality square for every function $f$. Hence the singleton maps are the components of a natural transformation $\eta:1_{\mathbf{Set}}\Rightarrow\mathcal P$. [step 2.1, L2] ∎

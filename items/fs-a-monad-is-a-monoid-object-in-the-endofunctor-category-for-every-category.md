---
id: fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category
kind: false-statement
title: "FALSE: A monad is a monoid object in the endofunctor category for every category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists, def-functor-category, prop-size-of-functor-categories, prop-sets-and-functions-form-category-set, def-monad]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Remark 5.1.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim under the library's size convention:** for every category $\mathcal C$, a monad on $\mathcal C$ is a monoid object in the endofunctor category $[\mathcal C,\mathcal C]$.

The slogan is valid when that endofunctor category is formed, as recorded in [[rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists]].

## Facts & Assumptions

**Given:** The library convention for functor categories.

[L1] The functor category $[\mathcal C,\mathcal D]$ is formed when the source $\mathcal C$ is small; for an arbitrary large source the same notation may be used only as metatheoretic shorthand, and the definition does not form those proper-class-sized data into a category ([[def-functor-category]]).

[L2] If $\mathcal C$ is small and $\mathcal D$ is locally small, then $[\mathcal C,\mathcal D]$ is locally small; if both are small, then $[\mathcal C,\mathcal D]$ is small ([[prop-size-of-functor-categories]]).

[L3] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[L4] A monad on $\mathcal C$ is an endofunctor with a unit and a multiplication satisfying the two unit equations and associativity ([[def-monad]]).

## Refutation

**Proof technique:** direct.

1.1 A monoid object is defined only inside an actual monoidal category, so the claimed description presupposes that $[\mathcal C,\mathcal C]$ is a category. [L1]

2.1 Take $\mathcal C=\mathbf{Set}$, which is large by [L3], carrying the identity monad $(1_{\mathbf{Set}},1,1)$, whose unit and associativity equations hold trivially by [L4]. The source $\mathbf{Set}$ is not small, so by [L1] the adopted convention does not form $[\mathbf{Set},\mathbf{Set}]$ into a category, and the presupposition of step 1.1 fails for this monad. [L1, L3, L4, step 1.1]

3.1 A claim asserted for every category therefore fails at $\mathcal C=\mathbf{Set}$, where it presupposes a category the convention does not form. When $\mathcal C$ is small the functor category is formed by [L1] and is locally small by [L2], and the usual monoid description is valid there. [L1, L2, step 2.1] ∎

---
id: fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad
kind: false-statement
title: "FALSE: a monoid object in an endofunctor category is the definition of a monad"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monad, thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad, rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists, prop-sets-and-functions-form-category-set]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Remark 5.1.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** a monoid object in an endofunctor category is the definition of a monad.

## Facts & Assumptions

**Given:** The endofunctor-category comparison theorem.

[L1] A monad is defined directly by an endofunctor and unit and multiplication natural transformations, without assuming that an endofunctor category exists ([[def-monad]]).

[L2] The equivalence with monoid objects in an endofunctor category is proved only when that category exists; this library forms it for small source categories ([[thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad]], [[rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists]]).

[L3] Sets and functions form the large category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Refutation

**Proof technique:** direct.

1.1 The identity endofunctor on the large category $\mathbf{Set}$, with identity unit and multiplication, is a monad by [L1]. [L1, construct]

2.1 By [L3], $\mathbf{Set}$ is large, and [L2] says this library does not form its endofunctor category $[\mathbf{Set},\mathbf{Set}]$. Thus the monad in step 1.1 exists here although the proposed monoid-object formulation is unavailable. [L2, L3]

3.1 Therefore the claim is false. [step 1.1, step 2.1] ∎

---
id: fs-yoneda-lemma-requires-a-small-category
kind: false-statement
title: "The Yoneda lemma requires its category to be small"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-yoneda-evaluation-bijection,
       thm-yoneda-lemma-is-natural-in-both-variables,
       prop-sets-and-functions-form-category-set,
       def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Theorem 2.2.4 and Remark 2.2.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Yoneda lemma can be stated and proved only when its category
is small.

## Facts & Assumptions

**Given:** The false claim above and the category $\mathbf{Set}$.

[L1] For every locally small category $\mathcal C$, object $a$, and functor $F:\mathcal C\to\mathbf{Set}$, evaluation at the identity is a bijection $\operatorname{Nat}(\mathcal C(a,-),F)\cong F(a)$, with an explicit inverse; smallness is not a hypothesis ([[lem-yoneda-evaluation-bijection]]).

[L2] The same bijection is natural in both $a$ and $F$ for every locally small $\mathcal C$, without forming a functor category on a large source ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[L3] The category $\mathbf{Set}$ is large and locally small ([[prop-sets-and-functions-form-category-set]]).

[F1] A category is small when its objects and morphisms form sets, locally small when each hom-collection is a set, and large when it is not small ([[def-small-locally-small-and-large-category]]).

## Refutation

**Proof technique:** direct.

1.1 By [L3] and [F1], $\mathbf{Set}$ is a locally small category that is not small. [L3, F1]

2.1 Apply [L1] and [L2] to $\mathcal C=\mathbf{Set}$, any set $a$, and any functor $F:\mathbf{Set}\to\mathbf{Set}$. The Yoneda bijection exists and has both naturalities despite the category being large. [step 1.1, L1, L2]

3.1 Thus local smallness, which makes each hom-collection a set, suffices for the pointwise Yoneda lemma; the large locally small category $\mathbf{Set}$ refutes the asserted need for smallness. [step 1.1, step 2.1] ∎

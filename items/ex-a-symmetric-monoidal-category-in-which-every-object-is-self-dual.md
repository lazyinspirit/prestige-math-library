---
id: ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual
kind: example
title: "A symmetric monoidal category in which every object is self-dual"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-finite-dimensional-vector-spaces-are-rigid, thm-dual-family-is-a-basis-in-finite-dimension, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 2"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Example

The symmetric monoidal category of finite-dimensional vector spaces over a field
has the property that every object is isomorphic to its dual.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$.

[L1] The dual object $V^*$ exists in the category
([[thm-finite-dimensional-vector-spaces-are-rigid]]).

[L2] $\dim(V^*)=\dim(V)$
([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L3] Equal finite dimensions imply isomorphism
([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

## Verification

**Proof technique:** direct.

1.1 By [[thm-finite-dimensional-vector-spaces-are-rigid]], every finite-dimensional vector space $V$ has dual object $V^*$. [given, L1]

2.1 By [[thm-dual-family-is-a-basis-in-finite-dimension]], $\dim(V^*)=\dim(V)$. Therefore [[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]] gives an isomorphism $V\cong V^*$. [step 1.1, L2, L3]

3.1 Thus every object is self-dual up to isomorphism. The example is still only objectwise: the choice of isomorphism is generally noncanonical. [step 2.1] ∎

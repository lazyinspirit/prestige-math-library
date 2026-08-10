---
id: ex-free-group-on-the-empty-set
kind: example
title: "The free group on the empty set is the trivial group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-form-for-the-word-quotient-model, thm-word-quotient-model-is-free]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Free group"
      url: "https://encyclopediaofmath.org/wiki/Free_group"
pipeline_run: null
---

## Example

The free group on the empty set is the trivial group.

## Facts & Assumptions

**Given:** The word-quotient model $F_{\mathrm{word}}(\varnothing)$ of [[thm-word-quotient-model-is-free]].

[L1] Every class in $W(X)/{\sim}$ contains exactly one reduced word ([[thm-normal-form-for-the-word-quotient-model]]).

## Verification

**Proof technique:** direct.

1.1 On the empty alphabet, the empty word is the only finite word and hence the only reduced word; by [L1], $F_{\mathrm{word}}(\varnothing)$ has the single class $[\varepsilon]$. [L1, given]

2.1 That class is the identity, so the free group on $\varnothing$ has one element and is the trivial group. [step 1.1, given] ∎


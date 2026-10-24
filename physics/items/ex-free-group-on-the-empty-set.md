---
id: ex-free-group-on-the-empty-set
kind: example
title: "The free group on the empty set is the trivial group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-form-for-the-word-quotient-model, thm-word-quotient-model-is-free, thm-free-groups-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Free group"
      url: "https://encyclopediaofmath.org/wiki/Free_group"
pipeline_run: null
---

## Example

Every free group on the empty set is trivial: it has exactly one element.

## Facts & Assumptions

**Given:** The word-quotient model $F_{\mathrm{word}}(\varnothing)$ of [[thm-word-quotient-model-is-free]].

[L1] Every class in $W(X)/{\sim}$ contains exactly one reduced word ([[thm-normal-form-for-the-word-quotient-model]]).

[L2] If $(F,i)$ and $(F',i')$ are free groups on the same set $X$, then there is a unique group isomorphism $\phi:F\to F'$ with $\phi\circ i=i'$ ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[L3] The word-quotient group $W(X)/{\sim}$, with $x\mapsto[x]$, is a free group on $X$ ([[thm-word-quotient-model-is-free]]).

## Verification

**Proof technique:** direct.

1.1 On the empty alphabet, the empty word is the only finite word and hence the only reduced word; by [L1], $F_{\mathrm{word}}(\varnothing)$ has the single class $[\varepsilon]$. [L1, given]

2.1 That class is the identity, so $F_{\mathrm{word}}(\varnothing)$ has exactly one element. [step 1.1, given]

3.1 By [L3] this model is a free group on $\varnothing$, so [L2] makes every free group on $\varnothing$ isomorphic to it; an isomorphism is a bijection, so every free group on $\varnothing$ has exactly one element and is trivial. [L2, L3, step 2.1] ∎


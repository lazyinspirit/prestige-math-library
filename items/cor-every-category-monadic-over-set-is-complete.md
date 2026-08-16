---
id: cor-every-category-monadic-over-set-is-complete
kind: corollary
title: "Every category monadic over Set is complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits, thm-set-has-all-small-limits, prop-equivalences-preserve-reflect-and-create-limits-and-colimits]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.6.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

If $U:\mathcal D\to\mathbf{Set}$ is monadic, then $\mathcal D$ has every small limit.

## Facts & Assumptions

**Given:** A monadic functor $U:\mathcal D\to\mathbf{Set}$ in the sense of [[def-monadic-and-strictly-monadic-functor]].

[L1] Every small diagram in $\mathbf{Set}$ has a limit ([[thm-set-has-all-small-limits]]).

[L2] An Eilenberg–Moore forgetful functor strictly creates every base limit ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits]]).

[L3] Equivalences preserve, reflect, and create all existing limits in the ordinary isomorphism-invariant sense ([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

## Proof

**Proof technique:** direct.

1.1 For any small diagram in the Eilenberg–Moore category of the induced monad on $\mathbf{Set}$, [L1] supplies its underlying limit and [L2] lifts that limit; hence this Eilenberg–Moore category is complete. [L1, L2]

2.1 Monadicity says that the comparison $K:\mathcal D\to\mathbf{Set}^T$ is an equivalence. By [L3], each small limit from step 1.1 transports across $K$, so $\mathcal D$ is complete. [step 1.1, L3] ∎

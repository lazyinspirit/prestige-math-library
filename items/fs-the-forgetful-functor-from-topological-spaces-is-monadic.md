---
id: fs-the-forgetful-functor-from-topological-spaces-is-monadic
kind: false-statement
title: "FALSE: the underlying-set functor from topological spaces is monadic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-monadic-functor-is-conservative, prop-topological-spaces-and-continuous-maps-form-category-top, fs-continuous-bijection-is-a-homeomorphism, def-conservative-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. Mehrle, Category Theory Part III, Example 5.20(e)"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Section 5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** the underlying-set functor $U:\mathbf{Top}\to\mathbf{Set}$ is monadic.

## Facts & Assumptions

**Given:** The underlying-set functor on topological spaces.

[L1] Every monadic functor reflects isomorphisms ([[thm-a-monadic-functor-is-conservative]]).

[L2] A continuous bijection need not be a homeomorphism; the published false statement supplies a two-point witness ([[fs-continuous-bijection-is-a-homeomorphism]]).

[L3] Topological spaces and continuous maps form the category $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], conservativity is necessary for the underlying-set functor to be monadic. [L1]

1.2 On $S=\{a,b\}$, let $S_d$ be discrete and let $S_s$ have the Sierpiński topology $\{\varnothing,\{b\},S\}$. The identity function $q:S_d\to S_s$ is a continuous bijection, but its inverse is not continuous because $\{a\}$ is open in $S_d$ and not in $S_s$. This is the failure recorded in [L2] inside the category [L3]. [L2, L3]

2.1 The underlying function $Uq$ is an isomorphism in $\mathbf{Set}$, while $q$ is not an isomorphism in $\mathbf{Top}$ because it is not a homeomorphism. Thus $U$ does not reflect this isomorphism. [step 1.2, algebra]

3.1 The functor $U$ is not conservative by step 2.1 and therefore cannot be monadic by step 1.1. [step 1.1, step 2.1] ∎

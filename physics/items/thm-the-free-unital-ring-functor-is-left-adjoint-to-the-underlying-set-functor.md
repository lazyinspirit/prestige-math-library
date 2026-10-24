---
id: thm-the-free-unital-ring-functor-is-left-adjoint-to-the-underlying-set-functor
kind: theorem
title: "The free unital ring functor is left adjoint to the underlying-set functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-free-word-rings-are-unital-rings, thm-universal-property-of-free-modules, thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint, def-ring-homomorphism, prop-rings-and-homomorphisms-form-category-ring]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 4.1.10(vi)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Example 5.18"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

The free-word-ring construction $X\mapsto\mathbb Z^{(X^*)}$ extends to a functor $\operatorname{FreeRing}:\mathbf{Set}\to\mathbf{Ring}$ left adjoint to the underlying-set functor. Its unit sends $x\in X$ to the basis element of the one-letter word $[x]$.

## Facts & Assumptions

**Given:** A set $X$, its free word ring, a unital ring $R$, and a function $u:X\to R$.

[L1] For every set $X$, integer-valued finite formal sums of words in $X$ form a unital ring ([[lem-free-word-rings-are-unital-rings]]).

[L2] Every map from a basis set to a module extends uniquely to a linear map from the corresponding free module ([[thm-universal-property-of-free-modules]]).

[L3] Supplied objectwise universal arrows assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 Send a word $[x_1,\ldots,x_n]$ to $u(x_1)\cdots u(x_n)$ in $R$, and send the empty word to $1_R$. The generator $x$ is represented by the basis word $[x]$. [L1, construct]

2.1 Apply [L2] over $\mathbb Z$ to extend this word-evaluation function uniquely to a $\mathbb Z$-linear map $\bar u:\mathbb Z^{(X^*)}\to R$. [step 1.1, L2]

3.1 Expanding convolution as a finite sum shows $\bar u(\alpha\beta)=\bar u(\alpha)\bar u(\beta)$, and the empty-word basis vector maps to $1_R$. Thus $\bar u$ is a unit-preserving ring homomorphism, including when $R$ is the zero ring. [step 2.1, L1, algebra]

4.1 Any ring homomorphism extending $u$ must send every word basis vector to the corresponding product and is additive, so it equals $\bar u$ by uniqueness in [L2]. [step 3.1, L2]

5.1 Hence the generator inclusion is a universal arrow from every set $X$ to the underlying-set functor on rings. By [L3] these universal arrows assemble into the free-ring functor and the asserted adjunction; for $X=\varnothing$ the free ring is $\mathbb Z$. [step 4.1, L3] ∎

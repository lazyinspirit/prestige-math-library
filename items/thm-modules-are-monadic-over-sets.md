---
id: thm-modules-are-monadic-over-sets
kind: theorem
title: "Modules over a fixed unital ring are strictly monadic over sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, thm-the-free-module-monad-and-its-algebras-are-modules, thm-the-comparison-functor-exists-and-is-unique]
aliases: []
landmark: false
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iii) and Corollary 5.5.3(ii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For every fixed unital ring $R$, the underlying-set functor $U:R\text{-}\mathbf{Mod}\to\mathbf{Set}$ is strictly monadic, and hence monadic.

## Facts & Assumptions

**Given:** A fixed unital ring $R$ and the free-left-$R$-module adjunction.

[L1] The Eilenberg–Moore category of the free-left-$R$-module monad is isomorphic over $\mathbf{Set}$ to the category of left $R$-modules ([[thm-the-free-module-monad-and-its-algebras-are-modules]]).

[L2] A functor is strictly monadic when its comparison functor is an isomorphism of categories ([[def-monadic-and-strictly-monadic-functor]]).

[L3] The comparison functor is $K(d)=(Ud,U\varepsilon_d)$ and acts on morphisms by $K(h)=U(h)$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 The isomorphism in [L1] sends a module to its underlying set with its finite-linear-combination algebra structure and acts identically on underlying functions. By the comparison formula in [L3], it is the comparison for the free-module adjunction, including for the zero ring and zero module. [L1, L3, construct]

2.1 The comparison is therefore an isomorphism over $\mathbf{Set}$, so the underlying-set functor is strictly monadic by [L2]. [step 1.1, L2] ∎

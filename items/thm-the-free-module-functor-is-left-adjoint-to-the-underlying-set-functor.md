---
id: thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor
kind: theorem
title: 'The free-module functor is left adjoint to the underlying-set functor'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-free-modules, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint, prop-modules-and-homomorphisms-form-category-rmod]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Fix a unital ring $R$. The assignment $X\mapsto R^{(X)}$ extends to a functor from sets to left $R$-modules, and it is left adjoint to the underlying-set functor

$$R^{(-)}\dashv U:R\text{-}\mathbf{Mod}\to\mathbf{Set}.$$

The natural bijection sends an $R$-linear map $T:R^{(X)}\to M$ to the function $x\mapsto T(e_x)$.

## Facts & Assumptions

**Given:** A unital ring $R$, a set $X$, and a left $R$-module $M$.

[F1] Every function $u:X\to M$ extends uniquely to an $R$-linear map $\bar u:R^{(X)}\to M$ with $\bar u(e_x)=u(x)$ ([[thm-universal-property-of-free-modules]]).

[F2] Left $R$-modules and module homomorphisms form the locally small category $R\text{-}\mathbf{Mod}$ ([[prop-modules-and-homomorphisms-form-category-rmod]]).

[L1] Chosen objectwise universal arrows assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 For a function $a:X\to Y$, define $R^{(a)}:R^{(X)}\to R^{(Y)}$ as the unique linear map sending $e_x$ to $e_{a(x)}$. [F1, construct]

1.2 Restricting a linear map to the standard basis and extending a function by [F1] are inverse operations, naturally in $X$ and $M$. [F1, F2]

2.1 Uniqueness in [F1] gives $R^{(1_X)}=1$ and $R^{(ba)}=R^{(b)}R^{(a)}$, so this is a functor and the basis inclusions are natural. [step 1.1, F1]

3.1 Thus the standard-basis map is a universal arrow from $X$ to $U$, and [L1] gives the asserted adjunction. [step 1.1, step 2.1, step 1.2, L1]

4.1 When $X=\varnothing$, $R^{(X)}$ is the zero module and [F1] gives the unique map from it to every $R$-module, so no separate nonempty-basis hypothesis is required. [F1] ∎

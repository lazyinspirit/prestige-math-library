---
id: thm-the-free-group-monad-and-its-algebras-are-groups
kind: theorem
title: "The free-group monad has groups as its Eilenberg–Moore algebras"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, def-eilenberg-moore-category, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, def-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.4(iv) and Exercise 5.2.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The monad on $\mathbf{Set}$ induced by the free-group adjunction sends a set to the underlying set of its free group. Its Eilenberg–Moore category is isomorphic over $\mathbf{Set}$ to the category of groups.

## Facts & Assumptions

**Given:** The free-group adjunction between sets and groups.

[L1] The free-group functor is left adjoint to the underlying-set functor ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L2] Every adjunction induces a monad on the domain of its left adjoint ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

[L3] A group has associative multiplication, an identity, and inverses ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1]–[L2], the monad sends $X$ to the underlying set of the free group $F(X)$, its unit inserts generators, and its multiplication evaluates a reduced word whose letters are themselves reduced words. Every group $H$ gives an algebra $F(UH)\to UH$ by word evaluation. [L1, L2]

2.1 Conversely, from an algebra $a:UF(X)\to X$, define the product, identity, and inverse by evaluating the free-group words $xy$, $1$, and $x^{-1}$. The algebra unit law fixes generators, while the multiplication law identifies evaluation after substitution with direct evaluation; applying it to the standard group-word identities gives all axioms in [L3]. [L3, step 1.1]

3.1 An algebra homomorphism commutes with word evaluation and therefore preserves product, identity, and inverse. Conversely a group homomorphism preserves every group word and hence is an algebra homomorphism. The two constructions are inverse over $\mathbf{Set}$. [L3, step 1.1, step 2.1] ∎

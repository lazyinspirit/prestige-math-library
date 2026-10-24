---
id: thm-the-free-monoid-monad-and-its-algebras-are-monoids
kind: theorem
title: "The free-monoid monad has monoids as its Eilenberg–Moore algebras"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, def-eilenberg-moore-category, thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor, def-semigroup-and-monoid]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.2.6(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The monad on $\mathbf{Set}$ induced by the free-monoid adjunction sends a set $X$ to the set $X^*$ of finite words, inserts letters as one-letter words, and flattens words of words by concatenation. Its Eilenberg–Moore category is isomorphic over $\mathbf{Set}$ to the category of monoids.

## Facts & Assumptions

**Given:** The free-monoid adjunction between sets and monoids.

[L1] The free-monoid functor sends $X$ to the monoid of finite words $X^*$ and is left adjoint to the underlying-set functor ([[thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L2] Every adjunction induces a monad, whose unit is the adjunction unit and whose multiplication uses the counit ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

[L3] A monoid has an associative binary operation and a two-sided identity ([[def-semigroup-and-monoid]]).

## Proof

**Proof technique:** direct.

1.1 By [L1]–[L2], the induced endofunctor is $X\mapsto X^*$, its unit sends a letter to its one-letter word, and its multiplication concatenates a finite word of finite words. A monoid $M$ therefore gives an algebra $M^*\to M$ by evaluating each word. [L1, L2]

2.1 Conversely, for an algebra $a:X^*\to X$, define $e=a([])$ and $x\cdot y=a([x,y])$. The algebra unit law evaluates one-letter words to their letters, and the multiplication law says evaluation is unchanged by first evaluating subwords; applied to empty, two-letter, and three-letter decompositions, it gives the two unit laws and associativity. [L3, step 1.1]

3.1 An algebra homomorphism commutes with evaluation, hence preserves the empty word and two-letter words and is a monoid homomorphism. Conversely a monoid homomorphism preserves every finite word evaluation, so it is an algebra homomorphism. These identifications are inverse and unchanged on underlying sets. [L3, step 1.1, step 2.1] ∎

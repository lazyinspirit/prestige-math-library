---
id: thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies
kind: theorem
title: "A power by a set is the product of that many copies and a copower is the coproduct"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-power-and-copower-by-a-set, def-products-and-coproducts, def-limit-and-colimit-of-a-diagram, def-hom-functors-and-hom-bifunctor, def-indexed-family, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), §3.7"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Example 2.2.4"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal M$ be locally small, let $c$ be an object of $\mathcal M$ and let
$S$ be a set. Write $(c)_{s\in S}$ for the constant $S$-indexed family at $c$
([[def-indexed-family]]).

Then the power $c^{S}$ ([[def-power-and-copower-by-a-set]]) exists exactly when
the product $\prod_{s\in S}c$ exists ([[def-products-and-coproducts]]), and
they are then the same object with the same counit: a power by a set is the
product of that many copies. Dually the copower $S\cdot c$ exists exactly when
the coproduct $\coprod_{s\in S}c$ exists, and a copower is the coproduct.

For $S=\varnothing$ the power is a terminal object and the copower an initial
object.

## Facts & Assumptions

**Given:** A locally small category $\mathcal M$, an object $c$ and a set $S$.

[F6] The covariant hom-assignment $\mathcal M(m,-)$ sends an object to a set of morphisms, and $\mathbf{Set}$ is the category of sets and functions ([[def-hom-functors-and-hom-bifunctor]], [[prop-sets-and-functions-form-category-set]]).

[F1] The power $c^{S}$ is the weighted limit of the one-object diagram at the constant weight $S$, characterised by a bijection $\mathcal M(m,c^{S})\cong\mathbf{Set}(S,\mathcal M(m,c))$ natural in $m$; the copower is characterised dually by $\mathcal M(S\cdot c,m)\cong\mathbf{Set}(S,\mathcal M(c,m))$ ([[def-power-and-copower-by-a-set]]).

[F4] An **indexed family** with **index set** $I$ is a function $A$ with domain $I$, written $(A_i)_{i\in I}$ ([[def-indexed-family]]).

[F2] A product of $(A_i)_{i\in I}$ is an object $P$ with projections $p_i$ such that every family $f_i:X\to A_i$ has a unique pairing $\langle f_i\rangle_{i\in I}:X\to P, \qquad p_i\langle f_i\rangle=f_i\quad(i\in I)$; a coproduct is dual ([[def-products-and-coproducts]]).

[F3] The empty product is therefore terminal and the empty coproduct initial. ([[def-products-and-coproducts]]).

[F5] A limit of a diagram is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$; a product is the limit of a family on a discrete index category ([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the power is characterised by a bijection, natural in $m$, between morphisms $m\to c^{S}$ and functions $S\to\mathcal M(m,c)$. [F1, F6]

2.1 By [F2], [F4] and [F5] the product of the constant family $(c)_{s\in S}$ is characterised by a bijection, natural in $m$, between morphisms $m\to\prod_{s\in S}c$ and $S$-indexed families of morphisms $m\to c$; and an $S$-indexed family of elements of the set $\mathcal M(m,c)$ is by [F4] exactly a function $S\to\mathcal M(m,c)$. So the two universal properties are properties of the same functor of $m$. [F2, F4, F5, step 1.1]

3.1 Hence an object represents one exactly when it represents the other, so the power exists exactly when the product does and any object with either property has both; the counit of the power, indexed by $s\in S$, is the family of projections of the product, since both are obtained by applying the bijection to the identity. The dual argument, with $\mathcal M(c,m)$ in place of $\mathcal M(m,c)$ and copairings in place of pairings, identifies the copower with the coproduct of the same constant family. [F1, F5, step 2.1]

4.1 For $S=\varnothing$ the only function $\varnothing\to\mathcal M(m,c)$ is the empty one, so the bijection of step 1.1 says that $\mathcal M(m,c^{\varnothing})$ is a one-element set for every $m$, that is, $c^{\varnothing}$ is terminal; dually $\varnothing\cdot c$ is initial. This agrees with the published convention that The empty product is therefore terminal and the empty coproduct initial. [F3, step 3.1] ∎

## Remarks

This is a seam: the power minted on this page is the product already defined in the library, not a second notion, and the theorem is what says so. Every later use of a power may therefore be read as a product of copies, and the notation is a convenience rather than new mathematics.

The empty case is written out because it is where a plausible-looking alternative convention would go wrong. A power by the empty set is terminal, not initial, and a copower by the empty set is initial: the direction is fixed by which side of the hom-set the exponent sits on, and it is fixed the same way as for the published empty product and coproduct.

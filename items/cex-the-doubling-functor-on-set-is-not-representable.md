---
id: cex-the-doubling-functor-on-set-is-not-representable
kind: counterexample
title: 'The functor $D(X)=X\sqcup X$ on $\mathbf{Set}$ is not covariantly representable'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation,
       prop-sets-and-functions-form-category-set,
       def-functor-and-contravariant-functor,
       def-the-set-of-functions-from-one-set-to-another,
       def-injection-surjection-bijection, def-cartesian-product,
       def-union-of-a-set-and-binary-union,
       lem-unions-and-intersections-of-small-families, def-ordered-pair,
       thm-the-characterising-property-of-ordered-pairs, def-natural-numbers,
       def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Justin Campbell, Harvard Math 55b tutorial notes, Example 2.3"
      url: "https://people.math.harvard.edu/~campbell/tutnotes1.pdf"
pipeline_run: null
---

## Statement refuted

The endofunctor $D:\mathbf{Set}\to\mathbf{Set}$ defined by

$$D(X)=(X\times\{0\})\cup(X\times\{1\}),\qquad D(f)(x,s)=(f(x),s),$$

is covariantly representable.

## Facts & Assumptions

**Given:** The category $\mathbf{Set}$ and the tagged doubling assignment $D$ in the statement.

[F1] Sets and functions form the locally small category $\mathbf{Set}$, and a functor must preserve identities and composition ([[prop-sets-and-functions-form-category-set]], [[def-functor-and-contravariant-functor]]).

[F2] The Cartesian product consists of its ordered pairs, and binary union contains exactly the elements in either of its two members ([[def-cartesian-product]], [[def-union-of-a-set-and-binary-union]], [[lem-unions-and-intersections-of-small-families]]).

[F3] Ordered pairs satisfy $(x,s)=(y,t)$ if and only if $x=y$ and $s=t$; the naturals $0$ and $1$ are distinct ([[def-ordered-pair]], [[thm-the-characterising-property-of-ordered-pairs]], [[def-natural-numbers]]).

[F4] The functions $R\to1$ form the set $1^R$, and a function assigns exactly one value to each element of its domain. Hence for every set $R$, including $R=\varnothing$, there is exactly one function $R\to1$ ([[def-the-set-of-functions-from-one-set-to-another]], [[def-function]]).

[F5] Representability by $R$ would give bijections $\mathbf{Set}(R,X)\cong D(X)$ for every set $X$, and a bijection must be both injective and surjective ([[def-presheaf-representable-functor-and-representation]], [[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** contradiction.

1.1 The formula for $D(f)$ is a function by [F2] and [F3]. It preserves the tag and applies $f$ to the first coordinate, so $D(1_X)=1_{D(X)}$ and $D(g\circ f)=D(g)\circ D(f)$; by [F1], $D$ is an endofunctor. [F1, F2, F3]

1.2 By [F4], $\mathbf{Set}(R,1)$ is a singleton for every $R$, including $R=\varnothing$. [F4]

1.3 By [F2] and [F3], $D(1)=\{(*,0),(*,1)\}$ and its two displayed elements are distinct, so it has exactly two elements. [F2, F3]

2.1 Suppose $D$ were represented by a set $R$. The component at the singleton $1=\{*\}$ would be a bijection $\mathbf{Set}(R,1)\cong D(1)$ by [F5]. [step 1.1, F5, assume-contra]

3.1 No function from a singleton onto a two-element set is surjective, contradicting the bijection in step 2.1. [step 2.1, step 1.2, step 1.3, F5]

4.1 Therefore $D$ is a well-defined functor but is not covariantly representable. [step 1.1, step 3.1, discharge-contradiction] ∎

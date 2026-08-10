---
id: ex-set-arithmetic-isomorphisms-are-natural
kind: example
title: "The distributive and exponential laws of sets are natural isomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-isomorphism, def-product-category, prop-sets-and-functions-form-category-set, def-cartesian-product, def-the-set-of-functions-from-one-set-to-another, def-union-of-a-set-and-binary-union, def-unordered-pair-and-singleton, def-ordered-pair, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Chapter II"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: null
---

## Example

The familiar distributive and exponential bijections of sets commute with
functions in every variable, so they are natural isomorphisms.

## Facts & Assumptions

**Given:** Sets $A,B,C$ and functions between such triples.

[L1] Cartesian products, function sets, binary unions, singleton tags, ordered pairs, and the natural numbers $0,1$ are available ([[def-cartesian-product]], [[def-the-set-of-functions-from-one-set-to-another]], [[def-union-of-a-set-and-binary-union]], [[def-unordered-pair-and-singleton]], [[def-ordered-pair]], [[def-natural-numbers]]).

[L2] A function with a two-sided inverse is a bijection, and natural isomorphisms may be formed between functors on product categories ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]], [[def-natural-isomorphism]], [[def-product-category]], [[prop-sets-and-functions-form-category-set]]).

## Verification

**Proof technique:** direct.

1.1 Use the tagged union $B\amalg C=(B\times\{0\})\cup(C\times\{1\})$. Define $A\times(B\amalg C)\to(A\times B)\amalg(A\times C)$ by $(a,(b,0))\mapsto((a,b),0)$ and $(a,(c,1))\mapsto((a,c),1)$. [L1]

1.2 Define $A^{B\amalg C}\to A^B\times A^C$ by restricting a function to the two tagged summands, and define $(A\times B)^C\to A^C\times B^C$ by composing with the two projections. [L1]

2.1 Untagging in step 1.1, joining two functions on disjoint tagged summands, and pairing two functions pointwise are respective two-sided inverses. Hence all three displayed maps are bijections. [step 1.1, step 1.2, L1, L2]

2.2 Applying functions to the named entries before or after any map in steps 1.1 and 1.2 produces the same tuple or function value. Precomposition behaves the same way in each exponent variable. Thus every naturality square commutes in all covariant and contravariant variables. [step 1.1, step 1.2]

3.1 The three componentwise bijections are natural by step 2.2, and their inverses are automatically natural. They therefore give the distributive and exponential natural isomorphisms. [step 2.1, step 2.2, L2] ∎

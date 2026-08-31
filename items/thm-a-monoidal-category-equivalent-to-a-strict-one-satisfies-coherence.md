---
id: thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence
kind: theorem
title: "A monoidal category equivalent to a strict one satisfies coherence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-canonical-morphism-between-parenthesised-words, def-monoidal-equivalence, def-strict-monoidal-category, thm-fully-faithful-split-essentially-surjective-characterises-equivalence]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.3, Theorem 2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a monoidal category and let
$F:\mathcal C\to\mathcal D$ be a monoidal equivalence to a strict monoidal
category $\mathcal D$. Then any two canonical morphisms in $\mathcal C$ with
the same source and target are equal.

## Facts & Assumptions

**Given:** A monoidal equivalence $F:\mathcal C\to\mathcal D$ with
$\mathcal D$ strict monoidal.

[L1] Canonical morphisms are the natural transformations built from identities, associators, unitors, their inverses, tensoring with identities, and composition ([[def-canonical-morphism-between-parenthesised-words]]).

[L2] A monoidal equivalence is, in particular, a strong monoidal functor whose underlying functor is an equivalence of categories ([[def-monoidal-equivalence]]).

[L3] An equivalence of categories is fully faithful, hence faithful ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

[L4] In a strict monoidal category, the associator and both unitors are identity morphisms ([[def-strict-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 Because $F$ is strong monoidal, applying $F$ to any generator listed in [L1] and then using the structure isomorphisms of $F$ again yields a canonical morphism in $\mathcal D$ between the corresponding parenthesised tensor words in the images of the objects. Therefore $F$ sends canonical composites in $\mathcal C$ to canonical composites in $\mathcal D$. [given, L1, L2]

2.1 In the strict target $\mathcal D$, [L4] makes every canonical morphism between the same source and target the identity of the common tensor object. Hence the images under $F$ of any two canonical morphisms in $\mathcal C$ with the same source and target are equal. [step 1.1, L4]

3.1 By [L2] and [L3], the underlying functor of $F$ is faithful. So equality after applying $F$ implies equality before applying $F$. Therefore any two canonical morphisms in $\mathcal C$ with the same source and target are equal. [L2, L3, step 2.1] ∎

---
id: cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible
kind: corollary
title: "A morphism of short exact sequences with invertible outer maps is invertible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-short-five-lemma-in-an-abelian-category,
       thm-an-abelian-category-is-balanced]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.2"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

In a morphism of short exact sequences in an abelian category, if the left and
right vertical maps are isomorphisms, then the middle vertical map is an
isomorphism.

## Facts & Assumptions

**Given:** A morphism of short exact sequences whose outer vertical maps are
isomorphisms.

[L1] The short five lemma makes the middle map both monic and epic
([[thm-short-five-lemma-in-an-abelian-category]]).

[L2] Every morphism that is both monic and epic in an abelian category is an
isomorphism ([[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct.

1.1 Because the outer maps are isomorphisms, they are monic and epic. Therefore [L1] shows that the middle map is monic and epic. [L1, given]

2.1 Applying [L2] to that middle map shows that it is an isomorphism. [L2, step 1.1]

3.1 Hence a morphism of short exact sequences with invertible outer maps has invertible middle map as well. [step 2.1] ∎

---
id: fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category
kind: false-statement
title: "FALSE: the strong enriched Yoneda lemma for a large category constructs the whole enriched functor category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-strong-enriched-yoneda-lemma-as-a-particular-end, rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims, cor-the-enriched-yoneda-embedding-is-fully-faithful]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Sections 2.2 and 2.4"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

For a large enriched category, the strong enriched Yoneda lemma automatically
constructs the whole enriched functor category.

## Facts & Assumptions

**Given:** The strong Yoneda theorem and its size warning.

[L1] The strong enriched Yoneda lemma constructs a particular end ([[thm-strong-enriched-yoneda-lemma-as-a-particular-end]]).

[L2] That particular end is a different size claim from the existence of the whole enriched functor category ([[rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims]]).

[L3] Full faithfulness of the Yoneda assignment does not add the missing large-source functor-category existence hypothesis ([[cor-the-enriched-yoneda-embedding-is-fully-faithful]]).

## Refutation

**Proof technique:** direct.

1.1 The theorem [L1] proves only the existence of one end attached to one representable functor. [L1, given]

2.1 By [L2], that does not construct the whole enriched functor category for a large source, and [L3] does not change that size issue. Therefore the statement is false. [L2, L3, step 1.1] ∎

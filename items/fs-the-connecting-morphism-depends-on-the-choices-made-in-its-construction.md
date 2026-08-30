---
id: fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction
kind: false-statement
title: "FALSE: the connecting morphism depends on the choices made in its construction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-connecting-morphism-exists-and-is-unique,
       rem-the-connecting-morphism-depends-on-no-choices]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

The connecting morphism in the snake lemma depends on the choices made during
its construction.

## Facts & Assumptions

**Given:** The arrow-theoretic construction of the connecting morphism.

[L1] The connecting morphism exists and is unique
([[thm-the-connecting-morphism-exists-and-is-unique]]).

[L2] Consequently, no choice-independence argument remains to be proved
([[rem-the-connecting-morphism-depends-on-no-choices]]).

## Refutation

1.1 The statement of [L1] already says that the connecting morphism is the unique map making one displayed square commute. [L1]

2.1 By [L2], uniqueness is exactly what rules out any dependence on auxiliary choices. Therefore the statement is false. [L2, step 1.1] ∎

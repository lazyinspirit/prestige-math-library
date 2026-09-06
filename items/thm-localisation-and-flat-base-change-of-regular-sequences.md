---
id: thm-localisation-and-flat-base-change-of-regular-sequences
kind: theorem
title: "Localisation And Faithfully Flat Base Change Of Regular Sequences"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-sequence-on-a-module, thm-localisation-of-modules-is-exact, def-flat-and-faithfully-flat-modules-and-ring-maps]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

An $M$-regular sequence remains regular after localization whenever the localized terminal quotient is nonzero, and remains regular after faithfully flat base change.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-regular-sequence-on-a-module]], [[thm-localisation-of-modules-is-exact]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]].

## Proof

**Proof technique:** direct.

1.1 Localization preserves injectivity, so each regularity condition survives; the stated nonzero localized terminal quotient prevents the convention from failing at the end. [given, algebra]

2.1 Faithfully flat tensoring preserves and reflects injectivity and nonzero modules. Apply this successively to the quotient stages to obtain the base-change assertion. [step 1.1, algebra] ∎

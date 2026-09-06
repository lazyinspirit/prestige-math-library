---
id: lem-koszul-complex-localises-termwise
kind: lemma
title: "Koszul Complex Localises Termwise"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, def-localisation-of-a-module]
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
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For a multiplicative subset $S$, localization gives a natural chain isomorphism $S^{-1}K(\mathbf x;M)\cong K(\mathbf x/1;S^{-1}M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[def-localisation-of-a-module]].

## Proof

**Proof technique:** direct.

1.1 Localization commutes with finite direct sums and with the finite free exterior bases, sending $e_I\otimes m/s$ to $e_I\otimes(m/s)$. [given, algebra]

2.1 The coordinate formula is preserved term by term because $(x_im)/s=(x_i/1)(m/s)$, so this degreewise isomorphism is a chain isomorphism. [step 1.1, algebra] ∎


---
id: def-conditional-exchangeability-of-potential-outcomes
kind: definition
title: "Conditional exchangeability of potential outcomes"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps: [def-axiom-of-choice, def-potential-outcomes-and-consistency, def-conditional-independence-given-a-sigma-algebra, lem-conditional-independence-equivalences-and-preservation]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, 2020 (author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Strong Ignorability, UW–Madison STAT 992 lecture note"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp24/strong_ignorability.html"
---

## Definition

Let $A$ be the observed treatment assignment, $L$ a baseline covariate random element, and $(Y^a)_{a\in\mathcal A}$ the potential-outcome family of [[def-potential-outcomes-and-consistency]]. **Conditional exchangeability given $L$** means

$$\sigma(Y^a:a\in\mathcal A)\perp\!\!\!\perp\sigma(A)\mid\sigma(L),$$

where conditional independence is the bounded-measurable-function factorization of [[def-conditional-independence-given-a-sigma-algebra]] under the [[def-axiom-of-choice]]. Each fixed $Y^a$ is then conditionally independent of $A$ given $L$ by measurable-map preservation in [[lem-conditional-independence-equivalences-and-preservation]]. This is a full-data assumption; the observed distribution alone does not establish it.

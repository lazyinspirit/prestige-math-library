---
id: rem-hahn-banach-open-choice-questions
kind: remark
title: "Two choice-theoretic consequences of Hahn-Banach remain open"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-choice-strength-of-hahn-banach,
       rem-hahn-banach-hamel-basis-open,
       rem-hahn-banach-discontinuous-additive-open]
justified_by: []
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice"
      url: "https://www.ams.org/surv/059"
    - title: "P. Larson and S. Shelah, Discontinuous homomorphisms without Hamel bases"
      url: "https://arxiv.org/abs/2606.08384"
---

## Remark

The established choice ledger for Hahn-Banach is summarized in
[[rem-choice-strength-of-hahn-banach]]. Two natural next questions are still not
settled in ZF:

- whether Hahn-Banach implies that $\mathbb{R}$ has a Hamel basis over
  $\mathbb{Q}$ ([[rem-hahn-banach-hamel-basis-open]]);
- whether Hahn-Banach implies the existence of a discontinuous additive map
  $\mathbb{R} \to \mathbb{R}$
  ([[rem-hahn-banach-discontinuous-additive-open]]).

This page does not use either implication. They are recorded here only as local
signposts, so that the reader does not mistake the proved choice-strength
consequences for a complete classification.

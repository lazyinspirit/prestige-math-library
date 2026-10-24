---
id: rem-skorokhod-representation-does-not-couple-the-original-variables
kind: remark
title: Skorokhod representation does not couple the original variables
deps: ["thm-skorokhod-representation-on-polish-spaces"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Advanced Probability, Theorem 5.29
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Remarks

[[thm-skorokhod-representation-on-polish-spaces]] constructs new random elements with the prescribed marginal laws. It gives almost-sure convergence on that new probability space. It does not assert almost-sure convergence of any originally given variables, and it does not preserve their joint distribution.

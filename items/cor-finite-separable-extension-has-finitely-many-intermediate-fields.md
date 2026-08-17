---
id: cor-finite-separable-extension-has-finitely-many-intermediate-fields
kind: corollary
title: "A finite separable extension has only finitely many intermediate fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-element-theorem-for-finite-separable-extensions, lem-simple-finite-extension-has-finitely-many-intermediate-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Every finite separable extension has only finitely many intermediate fields.

## Facts & Assumptions

**Given:** A finite separable extension $E/F$.

[L1] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L2] A simple finite extension has finitely many intermediate fields ([[lem-simple-finite-extension-has-finitely-many-intermediate-fields]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $E=F(\alpha)$ for one element $\alpha$. [L1]

2.1 The conclusion now follows from [L2]. [step 1.1, L2] ∎

---
id: cor-finite-extension-of-a-perfect-field-is-simple
kind: corollary
title: "Every finite extension of a perfect field is simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-algebraic-extensions-of-perfect-fields-are-separable, thm-primitive-element-theorem-for-finite-separable-extensions, thm-finite-field-extensions-are-algebraic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Every finite extension of a perfect field is simple.

## Facts & Assumptions

**Given:** A finite extension $E/F$ with $F$ perfect.

[L1] Every finite field extension is algebraic ([[thm-finite-field-extensions-are-algebraic]]).

[L2] Every algebraic extension of a perfect field is separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[L3] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the extension is algebraic, and [L2] therefore makes it separable. [L1, L2]

2.1 It is finite and separable, so [L3] makes it simple. [step 1.1, L3] ∎

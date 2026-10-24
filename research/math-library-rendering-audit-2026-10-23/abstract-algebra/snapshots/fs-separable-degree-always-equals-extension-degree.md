---
id: fs-separable-degree-always-equals-extension-degree
kind: false-statement
title: "FALSE: every finite extension satisfies $[K:F]_s=[K:F]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p]
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
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Every finite extension $K/F$ satisfies $[K:F]_s=[K:F]$.

## Facts & Assumptions

**Given:** The universal equality in the Statement.

[L1] The finite extension $\mathbb F_p(t)/\mathbb F_p(t^p)$ has ordinary degree $p$ and separable degree $1$ ([[ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p]]).

## Refutation

**Proof technique:** direct.

1.1 Since every prime $p$ is greater than $1$, the two degrees in [L1] are unequal. [L1, algebra]

2.1 This finite extension refutes the universal equality. [step 1.1] ∎

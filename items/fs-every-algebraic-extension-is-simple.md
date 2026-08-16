---
id: fs-every-algebraic-extension-is-simple
kind: false-statement
title: "FALSE: every algebraic extension is simple"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-algebraic-closure-of-a-finite-field, cor-element-algebraic-iff-simple-extension-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, finite fields and algebraic closures"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Every algebraic field extension is simple.

## Facts & Assumptions

**Given:** The universal claim in the Statement and a prime $p$.

[L1] The algebraic closure $\overline{\mathbb F_p}/\mathbb F_p$ is algebraic and infinite ([[ex-algebraic-closure-of-a-finite-field]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

## Refutation

**Proof technique:** direct.

1.1 If $\overline{\mathbb F_p}=\mathbb F_p(\alpha)$ for one element $\alpha$, then $\alpha$ is algebraic and [L2] would make the extension finite. [L2]

2.1 This contradicts the infinitude in [L1]. Hence the algebraic extension $\overline{\mathbb F_p}/\mathbb F_p$ is not simple, refuting the Statement. [step 1.1, L1] ∎

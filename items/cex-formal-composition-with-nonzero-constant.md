---
id: cex-formal-composition-with-nonzero-constant
kind: counterexample
title: "Substituting $1$ into $1+x+x^2+\\cdots$ is not a defined formal composition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-series-composition, def-formal-power-series-and-coefficient-extraction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Counterexample

Over $\mathbb Z$, let $f=1+x+x^2+\cdots$. The formal expression $f\circ1$ is not defined.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Formal composition is $f\circ g=\sum_{n\ge0}[x^n]f\,g^n$, defined when $f$ is a polynomial or when $g(0)=0$ ([[def-formal-series-composition]]).

## Verification

**Proof technique:** test local finiteness in degree zero.

1.1 The outer series $f$ is not a polynomial, and the inner series $1$ does not have zero constant coefficient, so neither admissibility branch applies. More concretely, the proposed constant coefficient would be $\sum_{n\ge0}1$, an infinite sum not defined by the ring operations of $\mathbb Z$. [given, F1]

1.2 By contrast, $x^2$ has zero constant coefficient, so $f\circ x^2=1+x^2+x^4+\cdots$ is defined; every coefficient has at most one contributor. [given, F1]

2.1 Hence $f\circ1$ is undefined as a formal composition, while the zero-constant substitution in step 1.2 is admissible. This is a local-finiteness obstruction, not a claim about analytic divergence. [step 1.1, step 1.2] ∎

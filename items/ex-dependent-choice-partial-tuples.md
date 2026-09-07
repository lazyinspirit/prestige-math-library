---
id: ex-dependent-choice-partial-tuples
kind: example
title: "Dependent choices as extending partial tuples"
status: published
origin: pipeline
deps: ["thm-choice-implies-dependent-implies-countable-choice", "lem-starting-point-free-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, §2.4 dependent-choice proposition, pp.22–23"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Example

For nonempty $(X_n)_{n<\omega}$, the extension relation on finite choice tuples produces a complete choice function from a path starting at the empty tuple. For a serial relation $R$ and prescribed $a$, finite $R$-paths starting at $a$ recover that prescribed start even if the path-of-paths starts later.

## Facts & Assumptions

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: DC on finite partial tuples yields countable choice.

[F2] [[lem-starting-point-free-dependent-choice]]: Nested finite paths starting at a prescribed point recover prescribed-start DC.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 The first two tuple extensions are $\varnothing$, $(x_0)$, $(x_0,x_1)$ with $x_0\in X_0$ and $x_1\in X_1$. In a path with one-term extensions, the $n$th tuple has length $n$; its union therefore assigns exactly one permissible value at each index in omega. This is the tuple construction in the cited implication. [F1]

2.1 For finite $R$-paths the shortest object is $(a)$. A nested path beginning at a longer object of length $m\ge1$ has lengths $m+n$; their union still has domain omega and starts at $a$. Every adjacent pair is certified within a finite path. [F2] ∎

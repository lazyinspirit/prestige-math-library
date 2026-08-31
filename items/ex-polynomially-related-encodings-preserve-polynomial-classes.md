---
id: ex-polynomially-related-encodings-preserve-polynomial-classes
kind: example
title: "Changing between two polynomially related tuple encodings preserves polynomial complexity"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-polynomially-related-encodings-preserve-polynomial-classes]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Julian Panetta, ECS 120 Theory of Computation: Asymptotic analysis (cont'd) and time complexity"
      url: "https://www.cs.ucdavis.edu/~doty/ecs120slides/05c_Asymptotic_analysis-contd-TimeIntro-deck.html"
---

## Example

Encode a tuple of natural numbers first by the self-delimiting tuple code
$\sigma$, and second by the code $\tau$ obtained by repeating each bit of
$\sigma$ twice. The translation $\sigma\mapsto\tau$ is linear-time by bit
doubling, and the translation $\tau\mapsto\sigma$ is linear-time by checking
adjacent equal pairs and then deleting one bit from each pair. Because
$|\tau(x)|=2|\sigma(x)|$, the two encodings are polynomially related. Hence any
polynomial-time or polynomial-space decider written for one of them remains
polynomial for the other.

## Facts & Assumptions

**Given:** The encodings $\sigma$ and $\tau$ described above.

[L1] Polynomially related encodings preserve polynomial-time and polynomial-space classes when the translations in both directions are polynomially computable, by [[prop-polynomially-related-encodings-preserve-polynomial-classes]].

## Verification

**Proof technique:** direct.

1.1 The bit-doubling and pair-checking procedures are linear-time and linear-space translations between valid $\sigma$-codes and valid $\tau$-codes. Also $|\tau(x)|=2|\sigma(x)|$ for every instance $x$, so the two code lengths bound each other polynomially. [given]

2.1 Therefore the hypotheses of [L1] hold, and [L1] transfers polynomial-time and polynomial-space decidability between the two tuple encodings. [L1, step 1.1] ∎

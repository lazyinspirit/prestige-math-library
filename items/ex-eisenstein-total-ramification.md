---
id: ex-eisenstein-total-ramification
kind: example
title: "An Eisenstein total-ramification calculation"
status: draft
origin: pipeline
deps: [cor-eisenstein-prime-is-totally-ramified]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 3.53"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Example

In $\mathbb Q(\sqrt[3]2)$, the prime $2$ is totally ramified: $2\mathcal O_K=\mathfrak P^3$.

## Verification

**Given:** $\alpha^3=2$.

1.1 $X^3-2$ is Eisenstein at $2$, and its reduction is $X^3$. [given, algebra]

2.1 The Eisenstein ramification corollary gives the unique prime $\mathfrak P=(2,\alpha)$ with exponent $3$. [step 1.1, algebra] ∎

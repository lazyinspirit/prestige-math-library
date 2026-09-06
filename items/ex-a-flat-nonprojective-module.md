---
id: ex-a-flat-nonprojective-module
title: "A flat nonprojective module"
kind: example
status: draft
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "fs-flat-modules-have-projective-dimension-zero"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

The $\mathbb Z$-module $\mathbb Q$ is flat but not projective.

## Verification

**Given:** the inclusion $\mathbb Z\subset\mathbb Q$ and the PID $\mathbb Z$.

1.1 No nonzero integer annihilates a nonzero rational number, so $\mathbb Q$ is torsion-free. [given]

2.1 Torsion-free modules over a PID are flat, hence $\mathbb Q$ is flat. [step 1.1, algebra]

3.1 A projective abelian group is free, but a nonzero free abelian group has a nonzero homomorphism to $\mathbb Z$, whereas every homomorphism $\mathbb Q\to\mathbb Z$ is zero; therefore $\mathbb Q$ is not projective. [step 2.1, algebra] ∎

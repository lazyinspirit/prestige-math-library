---
id: ex-a-flat-nonprojective-module
title: "A flat nonprojective module"
kind: example
status: published
origin: pipeline
deps: ["prop-torsion-free-abelian-groups-are-flat", "fs-flat-modules-have-projective-dimension-zero"]
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
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Example

The $\mathbb Z$-module $\mathbb Q$ is flat but not projective. No Axiom of Choice is needed for this example.

## Verification

**Given:** the usual additive group $\mathbb Q$, with its integer scalar action.

1.1 No nonzero integer annihilates a nonzero rational number, so $\mathbb Q$ is torsion-free. [given]

1.2 The specific choice-free counterinstance in [[fs-flat-modules-have-projective-dimension-zero]] proves that $\mathbb Q$ is not projective: every homomorphism $\mathbb Q\to\mathbb Z$ is zero, so a section of the canonical free cover would have every coordinate zero and could not be a section. Its proof does not assume arbitrary projective abelian groups are free. [given]

2.1 By [[prop-torsion-free-abelian-groups-are-flat]], step 1.1 makes $\mathbb Q$ flat. Together with step 1.2 this verifies the stated example with both premises supplied choice-free. [step 1.1, step 1.2, algebra] ∎

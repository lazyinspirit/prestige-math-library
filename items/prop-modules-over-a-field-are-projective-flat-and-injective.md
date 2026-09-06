---
id: prop-modules-over-a-field-are-projective-flat-and-injective
title: "Modules over a field are projective, flat, and injective"
kind: proposition
status: published
origin: pipeline
deps: ["def-field", "cor-every-vector-space-has-a-basis", "cor-free-modules-are-projective-and-flat", "thm-injective-modules-over-a-pid-are-exactly-divisible"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Assume the Axiom of Choice.
Every module over a field $k$ is free, hence projective and flat, and is also injective.

## Proof

**Given:** a $k$-vector space $V$, under Choice.

1.1 By [[cor-every-vector-space-has-a-basis]], Choice supplies a basis of $V$. It identifies $V$ with a direct sum of copies of $k$, so $V$ is free and therefore projective and flat. [given]

2.1 Under Choice a subspace has a vector-space complement. Therefore every map from a subspace into $V$ extends across an inclusion, which is the injectivity criterion. [step 1.1, construct] ∎
